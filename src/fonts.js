import localFont from 'next/font/local';

export const circularStd = localFont({
  src: [
    { path: '../public/fonts/CircularStd-Book.otf', weight: '400', style: 'normal' },
    { path: '../public/fonts/CircularStd-Medium.otf', weight: '500', style: 'normal' },
    { path: '../public/fonts/CircularStd-Bold.otf', weight: '700', style: 'normal' },
  ],
  variable: '--font-circular',  // optional CSS variable
});
// Define similar objects for other fonts...