// import PropTypes from "prop-types";
// import { useRouter } from "next/navigation";
// import * as React from "react";

// // @mui
// import { useTheme } from "@mui/material/styles";
// import { Box, Button, Typography, Stack, Grid, Card, Container } from "@mui/material";
// // hooks
// import { toast } from "react-toastify";
// import { getScore, startGame } from "../../../../services/JRMFeedService";
// import moment from "moment-timezone";

// import Iconify from "../../../../components/Iconify";

// // ----------------------------------------------------------------------

// const days = [
//   {
//     title: "Day 1",
//     day: "2026-05-11",
//     month: "05",
//   },
//   {
//     title: "Day 2",
//     day: "2026-05-12",
//     month: "05",
//   },
//   {
//     title: "Day 3",
//     day: "2026-05-13",
//     month: "05",
//   },
//   {
//     title: "Day 4",
//     day: "2026-05-14",
//     month: "05",
//   },
//   {
//     title: "Day 5",
//     day: "2026-05-15",
//     month: "05",
//   },
// ];

// QuizRadio.propTypes = {
//   list: PropTypes.shape({
//     childId: PropTypes.string,
//     fullName: PropTypes.string,
//     dateOfBirth: PropTypes.string,
//     gender: PropTypes.string,
//   }),
//   sx: PropTypes.object,
// };

// export default function QuizRadio({ sx }) {
//   const router = useRouter();
//   const pId = localStorage.getItem("partnerId");
//   const token = localStorage.getItem("jwt");
//   const gameName = localStorage.getItem("path");
//   const childId = localStorage.getItem("currentChildId");
//   const theme = useTheme();
//   let day = new Date();
//   const date = moment(day).tz("Asia/Kolkata").format("YYYY-MM-DD");
//   const time = moment(day).tz("Asia/Kolkata").format("HH:mm:ss");
//   const timer = moment(day).tz("Asia/Kolkata").format("HHmmss");
//   const refresh = () => window.location.reload(true);
//   localStorage.setItem("date", date);
//   console.log("date", date);
//   console.log("time", time);

//   const handleGame = async (pId, childId, day, token, i) => {
//     localStorage.setItem("qdate", day);

//     const response = await startGame(pId, childId, day, token, gameName);
//     console.log("fn resp", response);

//     if (!response) {
//       toast.error("Error: Unable to communicate");
//       console.log("Error: Unable to communicate");
//       return;
//     }

//     const result = await getScore(pId, childId, token, gameName);
//     console.log("individual score", result.data);
//     console.log(
//       "datascore",
//       result.data.gameScoreList.filter((d) => d.game === gameName),
//     );

//     const filter = result.data.gameScoreList.filter((d) => d.game === gameName);
//     console.log("filter", filter);
//     const sortfilter = filter.sort(function (a, b) {
//       return a.day - b.day;
//     });

//     console.log("sorted filter", sortfilter);
//     console.log("sorted filter length", sortfilter.length);
//     console.log("i", i);

//     if (i >= sortfilter.length) {
//       router.push(`/dashboard/quiz-game?childId=${childId}&day=${day}&gameName=${gameName}`);
//     } else if (sortfilter[i].endDateTime === null) {
//       if (!response.ok) {
//         console.log("Personal ContactInfo FAILED", response.status);
//         if (response.status === 400) {
//           alert("Game started earlier, you are allowed to continue");
//           console.log("Game started earlier, you are allowed to continue ");
//         } else {
//           toast.error(response.message);
//         }
//       }
//       router.push(`/dashboard/quiz-game?childId=${childId}&day=${day}&gameName=${gameName}`);
//     } else {
//       alert(
//         "You have already played for this day game. Your Score for this game : " +
//           sortfilter[i].score,
//       );
//       return;
//     }
//   };

