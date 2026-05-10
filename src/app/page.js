// 'use client';

// import { useEffect, useState, useCallback } from 'react';
// import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay';
// import Link from 'next/link';
// import { Poppins, Aclonica, Lato, Roboto } from 'next/font/google';

// // Configure fonts (same as other pages)
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

// // Image paths – all images must be in public/assets/
// const Jolly_Kids = '/assets/Jolly Kids 2026.jpg';
// const VBSbanner1 = '/assets/JR2026VBS.jpg';
// const Kids_Magazine = '/assets/Kids Magazine 2026.jpg';
// const home_section2_bg = '/assets/abd.png';
// const home_section2_cta = '/assets/vbs-findmore.png';
// const home_section4_bg = '/assets/back.png';
// const home_section5_bg = '/assets/home_section5_bg.png';
// const librarybg = '/assets/librarybgg5.jpg';
// const tree = '/assets/tree.svg';
// const Jolly_Time = '/assets/Jolly Time 2026.jpg';
// const Baby = '/assets/learning.webp';
// const puthusu = '/assets/Puthusu.jpg';
// const stand = '/assets/standandtable.svg';
// // const checkoutmore = '/assets/logo.png';

// const [isLoggedIn, setIsLoggedIn] = useState(false);

// useEffect(() => {
//   const token = localStorage.getItem('jwt') || localStorage.getItem('token');
//   setIsLoggedIn(!!token);
// }, []);

// const images = [
//   { src: Jolly_Kids, href: 'https://www.youtube.com/@JollyKidsprograms' },
//   { src: VBSbanner1, path: isLoggedIn ? '/dashboard' : '/activity' },
//   { src: Jolly_Time, href: 'https://youtu.be/A4VqTcQtA6k' },
//   { src: Kids_Magazine, href: 'https://kids.jesusredeems.com/mag-download/' },
// ];
// export default function Home() {
//   const [mounted, setMounted] = useState(false);
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
//   const [prevEnabled, setPrevEnabled] = useState(false);
//   const [nextEnabled, setNextEnabled] = useState(false);

//   const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
//   const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setPrevEnabled(emblaApi.canScrollPrev());
//     setNextEnabled(emblaApi.canScrollNext());
//   }, [emblaApi]);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     if (!emblaApi) return;
//     emblaApi.on('select', onSelect);
//     onSelect();
//   }, [emblaApi, onSelect]);

//   if (!mounted) return null;

//   return (
//     <div className={poppins.className}>
//       <style jsx global>{`
//         /* Embla Carousel Styles */
//         .embla {
//           overflow: hidden;
//           width: 100%;
//           position: relative;
//           margin-top: -15px;
//         }
//         .embla__container {
//           display: flex;
//         }
//         .embla__slide {
//           flex: 0 0 100%;
//           min-width: 0;
//           height: 100%;
//           position: relative;
//         }
//         .embla__slide img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//         }

//         .purple-spacer {
//           height: 12vh;
//           background-color: #8927c8;
//           position: relative;
//           z-index: -1;
//         }

//         /* BANNER SECTION – VBS content moved right, tree lowered, text justified */



//  .bannr {
//           background-size: cover;
//           background-repeat: no-repeat;
//           background-position: top;
//           display: flex;
//           flex-wrap: wrap;
//           align-items: flex-start;
//           justify-content: space-between;
//           padding: 2rem;
//           min-height: 60vh;
//         }
//         .bannr .container {
//           flex: 2;
//           text-align: center;
//           color: white;
//           background: none;
//           box-shadow: none;
//           margin: 0;
//           padding-top: 0;
//           margin-top: -70px;          /* less negative: heading not too high */
//           margin-left: 12%;            /* shift VBS content more to the right */
//         }
//         .bannr h1 {
//           font-weight: bold;
//           font-size: 5rem;
//           margin: 0 0 1rem 0;
//           font-family: ${fontStack};
//         }
//         .bannr p {
//           width: 62%;                  /* a bit narrower for better side gaps */
//           margin: 1rem auto;
//           font-weight: bold;
//           font-family: ${fontStack};
//           text-align: justify;         /* left and right aligned */
//         }
//         .bannrimg {
//           flex: 1;
//           max-width: 280px;
//           height: auto;
//           margin-top: 2rem;
//            left: -30px;           /* lowered tree (was -3rem) */
//         }









