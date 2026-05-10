
// 'use client';

// import { useRef, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { styled } from "@mui/material/styles";
// import {
//   Button,
//   Typography,
//   Stack,
//   Box,
// } from "@mui/material";
// import moment from "moment-timezone";
// import { startGame } from "../../../../services/JRMFeedService";
// import Page from "../../../../components/Page";

// const backgroundImage = "/assets/acti.png";

// // RootStyle – background image, no top padding/margin
// const RootStyle = styled(Box)(() => ({
//   minHeight: "100vh",
//   width: "100%",
//   backgroundImage: `url(${backgroundImage})`,
//   backgroundSize: "cover",
//   backgroundPosition: "center top",
//   backgroundRepeat: "no-repeat",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//  mt:-10,
//   paddingBottom: "48px",
//   margin: 0,
// }));

// const DayButton = styled(Button)(() => ({
//   borderRadius: "30px",
//   padding: "10px 26px",
//   fontWeight: 700,
//   fontSize: "1rem",
//   color: "#fff",
//   background: "linear-gradient(135deg, #FFA726, #FB8C00)",
//   boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
//   textTransform: "none",
//   transition: "0.2s",
//   "&:hover": {
//     transform: "scale(1.03)",
//     background: "linear-gradient(135deg, #FB8C00, #EF6C00)",
//   },
//   "&.Mui-disabled": {
//     background: "#bdbdbd",
//     color: "#eee",
//     boxShadow: "none",
//     transform: "none",
//   },
// }));

// const IframeWrapper = styled(Box)(({ theme }) => ({
//   width: "100%",
//   maxWidth: "800px",
//   marginTop: theme.spacing(3),
//   borderRadius: "20px",
//   overflow: "hidden",
//   boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
//   backgroundColor: "#fff", // fallback while loading
// }));

// export default function ActivitiesPage() {
//   const { childId } = useParams();
//   const router = useRouter();
//   const [state, setState] = useState("");
//   const ref = useRef(null);

//   const pId = typeof window !== "undefined" ? localStorage.getItem("partnerId") : null;
//   const token = typeof window !== "undefined" ? localStorage.getItem("jwt") : null;

//   const startGameAndShow = async (day, gameName, stateKey) => {
//     if (!pId || !token || !childId) return;
//     try {
//       await startGame(pId, childId, day, token, gameName);
//       console.log(`Started ${gameName} for child ${childId}`);
//     } catch (err) {
//       console.error("startGame error:", err);
//     }
//     setState(stateKey);
//     ref.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const now = moment().tz("Asia/Kolkata");
//   const currentDateTime = now.format("YYYY-MM-DDTHH:mm:ss");
//   const isEnabled = (dateTimeStr) =>
//     new Date(dateTimeStr) <= new Date(currentDateTime);

//   // Inject global styles to remove any padding/margin from layout containers
//   // This ensures the white gap below navbar disappears.
//   const globalStyles = `
//     html, body, #__next, main, .MuiContainer-root, .MuiBox-root {
//       padding-top: 0 !important;
//       margin-top: 0 !important;
//     }
//     nav, header {
//       margin-bottom: 0 !important;
//     }
//   `;

//   return (
//     <>
//       <style jsx global>{globalStyles}</style>
//       <Page
//         title="Activities"
//         sx={{
//           p: 0,
//           '& .MuiContainer-root': {
//             p: '0 !important',
//             m: '0 !important',
//             maxWidth: 'none !important',
//           },
//           '& main': {
//             p: '0 !important',
//             m: '0 !important',
//           },
//         }}
//       >
//         <RootStyle>
//           <Typography
//             variant="h6"
//             sx={{
//               color: "white",
//               fontWeight: 600,
//               textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
//               mb: 2,
//               mt: 40,
//             }}
//           >
//             Activities
//           </Typography>

