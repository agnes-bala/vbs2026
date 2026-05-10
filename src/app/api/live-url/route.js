// app/api/live-url/route.js
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// File path to store URL (shared across all users)
const dataFilePath = path.join(process.cwd(), 'live-url.txt');

// GET - Fetch current live URL
export async function GET() {
  try {
    if (fs.existsSync(dataFilePath)) {
      const url = fs.readFileSync(dataFilePath, 'utf8');
      return NextResponse.json({ url: url });
    } else {
      return NextResponse.json({ url: '' });
    }
  } catch (error) {
    console.error('GET Error:', error);
    return NextResponse.json({ url: '' }, { status: 500 });
  }
}

// POST - Update live URL
export async function POST(request) {
  try {
    const { url } = await request.json();
    fs.writeFileSync(dataFilePath, url, 'utf8');
    return NextResponse.json({ success: true, url: url });
  } catch (error) {
    console.error('POST Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}