//         .banner {
//           background-size: cover;
//           background-repeat: no-repeat;
//           background-position: top;
//           display: flex;
//           flex-wrap: wrap;
//           align-items: flex-start;
//           justify-content: space-between;
//           padding: 2rem;
//           min-height: 100vh;
//         }
//         .banner .container {
//           flex: 2;
//           text-align: center;
//           color: white;
//           background: none;
//           box-shadow: none;
//           margin: 0;
//           padding-top: 0;
//           margin-top: -70px;          /* less negative: heading not too high */
//           margin-left: 12%;            /* shift VBS content more to the right */
//         }
//         .banner h1 {
//           font-weight: bold;
//           font-size: 5rem;
//           margin: 0 0 1rem 0;
//           font-family: ${fontStack};
//         }
//         .banner p {
//           width: 62%;                  /* a bit narrower for better side gaps */
//           margin: 1rem auto;
//           font-weight: bold;
//           font-family: ${fontStack};
//           text-align: justify;         /* left and right aligned */
//         }
      

//         /* Project Section (unchanged) */
//         .project {
//           background-size: cover;
//           background-repeat: no-repeat;
//           min-height: 100vh;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 2rem;
//         }
//         .project .container {
//           display: flex;
//           flex-direction: row;
//           flex-wrap: wrap;
//           gap: 2rem;
//           align-items: center;
//           justify-content: center;
//           background: none;
//           box-shadow: none;
//           max-width: 1200px;
//           width: 100%;
//         }
//         .project .container > div {
//           flex: 1;
//           text-align: center;
//           min-width: 250px;
//         }
//         .project h2 {
//           color: white;
//           font-weight: bold;
//           font-size: 32px;
//           margin-bottom: 1rem;
//           font-family: ${fontStack};
//         }
//         .project p {
//           color: white;
//           font-weight: bold;
//           width: 80%;
//           margin: 0 auto 1rem;
//           padding: 10px;
//           font-family: ${fontStack};
//         }

//         .library {
//           background-size: cover;
//           background-repeat: no-repeat;
//           background-position: center;
//           height: 100vh;
//           width: 100%;
//         }

//         /* Responsive */
//         @media (max-width: 768px) {
//           .embla {
//             margin-top: -9px;
//           }
//           .purple-spacer {
//             display: none;
//           }
//           .banner {
//             flex-direction: column;
//             text-align: center;
//           }
//           .banner .container {
//             margin-left: 0;
//             margin-top: 0;
//           }
//           .banner h1 {
//             font-size: 2rem;
//           }
//           .banner p {
//             width: 90%;
//             text-align: justify;
//           }
//           .bannerimg {
//             display: none;
//           }
//           .project {
//             min-height: 75vh;
//           }
//           .project .container {
//             flex-direction: column;
//           }
//           .project h2 {
//             font-size: 28px;
//           }
//           .library {
//             height: 25vh;
//           }
//         }

//         @media (min-width: 769px) and (max-width: 1024px) {
//           .banner h1 {
//             font-size: 3rem;
//           }
//           .banner p {
//             width: 75%;
//           }
//           .purple-spacer {
//             display: block;
//           }
//           .library {
//             height: 60vh;
//           }
//         }

//         @media (min-width: 1025px) {
//           .purple-spacer {
//             display: block;
//           }
//         }
//       `}</style>

//       {/* Carousel Section – unchanged */}
//       <div style={{ position: 'relative' }}>
//         <button
//           onClick={scrollPrev}
//           style={{
//             position: 'absolute',
//             top: '50%',
//             left: '10px',
//            width: '50px',           // ← add this
//       padding: '12px 0',       // ← increase vertical padding
//       fontSize: '24px',        // ← make arrow bigger
//       fontWeight: 'bold', 
//             zIndex: 2,
            
        

//             transform: 'translateY(-50%)',
//             backgroundColor: 'rgba(255,255,255,0.7)',
//             border: 'none',
//             borderRadius: '50%',
//             cursor: 'pointer',
//             padding: '8px',
//           }}
//           disabled={!prevEnabled}
//         >
//           ❮
//         </button>
//         <button
//           onClick={scrollNext}
//           style={{
//             position: 'absolute',
//             top: '50%',
//             right: '10px',
//             zIndex: 2,
//             transform: 'translateY(-50%)',
//             backgroundColor: 'rgba(255,255,255,0.7)',
//             border: 'none',
//             borderRadius: '50%',
//             cursor: 'pointer',
//                   width: '50px',           // ← add this
//       padding: '12px 0',       // ← increase vertical padding
//       fontSize: '24px',        // ← make arrow bigger
//       fontWeight: 'bold',      
//             padding: '8px',
//           }}
//           disabled={!nextEnabled}
//         >
//           ❯
//         </button>

