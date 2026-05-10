'use client';

import * as Yup from "yup";
import { useState, useEffect } from "react";
import axios from "axios";
import { useFormik, Form, FormikProvider } from "formik";
import {
  Stack,
  Grid,
  TextField,
  FormControl,
  Box,
  Autocomplete,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import "react-toastify/dist/ReactToastify.css";
import config from "@/partnerconfig.json";

export default function BasicInfoForm() {
  const [data, setData] = useState([]);
  const [getCounty, setCounty] = useState([]);
  const [getState, setState] = useState([]);
  const [basicdata, setBasicdata] = useState([]);

  useEffect(() => {
    fetch(`${config.jrmClientUrl}jrms/v1/feed/home`)
      .then((res) => res.json())
      .then((data) => setBasicdata(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    axios
      .get("https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  const country = [...new Set(data.map((item) => item.country))].sort();

  const handleCountry = (event, value) => {
    let states = data.filter((state) => state.country === value);
    formik.setFieldValue("country", value);
    states = [...new Set(states.map((item) => item.subcountry))];
    states.sort();
    setState(states);
  };

  const RegisterSchema = Yup.object().shape({
    country: Yup.string().required("Country is required").nullable(),
    emailAddress: Yup.string()
      .email("Invalid Email address")
      .required("Email is required")
      .max(50),
    confirmemailAddress: Yup.string()
      .oneOf([Yup.ref("emailAddress"), null], "Email address must match")
      .required("Confirm Email is required"),
    mobileNumber: Yup.number().when("country", {
      is: (value) => value === "India",
      then: Yup.number()
        .required("Mobile number is required")
        .min(6001000000, "Invalid number")
        .max(9999000000, "Invalid Number"),
      otherwise: Yup.number()
        .nullable()
        .test("Is positive?", "Invalid Number", (value) => value > 0)
        .min(1000, "number is too short")
        .max(999999999999999, "number is too large"),
    }),
    confirmmobileNumber: Yup.number()
      .required("Confirm mobile number is required")
      .oneOf([Yup.ref("mobileNumber"), null], "Mobile number must match"),
  });

  const formik = useFormik({
    initialValues: {
      country: "",
      emailAddress: "",
      mobileNumber: "",
      confirmemailAddress: "",
      confirmmobileNumber: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      // Replace with actual API call
      console.log("Form submitted", values);
      alert(JSON.stringify(values, null, 2));
      // Example: await registerPartnerMobile(values);
      // toast.success("Registration successful");
      // router.push("/auth/verify");
    },
  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps, setFieldValue } = formik;

  return (
    <FormikProvider value={formik}>
      <Form noValidate onSubmit={handleSubmit}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <FormControl sx={{ minWidth: "50%" }}>
                <Autocomplete
                  onChange={(event, value) => handleCountry(event, value)}
                  id="country"
                  getOptionLabel={(option) => option}
                  options={country}
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
                      {...getFieldProps("country")}
                      error={Boolean(touched.country && errors.country)}
                      helperText={touched.country && errors.country}
                    />
                  )}
                />
              </FormControl>
              <TextField
                fullWidth
                type="email"
                label="Email"
                {...getFieldProps("emailAddress")}
                error={Boolean(touched.emailAddress && errors.emailAddress)}
                helperText={touched.emailAddress && errors.emailAddress}
              />
              <TextField
                fullWidth
                type="email"
                label="Confirm Email"
                {...getFieldProps("confirmemailAddress")}
                error={Boolean(touched.confirmemailAddress && errors.confirmemailAddress)}
                helperText={touched.confirmemailAddress && errors.confirmemailAddress}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <TextField
                fullWidth
                label="Mobile"
                type="number"
                {...getFieldProps("mobileNumber")}
                error={Boolean(touched.mobileNumber && errors.mobileNumber)}
                helperText={touched.mobileNumber && errors.mobileNumber}
              />
              <TextField
                fullWidth
                label="Confirm Mobile"
                type="number"
                {...getFieldProps("confirmmobileNumber")}
                error={Boolean(touched.confirmmobileNumber && errors.confirmmobileNumber)}
                helperText={touched.confirmmobileNumber && errors.confirmmobileNumber}
              />
            </Stack>
          </Grid>
        </Grid>

        <Stack alignItems="flex-end" sx={{ mt: 3 }}>
          <LoadingButton size="large" type="submit" variant="contained" loading={isSubmitting}>
            Save Changes
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}