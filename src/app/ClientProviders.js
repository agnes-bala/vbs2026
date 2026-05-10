'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { SettingsProvider } from '../contexts/SettingsContext';
import theme from '@/theme';

export default function ClientProviders({ children }) {
  return (
    <SettingsProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </SettingsProvider>
  );
}