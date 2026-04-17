import { NextResponse } from 'next/server';
import { query } from '../../../lib/db';

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
}

async function createTableIfNeeded() {
  await query(`
    CREATE TABLE IF NOT EXISTS contact_enquiries (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );
  `);
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;

    if (!payload.name || !payload.email || !payload.phone || !payload.message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    await createTableIfNeeded();

    await query(
      'INSERT INTO contact_enquiries (name, email, phone, message) VALUES ($1, $2, $3, $4)',
      [payload.name, payload.email, payload.phone, payload.message]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Unable to submit enquiry.' }, { status: 500 });
  }
}
