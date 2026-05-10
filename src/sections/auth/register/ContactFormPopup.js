// 'use client';

// import * as Yup from "yup";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useFormik, Form, FormikProvider } from "formik";
// import axios from "axios";
// import { getStatesData, getDistrictsData, getCitiesData } from '@/services/JRMLookupService';
// import { updatePartnerContactInfo } from '@/services/JRMPartnerAuthService';
// import { toast } from "react-toastify";
// import {
//   Grid, Stack, TextField, Button, Dialog, DialogTitle, DialogContent,
//   DialogActions, FormControl, InputLabel, Select, MenuItem, FormHelperText,
//   Box, Autocomplete, InputAdornment, IconButton
// } from "@mui/material";
// import { LoadingButton } from "@mui/lab";
// import { MobileDatePicker } from "@mui/x-date-pickers";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
// import moment from "moment";
// import Iconify from "@/components/Iconify";
// import config from "@/partnerconfig.json";
// import { setPassword } from "@/services/JRMPartnerAuthService";
// import { getAuthInfo } from '@/auth/AppAuthStorage';


// // ----------------------------------------------------------------------

// const url = config.jrmClientUrl;

// const titleList = [
//   { _id: "1", name: "Bro." }, { _id: "2", name: "Sis." }, { _id: "3", name: "Mr." },
//   { _id: "4", name: "Mrs." }, { _id: "5", name: "Dr." }, { _id: "6", name: "Rev." },
//   { _id: "7", name: "Pastor." }
// ];
// const occupationList = [
//   { _id: "1", name: "Student" }, { _id: "2", name: "Private Employee" },
//   { _id: "3", name: "Government Employee" }, { _id: "4", name: "Business" },
//   { _id: "5", name: "Homemaker" }, { _id: "6", name: "Self Employed" },
//   { _id: "7", name: "Reverend" }, { _id: "8", name: "Pastor" },
//   { _id: "9", name: "Others" }, { _id: "10", name: "Dont Want To Mention" }
// ];
// const genderList = [
//   { _id: "1", name: "Male" }, { _id: "2", name: "Female" }
// ];

// export default function ContactFormPopup() {
//   const router = useRouter();
//   const [datacountry, setDatacountry] = useState([]);
//   const [showPassword, setShowPassword] = useState(false);
//   const [userdata, setUserdata] = useState({});
//   const [getCity, setCity] = useState([]);
//   const [districtdata, setDistrictdata] = useState([]);
//   const [getCountry, setCountry] = useState('');
//   const [stateList, setStateList] = useState([]);
//   const [pId, setPId] = useState(null);
//   const [token, setToken] = useState(null);
//   const [configure, setConfigure] = useState({});

//   useEffect(() => {
//     const partnerId = localStorage.getItem("partnerId");
//     const jwt = localStorage.getItem("jwt");
//     setPId(partnerId);
//     setToken(jwt);
//     setConfigure({ Authorization: `Bearer ${jwt}` });
//     getCountryList();
//   }, []);

//   useEffect(() => {
//     if (!pId || !token) return;
//     axios.get(`${url}jrms/v1/partners/${pId}/contactinfo`, { headers: configure })
//       .then((response) => {
//         setUserdata(response.data);
//         setCountry(response.data.country);
//       })
//       .catch(err => console.log(err));
//   }, [pId, token]);

//   useEffect(() => {
//     if (getCountry) {
//       axios.get(`${url}jrms/v1/lookup/states?country=${getCountry}`, { headers: configure })
//         .then(res => setStateList(res.data.stateList || []))
//         .catch(err => console.log(err));
//     }
//   }, [getCountry]);

//   const getCountryList = async () => {
//     try {
//       const response = await axios.get("https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json");
//       const countryList = Array.from(new Set(response.data.map(item => item.country)));
//       setDatacountry(countryList);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleCountry = async (event, value) => {
//     formik.setFieldValue('country', value);
//     const st = await getStatesData(value);
//     setStateList(st.data?.stateList || []);
//     formik.setFieldValue('stateInAddress', '');
//     formik.setFieldValue('district', '');
//     formik.setFieldValue('city', '');
//   };

