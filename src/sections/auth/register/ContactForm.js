// // 'use client';

// // import * as Yup from 'yup';
// // import { useState, useEffect } from 'react';
// // import { useRouter } from 'next/navigation';
// // import { useFormik, Form, FormikProvider } from 'formik';
// // import axios from 'axios';
// // import { toast } from 'react-toastify';
// // // @mui
// // import {
// //   Stack,
// //   TextField,
// //   Divider,
// //   FormControl,
// //   FormHelperText,
// //   Autocomplete,
// //   MenuItem,
// //   Select,
// //   InputLabel,
// //   Alert,
// //   Collapse,
// //   Box,
// //   Typography,
// //   Button,
// // } from '@mui/material';
// // import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
// // import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
// // import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// // import moment from 'moment';
// // import { Poppins, Aclonica, Lato, Roboto } from 'next/font/google';   // new font import

// // import { getDistrictsData, getCitiesData } from '../../../services/JRMLookupService';
// // import config from '../../../partnerconfig.json';

// // const url = config.jrmClientUrl;

// // // Configure new font stack
// // const poppins = Poppins({
// //   weight: ['300', '400', '500', '600', '700', '800'],
// //   subsets: ['latin'],
// //   display: 'swap',
// // });

// // const aclonica = Aclonica({
// //   weight: ['400'],
// //   subsets: ['latin'],
// //   display: 'swap',
// // });

// // const lato = Lato({
// //   weight: ['400', '700'],
// //   subsets: ['latin'],
// //   display: 'swap',
// // });

// // const roboto = Roboto({
// //   weight: ['400', '500', '700'],
// //   subsets: ['latin'],
// //   display: 'swap',
// // });

// // // Combined font stack – Poppins first, then fallbacks
// // const fontStack = `${poppins.style.fontFamily}, ${aclonica.style.fontFamily}, ${lato.style.fontFamily}, ${roboto.style.fontFamily}, sans-serif`;

// // // ============================================================
// // // CONSTANTS (lists)
// // // ============================================================
// // const titleList = [
// //   { _id: '1', name: 'Bro.' },
// //   { _id: '2', name: 'Sis.' },
// //   { _id: '3', name: 'Mr.' },
// //   { _id: '4', name: 'Mrs.' },
// //   { _id: '5', name: 'Dr.' },
// //   { _id: '6', name: 'Rev.' },
// //   { _id: '7', name: 'Pastor.' },
// // ];

// // const occupationList = [
// //   { _id: '1', name: 'Student' },
// //   { _id: '2', name: 'Private Employee' },
// //   { _id: '3', name: 'Government Employee' },
// //   { _id: '4', name: 'Business' },
// //   { _id: '5', name: 'Homemaker' },
// //   { _id: '6', name: 'Self Employed' },
// //   { _id: '7', name: 'Reverend' },
// //   { _id: '8', name: 'Pastor' },
// //   { _id: '9', name: 'Others' },
// //   { _id: '10', name: 'Dont Want To Mention' },
// // ];

// // const genderList = [
// //   { _id: '1', name: 'Male' },
// //   { _id: '2', name: 'Female' },
// // ];

// // const countryList = [
// //   { _id: '1', name: 'India' },
// //   { _id: '2', name: 'United States' },
// //   { _id: '3', name: 'United Kingdom' },
// //   { _id: '4', name: 'Canada' },
// //   { _id: '5', name: 'Australia' },
// //   { _id: '6', name: 'Germany' },
// //   { _id: '7', name: 'France' },
// //   { _id: '8', name: 'Singapore' },
// //   { _id: '9', name: 'UAE' },
// //   { _id: '10', name: 'Other' },
// // ];

// // // ============================================================
// // // COMPONENT
// // // ============================================================
// // export default function ContactForm() {
// //   const router = useRouter();

// //   const [isClient, setIsClient] = useState(false);
// //   const [pId, setPId] = useState(null);
// //   const [token, setToken] = useState(null);
// //   const [userdata, setUserdata] = useState([]);
// //   const [getCity, setCity] = useState([]);
// //   const [districtdata, setDistrictdata] = useState([]);
// //   const [getCountry, setGetCountry] = useState('');
// //   const [stateList, setStateList] = useState([]);
// //   const [showSuccess, setShowSuccess] = useState(false);
// //   const [datePickerOpen, setDatePickerOpen] = useState(false);

// //   useEffect(() => {
// //     setIsClient(true);
// //     setPId(localStorage.getItem('partnerId'));
// //     setToken(localStorage.getItem('jwt'));
// //   }, []);

// //   const configHeaders = token ? { Authorization: `Bearer ${token}` } : {};

