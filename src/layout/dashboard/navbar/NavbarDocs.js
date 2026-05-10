'use client';

import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
// @mui
import { Button, Divider, Stack, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// hooks
import { AppAuthContext } from '@/auth/AppAuthContext';
import { getAuthInfo, removeAuthInfo } from '@/auth/AppAuthStorage';
import useLocales from '@/hooks/useLocales';
import { logoutPartner } from '@/services/JRMPartnerAuthService';
// components
import Iconify from '@/components/Iconify';

// ----------------------------------------------------------------------

export default function NavbarDocs() {
  const router = useRouter();
  const { user, setUser } = useContext(AppAuthContext);
  const [userEmail, setUserEmail] = useState('');
  const { translate } = useLocales();
  const [open1, setOpen1] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem('emailAddress') || '';
    setUserEmail(email);
  }, []);

  const username = userEmail ? userEmail.replace(/@.*/, '') : 'Guest';

  const handleClickOpen = () => setOpen1(true);
  const handleClickClose = () => setOpen1(false);

  const handleLogout = async () => {
    try {
      setUser(null);
      const authInfo = await getAuthInfo();
      console.log("authInfo", authInfo);
      const result = await logoutPartner(authInfo);
      console.log("logout result", result);

      if (!result) {
        console.log("Logout FAILED", result?.data);
        return alert(`Unable to logout ${result?.data?.message}`);
      }
      console.log("Logout successful", result);
      toast.info("Logout successful");
      await removeAuthInfo();
      localStorage.clear();
      router.push('/');
    } catch (error) {
      console.error(error);
      toast.error('Unable to logout!', { variant: 'error' });
    }
  };

  return (
    <Stack spacing={3} sx={{ px: 5, pb: 5, mt: 10, width: 1, textAlign: 'center', display: 'block' }}>
      <div>
        <Typography variant="body2" sx={{ color: 'text.secondary', whiteSpace: 'pre-line' }}>
          {translate('Need any help ?')}
        </Typography>
      </div>

      <Button rel="noopener" href="tel:+914639353333" variant="contained">
        +91 4639 353333
      </Button>
      <Button rel="noopener" href="tel:+919488375315" variant="contained">
        +91 94883 75315
      </Button>
      <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
        Working Hours: <br />09:30 AM to 05:30 PM
      </Typography>
      <Divider />
      <Button onClick={handleClickOpen} variant="outlined" endIcon={<Iconify icon="clarity:logout-solid" />}>
        Logout
      </Button>
      <Dialog open={open1} onClose={handleClickClose}>
        <DialogTitle>Confirm</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure to logout ?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogout}>Logout</Button>
          <Button onClick={handleClickClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}