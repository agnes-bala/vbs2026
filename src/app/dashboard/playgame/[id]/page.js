// 'use client';

// import { styled } from '@mui/material/styles';
// import { Container } from '@mui/material';
// import QuizRadio from './QuizRadio';

// const RootStyle = styled('div')(() => ({
//   minHeight: "100vh",
//   width: "100%",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",

//   // ✅ BACKGROUND IMAGE
//   backgroundImage: "url('/assets/quiz.png')",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//     marginTop: "-65px", 
// }));

// export default function PlayGamePage() {
//   return (
//     <RootStyle>
//       <Container maxWidth="lg">
//         <QuizRadio />
//       </Container>
//     </RootStyle>
//   );
// }





// 'use client';

// import { styled } from '@mui/material/styles';
// import { Container } from '@mui/material';
// import QuizRadio from './QuizRadio';
// import QuizLoader from './QuizLoader';
// import { useState } from 'react';

// const RootStyle = styled('div')(() => ({
//   minHeight: "100vh",
//   width: "100vw",
// //   display: "flex",
// //   alignItems: "center",
// //   justifyContent: "center",
// //   backgroundImage: "url('/assets/quiz.png')",
//   backgroundSize: "cover",
// //   backgroundPosition: "center",
// //   backgroundRepeat: "no-repeat",
//   marginTop: "-65px",
// }));

// export default function PlayGamePage() {

//   const [showLoader, setShowLoader] = useState(false);

//   return (
//     <RootStyle>
//       <Container maxWidth="lg">

//         {!showLoader ? (
//           <QuizRadio onStart={() => setShowLoader(true)} />
//         ) : (
//           <QuizLoader />
//         )}

//       </Container>
//     </RootStyle>
//   );
// }



'use client';

import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
import QuizRadio from '@/sections/@dashboard/general/app/QuizRadio';
import QuizLoader from './QuizLoader';
import { useState } from 'react';

const RootStyle = styled('div')(({ theme }) => ({
  minHeight: "100vh",
  width: "100vw",
  // backgroundImage: "url('/assets/quiz.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  // Responsive marginTop – mobile gets -10px, laptop gets -65px
  marginTop: "-10px",   // default mobile & small devices
  [theme.breakpoints.up('sm')]: {
    marginTop: "-30px",   // tablets
  },
  [theme.breakpoints.up('md')]: {
    marginTop: "-65px",   // laptop & desktop (your original working value)
  },
}));

export default function PlayGamePage() {
  const [showLoader, setShowLoader] = useState(false);

  return (
    <RootStyle>
      <Container maxWidth="lg">
        {!showLoader ? (
          <QuizRadio onStart={() => setShowLoader(true)} />
        ) : (
          <QuizLoader />
        )}
      </Container>
    </RootStyle>
  );
}