// //   const userData = async () => {
// //     if (!pId || !token) return;
// //     try {
// //       const response = await axios.get(`${url}jrms/v1/partners/${pId}/contactinfo`, { headers: configHeaders });
// //       setUserdata(response.data);
// //       setGetCountry(response.data.country);
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   useEffect(() => {
// //     if (pId && token) userData();
// //   }, [pId, token]);

// //   useEffect(() => {
// //     if (getCountry) getStateList();
// //   }, [getCountry]);

// //   const getStateList = async () => {
// //     try {
// //       const response = await axios.get(`${url}jrms/v1/lookup/states?country=${getCountry}`);
// //       setStateList(response.data.stateList || []);
// //     } catch (err) {
// //       console.log(err);
// //       setStateList([]);
// //     }
// //   };

// //   const handleStateChange = async (event) => {
// //     const selectedState = event.target.value;
// //     formik.setFieldValue('stateInAddress', selectedState);
// //     formik.setFieldValue('district', '');
// //     formik.setFieldValue('city', '');

// //     if (!selectedState) {
// //       setDistrictdata([]);
// //       setCity([]);
// //       return;
// //     }

// //     try {
// //       const dist = await getDistrictsData(getCountry, selectedState);
// //       const districts = dist.data?.districtList?.filter((d, i, ar) => d !== "''" && d !== null && ar.indexOf(d) === i) || [];
// //       setDistrictdata(districts);

// //       const city = await getCitiesData(getCountry, selectedState);
// //       const cities = city.data?.cityList?.filter((c, i, ar) => c !== '' && c !== null && ar.indexOf(c) === i) || [];
// //       setCity(cities);
// //     } catch (err) {
// //       console.log(err);
// //       setDistrictdata([]);
// //       setCity([]);
// //     }
// //   };

// //   const RegisterSchema = Yup.object().shape({
// //     title: Yup.string().required('Title is required').nullable(),
// //     fullName: Yup.string()
// //       .min(3, 'Name is too short!')
// //       .max(28, 'Name is too long!')
// //       .required('Name required')
// //       .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field'),
// //     selectedGender: Yup.string().required('Gender is required'),
// //     dateOfBirth: Yup.mixed()
// //       .nullable()
// //       .test('dateOfBirth', 'You must be 18 years or older', (value) => {
// //         if (!value || !moment.isMoment(value)) return false;
// //         return moment().diff(value, 'years') >= 18;
// //       })
// //       .required('DOB is required'),
// //     occupation: Yup.string().required('Occupation is required'),
// //     whatsAppNumber: Yup.mixed()
// //       .required('WhatsApp number is required')
// //       .test('is-valid-whatsapp', 'Invalid WhatsApp number', function (value) {
// //         const country = this.parent.country;
// //         if (!value) return false;
// //         const num = Number(value);
// //         if (isNaN(num)) return false;
// //         if (country === 'India') {
// //           return num >= 6001000000 && num <= 9999000000;
// //         } else {
// //           return num > 0 && num >= 1000 && num <= 999999999999999;
// //         }
// //       }),
// //     country: Yup.string().required('Country is required').nullable(),
// //     address1: Yup.string().nullable(),
// //     address2: Yup.string().nullable(),
// //     stateInAddress: Yup.string().required('State is required').nullable(),
// //     district: Yup.string()
// //       .nullable()
// //       .test('district-required', 'District is required for India', function (value) {
// //         const country = this.parent.country;
// //         if (country === 'India') {
// //           return !!value && value.length <= 50;
// //         }
// //         return true;
// //       }),
// //     city: Yup.string()
// //       .min(3, 'City name must be at least 3 characters')
// //       .max(30, 'City name must be at most 30 characters')
// //       .required('City name is required')
// //       .typeError('City must be a string'),
// //     pincode: Yup.mixed()
// //       .required('Pincode/Zipcode is required')
// //       .test('is-valid-pincode', 'Invalid pincode/zipcode', function (value) {
// //         const country = this.parent.country;
// //         if (!value) return false;
// //         if (country === 'India') {
// //           const num = Number(value);
// //           return !isNaN(num) && num >= 110000 && num <= 859999;
// //         } else {
// //           return typeof value === 'string' && /^[A-Z0-9-]*$/.test(value) && value.length >= 4 && value.length <= 10;
// //         }
// //       }),
// //   });

// //   const formik = useFormik({
// //     enableReinitialize: true,
// //     initialValues: {
// //       title: userdata.title || '',
// //       fullName: userdata.fullName || '',
// //       selectedGender: userdata.gender || '',
// //       dateOfBirth: userdata.dateOfBirth ? moment(userdata.dateOfBirth, 'YYYY/MM/DD') : null,
// //       occupation: userdata.occupation || '',
// //       address1: userdata.address1 || '',
// //       address2: userdata.address2 || '',
// //       pincode: userdata.pincode || '',
// //       stateInAddress: userdata.stateInAddress || '',
// //       district: userdata.district || '',
// //       city: userdata.city || '',
// //       country: userdata.country || '',
// //       whatsAppNumber: userdata.whatsAppNumber || '',
// //     },
// //     validationSchema: RegisterSchema,
// //     onSubmit: async (contactInfo) => {
// //       setShowSuccess(true);
// //       setTimeout(() => {
// //         setShowSuccess(false);
// //         router.push('/dashboard/user/profile?tab=spouse');
// //       }, 1000);
// //     },
// //   });

// //   const { errors, touched, isSubmitting, handleSubmit, getFieldProps, setFieldValue } = formik;

// //   if (!isClient) return null;

// //   return (
// //     <LocalizationProvider dateAdapter={AdapterMoment}>
// //       <FormikProvider value={formik}>
// //         <Form noValidate onSubmit={handleSubmit}>
// //           <Box
// //             className={poppins.className}     // changed from plusJakartaSans
// //             sx={{
// //               width: '100%',
// //               minHeight: '100vh',
// //               pl: '5px',
// //               pr: '60px',
// //               py: 4,
// //               bgcolor: 'background.paper',
// //               boxSizing: 'border-box',
// //               fontFamily: fontStack,
// //               '& *': {
// //                 fontFamily: `${fontStack} !important`,
// //               },
// //             }}
// //           >
// //             {/* Title with smaller icon */}
// //             <Box sx={{ mb: 3 }}>
// //               <Typography sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
// //                 <AccountCircleIcon fontSize="medium" />
// //                 <span>Profile</span>
// //               </Typography>
// //               <Box
// //                 sx={{
// //                   width: '0%',
// //                   height: '1px',
// //                   backgroundColor: 'orange',
// //                   animation: 'expandWidth 0.5s ease forwards',
// //                   '@keyframes expandWidth': {
// //                     from: { width: '0%' },
// //                     to: { width: '7%' },
// //                   },
// //                 }}
// //               />
// //             </Box>

// //             <Collapse in={showSuccess}>
// //               <Alert severity="success" sx={{ mb: 3, bgcolor: '#4caf50', color: 'white', fontSize: '1rem' }}>
// //                 Contact information updated successfully
// //               </Alert>
// //             </Collapse>

// //             {/* Two column grid – unchanged */}
// //             <Box
// //               sx={{
// //                 display: 'grid',
// //                 gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
// //                 gap: { xs: 3, md: 4 },
// //                 pr: 1,
// //               }}
// //             >
// //               {/* LEFT COLUMN – same as original */}
// //               <Stack spacing={4}>
// //                 <Divider sx={{ fontSize: '1rem' }}>
// //                   Dear Parent/Guardian, <br /> please update your contact info!
// //                 </Divider>

// //                 <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
// //                   <FormControl size="large" sx={{ width: '20%' }}>
// //                     <Select
// //                       size="large"
// //                       label="Title"
// //                       value={formik.values.title}
// //                       onChange={(e) => setFieldValue('title', e.target.value)}
// //                       displayEmpty
// //                     >
// //                       {titleList.map((option) => (
// //                         <MenuItem key={option._id} value={option.name}>
// //                           {option.name}
// //                         </MenuItem>
// //                       ))}
// //                     </Select>
// //                     <InputLabel error={touched.title && errors.title}>Title</InputLabel>
// //                     <FormHelperText error>{touched.title && errors.title}</FormHelperText>
// //                   </FormControl>

// //                   <TextField
// //                     size="large"
// //                     label="Full name"
// //                     sx={{ flex: 1 }}
// //                     {...getFieldProps('fullName')}
// //                     error={Boolean(touched.fullName && errors.fullName)}
// //                     helperText={touched.fullName && errors.fullName}
// //                   />
// //                 </Stack>

// //                 <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
// //                   <FormControl fullWidth size="large">
// //                     <Select
// //                       size="large"
// //                       label="Gender"
// //                       value={formik.values.selectedGender}
// //                       onChange={(e) => setFieldValue('selectedGender', e.target.value)}
// //                     >
// //                       {genderList.map((option) => (
// //                         <MenuItem key={option._id} value={option.name}>
// //                           {option.name}
// //                         </MenuItem>
// //                       ))}
// //                     </Select>
// //                     <InputLabel error={touched.selectedGender && errors.selectedGender}>Gender</InputLabel>
// //                     <FormHelperText error>{touched.selectedGender && errors.selectedGender}</FormHelperText>
// //                   </FormControl>

// //                   <FormControl fullWidth size="large">
// //                     <DatePicker
// //                       open={datePickerOpen}
// //                       onOpen={() => setDatePickerOpen(true)}
// //                       onClose={() => setDatePickerOpen(false)}
// //                       label="Date of Birth"
// //                       disableFuture
// //                       minDate={moment('1930-01-01')}
// //                       maxDate={moment('2002-12-31')}
// //                       openTo="year"
// //                       views={['year', 'month', 'day']}
// //                       value={formik.values.dateOfBirth}
// //                       onChange={(newValue) => setFieldValue('dateOfBirth', newValue)}
// //                       slotProps={{
// //                         textField: {
// //                           size: 'large',
// //                           fullWidth: true,
// //                           error: Boolean(touched.dateOfBirth && errors.dateOfBirth),
// //                           helperText: touched.dateOfBirth && errors.dateOfBirth,
// //                           InputProps: { readOnly: true },
// //                           onClick: () => setDatePickerOpen(true),
// //                         },
// //                       }}
// //                     />
// //                   </FormControl>
// //                 </Stack>

// //                 <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
// //                   <FormControl fullWidth size="large">
// //                     <Select
// //                       size="large"
// //                       label="Occupation"
// //                       value={formik.values.occupation}
// //                       onChange={(e) => setFieldValue('occupation', e.target.value)}
// //                     >
// //                       {occupationList.map((option) => (
// //                         <MenuItem key={option._id} value={option.name}>
// //                           {option.name}
// //                         </MenuItem>
// //                       ))}
// //                     </Select>
// //                     <InputLabel error={touched.occupation && errors.occupation}>Occupation</InputLabel>
// //                     <FormHelperText error>{touched.occupation && errors.occupation}</FormHelperText>
// //                   </FormControl>

// //                   <TextField
// //                     fullWidth
// //                     size="large"
// //                     type="number"
// //                     label="WhatsApp"
// //                     {...getFieldProps('whatsAppNumber')}
// //                     error={Boolean(touched.whatsAppNumber && errors.whatsAppNumber)}
// //                     helperText={touched.whatsAppNumber && errors.whatsAppNumber}
// //                   />
// //                 </Stack>
// //               </Stack>

// //               {/* RIGHT COLUMN – unchanged */}
// //               <Stack spacing={4}>
// //                 <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
// //                   <FormControl fullWidth size="large">
// //                     <Select
// //                       size="large"
// //                       label="Country"
// //                       value={formik.values.country}
// //                       onChange={(e) => {
// //                         const newCountry = e.target.value;
// //                         setFieldValue('country', newCountry);
// //                         setGetCountry(newCountry);
// //                         setFieldValue('stateInAddress', '');
// //                         setFieldValue('district', '');
// //                         setFieldValue('city', '');
// //                         setStateList([]);
// //                         setDistrictdata([]);
// //                         setCity([]);
// //                       }}
// //                     >
// //                       {countryList.map((option) => (
// //                         <MenuItem key={option._id} value={option.name}>
// //                           {option.name}
// //                         </MenuItem>
// //                       ))}
// //                     </Select>
// //                     <InputLabel error={touched.country && errors.country}>Country</InputLabel>
// //                     <FormHelperText error>{touched.country && errors.country}</FormHelperText>
// //                   </FormControl>

// //                   <FormControl fullWidth size="large">
// //                     <Select
// //                       size="large"
// //                       label="State"
// //                       value={formik.values.stateInAddress}
// //                       onChange={handleStateChange}
// //                       disabled={!formik.values.country}
// //                     >
// //                       {stateList.map((state) => (
// //                         <MenuItem key={state} value={state}>
// //                           {state}
// //                         </MenuItem>
// //                       ))}
// //                     </Select>
// //                     <InputLabel error={touched.stateInAddress && errors.stateInAddress}>State</InputLabel>
// //                     <FormHelperText error>{touched.stateInAddress && errors.stateInAddress}</FormHelperText>
// //                   </FormControl>
// //                 </Stack>

// //                 <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
// //                   {formik.values.country === 'India' && (
// //                     <FormControl fullWidth size="large">
// //                       <Autocomplete
// //                         value={formik.values.district}
// //                         onChange={(event, newValue) => setFieldValue('district', newValue)}
// //                         options={districtdata}
// //                         getOptionLabel={(option) => option || ''}
// //                         isOptionEqualToValue={(option, val) => option === val}
// //                         renderInput={(params) => (
// //                           <TextField
// //                             {...params}
// //                             size="large"
// //                             label="District"
// //                             error={Boolean(touched.district && errors.district)}
// //                             helperText={touched.district && errors.district}
// //                           />
// //                         )}
// //                       />
// //                     </FormControl>
// //                   )}
// //                   <TextField
// //                     fullWidth
// //                     size="large"
// //                     label="Pin/Zip code"
// //                     {...getFieldProps('pincode')}
// //                     error={Boolean(touched.pincode && errors.pincode)}
// //                     helperText={touched.pincode && errors.pincode}
// //                   />
// //                 </Stack>

// //                 <Divider />

// //                 <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
// //                   <TextField
// //                     fullWidth
// //                     size="large"
// //                     label="Address Line 1"
// //                     placeholder="door no, street name"
// //                     {...getFieldProps('address1')}
// //                     error={Boolean(touched.address1 && errors.address1)}
// //                     helperText={touched.address1 && errors.address1}
// //                   />
// //                   <TextField
// //                     fullWidth
// //                     size="large"
// //                     label="Address Line 2"
// //                     placeholder="Area"
// //                     {...getFieldProps('address2')}
// //                     error={Boolean(touched.address2 && errors.address2)}
// //                     helperText={touched.address2 && errors.address2}
// //                   />
// //                 </Stack>

// //                 <Autocomplete
// //                   freeSolo
// //                   size="large"
// //                   value={formik.values.city}
// //                   onChange={(event, newValue) => setFieldValue('city', newValue)}
// //                   options={getCity}
// //                   getOptionLabel={(option) => option || ''}
// //                   renderInput={(params) => (
// //                     <TextField
// //                       {...params}
// //                       size="large"
// //                       label="City"
// //                       error={Boolean(touched.city && errors.city)}
// //                       helperText={touched.city && errors.city}
// //                     />
// //                   )}
// //                 />
// //               </Stack>
// //             </Box>

// //             {/* Next Button */}
// //             <Box sx={{ width: '20%', ml: 'auto', mt: 5 }}>
// //               <Button
// //                 type="submit"
// //                 variant="contained"
// //                 sx={{
// //                   bgcolor: '#d4a017',
// //                   color: 'black',
// //                   '&:hover': { bgcolor: '#b38600' },
// //                   px: 3,
// //                   py: 1,
// //                   fontWeight: 'bold',
// //                   display: 'block',
// //                 }}
// //               >
// //                 Next
// //               </Button>
// //             </Box>
// //           </Box>
// //         </Form>
// //       </FormikProvider>
// //     </LocalizationProvider>
// //   );
// // }








// 'use client';

// import * as Yup from 'yup';
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { useFormik, Form, FormikProvider } from 'formik';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// // @mui
// import {
//   Stack,
//   TextField,
//   Divider,
//   FormControl,
//   FormHelperText,
//   Autocomplete,
//   MenuItem,
//   Select,
//   InputLabel,
//   Alert,
//   Collapse,
//   Box,
//   Typography,
//   Button,
// } from '@mui/material';
// import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import moment from 'moment';
// import { Poppins, Aclonica, Lato, Roboto } from 'next/font/google';

// import { getDistrictsData, getCitiesData } from '../../../services/JRMLookupService';
// import config from '../../../partnerconfig.json';

// const url = config.jrmClientUrl;

// // Font stack
// const poppins = Poppins({
//   weight: ['300', '400', '500', '600', '700', '800'],
//   subsets: ['latin'],
//   display: 'swap',
// });
// const aclonica = Aclonica({ weight: ['400'], subsets: ['latin'], display: 'swap' });
// const lato = Lato({ weight: ['400', '700'], subsets: ['latin'], display: 'swap' });
// const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'], display: 'swap' });
// const fontStack = `${poppins.style.fontFamily}, ${aclonica.style.fontFamily}, ${lato.style.fontFamily}, ${roboto.style.fontFamily}, sans-serif`;

// // Lists
// const titleList = [
//   { _id: '1', name: 'Bro.' },
//   { _id: '2', name: 'Sis.' },
//   { _id: '3', name: 'Mr.' },
//   { _id: '4', name: 'Mrs.' },
//   { _id: '5', name: 'Dr.' },
//   { _id: '6', name: 'Rev.' },
//   { _id: '7', name: 'Pastor.' },
// ];

// const occupationList = [
//   { _id: '1', name: 'Student' },
//   { _id: '2', name: 'Private Employee' },
//   { _id: '3', name: 'Government Employee' },
//   { _id: '4', name: 'Business' },
//   { _id: '5', name: 'Homemaker' },
//   { _id: '6', name: 'Self Employed' },
//   { _id: '7', name: 'Reverend' },
//   { _id: '8', name: 'Pastor' },
//   { _id: '9', name: 'Others' },
//   { _id: '10', name: 'Dont Want To Mention' },
// ];

// const genderList = [
//   { _id: '1', name: 'Male' },
//   { _id: '2', name: 'Female' },
// ];

// // Replace the countryList constant with this:

// const countryList = [
//   { _id: '1', name: 'Afghanistan' },
//   { _id: '2', name: 'Albania' },
//   { _id: '3', name: 'Algeria' },
//   { _id: '4', name: 'Andorra' },
//   { _id: '5', name: 'Angola' },
//   { _id: '6', name: 'Antigua and Barbuda' },
//   { _id: '7', name: 'Argentina' },
//   { _id: '8', name: 'Armenia' },
//   { _id: '9', name: 'Australia' },
//   { _id: '10', name: 'Austria' },
//   { _id: '11', name: 'Azerbaijan' },
//   { _id: '12', name: 'Bahamas' },
//   { _id: '13', name: 'Bahrain' },
//   { _id: '14', name: 'Bangladesh' },
//   { _id: '15', name: 'Barbados' },
//   { _id: '16', name: 'Belarus' },
//   { _id: '17', name: 'Belgium' },
//   { _id: '18', name: 'Belize' },
//   { _id: '19', name: 'Benin' },
//   { _id: '20', name: 'Bhutan' },
//   { _id: '21', name: 'Bolivia' },
//   { _id: '22', name: 'Bosnia and Herzegovina' },
//   { _id: '23', name: 'Botswana' },
//   { _id: '24', name: 'Brazil' },
//   { _id: '25', name: 'Brunei' },
//   { _id: '26', name: 'Bulgaria' },
//   { _id: '27', name: 'Burkina Faso' },
//   { _id: '28', name: 'Burundi' },
//   { _id: '29', name: 'Cabo Verde' },
//   { _id: '30', name: 'Cambodia' },
//   { _id: '31', name: 'Cameroon' },
//   { _id: '32', name: 'Canada' },
//   { _id: '33', name: 'Central African Republic' },
//   { _id: '34', name: 'Chad' },
//   { _id: '35', name: 'Chile' },
//   { _id: '36', name: 'China' },
//   { _id: '37', name: 'Colombia' },
//   { _id: '38', name: 'Comoros' },
//   { _id: '39', name: 'Congo' },
//   { _id: '40', name: 'Costa Rica' },
//   { _id: '41', name: 'Croatia' },
//   { _id: '42', name: 'Cuba' },
//   { _id: '43', name: 'Cyprus' },
//   { _id: '44', name: 'Czech Republic' },
//   { _id: '45', name: 'Denmark' },
//   { _id: '46', name: 'Djibouti' },
//   { _id: '47', name: 'Dominica' },
//   { _id: '48', name: 'Dominican Republic' },
//   { _id: '49', name: 'Ecuador' },
//   { _id: '50', name: 'Egypt' },
//   { _id: '51', name: 'El Salvador' },
//   { _id: '52', name: 'Equatorial Guinea' },
//   { _id: '53', name: 'Eritrea' },
//   { _id: '54', name: 'Estonia' },
//   { _id: '55', name: 'Eswatini' },
//   { _id: '56', name: 'Ethiopia' },
//   { _id: '57', name: 'Fiji' },
//   { _id: '58', name: 'Finland' },
//   { _id: '59', name: 'France' },
//   { _id: '60', name: 'Gabon' },
//   { _id: '61', name: 'Gambia' },
//   { _id: '62', name: 'Georgia' },
//   { _id: '63', name: 'Germany' },
//   { _id: '64', name: 'Ghana' },
//   { _id: '65', name: 'Greece' },
//   { _id: '66', name: 'Grenada' },
//   { _id: '67', name: 'Guatemala' },
//   { _id: '68', name: 'Guinea' },
//   { _id: '69', name: 'Guinea-Bissau' },
//   { _id: '70', name: 'Guyana' },
//   { _id: '71', name: 'Haiti' },
//   { _id: '72', name: 'Honduras' },
//   { _id: '73', name: 'Hungary' },
//   { _id: '74', name: 'Iceland' },
//   { _id: '75', name: 'India' },
//   { _id: '76', name: 'Indonesia' },
//   { _id: '77', name: 'Iran' },
//   { _id: '78', name: 'Iraq' },
//   { _id: '79', name: 'Ireland' },
//   { _id: '80', name: 'Israel' },
//   { _id: '81', name: 'Italy' },
//   { _id: '82', name: 'Jamaica' },
//   { _id: '83', name: 'Japan' },
//   { _id: '84', name: 'Jordan' },
//   { _id: '85', name: 'Kazakhstan' },
//   { _id: '86', name: 'Kenya' },
//   { _id: '87', name: 'Kiribati' },
//   { _id: '88', name: 'Korea, North' },
//   { _id: '89', name: 'Korea, South' },
//   { _id: '90', name: 'Kosovo' },
//   { _id: '91', name: 'Kuwait' },
//   { _id: '92', name: 'Kyrgyzstan' },
//   { _id: '93', name: 'Laos' },
//   { _id: '94', name: 'Latvia' },
//   { _id: '95', name: 'Lebanon' },
//   { _id: '96', name: 'Lesotho' },
//   { _id: '97', name: 'Liberia' },
//   { _id: '98', name: 'Libya' },
//   { _id: '99', name: 'Liechtenstein' },
//   { _id: '100', name: 'Lithuania' },
//   { _id: '101', name: 'Luxembourg' },
//   { _id: '102', name: 'Madagascar' },
//   { _id: '103', name: 'Malawi' },
//   { _id: '104', name: 'Malaysia' },
//   { _id: '105', name: 'Maldives' },
//   { _id: '106', name: 'Mali' },
//   { _id: '107', name: 'Malta' },
//   { _id: '108', name: 'Marshall Islands' },
//   { _id: '109', name: 'Mauritania' },
//   { _id: '110', name: 'Mauritius' },
//   { _id: '111', name: 'Mexico' },
//   { _id: '112', name: 'Micronesia' },
//   { _id: '113', name: 'Moldova' },
//   { _id: '114', name: 'Monaco' },
//   { _id: '115', name: 'Mongolia' },
//   { _id: '116', name: 'Montenegro' },
//   { _id: '117', name: 'Morocco' },
//   { _id: '118', name: 'Mozambique' },
//   { _id: '119', name: 'Myanmar' },
//   { _id: '120', name: 'Namibia' },
//   { _id: '121', name: 'Nauru' },
//   { _id: '122', name: 'Nepal' },
//   { _id: '123', name: 'Netherlands' },
//   { _id: '124', name: 'New Zealand' },
//   { _id: '125', name: 'Nicaragua' },
//   { _id: '126', name: 'Niger' },
//   { _id: '127', name: 'Nigeria' },
//   { _id: '128', name: 'North Macedonia' },
//   { _id: '129', name: 'Norway' },
//   { _id: '130', name: 'Oman' },
//   { _id: '131', name: 'Pakistan' },
//   { _id: '132', name: 'Palau' },
//   { _id: '133', name: 'Palestine' },
//   { _id: '134', name: 'Panama' },
//   { _id: '135', name: 'Papua New Guinea' },
//   { _id: '136', name: 'Paraguay' },
//   { _id: '137', name: 'Peru' },
//   { _id: '138', name: 'Philippines' },
//   { _id: '139', name: 'Poland' },
//   { _id: '140', name: 'Portugal' },
//   { _id: '141', name: 'Qatar' },
//   { _id: '142', name: 'Romania' },
//   { _id: '143', name: 'Russia' },
//   { _id: '144', name: 'Rwanda' },
//   { _id: '145', name: 'Saint Kitts and Nevis' },
//   { _id: '146', name: 'Saint Lucia' },
//   { _id: '147', name: 'Saint Vincent and the Grenadines' },
//   { _id: '148', name: 'Samoa' },
//   { _id: '149', name: 'San Marino' },
//   { _id: '150', name: 'Sao Tome and Principe' },
//   { _id: '151', name: 'Saudi Arabia' },
//   { _id: '152', name: 'Senegal' },
//   { _id: '153', name: 'Serbia' },
//   { _id: '154', name: 'Seychelles' },
//   { _id: '155', name: 'Sierra Leone' },
//   { _id: '156', name: 'Singapore' },
//   { _id: '157', name: 'Slovakia' },
//   { _id: '158', name: 'Slovenia' },
//   { _id: '159', name: 'Solomon Islands' },
//   { _id: '160', name: 'Somalia' },
//   { _id: '161', name: 'South Africa' },
//   { _id: '162', name: 'South Sudan' },
//   { _id: '163', name: 'Spain' },
//   { _id: '164', name: 'Sri Lanka' },
//   { _id: '165', name: 'Sudan' },
//   { _id: '166', name: 'Suriname' },
//   { _id: '167', name: 'Sweden' },
//   { _id: '168', name: 'Switzerland' },
//   { _id: '169', name: 'Syria' },
//   { _id: '170', name: 'Taiwan' },
//   { _id: '171', name: 'Tajikistan' },
//   { _id: '172', name: 'Tanzania' },
//   { _id: '173', name: 'Thailand' },
//   { _id: '174', name: 'Timor-Leste' },
//   { _id: '175', name: 'Togo' },
//   { _id: '176', name: 'Tonga' },
//   { _id: '177', name: 'Trinidad and Tobago' },
//   { _id: '178', name: 'Tunisia' },
//   { _id: '179', name: 'Turkey' },
//   { _id: '180', name: 'Turkmenistan' },
//   { _id: '181', name: 'Tuvalu' },
//   { _id: '182', name: 'Uganda' },
//   { _id: '183', name: 'Ukraine' },
//   { _id: '184', name: 'United Arab Emirates' },
//   { _id: '185', name: 'United Kingdom' },
//   { _id: '186', name: 'United States' },
//   { _id: '187', name: 'Uruguay' },
//   { _id: '188', name: 'Uzbekistan' },
//   { _id: '189', name: 'Vanuatu' },
//   { _id: '190', name: 'Vatican City' },
//   { _id: '191', name: 'Venezuela' },
//   { _id: '192', name: 'Vietnam' },
//   { _id: '193', name: 'Yemen' },
//   { _id: '194', name: 'Zambia' },
//   { _id: '195', name: 'Zimbabwe' },
// ];
// // ========== Mapping functions ==========
// // Map gender: API may return "Male"/"Female" or 1/2
// const mapGender = (apiGender) => {
//   if (!apiGender) return '';
//   if (apiGender === 'Male' || apiGender === 1) return 'Male';
//   if (apiGender === 'Female' || apiGender === 2) return 'Female';
//   return '';
// };

// // Map title: API may return full title string or ID
// const mapTitle = (apiTitle) => {
//   if (!apiTitle) return '';
//   // If it's already a name like "Mr." or "Bro.", return as is
//   const found = titleList.find(t => t.name === apiTitle);
//   if (found) return found.name;
//   // If it's an ID like "1", map to name
//   const byId = titleList.find(t => t._id === String(apiTitle));
//   return byId ? byId.name : '';
// };

// // Map occupation: API may return name or ID (1-10)
// const mapOccupation = (apiOccupation) => {
//   if (!apiOccupation) return '';
//   // If it's already a name from the list
//   const found = occupationList.find(o => o.name === apiOccupation);
//   if (found) return found.name;
//   // If it's an ID (string or number), map to name
//   const byId = occupationList.find(o => o._id === String(apiOccupation));
//   return byId ? byId.name : '';
// };

// export default function ContactForm() {
//   const router = useRouter();

//   const [isClient, setIsClient] = useState(false);
//   const [pId, setPId] = useState(null);
//   const [token, setToken] = useState(null);
//   const [userdata, setUserdata] = useState({});
//   const [getCity, setCity] = useState([]);
//   const [districtdata, setDistrictdata] = useState([]);
//   const [getCountry, setGetCountry] = useState('');
//   const [stateList, setStateList] = useState([]);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [datePickerOpen, setDatePickerOpen] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//     setPId(localStorage.getItem('partnerId'));
//     setToken(localStorage.getItem('jwt'));
//   }, []);

//   const configHeaders = token ? { Authorization: `Bearer ${token}` } : {};

//   const userData = async () => {
//     if (!pId || !token) return;
//     try {
//       const response = await axios.get(`${url}jrms/v1/partners/${pId}/contactinfo`, { headers: configHeaders });
//       setUserdata(response.data);
//       setGetCountry(response.data.country || '');
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     if (pId && token) userData();
//   }, [pId, token]);

//   useEffect(() => {
//     if (getCountry) getStateList();
//   }, [getCountry]);

//   const getStateList = async () => {
//     try {
//       const response = await axios.get(`${url}jrms/v1/lookup/states?country=${getCountry}`);
//       setStateList(response.data.stateList || []);
//     } catch (err) {
//       console.log(err);
//       setStateList([]);
//     }
//   };

//   const handleStateChange = async (event) => {
//     const selectedState = event.target.value;
//     formik.setFieldValue('stateInAddress', selectedState);
//     formik.setFieldValue('district', '');
//     formik.setFieldValue('city', '');

//     if (!selectedState) {
//       setDistrictdata([]);
//       setCity([]);
//       return;
//     }

//     try {
//       const dist = await getDistrictsData(getCountry, selectedState);
//       const districts = dist.data?.districtList?.filter((d, i, ar) => d !== "''" && d !== null && ar.indexOf(d) === i) || [];
//       setDistrictdata(districts);

//       const city = await getCitiesData(getCountry, selectedState);
//       const cities = city.data?.cityList?.filter((c, i, ar) => c !== '' && c !== null && ar.indexOf(c) === i) || [];
//       setCity(cities);
//     } catch (err) {
//       console.log(err);
//       setDistrictdata([]);
//       setCity([]);
//     }
//   };

//   const RegisterSchema = Yup.object().shape({
//     title: Yup.string().required('Title is required').nullable(),
//     fullName: Yup.string()
//       .min(3, 'Name is too short!')
//       .max(28, 'Name is too long!')
//       .required('Name required')
//       .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field'),
//     selectedGender: Yup.string().required('Gender is required'),
//     dateOfBirth: Yup.mixed()
//       .nullable()
//       .test('dateOfBirth', 'You must be 18 years or older', (value) => {
//         if (!value || !moment.isMoment(value)) return false;
//         return moment().diff(value, 'years') >= 18;
//       })
//       .required('DOB is required'),
//     occupation: Yup.string().required('Occupation is required'),
//     whatsAppNumber: Yup.mixed()
//       .required('Ph no number is required')
//       .test('is-valid-whatsapp', 'Invalid Ph no number', function (value) {
//         const country = this.parent.country;
//         if (!value) return false;
//         const num = Number(value);
//         if (isNaN(num)) return false;
//         if (country === 'India') {
//           return num >= 6001000000 && num <= 9999000000;
//         } else {
//           return num > 0 && num >= 1000 && num <= 999999999999999;
//         }
//       }),
//     country: Yup.string().required('Country is required').nullable(),
//     address1: Yup.string().nullable(),
//     address2: Yup.string().nullable(),
//     stateInAddress: Yup.string().required('State is required').nullable(),
//     district: Yup.string()
//       .nullable()
//       .test('district-required', 'District is required for India', function (value) {
//         const country = this.parent.country;
//         if (country === 'India') {
//           return !!value && value.length <= 50;
//         }
//         return true;
//       }),
//     city: Yup.string()
//       .min(3, 'City name must be at least 3 characters')
//       .max(30, 'City name must be at most 30 characters')
//       .required('City name is required')
//       .typeError('City must be a string'),
//     pincode: Yup.mixed()
//       .required('Pincode/Zipcode is required')
//       .test('is-valid-pincode', 'Invalid pincode/zipcode', function (value) {
//         const country = this.parent.country;
//         if (!value) return false;
//         if (country === 'India') {
//           const num = Number(value);
//           return !isNaN(num) && num >= 110000 && num <= 859999;
//         } else {
//           return typeof value === 'string' && /^[A-Z0-9-]*$/.test(value) && value.length >= 4 && value.length <= 10;
//         }
//       }),
//   });

//   const formik = useFormik({
//     enableReinitialize: true,
//     initialValues: {
//       title: mapTitle(userdata.title || ''),
//       fullName: userdata.fullName || '',
//       selectedGender: mapGender(userdata.gender ?? userdata.selectedGender ?? ''),
//       dateOfBirth: userdata.dateOfBirth ? moment(userdata.dateOfBirth, 'YYYY/MM/DD') : null,
//       occupation: mapOccupation(userdata.occupation || ''),
//       address1: userdata.address1 || '',
//       address2: userdata.address2 || '',
//       pincode: userdata.pincode || '',
//       stateInAddress: userdata.stateInAddress || '',
//       district: userdata.district || '',
//       city: userdata.city || '',
//       country: userdata.country || '',
//       whatsAppNumber: userdata.whatsAppNumber || '',
//     },
//     validationSchema: RegisterSchema,
//     onSubmit: async (contactInfo) => {
//       setShowSuccess(true);
//       setTimeout(() => {
//         setShowSuccess(false);
//         router.push('/dashboard/user/profile?tab=spouse');
//       }, 1000);
//     },
//   });

//   const { errors, touched, handleSubmit, getFieldProps, setFieldValue } = formik;

//   if (!isClient) return null;

//   return (
//     <LocalizationProvider dateAdapter={AdapterMoment}>
//       <FormikProvider value={formik}>
//         <Form noValidate onSubmit={handleSubmit}>
//           <Box
//             className={poppins.className}
//             sx={{
//               width: '100%',
//               minHeight: '100vh',
//               pl: '5px',
//               pr: '60px',
//               py: 4,
//               bgcolor: 'background.paper',
//               boxSizing: 'border-box',
//               fontFamily: fontStack,
//               '& *': { fontFamily: `${fontStack} !important` },
//             }}
//           >
//             <Box sx={{ mb: 3 }}>
//               <Typography sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
//                 <AccountCircleIcon fontSize="medium" />
//                 <span>Profile</span>
//               </Typography>
//               <Box
//                 sx={{
//                   width: '0%',
//                   height: '2px',
//                   backgroundColor: 'orange',
//                   animation: 'expandWidth 0.5s ease forwards',
//                   '@keyframes expandWidth': {
//                     from: { width: '0%' },
//                     to: { width: '9%' },
//                   },
//                 }}
//               />
//             </Box>

//             <Collapse in={showSuccess}>
//               <Alert severity="success" sx={{ mb: 3, bgcolor: '#4caf50', color: 'white', fontSize: '1rem' }}>
//                 Contact information updated successfully
//               </Alert>
//             </Collapse>

//             <Box
//               sx={{
//                 display: 'grid',
//                 gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
//                 gap: { xs: 3, md: 4 },
//                 pr: 1,
//               }}
//             >
//               {/* LEFT COLUMN */}
//               <Stack spacing={4}>
//                 <Divider sx={{ fontSize: '1rem' }}>
//                   Dear Parent/Guardian, please update your contact info!
//                 </Divider>

//                 <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
//                   <FormControl size="large" sx={{ width: '20%' }} error={touched.title && errors.title}>
//                     <InputLabel id="title-label">Title</InputLabel>
//                     <Select
//                       labelId="title-label"
//                       size="large"
//                       value={formik.values.title || ''}
//                       onChange={(e) => setFieldValue('title', e.target.value)}
//                       label="Title"
//                     >
//                       {titleList.map((option) => (
//                         <MenuItem key={option._id} value={option.name}>
//                           {option.name}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                     <FormHelperText error>{touched.title && errors.title}</FormHelperText>
//                   </FormControl>

//                   <TextField
//                     size="large"
//                     label="Full name"
//                     sx={{ flex: 1 }}
//                     {...getFieldProps('fullName')}
//                     error={Boolean(touched.fullName && errors.fullName)}
//                     helperText={touched.fullName && errors.fullName}
//                   />
//                 </Stack>

//                 <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
//                   <FormControl fullWidth size="large" error={touched.selectedGender && errors.selectedGender}>
//                     <InputLabel id="gender-label">Gender</InputLabel>
//                     <Select
//                       labelId="gender-label"
//                       size="large"
//                       value={formik.values.selectedGender || ''}
//                       onChange={(e) => setFieldValue('selectedGender', e.target.value)}
//                       label="Gender"
//                     >
//                       {genderList.map((option) => (
//                         <MenuItem key={option._id} value={option.name}>
//                           {option.name}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                     <FormHelperText error>{touched.selectedGender && errors.selectedGender}</FormHelperText>
//                   </FormControl>

//                   <FormControl fullWidth size="large">
//                     <DatePicker
//                       open={datePickerOpen}
//                       onOpen={() => setDatePickerOpen(true)}
//                       onClose={() => setDatePickerOpen(false)}
//                       label="Date of Birth"
//                       disableFuture
//                       minDate={moment('1930-01-01')}
//                       maxDate={moment('2002-12-31')}
//                       openTo="year"
//                       views={['year', 'month', 'day']}
//                       value={formik.values.dateOfBirth}
//                       onChange={(newValue) => setFieldValue('dateOfBirth', newValue)}
//                       slotProps={{
//                         textField: {
//                           size: 'large',
//                           fullWidth: true,
//                           error: Boolean(touched.dateOfBirth && errors.dateOfBirth),
//                           helperText: touched.dateOfBirth && errors.dateOfBirth,
//                           InputProps: { readOnly: true },
//                           onClick: () => setDatePickerOpen(true),
//                         },
//                       }}
//                     />
//                   </FormControl>
//                 </Stack>

//                 <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
//                   <FormControl fullWidth size="large" error={touched.occupation && errors.occupation}>
//                     <InputLabel id="occupation-label">Occupation</InputLabel>
//                     <Select
//                       labelId="occupation-label"
//                       size="large"
//                       value={formik.values.occupation || ''}
//                       onChange={(e) => setFieldValue('occupation', e.target.value)}
//                       label="Occupation"
//                     >
//                       {occupationList.map((option) => (
//                         <MenuItem key={option._id} value={option.name}>
//                           {option.name}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                     <FormHelperText error>{touched.occupation && errors.occupation}</FormHelperText>
//                   </FormControl>

//                   <TextField
//                     fullWidth
//                     size="large"
//                     type="number"
//                     label="Ph no"
//                     {...getFieldProps('whatsAppNumber')}
//                     error={Boolean(touched.whatsAppNumber && errors.whatsAppNumber)}
//                     helperText={touched.whatsAppNumber && errors.whatsAppNumber}
//                   />
//                 </Stack>
//               </Stack>

//               {/* RIGHT COLUMN */}
//               <Stack spacing={4}>
//                 <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
//                   <FormControl fullWidth size="large" error={touched.country && errors.country}>
//                     <InputLabel id="country-label">Country</InputLabel>
//                     <Select
//                       labelId="country-label"
//                       size="large"
//                       value={formik.values.country || ''}
//                       onChange={(e) => {
//                         const newCountry = e.target.value;
//                         setFieldValue('country', newCountry);
//                         setGetCountry(newCountry);
//                         setFieldValue('stateInAddress', '');
//                         setFieldValue('district', '');
//                         setFieldValue('city', '');
//                         setStateList([]);
//                         setDistrictdata([]);
//                         setCity([]);
//                       }}
//                       label="Country"
//                     >
//                       {countryList.map((option) => (
//                         <MenuItem key={option._id} value={option.name}>
//                           {option.name}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                     <FormHelperText error>{touched.country && errors.country}</FormHelperText>
//                   </FormControl>

//                   <FormControl fullWidth size="large" error={touched.stateInAddress && errors.stateInAddress}>
//                     <InputLabel id="state-label">State</InputLabel>
//                     <Select
//                       labelId="state-label"
//                       size="large"
//                       value={formik.values.stateInAddress || ''}
//                       onChange={handleStateChange}
//                       disabled={!formik.values.country}
//                       label="State"
//                     >
//                       {stateList.map((state) => (
//                         <MenuItem key={state} value={state}>
//                           {state}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                     <FormHelperText error>{touched.stateInAddress && errors.stateInAddress}</FormHelperText>
//                   </FormControl>
//                 </Stack>

//                 <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
//                   {formik.values.country === 'India' && (
//                     <FormControl fullWidth size="large">
//                       <Autocomplete
//                         value={formik.values.district || ''}
//                         onChange={(event, newValue) => setFieldValue('district', newValue)}
//                         options={districtdata}
//                         getOptionLabel={(option) => option || ''}
//                         isOptionEqualToValue={(option, val) => option === val}
//                         renderInput={(params) => (
//                           <TextField
//                             {...params}
//                             size="large"
//                             label="District"
//                             error={Boolean(touched.district && errors.district)}
//                             helperText={touched.district && errors.district}
//                           />
//                         )}
//                       />
//                     </FormControl>
//                   )}
//                   <TextField
//                     fullWidth
//                     size="large"
//                     label="Pin/Zip code"
//                     {...getFieldProps('pincode')}
//                     error={Boolean(touched.pincode && errors.pincode)}
//                     helperText={touched.pincode && errors.pincode}
//                   />
//                 </Stack>

//                 <Divider />

//                 <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
//                   <TextField
//                     fullWidth
//                     size="large"
//                     label="Address Line 1"
//                     placeholder="door no, street name"
//                     {...getFieldProps('address1')}
//                     error={Boolean(touched.address1 && errors.address1)}
//                     helperText={touched.address1 && errors.address1}
//                   />
//                   <TextField
//                     fullWidth
//                     size="large"
//                     label="Address Line 2"
//                     placeholder="Area"
//                     {...getFieldProps('address2')}
//                     error={Boolean(touched.address2 && errors.address2)}
//                     helperText={touched.address2 && errors.address2}
//                   />
//                 </Stack>

//                 <Autocomplete
//                   freeSolo
//                   size="large"
//                   value={formik.values.city || ''}
//                   onChange={(event, newValue) => setFieldValue('city', newValue)}
//                   options={getCity}
//                   getOptionLabel={(option) => option || ''}
//                   renderInput={(params) => (
//                     <TextField
//                       {...params}
//                       size="large"
//                       label="City"
//                       error={Boolean(touched.city && errors.city)}
//                       helperText={touched.city && errors.city}
//                     />
//                   )}
//                 />
//               </Stack>
//             </Box>

//             <Box sx={{ width: '20%', ml: 'auto', mt: 5 }}>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 sx={{
//                   bgcolor: '#d4a017',
//                   color: 'black',
//                   '&:hover': { bgcolor: '#ffc20c' },
//                   px: 3,
//                   py: 1,
//                   fontWeight: 'bold',
//                   display: 'block',
//                 }}
//               >
//                 Next
//               </Button>
//             </Box>
//           </Box>
//         </Form>
//       </FormikProvider>
//     </LocalizationProvider>
//   );
// }
















'use client';

import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useFormik, Form, FormikProvider } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';
// @mui
import {
  Stack,
  TextField,
  Divider,
  FormControl,
  FormHelperText,
  Autocomplete,
  MenuItem,
  Select,
  InputLabel,
  Alert,
  Collapse,
  Box,
  Typography,
  Button,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import moment from 'moment';
import { Poppins, Aclonica, Lato, Roboto } from 'next/font/google';

import { getDistrictsData, getCitiesData } from '../../../services/JRMLookupService';
import config from '../../../partnerconfig.json';

const url = config.jrmClientUrl;

// Font stack
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
});
const aclonica = Aclonica({ weight: ['400'], subsets: ['latin'], display: 'swap' });
const lato = Lato({ weight: ['400', '700'], subsets: ['latin'], display: 'swap' });
const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'], display: 'swap' });
const fontStack = `${poppins.style.fontFamily}, ${aclonica.style.fontFamily}, ${lato.style.fontFamily}, ${roboto.style.fontFamily}, sans-serif`;