//   const handleState = async (event, value) => {
//     const dist = await getDistrictsData(getCountry, value);
//     const result = dist.data?.districtList?.filter(d => d && d !== "''") || [];
//     setDistrictdata(result);
//     const city = await getCitiesData(getCountry, value);
//     const result1 = city.data?.cityList?.filter(c => c && c !== "") || [];
//     setCity(result1);
//     formik.setFieldValue('stateInAddress', value);
//     formik.setFieldValue('district', '');
//     formik.setFieldValue('city', '');
//   };

//   const RegisterSchema = Yup.object().shape({
//     title: Yup.string().required("Title is required").nullable(),
//     fullName: Yup.string().min(3, "Too short").max(28, "Too long").required("Name required").matches(/^[aA-zZ\s]+$/, "Only alphabets"),
//     selectedGender: Yup.string().required("Gender required"),
//     dateOfBirth: Yup.string().nullable().test("dateOfBirth", "You must be 18 years or older", value => moment().diff(moment(value, "YYYY/MM/DD"), "years") >= 18).required("DOB required"),
//     occupation: Yup.string().required("Occupation required"),
//     whatsAppNumber: Yup.number().when("country", {
//       is: (value) => value === "India",
//       then: Yup.number().min(6001000000, "Invalid number").max(9999000000, "Invalid Number"),
//       otherwise: Yup.number().required("WhatsApp number is required").min(1000, "Too short").max(999999999999999, "Too large")
//     }),
//     country: Yup.string().required("Country required").nullable(),
//     address1: Yup.string().nullable(),
//     address2: Yup.string().nullable(),
//     address3: Yup.string().min(3).max(30),
//     stateInAddress: Yup.string().required("State required").nullable(),
//     district: Yup.string().when("country", { is: "India", then: Yup.string().required("District required").max(50).nullable() }),
//     city: Yup.string().min(3).max(30).required("City required").typeError(),
//     pincode: Yup.mixed().when("country", {
//       is: "India",
//       then: Yup.number().nullable().typeError("Pincode required").min(110000, "Invalid pincode").max(859999, "Invalid pincode").required("Pincode required"),
//       otherwise: Yup.string().nullable().required("Zipcode required").matches(/^[A-Z0-9-]*$/).min(4).max(10)
//     }),
//     password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
//     confirmPassword: Yup.string().required("Confirm password is required").oneOf([Yup.ref("password"), null], "Password must match")
//   });

//   const formik = useFormik({
//     enableReinitialize: true,
//     initialValues: {
//       title: userdata.title || "",
//       fullName: userdata.fullName || "",
//       selectedGender: userdata.gender || "",
//       dateOfBirth: userdata.dateOfBirth || null,
//       occupation: userdata.occupation || "",
//       address1: userdata.address1 || "",
//       address2: userdata.address2 || "",
//       pincode: userdata.pincode || "",
//       stateInAddress: userdata.stateInAddress || "",
//       district: userdata.district || "",
//       city: userdata.city || "",
//       country: "India",
//       whatsAppNumber: userdata.whatsAppNumber || "",
//       password: "",
//       confirmPassword: ""
//     },
//     validationSchema: RegisterSchema,
//     onSubmit: async (contactInfo) => {
//       const authInfo = await getAuthInfo();
//       const result = await updatePartnerContactInfo(authInfo.profileUrl, authInfo.jwt, contactInfo);
//       if (!result.ok) {
//         toast.error("Could not update Contact Info");
//         return;
//       }
//       try {
//         const result1 = await setPassword(
//           { password: contactInfo.password, oneTimeJWT: authInfo.jwt },
//           `${config.jrmPartnerProfileUrl}${pId}/setpassword`
//         );
//         if (result1.status > 300) {
//           toast.error("Error in Password update", result1.data?.message || "Unknown error");
//           return;
//         }
//       } catch (error) {
//         toast.error("Error in Password update", error.message);
//         return;
//       }
//       toast.success("Contact information updated successfully");
//       let fetchMembers = localStorage.getItem("members");
//       fetchMembers = fetchMembers ? JSON.parse(fetchMembers) : {};
//       fetchMembers.main = contactInfo;
//       localStorage.setItem("members", JSON.stringify(fetchMembers));
//       const profileStatus = localStorage.getItem('profileStatus');
//       if (profileStatus === "1") {
//         router.push('/dashboard/user/child');
//       } else {
//         localStorage.setItem('profileStatus', '1');
//         router.push('/dashboard');
//       }
//     }
//   });

