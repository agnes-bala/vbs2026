'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Button,
  Card,
  Divider,
  Drawer,
  IconButton,
  Link as MuiLink,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Stack,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LoginForm from '@/sections/auth/login/LoginForm';
import { Plus_Jakarta_Sans, Poppins, Aclonica, Lato, Roboto } from 'next/font/google';

// Configure fonts – geometric first
const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
});

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

// Combined font stack – Plus Jakarta Sans (geometric) as primary
const fontStack = `${plusJakartaSans.style.fontFamily}, ${poppins.style.fontFamily}, ${aclonica.style.fontFamily}, ${lato.style.fontFamily}, ${roboto.style.fontFamily}, sans-serif`;

// Force font and increased boldness on all elements
const globalFontStyle = {
  fontFamily: fontStack,
  fontWeight: 600,
  '& *': {
    fontFamily: `${fontStack} !important`,
  },
};

const Logo = () => (
  <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
    <Image
      src="/assets/logo.png"
      alt="Virtual Bible School"
      width={150}
      height={50}
      priority
      style={{ objectFit: 'contain' }}
    />
  </Link>
);

const baseNavItems = [
  { label: 'Home', img: '/assets/home.png', path: '/' },
  { label: 'About', img: '/assets/about.png', path: '/about' },
  { label: 'Media', img: '/assets/media.png', path: '/media' },
  { label: 'Live Now', img: '/assets/tv11.png', path: '/live-now' },
  { label: 'Activity', img: '/assets/activity.png', path: '/activity' },
  { label: 'Downloads', img: '/assets/download.png', path: 'https://kids.jesusredeems.com/mag-download/', external: true },
  { label: 'Contact', img: '/assets/contact.png', path: '/contact' },
];