//   // Inline styles for kid-friendly design
//   const styles = {
//     mainContainer: {
//       minHeight: '100vh',
//       width: '100%',
//       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//       position: 'relative',
//       overflow: 'hidden',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       padding: '20px',
//     },
//     bubble: {
//       position: 'absolute',
//       borderRadius: '50%',
//       background: 'rgba(255, 255, 255, 0.15)',
//       animation: 'float 8s ease-in-out infinite',
//       pointerEvents: 'none',
//       backdropFilter: 'blur(5px)',
//     },
//     contentWrapper: {
//       position: 'relative',
//       zIndex: 2,
//       width: '100%',
//       maxWidth: '1400px',
//       margin: '0 auto',
//     },
//     title: {
//       fontSize: { xs: '28px', sm: '36px', md: '48px' },
//       fontWeight: '900',
//       background: 'linear-gradient(135deg, #FFE259 0%, #FFA751 100%)',
//       WebkitBackgroundClip: 'text',
//       WebkitTextFillColor: 'transparent',
//       textShadow: '3px 3px 6px rgba(0,0,0,0.2)',
//       marginBottom: '30px',
//       textAlign: 'center',
//       animation: 'fadeInDown 0.8s ease-out',
//       fontFamily: "'Comic Neue', 'Comic Neue', cursive",
//       letterSpacing: '1px',
//     },
//     card: {
//       background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)',
//       borderRadius: '28px',
//       padding: '30px 20px',
//       transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
//       cursor: 'pointer',
//       position: 'relative',
//       overflow: 'hidden',
//       boxShadow: '0 20px 35px rgba(0,0,0,0.2)',
//       border: '2px solid rgba(255,255,255,0.3)',
//       '&:hover': {
//         transform: 'translateY(-12px) scale(1.02)',
//         boxShadow: '0 30px 50px rgba(0,0,0,0.3)',
//       },
//     },
//     cardDecor: {
//       position: 'absolute',
//       top: '-30%',
//       right: '-30%',
//       width: '180px',
//       height: '180px',
//       background: 'linear-gradient(135deg, #667eea20 0%, #764ba220 100%)',
//       borderRadius: '50%',
//       transition: 'all 0.5s ease',
//     },
//     dayNumber: {
//       fontSize: '20px',
//       fontWeight: 'bold',
//       color: '#667eea',
//       textTransform: 'uppercase',
//       letterSpacing: '2px',
//       marginBottom: '10px',
//     },
//     dayDate: {
//       fontSize: '14px',
//       color: '#764ba2',
//       fontWeight: '600',
//       marginBottom: '15px',
//     },
//     iconWrapper: {
//       position: 'relative',
//       display: 'inline-block',
//       marginBottom: '15px',
//     },
//     activeDot: {
//       position: 'absolute',
//       top: '-5px',
//       right: '-5px',
//       width: '16px',
//       height: '16px',
//       backgroundColor: '#4caf50',
//       borderRadius: '50%',
//       animation: 'pulse 1.5s ease-in-out infinite',
//       border: '2px solid white',
//     },
//     button: {
//       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//       color: 'white',
//       padding: '12px 28px',
//       borderRadius: '50px',
//       fontSize: '16px',
//       fontWeight: 'bold',
//       textTransform: 'none',
//       transition: 'all 0.3s ease',
//       boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
//       marginTop: '10px',
//       '&:hover': {
//         transform: 'scale(1.05)',
//         boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
//         background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
//       },
//       '&:disabled': {
//         background: 'linear-gradient(135deg, #bdbdbd 0%, #9e9e9e 100%)',
//         transform: 'none',
//         cursor: 'not-allowed',
//         opacity: 0.6,
//       },
//     },
//     lockedButton: {
//       background: 'linear-gradient(135deg, #bdbdbd 0%, #9e9e9e 100%)',
//       cursor: 'not-allowed',
//     },
//     reloadButton: {
//       background: 'linear-gradient(135deg, #ff6b6b 0%, #ff5252 100%)',
//       color: 'white',
//       borderRadius: '50px',
//       padding: '6px 16px',
//       fontSize: '12px',
//       fontWeight: 'bold',
//       marginTop: '10px',
//       '&:hover': {
//         transform: 'scale(1.05)',
//         background: 'linear-gradient(135deg, #ff5252 0%, #ff3838 100%)',
//       },
//     },
//     timeText: {
//       fontSize: '12px',
//       color: '#ff6b6b',
//       fontWeight: 'bold',
//       marginTop: '8px',
//       display: 'flex',
//       alignItems: 'center',
//       gap: '5px',
//     },
//     comingSoonBadge: {
//       background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
//       color: 'white',
//       padding: '4px 12px',
//       borderRadius: '20px',
//       fontSize: '12px',
//       fontWeight: 'bold',
//       position: 'absolute',
//       top: '-10px',
//       right: '-10px',
//       transform: 'rotate(15deg)',
//     },
//     scoreBadge: {
//       background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
//       color: 'white',
//       padding: '8px 16px',
//       borderRadius: '20px',
//       fontSize: '14px',
//       fontWeight: 'bold',
//       marginBottom: '10px',
//       display: 'inline-block',
//     },
//   };

