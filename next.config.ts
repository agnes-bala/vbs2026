// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   reactStrictMode: true,
//   devIndicators: {
//     appIsrStatus: false,
//     buildActivity: false,
//     buildActivityPosition: 'bottom-right',
//   },
// };

// export default nextConfig;

// // next.config.ts
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   reactStrictMode: true,
//   devIndicators: false,
// };

// export default nextConfig;

// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  output: 'standalone',
  reactStrictMode: true,

  // Disable specific dev indicators
  // devIndicators: {
  //   appIsrStatus: false,
  //   buildActivity: false,
  // },

  // Allow LAN/mobile device access in development
  allowedDevOrigins: ["10.20.1.108"],
};

export default nextConfig;
