// src/app/ConditionalNavbar.js
'use client';
import { usePathname } from 'next/navigation';
import Header from './components/Header'; // your public navbar component

export default function ConditionalNavbar() {
  const pathname = usePathname();
  // Hide navbar on any route that starts with /dashboard
  if (pathname?.startsWith('/dashboard')) {
    return null;
  }
  return <Header />;
}