// Lists
const titleList = [
  { _id: '1', name: 'Bro.' },
  { _id: '2', name: 'Sis.' },
  { _id: '3', name: 'Mr.' },
  { _id: '4', name: 'Mrs.' },
  { _id: '5', name: 'Dr.' },
  { _id: '6', name: 'Rev.' },
  { _id: '7', name: 'Pastor.' },
];

const occupationList = [
  { _id: '1', name: 'Student' },
  { _id: '2', name: 'Private Employee' },
  { _id: '3', name: 'Government Employee' },
  { _id: '4', name: 'Business' },
  { _id: '5', name: 'Homemaker' },
  { _id: '6', name: 'Self Employed' },
  { _id: '7', name: 'Reverend' },
  { _id: '8', name: 'Pastor' },
  { _id: '9', name: 'Others' },
  { _id: '10', name: 'Dont Want To Mention' },
];

const genderList = [
  { _id: '1', name: 'Male' },
  { _id: '2', name: 'Female' },
];

const countryList = [
  { _id: '1', name: 'Afghanistan' }, { _id: '2', name: 'Albania' }, { _id: '3', name: 'Algeria' },
  { _id: '4', name: 'Andorra' }, { _id: '5', name: 'Angola' }, { _id: '6', name: 'Antigua and Barbuda' },
  { _id: '7', name: 'Argentina' }, { _id: '8', name: 'Armenia' }, { _id: '9', name: 'Australia' },
  { _id: '10', name: 'Austria' }, { _id: '11', name: 'Azerbaijan' }, { _id: '12', name: 'Bahamas' },
  { _id: '13', name: 'Bahrain' }, { _id: '14', name: 'Bangladesh' }, { _id: '15', name: 'Barbados' },
  { _id: '16', name: 'Belarus' }, { _id: '17', name: 'Belgium' }, { _id: '18', name: 'Belize' },
  { _id: '19', name: 'Benin' }, { _id: '20', name: 'Bhutan' }, { _id: '21', name: 'Bolivia' },
  { _id: '22', name: 'Bosnia and Herzegovina' }, { _id: '23', name: 'Botswana' }, { _id: '24', name: 'Brazil' },
  { _id: '25', name: 'Brunei' }, { _id: '26', name: 'Bulgaria' }, { _id: '27', name: 'Burkina Faso' },
  { _id: '28', name: 'Burundi' }, { _id: '29', name: 'Cabo Verde' }, { _id: '30', name: 'Cambodia' },
  { _id: '31', name: 'Cameroon' }, { _id: '32', name: 'Canada' }, { _id: '33', name: 'Central African Republic' },
  { _id: '34', name: 'Chad' }, { _id: '35', name: 'Chile' }, { _id: '36', name: 'China' },
  { _id: '37', name: 'Colombia' }, { _id: '38', name: 'Comoros' }, { _id: '39', name: 'Congo' },
  { _id: '40', name: 'Costa Rica' }, { _id: '41', name: 'Croatia' }, { _id: '42', name: 'Cuba' },
  { _id: '43', name: 'Cyprus' }, { _id: '44', name: 'Czech Republic' }, { _id: '45', name: 'Denmark' },
  { _id: '46', name: 'Djibouti' }, { _id: '47', name: 'Dominica' }, { _id: '48', name: 'Dominican Republic' },
  { _id: '49', name: 'Ecuador' }, { _id: '50', name: 'Egypt' }, { _id: '51', name: 'El Salvador' },
  { _id: '52', name: 'Equatorial Guinea' }, { _id: '53', name: 'Eritrea' }, { _id: '54', name: 'Estonia' },
  { _id: '55', name: 'Eswatini' }, { _id: '56', name: 'Ethiopia' }, { _id: '57', name: 'Fiji' },
  { _id: '58', name: 'Finland' }, { _id: '59', name: 'France' }, { _id: '60', name: 'Gabon' },
  { _id: '61', name: 'Gambia' }, { _id: '62', name: 'Georgia' }, { _id: '63', name: 'Germany' },
  { _id: '64', name: 'Ghana' }, { _id: '65', name: 'Greece' }, { _id: '66', name: 'Grenada' },
  { _id: '67', name: 'Guatemala' }, { _id: '68', name: 'Guinea' }, { _id: '69', name: 'Guinea-Bissau' },
  { _id: '70', name: 'Guyana' }, { _id: '71', name: 'Haiti' }, { _id: '72', name: 'Honduras' },
  { _id: '73', name: 'Hungary' }, { _id: '74', name: 'Iceland' }, { _id: '75', name: 'India' },
  { _id: '76', name: 'Indonesia' }, { _id: '77', name: 'Iran' }, { _id: '78', name: 'Iraq' },
  { _id: '79', name: 'Ireland' }, { _id: '80', name: 'Israel' }, { _id: '81', name: 'Italy' },
  { _id: '82', name: 'Jamaica' }, { _id: '83', name: 'Japan' }, { _id: '84', name: 'Jordan' },
  { _id: '85', name: 'Kazakhstan' }, { _id: '86', name: 'Kenya' }, { _id: '87', name: 'Kiribati' },
  { _id: '88', name: 'Korea, North' }, { _id: '89', name: 'Korea, South' }, { _id: '90', name: 'Kosovo' },
  { _id: '91', name: 'Kuwait' }, { _id: '92', name: 'Kyrgyzstan' }, { _id: '93', name: 'Laos' },
  { _id: '94', name: 'Latvia' }, { _id: '95', name: 'Lebanon' }, { _id: '96', name: 'Lesotho' },
  { _id: '97', name: 'Liberia' }, { _id: '98', name: 'Libya' }, { _id: '99', name: 'Liechtenstein' },
  { _id: '100', name: 'Lithuania' }, { _id: '101', name: 'Luxembourg' }, { _id: '102', name: 'Madagascar' },
  { _id: '103', name: 'Malawi' }, { _id: '104', name: 'Malaysia' }, { _id: '105', name: 'Maldives' },
  { _id: '106', name: 'Mali' }, { _id: '107', name: 'Malta' }, { _id: '108', name: 'Marshall Islands' },
  { _id: '109', name: 'Mauritania' }, { _id: '110', name: 'Mauritius' }, { _id: '111', name: 'Mexico' },
  { _id: '112', name: 'Micronesia' }, { _id: '113', name: 'Moldova' }, { _id: '114', name: 'Monaco' },
  { _id: '115', name: 'Mongolia' }, { _id: '116', name: 'Montenegro' }, { _id: '117', name: 'Morocco' },
  { _id: '118', name: 'Mozambique' }, { _id: '119', name: 'Myanmar' }, { _id: '120', name: 'Namibia' },
  { _id: '121', name: 'Nauru' }, { _id: '122', name: 'Nepal' }, { _id: '123', name: 'Netherlands' },
  { _id: '124', name: 'New Zealand' }, { _id: '125', name: 'Nicaragua' }, { _id: '126', name: 'Niger' },
  { _id: '127', name: 'Nigeria' }, { _id: '128', name: 'North Macedonia' }, { _id: '129', name: 'Norway' },
  { _id: '130', name: 'Oman' }, { _id: '131', name: 'Pakistan' }, { _id: '132', name: 'Palau' },
  { _id: '133', name: 'Palestine' }, { _id: '134', name: 'Panama' }, { _id: '135', name: 'Papua New Guinea' },
  { _id: '136', name: 'Paraguay' }, { _id: '137', name: 'Peru' }, { _id: '138', name: 'Philippines' },
  { _id: '139', name: 'Poland' }, { _id: '140', name: 'Portugal' }, { _id: '141', name: 'Qatar' },
  { _id: '142', name: 'Romania' }, { _id: '143', name: 'Russia' }, { _id: '144', name: 'Rwanda' },
  { _id: '145', name: 'Saint Kitts and Nevis' }, { _id: '146', name: 'Saint Lucia' }, { _id: '147', name: 'Saint Vincent and the Grenadines' },
  { _id: '148', name: 'Samoa' }, { _id: '149', name: 'San Marino' }, { _id: '150', name: 'Sao Tome and Principe' },
  { _id: '151', name: 'Saudi Arabia' }, { _id: '152', name: 'Senegal' }, { _id: '153', name: 'Serbia' },
  { _id: '154', name: 'Seychelles' }, { _id: '155', name: 'Sierra Leone' }, { _id: '156', name: 'Singapore' },
  { _id: '157', name: 'Slovakia' }, { _id: '158', name: 'Slovenia' }, { _id: '159', name: 'Solomon Islands' },
  { _id: '160', name: 'Somalia' }, { _id: '161', name: 'South Africa' }, { _id: '162', name: 'South Sudan' },
  { _id: '163', name: 'Spain' }, { _id: '164', name: 'Sri Lanka' }, { _id: '165', name: 'Sudan' },
  { _id: '166', name: 'Suriname' }, { _id: '167', name: 'Sweden' }, { _id: '168', name: 'Switzerland' },
  { _id: '169', name: 'Syria' }, { _id: '170', name: 'Taiwan' }, { _id: '171', name: 'Tajikistan' },
  { _id: '172', name: 'Tanzania' }, { _id: '173', name: 'Thailand' }, { _id: '174', name: 'Timor-Leste' },
  { _id: '175', name: 'Togo' }, { _id: '176', name: 'Tonga' }, { _id: '177', name: 'Trinidad and Tobago' },
  { _id: '178', name: 'Tunisia' }, { _id: '179', name: 'Turkey' }, { _id: '180', name: 'Turkmenistan' },
  { _id: '181', name: 'Tuvalu' }, { _id: '182', name: 'Uganda' }, { _id: '183', name: 'Ukraine' },
  { _id: '184', name: 'United Arab Emirates' }, { _id: '185', name: 'United Kingdom' }, { _id: '186', name: 'United States' },
  { _id: '187', name: 'Uruguay' }, { _id: '188', name: 'Uzbekistan' }, { _id: '189', name: 'Vanuatu' },
  { _id: '190', name: 'Vatican City' }, { _id: '191', name: 'Venezuela' }, { _id: '192', name: 'Vietnam' },
  { _id: '193', name: 'Yemen' }, { _id: '194', name: 'Zambia' }, { _id: '195', name: 'Zimbabwe' },
];

