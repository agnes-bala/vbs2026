// 'use client';

// import { usePathname } from 'next/navigation';
// import Header from './Header';

// export default function ConditionalHeader() {
//   const pathname = usePathname();
  
//   // Hide header on dashboard routes
//   if (pathname?.startsWith('/dashboard')) {
//     return null;
//   }
  
//   return <Header />;
// }






'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';

export default function ConditionalHeader() {
  const pathname = usePathname();
  
  // Hide header on dashboard routes
  if (pathname?.startsWith('/dashboard')) {
    return null;
  }
  
  return <Header />;
}