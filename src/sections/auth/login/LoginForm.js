// // 'use client';

// // import { useState, useEffect } from 'react';
// // import { useRouter } from 'next/navigation';
// // import { toast } from 'react-toastify';
// // import {
// //   Stack,
// //   TextField,
// //   Button,
// //   Box,
// //   Alert,
// //   InputAdornment,
// //   LinearProgress,
// // } from '@mui/material';
// // import { LoadingButton } from '@mui/lab';
// // import Iconify from '@/components/Iconify';
// // import {
// //   sendOTP,
// //   loginWithOTP,
// //   isPhone,
// //   isEmail,
// //   normalizePhone,
// //   autoRegister,  // <-- import the new function
// // } from '@/services/JRMPartnerAuthService';

// // export default function LoginForm({ onSuccess }) {
// //   const router = useRouter();
// //   const [step, setStep] = useState('identifier');
// //   const [identifier, setIdentifier] = useState('');
// //   const [otp, setOtp] = useState('');
// //   const [error, setError] = useState('');
// //   const [loading, setLoading] = useState(false);
// //   const [showPrefix, setShowPrefix] = useState(false);
// //   const [isInd, setIsInd] = useState('IN');
// //   const [resendTimer, setResendTimer] = useState(0);
// //   const [resendCount, setResendCount] = useState(0);
// //   const RESEND_SEC = 60;
// //   const RESEND_LIMIT = 3;

// //   useEffect(() => {
// //     fetch('https://api.country.is')
// //       .then((res) => res.json())
// //       .then((data) => setIsInd(data.country))
// //       .catch(() => setIsInd('IN'));
// //   }, []);

// //   useEffect(() => {
// //     if (resendTimer > 0) {
// //       const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
// //       return () => clearTimeout(timer);
// //     }
// //   }, [resendTimer]);

// //   const startResendCooldown = () => setResendTimer(RESEND_SEC);

// //   const sendOtpRequest = async (contact) => {
// //     const phone = isPhone(contact) ? normalizePhone(contact) : '';
// //     const email = isEmail(contact) ? contact.toLowerCase() : '';
// //     const countryCode = isInd;
// //     return await sendOTP({ emailAddress: email, mobileNumber: phone, country: countryCode });
// //   };

// //   const handleIdentifierSubmit = async () => {
// //     const trimmed = identifier.trim();
// //     if (!trimmed) {
// //       setError('Please enter email or mobile number');
// //       return;
// //     }
// //     const isValid = isEmail(trimmed) || isPhone(trimmed);
// //     if (!isValid) {
// //       setError('Enter a valid email or 10-digit mobile number');
// //       return;
// //     }

// //     setLoading(true);
// //     setError('');

// //     try {
// //       let result = await sendOtpRequest(trimmed);

// //       // If backend says "Unnecessary parameters", it means email not registered
// //       if (result && !result.ok && result.data?.message === 'Unnecessary parameters') {
// //         console.log("Email not registered, auto-registering...");
// //         const registerResult = await autoRegister(trimmed);
// //         if (registerResult && registerResult.ok) {
// //           // Registration succeeded, now retry OTP
// //           result = await sendOtpRequest(trimmed);
// //         } else {
// //           throw new Error("Auto-registration failed. Please try again.");
// //         }
// //       }

// //       if (result && (result.ok || result.status === 200 || result.status === 201)) {
// //         toast.success('OTP sent successfully!');
// //         setStep('otp');
// //         startResendCooldown();
// //         setResendCount(0);
// //         setOtp('');
// //       } else {
// //         setError(result?.data?.message || 'Failed to send OTP');
// //       }
// //     } catch (err) {
// //       console.error(err);
// //       setError(err.message || 'An error occurred');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleVerifyOtp = async () => {
// //     if (otp.length !== 6) {
// //       setError('OTP must be 6 digits');
// //       return;
// //     }
// //     setLoading(true);
// //     setError('');

// //     const phone = isPhone(identifier) ? normalizePhone(identifier) : '';
// //     const email = isEmail(identifier) ? identifier.toLowerCase() : '';

