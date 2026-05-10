// // "use client";

// // import { Box, Grid, Typography } from "@mui/material";
// // import { Poppins, Aclonica, Lato, Roboto, Fredoka, Patrick_Hand } from "next/font/google";

// // // Configure fonts
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

// // // Cartoon fonts
// // const fredoka = Fredoka({
// //   weight: ['400', '600', '700'],
// //   subsets: ['latin'],
// //   display: 'swap',
// // });

// // const patrickHand = Patrick_Hand({
// //   weight: ['400'],
// //   subsets: ['latin'],
// //   display: 'swap',
// // });

// // // Font stack for "Contact Us" heading
// // const contactUsFontStack = `${poppins.style.fontFamily}, ${aclonica.style.fontFamily}, ${lato.style.fontFamily}, ${roboto.style.fontFamily}, sans-serif`;

// // const tvbackgound = "/assets/tv.png";
// // const VBSimage = "/assets/VBS.gif";

// // export default function Contact() {
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     alert("📬 Woohoo! Your message has been sent (cartoon style)! 🎉");
// //   };

// //   return (
// //     <Box
// //       sx={{
// //         backgroundImage: `url(${tvbackgound})`,
// //         backgroundSize: "cover",
// //         marginTop: { md: "-2vh", xs: "-2vh" },
// //         minHeight: "100vh",
// //         overflowY: "auto",
// //         backgroundPosition: {
// //           xs: "top",
// //           sm: "center",
// //           md: "top",
// //         },
// //         py: 2,
// //       }}
// //     >
// //       <Box
// //         sx={{
// //           margin: "auto",
// //           display: "flex",
// //           flexDirection: "column",
// //           justifyContent: "center",
// //           alignItems: "center",
// //           px: 2,
// //         }}
// //       >
// //         <Box
// //           component="img"
// //           src={VBSimage}
// //           alt="Sun"
// //           sx={{
// //             width: {
// //               xs: "250px",
// //               sm: "320px",
// //               md: "400px",
// //             },
// //             height: "auto",
// //             marginTop: "100px",
// //             marginBottom: "15px",
// //           }}
// //         />

// //         <Typography
// //           variant="h1"
// //           sx={{
// //             color: "#ffffff",
// //             textAlign: "center",
// //             textShadow: "none",
// // WebkitTextStroke: "1.5px #ffaa33",
// //             letterSpacing: "0.02em",
// //             fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
// //             fontFamily: contactUsFontStack,
// //             fontWeight: '800',
// //             mb: 1.5,
// //           }}
// //         >
// //           Contact Us
// //         </Typography>

// //         {/* 3‑column grid – no outer border, cards centered */}
// //         <Grid container spacing={2} justifyContent="center" sx={{ maxWidth: "900px", width: "100%" }}>
// //           {[
// //             { icon: "⭐", text: "Jesus Redeems Kids Ministry" },
// //             { icon: "🌟", text: "Jesus Redeems Ministries" },
// //             { icon: "🌿", text: "Vineyard of God" },
// //             { icon: "🏠", text: "Nalumavadi, Tuticorin Dist." },
// //             { icon: "📍", text: "Tamil Nadu - 628 211" },
// //             { icon: "✉️", text: "kids@jesusredeems.org" },
// //             { icon: "📱", text: "Whatsapp: 9488375315" },
// //             { icon: "📞", text: "Telephone: 04639 353535" },
// //           ].map((item, idx) => (
// //             <Grid item xs={12} sm={6} md={4} key={idx}>
// //               <Box
// //                 sx={{
// //                   display: "flex",
// //                   alignItems: "center",
// //                   justifyContent: "center",
// //                   gap: 1.5,
// //                   backgroundColor: "rgba(255,255,220,0.85)",
// //                   borderRadius: "40px",
// //                   border: "2px solid #f1c40f",
// //                   padding: "8px 12px",
// //                   boxShadow: "3px 3px 0 #e67e22",
// //                   transition: "0.1s linear",
// //                   height: "100%",
// //                   textAlign: "left",
// //                   "&:hover": {
// //                     transform: "translate(2px, 2px)",
// //                     boxShadow: "1px 1px 0 #e67e22",
// //                     backgroundColor: "#fff8e7",
// //                   },
// //                 }}
// //               >
// //                 <Typography sx={{ fontSize: "1.6rem" }}>{item.icon}</Typography>
// //                 <Typography
// //                   sx={{
// //                     fontFamily: patrickHand.style.fontFamily,
// //                     fontSize: { xs: "0.85rem", sm: "0.95rem" },
// //                     fontWeight: "bold",
// //                     color: "#2c3e50",
// //                     lineHeight: 1.3,
                    
// //                     wordBreak: "break-word",
// //                   }}
// //                 >
// //                   {item.text}
// //                 </Typography>
// //               </Box>
// //             </Grid>
// //           ))}
// //         </Grid>

// //         {/* Optional small decorative row */}
// //         <Box
// //           sx={{
// //             display: "flex",
// //             justifyContent: "center",
// //             gap: 2,
// //             mt: 6,
           
// //             fontSize: "1.5rem",
// //             opacity: 0.6,
// //           }}
// //         >
// //           {/* <span>🎈</span> <span>✏️</span> <span>📮</span> */}
// //         </Box>
// //       </Box>
// //     </Box>
// //   );
// // // }
// // "use client";

// // import { Box } from "@mui/material";
// // import { Poppins, Aclonica, Lato, Roboto, Fredoka, Patrick_Hand } from "next/font/google";

// // // Configure fonts
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

// // const fredoka = Fredoka({
// //   weight: ['400', '600', '700'],
// //   subsets: ['latin'],
// //   display: 'swap',
// // });

// // const patrickHand = Patrick_Hand({
// //   weight: ['400'],
// //   subsets: ['latin'],
// //   display: 'swap',
// // });

// // const tvbackgound = "/assets/contact111.png";

// // export default function Contact() {
// //   return (
// //     <Box
// //       sx={{
// //         width: '100%',
// //         height: '100vh',
// //         m: 0,
// //         p: 0,
// //         overflow: 'hidden',
// //         bgcolor: '#ffffff',
// //       }}
// //     >
// //       {/* Scrollable image container - scrollbar hidden but still scrollable */}
// //       <Box
// //         sx={{
// //           width: '100%',
// //           height: '100%',
// //           overflow: 'auto',
// //           m: 0,
// //           p: 0,
// //           // Hide scrollbar but keep functionality
// //           scrollbarWidth: 'none', // Firefox
// //           msOverflowStyle: 'none', // IE/Edge
// //           '&::-webkit-scrollbar': {
// //             display: 'none', // Chrome/Safari/Opera
// //             width: 0,
// //             height: 0,
// //           },
// //         }}
// //       >
// //         <img
// //           src={tvbackgound}
// //           alt="Background"
// //           style={{
// //             display: 'block',
// //             width: '100%',
// //             height: 'auto',
// //             minWidth: '100%',
// //             minHeight: '100%',
// //             objectFit: 'cover',
// //             margin: 0,
// //             padding: 0,
// //           }}
// //         />
// //       </Box>
// //     </Box>
// //   );
// // }



// // app/contact/page.js
// // app/contact/page.js





















// // 'use client';

// // import { useState } from 'react';

// // export default function ContactPage() {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     subject: '',
// //     message: '',
// //   });
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [submitStatus, setSubmitStatus] = useState('idle');

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setIsSubmitting(true);
// //     setSubmitStatus('idle');

// //     // Simulate API call - Replace with your actual backend
// //     try {
// //       // For demo purposes, we'll simulate a successful submission
// //       await new Promise(resolve => setTimeout(resolve, 1500));
      
// //       // You can uncomment this when you have your API ready
// //       // const response = await fetch('/api/contact', {
// //       //   method: 'POST',
// //       //   headers: {
// //       //     'Content-Type': 'application/json',
// //       //   },
// //       //   body: JSON.stringify(formData),
// //       // });
      