const mapGender = (apiGender) => {
  if (!apiGender) return '';
  if (apiGender === 'Male' || apiGender === 1) return 'Male';
  if (apiGender === 'Female' || apiGender === 2) return 'Female';
  return '';
};

const mapTitle = (apiTitle) => {
  if (!apiTitle) return '';
  const found = titleList.find(t => t.name === apiTitle);
  if (found) return found.name;
  const byId = titleList.find(t => t._id === String(apiTitle));
  return byId ? byId.name : '';
};

const mapOccupation = (apiOccupation) => {
  if (!apiOccupation) return '';
  const found = occupationList.find(o => o.name === apiOccupation);
  if (found) return found.name;
  const byId = occupationList.find(o => o._id === String(apiOccupation));
  return byId ? byId.name : '';
};

export default function ContactForm() {
  const router = useRouter();

  const [isClient, setIsClient] = useState(false);
  const [pId, setPId] = useState(null);
  const [token, setToken] = useState(null);
  const [userdata, setUserdata] = useState({});
  const [getCity, setCity] = useState([]);
  const [districtdata, setDistrictdata] = useState([]);
  const [getCountry, setGetCountry] = useState('');
  const [stateList, setStateList] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [datePickerOpen, setDatePickerOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setPId(localStorage.getItem('partnerId'));
    setToken(localStorage.getItem('jwt'));
  }, []);

  const configHeaders = token ? { Authorization: `Bearer ${token}` } : {};

  const userData = async () => {
    if (!pId || !token) return;
    try {
      const response = await axios.get(`${url}jrms/v1/partners/${pId}/contactinfo`, { headers: configHeaders });
      setUserdata(response.data);
      setGetCountry(response.data.country || '');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (pId && token) userData();
  }, [pId, token]);

  useEffect(() => {
    if (getCountry) getStateList();
  }, [getCountry]);

  const getStateList = async () => {
    try {
      const response = await axios.get(`${url}jrms/v1/lookup/states?country=${getCountry}`);
      setStateList(response.data.stateList || []);
    } catch (err) {
      console.log(err);
      setStateList([]);
    }
  };

