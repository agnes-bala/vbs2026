'use client';

import { useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
// hooks
import useSettings from '@/hooks/useSettings';
import useCollapseDrawer from '@/hooks/useCollapseDrawer';
// config
import { NAVBAR } from '@/config';
//
import DashboardHeader from './header';
import NavbarVertical from './navbar/NavbarVertical';

// ----------------------------------------------------------------------

const MainStyle = styled('main', {
  shouldForwardProp: (prop) => prop !== 'collapseClick',
})(({ collapseClick, theme }) => ({
  flexGrow: 1,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 16,
    paddingRight: 16,
    width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH}px)`,
    transition: theme.transitions.create('margin-left', {
      duration: theme.transitions.duration.shorter,
    }),
    ...(collapseClick && {
      marginLeft: NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
    }),
  },
}));

// ----------------------------------------------------------------------

export default function DashboardLayout({ children }) {
  const { collapseClick, isCollapse } = useCollapseDrawer();
  const { themeLayout } = useSettings();
  const [open, setOpen] = useState(false);
  const verticalLayout = themeLayout === 'horizontal';

  if (verticalLayout) {
    return (
      <>
        <DashboardHeader onOpenSidebar={() => setOpen(true)} verticalLayout={verticalLayout} />
        <Box component="main">
          {children}
        </Box>
      </>
    );
  }

  return (
    <Box
      sx={{
        display: { lg: 'flex' },
        minHeight: { lg: 1 },
      }}
    >
      <DashboardHeader isCollapse={isCollapse} onOpenSidebar={() => setOpen(true)} />
      <NavbarVertical isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
      <MainStyle collapseClick={collapseClick}>
        {children}
      </MainStyle>
    </Box>
  );
}