'use client';

import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
// @mui
import {
  AppBar,
  Box,
  Button,
  Card,
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
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
// Social Media Icons
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
// assets – images are now served from public/assets/
import about from "/assets/about.png";
import activity from "/assets/activity.png";
import download from "/assets/download.png";
import contact from "/assets/contact.png";
import homeicon from "/assets/home.png";
import media from "/assets/media.png";
// components
import Logo from "./Logo"; // adjust path if needed
import { LoginForm } from "@/sections/auth/login"; // adjust path if needed

// ----------------------------------------------------------------------

// Blue theme constants
const BLUE = {
  light: '#8a5cc7',
  main: '#7048bb',
  dark: '#5a3a96',
  contrastText: '#ffffff',
  transparent: {
    light: 'rgba(114, 72, 187, 0.08)',
    main: 'rgba(114, 72, 187, 0.12)',
    dark: 'rgba(114, 72, 187, 0.16)',
  }
};

// Styled Logo Container
const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginTop: '-8px',
  '& > *': {
    display: 'flex',
    alignItems: 'center',
  },
}));

// Styled Social Icon Button
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

// Styled navigation item with image
const NavItem = styled(Box)(({ theme, active }) => ({
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
      fontWeight: 'bold',
    },
  },
}));

// Mobile drawer item
const DrawerItem = styled(Button)(({ theme, active }) => ({
  justifyContent: 'center',
  padding: '12px 16px',
  width: '100%',
  color: active ? BLUE.main : theme.palette.text.primary,
  fontWeight: active ? 600 : 400,
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

// Styled action button (Login/Dashboard)
const ActionButton = styled(Button)(({ theme }) => ({
  backgroundColor: BLUE.main,
  color: BLUE.contrastText,
  fontWeight: 'bold',
  padding: '8px 24px',
  borderRadius: '25px',
  '&:hover': {
    backgroundColor: BLUE.dark,
    color: BLUE.contrastText,
  },
}));

// Mobile bottom navigation item
const MobileNavItem = styled(Button)(({ theme, active }) => ({
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

// Desktop Account Menu
const AccountMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 12,
    minWidth: 200,
    boxShadow: `0 8px 32px ${BLUE.transparent.dark}`,
  },
}));

// Social Media Links
const socialLinks = [
  { icon: YouTubeIcon, href: "https://www.youtube.com/@JollyKidsprograms", label: "YouTube" },
  { icon: FacebookOutlinedIcon, href: "https://www.facebook.com/JesusRedeemsMinistries/", label: "Facebook" },
  { icon: InstagramIcon, href: "https://www.instagram.com/jesusredeems_ministries/", label: "Instagram" }
];

// Navigation items (image paths now point to /assets/...)
const navItems = [
  { label: "Home", img: homeicon, path: "/" },
  { label: "About", img: about, path: "/about" },
  { label: "Media", img: media, path: "/media" },
  { label: "Activity", img: activity, path: "/activity" },
  { label: "Downloads", img: download, path: "https://kids.jesusredeems.com/mag-download/", external: true },
  { label: "Contact", img: contact, path: "/contact" },
];

export default function HeaderSection() {
  const pathname = usePathname();
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [mobileOpen, setMobileOpen] = useState(false);
  const [popup, setPopup] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileAnchorEl, setMobileAnchorEl] = useState(null);
  const [user, setUser] = useState(null);
  const [userEmail, setUserEmail] = useState('');
  const [mounted, setMounted] = useState(false);

  // Load user data after mount
  useEffect(() => {
    setMounted(true);
    const jwt = localStorage.getItem("jwt");
    const email = localStorage.getItem("emailAddress") || '';
    setUser(jwt);
    setUserEmail(email);
  }, []);

  // Scroll effect
  useEffect(() => {
    if (!mounted) return;
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  const userName = userEmail ? userEmail.replace(/@.*/, '') : 'Guest';
  const userAvatar = userName.charAt(0).toUpperCase();

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleAccountClick = (event) => setAnchorEl(event.currentTarget);
  const handleAccountClose = () => setAnchorEl(null);
  const handleMobileAccountClick = (event) => setMobileAnchorEl(event.currentTarget);
  const handleMobileAccountClose = () => setMobileAnchorEl(null);

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("emailAddress");
    handleAccountClose();
    handleMobileAccountClose();
    router.push("/");
  };

  const isActiveRoute = (path) => {
    if (path === '/') return pathname === path;
    return pathname.startsWith(path);
  };

  const drawer = (
    <Box sx={{ width: isSmallMobile ? '85vw' : 320, p: 3, display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'center' }}>
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
        {!user ? (
          <ActionButton onClick={() => { setPopup(true); setMobileOpen(false); }} variant="contained" fullWidth>
            Login
          </ActionButton>
        ) : (
          <Button onClick={handleMobileAccountClick} sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, p: 1.5, borderRadius: 2, '&:hover': { backgroundColor: BLUE.transparent.main } }}>
            <Avatar sx={{ bgcolor: BLUE.main, width: 32, height: 32 }}>{userAvatar}</Avatar>
            <Typography variant="body2" noWrap sx={{ color: 'text.primary' }}>Hello Ablazer!</Typography>
          </Button>
        )}
      </Box>
    </Box>
  );

  if (!mounted) return null; // avoid hydration mismatch

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: BLUE.main,
          clipPath: { xs: 'none', md: scrolled ? 'none' : "ellipse(100% 100% at 50% 0%)" },
          boxShadow: scrolled ? 4 : 1,
          transition: 'all 0.3s ease',
          top: 0,
          zIndex: theme.zIndex.appBar,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{
            justifyContent: "space-between",
            minHeight: { xs: 64, sm: 70, md: 80 },
            px: { xs: 1, sm: 2 },
            alignItems: "center",
          }}>
            <LogoContainer><Logo /></LogoContainer>

            {isMobile ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {user && (
                  <Button onClick={handleAccountClick} sx={{ color: 'white', textTransform: 'none', '&:hover': { backgroundColor: BLUE.transparent.light } }}>
                    <Avatar sx={{ width: 32, height: 32, bgcolor: BLUE.dark }}>{userAvatar}</Avatar>
                  </Button>
                )}
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
                          <Box component="img" src={item.img} alt={item.label} sx={{ width: 40, height: 40 }} />
                          <Typography sx={{ fontWeight: "bold", fontSize: '0.9rem', color: 'white' }}>{item.label}</Typography>
                        </NavItem>
                      </Link>
                    ) : (
                      <Link key={index} href={item.path} style={{ textDecoration: "none" }}>
                        <NavItem active={isActiveRoute(item.path) ? 1 : 0}>
                          <Box component="img" src={item.img} alt={item.label} sx={{ width: 40, height: 40 }} />
                          <Typography sx={{ fontWeight: "bold", fontSize: '0.9rem' }}>{item.label}</Typography>
                        </NavItem>
                      </Link>
                    )
                  ))}
                </Stack>

                <Stack direction="row" spacing={0.5} sx={{ mx: 1 }}>
                  {socialLinks.map((social, idx) => (
                    <Link key={idx} href={social.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                      <SocialIconButton size="small" aria-label={social.label}>
                        <social.icon />
                      </SocialIconButton>
                    </Link>
                  ))}
                </Stack>

                {pathname !== '/dashboard/myapp' && (
                  <Button component={Link} href="/dashboard/myapp" variant="contained" sx={{
                    backgroundColor: "white",
                    color: BLUE.main,
                    fontWeight: "bold",
                    ":hover": { backgroundColor: "rgba(255,255,255,0.9)", color: BLUE.dark },
                    animation: "pulse 1.5s ease-in-out infinite",
                    "@keyframes pulse": {
                      "0%": { transform: "scale(1)" },
                      "50%": { transform: "scale(1.1)" },
                      "100%": { transform: "scale(1)" },
                    },
                  }}>Dashboard</Button>
                )}

                <Stack direction="row" alignItems="center" spacing={2}>
                  {!user ? (
                    <ActionButton onClick={() => setPopup(true)} variant="contained">Login</ActionButton>
                  ) : (
                    <>
                      <Button onClick={handleAccountClick} sx={{ color: 'white', textTransform: 'none', display: 'flex', alignItems: 'center', gap: 1, '&:hover': { backgroundColor: BLUE.transparent.light } }}>
                        <Avatar sx={{ width: 32, height: 32, bgcolor: BLUE.dark }}>{userAvatar}</Avatar>
                        <Typography variant="body2" fontWeight="bold">Hello Ablazer!</Typography>
                      </Button>
                      <AccountMenu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleAccountClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
                        <Box sx={{ px: 2, py: 1.5, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                          <Avatar sx={{ bgcolor: BLUE.main, width: 40, height: 40 }}>{userAvatar}</Avatar>
                          <Box>
                            <Typography variant="subtitle2">{userName}</Typography>
                            <Typography variant="caption" color="text.secondary">{userEmail}</Typography>
                          </Box>
                        </Box>
                        <Divider />
                        <MenuItem component={Link} href="/dashboard/myapp" onClick={handleAccountClose}>
                          <ListItemIcon><DashboardIcon fontSize="small" sx={{ color: BLUE.main }} /></ListItemIcon>
                          <ListItemText>Dashboard</ListItemText>
                        </MenuItem>
                        <MenuItem component={Link} href="/dashboard/user/profile" onClick={handleAccountClose}>
                          <ListItemIcon><PersonIcon fontSize="small" sx={{ color: BLUE.main }} /></ListItemIcon>
                          <ListItemText>Profile</ListItemText>
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleLogout}>
                          <ListItemIcon><LogoutIcon fontSize="small" sx={{ color: BLUE.main }} /></ListItemIcon>
                          <ListItemText>Logout</ListItemText>
                        </MenuItem>
                      </AccountMenu>
                    </>
                  )}
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
          boxShadow: '0px -2px 10px rgba(114, 72, 187, 0.15)', display: 'flex', justifyContent: 'center',
          padding: '8px 4px', zIndex: theme.zIndex.appBar - 1, backdropFilter: 'blur(8px)',
          background: 'rgba(255,255,255,0.98)', borderTop: `2px solid ${BLUE.main}`,
        }}>
          <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'space-around' }}>
            {navItems.slice(0, 4).map((item) => (
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
            {!user ? (
              <MobileNavItem onClick={() => setPopup(true)} active={popup ? 1 : 0}>
                <PersonIcon sx={{ width: 24, height: 24, color: popup ? BLUE.main : 'text.secondary', mb: 0.5 }} />
                <Typography variant="caption">Login</Typography>
              </MobileNavItem>
            ) : (
              <MobileNavItem onClick={handleMobileAccountClick} active={Boolean(mobileAnchorEl)}>
                <Avatar sx={{ width: 24, height: 24, bgcolor: BLUE.main, fontSize: '0.8rem', mb: 0.5 }}>{userAvatar}</Avatar>
                <Typography variant="caption">Account</Typography>
              </MobileNavItem>
            )}
          </Container>
        </Box>
      )}

      {/* Mobile Account Menu */}
      <Menu anchorEl={mobileAnchorEl} open={Boolean(mobileAnchorEl)} onClose={handleMobileAccountClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        PaperProps={{ sx: { mt: -2, width: 220, borderRadius: 2, boxShadow: `0 8px 32px ${BLUE.transparent.dark}` } }}>
        <Box sx={{ px: 2, py: 1.5, display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Avatar sx={{ bgcolor: BLUE.main, width: 40, height: 40 }}>{userAvatar}</Avatar>
          <Box><Typography variant="subtitle2">Hello Ablazer!</Typography></Box>
        </Box>
        <Divider />
        <MenuItem component={Link} href="/dashboard/myapp" onClick={handleMobileAccountClose}>
          <ListItemIcon><DashboardIcon fontSize="small" sx={{ color: BLUE.main }} /></ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </MenuItem>
        <MenuItem component={Link} href="/dashboard/user/profile" onClick={handleMobileAccountClose}>
          <ListItemIcon><PersonIcon fontSize="small" sx={{ color: BLUE.main }} /></ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon><LogoutIcon fontSize="small" sx={{ color: BLUE.main }} /></ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle} PaperProps={{ sx: { borderRadius: '20px 0 0 20px', display: 'flex', alignItems: 'center' } }}>
        {drawer}
      </Drawer>

      {/* Login Popup */}
      {popup && (
        <Card sx={{
          width: { xs: "90%", sm: "400px" }, padding: 4, position: "fixed", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)", zIndex: 1400, boxShadow: `0 8px 32px ${BLUE.transparent.dark}`, borderRadius: '16px',
        }}>
          <LoginForm />
          <IconButton onClick={() => setPopup(false)} sx={{ position: "absolute", top: 10, right: 10, cursor: "pointer", color: BLUE.main, '&:hover': { backgroundColor: BLUE.transparent.main } }}>
            <CloseIcon />
          </IconButton>
        </Card>
      )}

      {isMobile && <Box sx={{ height: '70px' }} />}
    </>
  );
}

HeaderSection.propTypes = {
  verticalLayout: PropTypes.bool,
};