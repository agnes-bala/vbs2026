'use client';

import { SettingsProvider } from '../contexts/SettingsContext';

export default function ClientSettingsProvider({ children }) {
  return <SettingsProvider>{children}</SettingsProvider>;
}