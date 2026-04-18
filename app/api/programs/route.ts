import { NextResponse } from 'next/server';
import { query } from '../../../lib/db';

interface ProgramPayload {
  title: string;
  subtitle?: string;
  type: string;
  icon?: string;
  color?: string;
  description?: string;
  duration?: string;
  eligibility?: string;
  department_ids?: number[];
}

async function createTablesIfNeeded() {
  await query(`
    CREATE TABLE IF NOT EXISTS programs (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      subtitle TEXT,
      type TEXT NOT NULL,
      icon TEXT,
      color TEXT,
      description TEXT,
      duration TEXT,
      eligibility TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );
  `);

  await query(`
    CREATE TABLE IF NOT EXISTS program_departments (
      id SERIAL PRIMARY KEY,
      program_id INTEGER REFERENCES programs(id) ON DELETE CASCADE,
      department_id INTEGER REFERENCES departments(id) ON DELETE CASCADE,
      UNIQUE(program_id, department_id)
    );
  `);
}

// GET - Fetch all programs or a specific program
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const type = searchParams.get('type');
    
    await createTablesIfNeeded();

    if (id) {
      const result = await query(`
        SELECT p.*, array_agg(d.name) as departments 
        FROM programs p 
        LEFT JOIN program_departments pd ON p.id = pd.program_id 
        LEFT JOIN departments d ON pd.department_id = d.id 
        WHERE p.id = $1 
        GROUP BY p.id
      `, [id]);
      
      if (result.rows.length === 0) {
        return NextResponse.json({ error: 'Program not found' }, { status: 404 });
      }
      return NextResponse.json(result.rows[0]);
    }

    let queryText = `
      SELECT p.*, array_agg(d.name) as departments 
      FROM programs p 
      LEFT JOIN program_departments pd ON p.id = pd.program_id 
      LEFT JOIN departments d ON pd.department_id = d.id 
    `;
    let queryParams: any[] = [];

    if (type) {
      queryText += ' WHERE p.type = $1';
      queryParams.push(type);
    }

    queryText += ' GROUP BY p.id ORDER BY p.title ASC';

    const result = await query(queryText, queryParams);
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Programs GET error:', error);
    return NextResponse.json({ error: 'Unable to fetch programs' }, { status: 500 });
  }
}

// POST - Create a new program
export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ProgramPayload;

    if (!payload.title || !payload.type) {
      return NextResponse.json({ error: 'Title and type are required' }, { status: 400 });
    }

    await createTablesIfNeeded();

    const client = await query('BEGIN');
    
    try {
      const result = await query(
        `INSERT INTO programs (title, subtitle, type, icon, color, description, duration, eligibility) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
         RETURNING *`,
        [payload.title, payload.subtitle, payload.type, payload.icon, payload.color, payload.description, payload.duration, payload.eligibility]
      );

      const program = result.rows[0];

      if (payload.department_ids && payload.department_ids.length > 0) {
        for (const deptId of payload.department_ids) {
          await query(
            'INSERT INTO program_departments (program_id, department_id) VALUES ($1, $2)',
            [program.id, deptId]
          );
        }
      }

      await query('COMMIT');
      return NextResponse.json(program, { status: 201 });
    } catch (error) {
      await query('ROLLBACK');
      throw error;
    }
  } catch (error) {
    console.error('Programs POST error:', error);
    return NextResponse.json({ error: 'Unable to create program' }, { status: 500 });
  }
}

// PUT - Update a program
export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Program ID is required' }, { status: 400 });
    }

    const payload = (await request.json()) as ProgramPayload;

    await createTablesIfNeeded();

    const client = await query('BEGIN');
    
    try {
      const result = await query(
        `UPDATE programs 
         SET title = $1, subtitle = $2, type = $3, icon = $4, color = $5, description = $6, duration = $7, eligibility = $8, updated_at = NOW()
         WHERE id = $9 
         RETURNING *`,
        [payload.title, payload.subtitle, payload.type, payload.icon, payload.color, payload.description, payload.duration, payload.eligibility, id]
      );

      if (result.rows.length === 0) {
        await query('ROLLBACK');
        return NextResponse.json({ error: 'Program not found' }, { status: 404 });
      }

      if (payload.department_ids !== undefined) {
        await query('DELETE FROM program_departments WHERE program_id = $1', [id]);
        
        if (payload.department_ids.length > 0) {
          for (const deptId of payload.department_ids) {
            await query(
              'INSERT INTO program_departments (program_id, department_id) VALUES ($1, $2)',
              [id, deptId]
            );
          }
        }
      }

      await query('COMMIT');
      return NextResponse.json(result.rows[0]);
    } catch (error) {
      await query('ROLLBACK');
      throw error;
    }
  } catch (error) {
    console.error('Programs PUT error:', error);
    return NextResponse.json({ error: 'Unable to update program' }, { status: 500 });
  }
}

// DELETE - Delete a program
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Program ID is required' }, { status: 400 });
    }

    const result = await query('DELETE FROM programs WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Program not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Program deleted successfully' });
  } catch (error) {
    console.error('Programs DELETE error:', error);
    return NextResponse.json({ error: 'Unable to delete program' }, { status: 500 });
  }
}
