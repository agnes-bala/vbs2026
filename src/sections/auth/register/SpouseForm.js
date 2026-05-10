// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import axios from "axios";
// import { toast } from 'react-toastify';
// import {
//   Stack, TextField, Divider, FormControl,
//   FormLabel, RadioGroup, FormControlLabel, Radio, Select, MenuItem, InputLabel,
//   Alert, Collapse, Box, Typography, Button
// } from '@mui/material';
// import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
// import AppsIcon from '@mui/icons-material/Apps';
// import moment from 'moment';
// import { Poppins, Aclonica, Lato, Roboto } from 'next/font/google';
// import config from "@/partnerconfig.json";

// // Configure fonts – Poppins as primary
// const poppins = Poppins({
//   weight: ['300', '400', '500', '600', '700', '800'],
//   subsets: ['latin'],
//   display: 'swap',
// });

// const aclonica = Aclonica({
//   weight: ['400'],
//   subsets: ['latin'],
//   display: 'swap',
// });

// const lato = Lato({
//   weight: ['400', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// });

// const roboto = Roboto({
//   weight: ['400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// });

// // Combined font stack
// const fontStack = `${poppins.style.fontFamily}, ${aclonica.style.fontFamily}, ${lato.style.fontFamily}, ${roboto.style.fontFamily}, sans-serif`;

// const occupationList = [
//   { _id: "1", name: "Student" }, { _id: "2", name: "Private Employee" },
//   { _id: "3", name: "Government Employee" }, { _id: "4", name: "Business" },
//   { _id: "5", name: "Homemaker" }, { _id: "6", name: "Self Employed" },
//   { _id: "7", name: "Reverend" }, { _id: "8", name: "Pastor" },
//   { _id: "9", name: "Others" }, { _id: "10", name: "Dont Want To Mention" }
// ];
// const url = config.jrmClientUrl;

// export default function SpouseForm() {
//   const router = useRouter();
//   const [pId, setPId] = useState(null);
//   const [token, setToken] = useState(null);
//   const [spousedata, setSpousedata] = useState({});
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [weddingPickerOpen, setWeddingPickerOpen] = useState(false);
//   const [spouseDOBPickerOpen, setSpouseDOBPickerOpen] = useState(false);

//   useEffect(() => {
//     const partnerId = localStorage.getItem("partnerId");
//     const jwt = localStorage.getItem("jwt");
//     setPId(partnerId);
//     setToken(jwt);
//   }, []);

//   useEffect(() => {
//     if (!pId || !token) return;
//     const configHeaders = { Authorization: `Bearer ${token}` };
//     fetch(`${url}jrms/v1/partners/${pId}/contactinfo`, { headers: configHeaders })
//       .then((res) => res.json())
//       .then((data) => setSpousedata(data))
//       .catch(err => console.log(err));
//   }, [pId, token]);

//   const [maritalStatus, setMaritalStatus] = useState(spousedata.maritalStatus || '1');
//   const [weddingDay, setWeddingDay] = useState(spousedata.weddingDay || '');
//   const [spouseName, setSpouseName] = useState(spousedata.spouseName || '');
//   const [spouseDateOfBirth, setSpouseDateOfBirth] = useState(spousedata.spouseDateOfBirth || '');
//   const [spouseOccupation, setSpouseOccupation] = useState(spousedata.spouseOccupation || '');

//   useEffect(() => {
//     if (Object.keys(spousedata).length > 0) {
//       setMaritalStatus(spousedata.maritalStatus || '1');
//       setWeddingDay(spousedata.weddingDay || '');
//       setSpouseName(spousedata.spouseName || '');
//       setSpouseDateOfBirth(spousedata.spouseDateOfBirth || '');
//       setSpouseOccupation(spousedata.spouseOccupation || '');
//     }
//   }, [spousedata]);

//   const handleNext = () => {
//     setShowSuccess(true);
//     setTimeout(() => {
//       setShowSuccess(false);
//       router.push('/dashboard/user/profile?tab=child');
//     }, 1000);
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterMoment}>
//       <Box
//         className={poppins.className}
//         sx={{
//           pl: '5px',
//           pr: 0,
//           py: 3,
//           boxShadow: 'none',
//           background: 'transparent',
//           border: 'none',
//           fontFamily: fontStack,
//           '& *': {
//             fontFamily: `${fontStack} !important`,
//           },
//         }}
//       >
//         {/* Title with icon – only "Spouse" */}
//         <Box sx={{ mb: 2 }}>
//           <Typography sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
//             <AppsIcon />
//             <span style={{ color: 'black' }}>Spouse</span>
//           </Typography>
//           <Box
//             sx={{
//               width: '0%',
//               height: '2px',
//               backgroundColor: 'orange',
//               animation: 'expandWidth 0.5s ease forwards',
//               '@keyframes expandWidth': {
//                 from: { width: '0%' },
//                 to: { width: '8%' }
//               }
//             }}
//           />
//         </Box>

//         <Collapse in={showSuccess}>
//           <Alert severity="success" sx={{ mb: 2, bgcolor: '#4caf50', color: 'white' }}>
//             Spouse information updated successfully
//           </Alert>
//         </Collapse>

//         {/* Flex layout: left 50%, right 45% */}
//         <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
//           {/* LEFT COLUMN – 50% width */}
//           <Box sx={{ width: '50%', color: 'grey' }}>
//             <FormControl>
//               <FormLabel sx={{ color: 'grey' }}>Marital Status (Fill up form for parent only)</FormLabel>
//               <RadioGroup
//                 row
//                 value={maritalStatus}
//                 onChange={(e) => setMaritalStatus(e.target.value)}
//               >
//                 <FormControlLabel value="0" control={<Radio />} label="Single" sx={{ color: 'grey' }} />
//                 <FormControlLabel value="1" control={<Radio />} label="Married" sx={{ color: 'grey' }} />
//               </RadioGroup>
//             </FormControl>
//           </Box>