// //       // if (response.ok) {
// //         setSubmitStatus('success');
// //         setFormData({ name: '', email: '', subject: '', message: '' });
// //         setTimeout(() => setSubmitStatus('idle'), 4000);
// //       // } else {
// //       //   setSubmitStatus('error');
// //       //   setTimeout(() => setSubmitStatus('idle'), 4000);
// //       // }
// //     } catch (error) {
// //       console.error('Error submitting form:', error);
// //       setSubmitStatus('error');
// //       setTimeout(() => setSubmitStatus('idle'), 4000);
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   return (
// //     <>
// //       <style jsx global>{`
// //         * {
// //           margin: 0;
// //           padding: 0;
// //           box-sizing: border-box;
// //         }

// //         body {
// //           font-family: 'Comic Neue', 'Comic Neue', 'Segoe UI Emoji', 'Apple Color Emoji', 'Noto Color Emoji', sans-serif;
// //           overflow-x: hidden;
// //         }

// //         /* Custom scrollbar */
// //         ::-webkit-scrollbar {
// //           width: 10px;
// //         }

// //         ::-webkit-scrollbar-track {
// //           background: #fce4ec;
// //           border-radius: 10px;
// //         }

// //         ::-webkit-scrollbar-thumb {
// //           background: linear-gradient(135deg, #f06292, #f8bbd0);
// //           border-radius: 10px;
// //         }

// //         ::-webkit-scrollbar-thumb:hover {
// //           background: linear-gradient(135deg, #ec407a, #f48fb1);
// //         }

// //         /* Animations */
// //         @keyframes float {
// //           0%, 100% { transform: translateY(0px) rotate(0deg); }
// //           50% { transform: translateY(-20px) rotate(5deg); }
// //         }
        
// //         @keyframes float-delayed {
// //           0%, 100% { transform: translateY(0px) rotate(0deg); }
// //           50% { transform: translateY(-15px) rotate(-5deg); }
// //         }
        
// //         @keyframes float-slow {
// //           0%, 100% { transform: translateY(0px) rotate(0deg); }
// //           50% { transform: translateY(-10px) rotate(3deg); }
// //         }
        
// //         @keyframes bounce-slow {
// //           0%, 100% { transform: translateY(0px); }
// //           50% { transform: translateY(-8px); }
// //         }
        
// //         @keyframes spin-slow {
// //           from { transform: rotate(0deg); }
// //           to { transform: rotate(360deg); }
// //         }
        
// //         @keyframes pulse {
// //           0%, 100% { transform: scale(1); opacity: 0.6; }
// //           50% { transform: scale(1.1); opacity: 1; }
// //         }
        
// //         @keyframes shake {
// //           0%, 100% { transform: translateX(0); }
// //           25% { transform: translateX(-5px); }
// //           75% { transform: translateX(5px); }
// //         }
        
// //         @keyframes glow {
// //           0%, 100% { box-shadow: 0 0 5px rgba(236, 72, 153, 0.3); }
// //           50% { box-shadow: 0 0 20px rgba(236, 72, 153, 0.6); }
// //         }
        
// //         @keyframes slideInLeft {
// //           from {
// //             opacity: 0;
// //             transform: translateX(-50px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateX(0);
// //           }
// //         }
        
// //         @keyframes slideInRight {
// //           from {
// //             opacity: 0;
// //             transform: translateX(50px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateX(0);
// //           }
// //         }
        
// //         @keyframes fadeInUp {
// //           from {
// //             opacity: 0;
// //             transform: translateY(30px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }

// //         .animate-float {
// //           animation: float 3s ease-in-out infinite;
// //         }
        
// //         .animate-float-delayed {
// //           animation: float-delayed 3.5s ease-in-out infinite 0.5s;
// //         }
        
// //         .animate-float-slow {
// //           animation: float-slow 4s ease-in-out infinite;
// //         }
        
// //         .animate-bounce-slow {
// //           animation: bounce-slow 2s ease-in-out infinite;
// //         }
        
// //         .animate-spin-slow {
// //           animation: spin-slow 8s linear infinite;
// //         }
        
// //         .animate-pulse-slow {
// //           animation: pulse 2s ease-in-out infinite;
// //         }
        
// //         .slide-in-left {
// //           animation: slideInLeft 0.6s ease-out;
// //         }
        
// //         .slide-in-right {
// //           animation: slideInRight 0.6s ease-out;
// //         }
        
// //         .fade-in-up {
// //           animation: fadeInUp 0.6s ease-out;
// //         }

// //         /* Hover effects */
// //         .hover-glow:hover {
// //           animation: glow 0.5s ease-in-out;
// //         }
        
// //         .hover-shake:hover {
// //           animation: shake 0.3s ease-in-out;
// //         }
        
// //         /* Card styles */
// //         .contact-card {
// //           background: rgba(255, 255, 255, 0.85);
// //           backdrop-filter: blur(10px);
// //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// //         }
        
// //         .contact-card:hover {
// //           transform: translateY(-8px);
// //           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
// //           background: rgba(255, 255, 255, 0.95);
// //         }
        
// //         /* Button ripple effect */
// //         .btn-ripple {
// //           position: relative;
// //           overflow: hidden;
// //         }
        
// //         .btn-ripple::after {
// //           content: '';
// //           position: absolute;
// //           top: 50%;
// //           left: 50%;
// //           width: 0;
// //           height: 0;
// //           border-radius: 50%;
// //           background: rgba(255, 255, 255, 0.5);
// //           transform: translate(-50%, -50%);
// //           transition: width 0.6s, height 0.6s;
// //         }
        
// //         .btn-ripple:active::after {
// //           width: 300px;
// //           height: 300px;
// //         }
        
// //         /* Input focus effects */
// //         .input-focus-effect {
// //           transition: all 0.3s ease;
// //         }
        
// //         .input-focus-effect:focus {
// //           transform: scale(1.02);
// //           box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.2);
// //         }
        
// //         /* Gradient text */
// //         .gradient-text {
// //           background: linear-gradient(135deg, #ec489a, #f59e0b, #8b5cf6);
// //           -webkit-background-clip: text;
// //           background-clip: text;
// //           color: transparent;
// //           background-size: 200% 200%;
// //           animation: gradientShift 3s ease infinite;
// //         }
        
// //         @keyframes gradientShift {
// //           0%, 100% { background-position: 0% 50%; }
// //           50% { background-position: 100% 50%; }
// //         }
        
// //         /* Responsive adjustments */
// //         @media (max-width: 768px) {
// //           .container {
// //             padding-left: 1rem;
// //             padding-right: 1rem;
// //           }
// //         }
        
// //         /* Loading spinner */
// //         .spinner {
// //           border: 3px solid rgba(255, 255, 255, 0.3);
// //           border-radius: 50%;
// //           border-top: 3px solid white;
// //           width: 24px;
// //           height: 24px;
// //           animation: spin 0.8s linear infinite;
// //         }
        
// //         @keyframes spin {
// //           0% { transform: rotate(0deg); }
// //           100% { transform: rotate(360deg); }
// //         }
        
// //         /* Rainbow border animation */
// //         .rainbow-border {
// //           position: relative;
// //           overflow: hidden;
// //         }
        
// //         .rainbow-border::before {
// //           content: '';
// //           position: absolute;
// //           top: -2px;
// //           left: -2px;
// //           right: -2px;
// //           bottom: -2px;
// //           background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
// //           background-size: 400%;
// //           border-radius: inherit;
// //           opacity: 0;
// //           transition: opacity 0.3s;
// //           z-index: -1;
// //         }
        
// //         .rainbow-border:hover::before {
// //           opacity: 1;
// //           animation: rainbowSpin 3s linear infinite;
// //         }
        
// //         @keyframes rainbowSpin {
// //           0% { background-position: 0% 50%; }
// //           100% { background-position: 400% 50%; }
// //         }
// //       `}</style>

// //       <main className="min-h-screen bg-gradient-to-br from-sky-100 via-amber-50 to-pink-100 overflow-x-hidden relative">
// //         {/* Decorative floating elements */}
// //         <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //           <div className="absolute top-20 left-10 animate-float">
// //             <div className="text-5xl">🌈</div>
// //           </div>
// //           <div className="absolute top-40 right-20 animate-float-delayed">
// //             <div className="text-4xl">⭐</div>
// //           </div>
// //           <div className="absolute bottom-32 left-20 animate-float-slow">
// //             <div className="text-6xl">🌸</div>
// //           </div>
// //           <div className="absolute bottom-40 right-10 animate-bounce-slow">
// //             <div className="text-5xl">🐼</div>
// //           </div>
// //           <div className="absolute top-1/3 left-1/4 animate-spin-slow">
// //             <div className="text-3xl">🎈</div>
// //           </div>
// //           <div className="absolute bottom-1/4 right-1/3 animate-float">
// //             <div className="text-4xl">🦋</div>
// //           </div>
// //           <div className="absolute top-1/2 left-5 animate-pulse-slow">
// //             <div className="text-2xl">✨</div>
// //           </div>
// //           <div className="absolute top-10 right-1/3 animate-float-delayed">
// //             <div className="text-3xl">🪄</div>
// //           </div>
// //           <div className="absolute bottom-10 left-1/2 animate-bounce-slow">
// //             <div className="text-4xl">🎨</div>
// //           </div>
// //         </div>

// //         {/* Background pattern */}
// //         <div className="absolute inset-0 opacity-5 pointer-events-none">
// //           <div className="absolute inset-0" style={{
// //             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C27B0' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
// //             backgroundRepeat: 'repeat'
// //           }}></div>
// //         </div>

// //         {/* Main Content */}
// //         <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 max-w-7xl">
// //           {/* Header Section */}
// //           <div className="text-center mb-16 fade-in-up">
// //             <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg hover:shadow-xl transition-all duration-300">
// //               <span className="text-3xl animate-bounce-slow">📞</span>
// //               <span className="text-pink-600 font-bold text-lg">Let's Connect!</span>
// //               <span className="text-3xl animate-bounce-slow">💌</span>
// //             </div>
// //             <h1 className="gradient-text text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">
// //               Contact Us
// //             </h1>
// //             <div className="flex justify-center gap-3 mb-6">
// //               <div className="w-20 h-1.5 bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 rounded-full animate-pulse-slow"></div>
// //               <div className="w-10 h-1.5 bg-gradient-to-r from-yellow-400 via-green-400 to-pink-400 rounded-full animate-pulse-slow"></div>
// //               <div className="w-20 h-1.5 bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 rounded-full animate-pulse-slow"></div>
// //             </div>
// //             <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg md:text-xl font-medium">
// //               💖 We'd love to hear from you! Send us a message or visit us. Jesus loves you! ✝️
// //             </p>
// //           </div>

// //           {/* Two Column Layout */}
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
// //             {/* Left Column - Contact Information */}
// //             <div className="contact-card rounded-3xl shadow-2xl overflow-hidden border border-white/50 slide-in-left rainbow-border">
// //               {/* Top Decorative Banner */}
// //               <div className="bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-pink-400 h-3 animate-pulse-slow"></div>
              
// //               {/* Church / Ministry Name */}
// //               <div className="p-6 md:p-8 text-center border-b border-gray-100 bg-gradient-to-b from-white/50 to-transparent">
// //                 <div className="inline-block bg-gradient-to-br from-amber-100 to-pink-100 rounded-full p-4 mb-4 shadow-lg hover:scale-110 transition-transform duration-300">
// //                   <span className="text-5xl">⛪</span>
// //                 </div>
// //                 <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Jesus Redeems Kids Ministry</h2>
// //                 <p className="text-gray-600 text-base">Jesus Redeems Ministries</p>
// //                 <p className="text-amber-600 font-semibold text-sm mt-1 italic">Vineyard of God</p>
// //               </div>

// //               {/* Address Section */}
// //               <div className="p-6 md:p-8 space-y-6">
// //                 {/* Location */}
// //                 <div className="flex items-start gap-4 group cursor-pointer">
// //                   <div className="bg-gradient-to-br from-red-100 to-red-200 p-3 rounded-2xl group-hover:scale-110 transition-all duration-300 shadow-md">
// //                     <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
// //                     </svg>
// //                   </div>
// //                   <div>
// //                     <h3 className="font-bold text-gray-800 text-lg mb-1">Our Location</h3>
// //                     <p className="text-gray-600 leading-relaxed">
// //                       Nalumavadi, Tuticorin District,<br />
// //                       Tamil Nadu - 628 211, India
// //                     </p>
// //                     <div className="mt-3 flex gap-2 flex-wrap">
// //                       <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">📍 India</span>
// //                       <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">🇮🇳 Tamil Nadu</span>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Email */}
// //                 <div className="flex items-start gap-4 group cursor-pointer">
// //                   <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-2xl group-hover:scale-110 transition-all duration-300 shadow-md">
// //                     <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
// //                     </svg>
// //                   </div>
// //                   <div>
// //                     <h3 className="font-bold text-gray-800 text-lg mb-1">Email Us</h3>
// //                     <a href="mailto:kids@jesusredeems.org" className="text-blue-600 hover:text-blue-800 hover:underline break-all text-lg font-medium transition-colors">
// //                       kids@jesusredeems.org
// //                     </a>
// //                     <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">📨 We reply within 24 hours!</p>
// //                   </div>
// //                 </div>

// //                 {/* WhatsApp & Telephone */}
// //                 <div className="space-y-4">
// //                   <div className="flex items-start gap-4 group cursor-pointer">
// //                     <div className="bg-gradient-to-br from-green-100 to-green-200 p-3 rounded-2xl group-hover:scale-110 transition-all duration-300 shadow-md">
// //                       <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 16c0 1.66-1.343 3-3 3H6c-1.66 0-3-1.343-3-3V8c0-1.66 1.343-3 3-3h12c1.66 0 3 1.343 3 3v8z" />
// //                       </svg>
// //                     </div>
// //                     <div>
// //                       <h3 className="font-bold text-gray-800 text-lg mb-1">WhatsApp</h3>
// //                       <a href="https://wa.me/919488375315" className="text-green-600 hover:text-green-800 hover:underline text-xl font-bold transition-colors">
// //                         9488375315
// //                       </a>
// //                       <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">💬 Click to chat with us!</p>
// //                     </div>
// //                   </div>

// //                   <div className="flex items-start gap-4 group cursor-pointer">
// //                     <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-3 rounded-2xl group-hover:scale-110 transition-all duration-300 shadow-md">
// //                       <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
// //                       </svg>
// //                     </div>
// //                     <div>
// //                       <h3 className="font-bold text-gray-800 text-lg mb-1">Telephone</h3>
// //                       <a href="tel:+914639353535" className="text-purple-600 hover:text-purple-800 hover:underline text-xl font-bold transition-colors">
// //                         04639 353535
// //                       </a>
// //                       <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">⏰ Mon-Sat, 9AM - 6PM IST</p>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Social Links */}
// //                 <div className="mt-6 pt-4 border-t-2 border-gray-100 text-center">
// //                   <p className="text-sm text-gray-600 flex items-center justify-center gap-2 font-medium">
// //                     <span>✨</span> Follow us for fun Bible stories & activities! <span>✨</span>
// //                   </p>
// //                   <div className="flex justify-center gap-6 mt-4">
// //                     <span className="text-3xl cursor-pointer hover:scale-125 transition-all duration-300 hover:shadow-lg inline-block">📘</span>
// //                     <span className="text-3xl cursor-pointer hover:scale-125 transition-all duration-300 hover:shadow-lg inline-block">📸</span>
// //                     <span className="text-3xl cursor-pointer hover:scale-125 transition-all duration-300 hover:shadow-lg inline-block">🎵</span>
// //                     <span className="text-3xl cursor-pointer hover:scale-125 transition-all duration-300 hover:shadow-lg inline-block">📺</span>
// //                   </div>
// //                 </div>

// //                 {/* Map link */}
// //                 <div className="text-center pt-2">
// //                   <a href="#" className="text-sm text-pink-500 hover:text-pink-700 inline-flex items-center gap-1 font-medium transition-colors">
// //                     🗺️ View on Google Maps
// //                     <span>→</span>
// //                   </a>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Right Column - Contact Form */}
// //             <div className="contact-card rounded-3xl shadow-2xl p-6 md:p-8 border border-white/50 slide-in-right">
// //               <div className="flex items-center justify-center gap-3 mb-6">
// //                 <span className="text-4xl animate-bounce-slow">✏️</span>
// //                 <h2 className="text-2xl md:text-3xl font-bold gradient-text">Send us a message!</h2>
// //                 <span className="text-4xl animate-bounce-slow">🌟</span>
// //               </div>
// //               <p className="text-gray-600 mb-8 text-center text-base">
// //                 💝 We would love to pray for you or answer any questions about our VBS and Kids Ministry.
// //               </p>
              
// //               <form onSubmit={handleSubmit} className="space-y-6">
// //                 <div className="group">
// //                   <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
// //                     <span className="text-xl">👧</span> Your Name <span className="text-red-500">*</span>
// //                   </label>
// //                   <input
// //                     type="text"
// //                     name="name"
// //                     required
// //                     value={formData.name}
// //                     onChange={handleChange}
// //                     className="input-focus-effect w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-400 focus:ring-4 focus:ring-pink-200 outline-none transition-all bg-white/80"
// //                     placeholder="e.g., Little Sarah or John"
// //                   />
// //                 </div>

// //                 <div className="group">
// //                   <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
// //                     <span className="text-xl">📧</span> Email Address <span className="text-red-500">*</span>
// //                   </label>
// //                   <input
// //                     type="email"
// //                     name="email"
// //                     required
// //                     value={formData.email}
// //                     onChange={handleChange}
// //                     className="input-focus-effect w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-400 focus:ring-4 focus:ring-pink-200 outline-none transition-all bg-white/80"
// //                     placeholder="your@email.com"
// //                   />
// //                 </div>

// //                 <div className="group">
// //                   <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
// //                     <span className="text-xl">📌</span> Subject
// //                   </label>
// //                   <select
// //                     name="subject"
// //                     value={formData.subject}
// //                     onChange={handleChange}
// //                     className="input-focus-effect w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-400 focus:ring-4 focus:ring-pink-200 outline-none transition-all bg-white/80 cursor-pointer"
// //                   >
// //                     <option value="">✨ Select a topic... ✨</option>
// //                     <option value="VBS Registration">🙌 VBS Registration</option>
// //                     <option value="Prayer Request">🙏 Prayer Request</option>
// //                     <option value="Volunteer">❤️ Volunteer with us</option>
// //                     <option value="General Question">💬 General Question</option>
// //                     <option value="Feedback">⭐ Feedback & Suggestions</option>
// //                   </select>
// //                 </div>

// //                 <div className="group">
// //                   <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
// //                     <span className="text-xl">💖</span> Your Message <span className="text-red-500">*</span>
// //                   </label>
// //                   <textarea
// //                     name="message"
// //                     required
// //                     rows={5}
// //                     value={formData.message}
// //                     onChange={handleChange}
// //                     className="input-focus-effect w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-400 focus:ring-4 focus:ring-pink-200 outline-none transition-all bg-white/80 resize-none"
// //                     placeholder="Write your message here... God bless you! ✝️"
// //                   ></textarea>
// //                 </div>

// //                 <button
// //                   type="submit"
// //                   disabled={isSubmitting}
// //                   className="btn-ripple w-full py-4 px-6 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 hover:from-pink-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold rounded-xl shadow-xl transform transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg bg-size-200 animate-gradient"
// //                   style={{
// //                     backgroundSize: '200% auto',
// //                   }}
// //                 >
// //                   {isSubmitting ? (
// //                     <>
// //                       <div className="spinner"></div>
// //                       <span>Sending Your Message...</span>
// //                     </>
// //                   ) : (
// //                     <>
// //                       <span className="text-2xl">📨</span>
// //                       <span>Send Message</span>
// //                       <span className="text-2xl">✨</span>
// //                     </>
// //                   )}
// //                 </button>

// //                 {submitStatus === 'success' && (
// //                   <div className="mt-4 p-4 bg-green-100 border-2 border-green-400 text-green-700 rounded-xl text-center animate-bounce-slow">
// //                     <div className="flex items-center justify-center gap-2 mb-1">
// //                       <span className="text-2xl">🎉</span>
// //                       <span className="font-bold">Hooray!</span>
// //                       <span className="text-2xl">🎉</span>
// //                     </div>
// //                     <p>Your message was sent successfully! We'll get back to you soon. God bless! ✝️</p>
// //                   </div>
// //                 )}
                
// //                 {submitStatus === 'error' && (
// //                   <div className="mt-4 p-4 bg-red-100 border-2 border-red-400 text-red-700 rounded-xl text-center">
// //                     <div className="flex items-center justify-center gap-2 mb-1">
// //                       <span className="text-2xl">😢</span>
// //                       <span className="font-bold">Oops!</span>
// //                       <span className="text-2xl">😢</span>
// //                     </div>
// //                     <p>Something went wrong. Please try again or call us directly.</p>
// //                   </div>
// //                 )}

// //                 <div className="text-center pt-4">
// //                   <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
// //                     <span>✝️</span>
// //                     <span>Jesus said, "Let the little children come to me." — Matthew 19:14</span>
// //                     <span>✝️</span>
// //                   </p>
// //                 </div>
// //               </form>
// //             </div>
// //           </div>

// //           {/* Decorative footer */}
// //           <div className="text-center mt-20 pt-8 border-t-2 border-white/30">
// //             <div className="flex justify-center items-center gap-3 flex-wrap">
// //               <span className="text-3xl animate-float">🇨🇳</span>
// //               <span className="text-2xl animate-pulse-slow">❤️</span>
// //               <span className="text-3xl animate-float-delayed">🇰🇷</span>
// //               <span className="text-gray-400 mx-2">|</span>
// //               <span className="text-gray-700 font-medium">Jesus loves the little children of all nations!</span>
// //               <span className="text-gray-400 mx-2">|</span>
// //               <span className="text-3xl animate-float-delayed">🇰🇷</span>
// //               <span className="text-2xl animate-pulse-slow">❤️</span>
// //               <span className="text-3xl animate-float">🇨🇳</span>
// //             </div>
// //             <p className="text-xs text-gray-500 mt-4">
// //               © 2024 Jesus Redeems Kids Ministry | All God's Children Are Welcome! 🌈
// //             </p>
// //           </div>
// //         </div>
// //       </main>

// //       {/* Add Google Fonts for better typography */}
// //       <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap" rel="stylesheet" />
// //     </>
// //   );
// // }



// // 'use client';

// // import { useState } from 'react';

// // export default function ContactPage() {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     subject: '',
// //     message: '',
// //   });
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [submitStatus, setSubmitStatus] = useState('idle');

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setIsSubmitting(true);
// //     setSubmitStatus('idle');

// //     // Get existing submissions from localStorage
// //     const existingSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    
// //     const newSubmission = {
// //       id: Date.now(),
// //       ...formData,
// //       submittedAt: new Date().toISOString(),
// //     };
    
// //     existingSubmissions.push(newSubmission);
// //     localStorage.setItem('contactSubmissions', JSON.stringify(existingSubmissions));
    
// //     // Also send to Google Sheets via FormSubmit or similar service
// //     try {
// //       // Using FormSubmit.co to send to email (free service)
// //       const formSubmitUrl = 'https://formsubmit.co/ajax/kids@jesusredeems.org';
      
// //       await fetch(formSubmitUrl, {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({
// //           name: formData.name,
// //           email: formData.email,
// //           subject: formData.subject,
// //           message: formData.message,
// //           _subject: `New Contact Form Submission: ${formData.subject}`,
// //           _template: 'table',
// //         }),
// //       });
      
// //       setSubmitStatus('success');
// //       setFormData({ name: '', email: '', subject: '', message: '' });
// //       setTimeout(() => setSubmitStatus('idle'), 4000);
// //     } catch (error) {
// //       console.error('Submission error:', error);
// //       setSubmitStatus('error');
// //       setTimeout(() => setSubmitStatus('idle'), 4000);
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   return (
// //     <>
// //       <style jsx>{`
// //         @keyframes birdFloat {
// //           0% { transform: translateY(0px); }
// //           50% { transform: translateY(-25px); }
// //           100% { transform: translateY(0px); }
// //         }

// //         @keyframes float1 {
// //           0%, 100% { transform: translateY(0px) rotate(0deg); }
// //           50% { transform: translateY(-30px) rotate(10deg); }
// //         }

// //         @keyframes float2 {
// //           0%, 100% { transform: translateY(0px) rotate(0deg); }
// //           50% { transform: translateY(-20px) rotate(-8deg); }
// //         }

// //         @keyframes float3 {
// //           0%, 100% { transform: translateY(0px) rotate(0deg); }
// //           50% { transform: translateY(-25px) rotate(5deg); }
// //         }

// //         @keyframes bounce {
// //           0%, 100% { transform: translateY(0px); }
// //           50% { transform: translateY(-15px); }
// //         }

// //         @keyframes spin {
// //           from { transform: rotate(0deg); }
// //           to { transform: rotate(360deg); }
// //         }

// //         @keyframes pulse {
// //           0%, 100% { transform: scale(1); opacity: 0.7; }
// //           50% { transform: scale(1.1); opacity: 1; }
// //         }

// //         @keyframes shake {
// //           0%, 100% { transform: translateX(0); }
// //           25% { transform: translateX(-8px); }
// //           75% { transform: translateX(8px); }
// //         }

// //         @keyframes fadeInUp {
// //           from { opacity: 0; transform: translateY(50px); }
// //           to { opacity: 1; transform: translateY(0); }
// //         }

// //         @keyframes slideInLeft {
// //           from { opacity: 0; transform: translateX(-100px); }
// //           to { opacity: 1; transform: translateX(0); }
// //         }

// //         @keyframes slideInRight {
// //           from { opacity: 0; transform: translateX(100px); }
// //           to { opacity: 1; transform: translateX(0); }
// //         }

// //         .contact-container {
// //           min-height: 100vh;
// //           background: linear-gradient(135deg, #1a237e 0%, #283593 30%, #3f51b5 60%, #5c6bc0 100%);
// //           position: relative;
// //           overflow-x: hidden;
// //           font-family: 'Comic Neue', 'Segoe UI Emoji', 'Apple Color Emoji', sans-serif;
// //         }

// //         .emoji-float1 { animation: float1 4s ease-in-out infinite; }
// //         .emoji-float2 { animation: float2 3.5s ease-in-out infinite; }
// //         .emoji-float3 { animation: float3 5s ease-in-out infinite; }
// //         .emoji-bounce { animation: bounce 2s ease-in-out infinite; }
// //         .emoji-spin { animation: spin 8s linear infinite; }
// //         .emoji-pulse { animation: pulse 2s ease-in-out infinite; }
// //         .emoji-shake:hover { animation: shake 0.5s ease-in-out; }

// //         .info-card, .form-card {
// //           background: rgba(255, 255, 255, 0.95);
// //           border-radius: 30px;
// //           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
// //           transition: all 0.3s ease;
// //           border: 1px solid rgba(255, 255, 255, 0.3);
// //           position: relative;
// //           overflow: hidden;
// //         }

// //         /* Rainbow line at the top of cards */
// //         .info-card::before, .form-card::before {
// //           content: '';
// //           position: absolute;
// //           top: 0;
// //           left: 0;
// //           right: 0;
// //           height: 8px;
// //           background: linear-gradient(90deg, #ff0000, #ff7700, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3);
// //           border-radius: 30px 30px 0 0;
// //         }

// //         .info-card:hover, .form-card:hover {
// //           transform: translateY(-10px);
// //           box-shadow: 0 30px 50px rgba(0, 0, 0, 0.25);
// //         }

// //         .card-1 { animation: slideInLeft 0.8s ease-out; }
// //         .card-2 { animation: slideInRight 0.8s ease-out; }
// //         .header-animation { animation: fadeInUp 0.8s ease-out; }

// //         .input-field {
// //           width: 100%;
// //           padding: 14px 18px;
// //           border: 2px solid #e0e0e0;
// //           border-radius: 20px;
// //           font-size: 16px;
// //           transition: all 0.3s ease;
// //           background: white;
// //         }

// //         .input-field:focus {
// //           outline: none;
// //           border-color: #3f51b5;
// //           box-shadow: 0 0 0 4px rgba(63, 81, 181, 0.2);
// //         }

// //         textarea.input-field {
// //           resize: vertical;
// //           min-height: 120px;
// //         }

// //         .submit-btn {
// //           width: 100%;
// //           padding: 16px;
// //           background: linear-gradient(135deg, #1a237e, #3f51b5);
// //           color: white;
// //           border: none;
// //           border-radius: 30px;
// //           font-size: 18px;
// //           font-weight: bold;
// //           cursor: pointer;
// //           transition: all 0.3s ease;
// //         }

// //         .submit-btn:hover:not(:disabled) {
// //           transform: translateY(-3px);
// //           background: linear-gradient(135deg, #283593, #1a237e);
// //         }

// //         .submit-btn:disabled {
// //           opacity: 0.6;
// //           cursor: not-allowed;
// //         }

// //         .success-message {
// //           background: #c8e6c9;
// //           border: 2px solid #4caf50;
// //           border-radius: 20px;
// //           padding: 15px;
// //           text-align: center;
// //         }

// //         .error-message {
// //           background: #ffcdd2;
// //           border: 2px solid #f44336;
// //           border-radius: 20px;
// //           padding: 15px;
// //           text-align: center;
// //         }

// //         .info-item {
// //           display: flex;
// //           gap: 15px;
// //           padding: 15px;
// //           border-radius: 25px;
// //           transition: all 0.3s ease;
// //           cursor: pointer;
// //           background: rgba(63, 81, 181, 0.15);
// //           box-shadow: 0 4px 12px rgba(26, 35, 126, 0.15);
// //           margin-bottom: 15px;
// //         }

// //         .info-item:hover {
// //           background: rgba(63, 81, 181, 0.3);
// //           transform: translateX(10px);
// //           box-shadow: 0 6px 16px rgba(26, 35, 126, 0.3);
// //         }

// //         .info-icon {
// //           width: 50px;
// //           height: 50px;
// //           background: linear-gradient(135deg, #c5cae9, #9fa8da);
// //           border-radius: 20px;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           font-size: 24px;
// //         }

// //         .info-item:hover .info-icon {
// //           transform: scale(1.1);
// //         }

// //         .gradient-text {
// //           background: linear-gradient(135deg, #5c6bc0, #1a237e);
// //           -webkit-background-clip: text;
// //           background-clip: text;
// //           color: transparent;
// //         }

// //         .line-decoration {
// //           width: 80px;
// //           height: 4px;
// //           background: linear-gradient(90deg, #5c6bc0, #1a237e);
// //           border-radius: 10px;
// //           margin: 15px auto;
// //         }

// //         @media (max-width: 768px) {
// //           .info-icon {
// //             width: 40px;
// //             height: 40px;
// //             font-size: 20px;
// //           }
// //         }

// //         ::-webkit-scrollbar {
// //           width: 12px;
// //         }
// //         ::-webkit-scrollbar-track {
// //           background: #e8eaf6;
// //           border-radius: 10px;
// //         }
// //         ::-webkit-scrollbar-thumb {
// //           background: #3f51b5;
// //           border-radius: 10px;
// //         }
// //       `}</style>

// //       <div className="contact-container">
// //         {/* Floating Emojis */}
// //         <div style={{ position: 'absolute', top: '10%', left: '5%', fontSize: '50px', zIndex: 0 }} className="emoji-float1">🌈</div>
// //         <div style={{ position: 'absolute', top: '20%', right: '8%', fontSize: '40px', zIndex: 0 }} className="emoji-float2">⭐</div>
// //         <div style={{ position: 'absolute', bottom: '15%', left: '10%', fontSize: '60px', zIndex: 0 }} className="emoji-float3">🌸</div>
// //         <div style={{ position: 'absolute', bottom: '25%', right: '12%', fontSize: '45px', zIndex: 0 }} className="emoji-bounce">🐼</div>
// //         <div style={{ position: 'absolute', top: '40%', left: '15%', fontSize: '35px', zIndex: 0 }} className="emoji-spin">🎈</div>
// //         <div style={{ position: 'absolute', top: '60%', right: '5%', fontSize: '55px', zIndex: 0 }} className="emoji-float1">🦋</div>
// //         <div style={{ position: 'absolute', top: '75%', left: '20%', fontSize: '30px', zIndex: 0 }} className="emoji-pulse">✨</div>

// //         {/* Main Content */}
// //         <div style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
          
// //           {/* Header - Contact Us Centered with Bird on Right Side */}
// //           <div className="header-animation" style={{ textAlign: 'center', marginBottom: '60px' }}>
// //             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
// //               <h1 style={{ fontSize: '3.5rem', margin: 0, background: 'linear-gradient(135deg, #fff, #e8eaf6)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Contact Us</h1>
// //               <img src="/assets/birds1.png" alt="bird" style={{ width: '80px', height: '80px', objectFit: 'contain', animation: 'birdFloat 2s ease-in-out infinite' }} />
// //             </div>
// //             <div className="line-decoration"></div>
// //           </div>

// //           {/* Two Columns - Same size */}
// //           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            
// //             {/* Left Column - Contact Info */}
// //             <div className="info-card card-1" style={{ padding: '30px' }}>
              
// //               {/* Church Name with line */}
// //               <div style={{ textAlign: 'center', marginBottom: '30px' }}>
// //                 <div style={{ 
// //                   background: 'linear-gradient(135deg, #c5cae9, #9fa8da)',
// //                   width: '80px',
// //                   height: '80px',
// //                   borderRadius: '50%',
// //                   display: 'inline-flex',
// //                   alignItems: 'center',
// //                   justifyContent: 'center',
// //                   marginBottom: '15px',
// //                   fontSize: '45px',
// //                 }}>⛪</div>
// //                 <h2 style={{ fontSize: '1.5rem', color: '#1a237e', marginBottom: '5px' }}>Jesus Redeems Kids Ministry</h2>
// //                 <div style={{ width: '50px', height: '3px', background: '#3f51b5', margin: '10px auto' }}></div>
// //                 <p style={{ color: '#666' }}>Jesus Redeems Ministries</p>
// //                 <p style={{ color: '#3f51b5', fontStyle: 'italic' }}>Vineyard of God</p>
// //               </div>

// //               {/* Location with Google Maps */}
// //               <div className="info-item">
// //                 <div className="info-icon">📍</div>
// //                 <div style={{ flex: 1 }}>
// //                   <h3 style={{ fontWeight: 'bold', marginBottom: '5px', color: '#1a237e' }}>Location</h3>
// //                   <p style={{ color: '#555', lineHeight: '1.5' }}>
// //                     Nalumavadi, Tuticorin District,<br />
// //                     Tamil Nadu - 628 211, India
// //                   </p>
// //                   {/* Google Maps Embed */}
// //                   <iframe 
// //                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251867.30631606928!2d77.89715626161591!3d8.764576780607327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03f8c6e5b9a3b7%3A0x8f5e5c5e5c5e5c5e!2sTuticorin!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
// //                     width="100%" 
// //                     height="150" 
// //                     style={{ border: 0, borderRadius: '15px', marginTop: '10px' }}
// //                     allowFullScreen=""
// //                     loading="lazy"
// //                     referrerPolicy="no-referrer-when-downgrade"
// //                   ></iframe>
// //                 </div>
// //               </div>

// //               {/* Address */}
// //               <div className="info-item">
// //                 <div className="info-icon">✉️</div>
// //                 <div>
// //                   <h3 style={{ fontWeight: 'bold', marginBottom: '5px', color: '#1a237e' }}>Address</h3>
// //                   <p style={{ color: '#555', lineHeight: '1.5' }}>
// //                     Nalumavadi Post,<br />
// //                     Tuticorin District,<br />
// //                     Tamil Nadu - 628 211, India
// //                   </p>
// //                 </div>
// //               </div>

// //               {/* Telephone */}
// //               <div className="info-item">
// //                 <div className="info-icon">📞</div>
// //                 <div>
// //                   <h3 style={{ fontWeight: 'bold', marginBottom: '5px', color: '#1a237e' }}>Telephone</h3>
// //                   <a href="tel:+914639353535" style={{ color: '#1a237e', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 'bold' }}>
// //                     04639 353535
// //                   </a>
// //                   <p style={{ fontSize: '12px', color: '#999', marginTop: '5px' }}>⏰ Mon-Sat, 9AM - 6PM IST</p>
// //                 </div>
// //               </div>

// //               {/* WhatsApp */}
// //               <div className="info-item">
// //                 <div className="info-icon">💬</div>
// //                 <div>
// //                   <h3 style={{ fontWeight: 'bold', marginBottom: '5px', color: '#1a237e' }}>WhatsApp</h3>
// //                   <a href="https://wa.me/919488375315" style={{ color: '#1a237e', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 'bold' }}>
// //                     9488375315
// //                   </a>
// //                   <p style={{ fontSize: '12px', color: '#999', marginTop: '5px' }}>💬 Click to chat with us!</p>
// //                 </div>
// //               </div>

// //               {/* Email */}
// //               <div className="info-item">
// //                 <div className="info-icon">📧</div>
// //                 <div>
// //                   <h3 style={{ fontWeight: 'bold', marginBottom: '5px', color: '#1a237e' }}>Email</h3>
// //                   <a href="mailto:kids@jesusredeems.org" style={{ color: '#1a237e', textDecoration: 'none', fontSize: '1rem', fontWeight: 'bold' }}>
// //                     kids@jesusredeems.org
// //                   </a>
// //                   <p style={{ fontSize: '12px', color: '#999', marginTop: '5px' }}>📨 We reply within 24 hours!</p>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Right Column - Contact Form */}
// //             <div className="form-card card-2" style={{ padding: '30px' }}>
// //               <div style={{ textAlign: 'center', marginBottom: '25px' }}>
// //                 <span style={{ fontSize: '40px' }} className="emoji-bounce">✏️</span>
// //                 <h2 style={{ fontSize: '2rem', margin: '10px 0', background: 'linear-gradient(135deg, #1a237e, #3f51b5)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Send us a message!</h2>
// //                 <div style={{ width: '50px', height: '3px', background: '#3f51b5', margin: '10px auto' }}></div>
// //                 <span style={{ fontSize: '40px' }} className="emoji-bounce">🌟</span>
// //               </div>
              
// //               <p style={{ textAlign: 'center', color: '#555', marginBottom: '30px' }}>
// //                 💝 We would love to pray for you or answer any questions about our VBS and Kids Ministry.
// //               </p>

// //               <form onSubmit={handleSubmit}>
// //                 <div style={{ marginBottom: '20px' }}>
// //                   <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: '#1a237e', fontWeight: 'bold' }}>
// //                     <span>👧</span> Your Name <span style={{ color: 'red' }}>*</span>
// //                   </label>
// //                   <input
// //                     type="text"
// //                     name="name"
// //                     required
// //                     value={formData.name}
// //                     onChange={handleChange}
// //                     className="input-field"
// //                     placeholder="e.g., Little Sarah or John"
// //                   />
// //                 </div>

// //                 <div style={{ marginBottom: '20px' }}>
// //                   <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: '#1a237e', fontWeight: 'bold' }}>
// //                     <span>📧</span> Email Address <span style={{ color: 'red' }}>*</span>
// //                   </label>
// //                   <input
// //                     type="email"
// //                     name="email"
// //                     required
// //                     value={formData.email}
// //                     onChange={handleChange}
// //                     className="input-field"
// //                     placeholder="your@email.com"
// //                   />
// //                 </div>

// //                 <div style={{ marginBottom: '20px' }}>
// //                   <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: '#1a237e', fontWeight: 'bold' }}>
// //                     <span>📌</span> Subject
// //                   </label>
// //                   <select
// //                     name="subject"
// //                     value={formData.subject}
// //                     onChange={handleChange}
// //                     className="input-field"
// //                   >
// //                     <option value="">✨ Select a topic... ✨</option>
// //                     <option value="VBS Registration">🙌 VBS Registration</option>
// //                     <option value="Prayer Request">🙏 Prayer Request</option>
// //                     <option value="Volunteer">❤️ Volunteer with us</option>
// //                     <option value="General Question">💬 General Question</option>
// //                     <option value="Feedback">⭐ Feedback & Suggestions</option>
// //                   </select>
// //                 </div>

// //                 <div style={{ marginBottom: '25px' }}>
// //                   <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: '#1a237e', fontWeight: 'bold' }}>
// //                     <span>💖</span> Your Message <span style={{ color: 'red' }}>*</span>
// //                   </label>
// //                   <textarea
// //                     name="message"
// //                     required
// //                     rows="5"
// //                     value={formData.message}
// //                     onChange={handleChange}
// //                     className="input-field"
// //                     placeholder="Write your message here... God bless you! ✝️"
// //                   ></textarea>
// //                 </div>

// //                 <button
// //                   type="submit"
// //                   disabled={isSubmitting}
// //                   className="submit-btn"
// //                 >
// //                   {isSubmitting ? (
// //                     <>⏳ Sending Your Message... ⏳</>
// //                   ) : (
// //                     <>📨 Send Message ✨</>
// //                   )}
// //                 </button>

// //                 {submitStatus === 'success' && (
// //                   <div className="success-message" style={{ marginTop: '20px' }}>
// //                     <div>🎉 Hooray! 🎉</div>
// //                     <p>Your message was sent successfully! We'll get back to you soon. God bless! ✝️</p>
// //                   </div>
// //                 )}

// //                 {submitStatus === 'error' && (
// //                   <div className="error-message" style={{ marginTop: '20px' }}>
// //                     <div>😢 Oops! 😢</div>
// //                     <p>Something went wrong. Please try again or call us directly.</p>
// //                   </div>
// //                 )}
// //               </form>
// //             </div>
// //           </div>

// //           {/* Footer */}
// //           <div style={{ marginTop: '60px', paddingTop: '30px', borderTop: '2px solid rgba(255,255,255,0.2)', textAlign: 'center' }}>
// //             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
// //               <span style={{ fontSize: '25px' }} className="emoji-pulse">❤️</span>
// //               <span style={{ fontWeight: 'bold', color: 'rgba(255,255,255,0.8)' }}>Jesus loves the little children of all the child of the world</span>
// //               <span style={{ fontSize: '25px' }} className="emoji-pulse">❤️</span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }







// 'use client';

// import { useState } from 'react';

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState('idle');

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const GOOGLE_SHEETS_API_URL = 'https://script.google.com/macros/s/AKfycbwvmS08AUQyPVnB5DAymwqBuwEwjDODZq7yBAS8jPRN9fbQL0i37njXPvCLOO5AKIfk/exec';

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Validate all fields except email
//     if (!formData.name.trim()) {
//       alert('Please enter your name');
//       return;
//     }
//     if (!formData.phone.trim()) {
//       alert('Please enter your phone number');
//       return;
//     }
//     if (!formData.subject.trim()) {
//       alert('Please select a subject');
//       return;
//     }
//     if (!formData.message.trim()) {
//       alert('Please enter your message');
//       return;
//     }
    
//     setIsSubmitting(true);
//     setSubmitStatus('idle');

//     const existingSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
//     const newSubmission = {
//       id: Date.now(),
//       name: formData.name,
//       email: formData.email || '',
//       phone: formData.phone || '',
//       subject: formData.subject,
//       message: formData.message,
//       submittedAt: new Date().toISOString(),
//     };
//     existingSubmissions.push(newSubmission);
//     localStorage.setItem('contactSubmissions', JSON.stringify(existingSubmissions));

//     try {
//       await fetch(GOOGLE_SHEETS_API_URL, {
//         method: 'POST',
//         mode: 'no-cors',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email || '',
//           phone: formData.phone || '',
//           subject: formData.subject || 'General',
//           message: formData.message,
//           timestamp: new Date().toISOString(),
//         }),
//       });

//       if (formData.email && formData.email.trim() !== '') {
//         await fetch('https://formsubmit.co/ajax/kids@jesusredeems.org', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({
//             name: formData.name,
//             email: formData.email,
//             phone: formData.phone,
//             subject: formData.subject,
//             message: formData.message,
//             _subject: `New Contact Form: ${formData.subject}`,
//           }),
//         }).catch(() => {});
//       }

//       setSubmitStatus('success');
//       setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
//       setTimeout(() => setSubmitStatus('idle'), 4000);
//     } catch (error) {
//       console.error('Submission error:', error);
//       setSubmitStatus('error');
//       setTimeout(() => setSubmitStatus('idle'), 4000);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const openWhatsApp = () => {
//     window.open('https://wa.me/919488375315', '_blank', 'noopener,noreferrer');
//   };

//   return (
//     <>
//       <style jsx>{`
//         @keyframes birdFloat {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-25px); }
//           100% { transform: translateY(0px); }
//         }

//         @keyframes float1 {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-30px) rotate(10deg); }
//         }

//         @keyframes float2 {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(-8deg); }
//         }

//         @keyframes float3 {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-25px) rotate(5deg); }
//         }

//         @keyframes bounce {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-15px); }
//         }

//         @keyframes spin {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }

//         @keyframes pulse {
//           0%, 100% { transform: scale(1); opacity: 0.7; }
//           50% { transform: scale(1.1); opacity: 1; }
//         }

//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(50px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         @keyframes slideInLeft {
//           from { opacity: 0; transform: translateX(-100px); }
//           to { opacity: 1; transform: translateX(0); }
//         }

//         @keyframes slideInRight {
//           from { opacity: 0; transform: translateX(100px); }
//           to { opacity: 1; transform: translateX(0); }
//         }

//         @keyframes starTwinkle {
//           0%, 100% { opacity: 0.3; transform: scale(1); }
//           50% { opacity: 1; transform: scale(1.2); }
//         }

//         .contact-container {
//           min-height: 100vh;
//           background: linear-gradient(135deg, #4145b1 0%, #3760c0 30%, #4676c3 60%, #4a8bc2 100%);
//           position: relative;
//           overflow-x: hidden;
//           font-family: 'Comic Neue', 'Segoe UI Emoji', 'Apple Color Emoji', sans-serif;
//         }

//         .star {
//           position: absolute;
//           background: white;
//           border-radius: 50%;
//           animation: starTwinkle 3s ease-in-out infinite;
//         }

//         .emoji-float1 { animation: float1 4s ease-in-out infinite; }
//         .emoji-float2 { animation: float2 3.5s ease-in-out infinite; }
//         .emoji-float3 { animation: float3 5s ease-in-out infinite; }
//         .emoji-bounce { animation: bounce 2s ease-in-out infinite; }
//         .emoji-spin { animation: spin 8s linear infinite; }
//         .emoji-pulse { animation: pulse 2s ease-in-out infinite; }

//         .info-card, .form-card {
//           background: rgba(255, 255, 255, 0.97);
//           border-radius: 30px;
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
//           transition: all 0.3s ease;
//           position: relative;
//           overflow: hidden;
//           height: 100%;
//           display: flex;
//           flex-direction: column;
//         }

//         .info-card::before, .form-card::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           height: 8px;
//           background: linear-gradient(90deg, #ff6b6b, #ffa502, #ffd32a, #2ed573, #0984e3, #6c5ce7, #a29bfe);
//           border-radius: 30px 30px 0 0;
//         }

//         .info-card:hover, .form-card:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 30px 50px rgba(0, 0, 0, 0.3);
//         }

//         .card-1 { animation: slideInLeft 0.8s ease-out; }
//         .card-2 { animation: slideInRight 0.8s ease-out; }
//         .header-animation { animation: fadeInUp 0.8s ease-out; }

//         .input-field {
//           width: 100%;
//           padding: 12px 16px;
//           border: 2px solid #e0e0e0;
//           border-radius: 20px;
//           font-size: 15px;
//           transition: all 0.3s ease;
//           background: white;
//         }

//         .input-field:focus {
//           outline: none;
//           border-color: #2a4a7f;
//           box-shadow: 0 0 0 4px rgba(42, 74, 127, 0.2);
//         }

//         textarea.input-field {
//           resize: vertical;
//           min-height: 100px;
//         }

//         .submit-btn {
//           width: 100%;
//           padding: 14px;
//           background: linear-gradient(135deg, #1350ab, #1a2a4f);
//           color: white;
//           border: none;
//           border-radius: 30px;
//           font-size: 18px;
//           font-weight: bold;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           position: relative;
//           overflow: hidden;
//         }

//         .submit-btn::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
//           transition: left 0.5s ease;
//         }

//         .submit-btn:hover::before {
//           left: 100%;
//         }

//         .submit-btn:hover:not(:disabled) {
//           transform: translateY(-3px);
//           background: linear-gradient(135deg, #1a2a4f, #2a4a7f);
//           box-shadow: 0 8px 20px rgba(0,0,0,0.3);
//         }

//         .submit-btn:disabled {
//           opacity: 0.6;
//           cursor: not-allowed;
//         }

//         .success-message {
//           background: linear-gradient(135deg, #c8e6c9, #a5d6a7);
//           border: 2px solid #4caf50;
//           border-radius: 20px;
//           padding: 15px;
//           text-align: center;
//           animation: fadeInUp 0.5s ease-out;
//         }

//         .error-message {
//           background: linear-gradient(135deg, #ffcdd2, #ef9a9a);
//           border: 2px solid #f44336;
//           border-radius: 20px;
//           padding: 15px;
//           text-align: center;
//           animation: fadeInUp 0.5s ease-out;
//         }

//         .info-item {
//           display: flex;
//           gap: 15px;
//           padding: 12px;
//           border-radius: 25px;
//           transition: all 0.3s ease;
//           cursor: pointer;
//           background: rgba(42, 74, 127, 0.12);
//           border: 1px solid rgba(42, 74, 127, 0.1);
//           margin-bottom: 12px;
//         }

//         .info-item:hover {
//           background: rgba(42, 74, 127, 0.25);
//           transform: translateX(10px);
//           border-color: rgba(42, 74, 127, 0.3);
//         }

//         .info-icon {
//           width: 48px;
//           height: 48px;
//           background: linear-gradient(135deg, #c5cae9, #9fa8da);
//           border-radius: 20px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 22px;
//           transition: transform 0.3s ease;
//         }

//         .info-item:hover .info-icon {
//           transform: scale(1.1);
//         }

//         .line-decoration {
//           width: 80px;
//           height: 4px;
//           background: linear-gradient(90deg, #2a4a7f, #6c5ce7);
//           border-radius: 10px;
//           margin: 12px auto;
//         }

//         /* Responsive Grid - Mobile First */
//         .two-columns {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 30px;
//           align-items: stretch;
//         }

//         /* Tablet and up (768px and above) */
//         @media (min-width: 768px) {
//           .two-columns {
//             grid-template-columns: 1fr 1fr;
//             gap: 40px;
//           }
//         }

//         /* Desktop (1024px and above) */
//         @media (min-width: 1024px) {
//           .two-columns {
//             gap: 50px;
//           }
//         }

//         /* Responsive Header */
//         .header-container {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           gap: 15px;
//           flex-wrap: wrap;
//         }

//         @media (min-width: 576px) {
//           .header-container {
//             flex-direction: row;
//             gap: 20px;
//           }
//         }

//         .contact-title {
//           font-size: 2.2rem;
//           margin: 0;
//           background: linear-gradient(135deg, #FFD700, #FFF8E7);
//           -webkit-background-clip: text;
//           background-clip: text;
//           color: transparent;
//           text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
//           padding-left: 0;
//           text-align: center;
//         }

//         @media (min-width: 576px) {
//           .contact-title {
//             font-size: 2.5rem;
//             padding-left: 40px;
//           }
//         }

//         @media (min-width: 768px) {
//           .contact-title {
//             font-size: 2.8rem;
//           }
//         }

//         @media (min-width: 1024px) {
//           .contact-title {
//             font-size: 3.2rem;
//             padding-left: 90px;
//           }
//         }

//         .bird-image {
//           width: 60px;
//           height: 60px;
//           object-fit: contain;
//           animation: birdFloat 2s ease-in-out infinite;
//         }

//         @media (min-width: 576px) {
//           .bird-image {
//             width: 70px;
//             height: 70px;
//           }
//         }

//         @media (min-width: 768px) {
//           .bird-image {
//             width: 75px;
//             height: 75px;
//           }
//         }

//         /* Responsive Cards Padding */
//         .info-card, .form-card {
//           padding: 20px;
//         }

//         @media (min-width: 576px) {
//           .info-card, .form-card {
//             padding: 25px;
//           }
//         }

//         /* Responsive Info Items */
//         .info-icon {
//           width: 40px;
//           height: 40px;
//           font-size: 20px;
//         }

//         @media (min-width: 576px) {
//           .info-icon {
//             width: 48px;
//             height: 48px;
//             font-size: 22px;
//           }
//         }

//         /* Responsive Map Height */
//         .map-iframe {
//           height: 110px;
//         }

//         @media (min-width: 768px) {
//           .map-iframe {
//             height: 130px;
//           }
//         }

//         /* Responsive Font Sizes */
//         .section-title {
//           font-size: 1.3rem;
//         }

//         @media (min-width: 576px) {
//           .section-title {
//             font-size: 1.35rem;
//           }
//         }

//         @media (min-width: 768px) {
//           .section-title {
//             font-size: 1.5rem;
//           }
//         }

//         /* Responsive Floating Emojis - Hide some on mobile */
//         @media (max-width: 576px) {
//           .emoji-hide-mobile {
//             display: none;
//           }
//         }

//         @media (min-width: 768px) {
//           .emoji-float1, .emoji-float2, .emoji-float3 {
//             display: block;
//           }
//         }

//         ::-webkit-scrollbar {
//           width: 10px;
//         }
//         ::-webkit-scrollbar-track {
//           background: #1a2a4f;
//           border-radius: 10px;
//         }
//         ::-webkit-scrollbar-thumb {
//           background: #4a8bc2;
//           border-radius: 10px;
//         }

//         .cute-button:active {
//           transform: scale(0.95);
//         }
//       `}</style>

//       <div className="contact-container">
//         {/* Stars Background */}
//         {[...Array(30)].map((_, i) => (
//           <div
//             key={i}
//             className="star"
//             style={{
//               width: Math.random() * 4 + 2 + 'px',
//               height: Math.random() * 4 + 2 + 'px',
//               top: Math.random() * 100 + '%',
//               left: Math.random() * 100 + '%',
//               animationDelay: Math.random() * 5 + 's',
//               opacity: Math.random() * 0.5 + 0.3,
//             }}
//           />
//         ))}

//         {/* Floating Emojis - Hidden on very small screens */}
//         <div style={{ position: 'absolute', top: '8%', left: '3%', fontSize: '45px', zIndex: 0 }} className="emoji-float1 emoji-hide-mobile">🌈</div>
//         <div style={{ position: 'absolute', top: '15%', right: '5%', fontSize: '38px', zIndex: 0 }} className="emoji-float2 emoji-hide-mobile">⭐</div>
//         <div style={{ position: 'absolute', bottom: '12%', left: '8%', fontSize: '55px', zIndex: 0 }} className="emoji-float3 emoji-hide-mobile">🌸</div>
//         <div style={{ position: 'absolute', bottom: '20%', right: '10%', fontSize: '42px', zIndex: 0 }} className="emoji-bounce emoji-hide-mobile">🐣</div>
//         <div style={{ position: 'absolute', top: '35%', left: '12%', fontSize: '32px', zIndex: 0 }} className="emoji-spin emoji-hide-mobile">🎈</div>
//         <div style={{ position: 'absolute', top: '55%', right: '3%', fontSize: '50px', zIndex: 0 }} className="emoji-float1 emoji-hide-mobile">🦋</div>
//         <div style={{ position: 'absolute', top: '70%', left: '15%', fontSize: '28px', zIndex: 0 }} className="emoji-pulse emoji-hide-mobile">✨</div>

//         {/* Main Content */}
//         <div style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto', padding: '30px 20px' }}>
          
//           {/* Header */}
//           <div className="header-animation" style={{ textAlign: 'center', marginBottom: '40px' }}>
//             <div className="header-container">
//               <h1 className="contact-title"> Contact Us </h1>
//               <img 
//                 src="/assets/birds1.png" 
//                 alt="bird" 
//                 style={{ 
//                   width: '100px', 
//                   height: '100px', 
//                   objectFit: 'contain' 
//                 }} 
//               />
//             </div>
//             <div className="line-decoration"></div>
//             <p style={{ color: 'rgba(255,255,255,0.9)', marginTop: '10px', fontSize: 'clamp(14px, 4vw, 1.1rem)' }}>
//               We'd love to hear from you and pray with you! 💝
//             </p>
//           </div>

//           {/* Two Columns - Responsive Grid */}
//           <div className="two-columns">
            
//             {/* Left Column - Contact Info (Shows first on mobile) */}
//             <div className="info-card card-1">
              
//               <div style={{ textAlign: 'center', marginBottom: '20px' }}>
//                 <div style={{ 
//                   background: 'linear-gradient(135deg, #4454b9, #202646)',
//                   width: 'clamp(60px, 15vw, 70px)',
//                   height: 'clamp(60px, 15vw, 70px)',
//                   borderRadius: '50%',
//                   display: 'inline-flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   marginBottom: '12px',
//                   fontSize: 'clamp(32px, 8vw, 38px)',
//                   boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
//                 }}>⛪</div>
//                 <h2 className="section-title" style={{ color: '#1350ab', marginBottom: '5px' }}>Jesus Redeems Kids Ministry</h2>
//                 <div style={{ width: '45px', height: '3px', background: '#2a4a7f', margin: '8px auto' }}></div>
//                 <p style={{ color: '#555', fontSize: 'clamp(12px, 3.5vw, 0.9rem)' }}>Jesus Redeems Ministries</p>
//                 <p style={{ color: '#2a4a7f', fontStyle: 'italic', fontSize: 'clamp(12px, 3.5vw, 0.9rem)', fontWeight: '500' }}>Vineyard of God</p>
//               </div>

//               <div className="info-item">
//                 <div className="info-icon">📍</div>
//                 <div style={{ flex: 1 }}>
//                   <h3 style={{ fontWeight: 'bold', marginBottom: '4px', color: '#1350ab', fontSize: 'clamp(14px, 4vw, 1rem)' }}>Location</h3>
//                   <p style={{ color: '#434665', fontSize: 'clamp(12px, 3.5vw, 0.85rem)', lineHeight: '1.4' }}>
//                     Nalumavadi, Tuticorin District,<br />
//                     Tamil Nadu - 628 211, India
//                   </p>
//                   <iframe 
//                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31452.82452535927!2d77.89715626161591!3d8.764576780607327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03f8c6e5b9a3b7%3A0x8f5e5c5e5c5e5c5e!2sNalumavadi%2C%20Tamil%20Nadu%20628211!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
//                     width="100%" 
//                     height="110" 
//                     style={{ border: 0, borderRadius: '15px', marginTop: '8px' }}
//                     allowFullScreen=""
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                   ></iframe>
//                 </div>
//               </div>

//               <div className="info-item">
//                 <div className="info-icon">✉️</div>
//                 <div>
//                   <h3 style={{ fontWeight: 'bold', marginBottom: '4px', color: '#104da8', fontSize: 'clamp(14px, 4vw, 1rem)' }}>Address</h3>
//                   <p style={{ color: '#555', fontSize: 'clamp(12px, 3.5vw, 0.85rem)', lineHeight: '1.4' }}>
//                     Nalumavadi Post,<br />
//                     Tuticorin District,<br />
//                     Tamil Nadu - 628 211, India
//                   </p>
//                 </div>
//               </div>

//               <a href="tel:+914639353535" style={{ textDecoration: 'none' }}>
//                 <div className="info-item">
//                   <div className="info-icon">📞</div>
//                   <div>
//                     <h3 style={{ fontWeight: 'bold', marginBottom: '4px', color: '#1350ab', fontSize: 'clamp(14px, 4vw, 1rem)' }}>Telephone</h3>
//                     <div style={{ color: '#26db62', textDecoration: 'none', fontSize: 'clamp(14px, 4vw, 1rem)', fontWeight: 'bold' }}>
//                       04639 353535
//                     </div>
//                     <p style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>⏰ Mon-Sat, 9AM - 6PM IST (Click to call)</p>
//                   </div>
//                 </div>
//               </a>

//               <div className="info-item" onClick={openWhatsApp}>
//                 <div className="info-icon">💬</div>
//                 <div>
//                   <h3 style={{ fontWeight: 'bold', marginBottom: '4px', color: '#1350ab', fontSize: 'clamp(14px, 4vw, 1rem)' }}>WhatsApp</h3>
//                   <div style={{ color: '#25D366', textDecoration: 'none', fontSize: 'clamp(14px, 4vw, 1rem)', fontWeight: 'bold' }}>
//                     9488375315
//                   </div>
//                   <p style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>💬 Click to chat on WhatsApp </p>
//                 </div>
//               </div>

//               <div className="info-item">
//                 <div className="info-icon">📧</div>
//                 <div>
//                   <h3 style={{ fontWeight: 'bold', marginBottom: '4px', color: '#1350ab', fontSize: 'clamp(14px, 4vw, 1rem)' }}>Email</h3>
//                   <a href="mailto:kids@jesusredeems.org" style={{ color: '#2a4a7f', textDecoration: 'none', fontSize: 'clamp(12px, 3.5vw, 0.85rem)', fontWeight: 'bold' }}>
//                     kids@jesusredeems.org
//                   </a>
//                   <p style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>📨 We reply within 24 hours!</p>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Contact Form (Shows second on mobile) */}
//             <div className="form-card card-2">
//               <div style={{ textAlign: 'center', marginBottom: '20px' }}>
//                 <span style={{ fontSize: 'clamp(30px, 8vw, 35px)' }} className="emoji-bounce">✏️</span>
//                 <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 1.8rem)', margin: '8px 0', background: 'linear-gradient(135deg, #1350ab, #2a4a7f)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Send us a message!</h2>
//                 <div style={{ width: '50px', height: '3px', background: '#2a4a7f', margin: '8px auto' }}></div>
//                 <span style={{ fontSize: 'clamp(30px, 8vw, 35px)' }} className="emoji-bounce">🌟</span>
//               </div>
              
//               <p style={{ textAlign: 'center', color: '#555', marginBottom: '20px', fontSize: 'clamp(12px, 4vw, 0.9rem)' }}>
//                 💝 We would love to pray for you or answer any questions about our VBS and Kids Ministry.
//               </p>

//               <form onSubmit={handleSubmit} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
//                 {/* Name - COMPULSORY */}
//                 <div style={{ marginBottom: '15px' }}>
//                   <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#1350ab', fontWeight: 'bold', fontSize: 'clamp(13px, 4vw, 0.9rem)' }}>
//                     <span>👧</span> Your Name <span style={{ color: 'red' }}>*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="input-field"
//                     placeholder="e.g., Little Sarah or John"
//                     tabIndex="1"
//                   />
//                 </div>

//                 {/* Email - OPTIONAL (Only optional field) */}
//                 <div style={{ marginBottom: '15px' }}>
//                   <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#1350ab', fontWeight: 'bold', fontSize: 'clamp(13px, 4vw, 0.9rem)' }}>
//                     <span>📧</span> Email Address 
//                     <span style={{ color: '#888', fontSize: 'clamp(10px, 3vw, 0.75rem)', fontWeight: 'normal' }}>(Optional)</span>
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="input-field"
//                     placeholder="your@email.com (optional)"
//                     tabIndex="2"
//                   />
//                 </div>

//                 {/* Phone - COMPULSORY */}
//                 <div style={{ marginBottom: '15px' }}>
//                   <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#1350ab', fontWeight: 'bold', fontSize: 'clamp(13px, 4vw, 0.9rem)' }}>
//                     <span>📱</span> Phone Number <span style={{ color: 'red' }}>*</span>
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     required
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="input-field"
//                     placeholder="e.g., 9876543210"
//                     tabIndex="3"
//                   />
//                   <p style={{ fontSize: '11px', color: '#888', marginTop: '5px' }}>For Contact Purpose</p>
//                 </div>

//                 {/* Subject - COMPULSORY */}
//                 <div style={{ marginBottom: '15px' }}>
//                   <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#1350ab', fontWeight: 'bold', fontSize: 'clamp(13px, 4vw, 0.9rem)' }}>
//                     <span>📌</span> Subject <span style={{ color: 'red' }}>*</span>
//                   </label>
//                   <select
//                     name="subject"
//                     required
//                     value={formData.subject}
//                     onChange={handleChange}
//                     className="input-field"
//                     tabIndex="4"
//                   >
//                     <option value="">✨ Select a topic... ✨</option>
//                     <option value="VBS Registration">🙌 VBS Registration</option>
//                     <option value="Prayer Request">🙏 Prayer Request</option>
//                     <option value="Volunteer">❤️ Volunteer with us</option>
//                     <option value="General Question">💬 General Question</option>
//                     <option value="Feedback">⭐ Feedback & Suggestions</option>
//                   </select>
//                 </div>

//                 {/* Message - COMPULSORY */}
//                 <div style={{ marginBottom: '20px' }}>
//                   <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#1350ab', fontWeight: 'bold', fontSize: 'clamp(13px, 4vw, 0.9rem)' }}>
//                     <span>💖</span> Your Message <span style={{ color: 'red' }}>*</span>
//                   </label>
//                   <textarea
//                     name="message"
//                     required
//                     rows={4}
//                     value={formData.message}
//                     onChange={handleChange}
//                     className="input-field"
//                     placeholder="Write your message here... God bless you! ✝️"
//                     tabIndex="5"
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="submit-btn cute-button"
//                   tabIndex="6"
//                 >
//                   {isSubmitting ? (
//                     <>⏳ Sending Your Message... ⏳</>
//                   ) : (
//                     <>📨 Send Message ✨</>
//                   )}
//                 </button>

//                 {submitStatus === 'success' && (
//                   <div className="success-message" style={{ marginTop: '15px', padding: '12px' }}>
//                     <div>🎉 Hooray! 🎉</div>
//                     <p style={{ fontSize: 'clamp(12px, 3.5vw, 0.85rem)' }}>Your message was sent successfully! We'll get back to you soon. God bless! ✝️</p>
//                   </div>
//                 )}

//                 {submitStatus === 'error' && (
//                   <div className="error-message" style={{ marginTop: '15px', padding: '12px' }}>
//                     <div>😢 Oops! 😢</div>
//                     <p style={{ fontSize: 'clamp(12px, 3.5vw, 0.85rem)' }}>Something went wrong. Please try again or call us directly.</p>
//                   </div>
//                 )}
//               </form>
//             </div>
//           </div>

//           {/* Footer */}
//           <div style={{ marginTop: '50px', paddingTop: '25px', borderTop: '2px solid rgba(255,255,255,0.2)', textAlign: 'center' }}>
//             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
//               <span style={{ fontSize: 'clamp(20px, 6vw, 25px)' }} className="emoji-pulse">❤️</span>
//               <span style={{ fontWeight: 'bold', color: 'rgba(255,255,255,0.9)', fontSize: 'clamp(12px, 4vw, 1rem)' }}>Jesus loves the little children of all the world</span>
//               <span style={{ fontSize: 'clamp(20px, 6vw, 25px)' }} className="emoji-pulse">❤️</span>
//             </div>
//             <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(10px, 3vw, 0.8rem)', marginTop: '15px' }}>
//               © Jesus Redeems Kids Ministry | Growing in Faith, Love, and Joy
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }








// 'use client';

// import { useState } from 'react';

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState('idle');

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const GOOGLE_SHEETS_API_URL = 'https://script.google.com/macros/s/AKfycbwvmS08AUQyPVnB5DAymwqBuwEwjDODZq7yBAS8jPRN9fbQL0i37njXPvCLOO5AKIfk/exec';

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!formData.name.trim()) {
//       alert('Please enter your name');
//       return;
//     }
//     if (!formData.phone.trim()) {
//       alert('Please enter your phone number');
//       return;
//     }
//     if (!formData.subject.trim()) {
//       alert('Please select a subject');
//       return;
//     }
//     if (!formData.message.trim()) {
//       alert('Please enter your message');
//       return;
//     }
    
//     setIsSubmitting(true);
//     setSubmitStatus('idle');

//     const existingSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
//     const newSubmission = {
//       id: Date.now(),
//       name: formData.name,
//       email: formData.email || '',
//       phone: formData.phone || '',
//       subject: formData.subject,
//       message: formData.message,
//       submittedAt: new Date().toISOString(),
//     };
//     existingSubmissions.push(newSubmission);
//     localStorage.setItem('contactSubmissions', JSON.stringify(existingSubmissions));

//     try {
//       await fetch(GOOGLE_SHEETS_API_URL, {
//         method: 'POST',
//         mode: 'no-cors',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email || '',
//           phone: formData.phone || '',
//           subject: formData.subject || 'General',
//           message: formData.message,
//           timestamp: new Date().toISOString(),
//         }),
//       });

//       if (formData.email && formData.email.trim() !== '') {
//         await fetch('https://formsubmit.co/ajax/kids@jesusredeems.org', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({
//             name: formData.name,
//             email: formData.email,
//             phone: formData.phone,
//             subject: formData.subject,
//             message: formData.message,
//             _subject: `New Contact Form: ${formData.subject}`,
//           }),
//         }).catch(() => {});
//       }

//       setSubmitStatus('success');
//       setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
//       setTimeout(() => setSubmitStatus('idle'), 4000);
//     } catch (error) {
//       console.error('Submission error:', error);
//       setSubmitStatus('error');
//       setTimeout(() => setSubmitStatus('idle'), 4000);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const openWhatsApp = () => {
//     window.open('https://wa.me/919488375315', '_blank', 'noopener,noreferrer');
//   };

//   return (
//     <>
//       <style jsx>{`
//         @keyframes birdFloat {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-25px); }
//           100% { transform: translateY(0px); }
//         }

//         @keyframes float1 {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-30px) rotate(10deg); }
//         }

//         @keyframes float2 {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(-8deg); }
//         }

//         @keyframes float3 {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-25px) rotate(5deg); }
//         }

//         @keyframes bounce {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-15px); }
//         }

//         @keyframes spin {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }

//         @keyframes pulse {
//           0%, 100% { transform: scale(1); opacity: 0.7; }
//           50% { transform: scale(1.1); opacity: 1; }
//         }

//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(50px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         @keyframes slideInLeft {
//           from { opacity: 0; transform: translateX(-100px); }
//           to { opacity: 1; transform: translateX(0); }
//         }

//         @keyframes slideInRight {
//           from { opacity: 0; transform: translateX(100px); }
//           to { opacity: 1; transform: translateX(0); }
//         }

//         @keyframes starTwinkle {
//           0%, 100% { opacity: 0.3; transform: scale(1); }
//           50% { opacity: 1; transform: scale(1.2); }
//         }

//         @keyframes rocketLaunch {
//           0% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-10px) rotate(5deg); }
//           100% { transform: translateY(0px) rotate(0deg); }
//         }

//         .contact-container {
//           min-height: 100vh;
//           background: linear-gradient(135deg, #4145b1 0%, #3760c0 30%, #4676c3 60%, #4a8bc2 100%);
//           position: relative;
//           overflow-x: hidden;
//           font-family: 'Comic Neue', 'Segoe UI Emoji', 'Apple Color Emoji', sans-serif;
//         }

//         .star {
//           position: absolute;
//           background: white;
//           border-radius: 50%;
//           animation: starTwinkle 3s ease-in-out infinite;
//         }

//         .emoji-float1 { animation: float1 4s ease-in-out infinite; }
//         .emoji-float2 { animation: float2 3.5s ease-in-out infinite; }
//         .emoji-float3 { animation: float3 5s ease-in-out infinite; }
//         .emoji-bounce { animation: bounce 2s ease-in-out infinite; }
//         .emoji-spin { animation: spin 8s linear infinite; }
//         .emoji-pulse { animation: pulse 2s ease-in-out infinite; }
//         .rocket-animate { animation: rocketLaunch 3s ease-in-out infinite; }

//         .info-card, .form-card {
//           background: rgba(255, 255, 255, 0.97);
//           border-radius: 30px;
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
//           transition: all 0.3s ease;
//           position: relative;
//           overflow: hidden;
//           height: 100%;
//           display: flex;
//           flex-direction: column;
//         }

//         .info-card::before, .form-card::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           height: 8px;
//           background: linear-gradient(90deg, #ff6b6b, #ffa502, #ffd32a, #2ed573, #0984e3, #6c5ce7, #a29bfe);
//           border-radius: 30px 30px 0 0;
//         }

//         .info-card:hover, .form-card:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 30px 50px rgba(0, 0, 0, 0.3);
//         }

//         .card-1 { animation: slideInLeft 0.8s ease-out; }
//         .card-2 { animation: slideInRight 0.8s ease-out; }
//         .header-animation { animation: fadeInUp 0.8s ease-out; }

//         .input-field {
//           width: 100%;
//           padding: 12px 16px;
//           border: 2px solid #e0e0e0;
//           border-radius: 20px;
//           font-size: 15px;
//           transition: all 0.3s ease;
//           background: white;
//         }

//         .input-field:focus {
//           outline: none;
//           border-color: #2a4a7f;
//           box-shadow: 0 0 0 4px rgba(42, 74, 127, 0.2);
//         }

//         textarea.input-field {
//           resize: vertical;
//           min-height: 100px;
//         }

//         .submit-btn {
//           width: 100%;
//           padding: 14px;
//           background: linear-gradient(135deg, #1350ab, #1a2a4f);
//           color: white;
//           border: none;
//           border-radius: 30px;
//           font-size: 18px;
//           font-weight: bold;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           position: relative;
//           overflow: hidden;
//         }

//         .submit-btn::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
//           transition: left 0.5s ease;
//         }

//         .submit-btn:hover::before {
//           left: 100%;
//         }

//         .submit-btn:hover:not(:disabled) {
//           transform: translateY(-3px);
//           background: linear-gradient(135deg, #1a2a4f, #2a4a7f);
//           box-shadow: 0 8px 20px rgba(0,0,0,0.3);
//         }

//         .submit-btn:disabled {
//           opacity: 0.6;
//           cursor: not-allowed;
//         }

//         .success-message {
//           background: linear-gradient(135deg, #c8e6c9, #a5d6a7);
//           border: 2px solid #4caf50;
//           border-radius: 20px;
//           padding: 15px;
//           text-align: center;
//           animation: fadeInUp 0.5s ease-out;
//         }

//         .error-message {
//           background: linear-gradient(135deg, #ffcdd2, #ef9a9a);
//           border: 2px solid #f44336;
//           border-radius: 20px;
//           padding: 15px;
//           text-align: center;
//           animation: fadeInUp 0.5s ease-out;
//         }

//         .info-item {
//           display: flex;
//           gap: 15px;
//           padding: 12px;
//           border-radius: 25px;
//           transition: all 0.3s ease;
//           cursor: pointer;
//           background: rgba(42, 74, 127, 0.12);
//           border: 1px solid rgba(42, 74, 127, 0.1);
//           margin-bottom: 12px;
//         }

//         .info-item:hover {
//           background: rgba(42, 74, 127, 0.25);
//           transform: translateX(10px);
//           border-color: rgba(42, 74, 127, 0.3);
//         }

//         .info-icon {
//           width: 48px;
//           height: 48px;
//           background: linear-gradient(135deg, #c5cae9, #9fa8da);
//           border-radius: 20px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 22px;
//           transition: transform 0.3s ease;
//         }

//         .info-item:hover .info-icon {
//           transform: scale(1.1);
//         }

//         .line-decoration {
//           width: 80px;
//           height: 4px;
//           background: linear-gradient(90deg, #2a4a7f, #6c5ce7);
//           border-radius: 10px;
//           margin: 12px auto;
//         }

//         .two-columns {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 30px;
//           align-items: stretch;
//         }

//         @media (min-width: 768px) {
//           .two-columns {
//             grid-template-columns: 1fr 1fr;
//             gap: 40px;
//           }
//         }

//         @media (min-width: 1024px) {
//           .two-columns {
//             gap: 50px;
//           }
//         }

//         .header-container {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           gap: 15px;
//           flex-wrap: wrap;
//         }

//         @media (min-width: 576px) {
//           .header-container {
//             flex-direction: row;
//             gap: 20px;
//           }
//         }

//         .contact-title {
//           font-size: 2.2rem;
//           margin: 0;
//           background: linear-gradient(135deg, #FFD700, #FFF8E7);
//           -webkit-background-clip: text;
//           background-clip: text;
//           color: transparent;
//           text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
//           padding-left: 0;
//           text-align: center;
//         }

//         @media (min-width: 576px) {
//           .contact-title {
//             font-size: 2.5rem;
//             padding-left: 40px;
//           }
//         }

//         @media (min-width: 768px) {
//           .contact-title {
//             font-size: 2.8rem;
//           }
//         }

//         @media (min-width: 1024px) {
//           .contact-title {
//             font-size: 3.2rem;
//             padding-left: 90px;
//           }
//         }

//         .bird-image {
//           width: 60px;
//           height: 60px;
//           object-fit: contain;
//           animation: birdFloat 2s ease-in-out infinite;
//         }

//         @media (min-width: 576px) {
//           .bird-image {
//             width: 70px;
//             height: 70px;
//           }
//         }

//         .info-card, .form-card {
//           padding: 20px;
//         }

//         @media (min-width: 576px) {
//           .info-card, .form-card {
//             padding: 25px;
//           }
//         }

//         .info-icon {
//           width: 40px;
//           height: 40px;
//           font-size: 20px;
//         }

//         @media (min-width: 576px) {
//           .info-icon {
//             width: 48px;
//             height: 48px;
//             font-size: 22px;
//           }
//         }

//         .map-iframe {
//           height: 200px;
//           width: 100%;
//           border-radius: 15px;
//           margin-top: 12px;
//         }

//         @media (min-width: 768px) {
//           .map-iframe {
//             height: 220px;
//           }
//         }

//         .section-title {
//           font-size: 1.3rem;
//         }

//         @media (min-width: 576px) {
//           .section-title {
//             font-size: 1.35rem;
//           }
//         }

//         @media (min-width: 768px) {
//           .section-title {
//             font-size: 1.5rem;
//           }
//         }

//         @media (max-width: 576px) {
//           .emoji-hide-mobile {
//             display: none;
//           }
//         }

//         ::-webkit-scrollbar {
//           width: 10px;
//         }
//         ::-webkit-scrollbar-track {
//           background: #1a2a4f;
//           border-radius: 10px;
//         }
//         ::-webkit-scrollbar-thumb {
//           background: #4a8bc2;
//           border-radius: 10px;
//         }

//         .cute-button:active {
//           transform: scale(0.95);
//         }
//       `}</style>

//       <div className="contact-container">
//         {/* Stars Background */}
//         {[...Array(30)].map((_, i) => (
//           <div
//             key={i}
//             className="star"
//             style={{
//               width: Math.random() * 4 + 2 + 'px',
//               height: Math.random() * 4 + 2 + 'px',
//               top: Math.random() * 100 + '%',
//               left: Math.random() * 100 + '%',
//               animationDelay: Math.random() * 5 + 's',
//               opacity: Math.random() * 0.5 + 0.3,
//             }}
//           />
//         ))}

//         {/* Floating Emojis */}
//         <div style={{ position: 'absolute', top: '8%', left: '3%', fontSize: '45px', zIndex: 0 }} className="emoji-float1 emoji-hide-mobile">🌈</div>
//         <div style={{ position: 'absolute', top: '15%', right: '5%', fontSize: '38px', zIndex: 0 }} className="emoji-float2 emoji-hide-mobile">⭐</div>
//         <div style={{ position: 'absolute', bottom: '12%', left: '8%', fontSize: '55px', zIndex: 0 }} className="emoji-float3 emoji-hide-mobile">🌸</div>
//         <div style={{ position: 'absolute', bottom: '20%', right: '10%', fontSize: '42px', zIndex: 0 }} className="emoji-bounce emoji-hide-mobile">🐣</div>
//         <div style={{ position: 'absolute', top: '35%', left: '12%', fontSize: '32px', zIndex: 0 }} className="emoji-spin emoji-hide-mobile">🎈</div>
//         <div style={{ position: 'absolute', top: '55%', right: '3%', fontSize: '50px', zIndex: 0 }} className="emoji-float1 emoji-hide-mobile">🦋</div>
//         <div style={{ position: 'absolute', top: '70%', left: '15%', fontSize: '28px', zIndex: 0 }} className="emoji-pulse emoji-hide-mobile">✨</div>

//         {/* Main Content */}
//         <div style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto', padding: '30px 20px' }}>
          
//           {/* Header */}
//           <div className="header-animation" style={{ textAlign: 'center', marginBottom: '40px' }}>
//             <div className="header-container">
//               <h1 className="contact-title"> Contact Us </h1>
//               <img 
//                 src="/assets/birds1.png" 
//                 alt="bird" 
//                 style={{ 
//                   width: '100px', 
//                   height: '100px', 
//                   objectFit: 'contain' 
//                 }} 
//               />
//             </div>
//             <div className="line-decoration"></div>
//             <p style={{ color: 'rgba(255,255,255,0.9)', marginTop: '10px', fontSize: 'clamp(14px, 4vw, 1.1rem)' }}>
//               We'd love to hear from you and pray with you! 💝
//             </p>
//           </div>

//           {/* Two Columns */}
//           <div className="two-columns">
            
//             {/* Left Column - Contact Info */}
//             <div className="info-card card-1">
              
//               <div style={{ textAlign: 'center', marginBottom: '20px' }}>
//                 <div style={{ 
//                   background: 'linear-gradient(135deg, #4454b9, #202646)',
//                   width: 'clamp(60px, 15vw, 70px)',
//                   height: 'clamp(60px, 15vw, 70px)',
//                   borderRadius: '50%',
//                   display: 'inline-flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   marginBottom: '12px',
//                   fontSize: 'clamp(32px, 8vw, 38px)',
//                   boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
//                 }}>⛪</div>
//                 <h2 className="section-title" style={{ color: '#1350ab', marginBottom: '5px' }}>Jesus Redeems Kids Ministry</h2>
//                 <div style={{ width: '45px', height: '3px', background: '#2a4a7f', margin: '8px auto' }}></div>
//                 <p style={{ color: '#555', fontSize: 'clamp(12px, 3.5vw, 0.9rem)' }}>Jesus Redeems Ministries</p>
//                 <p style={{ color: '#2a4a7f', fontStyle: 'italic', fontSize: 'clamp(12px, 3.5vw, 0.9rem)', fontWeight: '500' }}>Vineyard of God</p>
//               </div>

//               <div className="info-item">
//                 <div className="info-icon">📍</div>
//                 <div style={{ flex: 1 }}>
//                   <h3 style={{ fontWeight: 'bold', marginBottom: '4px', color: '#1350ab', fontSize: 'clamp(14px, 4vw, 1rem)' }}>Location</h3>
//                   <p style={{ color: '#434665', fontSize: 'clamp(12px, 3.5vw, 0.85rem)', lineHeight: '1.4' }}>
//                     Jesus Redeems Ministries
//                   </p>
//                   <iframe 
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5660.802244657578!2d78.03323613603268!3d8.58673928125825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b038c6bec9a6161%3A0xb6c49de904a4c2e!2sJesus%20Redeems%20Ministries!5e1!3m2!1sen!2sin!4v1778151047817!5m2!1sen!2sin"
//                     className="map-iframe"
//                     allowFullScreen=""
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                   ></iframe>
//                 </div>
//               </div>

//               <a href="tel:+914639353535" style={{ textDecoration: 'none' }}>
//                 <div className="info-item">
//                   <div className="info-icon">📞</div>
//                   <div>
//                     <h3 style={{ fontWeight: 'bold', marginBottom: '4px', color: '#1350ab', fontSize: 'clamp(14px, 4vw, 1rem)' }}>Telephone</h3>
//                     <div style={{ color: '#26db62', textDecoration: 'none', fontSize: 'clamp(14px, 4vw, 1rem)', fontWeight: 'bold' }}>
//                       04639 353535
//                     </div>
//                     <p style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>⏰ Mon-Sat, 9AM - 6PM IST (Click to call)</p>
//                   </div>
//                 </div>
//               </a>

//               <div className="info-item" onClick={openWhatsApp}>
//                 <div className="info-icon">💬</div>
//                 <div>
//                   <h3 style={{ fontWeight: 'bold', marginBottom: '4px', color: '#1350ab', fontSize: 'clamp(14px, 4vw, 1rem)' }}>WhatsApp</h3>
//                   <div style={{ color: '#25D366', textDecoration: 'none', fontSize: 'clamp(14px, 4vw, 1rem)', fontWeight: 'bold' }}>
//                     9488375315
//                   </div>
//                   <p style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>💬 Click to chat on WhatsApp</p>
//                 </div>
//               </div>

//               <div className="info-item">
//                 <div className="info-icon">📧</div>
//                 <div>
//                   <h3 style={{ fontWeight: 'bold', marginBottom: '4px', color: '#1350ab', fontSize: 'clamp(14px, 4vw, 1rem)' }}>Email</h3>
//                   <a href="mailto:kids@jesusredeems.org" style={{ color: '#2a4a7f', textDecoration: 'none', fontSize: 'clamp(12px, 3.5vw, 0.85rem)', fontWeight: 'bold' }}>
//                     kids@jesusredeems.org
//                   </a>
//                   <p style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>📨 We reply within 24 hours!</p>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Contact Form with ROCKET */}
//             <div className="form-card card-2">
//               <div style={{ textAlign: 'center', marginBottom: '20px' }}>
//                 <div style={{ 
//                   background: 'linear-gradient(135deg, #4454b9, #202646)',
//                   width: 'clamp(60px, 15vw, 70px)',
//                   height: 'clamp(60px, 15vw, 70px)',
//                   borderRadius: '50%',
//                   display: 'inline-flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   marginBottom: '12px',
//                   fontSize: 'clamp(32px, 8vw, 38px)',
//                   boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
//                   cursor: 'pointer'
//                 }} className="rocket-animatea">
//                   🚀
//                 </div>
//                 <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 1.8rem)', margin: '8px 0', background: 'linear-gradient(135deg, #1350ab, #2a4a7f)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Send us a message!</h2>
//                 <div style={{ width: '50px', height: '3px', background: '#2a4a7f', margin: '8px auto' }}></div>
//                 {/* <div style={{ 
//                   background: 'linear-gradient(135deg, #4454b9, #202646)',
//                   width: 'clamp(60px, 15vw, 70px)',
//                   height: 'clamp(60px, 15vw, 70px)',
//                   borderRadius: '50%',
//                   display: 'inline-flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   marginTop: '12px',
//                   fontSize: 'clamp(32px, 8vw, 38px)',
//                   boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
//                 }} className="rocket-animate">
//                   🚀
//                 </div> */}
//               </div>
              
//               <p style={{ textAlign: 'center', color: '#555', marginBottom: '20px', fontSize: 'clamp(12px, 4vw, 0.9rem)' }}>
//                 💝 We would love to pray for you or answer any questions about our VBS and Kids Ministry.
//               </p>

//               <form onSubmit={handleSubmit} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
//                 <div style={{ marginBottom: '15px' }}>
//                   <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#1350ab', fontWeight: 'bold', fontSize: 'clamp(13px, 4vw, 0.9rem)' }}>
//                     <span>👧</span> Your Name <span style={{ color: 'red' }}>*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="input-field"
//                     placeholder="e.g., Little Sarah or John"
//                     tabIndex="1"
//                   />
//                 </div>

//                 <div style={{ marginBottom: '15px' }}>
//                   <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#1350ab', fontWeight: 'bold', fontSize: 'clamp(13px, 4vw, 0.9rem)' }}>
//                     <span>📧</span> Email Address 
//                     <span style={{ color: '#888', fontSize: 'clamp(10px, 3vw, 0.75rem)', fontWeight: 'normal' }}>(Optional)</span>
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="input-field"
//                     placeholder="your@email.com (optional)"
//                     tabIndex="2"
//                   />
//                 </div>

//                 <div style={{ marginBottom: '15px' }}>
//                   <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#1350ab', fontWeight: 'bold', fontSize: 'clamp(13px, 4vw, 0.9rem)' }}>
//                     <span>📱</span> Phone Number <span style={{ color: 'red' }}>*</span>
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     required
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="input-field"
//                     placeholder="e.g., 9876543210"
//                     tabIndex="3"
//                   />
//                   <p style={{ fontSize: '11px', color: '#888', marginTop: '5px' }}>For Contact Purpose</p>
//                 </div>

//                 <div style={{ marginBottom: '15px' }}>
//                   <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#1350ab', fontWeight: 'bold', fontSize: 'clamp(13px, 4vw, 0.9rem)' }}>
//                     <span>📌</span> Subject <span style={{ color: 'red' }}>*</span>
//                   </label>
//                   <select
//                     name="subject"
//                     required
//                     value={formData.subject}
//                     onChange={handleChange}
//                     className="input-field"
//                     tabIndex="4"
//                   >
//                     <option value="">✨ Select a topic... ✨</option>
//                     <option value="VBS Registration">🙌 VBS Registration</option>
//                     <option value="Prayer Request">🙏 Prayer Request</option>
//                     <option value="Volunteer">❤️ Volunteer with us</option>
//                     <option value="General Question">💬 General Question</option>
//                     <option value="Feedback">⭐ Feedback & Suggestions</option>
//                   </select>
//                 </div>

//                 <div style={{ marginBottom: '20px' }}>
//                   <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#1350ab', fontWeight: 'bold', fontSize: 'clamp(13px, 4vw, 0.9rem)' }}>
//                     <span>💖</span> Your Message <span style={{ color: 'red' }}>*</span>
//                   </label>
//                   <textarea
//                     name="message"
//                     required
//                     rows={4}
//                     value={formData.message}
//                     onChange={handleChange}
//                     className="input-field"
//                     placeholder="Write your message here... God bless you! ✝️"
//                     tabIndex="5"
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="submit-btn cute-button"
//                   tabIndex="6"
//                 >
//                   {isSubmitting ? (
//                     <>⏳ Sending Your Message... ⏳</>
//                   ) : (
//                     <>🚀 Send Message 🚀</>
//                   )}
//                 </button>

//                 {submitStatus === 'success' && (
//                   <div className="success-message" style={{ marginTop: '15px', padding: '12px' }}>
//                     <div>🎉 Hooray! 🎉</div>
//                     <p style={{ fontSize: 'clamp(12px, 3.5vw, 0.85rem)' }}>Your message was sent successfully! We'll get back to you soon. God bless! ✝️</p>
//                   </div>
//                 )}

//                 {submitStatus === 'error' && (
//                   <div className="error-message" style={{ marginTop: '15px', padding: '12px' }}>
//                     <div>😢 Oops! 😢</div>
//                     <p style={{ fontSize: 'clamp(12px, 3.5vw, 0.85rem)' }}>Something went wrong. Please try again or call us directly.</p>
//                   </div>
//                 )}
//               </form>
//             </div>
//           </div>

//           {/* Footer */}
//           <div style={{ marginTop: '50px', paddingTop: '25px', borderTop: '2px solid rgba(255,255,255,0.2)', textAlign: 'center' }}>
//             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
//               <span style={{ fontSize: 'clamp(20px, 6vw, 25px)' }} className="emoji-pulse">❤️</span>
//               <span style={{ fontWeight: 'bold', color: 'rgba(255,255,255,0.9)', fontSize: 'clamp(12px, 4vw, 1rem)' }}>Jesus loves the little children of all the world</span>
//               <span style={{ fontSize: 'clamp(20px, 6vw, 25px)' }} className="emoji-pulse">❤️</span>
//             </div>
//             <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(10px, 3vw, 0.8rem)', marginTop: '15px' }}>
//               © Jesus Redeems Kids Ministry | Growing in Faith, Love, and Joy
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }











'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const GOOGLE_SHEETS_API_URL = 'https://script.google.com/macros/s/AKfycbwvmS08AUQyPVnB5DAymwqBuwEwjDODZq7yBAS8jPRN9fbQL0i37njXPvCLOO5AKIfk/exec';

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      alert('Please enter your name');
      return;
    }
    if (!formData.phone.trim()) {
      alert('Please enter your phone number');
      return;
    }
    if (!formData.subject.trim()) {
      alert('Please select a subject');
      return;
    }
    if (!formData.message.trim()) {
      alert('Please enter your message');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const existingSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    const newSubmission = {
      id: Date.now(),
      name: formData.name,
      email: formData.email || '',
      phone: formData.phone || '',
      subject: formData.subject,
      message: formData.message,
      submittedAt: new Date().toISOString(),
    };
    existingSubmissions.push(newSubmission);
    localStorage.setItem('contactSubmissions', JSON.stringify(existingSubmissions));

    try {
      await fetch(GOOGLE_SHEETS_API_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email || '',
          phone: formData.phone || '',
          subject: formData.subject || 'General',
          message: formData.message,
          timestamp: new Date().toISOString(),
        }),
      });

      if (formData.email && formData.email.trim() !== '') {
        await fetch('https://formsubmit.co/ajax/kids@jesusredeems.org', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
            _subject: `New Contact Form: ${formData.subject}`,
          }),
        }).catch(() => {});
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 4000);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/919488375315', '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Aclonica&family=Lato:wght@300;400;700&family=Roboto:wght@300;400;500;700&display=swap');

        * {
          font-family: 'Poppins', 'Aclonica', 'Lato', 'Roboto', sans-serif !important;
        }

        @keyframes birdFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
          100% { transform: translateY(0px); }
        }

        @keyframes float1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(10deg); }
        }

        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(-8deg); }
        }

        @keyframes float3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(5deg); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes starTwinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes rocketLaunch {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        .contact-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #4145b1 0%, #3760c0 30%, #4676c3 60%, #4a8bc2 100%);
          position: relative;
          overflow-x: hidden;
        }

        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: starTwinkle 3s ease-in-out infinite;
        }

        .emoji-float1 { animation: float1 4s ease-in-out infinite; }
        .emoji-float2 { animation: float2 3.5s ease-in-out infinite; }
        .emoji-float3 { animation: float3 5s ease-in-out infinite; }
        .emoji-bounce { animation: bounce 2s ease-in-out infinite; }
        .emoji-spin { animation: spin 8s linear infinite; }
        .emoji-pulse { animation: pulse 2s ease-in-out infinite; }
        .rocket-animate { animation: rocketLaunch 3s ease-in-out infinite; }

        .info-card, .form-card {
          background: rgba(255, 255, 255, 0.97);
          border-radius: 30px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .info-card::before, .form-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 8px;
          background: linear-gradient(90deg, #ff6b6b, #ffa502, #ffd32a, #2ed573, #0984e3, #6c5ce7, #a29bfe);
          border-radius: 30px 30px 0 0;
        }

        .info-card:hover, .form-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 50px rgba(0, 0, 0, 0.3);
        }

        .card-1 { animation: slideInLeft 0.8s ease-out; }
        .card-2 { animation: slideInRight 0.8s ease-out; }
        .header-animation { animation: fadeInUp 0.8s ease-out; }

        .input-field {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e0e0e0;
          border-radius: 20px;
          font-size: 15px;
          transition: all 0.3s ease;
          background: white;
        }

        .input-field:focus {
          outline: none;
          border-color: #2a4a7f;
          box-shadow: 0 0 0 4px rgba(42, 74, 127, 0.2);
        }

        textarea.input-field {
          resize: vertical;
          min-height: 100px;
        }

        .submit-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #1350ab, #1a2a4f);
          color: white;
          border: none;
          border-radius: 30px;
          font-size: 18px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .submit-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s ease;
        }

        .submit-btn:hover::before {
          left: 100%;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-3px);
          background: linear-gradient(135deg, #1a2a4f, #2a4a7f);
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .success-message {
          background: linear-gradient(135deg, #c8e6c9, #a5d6a7);
          border: 2px solid #4caf50;
          border-radius: 20px;
          padding: 15px;
          text-align: center;
          animation: fadeInUp 0.5s ease-out;
        }

        .error-message {
          background: linear-gradient(135deg, #ffcdd2, #ef9a9a);
          border: 2px solid #f44336;
          border-radius: 20px;
          padding: 15px;
          text-align: center;
          animation: fadeInUp 0.5s ease-out;
        }

        .info-item {
          display: flex;
          gap: 15px;
          padding: 12px;
          border-radius: 25px;
          transition: all 0.3s ease;
          cursor: pointer;
          background: rgba(42, 74, 127, 0.12);
          border: 1px solid rgba(42, 74, 127, 0.1);
          margin-bottom: 12px;
        }

        .info-item:hover {
          background: rgba(42, 74, 127, 0.25);
          transform: translateX(10px);
          border-color: rgba(42, 74, 127, 0.3);
        }

        .info-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #c5cae9, #9fa8da);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          transition: transform 0.3s ease;
        }

        .info-item:hover .info-icon {
          transform: scale(1.1);
        }

        .line-decoration {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #2a4a7f, #6c5ce7);
          border-radius: 10px;
          margin: 12px auto;
        }

        .two-columns {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
          align-items: stretch;
        }

        @media (min-width: 768px) {
          .two-columns {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }

        @media (min-width: 1024px) {
          .two-columns {
            gap: 50px;
          }
        }

        .header-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        @media (min-width: 576px) {
          .header-container {
            flex-direction: row;
            gap: 20px;
          }
        }

        .contact-title {
          font-size: 2.2rem;
          margin: 0;
          background: linear-gradient(135deg, #FFD700, #FFF8E7);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
          padding-left: 0;
          text-align: center;
        }

        @media (min-width: 576px) {
          .contact-title {
            font-size: 2.5rem;
            padding-left: 40px;
          }
        }

        @media (min-width: 768px) {
          .contact-title {
            font-size: 2.8rem;
          }
        }

        @media (min-width: 1024px) {
          .contact-title {
            font-size: 3.2rem;
            padding-left: 90px;
          }
        }

        .bird-image {
          width: 60px;
          height: 60px;
          object-fit: contain;
          animation: birdFloat 2s ease-in-out infinite;
        }

        @media (min-width: 576px) {
          .bird-image {
            width: 70px;
            height: 70px;
          }
        }

        .info-card, .form-card {
          padding: 20px;
        }

        @media (min-width: 576px) {
          .info-card, .form-card {
            padding: 25px;
          }
        }

        .info-icon {
          width: 40px;
          height: 40px;
          font-size: 20px;
        }

        @media (min-width: 576px) {
          .info-icon {
            width: 48px;
            height: 48px;
            font-size: 22px;
          }
        }

        .map-iframe {
          height: 200px;
          width: 100%;
          border-radius: 15px;
          margin-top: 12px;
        }

        @media (min-width: 768px) {
          .map-iframe {
            height: 220px;
          }
        }

        .section-title {
          font-size: 1.3rem;
        }

        @media (min-width: 576px) {
          .section-title {
            font-size: 1.35rem;
          }
        }

        @media (min-width: 768px) {
          .section-title {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 576px) {
          .emoji-hide-mobile {
            display: none;
          }
        }

        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: #1a2a4f;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
          background: #4a8bc2;
          border-radius: 10px;
        }

        .cute-button:active {
          transform: scale(0.95);
        }
      `}</style>

      <div className="contact-container">
        {/* Stars Background */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              opacity: Math.random() * 0.5 + 0.3,
            }}
          />
        ))}

        {/* Floating Emojis */}
        <div style={{ position: 'absolute', top: '8%', left: '3%', fontSize: '45px', zIndex: 0 }} className="emoji-float1 emoji-hide-mobile">🌈</div>
        <div style={{ position: 'absolute', top: '15%', right: '5%', fontSize: '38px', zIndex: 0 }} className="emoji-float2 emoji-hide-mobile">⭐</div>
        <div style={{ position: 'absolute', bottom: '12%', left: '8%', fontSize: '55px', zIndex: 0 }} className="emoji-float3 emoji-hide-mobile">🌸</div>
        <div style={{ position: 'absolute', bottom: '20%', right: '10%', fontSize: '42px', zIndex: 0 }} className="emoji-bounce emoji-hide-mobile">🐣</div>
        <div style={{ position: 'absolute', top: '35%', left: '12%', fontSize: '32px', zIndex: 0 }} className="emoji-spin emoji-hide-mobile">🎈</div>
        <div style={{ position: 'absolute', top: '55%', right: '3%', fontSize: '50px', zIndex: 0 }} className="emoji-float1 emoji-hide-mobile">🦋</div>
        <div style={{ position: 'absolute', top: '70%', left: '15%', fontSize: '28px', zIndex: 0 }} className="emoji-pulse emoji-hide-mobile">✨</div>

        {/* Main Content */}
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto', padding: '30px 20px' }}>
          
          {/* Header */}
          <div className="header-animation" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="header-container">
              <h1 className="contact-title"> Contact Us </h1>
              <img 
                src="/assets/birds1.png" 
                alt="bird" 
                style={{ 
                  width: '100px', 
                  height: '100px', 
                  objectFit: 'contain' 
                }} 
              />
            </div>
            <div className="line-decoration"></div>
            <p style={{ color: 'rgba(255,255,255,0.9)', marginTop: '10px', fontSize: 'clamp(14px, 4vw, 1.1rem)' }}>
              We'd love to hear from you and pray for you! 💝
            </p>
          </div>

          {/* Two Columns */}
          <div className="two-columns">
            
            {/* Left Column - Contact Info with Address Column */}
            <div className="info-card card-1">
              
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <div style={{ 
                  background: 'linear-gradient(135deg, #4454b9, #202646)',
                  width: 'clamp(60px, 15vw, 70px)',
                  height: 'clamp(60px, 15vw, 70px)',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '12px',
                  fontSize: 'clamp(32px, 8vw, 38px)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}>⛪</div>
                <h2 className="section-title" style={{ color: '#1350ab', marginBottom: '5px' }}>Jesus Redeems Kids Ministry</h2>
                <div style={{ width: '45px', height: '3px', background: '#2a4a7f', margin: '8px auto' }}></div>
                <p style={{ color: '#555', fontSize: 'clamp(12px, 3.5vw, 0.9rem)' }}>Jesus Redeems Ministries</p>
                <p style={{ color: '#2a4a7f', fontStyle: 'italic', fontSize: 'clamp(12px, 3.5vw, 0.9rem)', fontWeight: '500' }}>Vineyard of God</p>
              </div>

              {/* ADDRESS COLUMN - Added with same style as other info items */}
              {/* <div className="info-item">
                <div className="info-icon">🏠</div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontWeight: 'bold', marginBottom: '4px', color: '#1350ab', fontSize: 'clamp(14px, 4vw, 1rem)' }}>Address</h3>
                  <p style={{ color: '#434665', fontSize: 'clamp(12px, 3.5vw, 0.85rem)', lineHeight: '1.4' }}>
                    Jesus Redeems Ministries,<br />
                    Nalumavadi Post,<br />
                    Tuticorin District,<br />
                    Tamil Nadu - 628 211, India
                  </p>
                </div>
              </div> */}

              <div className="info-item">
                <div className="info-icon">📍</div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontWeight: 'bold', marginBottom: '4px', color: '#1350ab', fontSize: 'clamp(14px, 4vw, 1rem)' }}>Location</h3>
                   <p style={{ color: '#434665', fontSize: 'clamp(12px, 3.5vw, 0.85rem)', lineHeight: '1.4' }}>
                    Jesus Redeems Ministries<br />
                  
                  </p>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5660.802244657578!2d78.03323613603268!3d8.58673928125825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b038c6bec9a6161%3A0xb6c49de904a4c2e!2sJesus%20Redeems%20Ministries!5e1!3m2!1sen!2sin!4v1778151047817!5m2!1sen!2sin"
                    className="map-iframe"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>


              <div className="info-item">
                <div className="info-icon">🏠</div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontWeight: 'bold', marginBottom: '4px', color: '#1350ab', fontSize: 'clamp(14px, 4vw, 1rem)' }}>Address</h3>
                  <p style={{ color: '#434665', fontSize: 'clamp(12px, 3.5vw, 0.85rem)', lineHeight: '1.4' }}>
                    Jesus Redeems Ministries,<br />
                    Nalumavadi Post,<br />
                    Tuticorin District,<br />
                    Tamil Nadu - 628 211, India
                  </p>
                </div>
              </div>

              <a href="tel:+914639353535" style={{ textDecoration: 'none' }}>
                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div>
                    <h3 style={{ fontWeight: 'bold', marginBottom: '4px', color: '#1350ab', fontSize: 'clamp(14px, 4vw, 1rem)' }}>Telephone</h3>
                    <div style={{ color: '#26db62', textDecoration: 'none', fontSize: 'clamp(14px, 4vw, 1rem)', fontWeight: 'bold' }}>
                      04639 353535
                    </div>
                    <p style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>⏰ Mon-Sat, 9AM - 6PM IST (Click to call)</p>
                  </div>
                </div>
              </a>

              <div className="info-item" onClick={openWhatsApp}>
                <div className="info-icon">💬</div>
                <div>
                  <h3 style={{ fontWeight: 'bold', marginBottom: '4px', color: '#1350ab', fontSize: 'clamp(14px, 4vw, 1rem)' }}>WhatsApp</h3>
                  <div style={{ color: '#25D366', textDecoration: 'none', fontSize: 'clamp(14px, 4vw, 1rem)', fontWeight: 'bold' }}>
                    9488375315
                  </div>
                  <p style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>💬 Click to chat on WhatsApp</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📧</div>
                <div>
                  <h3 style={{ fontWeight: 'bold', marginBottom: '4px', color: '#1350ab', fontSize: 'clamp(14px, 4vw, 1rem)' }}>Email</h3>
                  <a href="mailto:kids@jesusredeems.org" style={{ color: '#2a4a7f', textDecoration: 'none', fontSize: 'clamp(12px, 3.5vw, 0.85rem)', fontWeight: 'bold' }}>
                    kids@jesusredeems.org
                  </a>
                  <p style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>📨 We reply within 24 hours!</p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form with ROCKET */}
            <div className="form-card card-2">
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <div style={{ 
                  background: 'linear-gradient(135deg, #4454b9, #202646)',
                  width: 'clamp(60px, 15vw, 70px)',
                  height: 'clamp(60px, 15vw, 70px)',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '12px',
                  fontSize: 'clamp(32px, 8vw, 38px)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  cursor: 'pointer'
                }} className="rocket-animatea">
                  🚀
                </div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 1.5rem)', margin: '8px 0', background: 'linear-gradient(135deg, #1350ab, #2a4a7f)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Send us a Message!</h2>
                <div style={{ width: '50px', height: '3px', background: '#2a4a7f', margin: '8px auto' }}></div>
                {/* <div style={{ 
                  background: 'linear-gradient(135deg, #4454b9, #202646)',
                  width: 'clamp(60px, 15vw, 70px)',
                  height: 'clamp(60px, 15vw, 70px)',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '12px',
                  fontSize: 'clamp(32px, 8vw, 38px)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }} className="rocket-animate">
                  🚀
                </div> */}
              </div>
              
              <p style={{ textAlign: 'center', color: '#555', marginBottom: '20px', fontSize: 'clamp(12px, 4vw, 0.9rem)' }}>
                💝 We would love to pray for you or answer any questions about our VBS and Kids Ministry.
              </p>

              <form onSubmit={handleSubmit} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#1350ab', fontWeight: 'bold', fontSize: 'clamp(13px, 4vw, 0.9rem)' }}>
                    <span>👧</span> Your Name <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="e.g., Little Sarah or John"
                    tabIndex="1"
                  />
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#1350ab', fontWeight: 'bold', fontSize: 'clamp(13px, 4vw, 0.9rem)' }}>
                    <span>📧</span> Email Address 
                    <span style={{ color: '#888', fontSize: 'clamp(10px, 3vw, 0.75rem)', fontWeight: 'normal' }}>(Optional)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="your@email.com (optional)"
                    tabIndex="2"
                  />
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#1350ab', fontWeight: 'bold', fontSize: 'clamp(13px, 4vw, 0.9rem)' }}>
                    <span>📱</span> Phone Number <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="e.g., 9876543210"
                    tabIndex="3"
                  />
                  <p style={{ fontSize: '11px', color: '#888', marginTop: '5px' }}>For Contact Purpose</p>
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#1350ab', fontWeight: 'bold', fontSize: 'clamp(13px, 4vw, 0.9rem)' }}>
                    <span>📌</span> Subject <span style={{ color: 'red' }}>*</span>
                  </label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="input-field"
                    tabIndex="4"
                  >
                    <option value="">✨ Select a topic... ✨</option>
                    <option value="VBS Registration">🙌 VBS Registration</option>
                    <option value="Prayer Request">🙏 Prayer Request</option>
                    <option value="Volunteer">❤️ Volunteer with us</option>
                    <option value="General Question">💬 General Question</option>
                    <option value="Feedback">⭐ Feedback & Suggestions</option>
                  </select>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#1350ab', fontWeight: 'bold', fontSize: 'clamp(13px, 4vw, 0.9rem)' }}>
                    <span>💖</span> Your Message <span style={{ color: 'red' }}>*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Write your message here... God bless you! ✝️"
                    tabIndex="5"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-btn cute-button"
                  tabIndex="6"
                >
                  {isSubmitting ? (
                    <>⏳ Sending Your Message... ⏳</>
                  ) : (
                    <>🚀 Send Message 🚀</>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="success-message" style={{ marginTop: '15px', padding: '12px' }}>
                    <div>🎉 Hooray! 🎉</div>
                    <p style={{ fontSize: 'clamp(12px, 3.5vw, 0.85rem)' }}>Your message was sent successfully! We'll get back to you soon. God bless! ✝️</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="error-message" style={{ marginTop: '15px', padding: '12px' }}>
                    <div>😢 Oops! 😢</div>
                    <p style={{ fontSize: 'clamp(12px, 3.5vw, 0.85rem)' }}>Something went wrong. Please try again or call us directly.</p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Footer */}
          <div style={{ marginTop: '50px', paddingTop: '25px', borderTop: '2px solid rgba(255,255,255,0.2)', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: 'clamp(20px, 6vw, 25px)' }} className="emoji-pulse">❤️</span>
              <span style={{ fontWeight: 'bold', color: 'rgba(255,255,255,0.9)', fontSize: 'clamp(12px, 4vw, 1rem)' }}>Jesus Loves all the Little Children of the World</span>
              <span style={{ fontSize: 'clamp(20px, 6vw, 25px)' }} className="emoji-pulse">❤️</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(10px, 3vw, 0.8rem)', marginTop: '15px' }}>
              © Jesus Redeems Kids Ministry | Growing in Faith, Love, and Joy
            </p>
          </div>
        </div>
      </div>
    </>
  );
}