//         <div className="embla" ref={emblaRef}>
//           <div className="embla__container">
//             {images.map((img, i) => (
//               <div className="embla__slide" key={i}>
//                 <a href={img.href} target="_blank" rel="noopener noreferrer">
//                   <img src={img.src} alt="banner" />
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Purple spacer */}
//       {/* <div className="purple-spacer" /> */}

//       {/* VBS Banner Section */}
//     <div
//   className="banner"
//   style={{
//     backgroundImage: `url(${home_section2_bg})`,
//     // backgroundSize: 'cover',
//     // backgroundPosition: 'center top',
//     // backgroundRepeat: 'no-repeat',
//     // width: '100%',
//     // minHeight: '400px',
//     // marginBottom: '-10px',        // ← add this line
//   }}
// >
//         <div className="container">
//           {/* <h1>VBS</h1> */}
//           {/* <p>
//             VBS is an acronym of Virtual Bible School, started with the vision of sharing the good news to the kids through visual media.
//             <br /><br />
//             Every year we invite kids to join us and learn about Our Lord and Savior Jesus Christ based on the theme given by God. Stay tuned with us and watch us Live from 11 May 2026 to 15 May 2026.
//           </p> */}



//             {/* <div
//     style={{
//       position: 'absolute',
//       top: '60px',
//       left: '130px',
//       display: 'flex',
//       alignItems: 'center',
//       gap: '10px',
//       background: 'linear-gradient(135deg, #ffd966, #ffc107)',
//       padding: '8px 16px',
//       borderRadius: '30px',
//       color: '#07075b',
//       fontWeight: 'bold',
//       fontSize: '14px',
//       whiteSpace: 'nowrap',
//     }}
//   >
//     <span>⬅️</span>
//     <span>Click here to know more about VBS 2026!</span>
//     <span>➡️</span>
//   </div> */}<div style={{ position: 'relative', display: 'inline-block' }}>
  
 
// </div>
//    <Link href="/about" style={{ textDecoration: 'none' }}>
//   <div
//     style={{
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'flex-end',
//       textAlign: 'center',
//       width: '100%',
//       height: '100vh',
//       paddingBottom: { xs: '30px', sm: '40px', md: '50px' },
//       margin: 0,
//       position: 'relative',
//     }}
//   >
//     {/* <img 
//       src={checkoutmore} 
//       alt="button" 
//       style={{
//         width: '70px',
//         height: 'auto',
//         marginBottom: '8px',
//         display: 'block',
//         objectFit: 'contain',
//       }}
//     /> */}
//     {/* <button style={{
//       backgroundColor: 'orange',
//       border: 'none',
//       borderRadius: '8px',
//       padding: '8px 16px',
//       fontSize: '12px',
//       fontWeight: 'bold',
//       color: 'white',
//       cursor: 'pointer',
//       transition: 'transform 0.2s ease',
//     }}
//     onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
//     onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
//     >
//       click Here ⬆️
//     </button> */}
//   </div>
// </Link>
//         </div>
//         {/* <img src={tree} alt="tree" className="bannerimg" /> */}
//       </div>





