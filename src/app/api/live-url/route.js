// // app/api/live-url/route.js
// import { NextResponse } from 'next/server';
// import fs from 'fs';
// import path from 'path';

// // File path to store URL (shared across all users)
// const dataFilePath = path.join(process.cwd(), 'live-url.txt');

// // GET - Fetch current live URL
// export async function GET() {
//   try {
//     if (fs.existsSync(dataFilePath)) {
//       const url = fs.readFileSync(dataFilePath, 'utf8');
//       return NextResponse.json({ url: url });
//     } else {
//       return NextResponse.json({ url: '' });
//     }
//   } catch (error) {
//     console.error('GET Error:', error);
//     return NextResponse.json({ url: '' }, { status: 500 });
//   }
// }

// // POST - Update live URL
// export async function POST(request) {
//   try {
//     const { url } = await request.json();
//     fs.writeFileSync(dataFilePath, url, 'utf8');
//     return NextResponse.json({ success: true, url: url });
//   } catch (error) {
//     console.error('POST Error:', error);
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }

// app/api/live-url/route.js
import { NextResponse } from "next/server";

// API endpoint to fetch feeds
const FEED_API_URL =
  "https://partnerservice-stage.jesusredeems.com/jrms/v1/feed/home";

// GET - Fetch current live URL from API
export async function GET() {
  try {
    const response = await fetch(FEED_API_URL);

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();

    // Find the VBS feed
    const vbsFeed = data.feedList.find(
      (feed) =>
        feed.feedName.toLowerCase() === "vbs" && feed.feedType === "Media",
    );

    // Return the URL if available, otherwise null
    const liveUrl = vbsFeed && vbsFeed.feedUrl ? vbsFeed.feedUrl : null;

    return NextResponse.json({ url: liveUrl });
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json({ url: null }, { status: 500 });
  }
}

// POST - No longer needed since we're fetching from API
export async function POST(request) {
  return NextResponse.json(
    {
      success: false,
      error: "This endpoint is read-only now - data fetched from API",
    },
    { status: 405 },
  );
}
