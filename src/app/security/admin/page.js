// // app/security/admin/page.js
// 'use client';

// import { useState, useEffect } from 'react';
// import { 
//   Container, Typography, Box, TextField, Button, 
//   Alert, Paper, IconButton, InputAdornment, Snackbar 
// } from '@mui/material';
// import { Visibility, VisibilityOff, Save, YouTube, ArrowBack, Security } from '@mui/icons-material';
// import { useRouter } from 'next/navigation';

// export default function SecurityAdminPage() {
//   const router = useRouter();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [liveUrl, setLiveUrl] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [tempPassword, setTempPassword] = useState('');

//   // Secret admin password - Change this!
//   const SECRET_PASSWORD = "***";

//   // Load current URL on mount
//   useEffect(() => {
//     const savedUrl = localStorage.getItem('liveStreamUrl');
//     if (savedUrl) {
//       setLiveUrl(savedUrl);
//     }
//   }, []);

//   const handleLogin = () => {
//     if (tempPassword === SECRET_PASSWORD) {
//       setIsAuthenticated(true);
//       setError('');
//       setTempPassword('');
//     } else {
//       setError('Invalid admin password!');
//       setTempPassword('');
//     }
//   };

//   const handleSaveUrl = () => {
//     if (!liveUrl.trim()) {
//       setError('Please enter a YouTube URL');
//       return;
//     }

//     // Save to localStorage
//     localStorage.setItem('liveStreamUrl', liveUrl.trim());
    
//     setSuccess('Live stream URL updated successfully!');
//     setError('');
    
//     setTimeout(() => setSuccess(''), 3000);
//   };

//   const handleGoToLivePage = () => {
//     router.push('/live-now');
//   };

//   const extractVideoId = (url) => {
//     const patterns = [
//       /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\?\/]+)/,
//       /youtube\.com\/live\/([^&\?\/]+)/,
//       /youtube\.com\/shorts\/([^&\?\/]+)/
//     ];
    
//     for (const pattern of patterns) {
//       const match = url.match(pattern);
//       if (match && match[1]) {
//         return match[1];
//       }
//     }
    
//     if (url.length === 11 && !url.includes('/')) {
//       return url;
//     }
    
//     return null;
//   };

//   // Login screen
//   if (!isAuthenticated) {
//     return (
//       <Box
//         sx={{
//           minHeight: '100vh',
//           background: 'linear-gradient(135deg, #0a1628, #1a2a4f)',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           py: 8,
//         }}
//       >
//         <Container maxWidth="sm">
//           <Paper
//             elevation={10}
//             sx={{
//               p: 4,
//               borderRadius: 3,
//               background: 'rgba(255,255,255,0.95)',
//               textAlign: 'center',
//             }}
//           >
//             <Security sx={{ fontSize: 50, color: '#ffd700', mb: 2 }} />
//             <Typography
//               variant="h4"
//               gutterBottom
//               sx={{
//                 fontWeight: 'bold',
//                 background: 'linear-gradient(135deg, #ffd700, #ffa500)',
//                 backgroundClip: 'text',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//               }}
//             >
//               Admin Login
//             </Typography>
            
//             <Typography sx={{ mb: 3, color: '#666' }}>
//               Enter admin password to access the control panel
//             </Typography>

//             <TextField
//               fullWidth
//               label="Admin Password"
//               type={showPassword ? 'text' : 'password'}
//               value={tempPassword}
//               onChange={(e) => setTempPassword(e.target.value)}
//               onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//               sx={{ mb: 2 }}
//             />

//             {error && (
//               <Alert severity="error" sx={{ mb: 2 }}>
//                 {error}
//               </Alert>
//             )}

//             <Button
//               fullWidth
//               variant="contained"
//               onClick={handleLogin}
//               sx={{
//                 background: 'linear-gradient(135deg, #ffd700, #ffa500)',
//                 color: '#000',
//                 py: 1.5,
//                 fontWeight: 'bold',
//                 '&:hover': {
//                   background: 'linear-gradient(135deg, #ffed4e, #ffb347)',
//                 },
//               }}
//             >
//               Login
//             </Button>

//             <Button
//               fullWidth
//               variant="text"
//               onClick={handleGoToLivePage}
//               startIcon={<ArrowBack />}
//               sx={{ mt: 2, color: '#666' }}
//             >
//               Back to Live Page
//             </Button>
//           </Paper>
//         </Container>
//       </Box>
//     );
//   }

