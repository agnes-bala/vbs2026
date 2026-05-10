// 'use client';

// import PropTypes from "prop-types";
// import { useState, useEffect } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";
// // @mui
// import {
//   AppBar,
//   Box,
//   Button,
//   Divider,
//   Drawer,
//   IconButton,
//   Toolbar,
//   Typography,
//   useMediaQuery,
//   useTheme,
//   Stack,
//   Container,
//   Avatar,
//   Menu,
//   MenuItem,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// // icons
// import MenuIcon from "@mui/icons-material/Menu";
// import PersonIcon from "@mui/icons-material/Person";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import LogoutIcon from "@mui/icons-material/Logout";
// import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import { Poppins, Aclonica, Lato, Roboto } from 'next/font/google';

// // Configure fonts – Poppins as primary
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

// // Combined font stack – Poppins as primary
// const fontStack = `${poppins.style.fontFamily}, ${aclonica.style.fontFamily}, ${lato.style.fontFamily}, ${roboto.style.fontFamily}, sans-serif`;

// // ----------------------------------------------------------------------
// const about = "/assets/about.png";
// const activity = "/assets/activity.png";
// const download = "/assets/download.png";
// const contact = "/assets/contact.png";
// const homeicon = "/assets/home.png";
// const media = "/assets/media.png";
// const liveNowIcon = "/assets/tv11.png";

// // Helper to truncate username to first 15 characters
// const truncateUserName = (name) => {
//   if (!name) return 'Guest';
//   return name.length > 15 ? name.substring(0, 15) + '...' : name;
// };

// // Responsive Logo
// const Logo = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

//   let logoWidth = 180;
//   let logoHeight = 60;
//   if (isMobile) {
//     logoWidth = 120;
//     logoHeight = 40;
//   } else if (isTablet) {
//     logoWidth = 150;
//     logoHeight = 50;
//   }

//   return (
//     <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
//       <Image
//         src="/assets/logo.png"
//         alt="Virtual Bible School"
//         width={logoWidth}
//         height={logoHeight}
//         priority
//         style={{ objectFit: 'contain' }}
//       />
//     </Link>
//   );
// };

// // ----------------------------------------------------------------------

// const BLUE = {
//   light: '#8a5cc7',
//   main: '#4145b1',
//   dark: '#2a2e7a',
//   contrastText: '#ffffff',
//   transparent: {
//     light: 'rgba(65, 69, 177, 0.08)',
//     main: 'rgba(65, 69, 177, 0.12)',
//     dark: 'rgba(65, 69, 177, 0.16)',
//   }
// };

// const LogoContainer = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   marginTop: '-8px',
//   marginRight: '5%',
//   '& > *': {
//     display: 'flex',
//     alignItems: 'center',
//   },
// }));

// const SocialIconButton = styled(IconButton)(({ theme }) => ({
//   color: 'white',
//   backgroundColor: 'rgba(255, 255, 255, 0.1)',
//   margin: '0 4px',
//   padding: '8px',
//   '&:hover': {
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     transform: 'translateY(-2px)',
//     transition: 'all 0.2s ease',
//   },
//   '& svg': {
//     fontSize: '1.2rem',
//   },
// }));

// const NavItem = styled(Box, {
//   shouldForwardProp: (prop) => prop !== 'active',
// })(({ theme, active }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   color: active ? BLUE.contrastText : 'rgba(255,255,255,0.9)',
//   cursor: 'pointer',
//   textDecoration: 'none',
//   minWidth: '80px',
//   '&:hover': {
//     transform: 'scale(1.1)',
//     transition: 'transform 0.3s ease-in-out',
//     '& .MuiTypography-root': {
//       color: BLUE.contrastText,
//       fontWeight: 800,
//     },
//   },
// }));

// const DrawerItem = styled(Button, {
//   shouldForwardProp: (prop) => prop !== 'active',
// })(({ theme, active }) => ({
//   justifyContent: 'center',
//   padding: '12px 16px',
//   width: '100%',
//   color: active ? BLUE.main : theme.palette.text.primary,
//   fontWeight: active ? 700 : 500,
//   fontSize: '1rem',
//   textTransform: 'none',
//   borderRadius: 0,
//   '&:hover': {
//     backgroundColor: BLUE.transparent.main,
//     color: BLUE.main,
//   },
//   '& img': {
//     marginRight: '12px',
//   },
// }));

// const MobileNavItem = styled(Button, {
//   shouldForwardProp: (prop) => prop !== 'active',
// })(({ theme, active }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   minWidth: 'auto',
//   color: active ? BLUE.main : theme.palette.text.secondary,
//   fontSize: '0.7rem',
//   textTransform: 'none',
//   padding: '4px 8px',
//   flex: 1,
//   fontWeight: active ? 700 : 500,
//   '&:hover': {
//     backgroundColor: BLUE.transparent.main,
//     color: BLUE.main,
//   },
//   '& img': {
//     width: 24,
//     height: 24,
//     marginBottom: '4px',
//   },
// }));

