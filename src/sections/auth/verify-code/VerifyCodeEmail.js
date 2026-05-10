'use client';

import * as Yup from 'yup';
import { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useFormik, Form, FormikProvider } from 'formik';
import { Stack, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import axios from 'axios';
import useTimer from '@/components/useTimer';
import { verifyEmailOTP, resendEmailOTP } from '@/services/JRMPartnerAuthService';
import { AppAuthContext } from '@/auth/AppAuthContext';
import { storeAuthInfo } from '@/auth/AppAuthStorage';
import { PATH_AFTER_LOGIN } from '@/config';

export default function VerifyCodeEmail() {
  const router = useRouter();
  const [firsttrigger, setFirsttrigger] = useState(true);
  const authContext = useContext(AppAuthContext);
  const [resendTime, setResendTime] = useTimer({ multiplier: 1 });
  const storedLocation = typeof window !== 'undefined' ? localStorage.getItem('storedLocation') : null;
  const emailVerify = typeof window !== 'undefined' ? localStorage.getItem('emailAddress') : '';

  const handleResend = async () => {
    setResendTime(60);
    const request = { emailAddress: emailVerify, mobileNumber: '', country: '' };
    const result = await resendEmailOTP(request);
    if (!result.ok) {
      toast.error("Incorrect OTP provided!");
      return;
    }
    toast.success("OTP resend was successful");
  };

  const handleVerify = () => {
    setFirsttrigger(true);
    setResendTime(60);
  };

  const VerifyCodeSchema = Yup.object().shape({
    emailOTP: Yup.number().typeError('Invalid Character').min(100000, 'check entered OTP').max(999999, 'check entered OTP').required('Code is required'),
    emailAddress: Yup.string().email('Email must be a valid email address').required('Email is required'),
  });

  const formik = useFormik({
    initialValues: {
      emailOTP: '',
      emailAddress: emailVerify || '',
    },
    validationSchema: VerifyCodeSchema,
    onSubmit: async (data) => {
      const request = { emailAddress: data.emailAddress, otp: data.emailOTP };
      const result = await verifyEmailOTP(request);
      if (!result.ok) {
        toast.error("Incorrect OTP provided!");
        handleVerify();
        return;
      }
      toast.success("OTP Verification successful");
      authContext.setUser(result.data);
      storeAuthInfo(result.data);
      const config = { Authorization: `Bearer ${result.data.jwt}` };
      const [contactRes, childrenRes, familyRes] = await Promise.all([
        axios.get(`${result.data.profileUrl}/contactinfo`, { headers: config }),
        axios.get(`${result.data.profileUrl}/childreninfo`, { headers: config }),
        axios.get(`${result.data.profileUrl}/familymemberinfo`, { headers: config })
      ]);
      const profileCompleted = contactRes.data.fullName ? 1 : 0;
      localStorage.setItem('profileStatus', profileCompleted);
      const members = { main: contactRes.data, family: familyRes.data, kids: childrenRes.data };
      localStorage.setItem('members', JSON.stringify(members));
      if (storedLocation) {
        router.push(storedLocation);
      } else {
        router.push(PATH_AFTER_LOGIN);
      }
    },
  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <>
      <Typography variant="h3" paragraph>
        Please check your email!
      </Typography>
      <Typography sx={{ color: 'text.secondary' }}>
        We have emailed a 6-digit confirmation code to your email,<br /> please enter the code in below box to verify your email.
      </Typography>
      <br />
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              fullWidth
              label="Email"
              disabled={!!emailVerify}
              {...getFieldProps('emailAddress')}
              error={Boolean(touched.emailAddress && errors.emailAddress)}
              helperText={touched.emailAddress && errors.emailAddress}
            />
            <TextField
              fullWidth
              label="OTP"
              type="number"
              inputProps={{ minLength: 6, maxLength: 6 }}
              {...getFieldProps('emailOTP')}
              error={Boolean(touched.emailOTP && errors.emailOTP)}
              helperText={touched.emailOTP && errors.emailOTP}
            />
          </Stack>
          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting} sx={{ mt: 3 }}>
            Verify OTP
          </LoadingButton>
          {firsttrigger && (
            <div>
              <LoadingButton
                fullWidth
                size="medium"
                disabled={resendTime !== 0}
                onClick={handleResend}
                variant="outlined"
                loading={isSubmitting}
                sx={{ mt: 3 }}
              >
                Resend OTP
              </LoadingButton>
              {resendTime !== 0 && <span> in {resendTime} seconds</span>}
            </div>
          )}
        </Form>
      </FormikProvider>
    </>
  );
}