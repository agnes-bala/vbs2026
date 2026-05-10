// // src/services/JRMPartnerAuthService.js
// import apiClient from "./Client";
// import { config } from "../partnerconfig";
// import { setSession, setAuthInfo } from "../auth/AppAuthStorage";

// // Helper functions
// export const normalizePhone = (s) => s?.replace(/[\s-()+]/g, '') || '';

// export const isPhone = (s) => {
//   if (!s) return false;
//   const numeric = normalizePhone(s);
//   return /^[0-9]{7,15}$/.test(numeric);
// };

// export const isEmail = (s) => {
//   if (!s) return false;
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim());
// };

// // Register partner
// export const registerPartnerMobile = (partnerDetails) => {
//   console.log("registerPartnerMobile", partnerDetails);
//   return apiClient.post(config.jrmPartnerRegisterMobileUrl, partnerDetails);
// };

// export const registerPartner = (data) => {
//   console.log("registerPartner", data);
//   return apiClient.post(config.jrmPartnerRegisterMobileUrl, data);
// };

// // Login with password
// export const loginPartner = (credentials) => {
//   return apiClient.post(config.jrmPartnerLoginUrl, credentials);
// };

// export const loginWithPassword = async ({ emailAddress, mobileNumber, password }) => {
//   console.log("loginWithPassword called");
//   try {
//     const params = { emailAddress, mobileNumber, password };
//     const response = await apiClient.post(config.jrmPartnerLoginUrl, params);
//     if (response.ok && response.data?.jwt) {
//       setSession(response.data.jwt);
//       setAuthInfo(response.data);
//     }
//     return {
//       status: response.status,
//       data: response.data,
//       ok: response.ok
//     };
//   } catch (error) {
//     console.error("Error during login:", error);
//     return {
//       status: error?.status || 500,
//       data: { message: error?.message || 'Network error. Try again later' },
//       ok: false
//     };
//   }
// };

// // Login with OTP
// export const loginWithOTP = async ({ emailAddress, mobileNumber, otp }) => {
//   console.log("loginWithOTP called");
//   try {
//     const params = emailAddress
//       ? { emailAddress, otp: Number(otp) }
//         : { mobile: mobileNumber, otp: Number(otp) };
//     const url = emailAddress
//       ? config.jrmPartnerVerifyEmailUrl
//       : config.jrmPartnerVerifyMobileUrl;
//     const response = await apiClient.post(url, params);
//     if (response.ok && response.data?.jwt) {
//       setSession(response.data.jwt);
//       setAuthInfo(response.data);
//     }
//     return {
//       status: response.status,
//       data: response.data,
//       ok: response.ok
//     };
//   } catch (error) {
//     console.error("Error during OTP login:", error);
//     return {
//       status: error?.status || 500,
//       data: { message: error?.message || 'Network error. Try again later' },
//       ok: false
//     };
//   }
// };

// // Send OTP – exactly like old project (sends all three fields)
// export const sendOTP = async ({ emailAddress, mobileNumber, country }) => {
//   console.log("sendOTP called with:", { emailAddress, mobileNumber, country });
//   try {
//     const url = 'https://partnerservice-stage.jesusredeems.com/jrms/v1/partners/signinotp';
//     const body = {
//       emailAddress: emailAddress || "",
//       mobileNumber: mobileNumber || "",
//       country: country || "IN"
//     };
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(body)
//     });
//     const data = await response.json();
//     return { status: response.status, data, ok: response.ok };
//   } catch (error) {
//     console.error("Error sending OTP:", error);
//     return { status: 500, data: { message: error.message }, ok: false };
//   }
// };

// // Auto-register a user by email or mobile (for new users)
// export const autoRegister = async (identifier) => {
//   console.log("autoRegister called for:", identifier);
//   try {
//     const isEmailId = isEmail(identifier);
//     const params = isEmailId
//       ? { emailAddress: identifier, mobileNumber: "", country: "IN" }
//       : { mobileNumber: identifier, emailAddress: "", country: "IN" };
//     const response = await apiClient.post(config.jrmPartnerRegisterMobileUrl, params);
//     return { ok: response.ok, data: response.data };
//   } catch (error) {
//     console.error("Auto-register error:", error);
//     return { ok: false, data: { message: error.message } };
//   }
// };