const handleStateChange = async (event) => {
  const selectedState = event.target.value;
  formik.setFieldValue('stateInAddress', selectedState);
  formik.setFieldValue('district', '');
  formik.setFieldValue('city', '');

  if (!selectedState || !formik.values.country) {
    setDistrictdata([]);
    setCity([]);
    return;
  }

  try {
    // Fetch districts for selected state
    const dist = await getDistrictsData(formik.values.country, selectedState);
    const districts = dist.data?.districtList?.filter((d, i, ar) => d !== "''" && d !== null && ar.indexOf(d) === i) || [];
    setDistrictdata(districts);

    // Fetch cities for selected state
    const city = await getCitiesData(formik.values.country, selectedState);
    const cities = city.data?.cityList?.filter((c, i, ar) => c !== '' && c !== null && ar.indexOf(c) === i) || [];
    setCity(cities);
    
    console.log("Districts loaded:", districts.length);
    console.log("Cities loaded:", cities.length);
  } catch (err) {
    console.log("Error loading districts/cities:", err);
    setDistrictdata([]);
    setCity([]);
  }
};

  const handleCopyToWhatsApp = () => {
    const phoneNumber = formik.values.whatsAppNumber;
    if (phoneNumber) {
      formik.setFieldValue('whatsappNumber', phoneNumber);
      toast.success('Phone number copied to WhatsApp field!');
    } else {
      toast.error('Please enter a phone number first');
    }
  };

  const RegisterSchema = Yup.object().shape({
    title: Yup.string().required('Title is required').nullable(),
    fullName: Yup.string()
      .min(3, 'Name is too short!')
      .max(28, 'Name is too long!')
      .required('Name required')
      .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field'),
    selectedGender: Yup.string().required('Gender is required'),
    dateOfBirth: Yup.mixed()
      .nullable()
      .test('dateOfBirth', 'You must be 18 years or older', (value) => {
        if (!value || !moment.isMoment(value)) return false;
        return moment().diff(value, 'years') >= 18;
      })
      .required('DOB is required'),
    occupation: Yup.string().required('Occupation is required'),
    whatsAppNumber: Yup.mixed()
      .required('Phone number is required')
      .test('is-valid-whatsapp', 'Invalid phone number', function (value) {
        const country = this.parent.country;
        if (!value) return false;
        const num = Number(value);
        if (isNaN(num)) return false;
        if (country === 'India') {
          return num >= 6001000000 && num <= 9999000000;
        } else {
          return num > 0 && num >= 1000 && num <= 999999999999999;
        }
      }),
    whatsappNumber: Yup.mixed().nullable(),
    email: Yup.string().email('Invalid email address').nullable(),
    country: Yup.string().required('Country is required').nullable(),
    address1: Yup.string().nullable(),
    address2: Yup.string().nullable(),
    stateInAddress: Yup.string().required('State is required').nullable(),
    district: Yup.string()
      .nullable()
      .test('district-required', 'District is required for India', function (value) {
        const country = this.parent.country;
        if (country === 'India') {
          return !!value && value.length <= 50;
        }
        return true;
      }),
    city: Yup.string()
      .min(3, 'City name must be at least 3 characters')
      .max(30, 'City name must be at most 30 characters')
      .required('City name is required')
      .typeError('City must be a string'),
    pincode: Yup.mixed()
      .required('Pincode/Zipcode is required')
      .test('is-valid-pincode', 'Invalid pincode/zipcode', function (value) {
        const country = this.parent.country;
        if (!value) return false;
        if (country === 'India') {
          const num = Number(value);
          return !isNaN(num) && num >= 110000 && num <= 859999;
        } else {
          return typeof value === 'string' && /^[A-Z0-9-]*$/.test(value) && value.length >= 4 && value.length <= 10;
        }
      }),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: mapTitle(userdata.title || ''),
      fullName: userdata.fullName || '',
      selectedGender: mapGender(userdata.gender ?? userdata.selectedGender ?? ''),
      dateOfBirth: userdata.dateOfBirth ? moment(userdata.dateOfBirth, 'YYYY/MM/DD') : null,
      occupation: mapOccupation(userdata.occupation || ''),
      address1: userdata.address1 || '',
      address2: userdata.address2 || '',
      pincode: userdata.pincode || '',
      stateInAddress: userdata.stateInAddress || '',
      district: userdata.district || '',
      city: userdata.city || '',
      country: userdata.country || '',
      whatsAppNumber: userdata.whatsAppNumber || '',
      whatsappNumber: '',
      email: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: async (contactInfo) => {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        router.push('/dashboard/user/profile?tab=spouse');
      }, 1000);
    },
  });

  const { errors, touched, handleSubmit, getFieldProps, setFieldValue } = formik;

  if (!isClient) return null;

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <FormikProvider value={formik}>
        <Form noValidate onSubmit={handleSubmit}>
          <Box
            className={poppins.className}
            sx={{
              width: '100%',
              minHeight: '100vh',
              pl: '5px',
              pr: '60px',
              py: 4,
              bgcolor: 'background.paper',
              boxSizing: 'border-box',
              fontFamily: fontStack,
              '& *': { fontFamily: `${fontStack} !important` },
            }}
          >
           <Box sx={{ mb: 3 }}>
  <Typography sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1, fontSize: '1.2rem' }}>
    <AccountCircleIcon fontSize="medium" />
    <span>Profile Info</span>
  </Typography>
  <Box
    sx={{
      width: '0%',
      height: '2px',
      // backgroundColor: 'orange',
      animation: 'expandWidth 0.5s ease forwards',
      // '@keyframes expandWidth': {
      //   from: { width: '0%' },
      //   to: { width: '11%' },
      // },
    }}
  />
  
  {/* Centered Dear Parent line with lines on both sides */}
  <Box 
    sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      mt: 2,
      mb: 1
    }}
  >
    <Box sx={{ flex: 1, height: '1px', backgroundColor: '#ccc' }} />
    <Typography sx={{ px: 2, color: '#000000', fontSize: '16px',fontWeight: '600' }}>
      Dear Parent/Guardian, kindly update your Profile info!
    </Typography>
    <Box sx={{ flex: 1, height: '1px', backgroundColor: '#ccc' }} />
  </Box>