// //     try {
// //       const result = await loginWithOTP({ emailAddress: email, mobileNumber: phone, otp });
// //       const isSuccess = result?.ok || result?.status === 200 || result?.status === 201 || result?.data?.jwt;
// //       if (isSuccess) {
// //         localStorage.setItem('jwt', result.data?.jwt || result.data?.token);
// //         localStorage.setItem('partnerId', result.data?.partnerId);
// //         localStorage.setItem('emailAddress', result.data?.emailAddress || identifier);
// //         toast.success('Login successful!');
// //         if (onSuccess) onSuccess();
// //         router.push('/dashboard');
// //       } else {
// //         setError(result?.data?.message || 'Invalid OTP');
// //       }
// //     } catch (err) {
// //       console.error(err);
// //       setError(err.message || 'An error occurred');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleResend = async () => {
// //     if (resendCount >= RESEND_LIMIT) {
// //       toast.error('Maximum resend attempts reached');
// //       return;
// //     }
// //     setLoading(true);
// //     try {
// //       let result = await sendOtpRequest(identifier);

// //       // Auto-register if needed (same as above)
// //       if (result && !result.ok && result.data?.message === 'Unnecessary parameters') {
// //         console.log("Email not registered, auto-registering before resend...");
// //         const registerResult = await autoRegister(identifier);
// //         if (registerResult && registerResult.ok) {
// //           result = await sendOtpRequest(identifier);
// //         } else {
// //           throw new Error("Auto-registration failed. Cannot resend OTP.");
// //         }
// //       }

// //       if (result && (result.ok || result.status === 200)) {
// //         toast.success('OTP resent');
// //         setResendCount((prev) => prev + 1);
// //         startResendCooldown();
// //         setOtp('');
// //       } else {
// //         const errorMsg = result?.data?.message || 'Failed to resend OTP';
// //         setError(errorMsg);
// //         toast.error(errorMsg);
// //       }
// //     } catch (err) {
// //       setError(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const goBack = () => {
// //     setStep('identifier');
// //     setError('');
// //     setOtp('');
// //   };

// //   return (
// //     <form onSubmit={(e) => { e.preventDefault(); step === 'identifier' ? handleIdentifierSubmit() : handleVerifyOtp(); }}>
// //       <Stack spacing={3}>
// //         {error && <Alert severity="error">{error}</Alert>}
// //         {loading && <LinearProgress />}
// //         {step === 'identifier' && (
// //           <TextField
// //             fullWidth
// //             label={isInd === 'IN' ? 'Mobile number / Email' : 'Email address'}
// //             value={identifier}
// //             onChange={(e) => {
// //               setIdentifier(e.target.value);
// //               setShowPrefix(isPhone(e.target.value));
// //             }}
// //             InputProps={{
// //               startAdornment: showPrefix ? <InputAdornment position="start">+91</InputAdornment> : null,
// //             }}
// //             disabled={loading}
// //             required
// //           />
// //         )}
// //         {step === 'otp' && (
// //           <>
// //             <Box sx={{ textAlign: 'right' }}>
// //               <Button variant="text" onClick={goBack} disabled={loading}>← Use different email/mobile</Button>
// //             </Box>
// //             <TextField
// //               fullWidth
// //               label="Enter 6‑digit OTP"
// //               value={otp}
// //               onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
// //               inputProps={{ maxLength: 6 }}
// //               disabled={loading}
// //               required
// //             />
// //             <Button
// //               fullWidth
// //               variant="text"
// //               onClick={handleResend}
// //               disabled={resendTimer > 0 || resendCount >= RESEND_LIMIT || loading}
// //             >
// //               {resendCount >= RESEND_LIMIT ? 'Resend limit reached' : resendTimer > 0 ? `Resend OTP (${resendTimer}s)` : 'Resend OTP'}
// //             </Button>
// //           </>
// //         )}
// //         <LoadingButton
// //           fullWidth
// //           type="submit"
// //           variant="contained"
// //           loading={loading}
// //           loadingPosition="start"
// //           startIcon={step === 'identifier' ? <Iconify icon="eva:arrow-ios-forward-fill" /> : <Iconify icon="eva:checkmark-circle-2-fill" />}
// //           sx={{ backgroundColor: '#f39c12', color: '#1976d2', fontWeight: 'bold', borderRadius: '10px', py: 1.2, '&:hover': { backgroundColor: '#e67e22', color: '#fff' } }}
// //         >
// //           {step === 'identifier' ? 'Continue' : 'Verify OTP'}
// //         </LoadingButton>
// //       </Stack>
// //     </form>
// //   );
// // }









// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { toast } from 'react-toastify';
// import {
//   Stack,
//   TextField,
//   Button,
//   Box,
//   Alert,
//   InputAdornment,
//   LinearProgress,
// } from '@mui/material';
// import { LoadingButton } from '@mui/lab';
// import Iconify from '@/components/Iconify';
// import {
//   sendOTP,
//   loginWithOTP,
//   isPhone,
//   isEmail,
//   normalizePhone,
//   autoRegister,
// } from '@/services/JRMPartnerAuthService';

// export default function LoginForm({ onSuccess }) {
//   const router = useRouter();
//   const [step, setStep] = useState('identifier');
//   const [identifier, setIdentifier] = useState('');
//   const [otp, setOtp] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showPrefix, setShowPrefix] = useState(false);
//   const [isInd, setIsInd] = useState('IN');
//   const [resendTimer, setResendTimer] = useState(0);
//   const [resendCount, setResendCount] = useState(0);
//   const RESEND_SEC = 60;
//   const RESEND_LIMIT = 3;

//   useEffect(() => {
//     fetch('https://api.country.is')
//       .then((res) => res.json())
//       .then((data) => setIsInd(data.country))
//       .catch(() => setIsInd('IN'));
//   }, []);

//   useEffect(() => {
//     if (resendTimer > 0) {
//       const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [resendTimer]);

//   const startResendCooldown = () => setResendTimer(RESEND_SEC);

//   const sendOtpRequest = async (contact) => {
//     const phone = isPhone(contact) ? normalizePhone(contact) : '';
//     const email = isEmail(contact) ? contact.toLowerCase() : '';
//     const countryCode = isInd;
//     return await sendOTP({ emailAddress: email, mobileNumber: phone, country: countryCode });
//   };

//   const handleIdentifierSubmit = async () => {
//     const trimmed = identifier.trim();
//     if (!trimmed) {
//       setError('Please enter email or mobile number');
//       return;
//     }
//     const isValid = isEmail(trimmed) || isPhone(trimmed);
//     if (!isValid) {
//       setError('Enter a valid email or 10-digit mobile number');
//       return;
//     }

//     setLoading(true);
//     setError('');

//     try {
//       let result = await sendOtpRequest(trimmed);

//       if (result && !result.ok && result.data?.message === 'Unnecessary parameters') {
//         console.log("Email not registered, auto-registering...");
//         const registerResult = await autoRegister(trimmed);
//         if (registerResult && registerResult.ok) {
//           result = await sendOtpRequest(trimmed);
//         } else {
//           throw new Error("Auto-registration failed. Please try again.");
//         }
//       }

//       if (result && (result.ok || result.status === 200 || result.status === 201)) {
//         toast.success('OTP sent successfully!');
//         setStep('otp');
//         startResendCooldown();
//         setResendCount(0);
//         setOtp('');
//       } else {
//         setError(result?.data?.message || 'Failed to send OTP');
//       }
//     } catch (err) {
//       console.error(err);
//       setError(err.message || 'An error occurred');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleVerifyOtp = async () => {
//     if (otp.length !== 6) {
//       setError('OTP must be 6 digits');
//       return;
//     }
//     setLoading(true);
//     setError('');

//     const phone = isPhone(identifier) ? normalizePhone(identifier) : '';
//     const email = isEmail(identifier) ? identifier.toLowerCase() : '';

//     try {
//       const result = await loginWithOTP({ emailAddress: email, mobileNumber: phone, otp });
//       const isSuccess = result?.ok || result?.status === 200 || result?.status === 201 || result?.data?.jwt;
//       if (isSuccess) {
//         localStorage.setItem('jwt', result.data?.jwt || result.data?.token);
//         localStorage.setItem('partnerId', result.data?.partnerId);
//         localStorage.setItem('emailAddress', result.data?.emailAddress || identifier);
//         toast.success('Login successful!');
//         if (onSuccess) onSuccess();
//         router.push('/dashboard');
//       } else {
//         setError(result?.data?.message || 'Invalid OTP');
//       }
//     } catch (err) {
//       console.error(err);
//       setError(err.message || 'An error occurred');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleResend = async () => {
//     if (resendCount >= RESEND_LIMIT) {
//       toast.error('Maximum resend attempts reached');
//       return;
//     }
//     setLoading(true);
//     try {
//       let result = await sendOtpRequest(identifier);

