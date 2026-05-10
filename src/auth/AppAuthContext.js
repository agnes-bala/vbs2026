'use client';
import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { getAuthInfo, removeAuthInfo, isValidToken } from './AppAuthStorage';

export const AppAuthContext = createContext();

export const useAuth = () => useContext(AppAuthContext);

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkUserSession = useCallback(async () => {
    try {
      const authInfo = await getAuthInfo();
      if (authInfo && isValidToken(authInfo.jwt)) {
        setUser(authInfo);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error(error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { checkUserSession(); }, [checkUserSession]);

  const signOut = async () => {
    await removeAuthInfo();
    setUser(null);
    router.push('/');
  };

  const value = useMemo(() => ({ user, setUser, loading, isAuthenticated: !!user, signOut, checkUserSession }), [user, loading, checkUserSession]);

  return <AppAuthContext.Provider value={value}>{children}</AppAuthContext.Provider>;
};