//       {/* Kids Songs Section */}
//       <div
//         className="project"
//         style={{
//           backgroundImage: `url(${home_section4_bg})`,
//         }}
//       >
//         <div className="container">
//           <div>
//             <img src={Baby} alt="baby" style={{ maxWidth: '100%' }} />
//           </div>
//           <div>
//             <h2>Kids Songs</h2>
//             <p>Do watch our song released in youtube.</p>
//             <a href="https://youtu.be/zTVjJR50SCU" target="_blank" rel="noopener noreferrer">
//               <img src={home_section2_cta} alt="button" width="150" height="66" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Jolly Kids Section */}
//       <div
//         className="project"
//         style={{
//           backgroundImage: `url(${home_section5_bg})`,
//         }}
//       >
//         <div className="container">
//           <div>
//             <div style={{ border: '8px solid #FA4C2E', borderRadius: '2px', display: 'inline-block', width: '60%' }}>
//               <a href="https://youtu.be/HkDZYZCJg-U" target="_blank" rel="noopener noreferrer">
//                 <img src={puthusu} alt="tv" style={{ width: '100%', borderRadius: '2px',marginBottom: '-10px'  }} />
//               </a>
//             </div>
//             <img src={stand} alt="tv stand" style={{ width: '320px', marginTop: '-1rem' }} />
//           </div>
//           <div>
//             <h2>Jolly Kids</h2>
//             <p>We have a youtube channel especially for kids Do watch</p>
//             <a href="https://www.youtube.com/@JollyKidsprograms" target="_blank" rel="noopener noreferrer">
//               <img src={home_section2_cta} alt="button" width="150" height="66" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Library Section */}
//       <div
//         className="library"
//         style={{
//           backgroundImage: `url(${librarybg})`,
//         }}
//       />
//     </div>
//   );
// }













// 'use client';

// import { useEffect, useState, useCallback } from 'react';
// import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay';
// import Link from 'next/link';
// import { Poppins, Aclonica, Lato, Roboto } from 'next/font/google';

// // Configure fonts (same as other pages)
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

// // Image paths – all images must be in public/assets/
// const Jolly_Kids = '/assets/Jolly Kids 2026.jpg';
// const VBSbanner1 = '/assets/JR2026VBS.jpg';
// const Kids_Magazine = '/assets/Kids Magazine 2026.jpg';
// const home_section2_bg = '/assets/abd.png';
// const home_section2_cta = '/assets/vbs-findmore.png';
// const home_section4_bg = '/assets/back.png';
// const home_section5_bg = '/assets/home_section5_bg.png';
// const librarybg = '/assets/librarybgg5.jpg';
// const tree = '/assets/tree.svg';
// const Jolly_Time = '/assets/Jolly Time 2026.jpg';
// const Baby = '/assets/learning.webp';
// const puthusu = '/assets/Puthusu.jpg';
// const stand = '/assets/standandtable.svg';

// export default function Home() {
//   // ✅ MOVED INSIDE COMPONENT - these hooks are now valid
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [mounted, setMounted] = useState(false);
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
//   const [prevEnabled, setPrevEnabled] = useState(false);
//   const [nextEnabled, setNextEnabled] = useState(false);

//   // ✅ MOVED INSIDE COMPONENT - useEffect for login check
//   useEffect(() => {
//     const token = localStorage.getItem('jwt') || localStorage.getItem('token');
//     setIsLoggedIn(!!token);
//   }, []);

//   // ✅ MOVED INSIDE COMPONENT - images array now uses isLoggedIn
//   const images = [
//     { src: Jolly_Kids, href: 'https://www.youtube.com/@JollyKidsprograms' },
//     { src: VBSbanner1, path: isLoggedIn ? '/dashboard' : '/activity' },
//     { src: Jolly_Time, href: 'https://youtu.be/A4VqTcQtA6k' },
//     { src: Kids_Magazine, href: 'https://kids.jesusredeems.com/mag-download/' },
//   ];

//   const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
//   const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setPrevEnabled(emblaApi.canScrollPrev());
//     setNextEnabled(emblaApi.canScrollNext());
//   }, [emblaApi]);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     if (!emblaApi) return;
//     emblaApi.on('select', onSelect);
//     onSelect();
//   }, [emblaApi, onSelect]);

//   // Handle click for images with internal paths
//   const handleImageClick = (item) => {
//     if (item.href) {
//       window.open(item.href, '_blank');
//     } else if (item.path) {
//       window.location.href = item.path;
//     }
//   };

//   if (!mounted) return null;

//   return (
//     <div className={poppins.className}>
//       <style jsx global>{`
//         /* Embla Carousel Styles */
//         .embla {
//           overflow: hidden;
//           width: 100%;
//           position: relative;
//           margin-top: -15px;
//         }
//         .embla__container {
//           display: flex;
//         }
//         .embla__slide {
//           flex: 0 0 100%;
//           min-width: 0;
//           height: 100%;
//           position: relative;
//         }
//         .embla__slide img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//         }

//         .purple-spacer {
//           height: 12vh;
//           background-color: #8927c8;
//           position: relative;
//           z-index: -1;
//         }

