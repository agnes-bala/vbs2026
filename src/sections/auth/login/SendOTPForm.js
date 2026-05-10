'use client';

import * as Yup from "yup";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useFormik, Form, FormikProvider } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Stack, Button, Box, Typography } from "@mui/material";
import MuiTextField from "@/components/formfield/TextField";
import { config } from "@/partnerconfig";

export default function SendOTPForm() {
  const router = useRouter();
  const [isInd, setInd] = useState("IN");
  const [auth, setAuth] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://api.country.is");
      let mode = null;
      try {
        mode = JSON.parse(localStorage.getItem("authInfo"));
      } catch(e) {}
      if (mode) {
        setEmail(mode.emailAddress);
        setMobile(mode.mobileNumber);
        setAuth(mode.authName);
      }
      setInd(response.data.country);
    }
    fetchData();
  }, []);

  const LoginSchema = Yup.object().shape({
    authName: Yup.mixed().test(
      "authName",
      "Must be a number or a valid email address",
      function (value) {
        if (value === undefined || value === null) return false;
        if (!isNaN(value)) return true;
        if (typeof value === "string") {
          return Yup.string().email().isValidSync(value);
        }
        return false;
      }
    ),
  });

  const formik = useFormik({
    initialValues: {
      authName: auth || "",
      emailAddress: email || "",
      mobileNumber: mobile || "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      if (values.mobileNumber !== "" && isInd !== "IN") {
        return toast.error("Please enter registered email address to get OTP");
      }
      localStorage.setItem("authInfo", JSON.stringify(values));
      try {
        await axios.post(`${config.jrmPartnerotpLoginUrl}`, values);
        router.push("/auth/verify-otp");
      } catch (error) {
        toast(error.message);
      }
    },
  });

  return (
    <Box sx={{ height: "100%", display: "flex", justifyContent: "center", flexDirection: "column" }}>
      <Box sx={{ mx: "auto", padding: "10px" }}>
        {isInd === "IN" ? (
          <Typography variant="h4" sx={{ mb: 5, textAlign: "center" }}>
            Please enter your<br /> mobile number(without country code)<br /> or<br /> email id
          </Typography>
        ) : (
          <Typography variant="h4" sx={{ mb: 5, textAlign: "center" }}>
            Please enter your email id
          </Typography>
        )}
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
            <Stack spacing={3}>
              <MuiTextField
                name="authName"
                label={isInd === "IN" ? "Mobile Number or Email" : "Email Address"}
                onChange={(e) => {
                  const val = e.target.value || "";
                  formik.setFieldValue("authName", val);
                  const numericVal = val.replace(/[\s-]/g, "");
                  const isPhoneNumber = /^[0-9]{7,15}$/.test(numericVal);
                  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
                  if (isPhoneNumber) {
                    formik.setFieldValue("mobileNumber", numericVal);
                    formik.setFieldValue("emailAddress", "");
                  } else if (isEmail) {
                    formik.setFieldValue("emailAddress", val);
                    formik.setFieldValue("mobileNumber", "");
                  } else {
                    formik.setFieldValue("emailAddress", "");
                    formik.setFieldValue("mobileNumber", "");
                  }
                }}
                value={formik.values.authName}
              />
              <Button size="medium" type="submit" variant="contained">Get OTP</Button>
            </Stack>
            <MuiTextField name="emailAddress" label="Email" type="email" hidden value={formik.values.emailAddress} />
            <MuiTextField name="mobileNumber" label="Mobile" type="number" hidden value={formik.values.mobileNumber} />
          </Form>
        </FormikProvider>
      </Box>
    </Box>
  );
}