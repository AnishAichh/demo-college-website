import { NextResponse } from 'next/server';
import { query } from '../../../../lib/db';

interface ResearchAreaPayload {
  title: string;
  description?: string;
  icon?: string;
  image_url?: string;
  is_featured?: boolean;
}

async function createTableIfNeeded() {
  await query(`
    CREATE TABLE IF NOT EXISTS research_areas (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      icon TEXT,
      image_url TEXT,
      is_featured BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );
  `);
}

// GET - Fetch all research areas or a specific area
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const featured = searchParams.get('featured');
    
    await createTableIfNeeded();

    if (id) {
      const result = await query(`
        SELECT ra.*, COUNT(rp.id) as project_count 
        FROM research_areas ra 
        LEFT JOIN research_projects rp ON ra.id = rp.area_id 
        WHERE ra.id = $1 
        GROUP BY ra.id
      `, [id]);
      
      if (result.rows.length === 0) {
        return NextResponse.json({ error: 'Research area not found' }, { status: 404 });
      }
      return NextResponse.json(result.rows[0]);
    }

    let queryText = `
      SELECT ra.*, COUNT(rp.id) as project_count 
      FROM research_areas ra 
      LEFT JOIN research_projects rp ON ra.id = rp.area_id
    `;
    let queryParams: any[] = [];

    if (featured === 'true') {
      queryText += ' WHERE ra.is_featured = true';
    }

    queryText += ' GROUP BY ra.id ORDER BY ra.title ASC';

    const result = await query(queryText, queryParams);
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Research areas GET error:', error);
    return NextResponse.json({ error: 'Unable to fetch research areas' }, { status: 500 });
  }
}

// POST - Create a new research area
export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ResearchAreaPayload;

    if (!payload.title) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }

    await createTableIfNeeded();

    const result = await query(
      `INSERT INTO research_areas (title, description, icon, image_url, is_featured) 
       VALUES ($1, $2, $3, $4, $5) 
       RETURNING *`,
      [payload.title, payload.description, payload.icon, payload.image_url, payload.is_featured || false]
    );

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Research areas POST error:', error);
    return NextResponse.json({ error: 'Unable to create research area' }, { status: 500 });
  }
}

// PUT - Update a research area
export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Research area ID is required' }, { status: 400 });
    }

    const payload = (await request.json()) as ResearchAreaPayload;

    await createTableIfNeeded();

    const result = await query(
      `UPDATE research_areas 
       SET title = $1, description = $2, icon = $3, image_url = $4, is_featured = $5, updated_at = NOW()
       WHERE id = $6 
       RETURNING *`,
      [payload.title, payload.description, payload.icon, payload.image_url, payload.is_featured, id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Research area not found' }, { status: 404 });
    }

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Research areas PUT error:', error);
    return NextResponse.json({ error: 'Unable to update research area' }, { status: 500 });
  }
}

// DELETE - Delete a research area
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Research area ID is required' }, { status: 400 });
    }

    const result = await query('DELETE FROM research_areas WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Research area not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Research area deleted successfully' });
  } catch (error) {
    console.error('Research areas DELETE error:', error);
    if (error instanceof Error && error.message.includes('violates foreign key constraint')) {
      return NextResponse.json({ error: 'Cannot delete research area: it has associated projects' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Unable to delete research area' }, { status: 500 });
  }
}