// const AccountMenu = styled(Menu)(({ theme }) => ({
//   '& .MuiPaper-root': {
//     borderRadius: 12,
//     minWidth: 200,
//     boxShadow: `0 8px 32px ${BLUE.transparent.dark}`,
//   },
// }));

// const socialLinks = [
//   { icon: YouTubeIcon, href: "https://www.youtube.com/@JollyKidsprograms", label: "YouTube" },
//   { icon: FacebookOutlinedIcon, href: "https://www.facebook.com/JesusRedeemsMinistries/", label: "Facebook" },
//   { icon: InstagramIcon, href: "https://www.instagram.com/jesusredeems_ministries/", label: "Instagram" }
// ];

// const navItems = [
//   { label: "Home", img: homeicon, path: "/" },
//   { label: "About", img: about, path: "/about" },
//   { label: "Media", img: media, path: "/media" },
//   { label: "Live Now", img: liveNowIcon, path: "/live-now" },
//   { label: "Activity", img: activity, path: "/auth/login" },
//   { label: "Downloads", img: download, path: "https://kids.jesusredeems.com/mag-download/", external: true },
//   { label: "Contact", img: contact, path: "/contact" },
// ];

// // ----------------------------------------------------------------------

// export default function HeaderSection() {
//   const pathname = usePathname();
//   const router = useRouter();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//   const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [mobileAnchorEl, setMobileAnchorEl] = useState(null);
//   const [user, setUser] = useState(null);
//   const [userEmail, setUserEmail] = useState('');
//   const [mounted, setMounted] = useState(false);

//   // Only render on dashboard routes
//   if (!pathname?.startsWith('/dashboard')) {
//     return null;
//   }

//   useEffect(() => {
//     setMounted(true);
//     const jwt = localStorage.getItem("jwt");
//     const email = localStorage.getItem("emailAddress") || '';
//     setUser(jwt);
//     setUserEmail(email);
//   }, []);

//   useEffect(() => {
//     if (!mounted) return;
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [mounted]);

//   const userName = userEmail ? userEmail.replace(/@.*/, '') : 'Guest';
//   const truncatedUserName = truncateUserName(userName);
//   const userAvatar = userName.charAt(0).toUpperCase();

//   const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
//   const handleAccountClick = (event) => setAnchorEl(event.currentTarget);
//   const handleAccountClose = () => setAnchorEl(null);
//   const handleMobileAccountClick = (event) => setMobileAnchorEl(event.currentTarget);
//   const handleMobileAccountClose = () => setMobileAnchorEl(null);

//   const handleLogout = () => {
//     localStorage.removeItem("jwt");
//     localStorage.removeItem("token");
//     localStorage.removeItem("emailAddress");
//     handleAccountClose();
//     handleMobileAccountClose();
//     router.push("/activity");
//   };

//   const isActiveRoute = (path) => {
//     if (path === '/') return pathname === path;
//     return pathname.startsWith(path);
//   };

//   // Show dashboard button only on sub-pages
//   const showDashboardButton = pathname !== '/dashboard';

//   const drawer = (
//     <Box sx={{
//       width: isSmallMobile ? '85vw' : 320,
//       p: 3,
//       display: 'flex',
//       flexDirection: 'column',
//       height: '100%',
//       alignItems: 'center',
//     }}>
//       <Box sx={{ mb: 3 }}><Logo /></Box>
//       <Divider sx={{ width: '100%', mb: 2 }} />
//       <Stack spacing={1} sx={{ flex: 1, width: '100%' }}>
//         {navItems.map((item, index) => (
//           item.external ? (
//             <DrawerItem
//               key={index}
//               component="a"
//               href={item.path}
//               target="_blank"
//               rel="noopener noreferrer"
//               onClick={handleDrawerToggle}
//               startIcon={<Box component="img" src={item.img} alt={item.label} sx={{ width: 30, height: 30 }} />}
//               sx={{ justifyContent: 'center' }}
//             >
//               {item.label}
//             </DrawerItem>
//           ) : (
//             <DrawerItem
//               key={index}
//               component={Link}
//               href={item.path}
//               active={isActiveRoute(item.path) ? 1 : 0}
//               onClick={handleDrawerToggle}
//               startIcon={<Box component="img" src={item.img} alt={item.label} sx={{ width: 30, height: 30 }} />}
//               sx={{ justifyContent: 'center' }}
//             >
//               {item.label}
//             </DrawerItem>
//           )
//         ))}
//       </Stack>
//       <Box sx={{ mt: 'auto', pt: 3, width: '100%' }}>
//         <Button onClick={handleMobileAccountClick} sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, p: 1.5, borderRadius: 2, '&:hover': { backgroundColor: BLUE.transparent.main } }}>
//           <Avatar sx={{ bgcolor: BLUE.main, width: 32, height: 32 }}>{userAvatar}</Avatar>
//           <Typography variant="body2" noWrap sx={{ color: 'text.primary', fontWeight: 600 }}>Hello {truncatedUserName}!</Typography>
//         </Button>
//       </Box>
//     </Box>
//   );