//           <Stack
//             direction="row"
//             sx={{
//               flexWrap: "wrap",
//               justifyContent: "center",
//               gap: 2,
//               px: 2,
//               mb: 10,
//             }}
//           >
//             <DayButton
//               disabled={!isEnabled("2026-04-11T11:50:00")}
//               onClick={() => startGameAndShow("2026-05-11", "Day1", "day1")}
//             >
//               Day 1
//             </DayButton>
//             <DayButton
//               disabled={!isEnabled("2026-04-12T11:50:00")}
//               onClick={() => startGameAndShow("2026-05-12", "Day2", "day2")}
//             >
//               Day 2
//             </DayButton>
//             <DayButton
//               disabled={!isEnabled("2026-04-13T11:50:00")}
//               onClick={() => startGameAndShow("2026-05-13", "Day3", "day3")}
//             >
//               Day 3
//             </DayButton>
//             <DayButton
//               disabled={!isEnabled("2026-04-14T11:50:00")}
//               onClick={() => startGameAndShow("2026-05-14", "Day4", "day4")}
//             >
//               Day 4
//             </DayButton>
//             <DayButton
//               disabled={!isEnabled("2026-04-15T11:50:00")}
//               onClick={() => startGameAndShow("2026-05-15", "Day5", "day5")}
//             >
//               Day 5
//             </DayButton>
//           </Stack>

//           <div ref={ref} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
//             {state === "day1" && (
//               <IframeWrapper>
//                 <iframe
//                   src="https://online.jesusredeems.com/games/2026/Day1/"
//                   width="100%"
//                   height="1050"
//                   style={{ border: "none", display: "block" }}
//                   title="Day1"
//                 />
//               </IframeWrapper>
//             )}
//             {state === "day2" && (
//               <IframeWrapper>
//                 <iframe
//                   src="https://online.jesusredeems.com/games/2026/Day2/"
//                   width="100%"
//                   height="950"
//                   style={{ border: "none", display: "block" }}
//                   title="Day2"
//                 />
//               </IframeWrapper>
//             )}
//             {state === "day3" && (
//               <IframeWrapper>
//                 <iframe
//                   src="https://online.jesusredeems.com/games/2026/Day3/"
//                   width="100%"
//                   height="1050"
//                   style={{ border: "none", display: "block" }}
//                   title="Day3"
//                 />
//               </IframeWrapper>
//             )}
//             {state === "day4" && (
//               <IframeWrapper>
//                 <iframe
//                   src="https://online.jesusredeems.com/games/2026/Day4/"
//                   width="100%"
//                   height="1050"
//                   style={{ border: "none", display: "block" }}
//                   title="Day4"
//                 />
//               </IframeWrapper>
//             )}
//             {state === "day5" && (
//               <IframeWrapper>
//                 <iframe
//                   src="https://online.jesusredeems.com/games/2026/Day5/"
//                   width="100%"
//                   height="950"
//                   style={{ border: "none", display: "block" }}
//                   title="Day5"
//                 />
//               </IframeWrapper>
//             )}
//           </div>
//         </RootStyle>
//       </Page>
//     </>
//   );
// }



// working (unlock)



// 'use client';

// import { useRef, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { styled } from "@mui/material/styles";
// import {
//   Button,
//   Typography,
//   Stack,
//   Box,
// } from "@mui/material";
// import moment from "moment-timezone";
// import { startGame } from "../../../../services/JRMFeedService";
// import Page from "../../../../components/Page";

// const backgroundImage = "/assets/acti.png";

// // RootStyle – background image, no top padding/margin
// const RootStyle = styled(Box)(() => ({
//   minHeight: "100vh",
//   width: "100%",
//   backgroundImage: `url(${backgroundImage})`,
//   backgroundSize: "cover",
//   backgroundPosition: "center top",
//   backgroundRepeat: "no-repeat",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   mt: -10,
//   paddingBottom: "48px",
//   margin: 0,
// }));

// const DayButton = styled(Button)(() => ({
//   borderRadius: "10px",
//   padding: "5px 16px",
//   fontWeight: 700,
//   fontSize: "1rem",
//   color: "#888888b0",
//   background: "linear-gradient(135deg, #FFA726, #FB8C00)",
//   boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
//   textTransform: "none",
//   transition: "0.2s",
//   "&:hover": {
//     transform: "scale(1.03)",
//     background: "linear-gradient(135deg, #FB8C00, #EF6C00)",
//   },
//   "&.Mui-disabled": {
//     background: "#bdbdbd",
//     color: "#ffffff",
//     boxShadow: "none",
//     transform: "none",
//   },
// }));

// const IframeWrapper = styled(Box)(({ theme }) => ({
//   width: "100%",
//   maxWidth: "800px",
//   marginTop: theme.spacing(3),
//   borderRadius: "20px",
//   overflow: "hidden",
//   boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
//   backgroundColor: "#fff",
// }));