//           {/* RIGHT COLUMN – 45% width, appears only when Married */}
//           {maritalStatus === '1' && (
//             <Box sx={{ width: '45%' }}>
//               <Stack spacing={3}>
//                 <Divider sx={{ color: 'grey' }}>
//                   <span style={{ color: 'black' }}>Spouse</span>
//                   <span style={{ color: 'black' }}> Detail</span>
//                 </Divider>

//                 {/* Wedding Date – calendar picker */}
//                 <DatePicker
//                   open={weddingPickerOpen}
//                   onOpen={() => setWeddingPickerOpen(true)}
//                   onClose={() => setWeddingPickerOpen(false)}
//                   label="Wedding Date"
//                   openTo="year"
//                   views={['year', 'month', 'day']}
//                   value={weddingDay ? moment(weddingDay, 'YYYY/MM/DD') : null}
//                   onChange={(newValue) => {
//                     if (newValue) {
//                       setWeddingDay(newValue.format('YYYY/MM/DD'));
//                     } else {
//                       setWeddingDay('');
//                     }
//                   }}
//                   slotProps={{
//                     textField: {
//                       fullWidth: true,
//                       InputLabelProps: { sx: { color: 'grey' } },
//                       sx: { '& .MuiInputLabel-root': { color: 'grey' } },
//                       InputProps: { readOnly: true },
//                       onClick: () => setWeddingPickerOpen(true),
//                     },
//                   }}
//                 />

//                 <TextField
//                   fullWidth
//                   label="Spouse name"
//                   value={spouseName}
//                   onChange={(e) => setSpouseName(e.target.value)}
//                   InputLabelProps={{ sx: { color: 'grey' } }}
//                   sx={{ '& .MuiInputLabel-root': { color: 'grey' } }}
//                 />

//                 {/* Spouse DOB – calendar picker */}
//                 <DatePicker
//                   open={spouseDOBPickerOpen}
//                   onOpen={() => setSpouseDOBPickerOpen(true)}
//                   onClose={() => setSpouseDOBPickerOpen(false)}
//                   label="Spouse DOB"
//                   openTo="year"
//                   views={['year', 'month', 'day']}
//                   value={spouseDateOfBirth ? moment(spouseDateOfBirth, 'YYYY/MM/DD') : null}
//                   onChange={(newValue) => {
//                     if (newValue) {
//                       setSpouseDateOfBirth(newValue.format('YYYY/MM/DD'));
//                     } else {
//                       setSpouseDateOfBirth('');
//                     }
//                   }}
//                   slotProps={{
//                     textField: {
//                       fullWidth: true,
//                       InputLabelProps: { sx: { color: 'grey' } },
//                       sx: { '& .MuiInputLabel-root': { color: 'grey' } },
//                       InputProps: { readOnly: true },
//                       onClick: () => setSpouseDOBPickerOpen(true),
//                     },
//                   }}
//                 />

//                 <FormControl fullWidth>
//                   <InputLabel sx={{ color: 'grey' }}>Spouse Occupation</InputLabel>
//                   <Select
//                     label="Spouse Occupation"
//                     value={spouseOccupation}
//                     onChange={(e) => setSpouseOccupation(e.target.value)}
//                     sx={{ color: 'grey' }}
//                   >
//                     {occupationList.map(option => (
//                       <MenuItem key={option._id} value={option.name}>{option.name}</MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//               </Stack>

//               {/* Next button */}
//               <Box sx={{ width: '20%', ml: 'auto', mt: 3 }}>
//                 <Button
//                   onClick={handleNext}
//                   sx={{
//                     bgcolor: '#d4a017',
//                     color: 'black',
//                     '&:hover': { bgcolor: '#b38600' },
//                     px: 3,
//                     py: 1,
//                     fontWeight: 'bold',
//                     display: 'block',
//                   }}
//                 >
//                   Next
//                 </Button>
//               </Box>
//             </Box>
//           )}
//         </Box>
//       </Box>
//     </LocalizationProvider>
//   );
// }













// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import axios from "axios";
// import { toast } from 'react-toastify';
// import {
//   Stack, TextField, Divider, FormControl,
//   FormLabel, RadioGroup, FormControlLabel, Radio, Select, MenuItem, InputLabel,
//   Alert, Collapse, Box, Typography, Button, CircularProgress
// } from '@mui/material';
// import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
// import AppsIcon from '@mui/icons-material/Apps';
// import moment from 'moment';
// import { Poppins, Aclonica, Lato, Roboto } from 'next/font/google';
// import config from "@/partnerconfig.json";

// // Configure fonts
// const poppins = Poppins({
//   weight: ['300', '400', '500', '600', '700', '800'],
//   subsets: ['latin'],
//   display: 'swap',
// });

// const aclonica = Aclonica({
//   weight: ['400'],
//   subsets: ['latin'],
//   display: 'swap',
// });

// const lato = Lato({
//   weight: ['400', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// });

// const roboto = Roboto({
//   weight: ['400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// });

// const fontStack = `${poppins.style.fontFamily}, ${aclonica.style.fontFamily}, ${lato.style.fontFamily}, ${roboto.style.fontFamily}, sans-serif`;

// const occupationList = [
//   { _id: "1", name: "Student" }, { _id: "2", name: "Private Employee" },
//   { _id: "3", name: "Government Employee" }, { _id: "4", name: "Business" },
//   { _id: "5", name: "Homemaker" }, { _id: "6", name: "Self Employed" },
//   { _id: "7", name: "Reverend" }, { _id: "8", name: "Pastor" },
//   { _id: "9", name: "Others" }, { _id: "10", name: "Dont Want To Mention" }
// ];

