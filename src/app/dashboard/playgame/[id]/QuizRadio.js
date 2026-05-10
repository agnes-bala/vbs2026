// "use client";

// import { useRouter, useParams } from "next/navigation";
// import * as React from "react";
// import moment from "moment-timezone";
// import { Box, Button, Typography, Stack, Card } from "@mui/material";
// import Iconify from "../../../../components/Iconify";

// const days = [
//   { title: "Day 1", day: "2026-04-11", color: "#FF6B6B", emoji: "🌟", verse: "Citadel" },
//   { title: "Day 2", day: "2026-04-12", color: "#4ECDC4", emoji: "⭐", verse: "Trust in the Lord" },
//   { title: "Day 3", day: "2026-04-13", color: "#45B7D1", emoji: "🌈", verse: "Jesus is the light" },
//   { title: "Day 4", day: "2026-04-14", color: "#96CEB4", emoji: "🕊️", verse: "Warrior of God" },
//   { title: "Day 5", day: "2026-05-15", color: "#FFEAA7", emoji: "🎉", verse: "Be Mindful" },
// ];

// export default function QuizRadioPage() {
//   const router = useRouter();
//   const params = useParams();
//   const { id } = params;
//   const [clickCount, setClickCount] = React.useState(0);

//   const now = moment().tz("Asia/Kolkata");
//   const currentDate = now.format("YYYY-MM-DD");
//   const currentTimer = now.format("HHmmss");

//   const handleGame = (day, dayNumber) => {
//     localStorage.setItem("qdate", day);
//     router.push(`/dashboard/playgame/${id}/day${dayNumber}`);
//   };

//   const handleBackToDashboard = () => {
//     router.push('/dashboard');
//   };

//   const handleRefresh = () => window.location.reload();

//   const handleIconClick = () => {
//     const newCount = clickCount + 1;
//     setClickCount(newCount);
    
//     if (newCount === 5) {
//       const password = prompt("Enter admin password:");
//       if (password === "!!!") {
//         router.push('/admin');
//       }
//       setClickCount(0);
//     }
    
//     setTimeout(() => {
//       setClickCount(0);
//     }, 3000);
//   };

//   const renderCard = (d, i) => {
//     const dayNumber = i + 1;
//     const dayDateTime = moment(`${d.day}T12:00:00`).tz("Asia/Kolkata");
//     const isEnabled = dayDateTime.isSameOrBefore(now);
//     const isToday = d.day === currentDate;
//     const isBeforeNoon = currentTimer < "120000";

//     return (
//       <Card
//         key={i}
//         sx={{
//           width: { xs: 280, sm: 300, md: 320 },
//           minHeight: 220,
//           borderRadius: "30px",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           background: `linear-gradient(135deg, ${d.color}20, ${d.color}40)`,
//           backdropFilter: "blur(10px)",
//           border: `2px solid ${d.color}`,
//           cursor: isEnabled ? "pointer" : "not-allowed",
//           transition: "all 0.3s ease",
//           position: "relative",
//           overflow: "hidden",
//           '&:hover': isEnabled && {
//             transform: "translateY(-10px) scale(1.02)",
//             boxShadow: `0 20px 40px ${d.color}60`,
//           }
//         }}
//       >
//         <Box sx={{
//           position: "absolute",
//           top: -20,
//           right: -20,
//           width: 100,
//           height: 100,
//           borderRadius: "50%",
//           background: `radial-gradient(circle, ${d.color}30, transparent)`,
//           zIndex: 0
//         }} />
        
//         <Box sx={{ position: "relative", zIndex: 1, textAlign: "center", p: 2 }}>
//           <Typography sx={{ fontSize: "50px", mb: 1 }}>
//             {d.emoji}
//           </Typography>

//           <Typography sx={{
//             fontSize: "24px",
//             fontWeight: "bold",
//             color: "#1a237e",
//             mb: 1
//           }}>
//             {d.title}
//           </Typography>

//           <Typography sx={{
//             fontSize: "12px",
//             color: "#666",
//             mb: 2,
//             fontStyle: "italic"
//           }}>
//             "{d.verse}"
//           </Typography>

