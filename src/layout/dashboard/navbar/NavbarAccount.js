'use client';

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import MyAvatar from '@/components/MyAvatar';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.primary.main,
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter,
  }),
}));

// ----------------------------------------------------------------------

NavbarAccount.propTypes = {
  isCollapse: PropTypes.bool,
};

export default function NavbarAccount({ isCollapse }) {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const email = localStorage.getItem('emailAddress') || '';
    setUserEmail(email);
  }, []);

  const userName = userEmail ? userEmail.replace(/@.*/, '') : 'Guest';

  return (
    <Link href="/dashboard/user/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
      <RootStyle
        sx={{
          ...(isCollapse && {
            bgcolor: 'transparent',
          }),
        }}
      >
        <MyAvatar />

        <Box
          sx={{
            ml: 2,
            transition: (theme) =>
              theme.transitions.create('width', {
                duration: theme.transitions.duration.shorter,
              }),
            ...(isCollapse && {
              ml: 0,
              width: 0,
            }),
          }}
        >
          <Typography variant="subtitle2" color="white">
            {userName}
          </Typography>
        </Box>
      </RootStyle>
    </Link>
  );
}