//   // Add CSS keyframes to document head
//   React.useEffect(() => {
//     const styleSheet = document.createElement("style");
//     styleSheet.textContent = `
//       @keyframes float {
//         0%, 100% {
//           transform: translateY(0px) rotate(0deg);
//         }
//         50% {
//           transform: translateY(-30px) rotate(5deg);
//         }
//       }

//       @keyframes fadeInDown {
//         from {
//           opacity: 0;
//           transform: translateY(-40px);
//         }
//         to {
//           opacity: 1;
//           transform: translateY(0);
//         }
//       }

//       @keyframes fadeInUp {
//         from {
//           opacity: 0;
//           transform: translateY(40px);
//         }
//         to {
//           opacity: 1;
//           transform: translateY(0);
//         }
//       }

//       @keyframes bounce {
//         0%, 100% {
//           transform: translateY(0);
//         }
//         50% {
//           transform: translateY(-12px);
//         }
//       }

//       @keyframes pulse {
//         0% {
//           transform: scale(1);
//           opacity: 1;
//         }
//         50% {
//           transform: scale(1.2);
//           opacity: 0.7;
//         }
//         100% {
//           transform: scale(1);
//           opacity: 1;
//         }
//       }

//       @keyframes slideInLeft {
//         from {
//           opacity: 0;
//           transform: translateX(-50px);
//         }
//         to {
//           opacity: 1;
//           transform: translateX(0);
//         }
//       }

//       @keyframes rotate {
//         from {
//           transform: rotate(0deg);
//         }
//         to {
//           transform: rotate(360deg);
//         }
//       }

//       @keyframes glow {
//         0%, 100% {
//           box-shadow: 0 0 5px rgba(102, 126, 234, 0.5);
//         }
//         50% {
//           box-shadow: 0 0 25px rgba(102, 126, 234, 0.9);
//         }
//       }

//       .card-animated {
//         animation: fadeInUp 0.6s ease-out;
//         animation-fill-mode: both;
//       }

//       .card-animated:nth-child(1) { animation-delay: 0.1s; }
//       .card-animated:nth-child(2) { animation-delay: 0.2s; }
//       .card-animated:nth-child(3) { animation-delay: 0.3s; }
//       .card-animated:nth-child(4) { animation-delay: 0.4s; }
//       .card-animated:nth-child(5) { animation-delay: 0.5s; }

//       .icon-bounce {
//         animation: bounce 2s ease-in-out infinite;
//       }

//       @media (max-width: 600px) {
//         .card-animated {
//           margin: 10px;
//         }
//       }

//       /* Custom scrollbar */
//       ::-webkit-scrollbar {
//         width: 10px;
//       }

//       ::-webkit-scrollbar-track {
//         background: rgba(255,255,255,0.1);
//         border-radius: 10px;
//       }

//       ::-webkit-scrollbar-thumb {
//         background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//         border-radius: 10px;
//       }

//       ::-webkit-scrollbar-thumb:hover {
//         background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
//       }
//     `;
//     document.head.appendChild(styleSheet);

//     return () => {
//       document.head.removeChild(styleSheet);
//     };
//   }, []);

//   return (
//     <Box sx={styles.mainContainer}>
//       {/* Animated background bubbles */}
//       {[...Array(20)].map((_, i) => (
//         <Box
//           key={i}
//           sx={{
//             ...styles.bubble,
//             width: Math.random() * 120 + 40,
//             height: Math.random() * 120 + 40,
//             left: `${Math.random() * 100}%`,
//             bottom: `-${Math.random() * 100}px`,
//             animationDelay: `${Math.random() * 8}s`,
//             animationDuration: `${Math.random() * 6 + 5}s`,
//             opacity: Math.random() * 0.3 + 0.1,
//           }}
//         />
//       ))}

//       <Container maxWidth="xl" sx={styles.contentWrapper}>
//         <Typography sx={styles.title}>
//           🎮✨ Select Your Adventure Day! ✨🎮
//         </Typography>

