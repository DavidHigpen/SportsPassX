// app/api/image-proxy/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const imageUrl = req.nextUrl.searchParams.get('url');

  if (!imageUrl) {
    return NextResponse.json({ error: 'Missing url parameter' }, { status: 400 });
  }

  try {
    const response = await fetch(imageUrl, { cache: 'no-store' });

    if (!response.ok || !response.body) {
      return NextResponse.json({ error: 'Failed to fetch image' }, { status: 500 });
    }

    const contentType = response.headers.get('content-type') || 'image/jpeg';

    return new NextResponse(response.body, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (err) {
    return NextResponse.json({ error: 'Fetch failed' }, { status: 500 });
  }
}
