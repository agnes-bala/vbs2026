'use client';

import * as Yup from "yup";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useFormik, Form, FormikProvider } from "formik";
import { Stack, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import useTimer from "@/components/useTimer";
import { verifyMobileOTP, resendMobileOTP } from "@/services/JRMPartnerAuthService";
import { AppAuthContext } from "@/auth/AppAuthContext";
import { storeAuthInfo } from "@/auth/AppAuthStorage";
import { PATH_AFTER_LOGIN } from "@/config";

export default function VerifyCodeMobile() {
  const router = useRouter();
  const [firsttrigger, setFirsttrigger] = useState(false);
  const authContext = useContext(AppAuthContext);
  const [resendTime, setResendTime] = useTimer({ multiplier: 1 });
  const storedLocation = typeof window !== 'undefined' ? localStorage.getItem("storedLocation") : null;
  const mobileVerify = typeof window !== 'undefined' ? localStorage.getItem("mobileNumber") : '';

  const handleResend = async () => {
    setResendTime(60);
    const request = { emailAddress: "", mobileNumber: mobileVerify, country: "" };
    const result = await resendMobileOTP(request);
    if (!result.ok) {
      toast.error("Resend OTP failed");
      return;
    }
    toast.success("OTP resend was successful");
  };

  const handleVerify = () => {
    setFirsttrigger(true);
    setResendTime(60);
  };

  const VerifyCodeSchema = Yup.object().shape({
    mobileOTP: Yup.number()
      .typeError("Invalid Character")
      .min(100000, "check entered OTP")
      .max(999999, "check entered OTP")
      .required("Code is required"),
    mobileNumber: Yup.number()
      .required("Mobile number is required")
      .min(6001000000, "Invalid number")
      .max(9999000000, "Invalid Number"),
  });

  const formik = useFormik({
    initialValues: {
      mobileOTP: "",
      mobileNumber: mobileVerify || "",
    },
    validationSchema: VerifyCodeSchema,
    onSubmit: async (data) => {
      const request = { mobile: data.mobileNumber, otp: data.mobileOTP };
      const result = await verifyMobileOTP(request);
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
      localStorage.setItem("profileStatus", profileCompleted);
      const members = { main: contactRes.data, family: familyRes.data, kids: childrenRes.data };
      localStorage.setItem("members", JSON.stringify(members));
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
        Please check your mobile!
      </Typography>
      <Typography sx={{ color: "text.secondary", width: { xs: "100%", sm: "100%", md: "50%", lg: "50%", xl: "50%" } }}>
        We have sent a 6-digit confirmation code to your mobile number, please enter the code in below box to verify your mobile number.
      </Typography>
      <br />
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              fullWidth
              label="Mobile number"
              type="number"
              disabled={!!mobileVerify}
              {...getFieldProps("mobileNumber")}
              error={Boolean(touched.mobileNumber && errors.mobileNumber)}
              helperText={touched.mobileNumber && errors.mobileNumber}
            />
            <TextField
              fullWidth
              label="OTP"
              type="number"
              inputProps={{ minLength: 6, maxLength: 6 }}
              {...getFieldProps("mobileOTP")}
              error={Boolean(touched.mobileOTP && errors.mobileOTP)}
              helperText={touched.mobileOTP && errors.mobileOTP}
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