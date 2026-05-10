'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Stack, TextField, Button, Alert, Box, Link } from '@mui/material';
import { LoadingButton } from '@mui/lab';

export default function LoginForm() {
  const router = useRouter();
  const [step, setStep] = useState('identifier');
  const [identifier, setIdentifier] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleIdentifierSubmit = async () => {
    const trimmed = identifier.trim();
    if (!trimmed) {
      setError('Please enter your email');
      return;
    }
    if (!emailRegex.test(trimmed)) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    setLoading(true);
    try {
      // Optional: check identifier (your route already does validation)
      const checkRes = await fetch('/api/auth/check-identifier', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier: trimmed }),
      });
      if (!checkRes.ok) {
        const data = await checkRes.json();
        throw new Error(data.message || 'Invalid identifier');
      }
      // Send OTP
      const otpRes = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier: trimmed }),
      });
      if (!otpRes.ok) throw new Error('Failed to send OTP');
      setStep('otp');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async () => {
    if (otp.length !== 6) {
      setError('OTP must be 6 digits');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, otp }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Invalid OTP');
      localStorage.setItem('token', data.token);
      localStorage.setItem('jwt', data.token);
      router.push('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (step === 'identifier') handleIdentifierSubmit();
        else handleOtpSubmit();
      }}
    >
      <Stack spacing={3}>
        {step === 'identifier' && (
          <TextField
            fullWidth
            label="Email"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
            disabled={loading}
          />
        )}
        {step === 'otp' && (
          <>
            <Box sx={{ textAlign: 'right' }}>
              <Link component="button" type="button" variant="body2" onClick={() => setStep('identifier')}>
                Back to Email
              </Link>
            </Box>
            <TextField
              fullWidth
              label="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value.slice(0, 6))}
              inputProps={{ maxLength: 6 }}
              required
              disabled={loading}
            />
          </>
        )}
        {error && <Alert severity="error">{error}</Alert>}
        <LoadingButton
          fullWidth
          type="submit"
          variant="contained"
          loading={loading}
          sx={{ backgroundColor: '#f39c12', color: '#1976d2', fontWeight: 'bold', borderRadius: '10px' }}
        >
          {step === 'identifier' ? 'Continue' : 'Verify OTP'}
        </LoadingButton>
      </Stack>
    </form>
  );
}