// const url = config.jrmClientUrl;

// export default function SpouseForm() {
//   const router = useRouter();
//   const [pId, setPId] = useState(null);
//   const [token, setToken] = useState(null);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [weddingPickerOpen, setWeddingPickerOpen] = useState(false);
//   const [spouseDOBPickerOpen, setSpouseDOBPickerOpen] = useState(false);
//   const [isSaving, setIsSaving] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isDataLoaded, setIsDataLoaded] = useState(false);

//   const [maritalStatus, setMaritalStatus] = useState('1');
//   const [weddingDay, setWeddingDay] = useState('');
//   const [spouseName, setSpouseName] = useState('');
//   const [spouseDateOfBirth, setSpouseDateOfBirth] = useState('');
//   const [spouseOccupation, setSpouseOccupation] = useState('');

//   // Get pId and token on mount (only once)
//   useEffect(() => {
//     const partnerId = localStorage.getItem("partnerId");
//     const jwt = localStorage.getItem("jwt");
//     setPId(partnerId);
//     setToken(jwt);
//   }, []);

//   // LOAD DATA FROM LOCALSTORAGE IMMEDIATELY (even before pId/token)
//   useEffect(() => {
//     // First, immediately load from localStorage
//     const savedSpouseData = localStorage.getItem('spouseFormData');
//     if (savedSpouseData) {
//       const parsedData = JSON.parse(savedSpouseData);
//       console.log('Loading spouse from localStorage on mount:', parsedData);
      
//       setMaritalStatus(parsedData.maritalStatus || '1');
//       setWeddingDay(parsedData.weddingDay || '');
//       setSpouseName(parsedData.spouseName || '');
//       setSpouseDateOfBirth(parsedData.spouseDateOfBirth || '');
//       setSpouseOccupation(parsedData.spouseOccupation || '');
//       setIsDataLoaded(true);
//     }
//     setIsLoading(false);
//   }, []); // ✅ Runs only once on mount, immediately loads from localStorage

//   // Load from API when pId and token are available (optional - to sync)
//   useEffect(() => {
//     if (!pId || !token) return;
    
//     const loadFromAPI = async () => {
//       try {
//         const configHeaders = { Authorization: `Bearer ${token}` };
//         const response = await axios.get(`${url}jrms/v1/partners/${pId}/spouseinfo`, { headers: configHeaders });
//         console.log('Fetched spouse from API:', response.data);
        
//         if (response.data && Object.keys(response.data).length > 0) {
//           setMaritalStatus(response.data.maritalStatus || '1');
//           setWeddingDay(response.data.weddingDay || '');
//           setSpouseName(response.data.spouseName || '');
//           setSpouseDateOfBirth(response.data.spouseDateOfBirth || '');
//           setSpouseOccupation(response.data.spouseOccupation || '');
          
//           // Update localStorage with API data
//           const saveData = {
//             maritalStatus: response.data.maritalStatus || '1',
//             weddingDay: response.data.weddingDay || '',
//             spouseName: response.data.spouseName || '',
//             spouseDateOfBirth: response.data.spouseDateOfBirth || '',
//             spouseOccupation: response.data.spouseOccupation || '',
//           };
//           localStorage.setItem('spouseFormData', JSON.stringify(saveData));
//         }
//       } catch (err) {
//         console.log('No API data, using localStorage');
//       }
//     };
    
//     loadFromAPI();
//   }, [pId, token]);

//   const handleSaveAndNext = () => {
//     setIsSaving(true);
    
//     // Prepare data to save
//     const saveData = {
//       maritalStatus,
//       weddingDay,
//       spouseName,
//       spouseDateOfBirth,
//       spouseOccupation,
//     };
    
//     // SAVE TO LOCALSTORAGE
//     localStorage.setItem('spouseFormData', JSON.stringify(saveData));
//     console.log('Saved spouse to localStorage:', saveData);
    
//     // Try to save to API if available (optional)
//     if (pId && token) {
//       const configHeaders = { Authorization: `Bearer ${token}` };
//       axios.put(`${url}jrms/v1/partners/${pId}/spouseinfo`, saveData, { headers: configHeaders })
//         .then(() => console.log('Saved to API also'))
//         .catch(err => console.log('API save failed, but saved to localStorage'));
//     }
    
//     toast.success('Spouse information saved!');
//     setShowSuccess(true);
    
//     // GO TO CHILD PAGE
//     setTimeout(() => {
//       setShowSuccess(false);
//       router.push('/dashboard/user/profile?tab=child');
//     }, 500);
    
//     setIsSaving(false);
//   };

//   if (isLoading) {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <LocalizationProvider dateAdapter={AdapterMoment}>
//       <Box
//         className={poppins.className}
//         sx={{
//           pl: '5px',
//           pr: 0,
//           py: 3,
//           boxShadow: 'none',
//           background: 'transparent',
//           border: 'none',
//           fontFamily: fontStack,
//           '& *': {
//             fontFamily: `${fontStack} !important`,
//           },
//         }}
//       >
//         {/* Title with icon – only "Spouse" */}
//         <Box sx={{ mb: 2 }}>
//           <Typography sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
//             <AppsIcon />
//             <span style={{ color: 'black' }}>Spouse</span>
//           </Typography>
//           <Box
//             sx={{
//               width: '0%',
//               height: '2px',
//               backgroundColor: 'orange',
//               animation: 'expandWidth 0.5s ease forwards',
//               '@keyframes expandWidth': {
//                 from: { width: '0%' },
//                 to: { width: '8%' }
//               }
//             }}
//           />
//         </Box>