// // Days configuration
// const daysConfig = [
//   { date: "2026-05-11", label: "Day 1", gameName: "Day1", stateKey: "day1" },
//   { date: "2026-05-12", label: "Day 2", gameName: "Day2", stateKey: "day2" },
//   { date: "2026-05-13", label: "Day 3", gameName: "Day3", stateKey: "day3" },
//   { date: "2026-05-14", label: "Day 4", gameName: "Day4", stateKey: "day4" },
//   { date: "2026-05-15", label: "Day 5", gameName: "Day5", stateKey: "day5" },
// ];

// export default function ActivitiesPage() {
//   const { childId } = useParams();
//   const router = useRouter();
//   const [state, setState] = useState("");
//   const ref = useRef(null);

//   const pId = typeof window !== "undefined" ? localStorage.getItem("partnerId") : null;
//   const token = typeof window !== "undefined" ? localStorage.getItem("jwt") : null;

//   const startGameAndShow = async (day, gameName, stateKey) => {
//     if (!pId || !token || !childId) return;
//     try {
//       await startGame(pId, childId, day, token, gameName);
//       console.log(`Started ${gameName} for child ${childId}`);
//     } catch (err) {
//       console.error("startGame error:", err);
//     }
//     setState(stateKey);
//     ref.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   // Get current IST time
//   const now = moment().tz("Asia/Kolkata");

//   // Helper: is the given day already unlocked? (unlocks at 12:00 PM IST on that day)
//   const isDayUnlocked = (dateStr) => {
//     const unlockTime = moment.tz(`${dateStr}T12:00:00`, "Asia/Kolkata");
//     return unlockTime.isSameOrBefore(now);
//   };

//   // Global styles to remove unwanted padding/margin
//   const globalStyles = `
//     html, body, #__next, main, .MuiContainer-root, .MuiBox-root {
//       padding-top: 0 !important;
//       margin-top: 0 !important;
//     }
//     nav, header {
//       margin-bottom: 0 !important;
//     }
//   `;

//   return (
//     <>
//       <style jsx global>{globalStyles}</style>
//       <Page
//         title="Activities"
//         sx={{
//           p: 0,
//           '& .MuiContainer-root': {
//             p: '0 !important',
//             m: '0 !important',
//             maxWidth: 'none !important',
//           },
//           '& main': {
//             p: '0 !important',
//             m: '0 !important',
//           },
//         }}
//       >
//         <RootStyle>
//           <Typography
//             variant="h6"
//             sx={{
//               color: "white",
//               fontWeight: 700,
//               fontFamily: "Poppins, Aclonica, Lato, Roboto",
//               textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
//               fontSize: "2rem",
//               mb: 4,
//               mt: 43,
//             }}
//           >
//             Activities
//           </Typography>

//           <Stack
//             direction="row"
//             sx={{
//               flexWrap: "wrap",
//               justifyContent: "center",
//               gap: 2,
            
//               px: 2,
//               mb: 75,
//             }}
//           >
//             {daysConfig.map((day) => (
//               <DayButton
//                 key={day.stateKey}
//                 disabled={!isDayUnlocked(day.date)}
//                 onClick={() => startGameAndShow(day.date, day.gameName, day.stateKey)}
//               >
//                 {day.label}
//               </DayButton>
//             ))}
//           </Stack>

//           <div ref={ref} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
//             {daysConfig.map((day) => (
//               state === day.stateKey && (
//                 <IframeWrapper key={day.stateKey}>
//                   <iframe
//                     src={`https://online.jesusredeems.com/games/2026/${day.gameName}/`}
//                     width="100%"
//                     height="450"
//                     style={{ border: "none", display: "block" }}
//                     title={day.label}
//                   />
//                 </IframeWrapper>
//               )
//             ))}
//           </div>
//         </RootStyle>
//       </Page>
//     </>
//   );
// }



//locked code














// 'use client';

// import { useParams, useRouter } from "next/navigation";
// import { styled } from "@mui/material/styles";
// import {
//   Typography,
//   Stack,
//   Box,
// } from "@mui/material";
// import LockIcon from "@mui/icons-material/Lock";
// import moment from "moment-timezone";
// import { startGame } from "../../../../services/JRMFeedService";
// import Page from "../../../../components/Page";

// const backgroundImage = "/assets/acti.png";

// const RootStyle = styled(Box)(() => ({
//   minHeight: "100vh",
//   width: "100%",
//   backgroundImage: `url(${backgroundImage})`,
//   backgroundSize: "cover",
//   backgroundPosition: "center top",
//   backgroundRepeat: "no-repeat",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   paddingBottom: "48px",
//   margin: 0,
// }));

