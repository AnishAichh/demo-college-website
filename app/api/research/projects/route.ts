import { NextResponse } from 'next/server';
import { query } from '../../../../lib/db';

interface ResearchProjectPayload {
  title: string;
  description?: string;
  area_id?: number;
  funding_source?: string;
  status?: string;
  start_date?: string;
  end_date?: string;
  image_url?: string;
}

async function createTablesIfNeeded() {
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

  await query(`
    CREATE TABLE IF NOT EXISTS research_projects (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      area_id INTEGER REFERENCES research_areas(id) ON DELETE CASCADE,
      funding_source TEXT,
      status TEXT,
      start_date DATE,
      end_date DATE,
      image_url TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );
  `);
}

// GET - Fetch all research projects or a specific project
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const areaId = searchParams.get('area_id');
    const status = searchParams.get('status');
    
    await createTablesIfNeeded();

    if (id) {
      const result = await query(`
        SELECT rp.*, ra.title as area_title 
        FROM research_projects rp 
        LEFT JOIN research_areas ra ON rp.area_id = ra.id 
        WHERE rp.id = $1
      `, [id]);
      
      if (result.rows.length === 0) {
        return NextResponse.json({ error: 'Research project not found' }, { status: 404 });
      }
      return NextResponse.json(result.rows[0]);
    }

    let queryText = `
      SELECT rp.*, ra.title as area_title 
      FROM research_projects rp 
      LEFT JOIN research_areas ra ON rp.area_id = ra.id
    `;
    let queryParams: any[] = [];
    const conditions: string[] = [];

    if (areaId) {
      conditions.push('rp.area_id = $' + (queryParams.length + 1));
      queryParams.push(areaId);
    }

    if (status) {
      conditions.push('rp.status = $' + (queryParams.length + 1));
      queryParams.push(status);
    }

    if (conditions.length > 0) {
      queryText += ' WHERE ' + conditions.join(' AND ');
    }

    queryText += ' ORDER BY rp.created_at DESC';

    const result = await query(queryText, queryParams);
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Research projects GET error:', error);
    return NextResponse.json({ error: 'Unable to fetch research projects' }, { status: 500 });
  }
}

// POST - Create a new research project
export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ResearchProjectPayload;

    if (!payload.title) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }

    await createTablesIfNeeded();

    const result = await query(
      `INSERT INTO research_projects (title, description, area_id, funding_source, status, start_date, end_date, image_url) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
       RETURNING *`,
      [
        payload.title,
        payload.description,
        payload.area_id,
        payload.funding_source,
        payload.status || 'ongoing',
        payload.start_date,
        payload.end_date,
        payload.image_url
      ]
    );

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Research projects POST error:', error);
    if (error instanceof Error && error.message.includes('violates foreign key constraint')) {
      return NextResponse.json({ error: 'Invalid research area ID' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Unable to create research project' }, { status: 500 });
  }
}

// PUT - Update a research project
export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Research project ID is required' }, { status: 400 });
    }

    const payload = (await request.json()) as ResearchProjectPayload;

    await createTablesIfNeeded();

    const result = await query(
      `UPDATE research_projects 
       SET title = $1, description = $2, area_id = $3, funding_source = $4, status = $5, start_date = $6, end_date = $7, image_url = $8, updated_at = NOW()
       WHERE id = $9 
       RETURNING *`,
      [
        payload.title,
        payload.description,
        payload.area_id,
        payload.funding_source,
        payload.status,
        payload.start_date,
        payload.end_date,
        payload.image_url,
        id
      ]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Research project not found' }, { status: 404 });
    }

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Research projects PUT error:', error);
    if (error instanceof Error && error.message.includes('violates foreign key constraint')) {
      return NextResponse.json({ error: 'Invalid research area ID' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Unable to update research project' }, { status: 500 });
  }
}

// DELETE - Delete a research project
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Research project ID is required' }, { status: 400 });
    }

    const result = await query('DELETE FROM research_projects WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Research project not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Research project deleted successfully' });
  } catch (error) {
    console.error('Research projects DELETE error:', error);
    return NextResponse.json({ error: 'Unable to delete research project' }, { status: 500 });
  }
}