//         .bannr {
//           background-size: cover;
//           background-repeat: no-repeat;
//           background-position: top;
//           display: flex;
//           flex-wrap: wrap;
//           align-items: flex-start;
//           justify-content: space-between;
//           padding: 2rem;
//           min-height: 60vh;
//         }
//         .bannr .container {
//           flex: 2;
//           text-align: center;
//           color: white;
//           background: none;
//           box-shadow: none;
//           margin: 0;
//           padding-top: 0;
//           margin-top: -70px;
//           margin-left: 12%;
//         }
//         .bannr h1 {
//           font-weight: bold;
//           font-size: 5rem;
//           margin: 0 0 1rem 0;
//           font-family: ${fontStack};
//         }
//         .bannr p {
//           width: 62%;
//           margin: 1rem auto;
//           font-weight: bold;
//           font-family: ${fontStack};
//           text-align: justify;
//         }
//         .bannrimg {
//           flex: 1;
//           max-width: 280px;
//           height: auto;
//           margin-top: 2rem;
//           left: -30px;
//         }

//         .banner {
//           background-size: cover;
//           background-repeat: no-repeat;
//           background-position: top;
//           display: flex;
//           flex-wrap: wrap;
//           align-items: flex-start;
//           justify-content: space-between;
//           padding: 2rem;
//           min-height: 100vh;
//         }
//         .banner .container {
//           flex: 2;
//           text-align: center;
//           color: white;
//           background: none;
//           box-shadow: none;
//           margin: 0;
//           padding-top: 0;
//           margin-top: -70px;
//           margin-left: 12%;
//         }
//         .banner h1 {
//           font-weight: bold;
//           font-size: 5rem;
//           margin: 0 0 1rem 0;
//           font-family: ${fontStack};
//         }
//         .banner p {
//           width: 62%;
//           margin: 1rem auto;
//           font-weight: bold;
//           font-family: ${fontStack};
//           text-align: justify;
//         }

//         .project {
//           background-size: cover;
//           background-repeat: no-repeat;
//           min-height: 100vh;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 2rem;
//         }
//         .project .container {
//           display: flex;
//           flex-direction: row;
//           flex-wrap: wrap;
//           gap: 2rem;
//           align-items: center;
//           justify-content: center;
//           background: none;
//           box-shadow: none;
//           max-width: 1200px;
//           width: 100%;
//         }
//         .project .container > div {
//           flex: 1;
//           text-align: center;
//           min-width: 250px;
//         }
//         .project h2 {
//           color: white;
//           font-weight: bold;
//           font-size: 32px;
//           margin-bottom: 1rem;
//           font-family: ${fontStack};
//         }
//         .project p {
//           color: white;
//           font-weight: bold;
//           width: 80%;
//           margin: 0 auto 1rem;
//           padding: 10px;
//           font-family: ${fontStack};
//         }

//         .library {
//           background-size: cover;
//           background-repeat: no-repeat;
//           background-position: center;
//           height: 100vh;
//           width: 100%;
//         }

//         @media (max-width: 768px) {
//           .embla {
//             margin-top: -9px;
//           }
//           .purple-spacer {
//             display: none;
//           }
//           .banner {
//             flex-direction: column;
//             text-align: center;
//           }
//           .banner .container {
//             margin-left: 0;
//             margin-top: 0;
//           }
//           .banner h1 {
//             font-size: 2rem;
//           }
//           .banner p {
//             width: 90%;
//             text-align: justify;
//           }
//           .bannerimg {
//             display: none;
//           }
//           .project {
//             min-height: 75vh;
//           }
//           .project .container {
//             flex-direction: column;
//           }
//           .project h2 {
//             font-size: 28px;
//           }
//           .library {
//             height: 25vh;
//           }
//         }

//         @media (min-width: 769px) and (max-width: 1024px) {
//           .banner h1 {
//             font-size: 3rem;
//           }
//           .banner p {
//             width: 75%;
//           }
//           .purple-spacer {
//             display: block;
//           }
//           .library {
//             height: 60vh;
//           }
//         }

//         @media (min-width: 1025px) {
//           .purple-spacer {
//             display: block;
//           }
//         }
//       `}</style>