//   if (!mounted) return null;

//   return (
//     <>
//       {/* Top Social Bar */}
//       <Stack
//         direction="row"
//         spacing={0.1}
//         sx={{
//           backgroundColor: BLUE.main,
//           padding: '10px',
//           justifyContent: 'flex-end',
//           borderBottom: '1px solid white',
//         }}
//       >
//         {socialLinks.map((social, idx) => (
//           <Link key={idx} href={social.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
//             <SocialIconButton size="small" aria-label={social.label}>
//               <social.icon />
//             </SocialIconButton>
//           </Link>
//         ))}
//       </Stack>

//       {/* Main AppBar */}
//       <AppBar
//         className={poppins.className}
//         position="sticky"
//         sx={{
//           backgroundColor: BLUE.main,
//         marginBottom: { xs: '-60px', sm: '-69px', md: '0 !important' },
//            clipPath: { xs: 'none', sm: 'none', md: scrolled ? 'none' : "ellipse(100% 100% at 50% 0%)" },
//           boxShadow: scrolled ? 4 : 1,
//           transition: 'all 0.3s ease',
//           top: 0,
//           zIndex: theme.zIndex.appBar,
//           fontFamily: fontStack,
//           fontWeight: 700,
//           '& *': {
//             fontFamily: `${fontStack} !important`,
//           },
//         }}
//       >
//         <Container maxWidth="xl">
//           <Toolbar sx={{
//             justifyContent: "space-between",
//             minHeight: { xs: 64, sm: 72, md: 80 },
//             px: { xs: 1, sm: 2 },
//             alignItems: "center",
//           }}>
//             <LogoContainer><Logo /></LogoContainer>

//             {isMobile ? (
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                 <Button onClick={handleAccountClick} sx={{ color: 'white', textTransform: 'none', '&:hover': { backgroundColor: BLUE.transparent.light } }}>
//                   <Avatar sx={{ width: 32, height: 32, bgcolor: BLUE.dark }}>{userAvatar}</Avatar>
//                 </Button>
//                 <IconButton color="inherit" edge="end" onClick={handleDrawerToggle} sx={{ color: 'white', '&:hover': { backgroundColor: BLUE.transparent.light } }}>
//                   <MenuIcon fontSize="large" />
//                 </IconButton>
//               </Box>
//             ) : (
//               <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
//                 <Stack direction="row" spacing={2} alignItems="center">
//                   {navItems.map((item, index) => (
//                     item.external ? (
//                       <Link key={index} href={item.path} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
//                         <NavItem>
//                           <Box component="img" src={item.img} alt={item.label} sx={{ width: 45, height: 45 }} />
//                           <Typography sx={{ fontWeight: 800, fontSize: '0.8rem', color: 'white' }}>{item.label}</Typography>
//                         </NavItem>
//                       </Link>
//                     ) : (
//                       <Link key={index} href={item.path} style={{ textDecoration: "none" }}>
//                         <NavItem active={isActiveRoute(item.path) ? 1 : 0}>
//                           <Box component="img" src={item.img} alt={item.label} sx={{ width: 45, height: 45 }} />
//                           <Typography sx={{ fontWeight: 800, fontSize: '0.8rem' }}>{item.label}</Typography>
//                         </NavItem>
//                       </Link>
//                     )
//                   ))}
//                 </Stack>

//                 {/* Conditional Dashboard Button */}
//                 {showDashboardButton && (
//                   <Box sx={{ width: '110px', flexShrink: 0 }}>
//                     <Button
//                       component={Link}
//                       href="/dashboard"
//                       variant="contained"
//                       sx={{
//                         backgroundColor: '#f39c12',
//                         color: '#1976d2',
//                         fontWeight: 800,
//                         textTransform: 'none',
//                         whiteSpace: "nowrap",
//                         width: '100%',
//                         px: 2,
//                         py: 0.5,
//                         fontSize: '0.8rem',
//                         borderRadius: '8px',
//                         boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//                         ":hover": {
//                           backgroundColor: '#e67e22',
//                           color: '#0d47a1',
//                         },
//                         animation: "pulseCenter 1.5s ease-in-out infinite",
//                         transformOrigin: "center",
//                         "@keyframes pulseCenter": {
//                           "0%": { transform: "scale(1)" },
//                           "50%": { transform: "scale(1.05)" },
//                           "100%": { transform: "scale(1)" },
//                         },
//                       }}
//                     >
//                       Dashboard
//                     </Button>
//                   </Box>
//                 )}