//           <Box sx={{ position: "relative", display: "inline-block", mb: 1 }}>
//             <Iconify
//               width={40}
//               height={40}
//               icon={isEnabled ? "material-symbols:play-circle-rounded" : "fxemoji:lock"}
//               sx={{
//                 color: isEnabled ? d.color : "#999",
//                 transition: "transform 0.3s ease",
//                 '&:hover': isEnabled && { transform: "scale(1.1)" }
//               }}
//             />
//           </Box>

//           <Button
//             variant="contained"
//             disabled={!isEnabled}
//             onClick={() => handleGame(d.day, dayNumber)}
//             sx={{
//               background: isEnabled ? d.color : "#BDBDBD",
//               color: isEnabled ? "white" : "#555",
//               borderRadius: "25px",
//               textTransform: "none",
//               px: 3,
//               py: 1,
//               fontWeight: 600,
//               fontSize: "16px",
//               fontFamily: "Poppins, sans-serif",
//               width: "100%",
//               '&:hover': isEnabled && {
//                 background: d.color,
//                 transform: "scale(1.05)",
//                 boxShadow: `0 5px 15px ${d.color}80`
//               }
//             }}
//           >
//             {isEnabled ? "Play Quiz 🎮" : "Locked 🔒"}
//           </Button>

//           {isToday && isBeforeNoon && (
//             <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" sx={{ mt: 1 }}>
//               <Button 
//                 variant="outlined" 
//                 onClick={handleRefresh}
//                 size="small"
//                 sx={{ fontSize: "10px" }}
//               >
//                 Reload
//               </Button>
//               <Typography variant="caption" sx={{ color: "#d32f2f", fontWeight: "bold" }}>
//                 ⏰ Starts at 12:00 PM
//               </Typography>
//             </Stack>
//           )}
//         </Box>
//       </Card>
//     );
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         width: "100%",
//         background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
//         backgroundAttachment: "fixed",  // ← Makes background fixed
//         backgroundSize: "cover",        // ← Covers entire area
//         backgroundPosition: "center",   // ← Centers the background
//         backgroundRepeat: "no-repeat",  // ← No repeating
//         overflowX: "hidden",
//         fontFamily: "Poppins, sans-serif",
//         position: "relative",
//         margin: 0,
//         padding: 0,
//         left: 0,
//         right: 0,
//         top: 0,
//         bottom: 0,
//       }}
//     >
//       {/* Add global styles for html/body to ensure full coverage */}
//       <style jsx global>{`
//         html, body {
//           margin: 0;
//           padding: 0;
//           min-height: 100vh;
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
//           background-attachment: fixed;
//           background-size: cover;
//         }
//       `}</style>

