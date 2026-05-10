'use client';

import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useFormik, Form, FormikProvider, FieldArray, getIn } from 'formik';
import axios from "axios";
import { toast } from 'react-toastify';
import {
  Grid, Stack, TextField, Button, Divider, FormControl, FormLabel, FormHelperText,
  RadioGroup, FormControlLabel, Radio, MenuItem, Box, Paper, Typography
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { MobileDatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from "moment";
import { getAuthInfo } from '@/auth/AppAuthStorage';
import { updatePartnerChildrenInfo } from '@/services/JRMPartnerAuthService';
import config from "@/partnerconfig.json";

const genderList = [
  { _id: "1", name: "Male" },
  { _id: "2", name: "Female" }
];

const url = config.jrmClientUrl;

export default function ChildForm() {
  const router = useRouter();
  const [childCount, setCount] = useState(0);
  const [childdata, setChilddata] = useState({});

  // Client‑only localStorage access
  const [pId, setPId] = useState(null);
  const [token, setToken] = useState(null);
  const [authConfig, setAuthConfig] = useState({});

  useEffect(() => {
    const partnerId = localStorage.getItem("partnerId");
    const jwt = localStorage.getItem("jwt");
    setPId(partnerId);
    setToken(jwt);
    setAuthConfig({ Authorization: `Bearer ${jwt}` });
  }, []);

  useEffect(() => {
    if (!pId || !token) return;
    axios
      .get(`${url}jrms/v1/partners/${pId}/childreninfo`, { headers: authConfig })
      .then((response) => {
        formik.setFieldValue('children', response.data.children);
        formik.setFieldValue('relationship', response.data.relationship);
      })
      .catch((err) => console.log(err));
  }, [pId, token]);

  const ValidationSchema = Yup.object().shape({
    relationship: Yup.string().required("Please select your relationship with a child"),
    children: Yup.array().of(
      Yup.object().shape({
        childId: Yup.string(),
        fullName: Yup.string()
          .min(3, 'Too Short!')
          .max(28, 'Too Long!')
          .required("child name is required")
          .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
        dateOfBirth: Yup.string().nullable()
          .test("dateOfBirth", "You must be 15 years or younger", value => moment().diff(moment(value, "YYYY-MM-DD"), "years") < 15)
          .test("dateOfBirth", "child age must be 5 months or more", value => moment().diff(moment(value, "YYYY-MM-DD"), "months") > 5)
          .required("DOB is required"),
        gender: Yup.string().required('gender is required')
      })
    ),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      relationship: childdata.relationship || 0,
      children: [{ childId: "", fullName: '', dateOfBirth: "", gender: "" }]
    },
    validationSchema: ValidationSchema,
    onSubmit: async (childrenInfo) => {
      const authInfo = await getAuthInfo();
      const result = await updatePartnerChildrenInfo(authInfo.profileUrl, authInfo.jwt, childrenInfo);
      if (!result.ok) {
        toast.error("Could not update ChildrenInfo");
        return;
      }
      toast.success("Children information updated successfully");
      router.push('/dashboard'); // redirect to main dashboard
    },
  });

  const { errors, values, touched, isSubmitting, handleSubmit, handleChange, handleBlur, setFieldValue, getFieldProps } = formik;

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Box sx={{ p: 4, maxWidth: 1000, mx: 'auto' }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>Manage Children</Typography>
          <FormikProvider value={formik}>
            <Form noValidate onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <FormLabel>Relationshipppp to a Child/Children</FormLabel>
                    <RadioGroup
                      row
                      name="relationship"
                      value={formik.values.relationship}
                      onChange={(e) => formik.setFieldValue("relationship", e.target.value)}
                      {...getFieldProps('relationship')}
                    >
                      <FormControlLabel value="1" control={<Radio />} label="Parent" />
                      <FormControlLabel value="2" control={<Radio />} label="Guardian" />
                    </RadioGroup>
                    <FormHelperText error>{touched.relationship && errors.relationship}</FormHelperText>
                  </FormControl>
                </Grid>

                {formik.values.relationship !== 0 && (
                  <Grid item xs={12}>
                    <FieldArray name="children">
                      {({ push, remove }) => (
                        <div>
                          {values.children.map((p, index) => {
                            const idx = index + 1;
                            setCount(idx);
                            const fullName = `children[${index}].fullName`;
                            const touchedName = getIn(touched, fullName);
                            const errorName = getIn(errors, fullName);
                            const dateOfBirth = `children[${index}].dateOfBirth`;
                            const touchedDOB = getIn(touched, dateOfBirth);
                            const errorDOB = getIn(errors, dateOfBirth);
                            const gender = `children[${index}].gender`;
                            const touchedGender = getIn(touched, gender);
                            const errorGender = getIn(errors, gender);

                            return (
                              <div key={index}>
                                {index > 0 && <Divider sx={{ my: 3 }} />}
                                <Typography variant="h6" sx={{ mb: 2 }}>Child {idx} Details</Typography>
                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="flex-start">
                                  <TextField
                                    fullWidth
                                    label="Child name"
                                    name={fullName}
                                    value={p.fullName.toUpperCase()}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={Boolean(touchedName && errorName)}
                                    helperText={touchedName && errorName ? errorName : ""}
                                    required
                                  />
                                  <MobileDatePicker
                                    label="Child Date of Birth"
                                    value={p.dateOfBirth}
                                    onChange={(value) => setFieldValue(dateOfBirth, moment(value).format('YYYY/MM/DD'))}
                                    slotProps={{
                                      textField: {
                                        error: Boolean(touchedDOB && errorDOB),
                                        helperText: touchedDOB && errorDOB ? errorDOB : "",
                                        required: true,
                                        sx: { minWidth: 180 }
                                      }
                                    }}
                                    disableFuture
                                    maxDate={new Date('2025-04-30')}
                                  />
                                  <TextField
                                    select
                                    label="Gender"
                                    name={gender}
                                    value={p.gender}
                                    onChange={(e) => setFieldValue(gender, e.target.value)}
                                    onBlur={handleBlur}
                                    error={Boolean(touchedGender && errorGender)}
                                    helperText={touchedGender && errorGender ? errorGender : ""}
                                    sx={{ minWidth: 140 }}
                                    required
                                  >
                                    {genderList.map(option => (
                                      <MenuItem key={option._id} value={option._id}>{option.name}</MenuItem>
                                    ))}
                                  </TextField>
                                  <Button color="secondary" variant="outlined" onClick={() => remove(index)} sx={{ mt: { xs: 1, sm: 0 } }}>
                                    Remove
                                  </Button>
                                </Stack>
                              </div>
                            );
                          })}
                          {childCount < 10 && (
                            <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                              <Button variant="contained" onClick={() => push({ fullName: "", dateOfBirth: "", gender: "" })}>
                                Add Child +
                              </Button>
                            </Stack>
                          )}
                        </div>
                      )}
                    </FieldArray>
                    <Typography sx={{ mt: 2 }}>Total Child Count: {childCount}</Typography>
                  </Grid>
                )}

                <Grid item xs={12}>
                  <Stack direction="row" justifyContent="flex-end" spacing={2}>
                    <Button variant="outlined" onClick={() => router.push('/dashboard')}>Cancel</Button>
                    <LoadingButton
                      type="submit"
                      variant="contained"
                      loading={isSubmitting}
                      disabled={childCount === 0 && formik.values.relationship === 0}
                    >
                      Save Changes
                    </LoadingButton>
                  </Stack>
                </Grid>
              </Grid>
            </Form>
          </FormikProvider>
        </Paper>
      </Box>
    </LocalizationProvider>
  );
}