//                 {/* Compact Account Area - truncated username */}
//                 <Stack direction="row" alignItems="center" spacing={1}>
//   <Button
//     onClick={handleAccountClick}
//     sx={{
//       color: 'white',
//       textTransform: 'none',
//       display: 'flex',
//       alignItems: 'center',
//       gap: 0.75,
//       p: 0.5,
//       minWidth: 'auto',
//       borderRadius: 2,
//       '&:hover': { backgroundColor: BLUE.transparent.light }
//     }}
//   >
//                     <Avatar sx={{ width: 28, height: 28, bgcolor: BLUE.dark, fontSize: '0.7rem' }}>
//                       {userAvatar}
//                     </Avatar>
//                     <Typography
//                       variant="body2"
//                       fontWeight={600}
//                       sx={{
//                         display: { xs: 'none', sm: 'block' },
//                         fontSize: '0.75rem',
//                         color: 'white',
//                       }}
//                     >
//                       Hello {truncatedUserName}!
//                     </Typography>
//                   </Button>
//                   <AccountMenu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleAccountClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
//                     <Box sx={{ px: 2, py: 1.5, display: 'flex', alignItems: 'center', gap: 1.5 }}>
//                       <Avatar sx={{ bgcolor: BLUE.main, width: 40, height: 40 }}>{userAvatar}</Avatar>
//                       <Box>
//                         <Typography variant="subtitle2" fontWeight={700}>{truncatedUserName}</Typography>
//                         <Typography variant="caption" color="text.secondary" fontWeight={400}>{userEmail}</Typography>
//                       </Box>
//                     </Box>
//                     <Divider />
//                     <MenuItem component={Link} href="/dashboard" onClick={handleAccountClose}>
//                       <ListItemIcon><DashboardIcon fontSize="small" sx={{ color: BLUE.main }} /></ListItemIcon>
//                       <ListItemText primaryTypographyProps={{ fontWeight: 600 }}>Dashboard</ListItemText>
//                     </MenuItem>
//                     <MenuItem component={Link} href="/dashboard/user/profile" onClick={handleAccountClose}>
//                       <ListItemIcon><PersonIcon fontSize="small" sx={{ color: BLUE.main }} /></ListItemIcon>
//                       <ListItemText primaryTypographyProps={{ fontWeight: 600 }}>Profile</ListItemText>
//                     </MenuItem>
//                     <Divider />
//                     <MenuItem onClick={handleLogout}>
//                       <ListItemIcon><LogoutIcon fontSize="small" sx={{ color: BLUE.main }} /></ListItemIcon>
//                       <ListItemText primaryTypographyProps={{ fontWeight: 600 }}>Logout</ListItemText>
//                     </MenuItem>
//                   </AccountMenu>
//                 </Stack>
//               </Box>
//             )}
//           </Toolbar>
//         </Container>
//       </AppBar>

//       {/* Mobile Bottom Navigation */}
//       {isMobile && (
//         <Box sx={{
//           position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: 'background.paper',
//           boxShadow: '0px -2px 10px rgba(65, 69, 177, 0.15)', display: 'flex', justifyContent: 'center',
//           padding: '8px 4px', zIndex: theme.zIndex.appBar - 1, backdropFilter: 'blur(8px)',
//           background: 'rgba(255,255,255,0.98)', borderTop: `2px solid ${BLUE.main}`,
//         }}>
//           <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'space-around' }}>
//             {navItems.slice(0, 5).map((item) => (
//               item.external ? (
//                 <MobileNavItem key={item.label} component="a" href={item.path} target="_blank" rel="noopener noreferrer">
//                   <Box component="img" src={item.img} alt={item.label} sx={{ width: 24, height: 24 }} />
//                 </MobileNavItem>
//               ) : (
//                 <MobileNavItem key={item.label} component={Link} href={item.path} active={isActiveRoute(item.path) ? 1 : 0}>
//                   <Box component="img" src={item.img} alt={item.label} sx={{ width: 24, height: 24, filter: isActiveRoute(item.path) ? 'none' : 'grayscale(0.5)' }} />
//                 </MobileNavItem>
//               )
//             ))}
//             <MobileNavItem onClick={handleMobileAccountClick} active={Boolean(mobileAnchorEl)}>
//               <Avatar sx={{ width: 24, height: 24, bgcolor: BLUE.main, fontSize: '0.7rem', mb: 0.5 }}>{userAvatar}</Avatar>
//               <Typography variant="caption" fontWeight={700}>Account</Typography>
//             </MobileNavItem>
//           </Container>
//         </Box>
//       )}

