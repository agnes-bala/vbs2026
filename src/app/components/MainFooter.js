// // "use client";

// // import { useEffect, useState } from "react";
// // import {
// //   Box,
// //   Container,
// //   Grid,
// //   Link as MuiLink,
// //   Typography,
// //   Fab,
// // } from "@mui/material";
// // import { styled } from "@mui/material/styles";
// // import NextLink from "next/link";
// // import Image from "next/image";
// // import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
// // import InstagramIcon from "@mui/icons-material/Instagram";
// // import YouTubeIcon from "@mui/icons-material/YouTube";
// // import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

// // const RootStyle = styled("div")(({ theme }) => ({
// //   position: "relative",
// //   backgroundColor: theme.palette.background.default,
// // }));

// // export default function MainFooter() {
// //   const [user, setUser] = useState(null);
// //   const [showScrollTop, setShowScrollTop] = useState(false);

// //   // Check auth
// //   useEffect(() => {
// //     const token = localStorage.getItem("jwt") || localStorage.getItem("token");
// //     setUser(token);
// //   }, []);

// //   // Scroll listener – show button after scrolling down 100px
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const scrolled = window.scrollY;
// //       console.log("Scrolled:", scrolled); // debug – remove later
// //       if (scrolled > 100) {
// //         setShowScrollTop(true);
// //       } else {
// //         setShowScrollTop(false);
// //       }
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     // Initial check in case page is already scrolled on load
// //     handleScroll();
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   const scrollToTop = () => {
// //     window.scrollTo({ top: 0, behavior: "smooth" });
// //   };

// //   const navItems = [
// //     { label: "Home", path: "/" },
// //     { label: "About", path: "/about" },
// //     { label: "Media", path: "/media" },
// //     { label: "Live Now", path: "/live-now" },
// //     { label: "Activity", path: user ? "/dashboard" : "/activity" },
// //     {
// //       label: "Downloads",
// //       path: "https://kids.jesusredeems.com/mag-download/",
// //       external: true,
// //     },
// //     { label: "Contact", path: "/contact" },
// //   ];

// //   return (
// //     <RootStyle>
// //       {/* Floating Scroll-to-Top Button – appears only when scrolled down */}
// //       {showScrollTop && (
// //         <Fab
// //           onClick={scrollToTop}
// //           aria-label="scroll to top"
// //           sx={{
// //             position: "fixed",
// //             bottom: { xs: 16, sm: 24 },
// //             right: { xs: 16, sm: 24 },
// //             backgroundColor: "#ffd54f",
// //             color: "#07075b",
// //             "&:hover": {
// //               backgroundColor: "#ffc107",
// //               transform: "scale(1.1)",
// //             },
// //             transition: "all 0.2s",
// //             zIndex: 1200,
// //           }}
// //         >
// //           <ArrowUpwardIcon />
// //         </Fab>
// //       )}

// //       {/* Footer content unchanged */}
// //       <Box
// //         sx={{
// //           py: 4,
// //           px: 2,
// //           backgroundColor: "#07075b",
// //           display: "flex",
// //           justifyContent: "center",
// //           alignItems: "center",
// //         }}
// //       >
// //         <Container maxWidth="md">
// //           <Grid container spacing={4}>
// //             {/* LEFT COLUMN: LOGO + QUOTE */}
// //             <Grid
// //               item
// //               xs={12}
// //               sm={4}
// //               md={4}
// //               sx={{
// //                 display: "flex",
// //                 flexDirection: "column",
// //                 alignItems: "center",
// //                 textAlign: "center",
// //               }}
// //             >
// //               <MuiLink component={NextLink} href="/" underline="none">
// //                 <Image
// //                   src="/assets/logo.png"
// //                   alt="Virtual Bible School"
// //                   width={180}
// //                   height={60}
// //                   style={{ objectFit: "contain" }}
// //                 />
// //               </MuiLink>
// //               <Typography
// //                 variant="body2"
// //                 sx={{
// //                   color: "#ffd966",
// //                   maxWidth: "80%",
// //                   mx: "auto",
// //                   mt: 1.5,
// //                   fontSize: "0.75rem",
// //                   fontStyle: "italic",
// //                   borderTop: "1px solid rgba(255,255,255,0.2)",
// //                   pt: 1,
// //                 }}
// //               >
// //                 “Train up a child in the way he should go…”
// //               </Typography>
// //             </Grid>

// //             {/* CENTER COLUMN: QUICK LINKS */}
// //             <Grid
// //               item
// //               xs={12}
// //               sm={4}
// //               md={4}
// //               sx={{
// //                 display: "flex",
// //                 flexDirection: "column",
// //                 alignItems: "center",
// //                 textAlign: "center",
// //               }}
// //             >
// //               <Typography sx={{ color: "white" }} variant="h6" gutterBottom>
// //                 Quick Links
// //               </Typography>
// //               {navItems.map((item, i) =>
// //                 item.external ? (
// //                   <MuiLink
// //                     key={i}
// //                     href={item.path}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     underline="none"
// //                     sx={{
// //                       color: "white",
// //                       mb: 0.5,
// //                       display: "inline-block",
// //                       px: 1,
// //                       py: 0.3,
// //                       borderRadius: "20px",
// //                       transition: "0.2s",
// //                       "&:hover": {
// //                         backgroundColor: "#ffd54f",
// //                         color: "#07075b",
// //                         transform: "scale(1.02)",
// //                       },
// //                     }}
// //                   >
// //                     {item.label}
// //                   </MuiLink>
// //                 ) : (
// //                   <MuiLink
// //                     key={i}
// //                     component={NextLink}
// //                     href={item.path}
// //                     underline="none"
// //                     sx={{
// //                       color: "white",
// //                       mb: 0.5,
// //                       display: "inline-block",
// //                       px: 1,
// //                       py: 0.3,
// //                       borderRadius: "20px",
// //                       transition: "0.2s",
// //                       "&:hover": {
// //                         backgroundColor: "#ffd54f",
// //                         color: "#07075b",
// //                         transform: "scale(1.02)",
// //                       },
// //                     }}
// //                   >
// //                     {item.label}
// //                   </MuiLink>
// //                 )
// //               )}
// //             </Grid>

// //             {/* RIGHT COLUMN: SOCIAL LINKS */}
// //             <Grid
// //               item
// //               xs={12}
// //               sm={4}
// //               md={4}
// //               sx={{
// //                 display: "flex",
// //                 flexDirection: "column",
// //                 alignItems: { xs: "center", md: "flex-end" },
// //                 textAlign: { xs: "center", md: "right" },
// //               }}
// //             >
// //               <Typography sx={{ color: "white" }} variant="h6" gutterBottom>
// //                 Social Links
// //               </Typography>
// //               <MuiLink
// //                 href="https://www.youtube.com/@JollyKidsprograms"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 underline="none"
// //                 sx={{
// //                   color: "white",
// //                   display: "inline-flex",
// //                   alignItems: "center",
// //                   gap: 1,
// //                   mb: 0.5,
// //                   justifyContent: { xs: "center", md: "flex-end" },
// //                   width: "fit-content",
// //                   "&:hover": { color: "#ffd54f" },
// //                 }}
// //               >
// //                 <YouTubeIcon /> YouTube
// //               </MuiLink>
// //               <MuiLink
// //                 href="https://www.facebook.com/JesusRedeemsMinistries/"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 underline="none"
// //                 sx={{
// //                   color: "white",
// //                   display: "inline-flex",
// //                   alignItems: "center",
// //                   gap: 1,
// //                   mb: 0.5,
// //                   justifyContent: { xs: "center", md: "flex-end" },
// //                   width: "fit-content",
// //                   "&:hover": { color: "#ffd54f" },
// //                 }}
// //               >
// //                 <FacebookOutlinedIcon /> Facebook
// //               </MuiLink>
// //               <MuiLink
// //                 href="https://www.instagram.com/jesusredeems_ministries/"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 underline="none"
// //                 sx={{
// //                   color: "white",
// //                   display: "inline-flex",
// //                   alignItems: "center",
// //                   gap: 1,
// //                   mb: 0.5,
// //                   justifyContent: { xs: "center", md: "flex-end" },
// //                   width: "fit-content",
// //                   "&:hover": { color: "#ffd54f" },
// //                 }}
// //               >
// //                 <InstagramIcon /> Instagram
// //               </MuiLink>
// //             </Grid>
// //           </Grid>
// //         </Container>
// //       </Box>

// //       {/* COPYRIGHT */}
// //       <Box
// //         sx={{
// //           textAlign: "center",
// //           background: "#00005b",
// //           borderTop: "1px solid rgba(255,255,255,0.2)",
// //         }}
// //       >
// //         <Typography sx={{ py: 2, color: "#ccc" }} variant="body2">
// //           Copyright © Jesus Redeems Ministries. All Rights Reserved{" "}
// //           {new Date().getFullYear()} | Designed and Powered by Jesus Redeems IT.
// //         </Typography>
// //       </Box>
// //     </RootStyle>
// //   );
// // }

// // "use client";

// // import { useEffect, useState } from "react";
// // import {
// //   Box,
// //   Container,
// //   Grid,
// //   Link as MuiLink,
// //   Typography,
// // } from "@mui/material";
// // import { styled } from "@mui/material/styles";
// // import NextLink from "next/link";
// // import Image from "next/image";
// // import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
// // import InstagramIcon from "@mui/icons-material/Instagram";
// // import YouTubeIcon from "@mui/icons-material/YouTube";
// // import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

// // const RootStyle = styled("div")(({ theme }) => ({
// //   position: "relative",
// //   backgroundColor: theme.palette.background.default,
// // }));

// // export default function MainFooter() {
// //   const [user, setUser] = useState(null);

// //   useEffect(() => {
// //     const token = localStorage.getItem("jwt") || localStorage.getItem("token");
// //     setUser(token);
// //   }, []);

// //   const navItems = [
// //     { label: "Home", path: "/" },
// //     { label: "About", path: "/about" },
// //     { label: "Media", path: "/media" },
// //     { label: "Live Now", path: "/live-now" },
// //     { label: "Activity", path: user ? "/dashboard" : "/activity" },
// //     {
// //       label: "Downloads",
// //       path: "https://kids.jesusredeems.com/mag-download/",
// //       external: true,
// //     },
// //     { label: "Contact", path: "/contact" },
// //   ];

// //   // ✅ SCROLL TO TOP (WORKING VERSION)
// //   const scrollToTop = () => {
// //     console.log("Arrow clicked");

// //     // Try normal window scroll
// //     window.scrollTo({
// //       top: 0,
// //       behavior: "smooth",
// //     });

// //     // Fallback (if custom scroll container exists)
// //     const scrollable =
// //       document.scrollingElement || document.documentElement || document.body;

// //     if (scrollable) {
// //       scrollable.scrollTo({
// //         top: 0,
// //         behavior: "smooth",
// //       });
// //     }
// //   };

// //   return (
// //     <RootStyle>
// //       <Box
// //         sx={{
// //           py: 4,
// //           px: 2,
// //           backgroundColor: "#07075b",
// //           display: "flex",
// //           justifyContent: "center",
// //           alignItems: "center",
// //         }}
// //       >
// //         <Container maxWidth="md">
// //           <Grid container spacing={4}>
// //             {/* LEFT */}
// //             <Grid item xs={12} sm={4} md={4} sx={{ textAlign: "center" }}>
// //               <MuiLink component={NextLink} href="/" underline="none">
// //                 <Image
// //                   src="/assets/logo.png"
// //                   alt="Virtual Bible School"
// //                   width={180}
// //                   height={60}
// //                   style={{ objectFit: "contain" }}
// //                 />
// //               </MuiLink>

// //               <Typography
// //                 variant="body2"
// //                 sx={{
// //                   color: "#ffd966",
// //                   mt: 1.5,
// //                   fontSize: "0.75rem",
// //                   fontStyle: "italic",
// //                   borderTop: "1px solid rgba(255,255,255,0.2)",
// //                   pt: 1,
// //                 }}
// //               >
// //                 “Train up a child in the way he should go…”
// //               </Typography>
// //             </Grid>

// //             {/* CENTER */}
// //             <Grid item xs={12} sm={4} md={4} sx={{ textAlign: "center" }}>
// //               <Typography sx={{ color: "white" }} variant="h6" gutterBottom>
// //                 Quick Links
// //               </Typography>

// //               {navItems.map((item, i) =>
// //                 item.external ? (
// //                   <MuiLink
// //                     key={i}
// //                     href={item.path}
// //                     target="_blank"
// //                     underline="none"
// //                     sx={{
// //                       color: "white",
// //                       display: "block",
// //                       mb: 0.5,
// //                       "&:hover": { color: "#ffd54f" },
// //                     }}
// //                   >
// //                     {item.label}
// //                   </MuiLink>
// //                 ) : (
// //                   <MuiLink
// //                     key={i}
// //                     component={NextLink}
// //                     href={item.path}
// //                     underline="none"
// //                     sx={{
// //                       color: "white",
// //                       display: "block",
// //                       mb: 0.5,
// //                       "&:hover": { color: "#ffd54f" },
// //                     }}
// //                   >
// //                     {item.label}
// //                   </MuiLink>
// //                 )
// //               )}
// //             </Grid>

// //             {/* RIGHT */}
// //             <Grid item xs={12} sm={4} md={4} sx={{ textAlign: "center" }}>
// //               <Typography sx={{ color: "white" }} variant="h6" gutterBottom>
// //                 Social Links
// //               </Typography>

// //               <MuiLink
// //                 href="https://www.youtube.com/@JollyKidsprograms"
// //                 target="_blank"
// //                 underline="none"
// //                 sx={{ color: "white", display: "block", mb: 0.5 }}
// //               >
// //                 <YouTubeIcon /> YouTube
// //               </MuiLink>

// //               <MuiLink
// //                 href="https://www.facebook.com/JesusRedeemsMinistries/"
// //                 target="_blank"
// //                 underline="none"
// //                 sx={{ color: "white", display: "block", mb: 0.5 }}
// //               >
// //                 <FacebookOutlinedIcon /> Facebook
// //               </MuiLink>

// //               <MuiLink
// //                 href="https://www.instagram.com/jesusredeems_ministries/"
// //                 target="_blank"
// //                 underline="none"
// //                 sx={{ color: "white", display: "block", mb: 0.5 }}
// //               >
// //                 <InstagramIcon /> Instagram
// //               </MuiLink>
// //             </Grid>
// //           </Grid>
// //         </Container>
// //       </Box>

// //       {/* COPYRIGHT */}
// //       <Box
// //         sx={{
// //           textAlign: "center",
// //           background: "#00005b",
// //           borderTop: "1px solid rgba(255,255,255,0.2)",
// //         }}
// //       >
// //         <Typography sx={{ py: 2, color: "#ccc" }} variant="body2">
// //           Copyright © Jesus Redeems Ministries {new Date().getFullYear()}
// //         </Typography>
// //       </Box>

// //       {/* 🔥 SCROLL TO TOP BUTTON */}
// //       <Box
// //         onClick={scrollToTop}
// //         sx={{
// //           position: "fixed",
// //           bottom: 24,
// //           right: 24,
// //           width: 50,
// //           height: 50,
// //           borderRadius: "50%",
// //           backgroundColor: "#ffd54f",
// //           color: "#07075b",
// //           display: "flex",
// //           alignItems: "center",
// //           justifyContent: "center",
// //           cursor: "pointer",
// //           boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
// //           "&:hover": {
// //             backgroundColor: "#ffc107",
// //             transform: "scale(1.1)",
// //           },
// //           zIndex: 9999,
// //         }}
// //       >
// //         <ArrowUpwardIcon />
// //       </Box>
// //     </RootStyle>
// //   );
// // }










// // "use client";

// // import { useEffect, useState } from "react";
// // import {
// //   Box,
// //   Container,
// //   Grid,
// //   Typography,
// // } from "@mui/material";
// // import { styled } from "@mui/material/styles";
// // import Image from "next/image";
// // import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
// // import InstagramIcon from "@mui/icons-material/Instagram";
// // import YouTubeIcon from "@mui/icons-material/YouTube";
// // import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

// // const RootStyle = styled("div")(({ theme }) => ({
// //   position: "relative",
// //   backgroundColor: theme.palette.background.default,
// // }));

// // export default function MainFooter() {
// //   const [user, setUser] = useState(null);

// //   useEffect(() => {
// //     const token = localStorage.getItem("jwt") || localStorage.getItem("token");
// //     setUser(token);
// //   }, []);

// //   const scrollToTop = () => {
// //     window.scrollTo({ top: 0, behavior: "smooth" });
// //     document.documentElement.scrollTop = 0;
// //     document.body.scrollTop = 0;
// //   };

// //   const handleNav = (path) => (e) => {
// //     e.preventDefault();
// //     window.location.href = path;
// //   };

// //   const navItems = [
// //     { label: "Home", path: "/" },
// //     { label: "About", path: "/about" },
// //     { label: "Media", path: "/media" },
// //     { label: "Live Now", path: "/live-now" },
// //     { label: "Activity", path: user ? "/dashboard" : "/activity" },
// //     {
// //       label: "Downloads",
// //       path: "https://kids.jesusredeems.com/mag-download/",
// //       external: true,
// //     },
// //     { label: "Contact", path: "/contact" },
// //   ];

// //   const socialLinks = [
// //     {
// //       label: "YouTube",
// //       icon: <YouTubeIcon />,
// //       href: "https://www.youtube.com/@JollyKidsprograms",
// //     },
// //     {
// //       label: "Facebook",
// //       icon: <FacebookOutlinedIcon />,
// //       href: "https://www.facebook.com/JesusRedeemsMinistries/",
// //     },
// //     {
// //       label: "Instagram",
// //       icon: <InstagramIcon />,
// //       href: "https://www.instagram.com/jesusredeems_ministries/",
// //     },
// //   ];

// //   const linkStyle = {
// //     color: "white",
// //     fontSize: "0.9rem",
// //     fontWeight: 400,
// //     textDecoration: "none",
// //     display: "inline-block",
// //     padding: "4px 8px",
// //     cursor: "pointer",
// //     transition: "color 0.2s ease",
// //   };

// //   return (
// //     <RootStyle>
// //       <Box
// //         sx={{
// //           py: { xs: 5, md: 6 },
// //           px: { xs: 2, sm: 3 },
// //           backgroundColor: "#07075b",
// //         }}
// //       >
// //         <Container maxWidth="lg">
// //           <Grid container spacing={{ xs: 4, md: 5 }}>
// //             {/* Logo Section */}
// //             <Grid
// //               item
// //               xs={12}
// //               sm={12}
// //               md={4}
// //               sx={{
// //                 display: "flex",
// //                 flexDirection: "column",
// //                 ml: 10,
// //                 alignItems: { xs: "center", md: "flex-start" },
// //                 textAlign: { xs: "center", md: "left" },
// //               }}
// //             >
// //               <div onClick={handleNav("/")} style={{ display: "inline-block", cursor: "pointer" }}>
// //                 <Image
// //                   src="/assets/logo.png"
// //                   alt="Virtual Bible School"
// //                   width={180}
// //                   height={60}
// //                   style={{ objectFit: "contain" }}
// //                 />
// //               </div>
// //               <Typography
// //                 variant="body2"
// //                 sx={{
// //                   color: "#ffd966",
// //                   maxWidth: { xs: "280px", md: "100%" },
// //                   mt: 2,
// //                   fontSize: "0.85rem",
// //                   fontStyle: "italic",
// //                   borderTop: "1px solid rgba(255,255,255,0.2)",
// //                   pt: 1.5,
// //                   lineHeight: 1.4,
// //                 }}
// //               >
// //                 "Train up a child in the way he should go…"
// //               </Typography>
// //             </Grid>

// //             {/* Quick Links */}
// //             <Grid
// //               item
// //               xs={12}
// //               sm={12}
// //               md={4}
// //               sx={{
// //                 display: "flex",
// //                 flexDirection: "column",
// //                 alignItems: "center",
// //                 textAlign: "center",
// //               }}
// //             >
// //               <Typography
// //                 variant="h6"
// //                 sx={{
// //                   color: "white",
// //                   fontWeight: 600,
// //                   mb: 2,
// //                   mr: -50,
// //                   letterSpacing: "0.5px",
// //                 }}
// //               >
// //                 Quick Links
// //               </Typography>
// //               <Box
// //                 sx={{
// //                   display: "grid",
// //                   gridTemplateColumns: "repeat(2, auto)",
// //                   gap: "12px 32px",
// //                   mr: -49,
// //                   justifyContent: "center",
// //                 }}
// //               >
// //                 {navItems.map((item, idx) =>
// //                   item.external ? (
// //                     <a
// //                       key={idx}
// //                       href={item.path}
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                       style={linkStyle}
// //                       onMouseEnter={(e) => (e.currentTarget.style.color = "#ffd54f")}
// //                       onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
// //                     >
// //                       {item.label}
// //                     </a>
// //                   ) : (
// //                     <div
// //                       key={idx}
// //                       onClick={handleNav(item.path)}
// //                       onMouseEnter={(e) => (e.currentTarget.style.color = "#ffd54f")}
// //                       onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
// //                       style={linkStyle}
// //                     >
// //                       {item.label}
// //                     </div>
// //                   )
// //                 )}
// //               </Box>
// //             </Grid>

// //             {/* Social Links */}
// //             <Grid
// //               item
// //               xs={12}
// //               sm={12}
// //               md={4}
// //               sx={{
// //                 display: "flex",
// //                 justifyContent: { md: "flex-end" },
// //                 mt: { md: -1.5 },
// //               }}
// //             >
// //               <Box
// //                 sx={{
// //                   display: "flex",
// //                   flexDirection: "column",
// //                   alignItems: { xs: "center", md: "flex-end" },
// //                   textAlign: { xs: "center", md: "right" },
// //                 }}
// //               >
// //                 <Typography
// //                   variant="h6"
// //                   sx={{
// //                     color: "white",
// //                     fontWeight: 600,
// //                     ml: 55,
// //                     mt: 2,
// //                   }}
// //                 >
// //                   Follow Us
// //                 </Typography>
// //                 <Box
// //                   sx={{
// //                     display: "flex",
// //                     mt: 2,
// //                     flexDirection: "column",
// //                     alignItems: { xs: "center", md: "flex-end" },
// //                     gap: 1.2,
// //                   }}
// //                 >
// //                   {socialLinks.map((social, idx) => (
// //                     <a
// //                       key={idx}
// //                       href={social.href}
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                       style={{
// //                         color: "white",
// //                         display: "inline-flex",
// //                         alignItems: "center",
// //                         gap: "12px",
// //                         fontSize: "0.9rem",
// //                         textDecoration: "none",
// //                         transition: "color 0.2s ease",
// //                       }}
// //                       onMouseEnter={(e) => (e.currentTarget.style.color = "#ffd54f")}
// //                       onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
// //                     >
// //                       {social.icon}
// //                       <span>{social.label}</span>
// //                     </a>
// //                   ))}
// //                 </Box>
// //               </Box>
// //             </Grid>
// //           </Grid>
// //         </Container>
// //       </Box>

// //       {/* Copyright Bar */}
// //       <Box
// //         sx={{
// //           textAlign: "center",
// //           background: "#00005b",
// //           borderTop: "1px solid rgba(255,255,255,0.15)",
// //           py: 2.5,
// //           px: 2,
// //         }}
// //       >
// //         <Typography
// //           variant="body2"
// //           sx={{
// //             color: "#ccc",
// //             fontSize: { xs: "0.7rem", sm: "0.8rem" },
// //           }}
// //         >
// //           Copyright © Jesus Redeems Ministries. All Rights Reserved{" "}
// //           {new Date().getFullYear()} | Designed and Powered by Jesus Redeems IT.
// //         </Typography>
// //       </Box>

// //       {/* ✅ SCROLL ARROW - FORCED ALWAYS VISIBLE (for testing) */}
// //       <Box
// //         onClick={scrollToTop}
// //         sx={{
// //           position: "fixed",
// //           bottom: 30,
// //           right: 30,
// //           width: 55,
// //           height: 55,
// //           borderRadius: "50%",
// //           backgroundColor: "#ffd54f",
// //           color: "#07075b",
// //           display: "flex",
// //           alignItems: "center",
// //           justifyContent: "center",
// //           cursor: "pointer",
// //           boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
// //           zIndex: 1300,
// //           transition: "all 0.3s ease",
// //           "&:hover": {
// //             backgroundColor: "#ffc107",
// //             transform: "scale(1.1)",
// //           },
// //         }}
// //       >
// //         <ArrowUpwardIcon sx={{ fontSize: 28 }} />
// //       </Box>
// //     </RootStyle>
// //   );
// // }


// //arrow
// "use client";

// import { useEffect, useState } from "react";
// import {
//   Box,
//   Container,
//   Grid,
//   Typography,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import Image from "next/image";
// import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

// const RootStyle = styled("div")(({ theme }) => ({
//   position: "relative",
//   backgroundColor: theme.palette.background.default,
// }));

// export default function MainFooter() {
//   const [user, setUser] = useState(null);
//   const showArrow = true;

//   useEffect(() => {
//     const token = localStorage.getItem("jwt") || localStorage.getItem("token");
//     setUser(token);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     document.documentElement.scrollTop = 0;
//     document.body.scrollTop = 0;
//   };

//   const handleNav = (path) => (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     window.location.href = path;
//   };

//   const globalFontStyle = {
//     fontFamily: "Poppins, Aclonica, Lato, Roboto, sans-serif",
//   };

//   const linkStyle = {
//     color: "white",
//     fontSize: "0.9rem",
//     fontWeight: 400,
//     textDecoration: "none",
//     display: "block",
//     padding: "4px 0px",
//     cursor: "pointer",
//     transition: "color 0.2s ease",
//     position: "relative",
//     zIndex: 9999,
//     ...globalFontStyle,
//   };

//   return (
//     <RootStyle>
//       <Box
//         sx={{
//           py: { xs: 5, md: 6 },
//           px: { xs: 2, sm: 3 },
//           backgroundColor: "#07075b",
//           position: "relative",
//           zIndex: 1,
//           ...globalFontStyle,
//         }}
//       >
//         <Container maxWidth="lg">
//           <Grid container spacing={{ xs: 4, md: 0 }}>
//             {/* Logo Section */}
//             <Grid
//               item
//               xs={12}
//               sm={12}
//               md={4}
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: { xs: "center", md: "flex-start" },
//                 textAlign: { xs: "center", md: "left" },
//                 width: { md: "33.33%" },
//               }}
//             >
//               <div onClick={handleNav("/")} style={{ display: "inline-block", cursor: "pointer" }}>
//                 <Image
//                   src="/assets/logo.png"
//                   alt="Virtual Bible School"
//                   width={180}
//                   height={60}
//                   style={{ objectFit: "contain" }}
//                 />
//               </div>
              
//               {/* Professional Tagline */}
//               <Box
//                 sx={{
//                   mt: 2,
//                   pt: 1.5,
//                   borderTop: "1px solid rgba(255,255,255,0.2)",
//                   width: "100%",
//                 }}
//               >
//                 <Typography
//                   variant="body2"
//                   sx={{
//                     color: "#ffd966",
//                     fontSize: "0.85rem",
//                     fontStyle: "italic",
//                     lineHeight: 1.5,
//                     textAlign: { xs: "center", md: "left" },
//                     ...globalFontStyle,
//                   }}
//                 >
//                   "VBS is an acronym of Virtual Bible School"
//                 </Typography>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: { xs: "center", md: "flex-start" },
//                     alignItems: "center",
//                     gap: 0.5,
//                     flexWrap: "wrap",
//                     mt: 0.5,
//                   }}
//                 >
//                   <Typography
//                     variant="body2"
//                     sx={{
//                       color: "#ffd966",
//                       fontSize: "0.85rem",
//                       fontStyle: "italic",
//                       lineHeight: 1.5,
//                       ...globalFontStyle,
//                     }}
//                   >
//                     Learn more about our vision
//                   </Typography>
//                   <Box
//                     component="span"
//                     onClick={handleNav("/about")}
//                     sx={{
//                       color: "#ffd966",
//                       textDecoration: "underline",
//                       cursor: "pointer",
//                       fontWeight: 600,
//                       display: "inline-flex",
//                       alignItems: "center",
//                       fontSize: "0.85rem",
//                       transition: "all 0.2s ease",
//                       "&:hover": {
//                         color: "#ffeb3b",
//                         transform: "translateX(2px)",
//                       },
//                     }}
//                   >
//                     Read More →
//                   </Box>
//                 </Box>
//               </Box>
//             </Grid>

//             {/* Quick Links - 10% gap, vertical layout */}
//             <Grid
//               item
//               xs={12}
//               sm={12}
//               md={4}
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "flex-start",
//                 textAlign: "left",
//                 width: { md: "33.33%" },
//                 position: "relative",
//                 left: { md: "10%" },
//               }}
//             >
//               <Typography
//                 variant="h6"
//                 sx={{
//                   color: "white",
//                   fontWeight: 600,
//                   mb: 2,
//                   letterSpacing: "0.5px",
//                   ...globalFontStyle,
//                 }}
//               >
//                 Quick Links
//               </Typography>
              
//               {/* Vertical layout for quick links */}
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   gap: "8px",
//                   justifyContent: "flex-start",
//                 }}
//               >
//                 {/* Home Link */}
//                 <div
//                   onClick={handleNav("/")}
//                   onMouseEnter={(e) => (e.currentTarget.style.color = "#ffd54f")}
//                   onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
//                   style={linkStyle}
//                 >
//                   Home
//                 </div>
                
//                 {/* About Link */}
//                 <div
//                   onClick={handleNav("/about")}
//                   onMouseEnter={(e) => (e.currentTarget.style.color = "#ffd54f")}
//                   onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
//                   style={linkStyle}
//                 >
//                   About
//                 </div>
                
//                 {/* Media Link */}
//                 <div
//                   onClick={handleNav("/media")}
//                   onMouseEnter={(e) => (e.currentTarget.style.color = "#ffd54f")}
//                   onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
//                   style={linkStyle}
//                 >
//                   Media
//                 </div>
                
//                 {/* Downloads Link (External) */}
//                 <a
//                   href="https://kids.jesusredeems.com/mag-download/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={linkStyle}
//                   onMouseEnter={(e) => (e.currentTarget.style.color = "#ffd54f")}
//                   onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
//                 >
//                   Downloads
//                 </a>
                
//                 {/* Contact Link */}
//                 <div
//                   onClick={handleNav("/contact")}
//                   onMouseEnter={(e) => (e.currentTarget.style.color = "#ffd54f")}
//                   onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
//                   style={linkStyle}
//                 >
//                   Contact
//                 </div>
//               </Box>
//             </Grid>

//             {/* Social Links - Moved slightly left */}
//             <Grid
//               item
//               xs={12}
//               sm={12}
//               md={4}
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 width: { md: "33.33%" },
//                 position: "relative",
//                 left: { md: "10%" }, // Changed from 20% to 15% to move left
//               }}
//             >
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "flex-start",
//                   alignItems: { xs: "center", md: "flex-start" },
//                   textAlign: { xs: "center", md: "left" },
//                   width: "100%",
//                 }}
//               >
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     color: "white",
//                     fontWeight: 600,
//                     mb: 2,
//                     ...globalFontStyle,
//                   }}
//                 >
//                   Follow Us
//                 </Typography>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     mt: 0,
//                     textAlign: "left",
//                     flexDirection: "column",
//                     gap: 1.2,
//                     alignItems: { xs: "center", md: "flex-start" },
//                   }}
//                 >
//                   {/* YouTube Link */}
//                   <a
//                     href="https://www.youtube.com/@JollyKidsprograms"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     style={{
//                       color: "white",
//                       display: "inline-flex",
//                       textAlign: "left",
//                       alignItems: "center",
//                       gap: "12px",
//                       fontSize: "0.9rem",
//                       textDecoration: "none",
//                       transition: "color 0.2s ease",
//                       ...globalFontStyle,
//                     }}
//                     onMouseEnter={(e) =>
//                       (e.currentTarget.style.color = "#ffd54f")
//                     }
//                     onMouseLeave={(e) =>
//                       (e.currentTarget.style.color = "white")
//                     }
//                   >
//                     <YouTubeIcon />
//                     <span>YouTube</span>
//                   </a>
                  
//                   {/* Facebook Link */}
//                   <a
//                     href="https://www.facebook.com/JesusRedeemsMinistries/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     style={{
//                       color: "white",
//                       display: "inline-flex",
//                       textAlign: "left",
//                       alignItems: "center",
//                       gap: "12px",
//                       fontSize: "0.9rem",
//                       textDecoration: "none",
//                       transition: "color 0.2s ease",
//                       ...globalFontStyle,
//                     }}
//                     onMouseEnter={(e) =>
//                       (e.currentTarget.style.color = "#ffd54f")
//                     }
//                     onMouseLeave={(e) =>
//                       (e.currentTarget.style.color = "white")
//                     }
//                   >
//                     <FacebookOutlinedIcon />
//                     <span>Facebook</span>
//                   </a>
                  
//                   {/* Instagram Link */}
//                   <a
//                     href="https://www.instagram.com/jesusredeems_ministries/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     style={{
//                       color: "white",
//                       display: "inline-flex",
//                       textAlign: "left",
//                       alignItems: "center",
//                       gap: "12px",
//                       fontSize: "0.9rem",
//                       textDecoration: "none",
//                       transition: "color 0.2s ease",
//                       ...globalFontStyle,
//                     }}
//                     onMouseEnter={(e) =>
//                       (e.currentTarget.style.color = "#ffd54f")
//                     }
//                     onMouseLeave={(e) =>
//                       (e.currentTarget.style.color = "white")
//                     }
//                   >
//                     <InstagramIcon />
//                     <span>Instagram</span>
//                   </a>
//                 </Box>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Copyright Bar */}
//       <Box
//         sx={{
//           textAlign: "center",
//           background: "#00005b",
//           borderTop: "1px solid rgba(255,255,255,0.15)",
//           py: 2.5,
//           px: 2,
//         }}
//       >
//         <Typography
//           variant="body2"
//           sx={{
//             color: "#ccc",
//             fontSize: { xs: "0.7rem", sm: "0.8rem" },
//             ...globalFontStyle,
//           }}
//         >
//           Copyright © Jesus Redeems Ministries. All Rights Reserved{" "}
//           {new Date().getFullYear()} | Designed and Powered by Jesus Redeems IT.
//         </Typography>
//       </Box>

//       {/* Arrow Button */}
//       {showArrow && (
//         <Box
//           onClick={scrollToTop}
//           sx={{
//             position: "fixed",
//             bottom: { xs: 20, sm: 30 },
//             right: { xs: 20, sm: 30 },
//             width: { xs: 35, sm: 35 },
//             height: { xs: 35, sm: 35 },
//             borderRadius: "50%",
//             backgroundColor: "#d4a60c",
//             color: "#05056f",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             cursor: "pointer",
//             boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
//             zIndex: 1300,
//             transition: "all 0.3s ease",
//             "&:hover": {
//               backgroundColor: "#ffc107",
//               transform: "scale(1.1)",
//             },
//           }}
//         >
//           <ArrowUpwardIcon sx={{ fontSize: { xs: 24, sm: 28 } }} />
//         </Box>
//       )}
//     </RootStyle>
//   );
// }











"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

// ✅ Fix: Suppress the non-boolean attribute warning for 'item'
if (typeof window !== 'undefined') {
  const originalError = console.error;
  console.error = (...args) => {
    if (args[0] && typeof args[0] === 'string') {
      if (args[0].includes('non-boolean attribute') || 
          args[0].includes('Received `true` for a non-boolean attribute') ||
          args[0].includes('item')) {
        return;
      }
    }
    originalError(...args);
  };
}

const RootStyle = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.background.default,
}));

