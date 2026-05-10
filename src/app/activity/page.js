'use client';

import { styled, useTheme } from '@mui/material/styles';
import { Card, Stack, Container, Typography, Box } from '@mui/material';
import LoginForm from '@/sections/auth/login/LoginForm';

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
  [theme.breakpoints.down('md')]: {
    display: 'none', // Hide on tablets and mobile
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(8, 2),
  },
}));

export default function ActivityPage() {
  const theme = useTheme();
  const mdUp = theme.breakpoints.up('md');

  return (
    <RootStyle>
      <HeaderStyle />

      {mdUp && (
        <SectionStyle>
          <Typography 
            variant="h3" 
            sx={{ 
              px: { xs: 3, md: 5 }, 
              mt: { xs: 2, md: 3 },
              ml: { xs: 2, md: 4 }, 
              mb: { xs: 4, md: 8 }, 
              fontFamily: '"Bite Chocolate", cursive, "Poppins", sans-serif',
              fontSize: { xs: '2rem', md: '3rem' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Hello Ablazer
          </Typography>
          <Box
            component="img"
            src="/assets/a1.png"
            alt="login illustration"
            sx={{
              maxWidth: '100%',
              height: 'auto',
              marginTop: { xs: '-20px', md: '-50px' },
              display: 'block',
              mx: 'auto',
            }}
            onError={(e) => {
              e.target.style.display = 'none'; // hide if image missing
              e.target.nextSibling?.style?.setProperty('display', 'block');
            }}
          />
          {/* Fallback text if image missing */}
          <Typography sx={{ display: 'none', textAlign: 'center', mt: 2, color: 'text.secondary' }}>
            (Illustration not found)
          </Typography>
        </SectionStyle>
      )}

      <Container maxWidth="sm">
        <ContentStyle>
          <Stack sx={{ mb: { xs: 3, md: 5 } }}>
            <Typography 
              variant="h4" 
              gutterBottom
              sx={{ 
                fontFamily: '"Bite Chocolate", cursive, "Poppins", sans-serif',
                fontSize: { xs: '1.8rem', sm: '2rem', md: '2.125rem' },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Sign in to VBS 2026
            </Typography>
            <Typography 
              sx={{ 
                color: 'text.secondary',
                fontFamily: 'Poppins, Aclonica, Lato, Roboto, sans-serif',
                fontSize: { xs: '0.9rem', sm: '1rem' },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Enter your details below.
            </Typography>
          </Stack>

          <LoginForm />
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}