//   // Admin dashboard
//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         background: 'linear-gradient(135deg, #0a1628, #1a2a4f)',
//         py: 4,
//       }}
//     >
//       <Container maxWidth="md">
//         <Paper
//           elevation={10}
//           sx={{
//             p: 4,
//             borderRadius: 3,
//             background: 'rgba(255,255,255,0.95)',
//           }}
//         >
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
//             <Typography
//               variant="h4"
//               sx={{
//                 fontWeight: 'bold',
//                 background: 'linear-gradient(135deg, #ffd700, #ffa500)',
//                 backgroundClip: 'text',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//               }}
//             >
//               Admin Dashboard
//             </Typography>
//             <Button
//               variant="outlined"
//               onClick={handleGoToLivePage}
//               startIcon={<ArrowBack />}
//               sx={{
//                 borderColor: '#ffd700',
//                 color: '#ffd700',
//                 '&:hover': {
//                   borderColor: '#ffa500',
//                   backgroundColor: 'rgba(255,215,0,0.1)',
//                 },
//               }}
//             >
//               Live Page
//             </Button>
//           </Box>

//           <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
//             Live Stream Settings
//           </Typography>

//           <TextField
//             fullWidth
//             label="YouTube Live URL or Video ID"
//             value={liveUrl}
//             onChange={(e) => setLiveUrl(e.target.value)}
//             placeholder="https://www.youtube.com/watch?v=VIDEO_ID or VIDEO_ID"
//             helperText="Paste any YouTube live URL, video URL, or just the video ID (11 characters)"
//             variant="outlined"
//             sx={{ mb: 2 }}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <YouTube color="error" />
//                 </InputAdornment>
//               ),
//             }}
//           />

//           {liveUrl && extractVideoId(liveUrl) && (
//             <Alert severity="info" sx={{ mb: 2 }}>
//               Video ID detected: <strong>{extractVideoId(liveUrl)}</strong>
//             </Alert>
//           )}

//           {error && (
//             <Alert severity="error" sx={{ mb: 2 }}>
//               {error}
//             </Alert>
//           )}

//           <Button
//             variant="contained"
//             startIcon={<Save />}
//             onClick={handleSaveUrl}
//             fullWidth
//             sx={{
//               background: 'linear-gradient(135deg, #ffd700, #ffa500)',
//               color: '#000',
//               fontWeight: 'bold',
//               py: 1.5,
//               '&:hover': {
//                 background: 'linear-gradient(135deg, #ffed4e, #ffb347)',
//               },
//             }}
//           >
//             Save Live Stream URL
//           </Button>

//           <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid #ddd' }}>
//             <Typography variant="body2" color="text.secondary" align="center">
//               Current Live URL: {liveUrl ? (
//                 <strong>{liveUrl}</strong>
//               ) : (
//                 <em>No URL set</em>
//               )}
//             </Typography>
//           </Box>
//         </Paper>
//       </Container>

//       <Snackbar
//         open={!!success}
//         autoHideDuration={3000}
//         onClose={() => setSuccess('')}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//       >
//         <Alert severity="success" sx={{ width: '100%' }}>
//           {success}
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// }








// app/security/admin/page.js
'use client';

import { useState, useEffect } from 'react';
import { 
  Container, Typography, Box, TextField, Button, 
  Alert, Paper, IconButton, InputAdornment, Snackbar 
} from '@mui/material';
import { Visibility, VisibilityOff, Save, YouTube, ArrowBack, Security } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

