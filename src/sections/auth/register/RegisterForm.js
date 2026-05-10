'use client';

import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from "axios";
import { useFormik, Form, FormikProvider } from 'formik';
import { Stack, TextField, FormControl, Box, Autocomplete } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { storeContactInfo } from '@/auth/AppAuthStorage';
import { registerPartnerMobile } from '@/services/JRMPartnerAuthService';

export default function RegisterForm() {
  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  const country = [...new Set(data.map((item) => item.country))];

  const handleCountry = (event, value) => {
    formik.setFieldValue('country', value);
  };

  const RegisterSchema = Yup.object().shape({
    emailAddress: Yup.string().email('Email must be a valid email address').required('Email is required').max(50),
    confirmemailAddress: Yup.string().oneOf([Yup.ref('emailAddress'), null], 'Email address must match').required('Confirm Email is required'),
    mobileNumber: Yup.number().when('country', {
      is: value => value === 'India',
      then: Yup.number().required('Mobile number is required').min(6001000000, 'Invalid number').max(9999000000, 'Invalid Number'),
      otherwise: Yup.number().nullable().test('Is positive?', 'Invalid Number', (value) => value > 0).min(1000, 'number is too short').max(999999999999999, 'number is too large')
    }),
    confirmmobileNumber: Yup.number()
      .required('Confirm mobile number is required')
      .oneOf([Yup.ref('mobileNumber'), null], 'Mobile number must match'),
    country: Yup.string().required('Country is required').nullable(),
  });

  const formik = useFormik({
    initialValues: {
      country: '',
      emailAddress: '',
      mobileNumber: '',
      confirmemailAddress: '',
      confirmmobileNumber: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: async (partnerDetails) => {
      const result = await registerPartnerMobile(partnerDetails);
      if (!result.ok) {
        console.log("Registration FAILED", result.data);
        toast.error(result.data.message);
        toast.info('You have already registered with this email id/mobile number. You can login with that password. If you forgot your password, you can reset it');
        return;
      }
      console.log("Registration successful - Verify OTP", result.data);
      toast.success("Verify OTP");

      const contactInfo = {
        emailAddress: partnerDetails.emailAddress,
        mobileNumber: partnerDetails.mobileNumber,
        country: partnerDetails.country
      };
      storeContactInfo(contactInfo);

      if (result.data.verifyMobileUrl) {
        router.push('/auth/verify-mobile');
      } else if (result.data.verifyEmailUrl) {
        router.push('/auth/verify-email');
      } else {
        toast.error(`Error sending OTP: ${result.data.message}`);
      }
    },
  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <FormControl sx={{ minWidth: '50%' }}>
            <Autocomplete
              required
              autoSelect
              autoComplete
              autoHighlight
              blurOnSelect
              onChange={(event, value) => handleCountry(event, value)}
              id="country"
              options={country}
              getOptionLabel={(option) => option}
              isOptionEqualToValue={(option, value) => option === value}
              noOptionsText="No Available Data"
              renderOption={(props, option) => (
                <Box component="li" {...props} key={option}>
                  {option}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Country"
                  {...getFieldProps('country')}
                  error={Boolean(touched.country && errors.country)}
                  helperText={touched.country && errors.country}
                />
              )}
            />
          </FormControl>

          <TextField
            fullWidth
            label="Email"
            {...getFieldProps('emailAddress')}
            error={Boolean(touched.emailAddress && errors.emailAddress)}
            helperText={touched.emailAddress && errors.emailAddress}
          />
          <TextField
            fullWidth
            label="Confirm Email"
            {...getFieldProps('confirmemailAddress')}
            error={Boolean(touched.confirmemailAddress && errors.confirmemailAddress)}
            helperText={touched.confirmemailAddress && errors.confirmemailAddress}
          />

          <TextField
            fullWidth
            label="Mobile"
            type="number"
            {...getFieldProps('mobileNumber')}
            error={Boolean(touched.mobileNumber && errors.mobileNumber)}
            helperText={touched.mobileNumber && errors.mobileNumber}
          />
          <TextField
            fullWidth
            label="Confirm Mobile"
            type="number"
            {...getFieldProps('confirmmobileNumber')}
            error={Boolean(touched.confirmmobileNumber && errors.confirmmobileNumber)}
            helperText={touched.confirmmobileNumber && errors.confirmmobileNumber}
          />

          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Register
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}