//       {/* Animated Background Elements */}
//       <Box sx={{ 
//         position: "absolute", 
//         top: "5%", 
//         left: "5%", 
//         fontSize: { xs: "40px", sm: "50px", md: "60px" }, 
//         opacity: 0.3, 
//         animation: "float 3s ease-in-out infinite",
//         pointerEvents: "none",
//         zIndex: 0
//       }}>
//         🌈
//       </Box>
//       <Box sx={{ 
//         position: "absolute", 
//         bottom: "10%", 
//         right: "5%", 
//         fontSize: { xs: "50px", sm: "70px", md: "80px" }, 
//         opacity: 0.2, 
//         animation: "float 4s ease-in-out infinite 1s",
//         pointerEvents: "none",
//         zIndex: 0
//       }}>
//         🎈
//       </Box>
//       <Box sx={{ 
//         position: "absolute", 
//         top: "20%", 
//         right: "10%", 
//         fontSize: { xs: "30px", sm: "40px", md: "50px" }, 
//         opacity: 0.25, 
//         animation: "float 5s ease-in-out infinite 0.5s",
//         pointerEvents: "none",
//         zIndex: 0
//       }}>
//         ⭐
//       </Box>
//       <Box sx={{ 
//         position: "absolute", 
//         bottom: "15%", 
//         left: "8%", 
//         fontSize: { xs: "45px", sm: "60px", md: "70px" }, 
//         opacity: 0.2, 
//         animation: "float 3.5s ease-in-out infinite 2s",
//         pointerEvents: "none",
//         zIndex: 0
//       }}>
//         🎪
//       </Box>
//       <Box sx={{ 
//         position: "absolute", 
//         top: "40%", 
//         left: "15%", 
//         fontSize: { xs: "25px", sm: "35px", md: "40px" }, 
//         opacity: 0.2, 
//         animation: "float 4.5s ease-in-out infinite 1.5s",
//         pointerEvents: "none",
//         zIndex: 0
//       }}>
//         🦋
//       </Box>
//       <Box sx={{ 
//         position: "absolute", 
//         top: "70%", 
//         right: "20%", 
//         fontSize: { xs: "35px", sm: "45px", md: "55px" }, 
//         opacity: 0.2, 
//         animation: "float 3s ease-in-out infinite 0.8s",
//         pointerEvents: "none",
//         zIndex: 0
//       }}>
//         🐼
//       </Box>
//       <Box sx={{ 
//         position: "absolute", 
//         top: "10%", 
//         right: "30%", 
//         fontSize: { xs: "25px", sm: "30px", md: "35px" }, 
//         opacity: 0.2, 
//         animation: "float 5s ease-in-out infinite 1.2s",
//         pointerEvents: "none",
//         zIndex: 0
//       }}>
//         ✨
//       </Box>
//       <Box sx={{ 
//         position: "absolute", 
//         bottom: "25%", 
//         left: "20%", 
//         fontSize: { xs: "30px", sm: "40px", md: "45px" }, 
//         opacity: 0.15, 
//         animation: "float 4s ease-in-out infinite 0.3s",
//         pointerEvents: "none",
//         zIndex: 0
//       }}>
//         🎵
//       </Box>
//       <Box sx={{ 
//         position: "absolute", 
//         top: "50%", 
//         right: "5%", 
//         fontSize: { xs: "20px", sm: "25px", md: "30px" }, 
//         opacity: 0.2, 
//         animation: "float 3.8s ease-in-out infinite 1.8s",
//         pointerEvents: "none",
//         zIndex: 0
//       }}>
//         🎨
//       </Box>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(5deg); }
//         }
        
//         @keyframes bounce {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//         }
//       `}</style>

//       {/* Content */}
//       <Box sx={{ 
//         position: "relative", 
//         zIndex: 1, 
//         width: "100%",
//         margin: 0,
//         padding: 0,
//         pt: { xs: "80px", sm: "90px", md: "100px" },
//         pb: { xs: "50px", sm: "60px", md: "80px" }
//       }}>
//         {/* Header with Back Button */}
//         <Box sx={{ 
//           display: "flex", 
//           justifyContent: "space-between", 
//           alignItems: "center", 
//           mb: { xs: 3, sm: 4, md: 5 }, 
//           flexWrap: "wrap", 
//           gap: 2,
//           px: { xs: 2, sm: 3, md: 4 }
//         }}>
//           <Button
//             onClick={handleBackToDashboard}
//             sx={{
//               background: "rgba(255,255,255,0.2)",
//               backdropFilter: "blur(10px)",
//               color: "white",
//               borderRadius: "30px",
//               px: { xs: 2, sm: 3 },
//               py: { xs: 0.8, sm: 1 },
//               textTransform: "none",
//               fontWeight: "bold",
//               fontSize: { xs: "12px", sm: "14px" },
//               '&:hover': {
//                 background: "rgba(255,255,255,0.3)",
//                 transform: "translateX(-5px)"
//               }
//             }}
//             startIcon={<Iconify icon="material-symbols:arrow-back" width={20} height={20} />}
//           >
//             Back to Dashboard
//           </Button>
          