//         <Grid
//           container
//           spacing={{ xs: 2, sm: 3, md: 4 }}
//           justifyContent="center"
//           alignItems="stretch"
//         >
//           {days.map((d, i) => {
//             const isAvailable = new Date(`${d.day}T12:00:00`).getTime() <=
//                                new Date(`${date}T${time}`).getTime();
//             const isToday = new Date(d.day).getDay() === new Date(date).getDay();
//             const isWaitingTime = isToday && timer < 120000;

//             return (
//               <Grid item xs={12} sm={6} md={4} key={i} className="card-animated">
//                 <Card sx={styles.card}>
//                   <Box sx={styles.cardDecor} />

//                   {!isAvailable && (
//                     <Box sx={styles.comingSoonBadge}>
//                       🔒 Coming Soon
//                     </Box>
//                   )}

//                   <Stack direction="column" alignItems="center" spacing={2}>
//                     <Box sx={styles.iconWrapper}>
//                       <Iconify
//                         width={80}
//                         height={80}
//                         icon={isAvailable ? "material-symbols:play-circle-outline" : "fxemoji:lock"}
//                         sx={{
//                           color: isAvailable ? '#667eea' : '#bdbdbd',
//                           opacity: isAvailable ? 1 : 0.5,
//                           transition: 'all 0.3s ease',
//                           cursor: 'pointer',
//                           '&:hover': isAvailable ? {
//                             transform: 'scale(1.1)',
//                           } : {},
//                         }}
//                         className={isAvailable ? "icon-bounce" : ""}
//                       />
//                       {isAvailable && <Box sx={styles.activeDot} />}
//                     </Box>

//                     <Typography sx={styles.dayNumber}>
//                       {d.title}
//                     </Typography>

//                     <Typography sx={styles.dayDate}>
//                       📅 {moment(d.day).format('MMMM DD, YYYY')}
//                     </Typography>

//                     <Button
//                       sx={styles.button}
//                       variant="contained"
//                       disabled={!isAvailable}
//                       onClick={() => handleGame(pId, childId, d.day, token, i)}
//                       startIcon={isAvailable && <span>🎮</span>}
//                       endIcon={!isAvailable && <span>🔒</span>}
//                     >
//                       {isAvailable ? 'Start Game Now!' : 'Locked'}
//                     </Button>

//                     {isWaitingTime && (
//                       <Stack spacing={1} alignItems="center" sx={{ width: '100%' }}>
//                         <Button
//                           variant="outlined"
//                           onClick={refresh}
//                           sx={styles.reloadButton}
//                           startIcon={<span>🔄</span>}
//                         >
//                           Reload Game
//                         </Button>
//                         <Typography sx={styles.timeText}>
//                           <span>⏰</span> Game starts at 12:00 PM IST
//                           <span>✨</span>
//                         </Typography>
//                       </Stack>
//                     )}

//                     {isAvailable && !isWaitingTime && (
//                       <Typography sx={{ fontSize: '12px', color: '#4caf50', marginTop: '10px' }}>
//                         ✅ Ready to play!
//                       </Typography>
//                     )}
//                   </Stack>
//                 </Card>
//               </Grid>
//             );
//           })}
//         </Grid>

//         {/* Footer decoration */}
//         <Box sx={{ textAlign: 'center', marginTop: '50px', opacity: 0.8 }}>
//           <Typography sx={{ color: 'white', fontSize: '14px' }}>
//             🎯 Complete all days to become a champion! 🏆
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// }

import PropTypes from "prop-types";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useMemo } from "react";

// @mui
// import { useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  Typography,
  Stack,
  Grid,
  Card,
  Container,
} from "@mui/material";
// hooks
import { toast } from "react-toastify";
import { getScore, startGame } from "../../../../services/JRMFeedService";
import moment from "moment-timezone";

import Iconify from "../../../../components/Iconify";

// ----------------------------------------------------------------------

const days = [
  {
    title: "Day 1",
    day: "2026-05-11",
    month: "05",
  },
  {
    title: "Day 2",
    day: "2026-05-12",
    month: "05",
  },
  {
    title: "Day 3",
    day: "2026-05-13",
    month: "05",
  },
  {
    title: "Day 4",
    day: "2026-05-14",
    month: "05",
  },
  {
    title: "Day 5",
    day: "2026-05-15",
    month: "05",
  },
];