//         <Collapse in={showSuccess}>
//           <Alert severity="success" sx={{ mb: 2, bgcolor: '#4caf50', color: 'white' }}>
//             Spouse information saved! Redirecting to Child...
//           </Alert>
//         </Collapse>

//         {/* Flex layout: left 50%, right 45% */}
//         <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
//           {/* LEFT COLUMN – 50% width */}
//           <Box sx={{ width: '50%', color: 'grey' }}>
//             <FormControl>
//               <FormLabel sx={{ color: 'grey' }}>Marital Status (Fill up form for parent only)</FormLabel>
//               <RadioGroup
//                 row
//                 value={maritalStatus}
//                 onChange={(e) => setMaritalStatus(e.target.value)}
//               >
//                 <FormControlLabel value="0" control={<Radio />} label="Single" sx={{ color: 'grey' }} />
//                 <FormControlLabel value="1" control={<Radio />} label="Married" sx={{ color: 'grey' }} />
//               </RadioGroup>
//             </FormControl>
//           </Box>

//           {/* RIGHT COLUMN – 45% width, appears only when Married */}
//           {maritalStatus === '1' && (
//             <Box sx={{ width: '45%' }}>
//               <Stack spacing={3}>
//                 <Divider sx={{ color: 'grey' }}>
//                   <span style={{ color: 'black' }}>Spouse</span>
//                   <span style={{ color: 'black' }}> Detail</span>
//                 </Divider>

//                 {/* Wedding Date – calendar picker */}
//                 <DatePicker
//                   open={weddingPickerOpen}
//                   onOpen={() => setWeddingPickerOpen(true)}
//                   onClose={() => setWeddingPickerOpen(false)}
//                   label="Wedding Date"
//                   openTo="year"
//                   views={['year', 'month', 'day']}
//                   value={weddingDay ? moment(weddingDay, 'YYYY/MM/DD') : null}
//                   onChange={(newValue) => {
//                     if (newValue) {
//                       setWeddingDay(newValue.format('YYYY/MM/DD'));
//                     } else {
//                       setWeddingDay('');
//                     }
//                   }}
//                   slotProps={{
//                     textField: {
//                       fullWidth: true,
//                       InputLabelProps: { sx: { color: 'grey' } },
//                       sx: { '& .MuiInputLabel-root': { color: 'grey' } },
//                       InputProps: { readOnly: true },
//                       onClick: () => setWeddingPickerOpen(true),
//                     },
//                   }}
//                 />

//                 <TextField
//                   fullWidth
//                   label="Spouse name"
//                   value={spouseName}
//                   onChange={(e) => setSpouseName(e.target.value)}
//                   InputLabelProps={{ sx: { color: 'grey' } }}
//                   sx={{ '& .MuiInputLabel-root': { color: 'grey' } }}
//                 />

//                 {/* Spouse DOB – calendar picker */}
//                 <DatePicker
//                   open={spouseDOBPickerOpen}
//                   onOpen={() => setSpouseDOBPickerOpen(true)}
//                   onClose={() => setSpouseDOBPickerOpen(false)}
//                   label="Spouse DOB"
//                   openTo="year"
//                   views={['year', 'month', 'day']}
//                   value={spouseDateOfBirth ? moment(spouseDateOfBirth, 'YYYY/MM/DD') : null}
//                   onChange={(newValue) => {
//                     if (newValue) {
//                       setSpouseDateOfBirth(newValue.format('YYYY/MM/DD'));
//                     } else {
//                       setSpouseDateOfBirth('');
//                     }
//                   }}
//                   slotProps={{
//                     textField: {
//                       fullWidth: true,
//                       InputLabelProps: { sx: { color: 'grey' } },
//                       sx: { '& .MuiInputLabel-root': { color: 'grey' } },
//                       InputProps: { readOnly: true },
//                       onClick: () => setSpouseDOBPickerOpen(true),
//                     },
//                   }}
//                 />

//                 <FormControl fullWidth>
//                   <InputLabel sx={{ color: 'grey' }}>Spouse Occupation</InputLabel>
//                   <Select
//                     label="Spouse Occupation"
//                     value={spouseOccupation}
//                     onChange={(e) => setSpouseOccupation(e.target.value)}
//                     sx={{ color: 'grey' }}
//                   >
//                     {occupationList.map(option => (
//                       <MenuItem key={option._id} value={option.name}>{option.name}</MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//               </Stack>

//               {/* Next button */}
//               <Box sx={{ width: '20%', ml: 'auto', mt: 3 }}>
//                 <Button
//                   onClick={handleSaveAndNext}
//                   disabled={isSaving}
//                   sx={{
//                     bgcolor: '#d4a017',
//                     color: 'black',
//                     '&:hover': { bgcolor: '#b38600' },
//                     px: 3,
//                     py: 1,
//                     fontWeight: 'bold',
//                     display: 'block',
//                   }}
//                 >
//                   {isSaving ? <CircularProgress size={24} /> : 'Next'}
//                 </Button>
//               </Box>
//             </Box>
//           )}
//         </Box>
//       </Box>
//     </LocalizationProvider>
//   );
// }







// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import axios from "axios";
// import { toast } from 'react-toastify';
// import {
//   Stack, TextField, Divider, FormControl,
//   FormLabel, RadioGroup, FormControlLabel, Radio, Select, MenuItem, InputLabel,
//   Alert, Collapse, Box, Typography, Button, CircularProgress
// } from '@mui/material';
// import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
// import AppsIcon from '@mui/icons-material/Apps';
// import moment from 'moment';
// import { Poppins, Aclonica, Lato, Roboto } from 'next/font/google';
// import config from "@/partnerconfig.json";

