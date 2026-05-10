"use client";

import * as Yup from "yup";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useFormik, Form, FormikProvider, FieldArray } from "formik";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Grid,
  Stack,
  TextField,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  RadioGroup,
  FormControlLabel,
  Radio,
  MenuItem,
  Box,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import moment from "moment";
import { Poppins, Aclonica, Lato, Roboto } from "next/font/google";
import { getAuthInfo } from "../../../auth/AppAuthStorage";
import { updatePartnerChildrenInfo } from "../../../services/JRMPartnerAuthService";
import config from "../../../partnerconfig.json";

// Configure fonts – Poppins as primary
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const aclonica = Aclonica({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Combined font stack
const fontStack = `${poppins.style.fontFamily}, ${aclonica.style.fontFamily}, ${lato.style.fontFamily}, ${roboto.style.fontFamily}, sans-serif`;

const genderList = [
  { _id: "1", name: "Male" },
  { _id: "2", name: "Female" },
];

const url = config.jrmClientUrl;

export default function ChildForm() {
  const router = useRouter();
  const pId = localStorage.getItem("partnerId");
  const token = localStorage.getItem("jwt");
  const [childdata, setChilddata] = useState({});
  const authHeader = { Authorization: `Bearer ${token}` };

  useEffect(() => {
    axios
      .get(`${url}jrms/v1/partners/${pId}/childreninfo`, {
        headers: authHeader,
      })
      .then((response) => {
        formik.setFieldValue("children", response.data.children);
        formik.setFieldValue("relationship", response.data.relationship);
      })
      .catch((err) => console.log(err));
  }, []);

  const ValidationSchema = Yup.object().shape({
    relationship: Yup.string().required(
      "Please select your relationship with a child",
    ),
    children: Yup.array().of(
      Yup.object().shape({
        childId: Yup.string(),
        fullName: Yup.string()
          .min(3, "Too Short!")
          .max(28, "Too Long!")
          .required("child name is required")
          .matches(
            /^[aA-zZ\s]+$/,
            "Only alphabets are allowed for this field ",
          ),
        dateOfBirth: Yup.string()
          .nullable()
          .test(
            "dateOfBirth",
            "You must be 15 years or younger",
            (value) => moment().diff(moment(value, "YYYY-MM-DD"), "years") < 15,
          )
          .test(
            "dateOfBirth",
            "child age must be 5 months or more",
            (value) => moment().diff(moment(value, "YYYY-MM-DD"), "months") > 5,
          )
          .required("DOB is required"),
        gender: Yup.string().required("gender is required"),
      }),
    ),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      relationship: childdata.relationship || "",
      children: [{ childId: "", fullName: "", dateOfBirth: "", gender: "" }],
    },
    validationSchema: ValidationSchema,
    onSubmit: async (childrenInfo) => {
      const authInfo = await getAuthInfo();
      const result = await updatePartnerChildrenInfo(
        authInfo.profileUrl,
        authInfo.jwt,
        childrenInfo,
      );
      if (!result.ok) {
        return toast.error("Could not update ChildrenInfo", result.data);
      }
      toast.success("Children information updated successfully");
      router.push("/dashboard");
    },
  });

  const {
    errors,
    values,
    touched,
    isSubmitting,
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
  } = formik;

  return (
    <FormikProvider value={formik}>
      <Form noValidate onSubmit={handleSubmit}>
        <Box
          className={poppins.className}
          sx={{
            width: "75%",
            ml: "-1%",
            p: 2,
            fontFamily: fontStack,
            "& *": {
              fontFamily: `${fontStack} !important`,
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "black",
            }}
          >
            <ChildCareIcon sx={{ color: "black" }} />
            Child/Children
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <Box
                  sx={{
                    width: "0%",
                    height: "3px",
                    // backgroundColor: 'orange',
                    mt: "5px",
                    mb: "10px",
                    animation: "expandWidth 0.5s ease forwards",
                    // '@keyframes expandWidth': {
                    //   from: { width: '0%' },
                    //   to: { width: '60%' },
                    // },
                  }}
                />

                {/* 
                 <Divider sx={{ color: 'grey' }}>
                        <span style={{ color: 'black' }}>kindly Update your Spouse Info!</span>
                      
                      </Divider> */}
                <FormLabel>Relationship to a Child/Children</FormLabel>
                <RadioGroup
                  row
                  name="relationship"
                  value={values.relationship}
                  onChange={(e) =>
                    setFieldValue("relationship", e.target.value)
                  }
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="Parent"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="Guardian"
                  />
                </RadioGroup>
                <FormHelperText error>
                  {touched.relationship && errors.relationship}
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>

          {values.relationship !== "" && (
            <FieldArray name="children">
              {({ push, remove }) => (
                <div>
                  {values.children.map((p, index) => {
                    const idx = index + 1;
                    return (
                      <div key={index}>
                        {index > 0 && <Box sx={{ my: 3 }} />}
                        <Typography
                          variant="subtitle1"
                          sx={{ mb: 2, fontWeight: 500 }}
                        >
                          Child {idx} Details
                        </Typography>
                        <Stack
                          direction={{ xs: "column", sm: "row" }}
                          spacing={2}
                          sx={{ alignItems: "flex-start" }}
                        >
                          <TextField
                            fullWidth
                            label="Child name"
                            name={`children[${index}].fullName`}
                            value={p.fullName.toUpperCase()}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                          />
                          <TextField
                            fullWidth
                            label="Child Date of Birth"
                            name={`children[${index}].dateOfBirth`}
                            value={p.dateOfBirth}
                            onChange={(e) => {
                              const filteredValue = e.target.value.replace(
                                /[a-zA-Z]/g,
                                "",
                              );
                              setFieldValue(
                                `children[${index}].dateOfBirth`,
                                filteredValue,
                              );
                            }}
                            onBlur={handleBlur}
                            required
                          />
                          <TextField
                            select
                            label="Gender"
                            value={p.gender}
                            onChange={(e) =>
                              setFieldValue(
                                `children[${index}].gender`,
                                e.target.value,
                              )
                            }
                            sx={{ minWidth: 200 }}
                            required
                          >
                            {genderList.map((option) => (
                              <MenuItem key={option._id} value={option._id}>
                                {option.name}
                              </MenuItem>
                            ))}
                          </TextField>
                          <Button
                            variant="outlined"
                            onClick={() => remove(index)}
                            sx={{
                              borderColor: "#2563eb",
                              color: "#2563eb", // ✅ fixed typo (removed stray quote)
                              height: "32px",
                              minHeight: "32px",
                              minWidth: "110px",
                              px: 2.5,
                              textTransform: "none",
                              whiteSpace: "nowrap",
                              fontWeight: "bold",
                              "&:hover": {
                                borderColor: "#1d4ed8",
                                backgroundColor: "rgba(37, 99, 235, 0.04)",
                              },
                            }}
                          >
                            - Remove {index + 1}
                          </Button>
                        </Stack>
                      </div>
                    );
                  })}
                  {values.children.length < 10 && (
                    <Stack sx={{ mt: 3, alignItems: "flex-end" }}>
                      <Button
                        variant="contained"
                        onClick={() =>
                          push({ fullName: "", dateOfBirth: "", gender: "" })
                        }
                      >
                        Add Child +
                      </Button>
                    </Stack>
                  )}
                </div>
              )}
            </FieldArray>
          )}

          <Typography sx={{ mt: 2 }}>
            Total Child Count: {values.children.length}
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ alignItems: "flex-start" }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                mt: 3,
              }}
            >
              <LoadingButton
                type="submit"
                variant="contained"
                loading={isSubmitting}
              >
                Save Changes
              </LoadingButton>
            </Box>
          </Stack>
        </Box>
      </Form>
    </FormikProvider>
  );
}
