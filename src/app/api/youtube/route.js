// // app/api/youtube/route.js
// import { NextResponse } from 'next/server';

// export async function GET() {
//   const API_KEY = "AIzaSyCqymPQM4ReGwaT5t4XLYXc2gDAYc5KNeA";
//   const CHANNEL_ID = "UCY1Ef5pTtHo9FfZoAntv8og";

//   try {
//     const url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=${CHANNEL_ID}&maxResults=50&key=${API_KEY}`;
//     const response = await fetch(url);
//     const data = await response.json();
    
//     if (data.error) {
//       return NextResponse.json({ 
//         error: data.error.message, 
//         playlists: []
//       });
//     }
    
//     return NextResponse.json({ 
//       success: true,
//       playlists: data.items || [],
//       totalResults: data.pageInfo?.totalResults || 0
//     });
    
//   } catch (error) {
//     return NextResponse.json({ 
//       error: error.message, 
//       playlists: []
//     });
//   }
// }










// app/api/youtube/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  const API_KEY = "AIzaSyCqymPQM4ReGwaT5t4XLYXc2gDAYc5KNeA";
  const CHANNEL_ID = "UCY1Ef5pTtHo9FfZoAntv8og";

  try {
    const url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=${CHANNEL_ID}&maxResults=50&key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.error) {
      return NextResponse.json({ 
        error: data.error.message, 
        playlists: []
      });
    }
    
    // Filter out playlists with 0 videos
    const filteredPlaylists = data.items?.filter(playlist => {
      const videoCount = playlist.contentDetails?.itemCount || 0;
      return videoCount > 0; // Only keep playlists with at least 1 video
    }) || [];
    
    console.log(`Original: ${data.items?.length || 0} playlists`);
    console.log(`Filtered: ${filteredPlaylists.length} playlists (removed empty ones)`);
    
    return NextResponse.json({ 
      success: true,
      playlists: filteredPlaylists,
      totalResults: filteredPlaylists.length,
      removedCount: (data.items?.length || 0) - filteredPlaylists.length
    });
    
  } catch (error) {
    return NextResponse.json({ 
      error: error.message, 
      playlists: []
    });
  }
}