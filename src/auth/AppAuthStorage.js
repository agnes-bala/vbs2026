// src/auth/AppAuthStorage.js

const jwtKey = "jwt";
const emailKey = "emailAddress";
const idKey = "partnerId";
const profileUrlKey = "profileUrl";
const signOutUrlKey = "signOutUrl";
const countryKey = "country";
const mobileNumberKey = "mobileNumber";
const emailAddressKey = "emailAddress";
const oneTimeJWTKey = "oneTimeJWT";
const setPwdUrlKey = "setPwdUrl";
const fullNameKey = "fullName";
const administratorKey = "administrator";

const safeLocalStorage = () => {
  if (typeof window !== 'undefined') return window.localStorage;
  return null;
};

export const isValidToken = (token) => {
  if (!token) return false;
  try {
    const parts = token.split('.');
    if (parts.length === 3) {
      const payload = JSON.parse(atob(parts[1]));
      const exp = payload.exp * 1000;
      return Date.now() < exp;
    }
    return true;
  } catch {
    return true;
  }
};

export const setSession = (token) => {
  const storage = safeLocalStorage();
  if (!storage) return;
  if (token) storage.setItem(jwtKey, token);
  else storage.removeItem(jwtKey);
};

export const setAuthInfo = (authInfo) => {
  const storage = safeLocalStorage();
  if (!storage) return;
  storage.setItem(jwtKey, authInfo.jwt);
  storage.setItem(emailKey, authInfo.emailAddress);
  storage.setItem(idKey, authInfo.partnerId);
  storage.setItem(profileUrlKey, authInfo.profileUrl);
  storage.setItem(signOutUrlKey, authInfo.signOutUrl);
  storage.setItem(mobileNumberKey, authInfo.mobileNumber || '');
  storage.setItem(fullNameKey, authInfo.fullName || '');
  storage.setItem(administratorKey, authInfo.administrator || false);
  storage.setItem("authInfo", JSON.stringify(authInfo));
};

export const getAuthInfo = async () => {
  const storage = safeLocalStorage();
  if (!storage) return null;
  const jwt = storage.getItem(jwtKey);
  if (!jwt) return null;
  const emailAddress = storage.getItem(emailKey);
  const partnerId = storage.getItem(idKey);
  const profileUrl = storage.getItem(profileUrlKey);
  const signOutUrl = storage.getItem(signOutUrlKey);
  const mobileNumber = storage.getItem(mobileNumberKey);
  const fullName = storage.getItem(fullNameKey);
  const administrator = storage.getItem(administratorKey) === 'true';
  return { jwt, emailAddress, partnerId, profileUrl, signOutUrl, mobileNumber, fullName, administrator };
};

export const removeAuthInfo = async () => {
  const storage = safeLocalStorage();
  if (!storage) return;
  const keys = [jwtKey, emailKey, idKey, profileUrlKey, signOutUrlKey, mobileNumberKey, fullNameKey, administratorKey, oneTimeJWTKey, setPwdUrlKey, "authInfo", "cachedProfile", "members", "role", "profileStatus"];
  keys.forEach(key => storage.removeItem(key));
};

export const storeAuthInfo = setAuthInfo;
export const clearAuthInfo = removeAuthInfo;