// // Configure fonts
// const poppins = Poppins({
//   weight: ['300', '400', '500', '600', '700', '800'],
//   subsets: ['latin'],
//   display: 'swap',
// });

// const aclonica = Aclonica({
//   weight: ['400'],
//   subsets: ['latin'],
//   display: 'swap',
// });

// const lato = Lato({
//   weight: ['400', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// });

// const roboto = Roboto({
//   weight: ['400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// });

// const fontStack = `${poppins.style.fontFamily}, ${aclonica.style.fontFamily}, ${lato.style.fontFamily}, ${roboto.style.fontFamily}, sans-serif`;

// const occupationList = [
//   { _id: "1", name: "Student" }, 
//   { _id: "2", name: "Private Employee" },
//   { _id: "3", name: "Government Employee" }, 
//   { _id: "4", name: "Business" },
//   { _id: "5", name: "Homemaker" }, 
//   { _id: "6", name: "Self Employed" },
//   { _id: "7", name: "Reverend" }, 
//   { _id: "8", name: "Pastor" },
//   { _id: "9", name: "Others" }, 
//   { _id: "10", name: "Dont Want To Mention" }
// ];

// const url = config.jrmClientUrl;

// // Helper function to map occupation ID to name
// const mapOccupation = (apiValue) => {
//   if (!apiValue) return '';
//   // If it's already a name (like "Student")
//   const foundName = occupationList.find(o => o.name === apiValue);
//   if (foundName) return foundName.name;
//   // If it's an ID (like "1", "2", etc.)
//   const foundById = occupationList.find(o => o._id === String(apiValue));
//   return foundById ? foundById.name : '';
// };

// export default function SpouseForm() {
//   const router = useRouter();
//   const [pId, setPId] = useState(null);
//   const [token, setToken] = useState(null);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [weddingPickerOpen, setWeddingPickerOpen] = useState(false);
//   const [spouseDOBPickerOpen, setSpouseDOBPickerOpen] = useState(false);
//   const [isSaving, setIsSaving] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isDataLoaded, setIsDataLoaded] = useState(false);

//   const [maritalStatus, setMaritalStatus] = useState('1');
//   const [weddingDay, setWeddingDay] = useState('');
//   const [spouseName, setSpouseName] = useState('');
//   const [spouseDateOfBirth, setSpouseDateOfBirth] = useState('');
//   const [spouseOccupation, setSpouseOccupation] = useState('');

//   // Get pId and token on mount (only once)
//   useEffect(() => {
//     const partnerId = localStorage.getItem("partnerId");
//     const jwt = localStorage.getItem("jwt");
//     setPId(partnerId);
//     setToken(jwt);
//   }, []);

//   // LOAD DATA FROM LOCALSTORAGE IMMEDIATELY (even before pId/token)
//   useEffect(() => {
//     // First, immediately load from localStorage
//     const savedSpouseData = localStorage.getItem('spouseFormData');
//     if (savedSpouseData) {
//       const parsedData = JSON.parse(savedSpouseData);
//       console.log('Loading spouse from localStorage on mount:', parsedData);
      
//       setMaritalStatus(parsedData.maritalStatus || '1');
//       setWeddingDay(parsedData.weddingDay || '');
//       setSpouseName(parsedData.spouseName || '');
//       setSpouseDateOfBirth(parsedData.spouseDateOfBirth || '');
//       // Map occupation if it's an ID
//       setSpouseOccupation(mapOccupation(parsedData.spouseOccupation || ''));
//       setIsDataLoaded(true);
//     }
//     setIsLoading(false);
//   }, []); // ✅ Runs only once on mount, immediately loads from localStorage

//   // Load from API when pId and token are available (optional - to sync)
//   useEffect(() => {
//     if (!pId || !token) return;
    
//     const loadFromAPI = async () => {
//       try {
//         const configHeaders = { Authorization: `Bearer ${token}` };
//         const response = await axios.get(`${url}jrms/v1/partners/${pId}/spouseinfo`, { headers: configHeaders });
//         console.log('Fetched spouse from API:', response.data);
        
//         if (response.data && Object.keys(response.data).length > 0) {
//           setMaritalStatus(response.data.maritalStatus || '1');
//           setWeddingDay(response.data.weddingDay || '');
//           setSpouseName(response.data.spouseName || '');
//           setSpouseDateOfBirth(response.data.spouseDateOfBirth || '');
//           // Map occupation from API (could be ID or name)
//           setSpouseOccupation(mapOccupation(response.data.spouseOccupation || ''));
          
//           // Update localStorage with API data
//           const saveData = {
//             maritalStatus: response.data.maritalStatus || '1',
//             weddingDay: response.data.weddingDay || '',
//             spouseName: response.data.spouseName || '',
//             spouseDateOfBirth: response.data.spouseDateOfBirth || '',
//             spouseOccupation: mapOccupation(response.data.spouseOccupation || ''),
//           };
//           localStorage.setItem('spouseFormData', JSON.stringify(saveData));
//         }
//       } catch (err) {
//         console.log('No API data, using localStorage');
//       }
//     };
    
//     loadFromAPI();
//   }, [pId, token]);

//   const handleSaveAndNext = () => {
//     setIsSaving(true);
    
//     // Prepare data to save - Send the NAME to API, not the ID
//     const saveData = {
//       maritalStatus,
//       weddingDay,
//       spouseName,
//       spouseDateOfBirth,
//       spouseOccupation, // This will be the name (e.g., "Student", "Business")
//     };
    
//     // SAVE TO LOCALSTORAGE
//     localStorage.setItem('spouseFormData', JSON.stringify(saveData));
//     console.log('Saved spouse to localStorage:', saveData);
    
