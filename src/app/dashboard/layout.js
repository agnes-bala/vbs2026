// src/app/dashboard/layout.js
'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Box, CircularProgress } from '@mui/material';
import HeaderSection from './header';

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  // Check token and redirect if missing
  const checkAuth = () => {
    const token = localStorage.getItem('jwt') || localStorage.getItem('token');
    if (!token) {
      router.replace('/activity');
      return false;
    }
    return true;
  };

  // Run on mount and on every route change
  useEffect(() => {
    if (checkAuth()) {
      setLoading(false);
    }
  }, [pathname, router]);

  // Handle back/forward cache (pageshow event)
  useEffect(() => {
    const handlePageShow = (event) => {
      if (event.persisted) {
        // Page restored from bfcache – re‑check token
        const token = localStorage.getItem('jwt') || localStorage.getItem('token');
        if (!token) {
          router.replace('/activity');
        } else {
          setLoading(false);
        }
      }
    };
    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, [router]);

  // Handle popstate (back/forward navigation)
  useEffect(() => {
    const handlePopState = () => {
      const token = localStorage.getItem('jwt') || localStorage.getItem('token');
      if (!token) {
        router.replace('/activity');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [router]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
  <>
    <HeaderSection />
    <Box sx={{ pt: { xs: '70px', sm: '80px', md: '50px' } }}>{children}</Box>
  </>
);
}