QuizRadio.propTypes = {
  list: PropTypes.shape({
    childId: PropTypes.string,
    fullName: PropTypes.string,
    dateOfBirth: PropTypes.string,
    gender: PropTypes.string,
  }),
  sx: PropTypes.object,
};

export default function QuizRadio({}) {
  const router = useRouter();
  const pId = localStorage.getItem("partnerId");
  const token = localStorage.getItem("jwt");
  const gameName = localStorage.getItem("path");
  const childId = localStorage.getItem("currentChildId");
  // const theme = useTheme();
  let day = new Date();
  const date = moment(day).tz("Asia/Kolkata").format("YYYY-MM-DD");
  const time = moment(day).tz("Asia/Kolkata").format("HH:mm:ss");
  const timer = moment(day).tz("Asia/Kolkata").format("HHmmss");
  const refresh = () => window.location.reload(true);
  localStorage.setItem("date", date);
  console.log("date", date);
  console.log("time", time);

  // Generate stable random values for bubbles using useMemo
  const bubbles = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      width: i * 6 + 40, // replace with a stable calculation
      height: i * 6 + 40, // replace with a stable calculation
      left: i * 2, // replace with a stable calculation
      bottom: -i * 2, // replace with a stable calculation
      animationDelay: i * 0.2, // replace with a stable calculation
      animationDuration: i * 0.5 + 5, // replace with a stable calculation
      opacity: i * 0.01 + 0.1, // replace with a stable calculation
    }));
  }, []);

  const handleGame = async (pId, childId, day, token, i) => {
    localStorage.setItem("qdate", day);

    const response = await startGame(pId, childId, day, token, gameName);
    console.log("fn resp", response);

    if (!response) {
      toast.error("Error: Unable to communicate");
      console.log("Error: Unable to communicate");
      return;
    }

    const result = await getScore(pId, childId, token, gameName);
    console.log("individual score", result.data);
    console.log(
      "datascore",
      result.data.gameScoreList.filter((d) => d.game === gameName),
    );

    const filter = result.data.gameScoreList.filter((d) => d.game === gameName);
    console.log("filter", filter);
    const sortfilter = filter.sort(function (a, b) {
      return a.day - b.day;
    });

    console.log("sorted filter", sortfilter);
    console.log("sorted filter length", sortfilter.length);
    console.log("i", i);

    if (i >= sortfilter.length) {
      router.push(
        `/dashboard/quiz-game?childId=${childId}&day=${day}&gameName=${gameName}`,
      );
    } else if (sortfilter[i].endDateTime === null) {
      if (!response.ok) {
        console.log("Personal ContactInfo FAILED", response.status);
        if (response.status === 400) {
          alert("Game started earlier, you are allowed to continue");
          console.log("Game started earlier, you are allowed to continue ");
        } else {
          toast.error(response.message);
        }
      }
      router.push(
        `/dashboard/quiz-game?childId=${childId}&day=${day}&gameName=${gameName}`,
      );
    } else {
      alert(
        "You have already played for this day game. Your Score for this game : " +
          sortfilter[i].score,
      );
      return;
    }
  };

  // Inline styles for kid-friendly design
  const styles = {
    mainContainer: {
      minHeight: "100vh",
      width: "100%",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    },
    bubble: {
      position: "absolute",
      borderRadius: "50%",
      background: "rgba(255, 255, 255, 0.15)",
      animation: "float 8s ease-in-out infinite",
      pointerEvents: "none",
      backdropFilter: "blur(5px)",
    },
    contentWrapper: {
      position: "relative",
      zIndex: 2,
      width: "100%",
      maxWidth: "1400px",
      margin: "0 auto",
    },
    title: {
      fontSize: { xs: "28px", sm: "36px", md: "48px" },
      fontWeight: "900",
      background: "linear-gradient(135deg, #FFE259 0%, #FFA751 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textShadow: "3px 3px 6px rgba(0,0,0,0.2)",
      marginBottom: "30px",
      textAlign: "center",
      animation: "fadeInDown 0.8s ease-out",
      fontFamily: "'Comic Neue', 'Comic Neue', cursive",
      letterSpacing: "1px",
    },
    card: {
      background: "linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)",
      borderRadius: "28px",
      padding: "30px 20px",
      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      cursor: "pointer",
      position: "relative",
      overflow: "hidden",
      boxShadow: "0 20px 35px rgba(0,0,0,0.2)",
      border: "2px solid rgba(255,255,255,0.3)",
      "&:hover": {
        transform: "translateY(-12px) scale(1.02)",
        boxShadow: "0 30px 50px rgba(0,0,0,0.3)",
      },
    },
    cardDecor: {
      position: "absolute",
      top: "-30%",
      right: "-30%",
      width: "180px",
      height: "180px",
      background: "linear-gradient(135deg, #667eea20 0%, #764ba220 100%)",
      borderRadius: "50%",
      transition: "all 0.5s ease",
    },
    dayNumber: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#667eea",
      textTransform: "uppercase",
      letterSpacing: "2px",
      marginBottom: "10px",
    },
    dayDate: {
      fontSize: "14px",
      color: "#764ba2",
      fontWeight: "600",
      marginBottom: "15px",
    },
    iconWrapper: {
      position: "relative",
      display: "inline-block",
      marginBottom: "15px",
    },
    activeDot: {
      position: "absolute",
      top: "-5px",
      right: "-5px",
      width: "16px",
      height: "16px",
      backgroundColor: "#4caf50",
      borderRadius: "50%",
      animation: "pulse 1.5s ease-in-out infinite",
      border: "2px solid white",
    },
    button: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      padding: "12px 28px",
      borderRadius: "50px",
      fontSize: "16px",
      fontWeight: "bold",
      textTransform: "none",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
      marginTop: "10px",
      "&:hover": {
        transform: "scale(1.05)",
        boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
        background: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
      },
      "&:disabled": {
        background: "linear-gradient(135deg, #bdbdbd 0%, #9e9e9e 100%)",
        transform: "none",
        cursor: "not-allowed",
        opacity: 0.6,
      },
    },
    lockedButton: {
      background: "linear-gradient(135deg, #bdbdbd 0%, #9e9e9e 100%)",
      cursor: "not-allowed",
    },
    reloadButton: {
      background: "linear-gradient(135deg, #ff6b6b 0%, #ff5252 100%)",
      color: "white",
      borderRadius: "50px",
      padding: "6px 16px",
      fontSize: "12px",
      fontWeight: "bold",
      marginTop: "10px",
      "&:hover": {
        transform: "scale(1.05)",
        background: "linear-gradient(135deg, #ff5252 0%, #ff3838 100%)",
      },
    },
    timeText: {
      fontSize: "12px",
      color: "#ff6b6b",
      fontWeight: "bold",
      marginTop: "8px",
      display: "flex",
      alignItems: "center",
      gap: "5px",
    },
    comingSoonBadge: {
      background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      color: "white",
      padding: "4px 12px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "bold",
      position: "absolute",
      top: "-10px",
      right: "-10px",
      transform: "rotate(15deg)",
    },
    scoreBadge: {
      background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      color: "white",
      padding: "8px 16px",
      borderRadius: "20px",
      fontSize: "14px",
      fontWeight: "bold",
      marginBottom: "10px",
      display: "inline-block",
    },
  };

  // Add CSS keyframes to document head
  React.useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      @keyframes float {
        0%, 100% { 
          transform: translateY(0px) rotate(0deg); 
        }
        50% { 
          transform: translateY(-30px) rotate(5deg); 
        }
      }
      
      @keyframes fadeInDown {
        from {
          opacity: 0;
          transform: translateY(-40px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(40px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes bounce {
        0%, 100% { 
          transform: translateY(0); 
        }
        50% { 
          transform: translateY(-12px); 
        }
      }
      
      @keyframes pulse {
        0% { 
          transform: scale(1);
          opacity: 1;
        }
        50% { 
          transform: scale(1.2);
          opacity: 0.7;
        }
        100% { 
          transform: scale(1);
          opacity: 1;
        }
      }
      
      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      
      @keyframes glow {
        0%, 100% { 
          box-shadow: 0 0 5px rgba(102, 126, 234, 0.5);
        }
        50% { 
          box-shadow: 0 0 25px rgba(102, 126, 234, 0.9);
        }
      }
      
      .card-animated {
        animation: fadeInUp 0.6s ease-out;
        animation-fill-mode: both;
      }
      
      .card-animated:nth-child(1) { animation-delay: 0.1s; }
      .card-animated:nth-child(2) { animation-delay: 0.2s; }
      .card-animated:nth-child(3) { animation-delay: 0.3s; }
      .card-animated:nth-child(4) { animation-delay: 0.4s; }
      .card-animated:nth-child(5) { animation-delay: 0.5s; }
      
      .icon-bounce {
        animation: bounce 2s ease-in-out infinite;
      }
      
      @media (max-width: 600px) {
        .card-animated {
          margin: 10px;
        }
      }
      
      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 10px;
      }
      
      ::-webkit-scrollbar-track {
        background: rgba(255,255,255,0.1);
        border-radius: 10px;
      }
      
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 10px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <Box sx={styles.mainContainer}>
      {/* Animated background bubbles */}
      {bubbles.map((bubble) => (
        <Box
          key={bubble.id}
          sx={{
            ...styles.bubble,
            width: bubble.width,
            height: bubble.height,
            left: `${bubble.left}%`,
            bottom: `${bubble.bottom}px`,
            animationDelay: `${bubble.animationDelay}s`,
            animationDuration: `${bubble.animationDuration}s`,
            opacity: bubble.opacity,
          }}
        />
      ))}

      <Container maxWidth="xl" sx={styles.contentWrapper}>
        <Typography sx={styles.title}>
          🎮✨ Select Your Adventure Day! ✨🎮
        </Typography>

        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 4 }}
          sx={{ justifyContent: "center" }}
          // justifyContent="center"
          alignItems="stretch"
        >
          {days.map((d, i) => {
            const isAvailable =
              new Date(`${d.day}T12:00:00`).getTime() <=
              new Date(`${date}T${time}`).getTime();
            const isToday =
              new Date(d.day).getDay() === new Date(date).getDay();
            const isWaitingTime = isToday && timer < 120000;

            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={i}
                className="card-animated"
              >
                <Card sx={styles.card}>
                  <Box sx={styles.cardDecor} />

                  {!isAvailable && (
                    <Box sx={styles.comingSoonBadge}>🔒 Coming Soon</Box>
                  )}

                  <Stack direction="column" alignItems="center" spacing={2}>
                    <Box sx={styles.iconWrapper}>
                      <Iconify
                        width={80}
                        height={80}
                        icon={
                          isAvailable
                            ? "material-symbols:play-circle-outline"
                            : "fxemoji:lock"
                        }
                        sx={{
                          color: isAvailable ? "#667eea" : "#bdbdbd",
                          opacity: isAvailable ? 1 : 0.5,
                          transition: "all 0.3s ease",
                          cursor: "pointer",
                          "&:hover": isAvailable
                            ? {
                                transform: "scale(1.1)",
                              }
                            : {},
                        }}
                        className={isAvailable ? "icon-bounce" : ""}
                      />
                      {isAvailable && <Box sx={styles.activeDot} />}
                    </Box>

                    <Typography sx={styles.dayNumber}>{d.title}</Typography>

                    <Typography sx={styles.dayDate}>
                      📅 {moment(d.day).format("MMMM DD, YYYY")}
                    </Typography>

                    <Button
                      sx={styles.button}
                      variant="contained"
                      disabled={!isAvailable}
                      onClick={() => handleGame(pId, childId, d.day, token, i)}
                      startIcon={isAvailable && <span>🎮</span>}
                      endIcon={!isAvailable && <span>🔒</span>}
                    >
                      {isAvailable ? "Start Game Now!" : "Locked"}
                    </Button>

                    {isWaitingTime && (
                      <Stack
                        spacing={1}
                        alignItems="center"
                        sx={{ width: "100%" }}
                      >
                        <Button
                          variant="outlined"
                          onClick={refresh}
                          sx={styles.reloadButton}
                          startIcon={<span>🔄</span>}
                        >
                          Reload Game
                        </Button>
                        <Typography sx={styles.timeText}>
                          <span>⏰</span> Game starts at 12:00 PM IST
                          <span>✨</span>
                        </Typography>
                      </Stack>
                    )}

                    {isAvailable && !isWaitingTime && (
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: "#4caf50",
                          marginTop: "10px",
                        }}
                      >
                        ✅ Ready to play!
                      </Typography>
                    )}
                  </Stack>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* Footer decoration */}
        <Box sx={{ textAlign: "center", marginTop: "50px", opacity: 0.8 }}>
          <Typography sx={{ color: "white", fontSize: "14px" }}>
            🎯 Complete all days to become a champion! 🏆
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
