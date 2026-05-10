// // app/live-now/page.js
// 'use client';

// import { Container, Typography, Box, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions, Alert } from '@mui/material';
// import { useState, useEffect, useRef } from 'react';

// export default function LiveNowPage() {
//   const [clickCount, setClickCount] = useState(0);
//   const [textClickCount, setTextClickCount] = useState(0); // For text clicks
//   const [showPasswordDialog, setShowPasswordDialog] = useState(false);
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [liveUrl, setLiveUrl] = useState('');
//   const [showLiveVideo, setShowLiveVideo] = useState(false);
//   const [lastClickTime, setLastClickTime] = useState(0);
//   const [lastTextClickTime, setLastTextClickTime] = useState(0);

//   // Secret password - Change this!
//   const SECRET_PASSWORD = "***";

//   // Load saved live URL from localStorage on mount
//   useEffect(() => {
//     const savedUrl = localStorage.getItem('liveStreamUrl');
//     if (savedUrl) {
//       setLiveUrl(savedUrl);
//       setShowLiveVideo(true);
//     }
//   }, []);

//   // Save URL to localStorage when set
//   const saveLiveUrl = (url) => {
//     localStorage.setItem('liveStreamUrl', url);
//     setLiveUrl(url);
//     setShowLiveVideo(true);
//   };

//   // Hidden admin access on video area - 15 clicks
//   const handleHiddenAdminClick = () => {
//     const now = Date.now();
//     if (now - lastClickTime > 3000) {
//       setClickCount(1);
//     } else {
//       setClickCount(clickCount + 1);
//     }
//     setLastClickTime(now);

//     if (clickCount + 1 === 15) {
//       setShowPasswordDialog(true);
//       setClickCount(0);
//     }
//   };

//   // NEW: Hidden admin access on "Live Now" text - 5 clicks
//   const handleTextClick = () => {
//     const now = Date.now();
//     if (now - lastTextClickTime > 3000) {
//       setTextClickCount(1);
//     } else {
//       setTextClickCount(textClickCount + 1);
//     }
//     setLastTextClickTime(now);

//     // 5 clicks on "Live Now" text opens admin panel
//     if (textClickCount + 1 === 5) {
//       setShowPasswordDialog(true);
//       setTextClickCount(0);
//     }
//   };

//   // Handle password submission
//   const handlePasswordSubmit = () => {
//     if (password === SECRET_PASSWORD) {
//       setError('');
//       setShowPasswordDialog(false);
//       setPassword('');
      
//       // Ask for YouTube URL
//       const url = prompt('Enter YouTube Live URL or Video ID:', liveUrl || 'https://www.youtube.com/watch?v=nR1Ecd0S5iM');
//       if (url && url.trim()) {
//         saveLiveUrl(url.trim());
//       }
//     } else {
//       setError('Access denied!');
//       setPassword('');
//     }
//   };

//   // Extract video ID from YouTube URL
//   const getEmbedUrl = (url) => {
//     if (!url) return '';
    
//     if (url.includes('/embed/')) {
//       return url;
//     }
    
//     const patterns = [
//       /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\?\/]+)/,
//       /youtube\.com\/live\/([^&\?\/]+)/,
//       /youtube\.com\/shorts\/([^&\?\/]+)/
//     ];
    
//     for (const pattern of patterns) {
//       const match = url.match(pattern);
//       if (match && match[1]) {
//         return `https://www.youtube.com/embed/${match[1]}?autoplay=1`;
//       }
//     }
    
//     if (url.length === 11 && !url.includes('/')) {
//       return `https://www.youtube.com/embed/${url}?autoplay=1`;
//     }
    
//     return url;
//   };

//   return (
//     <>
//       <Box
//         sx={{
//           minHeight: '100vh',
//           backgroundImage: 'url("/assets/tv.png")',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           backgroundAttachment: 'fixed',
//           py: 8,
//         }}
//       >
//         <Container maxWidth="lg">
//           <Box sx={{ textAlign: 'center' }}>
//             <Typography
//               variant="h3"
//               gutterBottom
//               onClick={handleTextClick}  // ← Added: 5 clicks on text
//               sx={{
//                 fontWeight: 'bold',
//                 color: '#ffffff',
//                 fontFamily: 'Poppins, Aclonica, Lato, Roboto, sans-serif',
//                 textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
//                 cursor: 'pointer',
//                 userSelect: 'none',
//               }}
//             >
//               Live Now
//             </Typography>
            