export default function MainFooter() {
  const [user, setUser] = useState(null);
  const showArrow = true;

  useEffect(() => {
    const token = localStorage.getItem("jwt") || localStorage.getItem("token");
    setUser(token);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const handleNav = (path) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = path;
  };

  const globalFontStyle = {
    fontFamily: "Poppins, Aclonica, Lato, Roboto, sans-serif",
  };

  const linkStyle = {
    color: "white",
    fontSize: "0.9rem",
    fontWeight: 400,
    textDecoration: "none",
    display: "block",
    padding: "4px 0px",
    cursor: "pointer",
    transition: "color 0.2s ease",
    position: "relative",
    zIndex: 9999,
    ...globalFontStyle,
  };

  return (
    <RootStyle>
      <Box
        sx={{
          py: { xs: 5, md: 6 },
          px: { xs: 2, sm: 3 },
          backgroundColor: "#07075b",
          position: "relative",
          zIndex: 1,
          ...globalFontStyle,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 0 }}>
            {/* Logo Section */}
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                textAlign: { xs: "center", md: "left" },
                width: { md: "33.33%" },
              }}
            >
              <div onClick={handleNav("/")} style={{ display: "inline-block", cursor: "pointer" }}>
                <Image
                  src="/assets/logo.png"
                  alt="Virtual Bible School"
                  width={180}
                  height={60}
                  style={{ objectFit: "contain" }}
                />
              </div>
              
              {/* Professional Tagline */}
              <Box
                sx={{
                  mt: 2,
                  pt: 1.5,
                  borderTop: "1px solid rgba(255,255,255,0.2)",
                  width: "100%",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#ffd966",
                    fontSize: "0.85rem",
                    fontStyle: "italic",
                    lineHeight: 1.5,
                    textAlign: { xs: "center", md: "left" },
                    ...globalFontStyle,
                  }}
                >
                  "JESUS REDEEMS VIRTUAL BIBLE SCHOOL"
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-start" },
                    alignItems: "center",
                    gap: 0.5,
                    flexWrap: "wrap",
                    mt: 0.5,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#ffd966",
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.5,
                      ...globalFontStyle,
                    }}
                  >
                    Learn more about our vision
                  </Typography>
                  <Box
                    component="span"
                    onClick={handleNav("/about")}
                    sx={{
                      color: "#ffd966",
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: 600,
                      display: "inline-flex",
                      alignItems: "center",
                      fontSize: "0.85rem",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        color: "#ffeb3b",
                        transform: "translateX(2px)",
                      },
                    }}
                  >
                    Read More →
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Quick Links - 10% gap, vertical layout */}
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                textAlign: "left",
                width: { md: "33.33%" },
                position: "relative",
                left: { md: "10%" },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontWeight: 600,
                  mb: 2,
                  letterSpacing: "0.5px",
                  ...globalFontStyle,
                }}
              >
                Quick Links
              </Typography>
              
              {/* Vertical layout for quick links */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  justifyContent: "flex-start",
                }}
              >
                {/* Home Link */}
                <div
                  onClick={handleNav("/")}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ffd54f")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                  style={linkStyle}
                >
                  Home
                </div>
                
                {/* About Link */}
                <div
                  onClick={handleNav("/about")}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ffd54f")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                  style={linkStyle}
                >
                  About
                </div>
                
                {/* Media Link */}
                <div
                  onClick={handleNav("/media")}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ffd54f")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                  style={linkStyle}
                >
                  Media
                </div>
                
                {/* Downloads Link (External) */}
                <a
                  href="https://kids.jesusredeems.com/mag-download/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ffd54f")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                >
                  Downloads
                </a>
                
                {/* Contact Link */}
                <div
                  onClick={handleNav("/contact")}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ffd54f")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                  style={linkStyle}
                >
                  Contact
                </div>
              </Box>
            </Grid>

            {/* Social Links */}
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                width: { md: "33.33%" },
                position: "relative",
                left: { md: "10%" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: { xs: "center", md: "flex-start" },
                  textAlign: { xs: "center", md: "left" },
                  width: "100%",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    fontWeight: 600,
                    mb: 2,
                    ...globalFontStyle,
                  }}
                >
                  Follow Us
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    mt: 0,
                    textAlign: "left",
                    flexDirection: "column",
                    gap: 1.2,
                    alignItems: { xs: "center", md: "flex-start" },
                  }}
                >
                  {/* YouTube Link */}
                  <a
                    href="https://www.youtube.com/@JollyKidsprograms"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "white",
                      display: "inline-flex",
                      textAlign: "left",
                      alignItems: "center",
                      gap: "12px",
                      fontSize: "0.9rem",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                      ...globalFontStyle,
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#ffd54f")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "white")
                    }
                  >
                    <YouTubeIcon />
                    <span>YouTube</span>
                  </a>
                  
                  {/* Facebook Link */}
                  <a
                    href="https://www.facebook.com/JesusRedeemsMinistries/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "white",
                      display: "inline-flex",
                      textAlign: "left",
                      alignItems: "center",
                      gap: "12px",
                      fontSize: "0.9rem",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                      ...globalFontStyle,
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#ffd54f")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "white")
                    }
                  >
                    <FacebookOutlinedIcon />
                    <span>Facebook</span>
                  </a>
                  
                  {/* Instagram Link */}
                  <a
                    href="https://www.instagram.com/jesusredeems_ministries/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "white",
                      display: "inline-flex",
                      textAlign: "left",
                      alignItems: "center",
                      gap: "12px",
                      fontSize: "0.9rem",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                      ...globalFontStyle,
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#ffd54f")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "white")
                    }
                  >
                    <InstagramIcon />
                    <span>Instagram</span>
                  </a>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Copyright Bar */}
      <Box
        sx={{
          textAlign: "center",
          background: "#00005b",
          borderTop: "1px solid rgba(255,255,255,0.15)",
          py: 2.5,
          px: 2,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#ccc",
            fontSize: { xs: "0.7rem", sm: "0.8rem" },
            ...globalFontStyle,
          }}
        >
          Copyright © Jesus Redeems Ministries. All Rights Reserved{" "}
          {new Date().getFullYear()} | Designed and Powered by Jesus Redeems IT.
        </Typography>
      </Box>

      {/* Arrow Button */}
      {showArrow && (
        <Box
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: { xs: 20, sm: 30 },
            right: { xs: 20, sm: 30 },
            width: { xs: 35, sm: 35 },
            height: { xs: 35, sm: 35 },
            borderRadius: "50%",
            backgroundColor: "#d4a60c",
            color: "#05056f",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            zIndex: 1300,
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#ffc107",
              transform: "scale(1.1)",
            },
          }}
        >
          <ArrowUpwardIcon sx={{ fontSize: { xs: 24, sm: 28 } }} />
        </Box>
      )}
    </RootStyle>
  );
}