import { NextResponse } from 'next/server';
import { query } from '../../../../lib/db';

interface PlacementStatsPayload {
  placement_percentage: number;
  highest_package: string;
  average_package: string;
  total_recruiters: number;
  academic_year: string;
}

async function createTableIfNeeded() {
  await query(`
    CREATE TABLE IF NOT EXISTS placement_stats (
      id SERIAL PRIMARY KEY,
      placement_percentage DECIMAL(5,2),
      highest_package TEXT,
      average_package TEXT,
      total_recruiters INTEGER,
      academic_year TEXT NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );
  `);
}

// GET - Fetch all placement stats or specific year stats
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const year = searchParams.get('year');
    
    await createTableIfNeeded();

    if (id) {
      const result = await query('SELECT * FROM placement_stats WHERE id = $1', [id]);
      if (result.rows.length === 0) {
        return NextResponse.json({ error: 'Placement stats not found' }, { status: 404 });
      }
      return NextResponse.json(result.rows[0]);
    }

    if (year) {
      const result = await query('SELECT * FROM placement_stats WHERE academic_year = $1', [year]);
      if (result.rows.length === 0) {
        return NextResponse.json({ error: 'Placement stats for this year not found' }, { status: 404 });
      }
      return NextResponse.json(result.rows[0]);
    }

    const result = await query('SELECT * FROM placement_stats ORDER BY academic_year DESC');
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Placement stats GET error:', error);
    return NextResponse.json({ error: 'Unable to fetch placement stats' }, { status: 500 });
  }
}

// POST - Create new placement stats
export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as PlacementStatsPayload;

    if (!payload.academic_year) {
      return NextResponse.json({ error: 'Academic year is required' }, { status: 400 });
    }

    await createTableIfNeeded();

    const result = await query(
      `INSERT INTO placement_stats (placement_percentage, highest_package, average_package, total_recruiters, academic_year) 
       VALUES ($1, $2, $3, $4, $5) 
       RETURNING *`,
      [payload.placement_percentage, payload.highest_package, payload.average_package, payload.total_recruiters, payload.academic_year]
    );

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Placement stats POST error:', error);
    return NextResponse.json({ error: 'Unable to create placement stats' }, { status: 500 });
  }
}

// PUT - Update placement stats
export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Placement stats ID is required' }, { status: 400 });
    }

    const payload = (await request.json()) as PlacementStatsPayload;

    await createTableIfNeeded();

    const result = await query(
      `UPDATE placement_stats 
       SET placement_percentage = $1, highest_package = $2, average_package = $3, total_recruiters = $4, academic_year = $5, updated_at = NOW()
       WHERE id = $6 
       RETURNING *`,
      [payload.placement_percentage, payload.highest_package, payload.average_package, payload.total_recruiters, payload.academic_year, id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Placement stats not found' }, { status: 404 });
    }

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Placement stats PUT error:', error);
    return NextResponse.json({ error: 'Unable to update placement stats' }, { status: 500 });
  }
}

// DELETE - Delete placement stats
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Placement stats ID is required' }, { status: 400 });
    }

    const result = await query('DELETE FROM placement_stats WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Placement stats not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Placement stats deleted successfully' });
  } catch (error) {
    console.error('Placement stats DELETE error:', error);
    return NextResponse.json({ error: 'Unable to delete placement stats' }, { status: 500 });
  }
}