const socialLinks = [
  { icon: YouTubeIcon, href: 'https://www.youtube.com/@JollyKidsprograms', label: 'YouTube' },
  { icon: FacebookOutlinedIcon, href: 'https://www.facebook.com/JesusRedeemsMinistries/', label: 'Facebook' },
  { icon: InstagramIcon, href: 'https://www.instagram.com/jesusredeems_ministries/', label: 'Instagram' },
];

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
  '& svg': { fontSize: '1.2rem' },
}));

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [popup, setPopup] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Only render on non-dashboard routes
  if (pathname?.startsWith('/dashboard')) {
    return null;
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  // Authentication check and event listeners
  useEffect(() => {
    if (!mounted) return;

    const checkAuth = () => {
      const token = localStorage.getItem('jwt') || localStorage.getItem('token');
      setUser(token);
      setAuthLoading(false);
    };

    checkAuth();

    const handleStorageChange = () => checkAuth();
    const handlePageShow = (event) => {
      if (event.persisted) checkAuth();
    };
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') checkAuth();
    };
    const handleFocus = () => checkAuth();

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('pageshow', handlePageShow);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleFocus);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('pageshow', handlePageShow);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
    };
  }, [mounted, pathname]);

  // Scroll stickiness
  useEffect(() => {
    if (!mounted) return;
    const handleScroll = () => setIsSticky(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const navItems = baseNavItems.map(item => {
    if (item.label === 'Activity') {
      return {
        ...item,
        path: user ? '/dashboard' : '/activity',
        external: false,
      };
    }
    return item;
  });

  const drawer = (
    <Box sx={{ width: 250, p: 2 }}>
      <Logo />
      <Divider />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
        {navItems.map((item, idx) =>
          item.external ? (
            <MuiLink
              key={idx}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              onClick={() => setMobileOpen(false)}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <img src={item.img} alt={item.label} width="30" />
                <Typography sx={{ color: 'black', fontWeight: 700 }}>{item.label}</Typography>
              </Box>
            </MuiLink>
          ) : (
            <Link
              key={idx}
              href={item.path}
              style={{ textDecoration: 'none' }}
              onClick={() => setMobileOpen(false)}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <img src={item.img} alt={item.label} width="30" />
                <Typography sx={{ color: 'black', fontWeight: 700 }}>{item.label}</Typography>
              </Box>
            </Link>
          )
        )}
        {!user ? (
          <Button
            onClick={() => { setPopup(true); setMobileOpen(false); }}
            variant="contained"
            sx={{
              backgroundColor: '#f5ad3a',
              color: '#1976d2',
              fontWeight: 700,
              borderRadius: '10px',
              px: 3,
              textTransform: 'none',
            }}
          >
            Login
          </Button>
        ) : (
          <Button
            component={Link}
            href="/dashboard"
            variant="contained"
            sx={{
              backgroundColor: '#f39c12',
              color: '#1976d2',
              fontWeight: 700,
              textTransform: 'none',
            }}
            onClick={() => setMobileOpen(false)}
          >
            Dashboard
          </Button>
        )}
      </Box>
    </Box>
  );

  if (!mounted) return null;

  const baseButtonStyles = {
    fontWeight: 700,
    borderRadius: '10px',
    px: 3,
    fontSize: { md: '0.8rem', lg: '0.9rem' },
    py: { md: 0.5, lg: 0.75 },
    whiteSpace: 'nowrap',
    flexShrink: 0,
    minWidth: '100px',
    textTransform: 'none',
    backgroundColor: '#f39c12',
    color: '#1976d2',
  };

  const scalePulse = {
    animation: 'scalePulse 1.5s ease-in-out infinite',
    transformOrigin: 'center',
    '@keyframes scalePulse': {
      '0%': { transform: 'scale(1)' },
      '50%': { transform: 'scale(1.1)' },
      '100%': { transform: 'scale(1)' },
    },
  };

  return (
    <Box className={plusJakartaSans.className} sx={globalFontStyle}>
      {/* Top social bar */}
      <Stack
        direction="row"
        spacing={0.1}
        sx={{
          backgroundColor: '#4145b1',
          padding: '10px',
          justifyContent: 'right',
          borderBottom: '1px solid white',
        }}
      >
        {socialLinks.map((social, idx) => (
          <MuiLink
            key={idx}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
          >
            <SocialIconButton size="small" aria-label={social.label}>
              <social.icon />
            </SocialIconButton>
          </MuiLink>
        ))}
      </Stack>

      {/* Main navbar */}
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: '#4145b1',
          top: 0,
          zIndex: 1100,
          boxShadow: isSticky ? 3 : 1,
          transition: 'box-shadow 0.3s ease-in-out',
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            minHeight: { xs: '64px', sm: '70px' },
            px: { xs: 2, sm: 3, md: 4 },
            maxWidth: '1400px',
            mx: 'auto',
            width: '100%',
          }}
        >
          <Logo />

          {isMobile ? (
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ color: 'white', '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}
            >
              <MenuIcon
                fontSize="large"
                sx={{
                  animation: 'pulse 1s ease-in-out infinite',
                  '@keyframes pulse': {
                    '0%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.3)' },
                    '100%': { transform: 'scale(1)' },
                  },
                }}
              />
            </IconButton>
          ) : (
            <Box
              sx={{
                display: 'flex',
                gap: { md: 3, lg: 5 },
                alignItems: 'center',
                flexWrap: 'nowrap',
              }}
            >
              {navItems.map((item, idx) =>
                item.external ? (
                  <MuiLink
                    key={idx}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        color: 'white',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': { transform: 'scale(1.1)' },
                      }}
                    >
                      {/* All images same width: 35px */}
                      <img src={item.img} alt={item.label} width="35" />
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: { md: '0.8rem', lg: '0.9rem' },
                          transition: 'color 0.2s',
                          '&:hover': { color: '#f39c12' },
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Box>
                  </MuiLink>
                ) : (
                  <Link
                    key={idx}
                    href={item.path}
                    style={{ textDecoration: 'none' }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        color: pathname === item.path ? '#f39c12' : 'white',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': { transform: 'scale(1.1)' },
                      }}
                    >
                      <img src={item.img} alt={item.label} width="35" />
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: { md: '0.8rem', lg: '0.9rem' },
                          transition: 'color 0.2s',
                          '&:hover': { color: '#f39c12' },
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Box>
                  </Link>
                )
              )}

              {/* Fixed-width button container */}
              <Box sx={{ width: '130px', flexShrink: 0, mx: 1 }}>
                {authLoading ? (
                  <Button
                    disabled
                    variant="contained"
                    sx={{
                      ...baseButtonStyles,
                      width: '100%',
                      opacity: 0.5,
                    }}
                  >
                    Loading
                  </Button>
                ) : !user ? (
                  <Button
                    onClick={() => setPopup(true)}
                    variant="contained"
                    sx={{
                      ...baseButtonStyles,
                      width: '100%',
                      ...scalePulse,
                    }}
                  >
                    Login
                  </Button>
                ) : (
                  <Button
                    component={Link}
                    href="/dashboard"
                    variant="contained"
                    sx={{
                      ...baseButtonStyles,
                      width: '100%',
                      ...scalePulse,
                    }}
                  >
                    Dashboard
                  </Button>
                )}
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ '& .MuiDrawer-paper': { width: 280, boxSizing: 'border-box' } }}
      >
        {drawer}
      </Drawer>

      {popup && (
        <Card
          sx={{
            width: { xs: '85%', sm: '380px', md: '400px' },
            padding: 3,
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1300,
            maxHeight: '100vh',
            overflowY: 'auto',
            borderRadius: 3,
            boxShadow: 24,
          }}
        >
          <IconButton
            onClick={() => setPopup(false)}
            sx={{
              position: 'absolute',
              top: -6,
              right: 2,
              cursor: 'pointer',
              color: 'grey.600',
              '&:hover': { color: 'grey.900' },
            }}
          >
            <CloseIcon />
          </IconButton>
          <LoginForm onSuccess={() => setPopup(false)} />
        </Card>
      )}
    </Box>
  );
}