// // Backward compatibility exports...
// export const verifyMobileOTP = (otp) => apiClient.post(config.jrmPartnerVerifyMobileUrl, otp);
// export const verifyEmailOTP = (otp) => apiClient.post(config.jrmPartnerVerifyEmailUrl, otp);
// export const resendMobileOTP = (otp) => apiClient.post(config.jrmResendOTPUrl, otp);
// export const resendEmailOTP = (otp) => apiClient.post(config.jrmResendOTPUrl, otp);
// export const resendOTP = (data) => apiClient.post(config.jrmResendOTPUrl, data);
// export const initiatePasswordReset = (data) => apiClient.post(config.jrmInitPasswordResetUrl, data);
// export const verifyOTP = (data) => apiClient.post(config.jrmVerifyOTPUrl, data);
// export const setPassword = (passwordDetails, url) => {
//   const configHeaders = { headers: { "Authorization": `Bearer ${passwordDetails.oneTimeJWT}` } };
//   const request = { "password": passwordDetails.password };
//   return apiClient.post(url, request, configHeaders);
// };
// export const logoutPartner = (authInfo) => {
//   const configHeaders = { headers: { Authorization: `Bearer ${authInfo.jwt}` } };
//   return apiClient.post(authInfo.signOutUrl, {}, configHeaders);
// };

// // Profile APIs (unchanged)
// export const updatePartnerContactInfo = (partnerUrl, jwt, partnerInfo) => {
//   const partnerContactInfoUrl = `${partnerUrl}/contactinfo`;
//   const configHeaders = { headers: { Authorization: `Bearer ${jwt}` } };
//   return apiClient.post(partnerContactInfoUrl, partnerInfo, configHeaders);
// };
// export const getPartnerContactInfo = (partnerContactInfoUrl, jwt) => {
//   const configHeaders = { headers: { Authorization: `Bearer ${jwt}` } };
//   return apiClient.get(partnerContactInfoUrl, "", configHeaders);
// };
// export const updatePartnerSpouseInfo = (partnerUrl, jwt, partnerInfo) => {
//   const partnerSpouseInfoUrl = `${partnerUrl}/spouseinfo`;
//   const configHeaders = { headers: { Authorization: `Bearer ${jwt}` } };
//   return apiClient.post(partnerSpouseInfoUrl, partnerInfo, configHeaders);
// };
// export const getPartnerSpouseInfo = (partnerSpouseInfoUrl, jwt) => {
//   const configHeaders = { headers: { Authorization: `Bearer ${jwt}` } };
//   return apiClient.get(partnerSpouseInfoUrl, "", configHeaders);
// };
// export const updatePartnerChildrenInfo = (partnerUrl, jwt, partnerChildrenInfo) => {
//   const partnerChildrenInfoUrl = `${partnerUrl}/childreninfo`;
//   const configHeaders = { headers: { Authorization: `Bearer ${jwt}` } };
//   return apiClient.post(partnerChildrenInfoUrl, partnerChildrenInfo, configHeaders);
// };
// export const getPartnerChildrenInfo = (partnerChildrenInfoUrl, jwt) => {
//   const configHeaders = { headers: { Authorization: `Bearer ${jwt}` } };
//   return apiClient.get(partnerChildrenInfoUrl, "", configHeaders);
// };
// export const updatePartnerFamilyMemberInfo = (partnerUrl, jwt, partnerFamilyInfo) => {
//   const partnerFamilyInfoUrl = `${partnerUrl}/familymemberinfo`;
//   const configHeaders = { headers: { Authorization: `Bearer ${jwt}` } };
//   return apiClient.post(partnerFamilyInfoUrl, partnerFamilyInfo, configHeaders);
// };
// export const getPartnerFamilyMemberInfo = (partnerFamilyInfoUrl, jwt) => {
//   const configHeaders = { headers: { Authorization: `Bearer ${jwt}` } };
//   return apiClient.get(partnerFamilyInfoUrl, "", configHeaders);
// };










// src/services/JRMPartnerAuthService.js
import apiClient from "./Client";
import { config } from "../partnerconfig";
import { setSession, setAuthInfo } from "../auth/AppAuthStorage";

// ---------- Helper functions (updated for global phones) ----------
export const normalizePhone = (s) => {
  if (!s) return '';
  // Remove spaces, dashes, parentheses, but keep leading '+'
  let cleaned = s.replace(/[\s\-()]/g, '');
  // If it's a plain 10-15 digit number without '+', assume it's E.164 missing '+'
  // (optional – you may want to require '+')
  if (/^[0-9]{10,15}$/.test(cleaned) && !cleaned.startsWith('+')) {
    // You could optionally prepend '+' but not forced – backend may still accept.
    // We'll keep as is.
  }
  return cleaned;
};

