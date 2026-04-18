import { NextResponse } from 'next/server';
import { query } from '../../../lib/db';

interface NewsPayload {
  title: string;
  date: string;
  category?: string;
  description?: string;
  image_url?: string;
  is_featured?: boolean;
}

async function createTableIfNeeded() {
  await query(`
    CREATE TABLE IF NOT EXISTS news (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      date TEXT NOT NULL,
      category TEXT,
      description TEXT,
      image_url TEXT,
      is_featured BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );
  `);
}

// GET - Fetch all news or a specific news item
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const category = searchParams.get('category');
    const featured = searchParams.get('featured');
    
    await createTableIfNeeded();

    if (id) {
      const result = await query('SELECT * FROM news WHERE id = $1', [id]);
      if (result.rows.length === 0) {
        return NextResponse.json({ error: 'News item not found' }, { status: 404 });
      }
      return NextResponse.json(result.rows[0]);
    }

    let queryText = 'SELECT * FROM news';
    let queryParams: any[] = [];
    const conditions: string[] = [];

    if (category) {
      conditions.push('category = $' + (queryParams.length + 1));
      queryParams.push(category);
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
    console.error('News GET error:', error);
    return NextResponse.json({ error: 'Unable to fetch news' }, { status: 500 });
  }
}

// POST - Create a new news item
export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as NewsPayload;

    if (!payload.title || !payload.date) {
      return NextResponse.json({ error: 'Title and date are required' }, { status: 400 });
    }

    await createTableIfNeeded();

    const result = await query(
      `INSERT INTO news (title, date, category, description, image_url, is_featured) 
       VALUES ($1, $2, $3, $4, $5, $6) 
       RETURNING *`,
      [payload.title, payload.date, payload.category, payload.description, payload.image_url, payload.is_featured || false]
    );

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('News POST error:', error);
    return NextResponse.json({ error: 'Unable to create news item' }, { status: 500 });
  }
}

// PUT - Update a news item
export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'News ID is required' }, { status: 400 });
    }

    const payload = (await request.json()) as NewsPayload;

    await createTableIfNeeded();

    const result = await query(
      `UPDATE news 
       SET title = $1, date = $2, category = $3, description = $4, image_url = $5, is_featured = $6, updated_at = NOW()
       WHERE id = $7 
       RETURNING *`,
      [payload.title, payload.date, payload.category, payload.description, payload.image_url, payload.is_featured, id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'News item not found' }, { status: 404 });
    }

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('News PUT error:', error);
    return NextResponse.json({ error: 'Unable to update news item' }, { status: 500 });
  }
}

// DELETE - Delete a news item
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'News ID is required' }, { status: 400 });
    }

    const result = await query('DELETE FROM news WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'News item not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'News item deleted successfully' });
  } catch (error) {
    console.error('News DELETE error:', error);
    return NextResponse.json({ error: 'Unable to delete news item' }, { status: 500 });
  }
}