//     // Try to save to API if available
//     if (pId && token) {
//       const configHeaders = { Authorization: `Bearer ${token}` };
//       axios.put(`${url}jrms/v1/partners/${pId}/spouseinfo`, saveData, { headers: configHeaders })
//         .then(() => console.log('Saved to API also'))
//         .catch(err => console.log('API save failed, but saved to localStorage'));
//     }
    
//     toast.success('Spouse information saved!');
//     setShowSuccess(true);
    
//     // GO TO CHILD PAGE
//     setTimeout(() => {
//       setShowSuccess(false);
//       router.push('/dashboard/user/profile?tab=child');
//     }, 500);
    
//     setIsSaving(false);
//   };

//   if (isLoading) {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <LocalizationProvider dateAdapter={AdapterMoment}>
//       <Box
//         className={poppins.className}
//         sx={{
//           pl: '5px',
//           pr: 0,
//           py: 3,
//           boxShadow: 'none',
//           background: 'transparent',
//           border: 'none',
//           fontFamily: fontStack,
//           '& *': {
//             fontFamily: `${fontStack} !important`,
//           },
//         }}
//       >
//         {/* Title with icon – only "Spouse" */}
//         <Box sx={{ mb: 2 }}>
//           <Typography sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
//             <AppsIcon />
//             <span style={{ color: 'black' }}>Spouse</span>
//           </Typography>
//           <Box
//             sx={{
//               width: '0%',
//               height: '2px',
//               backgroundColor: 'orange',
//               animation: 'expandWidth 0.5s ease forwards',
//               '@keyframes expandWidth': {
//                 from: { width: '0%' },
//                 to: { width: '8%' }
//               }
//             }}
//           />
//         </Box>

//         <Collapse in={showSuccess}>
//           <Alert severity="success" sx={{ mb: 2, bgcolor: '#4caf50', color: 'white' }}>
//             Spouse information saved! Redirecting to Child...
//           </Alert>
//         </Collapse>

//         {/* Flex layout: left 50%, right 45% */}
//         <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
//           {/* LEFT COLUMN – 50% width */}
//           <Box sx={{ width: '50%', color: 'grey' }}>
//             <FormControl>
//               <FormLabel sx={{ color: 'grey' }}>Marital Status (Fill up form for parent only)</FormLabel>
//               <RadioGroup
//                 row
//                 value={maritalStatus}
//                 onChange={(e) => setMaritalStatus(e.target.value)}
//               >
//                 <FormControlLabel value="0" control={<Radio />} label="Single" sx={{ color: 'grey' }} />
//                 <FormControlLabel value="1" control={<Radio />} label="Married" sx={{ color: 'grey' }} />
//               </RadioGroup>
//             </FormControl>
//           </Box>

//           {/* RIGHT COLUMN – 45% width, appears only when Married */}
//           {maritalStatus === '1' && (
//             <Box sx={{ width: '45%' }}>
//               <Stack spacing={3}>
//                 <Divider sx={{ color: 'grey' }}>
//                   <span style={{ color: 'black' }}>Spouse</span>
//                   <span style={{ color: 'black' }}> Detail</span>
//                 </Divider>

//                 {/* Wedding Date – calendar picker */}
//                 <DatePicker
//                   open={weddingPickerOpen}
//                   onOpen={() => setWeddingPickerOpen(true)}
//                   onClose={() => setWeddingPickerOpen(false)}
//                   label="Wedding Date"
//                   openTo="year"
//                   views={['year', 'month', 'day']}
//                   value={weddingDay ? moment(weddingDay, 'YYYY/MM/DD') : null}
//                   onChange={(newValue) => {
//                     if (newValue) {
//                       setWeddingDay(newValue.format('YYYY/MM/DD'));
//                     } else {
//                       setWeddingDay('');
//                     }
//                   }}
//                   slotProps={{
//                     textField: {
//                       fullWidth: true,
//                       InputLabelProps: { sx: { color: 'grey' } },
//                       sx: { '& .MuiInputLabel-root': { color: 'grey' } },
//                       InputProps: { readOnly: true },
//                       onClick: () => setWeddingPickerOpen(true),
//                     },
//                   }}
//                 />

//                 <TextField
//                   fullWidth
//                   label="Spouse name"
//                   value={spouseName}
//                   onChange={(e) => setSpouseName(e.target.value)}
//                   InputLabelProps={{ sx: { color: 'grey' } }}
//                   sx={{ '& .MuiInputLabel-root': { color: 'grey' } }}
//                 />

//                 {/* Spouse DOB – calendar picker */}
//                 <DatePicker
//                   open={spouseDOBPickerOpen}
//                   onOpen={() => setSpouseDOBPickerOpen(true)}
//                   onClose={() => setSpouseDOBPickerOpen(false)}
//                   label="Spouse DOB"
//                   openTo="year"
//                   views={['year', 'month', 'day']}
//                   value={spouseDateOfBirth ? moment(spouseDateOfBirth, 'YYYY/MM/DD') : null}
//                   onChange={(newValue) => {
//                     if (newValue) {
//                       setSpouseDateOfBirth(newValue.format('YYYY/MM/DD'));
//                     } else {
//                       setSpouseDateOfBirth('');
//                     }
//                   }}
//                   slotProps={{
//                     textField: {
//                       fullWidth: true,
//                       InputLabelProps: { sx: { color: 'grey' } },
//                       sx: { '& .MuiInputLabel-root': { color: 'grey' } },
//                       InputProps: { readOnly: true },
//                       onClick: () => setSpouseDOBPickerOpen(true),
//                     },
//                   }}
//                 />

