'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Stack, TextField, Button, Box, Alert, Link, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Mock OTP store (in memory)
let mockOtpStore = {};

// Helper to generate a random 6-digit OTP
const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

// Mock send OTP – logs to console and stores OTP
const sendOtpMock = async (identifier) => {
  const otp = generateOtp();
  mockOtpStore[identifier] = otp;
  console.log(`🔐 MOCK OTP for ${identifier}: ${otp}`);
  return { ok: true, message: 'OTP sent (mock)' };
};

// Mock verify OTP – accepts any OTP that matches the stored one, or the fixed demo code "123456"
const verifyOtpMock = async (identifier, otp) => {
  const storedOtp = mockOtpStore[identifier];
  if (otp === storedOtp || otp === '123456') {
    // Clear OTP after successful verification
    delete mockOtpStore[identifier];
    return { ok: true, token: 'mock-jwt-token-' + Date.now() };
  }
  return { ok: false, message: 'Invalid OTP' };
};

export default function LoginForm() {
  const router = useRouter();
  const [step, setStep] = useState('identifier'); // identifier or otp
  const [identifier, setIdentifier] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const [resendDisabled, setResendDisabled] = useState(false);

  // Cooldown timer for resend button
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setResendDisabled(false);
    }
  }, [resendTimer]);

  const startResendCooldown = () => {
    setResendDisabled(true);
    setResendTimer(30); // 30 seconds cooldown
  };

  const handleIdentifierSubmit = async () => {
    if (!identifier.trim()) {
      setError('Please enter email or mobile number');
      return;
    }
    setError('');
    setLoading(true);
    try {
      // Call mock send OTP
      const result = await sendOtpMock(identifier);
      if (!result.ok) throw new Error(result.message);
      // Move to OTP step
      setStep('otp');
      startResendCooldown();
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
      const result = await verifyOtpMock(identifier, otp);
      if (!result.ok) throw new Error(result.message);
      // Store mock token
      localStorage.setItem('token', result.token);
      localStorage.setItem('jwt', result.token);
      // Redirect to dashboard
      router.push('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (resendDisabled) return;
    setError('');
    setLoading(true);
    try {
      const result = await sendOtpMock(identifier);
      if (!result.ok) throw new Error(result.message);
      startResendCooldown();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBackToIdentifier = () => {
    setStep('identifier');
    setOtp('');
    setError('');
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
        {step === 'identifier' ? (
          <TextField
            fullWidth
            label="Mobile / Email"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
            disabled={loading}
          />
        ) : (
          <>
            <Box sx={{ textAlign: 'right' }}>
              <Link component="button" type="button" variant="body2" onClick={handleBackToIdentifier}>
                Back to email/mobile
              </Link>
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
              We've sent a 6-digit code to {identifier}
            </Typography>
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
          sx={{
            backgroundColor: '#f39c12',
            color: '#1976d2',
            fontWeight: 'bold',
            borderRadius: '10px',
          }}
        >
          {step === 'identifier' ? 'Continue' : 'Verify OTP'}
        </LoadingButton>

        {step === 'otp' && (
          <Button
            fullWidth
            variant="text"
            onClick={handleResendOtp}
            disabled={resendDisabled || loading}
          >
            {resendDisabled ? `Resend OTP (${resendTimer}s)` : 'Resend OTP'}
          </Button>
        )}
      </Stack>
    </form>
  );
}