// const ImageCard = styled(Box)(({ theme }) => ({
//   position: "relative",
//   width: "200px",
//   cursor: "pointer",
//   borderRadius: "20px",
//   overflow: "hidden",
//   boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
//   transition: "transform 0.2s ease",
//   "&:hover": {
//     transform: "scale(1.02)",
//   },
//   "&.locked": {
//     cursor: "not-allowed",
//     "&:hover": {
//       transform: "none",
//     },
//   },
// }));

// const StyledImage = styled("img")({
//   width: "100%",
//   height: "auto",
//   display: "block",
// });

// const LockOverlay = styled(Box)({
//   position: "absolute",
//   top: 0,
//   left: 0,
//   width: "100%",
//   height: "100%",
//   backgroundColor: "rgba(0, 0, 0, 0.6)",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   color: "white",
//   "& svg": {
//     fontSize: "3rem",
//     filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))",
//   },
// });

// // Days configuration – each day has its own image
// const days = [
//   {
//     id: "day1",
//     dayDate: "2026-05-11",
//     gameName: "Day1",
//     gameUrl: "https://online.jesusredeems.com/games/2026/Day1/",
//     unlockDateTime: "2026-05-11T11:50:00",
//     image: "/assets/day1.png",   // different image for day 1
//   },
//   {
//     id: "day2",
//     dayDate: "2026-05-12",
//     gameName: "Day2",
//     gameUrl: "https://online.jesusredeems.com/games/2026/Day2/",
//     unlockDateTime: "2026-05-12T11:50:00",
//     image: "/assets/day2.png",   // different image for day 2
//   },
//   {
//     id: "day3",
//     dayDate: "2026-05-13",
//     gameName: "Day3",
//     gameUrl: "https://online.jesusredeems.com/games/2026/Day3/",
//     unlockDateTime: "2026-05-13T11:50:00",
//     image: "/assets/day3.png",   // different image for day 3
//   },
//   {
//     id: "day4",
//     dayDate: "2026-05-14",
//     gameName: "Day4",
//     gameUrl: "https://online.jesusredeems.com/games/2026/Day4/",
//     unlockDateTime: "2026-05-14T11:50:00",
//     image: "/assets/day4.png",   // different image for day 4
//   },
//   {
//     id: "day5",
//     dayDate: "2026-05-15",
//     gameName: "Day5",
//     gameUrl: "https://online.jesusredeems.com/games/2026/Day5/",
//     unlockDateTime: "2026-05-15T11:50:00",
//     image: "/assets/day5.png",   // different image for day 5
//   },
// ];

// export default function ActivitiesPage() {
//   const { childId } = useParams();
//   const router = useRouter();

//   const pId = typeof window !== "undefined" ? localStorage.getItem("partnerId") : null;
//   const token = typeof window !== "undefined" ? localStorage.getItem("jwt") : null;

//   const now = moment().tz("Asia/Kolkata");
//   const currentDateTime = now.format("YYYY-MM-DDTHH:mm:ss");

//   const isEnabled = (dateTimeStr) =>
//     new Date(dateTimeStr) <= new Date(currentDateTime);

//   const handleImageClick = async (day) => {
//     const unlocked = isEnabled(day.unlockDateTime);
//     if (!unlocked) return;

//     if (!pId || !token || !childId) {
//       console.error("Missing partnerId, token, or childId");
//       return;
//     }

//     try {
//       await startGame(pId, childId, day.dayDate, token, day.gameName);
//       console.log(`Started ${day.gameName} for child ${childId}`);
//       window.open(day.gameUrl, "_blank");
//     } catch (err) {
//       console.error("startGame error:", err);
//     }
//   };

//   const globalStyles = `
//     html, body, #__next, main, .MuiContainer-root, .MuiBox-root {
//       padding-top: 0 !important;
//       margin-top: 0 !important;
//     }
//     nav, header {
//       margin-bottom: 0 !important;
//     }
//   `;

//   return (
//     <>
//       <style jsx global>{globalStyles}</style>
//       <Page
//         title="Games Corner"
//         sx={{
//           p: 0,
//           '& .MuiContainer-root': {
//             p: '0 !important',
//             m: '0 !important',
//             maxWidth: 'none !important',
//           },
//           '& main': {
//             p: '0 !important',
//             m: '0 !important',
//           },
//         }}
//       >
//         <RootStyle>
//           <Typography
//             variant="h6"
//             sx={{
//               color: "white",
//               fontWeight: 600,
//               textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
//               mb: 2,
//               mt: 40,
//             }}
//           >
//             Games Corner
//           </Typography>