//       {/* Mobile Account Menu */}
//       <Menu anchorEl={mobileAnchorEl} open={Boolean(mobileAnchorEl)} onClose={handleMobileAccountClose}
//         anchorOrigin={{ vertical: 'top', horizontal: 'center' }} transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//         PaperProps={{ sx: { mt: -2, width: 220, borderRadius: 2, boxShadow: `0 8px 32px ${BLUE.transparent.dark}` } }}>
//         <Box sx={{ px: 2, py: 1.5, display: 'flex', alignItems: 'center', gap: 1.5 }}>
//           <Avatar sx={{ bgcolor: BLUE.main, width: 40, height: 40 }}>{userAvatar}</Avatar>
//           <Box><Typography variant="subtitle2" fontWeight={700}>Hello {truncatedUserName}!</Typography></Box>
//         </Box>
//         <Divider />
//         <MenuItem component={Link} href="/dashboard" onClick={handleMobileAccountClose}>
//           <ListItemIcon><DashboardIcon fontSize="small" sx={{ color: BLUE.main }} /></ListItemIcon>
//           <ListItemText primaryTypographyProps={{ fontWeight: 600 }}>Dashboard</ListItemText>
//         </MenuItem>
//         <MenuItem component={Link} href="/dashboard/user/profile" onClick={handleMobileAccountClose}>
//           <ListItemIcon><PersonIcon fontSize="small" sx={{ color: BLUE.main }} /></ListItemIcon>
//           <ListItemText primaryTypographyProps={{ fontWeight: 600 }}>Profile</ListItemText>
//         </MenuItem>
//         <Divider />
//         <MenuItem onClick={handleLogout}>
//           <ListItemIcon><LogoutIcon fontSize="small" sx={{ color: BLUE.main }} /></ListItemIcon>
//           <ListItemText primaryTypographyProps={{ fontWeight: 600 }}>Logout</ListItemText>
//         </MenuItem>
//       </Menu>

//       {/* Mobile Drawer */}
//       <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle} PaperProps={{ sx: { borderRadius: '20px 0 0 20px', display: 'flex', alignItems: 'center' } }}>
//         {drawer}
//       </Drawer>

//       {isMobile && <Box sx={{ height: '70px' }} />}
//     </>
//   );
// }

// HeaderSection.propTypes = {
//   verticalLayout: PropTypes.bool,
// };













'use client';

import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
// @mui
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Stack,
  Container,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
// icons
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Poppins, Aclonica, Lato, Roboto } from 'next/font/google';

// Configure fonts – Poppins as primary
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

// Combined font stack – Poppins as primary
const fontStack = `${poppins.style.fontFamily}, ${aclonica.style.fontFamily}, ${lato.style.fontFamily}, ${roboto.style.fontFamily}, sans-serif`;

// ----------------------------------------------------------------------
const about = "/assets/about.png";
const activity = "/assets/activity.png";
const download = "/assets/download.png";
const contact = "/assets/contact.png";
const homeicon = "/assets/home.png";
const media = "/assets/media.png";
const liveNowIcon = "/assets/tv11.png";

// Helper to truncate username to first 15 characters
const truncateUserName = (name) => {
  if (!name) return 'Guest';
  return name.length > 15 ? name.substring(0, 15) + '...' : name;
};

// Responsive Logo
const Logo = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  let logoWidth = 180;
  let logoHeight = 60;
  if (isMobile) {
    logoWidth = 120;
    logoHeight = 40;
  } else if (isTablet) {
    logoWidth = 150;
    logoHeight = 50;
  }

  return (
    <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
      <Image
        src="/assets/logo.png"
        alt="Virtual Bible School"
        width={logoWidth}
        height={logoHeight}
        priority
        style={{ objectFit: 'contain' }}
      />
    </Link>
  );
};

// ----------------------------------------------------------------------

const BLUE = {
  light: '#8a5cc7',
  main: '#4145b1',
  dark: '#2a2e7a',
  contrastText: '#ffffff',
  transparent: {
    light: 'rgba(65, 69, 177, 0.08)',
    main: 'rgba(65, 69, 177, 0.12)',
    dark: 'rgba(65, 69, 177, 0.16)',
  }
};

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginTop: '-8px',
  marginRight: '5%',
  '& > *': {
    display: 'flex',
    alignItems: 'center',
  },
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: 'white',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  margin: '0 4px',
  padding: '8px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transform: 'translateY(-2px)',
    transition: 'all 0.2s ease',
  },
  '& svg': {
    fontSize: '1.2rem',
  },
}));

const NavItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ theme, active }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: active ? BLUE.contrastText : 'rgba(255,255,255,0.9)',
  cursor: 'pointer',
  textDecoration: 'none',
  minWidth: '80px',
  '&:hover': {
    transform: 'scale(1.1)',
    transition: 'transform 0.3s ease-in-out',
    '& .MuiTypography-root': {
      color: BLUE.contrastText,
      fontWeight: 800,
    },
  },
}));

const DrawerItem = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ theme, active }) => ({
  justifyContent: 'center',
  padding: '12px 16px',
  width: '100%',
  color: active ? BLUE.main : theme.palette.text.primary,
  fontWeight: active ? 700 : 500,
  fontSize: '1rem',
  textTransform: 'none',
  borderRadius: 0,
  '&:hover': {
    backgroundColor: BLUE.transparent.main,
    color: BLUE.main,
  },
  '& img': {
    marginRight: '12px',
  },
}));