//           <Box 
//             onClick={handleIconClick}
//             sx={{
//               background: "rgba(255,255,255,0.15)",
//               backdropFilter: "blur(10px)",
//               borderRadius: "30px",
//               px: { xs: 2, sm: 3 },
//               py: { xs: 0.5, sm: 1 },
//               textAlign: "center",
//               cursor: "pointer",
//               transition: "all 0.3s ease",
//               '&:hover': {
//                 background: "rgba(255,255,255,0.3)",
//                 transform: "scale(1.05)"
//               }
//             }}
//           >
//             <Typography sx={{ 
//               color: "white", 
//               fontWeight: "bold", 
//               fontSize: { xs: "20px", sm: "24px", md: "28px" },
//               display: "flex", 
//               alignItems: "center", 
//               gap: 1 
//             }}>
//               <span>🎮</span> Quiz Time! <span>📖</span>
//             </Typography>
//           </Box>
//         </Box>

//         {/* Header Text */}
//         <Box sx={{ textAlign: "center", mb: { xs: 4, sm: 5, md: 6 }, px: { xs: 2, sm: 3, md: 4 } }}>
//           <Typography sx={{ 
//             color: "#FFE0B2", 
//             fontWeight: 600,
//             fontSize: { xs: "14px", sm: "16px", md: "18px" },
//             background: "rgba(0,0,0,0.2)",
//             display: "inline-block",
//             px: { xs: 3, sm: 4 },
//             py: { xs: 1, sm: 1.5 },
//             borderRadius: "40px"
//           }}>
//             ⭐ Select a day to begin your Bible quiz adventure! ⭐
//           </Typography>
//         </Box>

//         {/* Cards */}
//         <Box sx={{ 
//           display: "flex", 
//           flexDirection: "column",
//           alignItems: "center",
//           width: "100%"
//         }}>
//           <Box sx={{ 
//             display: "flex", 
//             justifyContent: "center", 
//             gap: { xs: 3, sm: 4, md: 5 }, 
//             flexWrap: "wrap", 
//             mb: { xs: 3, sm: 4, md: 5 },
//             px: { xs: 2, sm: 2, md: 2 }
//           }}>
//             {days.slice(0, 3).map((d, i) => renderCard(d, i))}
//           </Box>

//           <Box sx={{ 
//             display: "flex", 
//             justifyContent: "center", 
//             gap: { xs: 3, sm: 4, md: 5 }, 
//             flexWrap: "wrap",
//             px: { xs: 2, sm: 2, md: 2 }
//           }}>
//             {days.slice(3, 5).map((d, i) => renderCard(d, i + 3))}
//           </Box>
//         </Box>

//         {/* Footer */}
//         <Box sx={{ 
//           textAlign: "center", 
//           mt: { xs: 5, sm: 6, md: 8 }, 
//           pt: { xs: 2, sm: 3 }, 
//           pb: { xs: 2, sm: 3 },
//           borderTop: "1px solid rgba(255,255,255,0.2)",
//           px: { xs: 2, sm: 3, md: 4 }
//         }}>
//           <Typography sx={{ 
//             color: "rgba(255,255,255,0.8)", 
//             fontSize: { xs: "10px", sm: "12px", md: "14px" }, 
//             display: "flex", 
//             alignItems: "center", 
//             justifyContent: "center", 
//             gap: 1,
//             flexWrap: "wrap"
//           }}>
//             <span>❤️</span> Jesus loves you! <span>✝️</span> | Learn God's Word every day! <span>📖</span>
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// }










"use client";

import { useRouter, useParams } from "next/navigation";
import * as React from "react";
import moment from "moment-timezone";
import { Box, Button, Typography, Stack, Card } from "@mui/material";
import Iconify from "../../../../components/Iconify";

const days = [
  { title: "Day 1", day: "2026-05-11", emoji: "🌟", verse: "Citadel Be Disciplined" },
  { title: "Day 2", day: "2026-05-12", emoji: "⭐", verse: "Beyond Legends" },
  { title: "Day 3", day: "2026-05-13", emoji: "🌈", verse: "Be Strong" },
  { title: "Day 4", day: "2026-05-14", emoji: "🕊️", verse: "Warrior of God" },
  { title: "Day 5", day: "2026-05-15", emoji: "🎉", verse: "Be Mindful" },
];

