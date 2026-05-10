// 'use client';

// import { useEffect, useState } from "react";
// import {
//   Box,
//   Card,
//   CardActionArea,
//   CardContent,
//   Typography,
// } from "@mui/material";
// import { Poppins, Aclonica, Lato, Roboto } from "next/font/google";

// // Configure fonts
// const poppins = Poppins({
//   weight: ['300', '400', '500', '600', '700', '800'],
//   subsets: ['latin'],
//   display: 'swap',
// });

// const aclonica = Aclonica({
//   weight: ['400'],
//   subsets: ['latin'],
//   display: 'swap',
// });

// const lato = Lato({
//   weight: ['400', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// });

// const roboto = Roboto({
//   weight: ['400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// });

// const fontStack = `${poppins.style.fontFamily}, ${aclonica.style.fontFamily}, ${lato.style.fontFamily}, ${roboto.style.fontFamily}, sans-serif`;
// const tvbackgound = "/assets/tvbackground.svg";

// export default function Media() {
//   const [playlists, setPlaylists] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPlaylists = async () => {
//       try {
//         const response = await fetch('/api/youtube');
//         const data = await response.json();
        
//         if (data.success && data.playlists && data.playlists.length > 0) {
//           setPlaylists(data.playlists);
//           setError(null);
//         } else if (data.error) {
//           setError(data.error);
//         } else {
//           setError('No playlists found');
//         }
//       } catch (err) {
//         console.error('Error:', err);
//         setError('Failed to load playlists');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPlaylists();
//   }, []);

//   return (
//     <>
//       <Box
//         sx={{
//           backgroundImage: `url(${tvbackgound})`,
//           backgroundSize: "cover",
//           marginTop: "-2vh",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           backgroundPosition: {
//             xs: "top",
//             sm: "center",
//             md: "top",
//           },
//           minHeight: "100vh",
//           py: { xs: 2, sm: 4, md: 6 },
//         }}
//       >
//         {/* Enhanced Heading Section */}
//         <Box sx={{ 
//           position: "relative",
//           mb: { xs: 4, sm: 5, md: 6 },
//           textAlign: "center",
//         }}>
//           {/* Animated background elements */}
//           <Box sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: { xs: "200px", sm: "300px", md: "400px" },
//             height: { xs: "200px", sm: "300px", md: "400px" },
//             background: "radial-gradient(circle, rgba(255,215,0,0.2) 0%, rgba(255,215,0,0) 70%)",
//             borderRadius: "50%",
//             animation: "pulse 3s ease-in-out infinite",
//             zIndex: 1,
//           }} />
          
//           <Box sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: { xs: "150px", sm: "250px", md: "350px" },
//             height: { xs: "150px", sm: "250px", md: "350px" },
//             background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
//             borderRadius: "50%",
//             animation: "pulse 4s ease-in-out infinite reverse",
//             zIndex: 1,
//           }} />

//           {/* Main Heading */}
//           <Typography
//             sx={{
//               position: "relative",
//               zIndex: 2,
//               color: "white",
//               fontSize: { xs: "2.2rem", sm: "3.5rem", md: "4.5rem" },
//               textAlign: "center",
//               fontWeight: "900",
//               letterSpacing: { xs: "2px", sm: "3px", md: "4px" },
//               textTransform: "uppercase",
//               textShadow: "3px 3px 0 #FF1493, 6px 6px 0 #4B0082, 0 0 20px rgba(255,255,255,0.5)",
//               mb: 1,
//               fontFamily: "'Poppins', sans-serif",
//               animation: "glow 2s ease-in-out infinite alternate",
//               "@keyframes glow": {
//                 "0%": {
//                   textShadow: "3px 3px 0 #FF1493, 6px 6px 0 #4B0082, 0 0 20px rgba(255,255,255,0.3)",
//                 },
//                 "100%": {
//                   textShadow: "3px 3px 0 #FF1493, 6px 6px 0 #4B0082, 0 0 40px rgba(255,255,255,0.8), 0 0 60px rgba(255,215,0,0.5)",
//                 },
//               },
//               "@keyframes pulse": {
//                 "0%": {
//                   transform: "translate(-50%, -50%) scale(1)",
//                   opacity: 0.5,
//                 },
//                 "50%": {
//                   transform: "translate(-50%, -50%) scale(1.2)",
//                   opacity: 0.8,
//                 },
//                 "100%": {
//                   transform: "translate(-50%, -50%) scale(1)",
//                   opacity: 0.5,
//                 },
//               },
//             }}
//           >
//             Jolly Kids
//           </Typography>
          