const MobileNavItem = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ theme, active }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 'auto',
  color: active ? BLUE.main : theme.palette.text.secondary,
  fontSize: '0.7rem',
  textTransform: 'none',
  padding: '4px 8px',
  flex: 1,
  fontWeight: active ? 700 : 500,
  '&:hover': {
    backgroundColor: BLUE.transparent.main,
    color: BLUE.main,
  },
  '& img': {
    width: 24,
    height: 24,
    marginBottom: '4px',
  },
}));

const AccountMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 12,
    minWidth: 200,
    boxShadow: `0 8px 32px ${BLUE.transparent.dark}`,
  },
}));

const socialLinks = [
  { icon: YouTubeIcon, href: "https://www.youtube.com/@JollyKidsprograms", label: "YouTube" },
  { icon: FacebookOutlinedIcon, href: "https://www.facebook.com/JesusRedeemsMinistries/", label: "Facebook" },
  { icon: InstagramIcon, href: "https://www.instagram.com/jesusredeems_ministries/", label: "Instagram" }
];

const navItems = [
  { label: "Home", img: homeicon, path: "/" },
  { label: "About", img: about, path: "/about" },
  { label: "Media", img: media, path: "/media" },
  { label: "Live Now", img: liveNowIcon, path: "/live-now" },
  { label: "Activity", img: activity, path: "/auth/login" },
  { label: "Downloads", img: download, path: "https://kids.jesusredeems.com/mag-download/", external: true },
  { label: "Contact", img: contact, path: "/contact" },
];

// ----------------------------------------------------------------------