// Extract country code from E.164 phone number (e.g., "+14155552671" -> "1")
export const extractCountryCode = (phoneNumber) => {
  if (!phoneNumber) return "IN";
  const cleaned = phoneNumber.replace(/[^\d+]/g, '');
  if (cleaned.startsWith('+')) {
    const match = cleaned.match(/^\+(\d{1,3})/);
    if (match) return match[1];
  }
  // If no '+', we cannot reliably extract. Return "IN" as fallback (or null)
  return "IN";
};

export const isPhone = (s) => {
  if (!s) return false;
  const cleaned = s.replace(/[^+0-9]/g, '');
  // E.164 format: + followed by 7-15 digits OR 10-15 digits without '+'
  return /^\+[1-9][0-9]{6,14}$/.test(cleaned) || /^[1-9][0-9]{9,14}$/.test(cleaned);
};

export const isEmail = (s) => {
  if (!s) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim());
};

// ---------- Registration functions (unchanged) ----------
export const registerPartnerMobile = (partnerDetails) => {
  console.log("registerPartnerMobile", partnerDetails);
  return apiClient.post(config.jrmPartnerRegisterMobileUrl, partnerDetails);
};

export const registerPartner = (data) => {
  console.log("registerPartner", data);
  return apiClient.post(config.jrmPartnerRegisterMobileUrl, data);
};

// ---------- Login with password (unchanged) ----------
export const loginPartner = (credentials) => {
  return apiClient.post(config.jrmPartnerLoginUrl, credentials);
};

export const loginWithPassword = async ({ emailAddress, mobileNumber, password }) => {
  console.log("loginWithPassword called");
  try {
    const params = { emailAddress, mobileNumber, password };
    const response = await apiClient.post(config.jrmPartnerLoginUrl, params);
    if (response.ok && response.data?.jwt) {
      setSession(response.data.jwt);
      setAuthInfo(response.data);
    }
    return {
      status: response.status,
      data: response.data,
      ok: response.ok
    };
  } catch (error) {
    console.error("Error during login:", error);
    return {
      status: error?.status || 500,
      data: { message: error?.message || 'Network error. Try again later' },
      ok: false
    };
  }
};

// ---------- OTP verification (unchanged – already uses mobile as is) ----------
export const loginWithOTP = async ({ emailAddress, mobileNumber, otp }) => {
  console.log("loginWithOTP called");
  try {
    const params = emailAddress
      ? { emailAddress, otp: Number(otp) }
      : { mobile: mobileNumber, otp: Number(otp) };
    const url = emailAddress
      ? config.jrmPartnerVerifyEmailUrl
      : config.jrmPartnerVerifyMobileUrl;
    const response = await apiClient.post(url, params);
    if (response.ok && response.data?.jwt) {
      setSession(response.data.jwt);
      setAuthInfo(response.data);
    }
    return {
      status: response.status,
      data: response.data,
      ok: response.ok
    };
  } catch (error) {
    console.error("Error during OTP login:", error);
    return {
      status: error?.status || 500,
      data: { message: error?.message || 'Network error. Try again later' },
      ok: false
    };
  }
};

// ---------- Send OTP (updated: dynamic country from phone number) ----------
export const sendOTP = async ({ emailAddress, mobileNumber, country }) => {
  console.log("sendOTP called with:", { emailAddress, mobileNumber, country });
  try {
    const url = 'https://partnerservice-stage.jesusredeems.com/jrms/v1/partners/signinotp';
    
    // Determine country code: if not provided explicitly, extract from mobileNumber
    let finalCountry = country;
    if (!finalCountry && mobileNumber) {
      finalCountry = extractCountryCode(mobileNumber);
    }
    if (!finalCountry) finalCountry = "IN"; // fallback

    const body = {
      emailAddress: emailAddress || "",
      mobileNumber: mobileNumber || "",
      country: finalCountry
    };
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    const data = await response.json();
    return { status: response.status, data, ok: response.ok };
  } catch (error) {
    console.error("Error sending OTP:", error);
    return { status: 500, data: { message: error.message }, ok: false };
  }
};