//   const { errors, touched, isSubmitting, handleSubmit, getFieldProps, setFieldValue, values } = formik;

//   return (
//     <LocalizationProvider dateAdapter={AdapterMoment}>
//       <FormikProvider value={formik}>
//         <Form noValidate onSubmit={handleSubmit}>
//           <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//             {/* Left column */}
//             <Grid item xs={12} md={6}>
//               <Stack spacing={3}>
//                 <br />
//                 <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
//                   <FormControl sx={{ minWidth: 120 }}>
//                     <InputLabel>Title</InputLabel>
//                     <Select
//                       label="Title"
//                       name="title"
//                       value={values.title}
//                       onChange={(e) => setFieldValue("title", e.target.value)}
//                       {...getFieldProps("title")}
//                     >
//                       {titleList.map(option => <MenuItem key={option._id} value={option.name}>{option.name}</MenuItem>)}
//                     </Select>
//                     <FormHelperText error>{touched.title && errors.title}</FormHelperText>
//                   </FormControl>
//                   <TextField
//                     fullWidth label="Full name"
//                     {...getFieldProps("fullName")}
//                     error={Boolean(touched.fullName && errors.fullName)}
//                     helperText={touched.fullName && errors.fullName}
//                   />
//                 </Stack>

//                 <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
//                   <FormControl sx={{ minWidth: "50%" }}>
//                     <InputLabel>Gender</InputLabel>
//                     <Select
//                       label="Gender"
//                       value={values.selectedGender}
//                       onChange={(e) => setFieldValue("selectedGender", e.target.value)}
//                       {...getFieldProps("selectedGender")}
//                     >
//                       {genderList.map(option => <MenuItem key={option._id} value={option.name}>{option.name}</MenuItem>)}
//                     </Select>
//                     <FormHelperText error>{touched.selectedGender && errors.selectedGender}</FormHelperText>
//                   </FormControl>
//                   <MobileDatePicker
//                     label="Date of Birth"
//                     disableFuture
//                     minDate={new Date("1930-01-01")}
//                     maxDate={new Date("2002-12-31")}
//                     openTo="year"
//                     views={["year", "month", "day"]}
//                     inputFormat="yyyy/MM/dd"
//                     value={values.dateOfBirth ? moment(values.dateOfBirth, "YYYY/MM/DD") : null}
//                     onChange={(newValue) => setFieldValue("dateOfBirth", newValue ? newValue.format("YYYY/MM/DD") : null)}
//                     slotProps={{
//                       textField: {
//                         error: Boolean(touched.dateOfBirth && errors.dateOfBirth),
//                         helperText: touched.dateOfBirth && errors.dateOfBirth,
//                         fullWidth: true
//                       }
//                     }}
//                   />
//                 </Stack>

//                 <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
//                   <FormControl sx={{ minWidth: "50%" }}>
//                     <InputLabel>Occupation</InputLabel>
//                     <Select
//                       label="Occupation"
//                       value={values.occupation}
//                       onChange={(e) => setFieldValue("occupation", e.target.value)}
//                       {...getFieldProps("occupation")}
//                     >
//                       {occupationList.map(option => <MenuItem key={option._id} value={option.name}>{option.name}</MenuItem>)}
//                     </Select>
//                     <FormHelperText error>{touched.occupation && errors.occupation}</FormHelperText>
//                   </FormControl>
//                   <TextField
//                     fullWidth type="number" label="WhatsApp"
//                     {...getFieldProps("whatsAppNumber")}
//                     error={Boolean(touched.whatsAppNumber && errors.whatsAppNumber)}
//                     helperText={touched.whatsAppNumber && errors.whatsAppNumber}
//                   />
//                 </Stack>