//           <Stack
//             direction="row"
//             sx={{
//               flexWrap: "wrap",
//               justifyContent: "center",
//               gap: 4,
//               px: 2,
//               mb: 10,
//             }}
//           >
//             {days.map((day) => {
//               const unlocked = isEnabled(day.unlockDateTime);
//               return (
//                 <ImageCard
//                   key={day.id}
//                   className={!unlocked ? "locked" : ""}
//                   onClick={() => handleImageClick(day)}
//                 >
//                   <StyledImage
//                     src={day.image}
//                     alt={`${day.gameName} activity`}
//                   />
//                   {!unlocked && (
//                     <LockOverlay>
//                       <LockIcon />
//                     </LockOverlay>
//                   )}
//                 </ImageCard>
//               );
//             })}
//           </Stack>
//         </RootStyle>
//       </Page>
//     </>
//   );
// }









'use client';

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Typography,
  Stack,
  Box,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import moment from "moment-timezone";
import { startGame } from "../../../../services/JRMFeedService";
import Page from "../../../../components/Page";

const backgroundImage = "/assets/acti.png";

const RootStyle = styled(Box)(() => ({
  minHeight: "100vh",
  width: "100%",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingBottom: "48px",
  margin: 0,
  position: "relative",
  overflow: "hidden",
}));

const ImageCard = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "200px",
  cursor: "pointer",
  borderRadius: "20px",
  overflow: "hidden",
  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  transition: "transform 0.2s ease",
  zIndex: 1,
  "&:hover": {
    transform: "scale(1.02)",
  },
  "&.locked": {
    cursor: "not-allowed",
    "&:hover": {
      transform: "none",
    },
  },
}));

const StyledImage = styled("img")({
  width: "100%",
  height: "auto",
  display: "block",
});

const LockOverlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  "& svg": {
    fontSize: "3rem",
    filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))",
  },
});

// Days configuration – each day has its own image
const days = [
  {
    id: "day1",
    dayDate: "2026-05-11",
    gameName: "Day1",
    gameUrl: "https://online.jesusredeems.com/games/2026/Day1/",
    unlockDateTime: "2026-05-11T11:50:00",
    image: "/assets/day1.png",
  },
  {
    id: "day2",
    dayDate: "2026-05-12",
    gameName: "Day2",
    gameUrl: "https://online.jesusredeems.com/games/2026/Day2/",
    unlockDateTime: "2026-05-12T11:50:00",
    image: "/assets/day2.png",
  },
  {
    id: "day3",
    dayDate: "2026-05-13",
    gameName: "Day3",
    gameUrl: "https://online.jesusredeems.com/games/2026/Day3/",
    unlockDateTime: "2026-05-13T11:50:00",
    image: "/assets/day3.png",
  },
  {
    id: "day4",
    dayDate: "2026-05-14",
    gameName: "Day4",
    gameUrl: "https://online.jesusredeems.com/games/2026/Day4/",
    unlockDateTime: "2026-05-14T11:50:00",
    image: "/assets/day4.png",
  },
  {
    id: "day5",
    dayDate: "2026-05-15",
    gameName: "Day5",
    gameUrl: "https://online.jesusredeems.com/games/2026/Day5/",
    unlockDateTime: "2026-05-15T11:50:00",
    image: "/assets/day5.png",
  },
];

