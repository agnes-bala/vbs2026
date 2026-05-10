'use client';

import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from "axios";
import { useFormik, Form, FormikProvider } from 'formik';
import { Stack, TextField, Box, Autocomplete } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { storeContactInfo } from '@/auth/AppAuthStorage';
import { initiatePasswordReset } from '@/services/JRMPartnerAuthService';

// ----------------------------------------------------------------------

export default function ForgotPasswordForm() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [getState, setState] = useState([]);

  useEffect(() => {
    axios
      .get("https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const country = [...new Set(data.map((item) => item.country))];

  const handleCountry = (event, value) => {
    let states = data.filter((state) => state.country === value);
    formik.setFieldValue('country', value);
    states = [...new Set(states.map((item) => item.subcountry))];
    states.sort();
    setState(states);
    console.log(getState);
  };

  const RegisterSchema = Yup.object().shape({
    country: Yup.string().required('Country is required').nullable(),
    emailAddress: Yup.string().required('Email is required').max(50),
    mobileNumber: Yup.number().when('country', {
      is: value => value === 'India',
      then: Yup.number().required('Mobile number is required').min(6001000000, 'Invalid number').max(9999000000, 'Invalid Number'),
      otherwise: Yup.number().nullable().test('Is positive?', 'Invalid Number', (value) => value > 0)
        .min(1000, 'number is too short').max(999999999999999, 'number is too large').nullable()
    }),
  });

  const formik = useFormik({
    initialValues: {
      country: '',
      emailAddress: '',
      mobileNumber: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: async (data) => {
      console.log("InitiateResetPasswordScreen data=", data);
      const result = await initiatePasswordReset(data);
      if (!result.ok) {
        console.log("Password reset initiation FAILED", result.data);
        if (result.status !== null && (result.status === 400 || result.status === 409 || result.status === 500)) {
          toast.error(result.data.message);
        } else {
          return toast.error(`Unable to initiate password reset { ${result.data.message} }`);
        }
      } else {
        console.log("Password reset initiation successful", result.data);
        toast.success("SUCCESS");
        const contactInfo = {
          emailAddress: data.emailAddress,
          mobileNumber: data.mobileNumber,
          country: data.country
        };
        storeContactInfo(contactInfo);
        if (result.data.verifyMobileUrl !== null && result.data.verifyMobileUrl !== "") {
          router.push('/auth/verify-mobile');
        } else if (result.data.verifyEmailUrl !== null && result.data.verifyEmailUrl !== "") {
          router.push('/auth/verify-email');
        } else {
          toast.error(`Error sending OTP ${result.data.message}`);
        }
      }
    },
  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Autocomplete
            required
            autoSelect
            autoComplete
            autoHighlight
            blurOnSelect
            onChange={(event, value) => handleCountry(event, value)}
            id="country"
            getOptionLabel={(country) => `${country}`}
            options={country}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            noOptionsText={"No Available Data"}
            renderOption={(props, country) => (
              <Box component="li" {...props} key={country} value={country}>
                {country}
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

          <TextField
            fullWidth
            autoComplete="userEmail"
            type="email"
            label="Email"
            {...getFieldProps('emailAddress')}
            error={Boolean(touched.emailAddress && errors.emailAddress)}
            helperText={touched.emailAddress && errors.emailAddress}
          />

          <TextField
            fullWidth
            label="Mobile number"
            type="number"
            {...getFieldProps('mobileNumber')}
            error={Boolean(touched.mobileNumber && errors.mobileNumber)}
            helperText={touched.mobileNumber && errors.mobileNumber}
          />

          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Send request
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}