//           <Typography
//             sx={{
//               position: "relative",
//               zIndex: 2,
//               color: "white",
//               fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3.2rem" },
//               textAlign: "center",
//               fontWeight: "700",
//               letterSpacing: { xs: "4px", sm: "6px", md: "8px" },
//               textTransform: "uppercase",
//               whiteSpace: "nowrap",
//               willChange: "transform, background-position",
//               background: "linear-gradient(45deg, #FFD700, #FFA500, #FF69B4, #9370DB)",
//               backgroundSize: "300% 300%",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               animation: "gradient 4s ease infinite, float 3s ease-in-out infinite",
//               mb: 2,
//               fontFamily: "'Poppins', 'Arial', sans-serif",
//               "@keyframes gradient": {
//                 "0%": { backgroundPosition: "0% 50%" },
//                 "50%": { backgroundPosition: "100% 50%" },
//                 "100%": { backgroundPosition: "0% 50%" },
//               },
//               "@keyframes float": {
//                 "0%": { transform: "translateY(0px)" },
//                 "50%": { transform: "translateY(-8px)" },
//                 "100%": { transform: "translateY(0px)" },
//               },
//             }}
//           >
//             Youtube Playlists
//           </Typography>

//           {/* Decorative elements */}
//           <Box sx={{
//             position: "relative",
//             zIndex: 2,
//             display: "flex",
//             justifyContent: "center",
//             gap: { xs: 1, sm: 2 },
//             mt: 2,
//           }}>
//             {['★', '●', '■', '●', '★'].map((symbol, index) => (
//               <Typography
//                 key={index}
//                 sx={{
//                   color: index % 2 === 0 ? '#FFD700' : '#FF69B4',
//                   fontSize: { xs: '1.2rem', sm: '1.8rem', md: '2.2rem' },
//                   animation: `bounce 2s ease-in-out ${index * 0.2}s infinite`,
//                   "@keyframes bounce": {
//                     "0%, 100%": {
//                       transform: "translateY(0) rotate(0deg)",
//                     },
//                     "50%": {
//                       transform: "translateY(-10px) rotate(10deg)",
//                     },
//                   },
//                 }}
//               >
//                 {symbol}
//               </Typography>
//             ))}
//           </Box>
//         </Box>
        
//         {/* HORIZONTAL SCROLLING PLAYLISTS SECTION */}
//         <Box sx={{ 
//           width: "100%", 
//           overflowX: "auto",
//           overflowY: "hidden",
//           py: { xs: 2, sm: 3, md: 4 },
//           px: { xs: 2, sm: 3, md: 4 },
//           cursor: "grab",
//           '&:active': {
//             cursor: "grabbing",
//           },
//           '&::-webkit-scrollbar': {
//             height: '10px',
//           },
//           '&::-webkit-scrollbar-track': {
//             backgroundColor: 'rgba(255,255,255,0.1)',
//             borderRadius: '10px',
//           },
//           '&::-webkit-scrollbar-thumb': {
//             backgroundColor: 'rgba(255,215,0,0.5)',
//             borderRadius: '10px',
//             '&:hover': {
//               backgroundColor: 'rgba(255,215,0,0.8)',
//             },
//           },
//         }}>
//           {loading ? (
//             <Typography sx={{ color: "white", textAlign: "center", py: 4 }}>
//               🎬 Loading playlists from Jolly Kids channel...
//             </Typography>
//           ) : error ? (
//             <Typography sx={{ color: "#ff6b6b", textAlign: "center", py: 4 }}>
//               ⚠️ {error}
//             </Typography>
//           ) : playlists.length === 0 ? (
//             <Typography sx={{ color: "#ffd700", textAlign: "center", py: 4 }}>
//               📺 No playlists found
//             </Typography>
//           ) : (
//             <Box sx={{
//               display: "flex",
//               flexDirection: "row",
//               gap: { xs: 2, sm: 3, md: 4 },
//               minWidth: "min-content",
//             }}>
//               {playlists.map((playlist, index) => {
//                 const videoCount = playlist.contentDetails?.itemCount || 0;
//                 return (
//                   <Box
//                     key={playlist.id || index}
//                     sx={{
//                       flex: "0 0 auto",
//                       width: { xs: "280px", sm: "320px", md: "360px", lg: "400px" },
//                     }}
//                   >
//                     <Card sx={{ 
//                       height: "100%",
//                       backgroundColor: "rgba(255,255,255,0.1)",
//                       backdropFilter: "blur(10px)",
//                       borderRadius: { xs: 2, sm: 3 },
//                       overflow: "hidden",
//                       transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
//                       '&:hover': {
//                         transform: { xs: "none", sm: "scale(1.02)" },
//                         boxShadow: { sm: "0 0 30px rgba(255,215,0,0.3)" },
//                       },
//                     }}>
//                       <CardActionArea 
//                         onClick={() => window.open(`https://www.youtube.com/playlist?list=${playlist.id}`, '_blank')}
//                         sx={{ height: "100%" }}
//                       >
//                         <CardContent sx={{ p: { xs: 1, sm: 2 } }}>
//                           <Typography 
//                             align="center" 
//                             className={poppins.className}
//                             sx={{ 
//                               mb: { xs: 1, sm: 2 }, 
//                               fontWeight: "bold",
//                               color: "white",
//                               fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
//                               textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
//                               background: "linear-gradient(45deg, #FFD700, #FFA500)",
//                               WebkitBackgroundClip: "text",
//                               WebkitTextFillColor: "transparent",
//                               fontFamily: fontStack,
//                               display: "-webkit-box",
//                               WebkitLineClamp: 2,
//                               WebkitBoxOrient: "vertical",
//                               overflow: "hidden",
//                               minHeight: "50px",
//                             }}
//                           >
//                             {playlist.snippet?.title || `Playlist ${index + 1}`}
//                           </Typography>
                          