//             <Typography
//               sx={{
//                 mb: 3,
//                 color: '#ffd700',
//                 fontFamily: 'Poppins, Aclonica, Lato, Roboto, sans-serif',
//                 fontSize: '0.9rem',
//               }}
//             >
//               Watch our live streams and events
//             </Typography>

//             {/* Live Stream Container - 15 clicks area */}
//             <Box
//               onClick={handleHiddenAdminClick}
//               sx={{
//                 position: 'relative',
//                 paddingBottom: '56.25%',
//                 height: 0,
//                 overflow: 'hidden',
//                 borderRadius: 2,
//                 boxShadow: 3,
//                 cursor: 'pointer',
//                 transition: 'all 0.3s ease',
//                 '&:hover': {
//                   boxShadow: '0 0 30px rgba(255,215,0,0.3)',
//                 },
//               }}
//             >
//               {showLiveVideo && liveUrl ? (
//                 <iframe
//                   src={getEmbedUrl(liveUrl)}
//                   style={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     width: '100%',
//                     height: '100%',
//                   }}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   title="Live Stream"
//                 />
//               ) : (
//                 <Box
//                   sx={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     width: '100%',
//                     height: '100%',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     flexDirection: 'column',
//                     background: 'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.6))',
//                   }}
//                 >
//                   <Typography sx={{ fontSize: '4rem', mb: 2 }}>📺</Typography>
//                   <Typography sx={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>
//                     Live Stream Coming Soon
//                   </Typography>
//                   <Typography sx={{ color: '#ffd700', fontSize: '0.8rem', mt: 1 }}>
//                     Stay tuned for upcoming live events
//                   </Typography>
//                 </Box>
//               )}
//             </Box>
//           </Box>
//         </Container>
//       </Box>

//       {/* Admin Password Dialog */}
//       <Dialog 
//         open={showPasswordDialog} 
//         onClose={() => setShowPasswordDialog(false)}
//         maxWidth="xs"
//         fullWidth
//       >
//         <DialogTitle sx={{ 
//           background: 'linear-gradient(135deg, #0a1628, #1a2a4f)',
//           color: 'white',
//           textAlign: 'center'
//         }}>
//           🔐 Admin Access
//         </DialogTitle>
//         <DialogContent sx={{ pt: 3 }}>
//           <Typography sx={{ mb: 2, color: '#666', textAlign: 'center' }}>
//             Enter admin password to update live stream
//           </Typography>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Password"
//             type="password"
//             fullWidth
//             variant="outlined"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             onKeyPress={(e) => e.key === 'Enter' && handlePasswordSubmit()}
//             sx={{
//               '& .MuiOutlinedInput-root': {
//                 borderRadius: 2,
//               }
//             }}
//           />
//           {error && (
//             <Alert severity="error" sx={{ mt: 2 }}>
//               {error}
//             </Alert>
//           )}
//         </DialogContent>
//         <DialogActions sx={{ p: 2, justifyContent: 'center' }}>
//           <Button 
//             onClick={() => setShowPasswordDialog(false)}
//             sx={{ color: '#999' }}
//           >
//             Cancel
//           </Button>
//           <Button 
//             onClick={handlePasswordSubmit}
//             variant="contained"
//             sx={{
//               background: 'linear-gradient(135deg, #ffd700, #ffa500)',
//               color: '#000',
//               '&:hover': {
//                 background: 'linear-gradient(135deg, #ffed4e, #ffb347)',
//               }
//             }}
//           >
//             Unlock
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// }





// // app/live-now/page.js
// 'use client';

// import { Container, Typography, Box } from '@mui/material';
// import { useState, useEffect } from 'react';

// export default function LiveNowPage() {
//   const [dotClickCount, setDotClickCount] = useState(0);
//   const [showDot, setShowDot] = useState(false);
//   const [liveUrl, setLiveUrl] = useState('');
//   const [showLiveVideo, setShowLiveVideo] = useState(false);

//   // Load saved live URL from localStorage
//   useEffect(() => {
//     const savedUrl = localStorage.getItem('liveStreamUrl');
//     if (savedUrl) {
//       setLiveUrl(savedUrl);
//       setShowLiveVideo(true);
//     }
//   }, []);
// // Add this function to fetch from server
// const fetchGlobalUrl = async () => {
//   try {
//     const response = await fetch('/api/live-url');
//     const data = await response.json();
//     if (data.url) {
//       setLiveUrl(data.url);
//       setShowLiveVideo(true);
//     }
//   } catch (error) {
//     console.error('Error fetching URL:', error);
//     // Fallback to localStorage
//     const savedUrl = localStorage.getItem('liveStreamUrl');
//     if (savedUrl) {
//       setLiveUrl(savedUrl);
//       setShowLiveVideo(true);
//     }
//   }
// };

