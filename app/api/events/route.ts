import { NextResponse } from 'next/server';
import { query } from '../../../lib/db';

interface EventPayload {
  title: string;
  date: string;
  location?: string;
  type?: string;
  description?: string;
  image_url?: string;
  is_featured?: boolean;
}

async function createTableIfNeeded() {
  await query(`
    CREATE TABLE IF NOT EXISTS events (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      date TEXT NOT NULL,
      location TEXT,
      type TEXT,
      description TEXT,
      image_url TEXT,
      is_featured BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );
  `);
}

// GET - Fetch all events or a specific event
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const type = searchParams.get('type');
    const featured = searchParams.get('featured');
    
    await createTableIfNeeded();

    if (id) {
      const result = await query('SELECT * FROM events WHERE id = $1', [id]);
      if (result.rows.length === 0) {
        return NextResponse.json({ error: 'Event not found' }, { status: 404 });
      }
      return NextResponse.json(result.rows[0]);
    }

    let queryText = 'SELECT * FROM events';
    let queryParams: any[] = [];
    const conditions: string[] = [];

    if (type) {
      conditions.push('type = $' + (queryParams.length + 1));
      queryParams.push(type);
    }

    if (featured === 'true') {
      conditions.push('is_featured = true');
    }

    if (conditions.length > 0) {
      queryText += ' WHERE ' + conditions.join(' AND ');
    }

    queryText += ' ORDER BY date DESC';

    const result = await query(queryText, queryParams);
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Events GET error:', error);
    return NextResponse.json({ error: 'Unable to fetch events' }, { status: 500 });
  }
}

// POST - Create a new event
export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as EventPayload;

    if (!payload.title || !payload.date) {
      return NextResponse.json({ error: 'Title and date are required' }, { status: 400 });
    }

    await createTableIfNeeded();

    const result = await query(
      `INSERT INTO events (title, date, location, type, description, image_url, is_featured) 
       VALUES ($1, $2, $3, $4, $5, $6, $7) 
       RETURNING *`,
      [payload.title, payload.date, payload.location, payload.type, payload.description, payload.image_url, payload.is_featured || false]
    );

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Events POST error:', error);
    return NextResponse.json({ error: 'Unable to create event' }, { status: 500 });
  }
}

// PUT - Update an event
export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Event ID is required' }, { status: 400 });
    }

    const payload = (await request.json()) as EventPayload;

    await createTableIfNeeded();

    const result = await query(
      `UPDATE events 
       SET title = $1, date = $2, location = $3, type = $4, description = $5, image_url = $6, is_featured = $7, updated_at = NOW()
       WHERE id = $8 
       RETURNING *`,
      [payload.title, payload.date, payload.location, payload.type, payload.description, payload.image_url, payload.is_featured, id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Events PUT error:', error);
    return NextResponse.json({ error: 'Unable to update event' }, { status: 500 });
  }
}

// DELETE - Delete an event
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Event ID is required' }, { status: 400 });
    }

    const result = await query('DELETE FROM events WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Events DELETE error:', error);
    return NextResponse.json({ error: 'Unable to delete event' }, { status: 500 });
  }
}