//                 <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
//                   <FormControl sx={{ minWidth: "50%" }}>
//                     <TextField
//                       fullWidth label="Password"
//                       type="password"
//                       {...getFieldProps("password")}
//                       error={Boolean(touched.password && errors.password)}
//                       helperText={touched.password && errors.password}
//                     />
//                   </FormControl>
//                   <FormControl sx={{ minWidth: "47%" }}>
//                     <TextField
//                       fullWidth label="Confirm Password"
//                       type={showPassword ? "text" : "password"}
//                       {...getFieldProps("confirmPassword")}
//                       onChange={(e) => setFieldValue("confirmPassword", e.target.value)}
//                       InputProps={{
//                         endAdornment: (
//                           <InputAdornment position="end">
//                             <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
//                               <Iconify icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"} />
//                             </IconButton>
//                           </InputAdornment>
//                         )
//                       }}
//                       error={Boolean(touched.confirmPassword && errors.confirmPassword)}
//                       helperText={touched.confirmPassword && errors.confirmPassword}
//                     />
//                   </FormControl>
//                 </Stack>
//               </Stack>
//             </Grid>

//             {/* Right column */}
//             <Grid item xs={12} md={6}>
//               <Stack spacing={3}>
//                 <Divider />
//                 <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
//                   <Autocomplete
//                     fullWidth
//                     options={datacountry}
//                     value={values.country}
//                     onChange={(event, value) => handleCountry(event, value)}
//                     renderInput={(params) => (
//                       <TextField
//                         {...params}
//                         label="Country"
//                         error={Boolean(touched.country && errors.country)}
//                         helperText={touched.country && errors.country}
//                       />
//                     )}
//                   />
//                   <Autocomplete
//                     fullWidth
//                     options={stateList}
//                     value={values.stateInAddress}
//                     onChange={(event, value) => handleState(event, value)}
//                     renderInput={(params) => (
//                       <TextField
//                         {...params}
//                         label="State"
//                         error={Boolean(touched.stateInAddress && errors.stateInAddress)}
//                         helperText={touched.stateInAddress && errors.stateInAddress}
//                       />
//                     )}
//                   />
//                 </Stack>

//                 <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
//                   {values.country === "India" && (
//                     <Autocomplete
//                       fullWidth
//                       options={districtdata}
//                       value={values.district}
//                       onChange={(event, newValue) => setFieldValue("district", newValue)}
//                       renderInput={(params) => (
//                         <TextField
//                           {...params}
//                           label="District"
//                           error={Boolean(touched.district && errors.district)}
//                           helperText={touched.district && errors.district}
//                         />
//                       )}
//                     />
//                   )}
//                   <TextField
//                     fullWidth label="Pin/Zip code"
//                     {...getFieldProps("pincode")}
//                     error={Boolean(touched.pincode && errors.pincode)}
//                     helperText={touched.pincode && errors.pincode}
//                   />
//                 </Stack>

//                 <Divider />
//                 <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
//                   <TextField fullWidth label="Address Line 1" placeholder="door no, street name" {...getFieldProps("address1")} />
//                   <TextField fullWidth label="Address Line 2" placeholder="Area" {...getFieldProps("address2")} />
//                 </Stack>
//                 <Autocomplete
//                   freeSolo
//                   options={getCity}
//                   value={values.city}
//                   onInputChange={(event, newValue) => setFieldValue("city", newValue)}
//                   renderInput={(params) => (
//                     <TextField
//                       {...params}
//                       label="City"
//                       error={Boolean(touched.city && errors.city)}
//                       helperText={touched.city && errors.city}
//                     />
//                   )}
//                 />
//               </Stack>
//             </Grid>
//           </Grid>
//           <Stack alignItems="flex-end" sx={{ mt: 3 }}>
//             <LoadingButton size="large" type="submit" variant="contained" loading={isSubmitting}>
//               Next
//             </LoadingButton>
//           </Stack>
//         </Form>
//       </FormikProvider>
//     </LocalizationProvider>
//   );
// }