</Box>

            <Collapse in={showSuccess}>
              <Alert severity="success" sx={{ mb: 3, bgcolor: '#4caf50', color: 'white', fontSize: '1rem' }}>
                Contact information updated successfully
              </Alert>
            </Collapse>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: { xs: 3, md: 4 },
                pr: 1,
              }}
            >
              {/* LEFT COLUMN */}
              <Stack spacing={4}>
                <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                  <FormControl size="large" sx={{ width: '20%' }} error={touched.title && errors.title}>
                    <InputLabel id="title-label">Title</InputLabel>
                    <Select
                      labelId="title-label"
                      size="large"
                      value={formik.values.title || ''}
                      onChange={(e) => setFieldValue('title', e.target.value)}
                      label="Title"
                    >
                      {titleList.map((option) => (
                        <MenuItem key={option._id} value={option.name}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText error>{touched.title && errors.title}</FormHelperText>
                  </FormControl>

                  <TextField
                    size="large"
                    label="Full name"
                    sx={{ flex: 1 }}
                    {...getFieldProps('fullName')}
                    error={Boolean(touched.fullName && errors.fullName)}
                    helperText={touched.fullName && errors.fullName}
                  />
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                  <FormControl fullWidth size="large" error={touched.selectedGender && errors.selectedGender}>
                    <InputLabel id="gender-label">Gender</InputLabel>
                    <Select
                      labelId="gender-label"
                      size="large"
                      value={formik.values.selectedGender || ''}
                      onChange={(e) => setFieldValue('selectedGender', e.target.value)}
                      label="Gender"
                    >
                      {genderList.map((option) => (
                        <MenuItem key={option._id} value={option.name}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText error>{touched.selectedGender && errors.selectedGender}</FormHelperText>
                  </FormControl>

                  <FormControl fullWidth size="large">
                    <DatePicker
                      open={datePickerOpen}
                      onOpen={() => setDatePickerOpen(true)}
                      onClose={() => setDatePickerOpen(false)}
                      label="Date of Birth"
                      disableFuture
                      minDate={moment('1930-01-01')}
                      maxDate={moment('2002-12-31')}
                      openTo="year"
                      views={['year', 'month', 'day']}
                      value={formik.values.dateOfBirth}
                      onChange={(newValue) => setFieldValue('dateOfBirth', newValue)}
                      slotProps={{
                        textField: {
                          size: 'large',
                          fullWidth: true,
                          error: Boolean(touched.dateOfBirth && errors.dateOfBirth),
                          helperText: touched.dateOfBirth && errors.dateOfBirth,
                          InputProps: { readOnly: true },
                          onClick: () => setDatePickerOpen(true),
                        },
                      }}
                    />
                  </FormControl>
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                  <FormControl fullWidth size="large" error={touched.occupation && errors.occupation}>
                    <InputLabel id="occupation-label">Occupation</InputLabel>
                    <Select
                      labelId="occupation-label"
                      size="large"
                      value={formik.values.occupation || ''}
                      onChange={(e) => setFieldValue('occupation', e.target.value)}
                      label="Occupation"
                    >
                      {occupationList.map((option) => (
                        <MenuItem key={option._id} value={option.name}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText error>{touched.occupation && errors.occupation}</FormHelperText>
                  </FormControl>

                  <TextField
                    fullWidth
                    size="large"
                    type="number"
                    label="Phone Number"
                    {...getFieldProps('whatsAppNumber')}
                    error={Boolean(touched.whatsAppNumber && errors.whatsAppNumber)}
                    helperText={touched.whatsAppNumber && errors.whatsAppNumber}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleCopyToWhatsApp} edge="end">
                            <ContentCopyIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Stack>

                {/* Optional WhatsApp and Email */}
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                  <TextField
                    fullWidth
                    size="large"
                    label="WhatsApp (Optional)"
                    {...getFieldProps('whatsappNumber')}
                  />
                  <TextField
                    fullWidth
                    size="large"
                    label="Email (Optional)"
                    type="email"
                    {...getFieldProps('email')}
                  />
                </Stack>
              </Stack>

           {/* RIGHT COLUMN */}
<Stack spacing={4}>
  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
    <TextField
      fullWidth
      size="large"
      label="Address Line 1"
      placeholder="door no, street name"
      {...getFieldProps('address1')}
      error={Boolean(touched.address1 && errors.address1)}
      helperText={touched.address1 && errors.address1}
    />
    <TextField
      fullWidth
      size="large"
      label="Address Line 2"
      placeholder="Area"
      {...getFieldProps('address2')}
      error={Boolean(touched.address2 && errors.address2)}
      helperText={touched.address2 && errors.address2}
    />
  </Stack>

  <TextField
    fullWidth
    size="large"
    label="City / Town"
    {...getFieldProps('city')}
    error={Boolean(touched.city && errors.city)}
    helperText={touched.city && errors.city}
    placeholder="Enter your city name"
  />

  {/* Country & State Row */}
  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
    <FormControl fullWidth size="large" error={touched.country && errors.country}>
      <InputLabel id="country-label">Country</InputLabel>
      <Select
        labelId="country-label"
        size="large"
        value={formik.values.country || ''}
        onChange={(e) => {
          const newCountry = e.target.value;
          setFieldValue('country', newCountry);
          setGetCountry(newCountry);
          setFieldValue('stateInAddress', '');
          setFieldValue('district', '');
          setFieldValue('city', '');
          setStateList([]);
          setDistrictdata([]);
          setCity([]);
        }}
        label="Country"
      >
        {countryList.map((option) => (
          <MenuItem key={option._id} value={option.name}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText error>{touched.country && errors.country}</FormHelperText>
    </FormControl>

    <FormControl fullWidth size="large" error={touched.stateInAddress && errors.stateInAddress}>
      <InputLabel id="state-label">State</InputLabel>
      <Select
        labelId="state-label"
        size="large"
        value={formik.values.stateInAddress || ''}
        onChange={handleStateChange}
        disabled={!formik.values.country}
        label="State"
      >
        <MenuItem value="" disabled>Select State</MenuItem>
        {stateList.map((state) => (
          <MenuItem key={state} value={state}>
            {state}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText error>{touched.stateInAddress && errors.stateInAddress}</FormHelperText>
    </FormControl>
  </Stack>

  {/* District & Pincode Row */}
 {/* District & Pincode Row - District only for India */}
<Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
  {formik.values.country === 'India' ? (
    <FormControl fullWidth size="large">
      <Autocomplete
        value={formik.values.district || ''}
        onChange={(event, newValue) => setFieldValue('district', newValue)}
        options={districtdata}
        getOptionLabel={(option) => option || ''}
        isOptionEqualToValue={(option, val) => option === val}
        disabled={!formik.values.stateInAddress}
        renderInput={(params) => (
          <TextField
            {...params}
            size="large"
            label="District"
            placeholder={!formik.values.stateInAddress ? "Select State first" : "Select District"}
            error={Boolean(touched.district && errors.district)}
            helperText={touched.district && errors.district}
          />
        )}
      />
    </FormControl>
  ) : (
    <TextField
      fullWidth
      size="large"
      label="Region / Province"
      placeholder="Enter region or province"
      {...getFieldProps('district')}
      error={Boolean(touched.district && errors.district)}
      helperText={touched.district && errors.district}
    />
  )}

  <TextField
    fullWidth
    size="large"
    label="Pin / Zip Code"
    {...getFieldProps('pincode')}
    error={Boolean(touched.pincode && errors.pincode)}
    helperText={touched.pincode && errors.pincode}
    placeholder="Enter pincode / zipcode"
  />
</Stack>
</Stack>
            </Box>

            <Box sx={{ width: '20%', ml: 'auto', mt: 5 }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: '#d4a017',
                  color: 'black',
                  '&:hover': { bgcolor: '#ffc20c' },
                  px: 3,
                  py: 1,
                  fontWeight: 'bold',
                  display: 'block',
                }}
              >
                Next
              </Button>
            </Box>
          </Box>
        </Form>
      </FormikProvider>
    </LocalizationProvider>
  );
}