export default function HeaderSection() {
  const pathname = usePathname();
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileAnchorEl, setMobileAnchorEl] = useState(null);
  const [user, setUser] = useState(null);
  const [userEmail, setUserEmail] = useState('');
  const [mounted, setMounted] = useState(false);

  // Only render on dashboard routes
  if (!pathname?.startsWith('/dashboard')) {
    return null;
  }

  useEffect(() => {
    setMounted(true);
    const jwt = localStorage.getItem("jwt");
    const email = localStorage.getItem("emailAddress") || '';
    setUser(jwt);
    setUserEmail(email);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  const userName = userEmail ? userEmail.replace(/@.*/, '') : 'Guest';
  const truncatedUserName = truncateUserName(userName);
  const userAvatar = userName.charAt(0).toUpperCase();

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleAccountClick = (event) => setAnchorEl(event.currentTarget);
  const handleAccountClose = () => setAnchorEl(null);
  const handleMobileAccountClick = (event) => setMobileAnchorEl(event.currentTarget);
  const handleMobileAccountClose = () => setMobileAnchorEl(null);

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("token");
    localStorage.removeItem("emailAddress");
    handleAccountClose();
    handleMobileAccountClose();
    router.push("/activity");
  };

  const isActiveRoute = (path) => {
    if (path === '/') return pathname === path;
    return pathname.startsWith(path);
  };

  // Show dashboard button only on sub-pages
  const showDashboardButton = pathname !== '/dashboard';

  const drawer = (
    <Box sx={{
      width: isSmallMobile ? '85vw' : 320,
      p: 3,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      alignItems: 'center',
    }}>
      <Box sx={{ mb: 3 }}><Logo /></Box>
      <Divider sx={{ width: '100%', mb: 2 }} />
      <Stack spacing={1} sx={{ flex: 1, width: '100%' }}>
        {navItems.map((item, index) => (
          item.external ? (
            <DrawerItem
              key={index}
              component="a"
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDrawerToggle}
              startIcon={<Box component="img" src={item.img} alt={item.label} sx={{ width: 30, height: 30 }} />}
              sx={{ justifyContent: 'center' }}
            >
              {item.label}
            </DrawerItem>
          ) : (
            <DrawerItem
              key={index}
              component={Link}
              href={item.path}
              active={isActiveRoute(item.path) ? 1 : 0}
              onClick={handleDrawerToggle}
              startIcon={<Box component="img" src={item.img} alt={item.label} sx={{ width: 30, height: 30 }} />}
              sx={{ justifyContent: 'center' }}
            >
              {item.label}
            </DrawerItem>
          )
        ))}
      </Stack>
      <Box sx={{ mt: 'auto', pt: 3, width: '100%' }}>
        <Button onClick={handleMobileAccountClick} sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, p: 1.5, borderRadius: 2, '&:hover': { backgroundColor: BLUE.transparent.main } }}>
          <Avatar sx={{ bgcolor: BLUE.main, width: 32, height: 32 }}>{userAvatar}</Avatar>
          <Typography variant="body2" noWrap sx={{ color: 'text.primary', fontWeight: 600 }}>Hello {truncatedUserName}!</Typography>
        </Button>
      </Box>
    </Box>
  );

  if (!mounted) return null;

  return (
    <>
      {/* Top Social Bar */}
      <Stack
        direction="row"
        spacing={0.1}
        sx={{
          backgroundColor: BLUE.main,
          padding: '10px',
          justifyContent: 'flex-end',
          borderBottom: '1px solid white',
        }}
      >
        {socialLinks.map((social, idx) => (
          <Link key={idx} href={social.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <SocialIconButton size="small" aria-label={social.label}>
              <social.icon />
            </SocialIconButton>
          </Link>
        ))}
      </Stack>

      {/* Main AppBar */}
      <AppBar
        className={poppins.className}
        position="sticky"
        sx={{
          backgroundColor: BLUE.main,
          marginBottom: { xs: '-60px', sm: '-69px', md: '0 !important' },
          clipPath: { xs: 'none', sm: 'none', md: scrolled ? 'none' : "ellipse(100% 100% at 50% 0%)" },
          boxShadow: scrolled ? 4 : 1,
          transition: 'all 0.3s ease',
          top: 0,
          zIndex: theme.zIndex.appBar,
          fontFamily: fontStack,
          fontWeight: 700,
          '& *': {
            fontFamily: `${fontStack} !important`,
          },
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{
            justifyContent: "space-between",
            minHeight: { xs: 64, sm: 72, md: 80 },
            px: { xs: 1, sm: 2 },
            alignItems: "center",
          }}>
            <LogoContainer><Logo /></LogoContainer>

            {isMobile ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Button onClick={handleAccountClick} sx={{ color: 'white', textTransform: 'none', '&:hover': { backgroundColor: BLUE.transparent.light } }}>
                  <Avatar sx={{ width: 32, height: 32, bgcolor: BLUE.dark }}>{userAvatar}</Avatar>
                </Button>
                <IconButton color="inherit" edge="end" onClick={handleDrawerToggle} sx={{ color: 'white', '&:hover': { backgroundColor: BLUE.transparent.light } }}>
                  <MenuIcon fontSize="large" />
                </IconButton>
              </Box>
            ) : (
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  {navItems.map((item, index) => (
                    item.external ? (
                      <Link key={index} href={item.path} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <NavItem>
                          <Box component="img" src={item.img} alt={item.label} sx={{ width: 45, height: 45 }} />
                          <Typography sx={{ fontWeight: 800, fontSize: '0.8rem', color: 'white' }}>{item.label}</Typography>
                        </NavItem>
                      </Link>
                    ) : (
                      <Link key={index} href={item.path} style={{ textDecoration: "none" }}>
                        <NavItem active={isActiveRoute(item.path) ? 1 : 0}>
                          <Box component="img" src={item.img} alt={item.label} sx={{ width: 45, height: 45 }} />
                          <Typography sx={{ fontWeight: 800, fontSize: '0.8rem' }}>{item.label}</Typography>
                        </NavItem>
                      </Link>
                    )
                  ))}
                </Stack>

                {/* Conditional Dashboard Button */}
                {showDashboardButton && (
                  <Box sx={{ width: '110px', flexShrink: 0 }}>
                    <Button
                      component={Link}
                      href="/dashboard"
                      variant="contained"
                      sx={{
                        backgroundColor: '#f39c12',
                        color: '#1976d2',
                        fontWeight: 800,
                        textTransform: 'none',
                        whiteSpace: "nowrap",
                        width: '100%',
                        px: 2,
                        py: 0.5,
                        fontSize: '0.8rem',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        ":hover": {
                          backgroundColor: '#e67e22',
                          color: '#0d47a1',
                        },
                        animation: "pulseCenter 1.5s ease-in-out infinite",
                        transformOrigin: "center",
                        "@keyframes pulseCenter": {
                          "0%": { transform: "scale(1)" },
                          "50%": { transform: "scale(1.05)" },
                          "100%": { transform: "scale(1)" },
                        },
                      }}
                    >
                      Dashboard
                    </Button>
                  </Box>
                )}

                {/* Compact Account Area - with Hello and name on separate lines */}
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Button
                    onClick={handleAccountClick}
                    sx={{
                      color: 'white',
                      textTransform: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.75,
                      p: 0.5,
                      minWidth: 'auto',
                      borderRadius: 2,
                      '&:hover': { backgroundColor: BLUE.transparent.light }
                    }}
                  >
                    <Avatar sx={{ width: 28, height: 28, bgcolor: BLUE.dark, fontSize: '0.7rem' }}>
                      {userAvatar}
                    </Avatar>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                      <Typography
                        variant="caption"
                        sx={{
                          display: { xs: 'none', sm: 'block' },
                          fontSize: '0.65rem',
                          color: 'rgba(255,255,255,0.7)',
                          lineHeight: 1.2,
                        }}
                      >
                        Hello
                      </Typography>
                      <Typography
                        variant="body2"
                        fontWeight={600}
                        sx={{
                          display: { xs: 'none', sm: 'block' },
                          fontSize: '0.75rem',
                          color: 'white',
                          lineHeight: 1.2,
                        }}
                      >
                        {truncatedUserName}!
                      </Typography>
                    </Box>
                  </Button>
                  <AccountMenu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleAccountClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
                    <Box sx={{ px: 2, py: 1.5, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Avatar sx={{ bgcolor: BLUE.main, width: 40, height: 40 }}>{userAvatar}</Avatar>
                      <Box>
                        <Typography variant="subtitle2" fontWeight={700}>{truncatedUserName}</Typography>
                        <Typography variant="caption" color="text.secondary" fontWeight={400}>{userEmail}</Typography>
                      </Box>
                    </Box>
                    <Divider />
                    <MenuItem component={Link} href="/dashboard" onClick={handleAccountClose}>
                      <ListItemIcon><DashboardIcon fontSize="small" sx={{ color: BLUE.main }} /></ListItemIcon>
                      <ListItemText primaryTypographyProps={{ fontWeight: 600 }}>Dashboard</ListItemText>
                    </MenuItem>
                    <MenuItem component={Link} href="/dashboard/user/profile" onClick={handleAccountClose}>
                      <ListItemIcon><PersonIcon fontSize="small" sx={{ color: BLUE.main }} /></ListItemIcon>
                      <ListItemText primaryTypographyProps={{ fontWeight: 600 }}>Profile</ListItemText>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleLogout}>
                      <ListItemIcon><LogoutIcon fontSize="small" sx={{ color: BLUE.main }} /></ListItemIcon>
                      <ListItemText primaryTypographyProps={{ fontWeight: 600 }}>Logout</ListItemText>
                    </MenuItem>
                  </AccountMenu>
                </Stack>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Bottom Navigation */}
      {isMobile && (
        <Box sx={{
          position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: 'background.paper',
          boxShadow: '0px -2px 10px rgba(65, 69, 177, 0.15)', display: 'flex', justifyContent: 'center',
          padding: '8px 4px', zIndex: theme.zIndex.appBar - 1, backdropFilter: 'blur(8px)',
          background: 'rgba(255,255,255,0.98)', borderTop: `2px solid ${BLUE.main}`,
        }}>
          <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'space-around' }}>
            {navItems.slice(0, 5).map((item) => (
              item.external ? (
                <MobileNavItem key={item.label} component="a" href={item.path} target="_blank" rel="noopener noreferrer">
                  <Box component="img" src={item.img} alt={item.label} sx={{ width: 24, height: 24 }} />
                </MobileNavItem>
              ) : (
                <MobileNavItem key={item.label} component={Link} href={item.path} active={isActiveRoute(item.path) ? 1 : 0}>
                  <Box component="img" src={item.img} alt={item.label} sx={{ width: 24, height: 24, filter: isActiveRoute(item.path) ? 'none' : 'grayscale(0.5)' }} />
                </MobileNavItem>
              )
            ))}
            <MobileNavItem onClick={handleMobileAccountClick} active={Boolean(mobileAnchorEl)}>
              <Avatar sx={{ width: 24, height: 24, bgcolor: BLUE.main, fontSize: '0.7rem', mb: 0.5 }}>{userAvatar}</Avatar>
              <Typography variant="caption" fontWeight={700}>Account</Typography>
            </MobileNavItem>
          </Container>
        </Box>
      )}

      {/* Mobile Account Menu */}
      <Menu anchorEl={mobileAnchorEl} open={Boolean(mobileAnchorEl)} onClose={handleMobileAccountClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        PaperProps={{ sx: { mt: -2, width: 220, borderRadius: 2, boxShadow: `0 8px 32px ${BLUE.transparent.dark}` } }}>
        <Box sx={{ px: 2, py: 1.5, display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Avatar sx={{ bgcolor: BLUE.main, width: 40, height: 40 }}>{userAvatar}</Avatar>
          <Box>
            <Typography variant="caption" color="text.secondary" fontWeight={500}>
              Hello
            </Typography>
            <Typography variant="subtitle2" fontWeight={700}>
              {truncatedUserName}!
            </Typography>
          </Box>
        </Box>
        <Divider />
        <MenuItem component={Link} href="/dashboard" onClick={handleMobileAccountClose}>
          <ListItemIcon><DashboardIcon fontSize="small" sx={{ color: BLUE.main }} /></ListItemIcon>
          <ListItemText primaryTypographyProps={{ fontWeight: 600 }}>Dashboard</ListItemText>
        </MenuItem>
        <MenuItem component={Link} href="/dashboard/user/profile" onClick={handleMobileAccountClose}>
          <ListItemIcon><PersonIcon fontSize="small" sx={{ color: BLUE.main }} /></ListItemIcon>
          <ListItemText primaryTypographyProps={{ fontWeight: 600 }}>Profile</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon><LogoutIcon fontSize="small" sx={{ color: BLUE.main }} /></ListItemIcon>
          <ListItemText primaryTypographyProps={{ fontWeight: 600 }}>Logout</ListItemText>
        </MenuItem>
      </Menu>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle} PaperProps={{ sx: { borderRadius: '20px 0 0 20px', display: 'flex', alignItems: 'center' } }}>
        {drawer}
      </Drawer>

      {isMobile && <Box sx={{ height: '70px' }} />}
    </>
  );
}

HeaderSection.propTypes = {
  verticalLayout: PropTypes.bool,
};