//       if (result && !result.ok && result.data?.message === 'Unnecessary parameters') {
//         console.log("Email not registered, auto-registering before resend...");
//         const registerResult = await autoRegister(identifier);
//         if (registerResult && registerResult.ok) {
//           result = await sendOtpRequest(identifier);
//         } else {
//           throw new Error("Auto-registration failed. Cannot resend OTP.");
//         }
//       }

//       if (result && (result.ok || result.status === 200)) {
//         toast.success('OTP resent');
//         setResendCount((prev) => prev + 1);
//         startResendCooldown();
//         setOtp('');
//       } else {
//         const errorMsg = result?.data?.message || 'Failed to resend OTP';
//         setError(errorMsg);
//         toast.error(errorMsg);
//       }
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const goBack = () => {
//     setStep('identifier');
//     setError('');
//     setOtp('');
//   };

//   // Common font family
//   const fontFamily = 'Poppins, Aclonica, Lato, Roboto, sans-serif';

//   return (
//     <Box
//       sx={{
//         fontFamily: fontFamily,
//         // Force all child MUI components to inherit this font
//         '& .MuiInputLabel-root': { fontFamily: 'inherit' },
//         '& .MuiInputBase-root': { fontFamily: 'inherit' },
//         '& .MuiButton-root': { fontFamily: 'inherit' },
//         '& .MuiAlert-message': { fontFamily: 'inherit' },
//         '& .MuiTypography-root': { fontFamily: 'inherit' },
//         '& .MuiFormHelperText-root': { fontFamily: 'inherit' },
//       }}
//     >
//       <form onSubmit={(e) => { e.preventDefault(); step === 'identifier' ? handleIdentifierSubmit() : handleVerifyOtp(); }}>
//         <Stack spacing={3}>
//           {error && <Alert severity="error">{error}</Alert>}
//           {loading && <LinearProgress />}
//           {step === 'identifier' && (
//             <TextField
//               fullWidth
//               label={isInd === 'IN' ? 'Mobile number / Email' : 'Email address'}
//               value={identifier}
//               onChange={(e) => {
//                 setIdentifier(e.target.value);
//                 setShowPrefix(isPhone(e.target.value));
//               }}
//               InputProps={{
//                 startAdornment: showPrefix ? <InputAdornment position="start">+91</InputAdornment> : null,
//               }}
//               disabled={loading}
//               required
//             />
//           )}
//           {step === 'otp' && (
//             <>
//               <Box sx={{ textAlign: 'right' }}>
//                 <Button variant="text" onClick={goBack} disabled={loading}>
//                   ← Use different email/mobile
//                 </Button>
//               </Box>
//               <TextField
//                 fullWidth
//                 label="Enter 6‑digit OTP"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
//                 inputProps={{ maxLength: 6 }}
//                 disabled={loading}
//                 required
//               />
//               <Button
//                 fullWidth
//                 variant="text"
//                 onClick={handleResend}
//                 disabled={resendTimer > 0 || resendCount >= RESEND_LIMIT || loading}
//               >
//                 {resendCount >= RESEND_LIMIT ? 'Resend limit reached' : resendTimer > 0 ? `Resend OTP (${resendTimer}s)` : 'Resend OTP'}
//               </Button>
//             </>
//           )}
//           <LoadingButton
//             fullWidth
//             type="submit"
//             variant="contained"
//             loading={loading}
//             loadingPosition="start"
//             startIcon={step === 'identifier' ? <Iconify icon="eva:arrow-ios-forward-fill" /> : <Iconify icon="eva:checkmark-circle-2-fill" />}
//             sx={{ backgroundColor: '#f39c12', color: '#1976d2', fontWeight: 'bold', borderRadius: '10px', py: 1.2, '&:hover': { backgroundColor: '#e67e22', color: '#fff' } }}
//           >
//             {step === 'identifier' ? 'Continue' : 'Verify OTP'}
//           </LoadingButton>
//         </Stack>
//       </form>
//     </Box>
//   );
// }





'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import {
  Stack,
  TextField,
  Button,
  Box,
  Alert,
  LinearProgress,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Iconify from '@/components/Iconify';
import {
  sendOTP,
  loginWithOTP,
  isPhone,
  isEmail,
  normalizePhone,   // Will be kept but we'll modify usage
  autoRegister,
} from '@/services/JRMPartnerAuthService';

export default function LoginForm({ onSuccess }) {
  const router = useRouter();
  const [step, setStep] = useState('identifier');
  const [identifier, setIdentifier] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const [resendCount, setResendCount] = useState(0);
  const RESEND_SEC = 60;
  const RESEND_LIMIT = 3;

  // No country detection needed for phone prefix anymore
  useEffect(() => {
    // Timer logic unchanged
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const startResendCooldown = () => setResendTimer(RESEND_SEC);

  // Improved phone validation: accepts international format (+...)
  const isValidPhoneInternational = (value) => {
    const phoneRegex = /^\+?[1-9]\d{6,14}$/; // E.164: + and 7-15 digits
    const digitsOnly = value.replace(/\D/g, '');
    return phoneRegex.test(value) || (digitsOnly.length >= 7 && digitsOnly.length <= 15);
  };

  // Override isPhone from service (if it’s too restrictive)
  const isPhoneGlobal = (value) => {
    return isValidPhoneInternational(value);
  };

  // Normalize phone: remove spaces/dashes, ensure no extra +91 forced
  const normalizePhoneGlobal = (value) => {
    let cleaned = value.replace(/[\s\-\(\)]/g, '');
    if (!cleaned.startsWith('+')) {
      // If user didn't enter '+', we assume they want to add it? No – let them decide.
      // But many APIs require E.164. To be safe, we return as is.
      // You can optionally prepend '+' if it's a valid number without it.
      return cleaned;
    }
    return cleaned;
  };

  const sendOtpRequest = async (contact) => {
    const isPhoneNum = isPhoneGlobal(contact);
    const phone = isPhoneNum ? normalizePhoneGlobal(contact) : '';
    const email = isEmail(contact) ? contact.toLowerCase() : '';
    // Remove country hardcoding – pass null or let backend decide
    return await sendOTP({ emailAddress: email, mobileNumber: phone, country: null });
  };

  const handleIdentifierSubmit = async () => {
    const trimmed = identifier.trim();
    if (!trimmed) {
      setError('Please enter email or mobile number');
      return;
    }
    const isValid = isEmail(trimmed) || isPhoneGlobal(trimmed);
    if (!isValid) {
      setError('Enter a valid email or international mobile number (e.g., +14155552671)');
      return;
    }

    setLoading(true);
    setError('');

    try {
      let result = await sendOtpRequest(trimmed);

      // If backend says not registered (check for both email AND phone errors)
      const isNotRegistered =
        result?.data?.message === 'Unnecessary parameters' ||   // email case
        result?.data?.message?.toLowerCase().includes('not registered') || // phone case
        result?.data?.message?.toLowerCase().includes('user not found');

      if (result && !result.ok && isNotRegistered) {
        console.log('Not registered, auto-registering...');
        const registerResult = await autoRegister(trimmed);
        if (registerResult && registerResult.ok) {
          // Registration succeeded, retry OTP
          result = await sendOtpRequest(trimmed);
        } else {
          throw new Error('Auto-registration failed. Please try again.');
        }
      }

      if (result && (result.ok || result.status === 200 || result.status === 201)) {
        toast.success('OTP sent successfully!');
        setStep('otp');
        startResendCooldown();
        setResendCount(0);
        setOtp('');
      } else {
        setError(result?.data?.message || 'Failed to send OTP');
      }
    } catch (err) {
      console.error(err);
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (otp.length !== 6) {
      setError('OTP must be 6 digits');
      return;
    }
    setLoading(true);
    setError('');

    const phone = isPhoneGlobal(identifier) ? normalizePhoneGlobal(identifier) : '';
    const email = isEmail(identifier) ? identifier.toLowerCase() : '';

    try {
      const result = await loginWithOTP({ emailAddress: email, mobileNumber: phone, otp });
      const isSuccess = result?.ok || result?.status === 200 || result?.status === 201 || result?.data?.jwt;
      if (isSuccess) {
        localStorage.setItem('jwt', result.data?.jwt || result.data?.token);
        localStorage.setItem('partnerId', result.data?.partnerId);
        localStorage.setItem('emailAddress', result.data?.emailAddress || identifier);
        toast.success('Login successful!');
        if (onSuccess) onSuccess();
        router.push('/dashboard');
      } else {
        setError(result?.data?.message || 'Invalid OTP');
      }
    } catch (err) {
      console.error(err);
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (resendCount >= RESEND_LIMIT) {
      toast.error('Maximum resend attempts reached');
      return;
    }
    setLoading(true);
    try {
      let result = await sendOtpRequest(identifier);

      const isNotRegistered =
        result?.data?.message === 'Unnecessary parameters' ||
        result?.data?.message?.toLowerCase().includes('not registered') ||
        result?.data?.message?.toLowerCase().includes('user not found');

      if (result && !result.ok && isNotRegistered) {
        console.log('Not registered, auto-registering before resend...');
        const registerResult = await autoRegister(identifier);
        if (registerResult && registerResult.ok) {
          result = await sendOtpRequest(identifier);
        } else {
          throw new Error('Auto-registration failed. Cannot resend OTP.');
        }
      }

      if (result && (result.ok || result.status === 200)) {
        toast.success('OTP resent');
        setResendCount((prev) => prev + 1);
        startResendCooldown();
        setOtp('');
      } else {
        const errorMsg = result?.data?.message || 'Failed to resend OTP';
        setError(errorMsg);
        toast.error(errorMsg);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const goBack = () => {
    setStep('identifier');
    setError('');
    setOtp('');
  };

  const fontFamily = 'Poppins, Aclonica, Lato, Roboto, sans-serif';

  return (
    <Box
      sx={{
        fontFamily,
        '& .MuiInputLabel-root': { fontFamily: 'inherit' },
        '& .MuiInputBase-root': { fontFamily: 'inherit' },
        '& .MuiButton-root': { fontFamily: 'inherit' },
        '& .MuiAlert-message': { fontFamily: 'inherit' },
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          step === 'identifier' ? handleIdentifierSubmit() : handleVerifyOtp();
        }}
      >
        <Stack spacing={3}>
          {error && <Alert severity="error">{error}</Alert>}
          {loading && <LinearProgress />}
          {step === 'identifier' && (
            <TextField
              fullWidth
              label="Email / Mobile number"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              disabled={loading}
              required
              // helperText="Example: +14155552671 or user@example.com"
            />
          )}
          {step === 'otp' && (
            <>
              <Box sx={{ textAlign: 'right' }}>
                <Button variant="text" onClick={goBack} disabled={loading}>
                  ← Use different email/mobile
                </Button>
              </Box>
              <TextField
                fullWidth
                label="Enter 6‑digit OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                inputProps={{ maxLength: 6 }}
                disabled={loading}
                required
              />
              <Button
                fullWidth
                variant="text"
                onClick={handleResend}
                disabled={resendTimer > 0 || resendCount >= RESEND_LIMIT || loading}
              >
                {resendCount >= RESEND_LIMIT
                  ? 'Resend limit reached'
                  : resendTimer > 0
                  ? `Resend OTP (${resendTimer}s)`
                  : 'Resend OTP'}
              </Button>
            </>
          )}
          <LoadingButton
            fullWidth
            type="submit"
            variant="contained"
            loading={loading}
            loadingPosition="start"
            startIcon={
              step === 'identifier' ? (
                <Iconify icon="eva:arrow-ios-forward-fill" />
              ) : (
                <Iconify icon="eva:checkmark-circle-2-fill" />
              )
            }
            sx={{
              backgroundColor: '#f39c12',
              color: '#1976d2',
              fontWeight: 'bold',
              borderRadius: '10px',
              py: 1.2,
              '&:hover': { backgroundColor: '#e67e22', color: '#fff' },
            }}
          >
            {step === 'identifier' ? 'Continue' : 'Verify OTP'}
          </LoadingButton>
        </Stack>
      </form>
    </Box>
  );
}