export default function QuizRadioPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const [clickCount, setClickCount] = React.useState(0);

  const now = moment().tz("Asia/Kolkata");
  const currentDate = now.format("YYYY-MM-DD");
  const currentTimer = now.format("HHmmss");

  const handleGame = (day, dayNumber) => {
    localStorage.setItem("qdate", day);
    router.push(`/dashboard/playgame/${id}/day${dayNumber}`);
  };

  const handleBackToDashboard = () => {
    router.push('/dashboard');
  };

  const handleRefresh = () => window.location.reload();

  const handleIconClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    
    if (newCount === 5) {
      const password = prompt("Enter admin password:");
      if (password === "!!!") {
        router.push('/vbs-admin');
      }
      setClickCount(0);
    }
    
    setTimeout(() => {
      setClickCount(0);
    }, 3000);
  };

  const renderCard = (d, i) => {
    const dayNumber = i + 1;
    const dayDateTime = moment(`${d.day}T12:00:00`).tz("Asia/Kolkata");
    const isEnabled = dayDateTime.isSameOrBefore(now);
    const isToday = d.day === currentDate;
    const isBeforeNoon = currentTimer < "120000";

    // GOLD color with ORANGE border
    const goldColor = "#FFD700";
    const orangeColor = "#FF8C00";

    return (
      <Card
        key={i}
        sx={{
          width: { xs: 280, sm: 300, md: 320 },
          minHeight: 220,
          borderRadius: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: `linear-gradient(135deg, ${goldColor}20, ${goldColor}40)`,
          backdropFilter: "blur(10px)",
          border: `3px solid ${orangeColor}`,
          cursor: isEnabled ? "pointer" : "not-allowed",
          transition: "all 0.3s ease",
          position: "relative",
          overflow: "hidden",
          '&:hover': isEnabled && {
            transform: "translateY(-10px) scale(1.02)",
            boxShadow: `0 20px 40px ${orangeColor}80`,
            border: `3px solid ${goldColor}`,
          }
        }}
      >
        <Box sx={{
          position: "absolute",
          top: -20,
          right: -20,
          width: 100,
          height: 100,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${goldColor}30, transparent)`,
          zIndex: 0
        }} />
        
        <Box sx={{ position: "relative", zIndex: 1, textAlign: "center", p: 2 }}>
          <Typography sx={{ fontSize: "50px", mb: 1 }}>
            {d.emoji}
          </Typography>

          <Typography sx={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#ff9d00",
            mb: 1,
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
          }}>
            {d.title}
          </Typography>

          <Typography sx={{
            fontSize: "12px",
            color: "#ffffff",
            mb: 2,
            fontStyle: "italic",
            fontWeight: 500
          }}>
            "{d.verse}"
          </Typography>

          <Box sx={{ position: "relative", display: "inline-block", mb: 1 }}>
            <Iconify
              width={40}
              height={40}
              icon={isEnabled ? "material-symbols:play-circle-rounded" : "fxemoji:lock"}
              sx={{
                color: isEnabled ? goldColor : "#999",
                transition: "transform 0.3s ease",
                '&:hover': isEnabled && { transform: "scale(1.1)" }
              }}
            />
          </Box>

          <Button
            variant="contained"
            disabled={!isEnabled}
            onClick={() => handleGame(d.day, dayNumber)}
            sx={{
              background: isEnabled ? `linear-gradient(135deg, ${goldColor}, ${orangeColor})` : "#BDBDBD",
              color: isEnabled ? "#5C4033" : "#555",
              borderRadius: "25px",
              textTransform: "none",
              px: 3,
              py: 1,
              fontWeight: 700,
              fontSize: "16px",
              fontFamily: "Poppins, sans-serif",
              width: "100%",
              '&:hover': isEnabled && {
                background: `linear-gradient(135deg, ${orangeColor}, ${goldColor})`,
                transform: "scale(1.05)",
                boxShadow: `0 5px 20px ${orangeColor}`,
              }
            }}
          >
            {isEnabled ? "Play Quiz 🎮" : "Locked 🔒"}
          </Button>

          {isToday && isBeforeNoon && (
            <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" sx={{ mt: 1 }}>
              <Button 
                variant="outlined" 
                onClick={handleRefresh}
                size="small"
                sx={{ fontSize: "10px" }}
              >
                Reload
              </Button>
              <Typography variant="caption" sx={{ color: "#d32f2f", fontWeight: "bold" }}>
                ⏰ Starts at 12:00 PM
              </Typography>
            </Stack>
          )}
        </Box>
      </Card>
    );
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflowX: "hidden",
        fontFamily: "Poppins, sans-serif",
        position: "relative",
        margin: 0,
        padding: 0,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          background-attachment: fixed;
          background-size: cover;
        }
      `}</style>

      {/* Animated Background Elements */}
      <Box sx={{ 
        position: "absolute", 
        top: "5%", 
        left: "5%", 
        fontSize: { xs: "40px", sm: "50px", md: "60px" }, 
        opacity: 0.3, 
        animation: "float 3s ease-in-out infinite",
        pointerEvents: "none",
        zIndex: 0
      }}>
        🌈
      </Box>
      <Box sx={{ 
        position: "absolute", 
        bottom: "10%", 
        right: "5%", 
        fontSize: { xs: "50px", sm: "70px", md: "80px" }, 
        opacity: 0.2, 
        animation: "float 4s ease-in-out infinite 1s",
        pointerEvents: "none",
        zIndex: 0
      }}>
        🎈
      </Box>
      <Box sx={{ 
        position: "absolute", 
        top: "20%", 
        right: "10%", 
        fontSize: { xs: "30px", sm: "40px", md: "50px" }, 
        opacity: 0.25, 
        animation: "float 5s ease-in-out infinite 0.5s",
        pointerEvents: "none",
        zIndex: 0
      }}>
        ⭐
      </Box>
      <Box sx={{ 
        position: "absolute", 
        bottom: "15%", 
        left: "8%", 
        fontSize: { xs: "45px", sm: "60px", md: "70px" }, 
        opacity: 0.2, 
        animation: "float 3.5s ease-in-out infinite 2s",
        pointerEvents: "none",
        zIndex: 0
      }}>
        🎪
      </Box>
      <Box sx={{ 
        position: "absolute", 
        top: "40%", 
        left: "15%", 
        fontSize: { xs: "25px", sm: "35px", md: "40px" }, 
        opacity: 0.2, 
        animation: "float 4.5s ease-in-out infinite 1.5s",
        pointerEvents: "none",
        zIndex: 0
      }}>
        🦋
      </Box>
      <Box sx={{ 
        position: "absolute", 
        top: "70%", 
        right: "20%", 
        fontSize: { xs: "35px", sm: "45px", md: "55px" }, 
        opacity: 0.2, 
        animation: "float 3s ease-in-out infinite 0.8s",
        pointerEvents: "none",
        zIndex: 0
      }}>
        🐼
      </Box>
      <Box sx={{ 
        position: "absolute", 
        top: "10%", 
        right: "30%", 
        fontSize: { xs: "25px", sm: "30px", md: "35px" }, 
        opacity: 0.2, 
        animation: "float 5s ease-in-out infinite 1.2s",
        pointerEvents: "none",
        zIndex: 0
      }}>
        ✨
      </Box>
      <Box sx={{ 
        position: "absolute", 
        bottom: "25%", 
        left: "20%", 
        fontSize: { xs: "30px", sm: "40px", md: "45px" }, 
        opacity: 0.15, 
        animation: "float 4s ease-in-out infinite 0.3s",
        pointerEvents: "none",
        zIndex: 0
      }}>
        🎵
      </Box>
      <Box sx={{ 
        position: "absolute", 
        top: "50%", 
        right: "5%", 
        fontSize: { xs: "20px", sm: "25px", md: "30px" }, 
        opacity: 0.2, 
        animation: "float 3.8s ease-in-out infinite 1.8s",
        pointerEvents: "none",
        zIndex: 0
      }}>
        🎨
      </Box>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      {/* Content */}
      <Box sx={{ 
        position: "relative", 
        zIndex: 1, 
        width: "100%",
        margin: 0,
        padding: 0,
        pt: { xs: "80px", sm: "90px", md: "100px" },
        pb: { xs: "50px", sm: "60px", md: "80px" }
      }}>
        {/* Header with Back Button */}
        <Box sx={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          mb: { xs: 3, sm: 4, md: 5 }, 
          flexWrap: "wrap", 
          gap: 2,
          px: { xs: 2, sm: 3, md: 4 }
        }}>
          <Button
            onClick={handleBackToDashboard}
            sx={{
              background: "rgb(230, 169, 0)",
              backdropFilter: "blur(10px)",
              color: "white",
              borderRadius: "30px",
              px: { xs: 2, sm: 3 },
              py: { xs: 0.8, sm: 1 },
              textTransform: "none",
              fontWeight: "bold",
              fontSize: { xs: "12px", sm: "14px" },
              '&:hover': {
                background: "rgb(254, 131, 0)",
                transform: "translateX(-5px)"
              }
            }}
            startIcon={<Iconify icon="material-symbols:arrow-back" width={20} height={20} />}
          >
            Back to Dashboard
          </Button>
          
          <Box 
            onClick={handleIconClick}
            // sx={{
            //   background: "rgba(255,255,255,0.15)",
            //   backdropFilter: "blur(10px)",
            //   borderRadius: "30px",
            //   px: { xs: 2, sm: 3 },
            //   py: { xs: 0.5, sm: 1 },
            //   textAlign: "center",
            //   cursor: "pointer",
            //   transition: "all 0.3s ease",
            //   '&:hover': {
            //     background: "rgba(255,255,255,0.3)",
            //     transform: "scale(1.05)"
            //   }
            // }}
          >
            {/* <Typography sx={{ 
              color: "white", 
              fontWeight: "bold", 
              fontSize: { xs: "20px", sm: "24px", md: "28px" },
              display: "flex", 
              alignItems: "center", 
              gap: 1 
            }}>
              <span>🎮</span> Quiz Time! <span>📖</span>
            </Typography> */}
          </Box>
        </Box>

        {/* Header Text */}
        <Box sx={{ textAlign: "center", mb: { xs: 4, sm: 5, md: 6 }, px: { xs: 2, sm: 3, md: 4 } }}>
          <Typography sx={{ 
            color: "#FFE0B2", 
            fontWeight: 600,
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            background: "rgba(0,0,0,0.2)",
            display: "inline-block",
            px: { xs: 3, sm: 4 },
            py: { xs: 1, sm: 1.5 },
            borderRadius: "40px"
          }}>
            ⭐ Select a day to begin your Bible quiz adventure! ⭐
          </Typography>
        </Box>

        {/* Cards - All 5 boxes */}
        <Box sx={{ 
          display: "flex", 
          flexDirection: "column",
          alignItems: "center",
          width: "100%"
        }}>
          <Box sx={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: { xs: 3, sm: 4, md: 5 }, 
            flexWrap: "wrap", 
            mb: { xs: 3, sm: 4, md: 5 },
            px: { xs: 2, sm: 2, md: 2 }
          }}>
            {days.slice(0, 3).map((d, i) => renderCard(d, i))}
          </Box>

          <Box sx={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: { xs: 3, sm: 4, md: 5 }, 
            flexWrap: "wrap",
            px: { xs: 2, sm: 2, md: 2 }
          }}>
            {days.slice(3, 5).map((d, i) => renderCard(d, i + 3))}
          </Box>
        </Box>

        {/* Footer */}
        <Box sx={{ 
          textAlign: "center", 
          mt: { xs: 5, sm: 6, md: 8 }, 
          pt: { xs: 2, sm: 3 }, 
          pb: { xs: 2, sm: 3 },
          borderTop: "1px solid rgba(255,255,255,0.2)",
          px: { xs: 2, sm: 3, md: 4 }
        }}>
          <Typography sx={{ 
            color: "rgba(255,255,255,0.8)", 
            fontSize: { xs: "10px", sm: "12px", md: "14px" }, 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            gap: 1,
            flexWrap: "wrap"
          }}>
            <span>❤️</span> Jesus Squad<span>✝️</span> | Learn God's Word every day! <span>📖</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}