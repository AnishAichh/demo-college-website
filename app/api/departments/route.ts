import { NextResponse } from 'next/server';
import { query } from '../../../lib/db';

interface DepartmentPayload {
  name: string;
  code: string;
  icon?: string;
  description?: string;
  students_count?: string;
  labs_count?: number;
  image_url?: string;
}

async function createTableIfNeeded() {
  await query(`
    CREATE TABLE IF NOT EXISTS departments (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL UNIQUE,
      code TEXT NOT NULL UNIQUE,
      icon TEXT,
      description TEXT,
      students_count TEXT,
      labs_count INTEGER,
      image_url TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );
  `);
}

// GET - Fetch all departments or a specific department
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    await createTableIfNeeded();

    if (id) {
      const result = await query('SELECT * FROM departments WHERE id = $1', [id]);
      if (result.rows.length === 0) {
        return NextResponse.json({ error: 'Department not found' }, { status: 404 });
      }
      return NextResponse.json(result.rows[0]);
    }

    const result = await query('SELECT * FROM departments ORDER BY name ASC');
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Departments GET error:', error);
    return NextResponse.json({ error: 'Unable to fetch departments' }, { status: 500 });
  }
}

// POST - Create a new department
export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as DepartmentPayload;

    if (!payload.name || !payload.code) {
      return NextResponse.json({ error: 'Name and code are required' }, { status: 400 });
    }

    await createTableIfNeeded();

    const result = await query(
      `INSERT INTO departments (name, code, icon, description, students_count, labs_count, image_url) 
       VALUES ($1, $2, $3, $4, $5, $6, $7) 
       RETURNING *`,
      [payload.name, payload.code, payload.icon, payload.description, payload.students_count, payload.labs_count, payload.image_url]
    );

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Departments POST error:', error);
    if (error instanceof Error && error.message.includes('duplicate key')) {
      return NextResponse.json({ error: 'Department with this name or code already exists' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Unable to create department' }, { status: 500 });
  }
}

// PUT - Update a department
export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Department ID is required' }, { status: 400 });
    }

    const payload = (await request.json()) as DepartmentPayload;

    await createTableIfNeeded();

    const result = await query(
      `UPDATE departments 
       SET name = $1, code = $2, icon = $3, description = $4, students_count = $5, labs_count = $6, image_url = $7, updated_at = NOW()
       WHERE id = $8 
       RETURNING *`,
      [payload.name, payload.code, payload.icon, payload.description, payload.students_count, payload.labs_count, payload.image_url, id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Department not found' }, { status: 404 });
    }

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Departments PUT error:', error);
    if (error instanceof Error && error.message.includes('duplicate key')) {
      return NextResponse.json({ error: 'Department with this name or code already exists' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Unable to update department' }, { status: 500 });
  }
}

// DELETE - Delete a department
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Department ID is required' }, { status: 400 });
    }

    const result = await query('DELETE FROM departments WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Department not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Department deleted successfully' });
  } catch (error) {
    console.error('Departments DELETE error:', error);
    if (error instanceof Error && error.message.includes('violates foreign key constraint')) {
      return NextResponse.json({ error: 'Cannot delete department: it is referenced by other records' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Unable to delete department' }, { status: 500 });
  }
}
