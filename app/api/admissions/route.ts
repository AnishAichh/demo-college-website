import { NextResponse } from 'next/server';
import { query } from '../../../lib/db';

interface AdmissionPayload {
  name: string;
  email: string;
  phone: string;
  program: string;
  message?: string;
}

async function createTableIfNeeded() {
  await query(`
    CREATE TABLE IF NOT EXISTS admissions (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      program TEXT NOT NULL,
      message TEXT,
      status TEXT DEFAULT 'pending',
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );
  `);
}

// GET - Fetch all admissions or a specific admission
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const status = searchParams.get('status');
    
    await createTableIfNeeded();

    if (id) {
      const result = await query('SELECT * FROM admissions WHERE id = $1', [id]);
      if (result.rows.length === 0) {
        return NextResponse.json({ error: 'Admission not found' }, { status: 404 });
      }
      return NextResponse.json(result.rows[0]);
    }

    let queryText = 'SELECT * FROM admissions';
    let queryParams: any[] = [];

    if (status) {
      queryText += ' WHERE status = $1';
      queryParams.push(status);
    }

    queryText += ' ORDER BY created_at DESC';

    const result = await query(queryText, queryParams);
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Admissions GET error:', error);
    return NextResponse.json({ error: 'Unable to fetch admissions' }, { status: 500 });
  }
}

// POST - Create a new admission application
export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as AdmissionPayload;

    if (!payload.name || !payload.email || !payload.phone || !payload.program) {
      return NextResponse.json({ error: 'All fields except message are required' }, { status: 400 });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(payload.email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    await createTableIfNeeded();

    const result = await query(
      `INSERT INTO admissions (name, email, phone, program, message) 
       VALUES ($1, $2, $3, $4, $5) 
       RETURNING *`,
      [payload.name, payload.email, payload.phone, payload.program, payload.message]
    );

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Admissions POST error:', error);
    return NextResponse.json({ error: 'Unable to submit admission application' }, { status: 500 });
  }
}

// PUT - Update admission status
export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Admission ID is required' }, { status: 400 });
    }

    const payload = await request.json();
    const { status } = payload;

    if (!status || !['pending', 'approved', 'rejected'].includes(status)) {
      return NextResponse.json({ error: 'Valid status (pending, approved, rejected) is required' }, { status: 400 });
    }

    await createTableIfNeeded();

    const result = await query(
      `UPDATE admissions 
       SET status = $1, updated_at = NOW()
       WHERE id = $2 
       RETURNING *`,
      [status, id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Admission not found' }, { status: 404 });
    }

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Admissions PUT error:', error);
    return NextResponse.json({ error: 'Unable to update admission' }, { status: 500 });
  }
}

// DELETE - Delete an admission
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Admission ID is required' }, { status: 400 });
    }

    const result = await query('DELETE FROM admissions WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Admission not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Admission deleted successfully' });
  } catch (error) {
    console.error('Admissions DELETE error:', error);
    return NextResponse.json({ error: 'Unable to delete admission' }, { status: 500 });
  }
}
