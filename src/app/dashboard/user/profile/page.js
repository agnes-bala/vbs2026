// 'use client';

// import { capitalCase } from 'change-case';
// import { Container, Tab, Box, Tabs, Typography } from '@mui/material';
// import { useRouter, useSearchParams } from 'next/navigation';
// import { useState, useEffect } from 'react';

// import useSettings from '@/hooks/useSettings';
// import Page from '@/components/Page';
// import Iconify from '@/components/Iconify';
// import ContactForm from '@/sections/auth/register/ContactForm';
// import SpouseForm from '@/sections/auth/register/SpouseForm';
// import ChildForm from '@/sections/auth/register/ChildForm';

// export default function UserAccount() {
//   const { themeStretch } = useSettings();
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const tabParam = searchParams.get('tab');

//   const getInitialTab = () => {
//     if (tabParam === 'spouse') return 'Spouse';
//     if (tabParam === 'child') return 'Child/Children';
//     return 'Profile';
//   };

//   const [currentTab, setCurrentTab] = useState(getInitialTab());

//   useEffect(() => {
//     if (tabParam === 'spouse') setCurrentTab('Spouse');
//     else if (tabParam === 'child') setCurrentTab('Child/Children');
//     else setCurrentTab('Profile');
//   }, [tabParam]);

//   const handleChangeTab = (event, newValue) => {
//     if (newValue === 'Dashboard') {
//       router.push('/dashboard');
//       return;
//     }

//     setCurrentTab(newValue);
//     const params = new URLSearchParams(searchParams);
//     if (newValue === 'Spouse') params.set('tab', 'spouse');
//     else if (newValue === 'Child/Children') params.set('tab', 'child');
//     else params.delete('tab');
//     router.push(`/dashboard/user/profile?${params.toString()}`, { scroll: false });
//   };

//   const ACCOUNT_TABS = [
//     {
//       value: 'Dashboard',
//       icon: <Iconify icon="ic:round-dashboard" width={20} height={20} />,
//       component: null,
//     },
//     {
//       value: 'Profile',
//       icon: <Iconify icon="ic:round-account-box" width={20} height={20} />,
//       component: <ContactForm />,
//     },
//     {
//       value: 'Spouse',
//       icon: <Iconify icon="ic:round-receipt" width={20} height={20} />,
//       component: <SpouseForm />,
//     },
//     {
//       value: 'Child/Children',
//       icon: <Iconify icon="eva:bell-fill" width={20} height={20} />,
//       component: <ChildForm />,
//     },
//   ];

//   const renderComponent = () => {
//     const tab = ACCOUNT_TABS.find(t => t.value === currentTab);
//     return tab && tab.component ? tab.component : null;
//   };

//   return (
//     <Page title="User Profile">
//       <Container
//         disableGutters
//         maxWidth={false}
//         sx={{
//           pl: '50px',   // only left padding 5px
//           pr: '0px',       // no right padding
//           py: 4,
//           width: '100%',
//         }}
//       >
//         <Typography
//           variant="h4"
//           component="h1"
//           gutterBottom
//           sx={{ fontFamily: 'Montserrat, sans-serif',pl: '50px',   // only left padding 5px
//           pl: '15px',       // no right padding
          
//           }}
//         >
//           User Profile
//         </Typography>
//         <Tabs
//           value={currentTab}
//           onChange={handleChangeTab}
//           variant="scrollable"
//           scrollButtons="auto"
//           allowScrollButtonsMobile
//           sx={{ mb: 3 }}
//         >
//           {ACCOUNT_TABS.map((tab) => (
//             <Tab
//               key={tab.value}
//               label={capitalCase(tab.value)}
//               icon={tab.icon}
//               value={tab.value}
//               disableRipple
//             />
//           ))}Montserrat
//         </Tabs>
//         <Box sx={{ mt: 2 }}>
//           {renderComponent()}
//         </Box>
//       </Container>
//     </Page>
//   );
// }





'use client';

import { Container, Box, Typography, Link } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Poppins, Aclonica, Lato, Roboto, Montserrat } from 'next/font/google';

import Page from '@/components/Page';
import ContactForm from '@/sections/auth/register/ContactForm';
import SpouseForm from '@/sections/auth/register/SpouseForm';
import ChildForm from '@/sections/auth/register/ChildForm';

// Configure fonts – Poppins as primary
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

// Combined font stack
const fontStack = `${poppins.style.fontFamily}, ${aclonica.style.fontFamily}, ${lato.style.fontFamily}, ${roboto.style.fontFamily}, sans-serif`;

export default function UserAccount() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab');

  const getInitialTab = () => {
    if (tabParam === 'spouse') return 'Spouse';
    if (tabParam === 'child') return 'Child/Children';
    return 'Profile';
  };

  const [currentTab, setCurrentTab] = useState(getInitialTab());

  useEffect(() => {
    if (tabParam === 'spouse') setCurrentTab('Spouse');
    else if (tabParam === 'child') setCurrentTab('Child/Children');
    else setCurrentTab('Profile');
  }, [tabParam]);

  const handleNavClick = (value, e) => {
    e.preventDefault();
    if (value === 'Dashboard') {
      router.push('/dashboard');
      return;
    }

    setCurrentTab(value);
    const params = new URLSearchParams(searchParams);
    if (value === 'Spouse') params.set('tab', 'spouse');
    else if (value === 'Child/Children') params.set('tab', 'child');
    else params.delete('tab');
    router.push(`/dashboard/user/profile?${params.toString()}`, { scroll: false });
  };

  const navItems = ['Dashboard', 'Profile', 'Spouse', 'Child/Children'];

  const renderComponent = () => {
    if (currentTab === 'Profile') return <ContactForm />;
    if (currentTab === 'Spouse') return <SpouseForm />;
    if (currentTab === 'Child/Children') return <ChildForm />;
    return null;
  };

  return (
    <Page title="User Profile">
      <Container
        disableGutters
        maxWidth={false}
        className={poppins.className}
        sx={{
          pl: '50px',
          pr: '0px',
          pt: 0,
          pb: 2,
          width: '100%',
          fontFamily: fontStack,
          fontWeight: 500,
          '& *': {
            fontFamily: `${fontStack} !important`,
          },
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontFamily: montserrat.style.fontFamily,
            fontWeight: 700,
            fontSize: '1.40rem',
            lineHeight: 1.6,
            width: 'fit-content',
            pl: '15px',
            mt: '-50px',
            mb: 1,
          }}
        >
          User Profile
        </Typography>

        {/* Navigation links – dots after EVERY item (4 total), grey colour */}
        <Box sx={{ pl: '15px', mb: 3, display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center' }}>
          {navItems.map((item, index) => (
            <Box key={item} sx={{ display: 'flex', alignItems: 'center' }}>
              <Link
                href="#"
                onClick={(e) => handleNavClick(item, e)}
                sx={{
                  fontFamily: fontStack,
                  color: 'black',
                  fontWeight: 400,
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'none', color: 'black' },
                  fontSize: '0.9rem',
                }}
              >
                {item}
              </Link>
              {/* Dot appears after EVERY item (including the last) */}
              <Typography
                component="span"
                sx={{
                  mx: 1,
                  color: 'grey',          // grey colour
                  fontWeight: 400,
                  fontSize: '0.7rem',
                  fontFamily: fontStack,
                }}
              >
                •
              </Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ mt: 2, pl: '15px' }}>{renderComponent()}</Box>
      </Container>
    </Page>
  );
}