// src/partnerconfig.js
const jrmClientUrl = "https://partnerservice-stage.jesusredeems.com/";

export const config = {
  baseUrl: jrmClientUrl,
  // Use RELATIVE paths (starting with /) – they will be appended to baseUrl by apiClient
  jrmPartnerRegisterMobileUrl: "/jrms/v1/partners/mobilesignup",
  jrmPartnerLoginUrl: "/jrms/v1/partners/signin",
  jrmPartnerotpLoginUrl: "/jrms/v1/partners/signinotp",
  jrmPartnerVerifyMobileUrl: "/jrms/v1/partners/verifymobileotp",
  jrmPartnerVerifyEmailUrl: "/jrms/v1/partners/verifyemailotp",
  jrmInitPasswordResetUrl: "/jrms/v1/partners/initpasswordreset",
  jrmVerifyOTPUrl: "/jrms/v1/partners/verifypasswordotp",
  jrmResendOTPUrl: "/jrms/v1/partners/resendotp",
  // Add any other endpoints you have – all should be relative paths
};