// ---------- Auto-register (updated: dynamic country for phone) ----------
export const autoRegister = async (identifier) => {
  console.log("autoRegister called for:", identifier);
  try {
    const isEmailId = isEmail(identifier);
    let params;
    if (isEmailId) {
      params = {
        emailAddress: identifier,
        mobileNumber: "",
        country: "IN" // emails may not have a country, default IN
      };
    } else {
      const mobileNumber = normalizePhone(identifier);
      const country = extractCountryCode(mobileNumber);
      params = {
        emailAddress: "",
        mobileNumber: mobileNumber,
        country: country
      };
    }
    const response = await apiClient.post(config.jrmPartnerRegisterMobileUrl, params);
    return { ok: response.ok, data: response.data };
  } catch (error) {
    console.error("Auto-register error:", error);
    return { ok: false, data: { message: error.message } };
  }
};

// ---------- Backward compatibility (unchanged) ----------
export const verifyMobileOTP = (otp) => apiClient.post(config.jrmPartnerVerifyMobileUrl, otp);
export const verifyEmailOTP = (otp) => apiClient.post(config.jrmPartnerVerifyEmailUrl, otp);
export const resendMobileOTP = (otp) => apiClient.post(config.jrmResendOTPUrl, otp);
export const resendEmailOTP = (otp) => apiClient.post(config.jrmResendOTPUrl, otp);
export const resendOTP = (data) => apiClient.post(config.jrmResendOTPUrl, data);
export const initiatePasswordReset = (data) => apiClient.post(config.jrmInitPasswordResetUrl, data);
export const verifyOTP = (data) => apiClient.post(config.jrmVerifyOTPUrl, data);
export const setPassword = (passwordDetails, url) => {
  const configHeaders = { headers: { "Authorization": `Bearer ${passwordDetails.oneTimeJWT}` } };
  const request = { "password": passwordDetails.password };
  return apiClient.post(url, request, configHeaders);
};
export const logoutPartner = (authInfo) => {
  const configHeaders = { headers: { Authorization: `Bearer ${authInfo.jwt}` } };
  return apiClient.post(authInfo.signOutUrl, {}, configHeaders);
};

// ---------- Profile APIs (unchanged) ----------
export const updatePartnerContactInfo = (partnerUrl, jwt, partnerInfo) => {
  const partnerContactInfoUrl = `${partnerUrl}/contactinfo`;
  const configHeaders = { headers: { Authorization: `Bearer ${jwt}` } };
  return apiClient.post(partnerContactInfoUrl, partnerInfo, configHeaders);
};
export const getPartnerContactInfo = (partnerContactInfoUrl, jwt) => {
  const configHeaders = { headers: { Authorization: `Bearer ${jwt}` } };
  return apiClient.get(partnerContactInfoUrl, "", configHeaders);
};
export const updatePartnerSpouseInfo = (partnerUrl, jwt, partnerInfo) => {
  const partnerSpouseInfoUrl = `${partnerUrl}/spouseinfo`;
  const configHeaders = { headers: { Authorization: `Bearer ${jwt}` } };
  return apiClient.post(partnerSpouseInfoUrl, partnerInfo, configHeaders);
};
export const getPartnerSpouseInfo = (partnerSpouseInfoUrl, jwt) => {
  const configHeaders = { headers: { Authorization: `Bearer ${jwt}` } };
  return apiClient.get(partnerSpouseInfoUrl, "", configHeaders);
};
export const updatePartnerChildrenInfo = (partnerUrl, jwt, partnerChildrenInfo) => {
  const partnerChildrenInfoUrl = `${partnerUrl}/childreninfo`;
  const configHeaders = { headers: { Authorization: `Bearer ${jwt}` } };
  return apiClient.post(partnerChildrenInfoUrl, partnerChildrenInfo, configHeaders);
};
export const getPartnerChildrenInfo = (partnerChildrenInfoUrl, jwt) => {
  const configHeaders = { headers: { Authorization: `Bearer ${jwt}` } };
  return apiClient.get(partnerChildrenInfoUrl, "", configHeaders);
};
export const updatePartnerFamilyMemberInfo = (partnerUrl, jwt, partnerFamilyInfo) => {
  const partnerFamilyInfoUrl = `${partnerUrl}/familymemberinfo`;
  const configHeaders = { headers: { Authorization: `Bearer ${jwt}` } };
  return apiClient.post(partnerFamilyInfoUrl, partnerFamilyInfo, configHeaders);
};
export const getPartnerFamilyMemberInfo = (partnerFamilyInfoUrl, jwt) => {
  const configHeaders = { headers: { Authorization: `Bearer ${jwt}` } };
  return apiClient.get(partnerFamilyInfoUrl, "", configHeaders);
};