//                           <Box sx={{ 
//                             position: "relative",
//                             width: "100%",
//                             paddingTop: "56.25%",
//                             borderRadius: { xs: 1, sm: 2 },
//                             overflow: "hidden",
//                             mb: 1,
//                           }}>
//                             <Box sx={{
//                               position: "absolute",
//                               top: 0,
//                               left: 0,
//                               width: "100%",
//                               height: "100%",
//                             }}>
//                               <img
//                                 src={playlist.snippet?.thumbnails?.medium?.url || 
//                                      playlist.snippet?.thumbnails?.high?.url || 
//                                      playlist.snippet?.thumbnails?.default?.url}
//                                 alt={playlist.snippet?.title || "Playlist thumbnail"}
//                                 style={{
//                                   width: "100%",
//                                   height: "100%",
//                                   objectFit: "cover",
//                                 }}
//                               />
//                               {/* Play button overlay */}
//                               <Box sx={{
//                                 position: "absolute",
//                                 top: "50%",
//                                 left: "50%",
//                                 transform: "translate(-50%, -50%)",
//                                 width: "50px",
//                                 height: "50px",
//                                 backgroundColor: "rgba(0,0,0,0.6)",
//                                 borderRadius: "50%",
//                                 display: "flex",
//                                 alignItems: "center",
//                                 justifyContent: "center",
//                                 opacity: 0,
//                                 transition: "opacity 0.3s ease",
//                                 '&:hover': {
//                                   opacity: 1,
//                                 },
//                               }}>
//                                 <Typography sx={{ fontSize: "24px", color: "white" }}>▶</Typography>
//                               </Box>
//                             </Box>
//                           </Box>
                          
//                           {/* FIXED: Shows "1 video" instead of "1 videos" */}
//                           <Typography 
//                             align="center"
//                             sx={{ 
//                               mt: 1,
//                               color: "#ffc107",
//                               fontSize: "0.8rem",
//                               fontWeight: "bold",
//                               display: "flex",
//                               alignItems: "center",
//                               justifyContent: "center",
//                               gap: 0.5,
//                             }}
//                           >
//                             <span>🎬</span> 
//                             {videoCount} {videoCount === 1 ? 'video' : 'videos'}
//                             <span>▶</span>
//                           </Typography>
//                         </CardContent>
//                       </CardActionArea>
//                     </Card>
//                   </Box>
//                 );
//               })}
//             </Box>
//           )}
//         </Box>
//       </Box>
//     </>
//   );
// }





'use client';

import { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { Poppins, Aclonica, Lato, Roboto } from "next/font/google";

// Configure fonts
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
});