// // Update useEffect
// useEffect(() => {
//   fetchGlobalUrl();
  
//   // Refresh every 5 seconds to get updates
//   const interval = setInterval(fetchGlobalUrl, 5000);
  
//   return () => clearInterval(interval);
// }, []);
//   // Press Ctrl+Shift+A to show/hide dot
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.ctrlKey && e.shiftKey && e.key === 'A') {
//         setShowDot(!showDot);
//         setDotClickCount(0);
//       }
//     };
//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [showDot]);

//   // Click dot 15 times to open admin
//   const handleDotClick = () => {
//     const newCount = dotClickCount + 1;
//     setDotClickCount(newCount);
    
//     if (newCount === 15) {
//       window.location.href = '/security/admin';
//       setDotClickCount(0);
//       setShowDot(false);
//     }
//   };

//   // Extract YouTube URL
//   const getEmbedUrl = (url) => {
//     if (!url) return '';
//     if (url.includes('/embed/')) return url;
    
//     const patterns = [
//       /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\?\/]+)/,
//       /youtube\.com\/live\/([^&\?\/]+)/,
//       /youtube\.com\/shorts\/([^&\?\/]+)/
//     ];
    
//     for (const pattern of patterns) {
//       const match = url.match(pattern);
//       if (match && match[1]) {
//         return `https://www.youtube.com/embed/${match[1]}?autoplay=1`;
//       }
//     }
    
//     if (url.length === 11 && !url.includes('/')) {
//       return `https://www.youtube.com/embed/${url}?autoplay=1`;
//     }
    
//     return url;
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         backgroundImage: 'url("/assets/tv.png")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         backgroundAttachment: 'fixed',
//         py: 8,
//         outline: 'none',
//         position: 'relative',
//       }}
//     >
//       {/* Hidden Dot - No text, no tooltip */}
//       {showDot && (
//         <Box
//           onClick={handleDotClick}
//           sx={{
//             position: 'fixed',
//             bottom: 20,
//             left: 20,
//             width: '8px',
//             height: '8px',
//             backgroundColor: '#ffd700',
//             borderRadius: '50%',
//             cursor: 'pointer',
//             zIndex: 9999,
//             transition: 'all 0.2s ease',
//             '&:hover': {
//               transform: 'scale(1.5)',
//               backgroundColor: '#ffa500',
//             },
//           }}
//         />
//       )}

//       <Container maxWidth="lg">
//         <Box sx={{ textAlign: 'center' }}>
//           <Typography
//             variant="h3"
//             gutterBottom
//             sx={{
//               fontWeight: 'bold',
//               color: '#ffffff',
//               fontFamily: 'Poppins, Aclonica, Lato, Roboto, sans-serif',
//               textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
//               userSelect: 'none',
//             }}
//           >
//             Live Now
//           </Typography>
          
//           <Typography
//             sx={{
//               mb: 3,
//               color: '#ffd700',
//               fontFamily: 'Poppins, Aclonica, Lato, Roboto, sans-serif',
//               fontSize: '0.9rem',
//             }}
//           >
//             Watch our live streams and events
//           </Typography>

//           {/* Live Stream Container */}
//           <Box
//             sx={{
//               position: 'relative',
//               paddingBottom: '56.25%',
//               height: 0,
//               overflow: 'hidden',
//               borderRadius: 2,
//               boxShadow: 3,
//               transition: 'all 0.3s ease',
//               '&:hover': {
//                 boxShadow: '0 0 30px rgba(255,215,0,0.3)',
//               },
//             }}
//           >
//             {showLiveVideo && liveUrl ? (
//               <iframe
//                 src={getEmbedUrl(liveUrl)}
//                 style={{
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   width: '100%',
//                   height: '100%',
//                 }}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 title="Live Stream"
//               />
//             ) : (
//               <Box
//                 sx={{
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   width: '100%',
//                   height: '100%',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   flexDirection: 'column',
//                   background: 'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.6))',
//                 }}
//               >
//                 <Typography sx={{ fontSize: '4rem', mb: 2 }}>📺</Typography>
//                 <Typography sx={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>
//                   Live Stream Coming Soon
//                 </Typography>
//                 <Typography sx={{ color: '#ffd700', fontSize: '0.8rem', mt: 1 }}>
//                   Stay tuned for upcoming live events
//                 </Typography>
//               </Box>
//             )}
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// }









// app/live-now/page.js
'use client';

import { Container, Typography, Box } from '@mui/material';
import { useState, useEffect } from 'react';

export default function LiveNowPage() {
  const [dotClickCount, setDotClickCount] = useState(0);
  const [showDot, setShowDot] = useState(false);
  const [liveUrl, setLiveUrl] = useState('');
  const [showLiveVideo, setShowLiveVideo] = useState(false);

  // Fetch URL from global API
  const fetchGlobalUrl = async () => {
    try {
      const response = await fetch('/api/live-url');
      const data = await response.json();
      if (data.url && data.url.trim()) {
        setLiveUrl(data.url);
        setShowLiveVideo(true);
      } else {
        // Fallback to localStorage
        const savedUrl = localStorage.getItem('liveStreamUrl');
        if (savedUrl) {
          setLiveUrl(savedUrl);
          setShowLiveVideo(true);
        }
      }
    } catch (error) {
      console.error('Error fetching URL:', error);
      // Fallback to localStorage
      const savedUrl = localStorage.getItem('liveStreamUrl');
      if (savedUrl) {
        setLiveUrl(savedUrl);
        setShowLiveVideo(true);
      }
    }
  };

  useEffect(() => {
    fetchGlobalUrl();
    
    // Auto-refresh every 5 seconds to check for updates from admin
    const interval = setInterval(fetchGlobalUrl, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Press Ctrl+Shift+A to show/hide dot
  // useEffect(() => {
  //   const handleKeyDown = (e) => {
  //     if (e.ctrlKey && e.shiftKey && e.key === 'A') {
  //       e.preventDefault();
  //       setShowDot(!showDot);
  //       setDotClickCount(0);
  //     }
  //   };
  //   window.addEventListener('keydown', handleKeyDown);
  //   return () => window.removeEventListener('keydown', handleKeyDown);
  // }, [showDot]);

  // Click dot 15 times to open admin
  const handleDotClick = () => {
    const newCount = dotClickCount + 1;
    setDotClickCount(newCount);
    
    if (newCount === 15) {
      window.location.href = '/vbs-admin';
      setDotClickCount(0);
      setShowDot(false);
    }
  };

  // Extract YouTube URL
  const getEmbedUrl = (url) => {
    if (!url) return '';
    if (url.includes('/embed/')) return url;
    
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\?\/]+)/,
      /youtube\.com\/live\/([^&\?\/]+)/,
      /youtube\.com\/shorts\/([^&\?\/]+)/
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return `https://www.youtube.com/embed/${match[1]}?autoplay=1`;
      }
    }
    
    if (url.length === 11 && !url.includes('/')) {
      return `https://www.youtube.com/embed/${url}?autoplay=1`;
    }
    
    return url;
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url("/assets/tv.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        py: 8,
        outline: 'none',
        position: 'relative',
      }}
    >
      {/* Hidden Dot - No text, no tooltip */}
      {showDot && (
        <Box
          onClick={handleDotClick}
          sx={{
            position: 'fixed',
            bottom: 20,
            left: 20,
            width: '8px',
            height: '8px',
            backgroundColor: '#ffd700',
            borderRadius: '50%',
            cursor: 'pointer',
            zIndex: 9999,
            transition: 'all 0.2s ease',
            '&:hover': {
              transform: 'scale(1.5)',
              backgroundColor: '#ffa500',
            },
          }}
        />
      )}

      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              color: '#ffffff',
              fontFamily: 'Poppins, Aclonica, Lato, Roboto, sans-serif',
              textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
              userSelect: 'none',
            }}
          >
            Live Now
          </Typography>
          
          <Typography
            sx={{
              mb: 3,
              color: '#ffd700',
              fontFamily: 'Poppins, Aclonica, Lato, Roboto, sans-serif',
              fontSize: '0.9rem',
            }}
          >
            Watch our live streams and events
          </Typography>

          {/* Live Stream Container */}
          <Box
            sx={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
              borderRadius: 2,
              boxShadow: 3,
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0 0 30px rgba(255,215,0,0.3)',
              },
            }}
          >
            {showLiveVideo && liveUrl ? (
              <iframe
                src={getEmbedUrl(liveUrl)}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Live Stream"
              />
            ) : (
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  background: 'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.6))',
                }}
              >
                <Typography sx={{ fontSize: '4rem', mb: 2 }}>📺</Typography>
                <Typography sx={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>
                  Live Stream Coming Soon
                </Typography>
                <Typography sx={{ color: '#ffd700', fontSize: '0.8rem', mt: 1 }}>
                  Stay tuned for upcoming live events
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}