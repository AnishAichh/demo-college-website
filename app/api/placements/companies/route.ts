import { NextResponse } from 'next/server';
import { query } from '../../../../lib/db';

interface CompanyPayload {
  name: string;
  logo_url?: string;
  website?: string;
  description?: string;
  is_top_tier?: boolean;
}

async function createTableIfNeeded() {
  await query(`
    CREATE TABLE IF NOT EXISTS placement_companies (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL UNIQUE,
      logo_url TEXT,
      website TEXT,
      description TEXT,
      is_top_tier BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );
  `);
}

// GET - Fetch all companies or a specific company
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const topTier = searchParams.get('top_tier');
    
    await createTableIfNeeded();

    if (id) {
      const result = await query('SELECT * FROM placement_companies WHERE id = $1', [id]);
      if (result.rows.length === 0) {
        return NextResponse.json({ error: 'Company not found' }, { status: 404 });
      }
      return NextResponse.json(result.rows[0]);
    }

    let queryText = 'SELECT * FROM placement_companies';
    let queryParams: any[] = [];

    if (topTier === 'true') {
      queryText += ' WHERE is_top_tier = true';
    }

    queryText += ' ORDER BY name ASC';

    const result = await query(queryText, queryParams);
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Placement companies GET error:', error);
    return NextResponse.json({ error: 'Unable to fetch companies' }, { status: 500 });
  }
}

// POST - Create a new company
export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as CompanyPayload;

    if (!payload.name) {
      return NextResponse.json({ error: 'Company name is required' }, { status: 400 });
    }

    await createTableIfNeeded();

    const result = await query(
      `INSERT INTO placement_companies (name, logo_url, website, description, is_top_tier) 
       VALUES ($1, $2, $3, $4, $5) 
       RETURNING *`,
      [payload.name, payload.logo_url, payload.website, payload.description, payload.is_top_tier || false]
    );

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Placement companies POST error:', error);
    if (error instanceof Error && error.message.includes('duplicate key')) {
      return NextResponse.json({ error: 'Company with this name already exists' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Unable to create company' }, { status: 500 });
  }
}

// PUT - Update a company
export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Company ID is required' }, { status: 400 });
    }

    const payload = (await request.json()) as CompanyPayload;

    await createTableIfNeeded();

    const result = await query(
      `UPDATE placement_companies 
       SET name = $1, logo_url = $2, website = $3, description = $4, is_top_tier = $5, updated_at = NOW()
       WHERE id = $6 
       RETURNING *`,
      [payload.name, payload.logo_url, payload.website, payload.description, payload.is_top_tier, id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Company not found' }, { status: 404 });
    }

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Placement companies PUT error:', error);
    if (error instanceof Error && error.message.includes('duplicate key')) {
      return NextResponse.json({ error: 'Company with this name already exists' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Unable to update company' }, { status: 500 });
  }
}

// DELETE - Delete a company
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Company ID is required' }, { status: 400 });
    }

    const result = await query('DELETE FROM placement_companies WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Company not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Company deleted successfully' });
  } catch (error) {
    console.error('Placement companies DELETE error:', error);
    return NextResponse.json({ error: 'Unable to delete company' }, { status: 500 });
  }
}