const aclonica = Aclonica({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const fontStack = `${poppins.style.fontFamily}, ${aclonica.style.fontFamily}, ${lato.style.fontFamily}, ${roboto.style.fontFamily}, sans-serif`;
const tvbackgound = "/assets/tv.png";

export default function Media() {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await fetch('/api/youtube');
        const data = await response.json();
        
        if (data.success && data.playlists && data.playlists.length > 0) {
          // Filter out any playlists with 0 videos (just in case)
          const validPlaylists = data.playlists.filter(playlist => {
            const videoCount = playlist.contentDetails?.itemCount || 0;
            return videoCount > 0;
          });
          setPlaylists(validPlaylists);
          setError(null);
        } else if (data.error) {
          setError(data.error);
        } else {
          setError('No playlists found');
        }
      } catch (err) {
        console.error('Error:', err);
        setError('Failed to load playlists');
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylists();
  }, []);

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${tvbackgound})`,
          backgroundSize: "cover",
          marginTop: "-2vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundPosition: {
            xs: "top",
            sm: "center",
            md: "top",
          },
          minHeight: "100vh",
          py: { xs: 2, sm: 4, md: 6 },
        }}
      >
        {/* Enhanced Heading Section */}
        <Box sx={{ 
          position: "relative",
          mb: { xs: 4, sm: 5, md: 6 },
          textAlign: "center",
        }}>
          {/* Animated background elements */}
          <Box sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "200px", sm: "300px", md: "400px" },
            height: { xs: "200px", sm: "300px", md: "400px" },
            background: "radial-gradient(circle, rgba(255,215,0,0.2) 0%, rgba(255,215,0,0) 70%)",
            borderRadius: "50%",
            animation: "pulse 3s ease-in-out infinite",
            zIndex: 1,
          }} />
          
          <Box sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "150px", sm: "250px", md: "350px" },
            height: { xs: "150px", sm: "250px", md: "350px" },
            background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
            borderRadius: "50%",
            animation: "pulse 4s ease-in-out infinite reverse",
            zIndex: 1,
          }} />

          {/* Main Heading */}
          <Typography
            sx={{
              position: "relative",
              zIndex: 2,
              color: "white",
              fontSize: { xs: "2.2rem", sm: "3.5rem", md: "4.5rem" },
              textAlign: "center",
              fontWeight: "900",
              letterSpacing: { xs: "2px", sm: "3px", md: "4px" },
              textTransform: "uppercase",
              textShadow: "3px 3px 0 #FF1493, 6px 6px 0 #4B0082, 0 0 20px rgba(255,255,255,0.5)",
              mb: 1,
              fontFamily: "'Poppins', sans-serif",
              animation: "glow 2s ease-in-out infinite alternate",
              "@keyframes glow": {
                "0%": {
                  textShadow: "3px 3px 0 #FF1493, 6px 6px 0 #4B0082, 0 0 20px rgba(255,255,255,0.3)",
                },
                "100%": {
                  textShadow: "3px 3px 0 #FF1493, 6px 6px 0 #4B0082, 0 0 40px rgba(255,255,255,0.8), 0 0 60px rgba(255,215,0,0.5)",
                },
              },
              "@keyframes pulse": {
                "0%": {
                  transform: "translate(-50%, -50%) scale(1)",
                  opacity: 0.5,
                },
                "50%": {
                  transform: "translate(-50%, -50%) scale(1.2)",
                  opacity: 0.8,
                },
                "100%": {
                  transform: "translate(-50%, -50%) scale(1)",
                  opacity: 0.5,
                },
              },
            }}
          >
            Jolly Kids
          </Typography>
          
          <Typography
            sx={{
              position: "relative",
              zIndex: 2,
              color: "white",
              fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3.2rem" },
              textAlign: "center",
              fontWeight: "700",
              letterSpacing: { xs: "4px", sm: "6px", md: "8px" },
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              willChange: "transform, background-position",
              background: "linear-gradient(45deg, #FFD700, #FFA500, #FF69B4, #9370DB)",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "gradient 4s ease infinite, float 3s ease-in-out infinite",
              mb: 2,
              fontFamily: "'Poppins', 'Arial', sans-serif",
              "@keyframes gradient": {
                "0%": { backgroundPosition: "0% 50%" },
                "50%": { backgroundPosition: "100% 50%" },
                "100%": { backgroundPosition: "0% 50%" },
              },
              "@keyframes float": {
                "0%": { transform: "translateY(0px)" },
                "50%": { transform: "translateY(-8px)" },
                "100%": { transform: "translateY(0px)" },
              },
            }}
          >
            Jolly Kids Playlists
          </Typography>

          {/* Decorative elements */}
          <Box sx={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            justifyContent: "center",
            gap: { xs: 1, sm: 2 },
            mt: 2,
          }}>
            {['★', '●', '■', '●', '★'].map((symbol, index) => (
              <Typography
                key={index}
                sx={{
                  color: index % 2 === 0 ? '#FFD700' : '#FF69B4',
                  fontSize: { xs: '1.2rem', sm: '1.8rem', md: '2.2rem' },
                  animation: `bounce 2s ease-in-out ${index * 0.2}s infinite`,
                  "@keyframes bounce": {
                    "0%, 100%": {
                      transform: "translateY(0) rotate(0deg)",
                    },
                    "50%": {
                      transform: "translateY(-10px) rotate(10deg)",
                    },
                  },
                }}
              >
                {symbol}
              </Typography>
            ))}
          </Box>
        </Box>
        
        {/* HORIZONTAL SCROLLING PLAYLISTS SECTION */}
        <Box sx={{ 
          width: "100%", 
          overflowX: "auto",
          overflowY: "hidden",
          py: { xs: 2, sm: 3, md: 4 },
          px: { xs: 2, sm: 3, md: 4 },
          cursor: "grab",
          '&:active': {
            cursor: "grabbing",
          },
          '&::-webkit-scrollbar': {
            height: '10px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: '10px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(255,215,0,0.5)',
            borderRadius: '10px',
            '&:hover': {
              backgroundColor: 'rgba(255,215,0,0.8)',
            },
          },
        }}>
          {loading ? (
            <Typography sx={{ color: "white", textAlign: "center", py: 4 }}>
              🎬 Loading playlists from Jolly Kids channel...
            </Typography>
          ) : error ? (
            <Typography sx={{ color: "#ff6b6b", textAlign: "center", py: 4 }}>
              ⚠️ {error}
            </Typography>
          ) : playlists.length === 0 ? (
            <Typography sx={{ color: "#ffd700", textAlign: "center", py: 4 }}>
              📺 No playlists found
            </Typography>
          ) : (
            <Box sx={{
              display: "flex",
              flexDirection: "row",
              gap: { xs: 2, sm: 3, md: 4 },
              minWidth: "min-content",
            }}>
              {playlists.map((playlist, index) => {
                const videoCount = playlist.contentDetails?.itemCount || 0;
                // Skip rendering if videoCount is 0 (double safety)
                if (videoCount === 0) return null;
                
                return (
                  <Box
                    key={playlist.id || index}
                    sx={{
                      flex: "0 0 auto",
                      width: { xs: "280px", sm: "320px", md: "360px", lg: "400px" },
                    }}
                  >
                    <Card sx={{ 
                      height: "100%",
                      backgroundColor: "rgba(255,255,255,0.1)",
                      backdropFilter: "blur(10px)",
                      borderRadius: { xs: 2, sm: 3 },
                      overflow: "hidden",
                      transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                      '&:hover': {
                        transform: { xs: "none", sm: "scale(1.02)" },
                        boxShadow: { sm: "0 0 30px rgba(255,215,0,0.3)" },
                      },
                    }}>
                      <CardActionArea 
                        onClick={() => window.open(`https://www.youtube.com/playlist?list=${playlist.id}`, '_blank')}
                        sx={{ height: "100%" }}
                      >
                        <CardContent sx={{ p: { xs: 1, sm: 2 } }}>
                          <Typography 
                            align="center" 
                            className={poppins.className}
                            sx={{ 
                              mb: { xs: 1, sm: 2 }, 
                              fontWeight: "bold",
                              color: "white",
                              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                              background: "linear-gradient(45deg, #FFD700, #FFA500)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              fontFamily: fontStack,
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                              minHeight: "50px",
                            }}
                          >
                            {playlist.snippet?.title || `Playlist ${index + 1}`}
                          </Typography>
                          
                          <Box sx={{ 
                            position: "relative",
                            width: "100%",
                            paddingTop: "56.25%",
                            borderRadius: { xs: 1, sm: 2 },
                            overflow: "hidden",
                            mb: 1,
                          }}>
                            <img
                              src={playlist.snippet?.thumbnails?.medium?.url || 
                                   playlist.snippet?.thumbnails?.high?.url || 
                                   playlist.snippet?.thumbnails?.default?.url}
                              alt={playlist.snippet?.title || "Playlist thumbnail"}
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </Box>
                          
                          <Typography 
                            align="center"
                            sx={{ 
                              mt: 1,
                              color: "#ffc107",
                              fontSize: "0.8rem",
                              fontWeight: "bold",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: 0.5,
                            }}
                          >
                            <span>🎬</span> 
                            {videoCount} {videoCount === 1 ? 'video' : 'videos'}
                            <span>▶</span>
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Box>
                );
              })}
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}