//                 <FormControl fullWidth>
//                   <InputLabel sx={{ color: 'grey' }}>Spouse Occupation</InputLabel>
//                   <Select
//                     label="Spouse Occupation"
//                     value={spouseOccupation}
//                     onChange={(e) => setSpouseOccupation(e.target.value)}
//                     sx={{ color: 'grey' }}
//                   >
//                     {occupationList.map(option => (
//                       <MenuItem key={option._id} value={option.name}>{option.name}</MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//               </Stack>

//               {/* Next button */}
//               <Box sx={{ width: '20%', ml: 'auto', mt: 3 }}>
//                 <Button
//                   onClick={handleSaveAndNext}
//                   disabled={isSaving}
//                   sx={{
//                     bgcolor: '#d4a017',
//                     color: 'black',
//                     '&:hover': { bgcolor: '#b38600' },
//                     px: 3,
//                     py: 1,
//                     fontWeight: 'bold',
//                     display: 'block',
//                   }}
//                 >
//                   {isSaving ? <CircularProgress size={24} /> : 'Next'}
//                 </Button>
//               </Box>
//             </Box>
//           )}
//         </Box>
//       </Box>
//     </LocalizationProvider>
//   );
// }











'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from "axios";
import { toast } from 'react-toastify';
import {
  Stack, TextField, Divider, FormControl,
  FormLabel, RadioGroup, FormControlLabel, Radio, Select, MenuItem, InputLabel,
  Alert, Collapse, Box, Typography, Button, CircularProgress
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
// import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import moment from 'moment';
import { Poppins, Aclonica, Lato, Roboto } from 'next/font/google';
import config from "@/partnerconfig.json";

// Configure fonts
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
});