export default function ActivitiesPage() {
  const { childId } = useParams();
  const router = useRouter();

  const pId = typeof window !== "undefined" ? localStorage.getItem("partnerId") : null;
  const token = typeof window !== "undefined" ? localStorage.getItem("jwt") : null;

  const now = moment().tz("Asia/Kolkata");
  const currentDateTime = now.format("YYYY-MM-DDTHH:mm:ss");

  const isEnabled = (dateTimeStr) =>
    new Date(dateTimeStr) <= new Date(currentDateTime);

  const handleImageClick = async (day) => {
    const unlocked = isEnabled(day.unlockDateTime);
    if (!unlocked) return;

    if (!pId || !token || !childId) {
      console.error("Missing partnerId, token, or childId");
      return;
    }

    try {
      await startGame(pId, childId, day.dayDate, token, day.gameName);
      console.log(`Started ${day.gameName} for child ${childId}`);
      window.open(day.gameUrl, "_blank");
    } catch (err) {
      console.error("startGame error:", err);
    }
  };

  // Add this useEffect to move background up (like quiz page)
  useEffect(() => {
    // Apply background to body/html only for this page
    const gradient = "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)";
    
    // Store original backgrounds
    const originalBodyBg = document.body.style.background;
    const originalHtmlBg = document.documentElement.style.background;
    const originalBodyBgPosition = document.body.style.backgroundPosition;
    const originalHtmlBgPosition = document.documentElement.style.backgroundPosition;
    
    // Apply gradient to body and html
    document.body.style.background = gradient;
    document.documentElement.style.background = gradient;
    document.body.style.backgroundSize = "cover";
    document.documentElement.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center -80px";  // Move up by 80px
    document.documentElement.style.backgroundPosition = "center -80px";
    document.body.style.backgroundRepeat = "no-repeat";
    document.documentElement.style.backgroundRepeat = "no-repeat";
    
    return () => {
      // Restore original backgrounds when leaving page
      document.body.style.background = originalBodyBg;
      document.documentElement.style.background = originalHtmlBg;
      document.body.style.backgroundPosition = originalBodyBgPosition;
      document.documentElement.style.backgroundPosition = originalHtmlBgPosition;
    };
  }, []);

  // ✅ Hide footer only on this page
  useEffect(() => {
    const footer = document.querySelector('footer');
    
    if (footer) {
      footer.style.display = 'none';
    }
    
    return () => {
      if (footer) {
        footer.style.display = 'block';
      }
    };
  }, []);

  const globalStyles = `
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    html, body, #__next, main, .MuiContainer-root, .MuiBox-root {
      padding-top: 0 !important;
      margin-top: 0 !important;
    }
    nav, header {
      margin-bottom: 0 !important;
    }
  `;

  // Kid-friendly floating emojis
  const floatingEmojis = [
    "🌟", "⭐", "🎈", "🎨", "🐟", "🌈", "🦁", "🕊️", "🎪", "🎠", "🎡", "🍭", "🍬", "🧸", "🐶", "🐱", "🐼", "🐧", "🦄", "🐝"
  ];

  return (
    <>
      <style jsx global>{globalStyles}</style>
      <Page
        title="Games Corner"
        sx={{
          p: 0,
          '& .MuiContainer-root': {
            p: '0 !important',
            m: '0 !important',
            maxWidth: 'none !important',
          },
          '& main': {
            p: '0 !important',
            m: '0 !important',
          },
        }}
      >
        <RootStyle>
          {/* Floating animated emojis background */}
          {floatingEmojis.map((emoji, index) => (
            <Box
              key={index}
              sx={{
                position: "absolute",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${20 + Math.random() * 30}px`,
                opacity: 0.2 + Math.random() * 0.3,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
                pointerEvents: "none",
                zIndex: 0,
                "@keyframes float": {
                  "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
                  "50%": { transform: "translateY(-20px) rotate(5deg)" },
                },
              }}
            >
              {emoji}
            </Box>
          ))}

          {/* Decorative circles */}
          <Box
            sx={{
              position: "absolute",
              top: "10%",
              right: "-5%",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,255,255,0.1), transparent)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "10%",
              left: "-5%",
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,255,255,0.1), transparent)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontWeight: 600,
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              mb: 2,
              mt: 20,
              zIndex: 1,
              background: "rgba(0,0,0,0.3)",
              px: 3,
              py: 1,
              borderRadius: "50px",
              backdropFilter: "blur(10px)",
              fontSize: { xs: "18px", sm: "24px" },
            }}
          >
            🎮 Games Corner 🎮
          </Typography>

          <Stack
            direction="row"
            sx={{
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 4,
              px: 2,
              mb: 10,
              zIndex: 1,
            }}
          >
            {days.map((day) => {
              const unlocked = isEnabled(day.unlockDateTime);
              return (
                <ImageCard
                  key={day.id}
                  className={!unlocked ? "locked" : ""}
                  onClick={() => handleImageClick(day)}
                >
                  <StyledImage
                    src={day.image}
                    alt={`${day.gameName} activity`}
                  />
                  {!unlocked && (
                    <LockOverlay>
                      <LockIcon />
                    </LockOverlay>
                  )}
                </ImageCard>
              );
            })}
          </Stack>
        </RootStyle>
      </Page>
    </>
  );
}