export default function SecurityAdminPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [liveUrl, setLiveUrl] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [tempPassword, setTempPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Secret admin password - Change this!
  const SECRET_PASSWORD = "***";

  // Load current URL from global API
  useEffect(() => {
    fetchGlobalUrl();
  }, []);

  const fetchGlobalUrl = async () => {
    try {
      const response = await fetch('/api/live-url');
      const data = await response.json();
      if (data.url) {
        setLiveUrl(data.url);
      }
    } catch (error) {
      console.error('Error fetching URL:', error);
      // Fallback to localStorage
      const savedUrl = localStorage.getItem('liveStreamUrl');
      if (savedUrl) {
        setLiveUrl(savedUrl);
      }
    }
  };

  const handleLogin = () => {
    if (tempPassword === SECRET_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
      setTempPassword('');
      fetchGlobalUrl(); // Refresh URL on login
    } else {
      setError('Invalid admin password!');
      setTempPassword('');
    }
  };

  const handleSaveUrl = async () => {
    if (!liveUrl.trim()) {
      setError('Please enter a YouTube URL');
      return;
    }

    setLoading(true);
    try {
      // Save to global API
      const response = await fetch('/api/live-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: liveUrl.trim() })
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Also save to localStorage for backup
        localStorage.setItem('liveStreamUrl', liveUrl.trim());
        setSuccess('Live stream URL updated GLOBALLY! All browsers will see this update.');
        setError('');
        
        setTimeout(() => setSuccess(''), 3000);
      } else {
        setError('Failed to save: ' + (data.error || 'Unknown error'));
      }
    } catch (error) {
      setError('Error saving: ' + error.message);
      console.error('Save error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoToLivePage = () => {
    router.push('/live-now');
  };

  const extractVideoId = (url) => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\?\/]+)/,
      /youtube\.com\/live\/([^&\?\/]+)/,
      /youtube\.com\/shorts\/([^&\?\/]+)/
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    
    if (url.length === 11 && !url.includes('/')) {
      return url;
    }
    
    return null;
  };

  // Login screen
  if (!isAuthenticated) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0a1628, #1a2a4f)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 8,
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={10}
            sx={{
              p: 4,
              borderRadius: 3,
              background: 'rgba(255,255,255,0.95)',
              textAlign: 'center',
            }}
          >
            <Security sx={{ fontSize: 50, color: '#ffd700', mb: 2 }} />
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #ffd700, #ffa500)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Admin Login
            </Typography>
            
            <Typography sx={{ mb: 3, color: '#666' }}>
              Enter admin password to access the control panel
            </Typography>

            <TextField
              fullWidth
              label="Admin Password"
              type={showPassword ? 'text' : 'password'}
              value={tempPassword}
              onChange={(e) => setTempPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 2 }}
            />

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            <Button
              fullWidth
              variant="contained"
              onClick={handleLogin}
              sx={{
                background: 'linear-gradient(135deg, #ffd700, #ffa500)',
                color: '#000',
                py: 1.5,
                fontWeight: 'bold',
                '&:hover': {
                  background: 'linear-gradient(135deg, #ffed4e, #ffb347)',
                },
              }}
            >
              Login
            </Button>

            <Button
              fullWidth
              variant="text"
              onClick={handleGoToLivePage}
              startIcon={<ArrowBack />}
              sx={{ mt: 2, color: '#666' }}
            >
              Back to Live Page
            </Button>
          </Paper>
        </Container>
      </Box>
    );
  }

  // Admin dashboard
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a1628, #1a2a4f)',
        py: 4,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={10}
          sx={{
            p: 4,
            borderRadius: 3,
            background: 'rgba(255,255,255,0.95)',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #ffd700, #ffa500)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Admin Dashboard
            </Typography>
            <Button
              variant="outlined"
              onClick={handleGoToLivePage}
              startIcon={<ArrowBack />}
              sx={{
                borderColor: '#ffd700',
                color: '#ffd700',
                '&:hover': {
                  borderColor: '#ffa500',
                  backgroundColor: 'rgba(255,215,0,0.1)',
                },
              }}
            >
              Live Page
            </Button>
          </Box>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
            Live Stream Settings
          </Typography>

          <TextField
            fullWidth
            label="YouTube Live URL or Video ID"
            value={liveUrl}
            onChange={(e) => setLiveUrl(e.target.value)}
            placeholder="https://www.youtube.com/watch?v=VIDEO_ID or VIDEO_ID"
            helperText="Paste any YouTube live URL, video URL, or just the video ID (11 characters)"
            variant="outlined"
            sx={{ mb: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <YouTube color="error" />
                </InputAdornment>
              ),
            }}
          />

          {liveUrl && extractVideoId(liveUrl) && (
            <Alert severity="info" sx={{ mb: 2 }}>
              Video ID detected: <strong>{extractVideoId(liveUrl)}</strong>
            </Alert>
          )}

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <Button
            variant="contained"
            startIcon={<Save />}
            onClick={handleSaveUrl}
            disabled={loading}
            fullWidth
            sx={{
              background: 'linear-gradient(135deg, #ffd700, #ffa500)',
              color: '#000',
              fontWeight: 'bold',
              py: 1.5,
              '&:hover': {
                background: 'linear-gradient(135deg, #ffed4e, #ffb347)',
              },
            }}
          >
            {loading ? 'Saving...' : 'Save Live Stream URL (Global)'}
          </Button>

          <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid #ddd' }}>
            <Typography variant="body2" color="text.secondary" align="center">
              Current Live URL: {liveUrl ? (
                <strong>{liveUrl}</strong>
              ) : (
                <em>No URL set</em>
              )}
            </Typography>
            <Typography variant="caption" color="text.secondary" align="center" display="block" sx={{ mt: 1 }}>
              ✓ This URL is shared across ALL browsers and devices
            </Typography>
          </Box>
        </Paper>
      </Container>

      <Snackbar
        open={!!success}
        autoHideDuration={3000}
        onClose={() => setSuccess('')}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          {success}
        </Alert>
      </Snackbar>
    </Box>
  );
}