const aclonica = Aclonica({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const fontStack = `${poppins.style.fontFamily}, ${aclonica.style.fontFamily}, ${lato.style.fontFamily}, ${roboto.style.fontFamily}, sans-serif`;

const occupationList = [
  { _id: "1", name: "Student" }, 
  { _id: "2", name: "Private Employee" },
  { _id: "3", name: "Government Employee" }, 
  { _id: "4", name: "Business" },
  { _id: "5", name: "Homemaker" }, 
  { _id: "6", name: "Self Employed" },
  { _id: "7", name: "Reverend" }, 
  { _id: "8", name: "Pastor" },
  { _id: "9", name: "Others" }, 
  { _id: "10", name: "Dont Want To Mention" }
];

const url = config.jrmClientUrl;

// Helper function to map occupation ID to name
const mapOccupation = (apiValue) => {
  if (!apiValue) return '';
  const foundName = occupationList.find(o => o.name === apiValue);
  if (foundName) return foundName.name;
  const foundById = occupationList.find(o => o._id === String(apiValue));
  return foundById ? foundById.name : '';
};

export default function SpouseForm() {
  const router = useRouter();
  const [pId, setPId] = useState(null);
  const [token, setToken] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [weddingPickerOpen, setWeddingPickerOpen] = useState(false);
  const [spouseDOBPickerOpen, setSpouseDOBPickerOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const [maritalStatus, setMaritalStatus] = useState('1');
  const [weddingDay, setWeddingDay] = useState('');
  const [spouseName, setSpouseName] = useState('');
  const [spouseDateOfBirth, setSpouseDateOfBirth] = useState('');
  const [spouseOccupation, setSpouseOccupation] = useState('');

  // Get pId and token on mount (only once)
  useEffect(() => {
    const partnerId = localStorage.getItem("partnerId");
    const jwt = localStorage.getItem("jwt");
    setPId(partnerId);
    setToken(jwt);
  }, []);

  // LOAD DATA FROM LOCALSTORAGE IMMEDIATELY
  useEffect(() => {
    const savedSpouseData = localStorage.getItem('spouseFormData');
    if (savedSpouseData) {
      const parsedData = JSON.parse(savedSpouseData);
      console.log('Loading spouse from localStorage on mount:', parsedData);
      
      setMaritalStatus(parsedData.maritalStatus || '1');
      setWeddingDay(parsedData.weddingDay || '');
      setSpouseName(parsedData.spouseName || '');
      setSpouseDateOfBirth(parsedData.spouseDateOfBirth || '');
      setSpouseOccupation(mapOccupation(parsedData.spouseOccupation || ''));
      setIsDataLoaded(true);
    }
    setIsLoading(false);
  }, []);

  // Load from API when pId and token are available
  useEffect(() => {
    if (!pId || !token) return;
    
    const loadFromAPI = async () => {
      try {
        const configHeaders = { Authorization: `Bearer ${token}` };
        const response = await axios.get(`${url}jrms/v1/partners/${pId}/spouseinfo`, { headers: configHeaders });
        console.log('Fetched spouse from API:', response.data);
        
        if (response.data && Object.keys(response.data).length > 0) {
          setMaritalStatus(response.data.maritalStatus || '1');
          setWeddingDay(response.data.weddingDay || '');
          setSpouseName(response.data.spouseName || '');
          setSpouseDateOfBirth(response.data.spouseDateOfBirth || '');
          setSpouseOccupation(mapOccupation(response.data.spouseOccupation || ''));
          
          const saveData = {
            maritalStatus: response.data.maritalStatus || '1',
            weddingDay: response.data.weddingDay || '',
            spouseName: response.data.spouseName || '',
            spouseDateOfBirth: response.data.spouseDateOfBirth || '',
            spouseOccupation: mapOccupation(response.data.spouseOccupation || ''),
          };
          localStorage.setItem('spouseFormData', JSON.stringify(saveData));
        }
      } catch (err) {
        console.log('No API data, using localStorage');
      }
    };
    
    loadFromAPI();
  }, [pId, token]);

  const handleSaveAndNext = () => {
    setIsSaving(true);
    
    const saveData = {
      maritalStatus,
      weddingDay,
      spouseName,
      spouseDateOfBirth,
      spouseOccupation,
    };
    
    localStorage.setItem('spouseFormData', JSON.stringify(saveData));
    console.log('Saved spouse to localStorage:', saveData);
    
    if (pId && token) {
      const configHeaders = { Authorization: `Bearer ${token}` };
      axios.put(`${url}jrms/v1/partners/${pId}/spouseinfo`, saveData, { headers: configHeaders })
        .then(() => console.log('Saved to API also'))
        .catch(err => console.log('API save failed, but saved to localStorage'));
    }
    
    toast.success('Spouse information saved!');
    setShowSuccess(true);
    
    setTimeout(() => {
      setShowSuccess(false);
      router.push('/dashboard/user/profile?tab=child');
    }, 500);
    
    setIsSaving(false);
  };

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Box
        className={poppins.className}
        sx={{
          pl: '5px',
          pr: 0,
          py: 3,
          boxShadow: 'none',
          background: 'transparent',
          border: 'none',
          fontFamily: fontStack,
          '& *': {
            fontFamily: `${fontStack} !important`,
          },
        }}
      >
        {/* Title with icon – only "Spouse" */}
        <Box sx={{ mb: 2 }}>
          <Typography sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1,fontSize:'1.1rem' }}>
            <AccountCircleIcon fontSize="medium" />
            <span style={{ color: 'black' }}>Spouse Info</span>
          </Typography>
          <Box
            sx={{
              width: '0%',
              height: '2px',
              // backgroundColor: 'orange',
              animation: 'expandWidth 0.5s ease forwards',
              // '@keyframes expandWidth': {
              //   from: { width: '0%' },
              //   to: { width: '10%' }
              // }
            }}
          />
        </Box>

        <Collapse in={showSuccess}>
          <Alert severity="success" sx={{ mb: 2, bgcolor: '#4caf50', color: 'white' }}>
            Spouse information saved! Redirecting to Child...
          </Alert>
        </Collapse>

        {/* All content now on the left */}
        <Box sx={{ width: '100%' }}>
          <Stack spacing={3} sx={{ maxWidth: '600px' }}>
            <Divider sx={{ color: 'grey' }}>
              <span style={{ color: 'black' }}>kindly Update your Spouse Info!</span>
              {/* <span style={{ color: 'black' }}> Details</span> */}
            </Divider>

            {/* Wedding Date – calendar picker */}
            <DatePicker
              open={weddingPickerOpen}
              onOpen={() => setWeddingPickerOpen(true)}
              onClose={() => setWeddingPickerOpen(false)}
              label="Wedding Date"
              openTo="year"
              views={['year', 'month', 'day']}
              value={weddingDay ? moment(weddingDay, 'YYYY/MM/DD') : null}
              onChange={(newValue) => {
                if (newValue) {
                  setWeddingDay(newValue.format('YYYY/MM/DD'));
                } else {
                  setWeddingDay('');
                }
              }}
              slotProps={{
                textField: {
                  fullWidth: true,
                  // InputLabelProps: { sx: { color: 'grey' } },
                  inputLabel: { sx: { color: 'grey' } },
                  sx: { '& .MuiInputLabel-root': { color: 'grey' } },
                  // InputProps: { readOnly: true },
                  input: { readOnly: true }, 
                  onClick: () => setWeddingPickerOpen(true),
                },
              }}
            />

            <TextField
              fullWidth
              label="Spouse name"
              value={spouseName}
              onChange={(e) => setSpouseName(e.target.value)}
              InputLabelProps={{ sx: { color: 'grey' } }}
              sx={{ '& .MuiInputLabel-root': { color: 'grey' } }}
            />

            {/* Spouse DOB – calendar picker */}
            <DatePicker
              open={spouseDOBPickerOpen}
              onOpen={() => setSpouseDOBPickerOpen(true)}
              onClose={() => setSpouseDOBPickerOpen(false)}
              label="Spouse DOB"
              openTo="year"
              views={['year', 'month', 'day']}
              value={spouseDateOfBirth ? moment(spouseDateOfBirth, 'YYYY/MM/DD') : null}
              onChange={(newValue) => {
                if (newValue) {
                  setSpouseDateOfBirth(newValue.format('YYYY/MM/DD'));
                } else {
                  setSpouseDateOfBirth('');
                }
              }}
              slotProps={{
                textField: {
                  fullWidth: true,
                  // InputLabelProps: { sx: { color: 'grey' } },
                inputLabel: { sx: { color: 'grey' } },  
                  sx: { '& .MuiInputLabel-root': { color: 'grey' } },
                  // InputProps: { readOnly: true },
                  input: { readOnly: true },  
                  onClick: () => setSpouseDOBPickerOpen(true),
                },
              }}
            />

            <FormControl fullWidth>
              <InputLabel sx={{ color: 'grey' }}>Spouse Occupation</InputLabel>
              <Select
                label="Spouse Occupation"
                value={spouseOccupation}
                onChange={(e) => setSpouseOccupation(e.target.value)}
                sx={{ color: 'grey' }}
              >
                {occupationList.map(option => (
                  <MenuItem key={option._id} value={option.name}>{option.name}</MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Next button - on the right side */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
              <Button
                onClick={handleSaveAndNext}
                disabled={isSaving}
                sx={{
                  bgcolor: '#d4a017',
                  color: 'black',
                  '&:hover': { bgcolor: '#b38600' },
                  px: 4,
                  py: 1,
                  fontWeight: 'bold',
                }}
              >
                {isSaving ? <CircularProgress size={24} /> : 'Next'}
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </LocalizationProvider>
  );
}