//       {/* Carousel Section */}
//       <div style={{ position: 'relative' }}>
//         <button
//           onClick={scrollPrev}
//           style={{
//             position: 'absolute',
//             top: '50%',
//             left: '10px',
//             width: '50px',
//             padding: '12px 0',
//             fontSize: '24px',
//             fontWeight: 'bold',
//             zIndex: 2,
//             transform: 'translateY(-50%)',
//             backgroundColor: 'rgba(255,255,255,0.7)',
//             border: 'none',
//             borderRadius: '50%',
//             cursor: 'pointer',
//           }}
//           disabled={!prevEnabled}
//         >
//           ❮
//         </button>
//         <button
//           onClick={scrollNext}
//           style={{
//             position: 'absolute',
//             top: '50%',
//             right: '10px',
//             width: '50px',
//             padding: '12px 0',
//             fontSize: '24px',
//             fontWeight: 'bold',
//             zIndex: 2,
//             transform: 'translateY(-50%)',
//             backgroundColor: 'rgba(255,255,255,0.7)',
//             border: 'none',
//             borderRadius: '50%',
//             cursor: 'pointer',
//           }}
//           disabled={!nextEnabled}
//         >
//           ❯
//         </button>

//         <div className="embla" ref={emblaRef}>
//           <div className="embla__container">
//             {images.map((img, i) => (
//               <div className="embla__slide" key={i} onClick={() => handleImageClick(img)}>
//                 {img.href ? (
//                   <a href={img.href} target="_blank" rel="noopener noreferrer">
//                     <img src={img.src} alt="banner" />
//                   </a>
//                 ) : (
//                   <img src={img.src} alt="banner" style={{ cursor: 'pointer' }} />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* VBS Banner Section */}
//       <div
//         className="banner"
//         style={{
//           backgroundImage: `url(${home_section2_bg})`,
//         }}
//       >
//         <div className="container">
//           <Link href="/dashboard" style={{ textDecoration: 'none' }}>
//             <div
//               style={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 justifyContent: 'flex-end',
//                 textAlign: 'center',
//                 width: '100%',
//                 height: '100vh',
//                 paddingBottom: '50px',
//                 margin: 0,
//                 position: 'relative',
//               }}
//             />
//           </Link>
//         </div>
//       </div>

//       {/* Kids Songs Section */}
//       <div
//         className="project"
//         style={{
//           backgroundImage: `url(${home_section4_bg})`,
//         }}
//       >
//         <div className="container">
//           <div>
//             <img src={Baby} alt="baby" style={{ maxWidth: '100%' }} />
//           </div>
//           <div>
//             <h2>Kids Songs</h2>
//             <p>Do watch our song released in youtube.</p>
//             <a href="https://youtu.be/zTVjJR50SCU" target="_blank" rel="noopener noreferrer">
//               <img src={home_section2_cta} alt="button" width="150" height="66" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Jolly Kids Section */}
//       <div
//         className="project"
//         style={{
//           backgroundImage: `url(${home_section5_bg})`,
//         }}
//       >
//         <div className="container">
//           <div>
//             <div style={{ border: '8px solid #FA4C2E', borderRadius: '2px', display: 'inline-block', width: '60%' }}>
//               <a href="https://youtu.be/HkDZYZCJg-U" target="_blank" rel="noopener noreferrer">
//                 <img src={puthusu} alt="tv" style={{ width: '100%', borderRadius: '2px', marginBottom: '-10px' }} />
//               </a>
//             </div>
//             <img src={stand} alt="tv stand" style={{ width: '320px', marginTop: '-1rem' }} />
//           </div>
//           <div>
//             <h2>Jolly Kids</h2>
//             <p>We have a youtube channel especially for kids Do watch</p>
//             <a href="https://www.youtube.com/@JollyKidsprograms" target="_blank" rel="noopener noreferrer">
//               <img src={home_section2_cta} alt="button" width="150" height="66" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Library Section */}
//       <div
//         className="library"
//         style={{
//           backgroundImage: `url(${librarybg})`,
//         }}
//       />
//     </div>
//   );
// }









'use client';

import { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';
import { Poppins, Aclonica, Lato, Roboto } from 'next/font/google';

// Configure fonts (same as other pages)
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

// Combined font stack
const fontStack = `${poppins.style.fontFamily}, ${aclonica.style.fontFamily}, ${lato.style.fontFamily}, ${roboto.style.fontFamily}, sans-serif`;

// Image paths – all images must be in public/assets/
const Jolly_Kids = '/assets/Jolly Kids 2026.jpg';
const VBSbanner1 = '/assets/JR2026VBS.jpg';
const Kids_Magazine = '/assets/Kids Magazine 2026.jpg';
const home_section2_bg = '/assets/abd.png';
const home_section2_cta = '/assets/vbs-findmore.png';
const home_section4_bg = '/assets/back.png';
const home_section5_bg = '/assets/home_section5_bg.png';
const librarybg = '/assets/librarybgg5.jpg';
const tree = '/assets/tree.svg';
const Jolly_Time = '/assets/Jolly Time 2026.jpg';
const Baby = '/assets/learning.webp';
const puthusu = '/assets/Puthusu.jpg';
const stand = '/assets/standandtable.svg';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('jwt') || localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const images = [
    { src: Jolly_Kids, href: 'https://www.youtube.com/@JollyKidsprograms' },
    { src: VBSbanner1, path: isLoggedIn ? '/dashboard' : '/activity' },
    { src: Jolly_Time, href: 'https://youtu.be/A4VqTcQtA6k' },
    { src: Kids_Magazine, href: 'https://kids.jesusredeems.com/mag-download/' },
  ];

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevEnabled(emblaApi.canScrollPrev());
    setNextEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const handleImageClick = (item) => {
    if (item.href) {
      window.open(item.href, '_blank');
    } else if (item.path) {
      window.location.href = item.path;
    }
  };

  if (!mounted) return null;

  return (
    <div className={poppins.className}>
      <style jsx global>{`
        /* Embla Carousel Styles */
        .embla {
          overflow: hidden;
          width: 100%;
          position: relative;
          margin-top: -15px;
        }
        .embla__container {
          display: flex;
        }
        .embla__slide {
          flex: 0 0 100%;
          min-width: 0;
          height: 100%;
          position: relative;
        }
        .embla__slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .purple-spacer {
          height: 12vh;
          background-color: #8927c8;
          position: relative;
          z-index: -1;
        }

        .bannr {
          background-size: cover;
          background-repeat: no-repeat;
          background-position: top;
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: space-between;
          padding: 2rem;
          min-height: 60vh;
        }
        .bannr .container {
          flex: 2;
          text-align: center;
          color: white;
          background: none;
          box-shadow: none;
          margin: 0;
          padding-top: 0;
          margin-top: -70px;
          margin-left: 12%;
        }
        .bannr h1 {
          font-weight: bold;
          font-size: 5rem;
          margin: 0 0 1rem 0;
          font-family: ${fontStack};
        }
        .bannr p {
          width: 62%;
          margin: 1rem auto;
          font-weight: bold;
          font-family: ${fontStack};
          text-align: justify;
        }
        .bannrimg {
          flex: 1;
          max-width: 280px;
          height: auto;
          margin-top: 2rem;
          left: -30px;
        }

        .banner {
          background-size: cover;
          background-repeat: no-repeat;
          background-position: top;
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: space-between;
          padding: 2rem;
          min-height: 100vh;
        }
        .banner .container {
          flex: 2;
          text-align: center;
          color: white;
          background: none;
          box-shadow: none;
          margin: 0;
          padding-top: 0;
          margin-top: -70px;
          margin-left: 12%;
        }
        .banner h1 {
          font-weight: bold;
          font-size: 5rem;
          margin: 0 0 1rem 0;
          font-family: ${fontStack};
        }
        .banner p {
          width: 62%;
          margin: 1rem auto;
          font-weight: bold;
          font-family: ${fontStack};
          text-align: justify;
        }

        .project {
          background-size: cover;
          background-repeat: no-repeat;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        .project .container {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 2rem;
          align-items: center;
          justify-content: center;
          background: none;
          box-shadow: none;
          max-width: 1200px;
          width: 100%;
        }
        .project .container > div {
          flex: 1;
          text-align: center;
          min-width: 250px;
        }
        .project h2 {
          color: white;
          font-weight: bold;
          font-size: 32px;
          margin-bottom: 1rem;
          font-family: ${fontStack};
        }
        .project p {
          color: white;
          font-weight: bold;
          width: 80%;
          margin: 0 auto 1rem;
          padding: 10px;
          font-family: ${fontStack};
        }

        .library {
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          height: 100vh;
          width: 100%;
        }

        @media (max-width: 768px) {
          .embla {
            margin-top: -9px;
          }
          .purple-spacer {
            display: none;
          }
          .banner {
            flex-direction: column;
            text-align: center;
          }
          .banner .container {
            margin-left: 0;
            margin-top: 0;
          }
          .banner h1 {
            font-size: 2rem;
          }
          .banner p {
            width: 90%;
            text-align: justify;
          }
          .bannerimg {
            display: none;
          }
          .project {
            min-height: 75vh;
          }
          .project .container {
            flex-direction: column;
          }
          .project h2 {
            font-size: 28px;
          }
          .library {
            height: 25vh;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .banner h1 {
            font-size: 3rem;
          }
          .banner p {
            width: 75%;
          }
          .purple-spacer {
            display: block;
          }
          .library {
            height: 60vh;
          }
        }

        @media (min-width: 1025px) {
          .purple-spacer {
            display: block;
          }
        }
      `}</style>

      {/* Carousel Section */}
      <div style={{ position: 'relative' }}>
        <button
          onClick={scrollPrev}
          style={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            width: '50px',
            padding: '12px 0',
            fontSize: '24px',
            fontWeight: 'bold',
            zIndex: 2,
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255,255,255,0.7)',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
          }}
          disabled={!prevEnabled}
        >
          ❮
        </button>
        <button
          onClick={scrollNext}
          style={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            width: '50px',
            padding: '12px 0',
            fontSize: '24px',
            fontWeight: 'bold',
            zIndex: 2,
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255,255,255,0.7)',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
          }}
          disabled={!nextEnabled}
        >
          ❯
        </button>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {images.map((img, i) => (
              <div className="embla__slide" key={i} onClick={() => handleImageClick(img)}>
                {img.href ? (
                  <a href={img.href} target="_blank" rel="noopener noreferrer">
                    <img src={img.src} alt="banner" />
                  </a>
                ) : (
                  <img src={img.src} alt="banner" style={{ cursor: 'pointer' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

 {/* Shadow Effect between sections */}
<div 
  style={{
    height: '30px',
    background: 'transparent',
    boxShadow: '0px 10px 20px rgba(0,0,0,0.3), inset 0px 1px 0px rgba(255,255,255,0.2)',
    marginTop: '-20px',
    position: 'relative',
    zIndex: 2,
  }}
/>
      {/* VBS Banner Section */}
      <div
        className="banner"
        style={{
          backgroundImage: `url(${home_section2_bg})`,
          marginTop: '-10px',
        }}
      >
        <div className="container">
          <Link href="/dashboard" style={{ textDecoration: 'none' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                textAlign: 'center',
                width: '100%',
                height: '100vh',
                paddingBottom: '50px',
                margin: 0,
                position: 'relative',
              }}
            />
          </Link>
        </div>
      </div>

      {/* Kids Songs Section */}
      <div
        className="project"
        style={{
          backgroundImage: `url(${home_section4_bg})`,
        }}
      >
        <div className="container">
          <div>
            <img src={Baby} alt="baby" style={{ maxWidth: '100%' }} />
          </div>
          <div>
            <h2>Kids Songs</h2>
            <p>Do watch our song released in youtube.</p>
            <a href="https://youtu.be/zTVjJR50SCU" target="_blank" rel="noopener noreferrer">
              <img src={home_section2_cta} alt="button" width="150" height="66" />
            </a>
          </div>
        </div>
      </div>

      {/* Jolly Kids Section */}
      <div
        className="project"
        style={{
          backgroundImage: `url(${home_section5_bg})`,
        }}
      >
        <div className="container">
          <div>
            <div style={{ border: '8px solid #FA4C2E', borderRadius: '2px', display: 'inline-block', width: '60%' }}>
              <a href="https://youtu.be/HkDZYZCJg-U" target="_blank" rel="noopener noreferrer">
                <img src={puthusu} alt="tv" style={{ width: '100%', borderRadius: '2px', marginBottom: '-10px' }} />
              </a>
            </div>
            <img src={stand} alt="tv stand" style={{ width: '320px', marginTop: '-1rem' }} />
          </div>
          <div>
            <h2>Jolly Kids</h2>
            <p>We have a youtube channel especially for kids Do watch</p>
            <a href="https://www.youtube.com/@JollyKidsprograms" target="_blank" rel="noopener noreferrer">
              <img src={home_section2_cta} alt="button" width="150" height="66" />
            </a>
          </div>
        </div>
      </div>

      {/* Library Section */}
      <div
        className="library"
        style={{
          backgroundImage: `url(${librarybg})`,
        }}
      />
    </div>
  );
}