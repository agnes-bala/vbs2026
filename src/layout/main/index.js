'use client';

// @mui
import { Box, Stack } from '@mui/material';

// ----------------------------------------------------------------------

export default function MainLayout({ children }) {
  return (
    <Stack sx={{ minHeight: 1 }}>
      {/* <MainHeader /> – uncomment and import when ready */}
      {children}
      <Box sx={{ flexGrow: 1 }} />
      {/* <MainFooter /> – uncomment and import when ready */}
    </Stack>
  );
}