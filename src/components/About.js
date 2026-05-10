// "use client";

// import { Box, Typography } from "@mui/material";
// import { useRouter } from "next/navigation";
// import { Poppins, Aclonica, Lato, Roboto, Montserrat } from "next/font/google";

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

// const montserrat = Montserrat({
//   weight: ['800'],
//   subsets: ['latin'],
//   display: 'swap',
// });

// // Combined font stack for body text
// const fontStack = `${poppins.style.fontFamily}, ${aclonica.style.fontFamily}, ${lato.style.fontFamily}, ${roboto.style.fontFamily}, sans-serif`;

// const tvbackgound = "/assets/tv.png";
// const VBSimage = "/assets/VBS.gif";
// const enternow = "/assets/enternow.png";

// export default function About() {
//   const router = useRouter();

//   const handleEnterNowClick = () => {
//     router.push("/activity");
//   };

//   return (
//     <Box
//       sx={{
//         backgroundImage: `url(${tvbackgound})`,
//         backgroundSize: "cover",
//         backgroundPosition: { xs: "top", sm: "center", md: "top" },
//         py: 8,
//       }}
//     >
//       <Box
//         sx={{
//           maxWidth: "1200px",
//           mx: "auto",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           px: 2,
//         }}
//       >
//         <Box
//           component="img"
//           src={VBSimage}
//           alt="VBS logo"
//           sx={{
//             width: { xs: "300px", sm: "400px", md: "500px" },
//             height: "auto",
//             mt: { xs: 4, md: 6 },
//           }}
//         />
//         <Typography
//           variant="h1"
//           sx={{
//             color: "white",
//             fontWeight: "bold",
//             letterSpacing: "0.01em",
//             fontFamily: montserrat.style.fontFamily,
//             textAlign: "center",
//             fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
//             my: 2,
//           }}
//         >
//           About us
//         </Typography>
//         <Typography
//           variant="body1"
//           className={poppins.className}
//           sx={{
//             color: "white",
//             width: { xs: "100%", sm: "70%", md: "60%" },
//             textAlign: "justify",
//             fontSize: "1rem",
//             fontFamily: fontStack,
//             mb: 3,
//             lineHeight: 1.3,
//             fontWeight: 400,
//           }}
//         >
//           VBS is an acronym of Virtual Bible School, started with the vision
//           of sharing the good news to the kids through visual media. First VBS
//           program aired during the Corona Lockdown during the year of 2020.
//           Every year new programs were introduced to actively engage the kids.
//           Online activities, craft time, series, message time, worship time,
//           memory verse time, vlog are among the programs. Kids across the
//           globe has been blessed by the program.

//           <br /><br />
//           Stay connected with us to know this year VBS Theme! See you soon!
//         </Typography>

//         {/* Enter Now image as button - navigates directly to activity page */}
//         <Box
//           component="img"
//           src={enternow}
//           alt="Enter Now"
//           onClick={handleEnterNowClick}
//           sx={{
//             marginTop: "58px",
//             maxWidth: "100%",
//             height: "auto",
//             cursor: "pointer",
//             transition: "transform 0.2s",
//             "&:hover": { transform: "scale(1.02)" },
//           }}
//         />
//       </Box>
//     </Box>
//   );
// }




"use client";

import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Poppins, Aclonica, Lato, Roboto, Montserrat } from "next/font/google";

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

const montserrat = Montserrat({
  weight: ['800'],
  subsets: ['latin'],
  display: 'swap',
});

// Combined font stack for body text
const fontStack = `${poppins.style.fontFamily}, ${aclonica.style.fontFamily}, ${lato.style.fontFamily}, ${roboto.style.fontFamily}, sans-serif`;

const tvbackgound = "/assets/tv.png";
const VBSimage = "/assets/VBS.gif";
const enternow = "/assets/enternow.png";

export default function About() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleEnterNowClick = () => {
    if (!mounted) return;
    const token = localStorage.getItem("jwt") || localStorage.getItem("token");
    if (token) {
      router.push("/dashboard");
    } else {
      router.push("/activity");
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${tvbackgound})`,
        backgroundSize: "cover",
        backgroundPosition: { xs: "top", sm: "center", md: "top" },
        py: 8,
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: 2,
        }}
      >
        <Box
          component="img"
          src={VBSimage}
          alt="VBS logo"
          sx={{
            width: { xs: "300px", sm: "400px", md: "500px" },
            height: "auto",
            mt: { xs: 4, md: 6 },
          }}
        />
        <Typography
          variant="h1"
          sx={{
            color: "white",
            fontWeight: "bold",
            letterSpacing: "0.01em",
            fontFamily: montserrat.style.fontFamily,
            textAlign: "center",
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            my: 2,
          }}
        >
          About us
        </Typography>
        <Typography
          variant="body1"
          className={poppins.className}
          sx={{
            color: "white",
            width: { xs: "100%", sm: "70%", md: "60%" },
            textAlign: "justify",
            fontSize: "1rem",
            fontFamily: fontStack,
            mb: 3,
            lineHeight: 1.3,
            fontWeight: 400,
          }}
        >
          JESUS REDEEMS VIRTUAL BIBLE SCHOOL, started with the vision
          of sharing the good news to the kids through visual media. First VBS
          program aired during the Corona Lockdown during the year of 2020.
          Every year new programs were introduced to actively engage the kids.
          Online activities, craft time, series, message time, worship time,
          memory verse time, vlog are among the programs. Kids across the
          globe has been blessed by the program.

          <br /><br />
          Stay connected with us to know this year VBS Theme! See you soon!
        </Typography>

        {/* Enter Now image as button - mimics header Activity behavior */}
        <Box
          component="img"
          src={enternow}
          alt="Enter Now"
          onClick={handleEnterNowClick}
          sx={{
            marginTop: "58px",
            maxWidth: "100%",
            height: "auto",
            cursor: "pointer",
            transition: "transform 0.2s",
            "&:hover": { transform: "scale(1.02)" },
          }}
        />
      </Box>
    </Box>
  );
}