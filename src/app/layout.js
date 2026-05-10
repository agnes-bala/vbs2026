// import './globals.css';
// import ConditionalHeader from './components/ConditionalHeader';
// import MainFooter from './components/MainFooter';

// export const metadata = {
//   title: 'Virtual Bible School',
//   description: 'Learn and grow in faith',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap" rel="stylesheet" />
//       <body>
//         <ConditionalHeader />
//         <main>{children}</main>
//         <MainFooter />
//       </body>
//     </html>
//   );
// }





// import './globals.css';
// import ConditionalHeader from './components/ConditionalHeader';
// import MainFooter from './components/MainFooter';

// export const metadata = {
//   title: 'Virtual Bible School',
//   description: 'Learn and grow in faith',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <link
//           href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap"
//           rel="stylesheet"
//         />
//       </head>
//       <body>
//         <ConditionalHeader />
//         <main>{children}</main>
//         <MainFooter />
//       </body>
//     </html>
//   );
// }



// if (typeof window !== 'undefined') {
//   const originalError = console.error;
//   console.error = (...args) => {
//     const firstArg = args[0] || '';
//     if (typeof firstArg === 'string') {
//       const warningsToSuppress = [
//         'alignItems',
//         'does not recognize',
//         'non-boolean attribute',
//         'InputLabelProps',
//         'InputProps',
//         'primaryTypographyProps',
//         'Received `true` for a non-boolean attribute'
//       ];
      
//       const shouldSuppress = warningsToSuppress.some(warning => 
//         firstArg.includes(warning)
//       );
      
//       if (shouldSuppress) {
//         return;
//       }
//     }
//     originalError(...args);
//   };
// }

// import '../utils/suppressWarnings';


import './globals.css';

import ConditionalHeader from './components/ConditionalHeader';
import MainFooter from './components/MainFooter';
import FloatingContactButton from '../components/FloatingContactButton';

export const metadata = {
  title: 'Virtual Bible School',
  description: 'Learn and grow in faith',
  icons: {
    icon: [
      { url: "/favicon_io/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
    apple: "/favicon_io/apple-touch-icon.png",
  },
  manifest: "/favicon_io/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap"
          rel="stylesheet"
        />
        {/* Favicon links - using large Android icon */}
        <link rel="icon" href="/favicon_io/android-chrome-512x512.png" type="image/png" sizes="512x512" />
        <link rel="icon" href="/favicon_io/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon_io/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon_io/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon_io/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
      </head>
      <body>
        <ConditionalHeader />
        <main>{children}</main>
        <MainFooter />
         <FloatingContactButton /> 
      </body>
    </html>
  );
}