'use client';

// components
import Iconify from '@/components/Iconify';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: 'Home',
    icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,
    path: '/',
  },
  {
    title: 'Pages',
    path: '/pages',
    icon: <Iconify icon={'eva:file-fill'} {...ICON_SIZE} />,
    children: [
      {
        subheader: 'Other',
        items: [
          { title: 'About us', path: '/about' },
          { title: 'Contact us', path: '/contact' },
          { title: 'FAQs', path: '/faqs' },
          { title: 'Pricing', path: '/pricing' },
          { title: 'Payment', path: '/payment' },
          { title: 'Maintenance', path: '/maintenance' },
          { title: 'Coming Soon', path: '/coming-soon' },
        ],
      },
      {
        subheader: 'Authentication',
        items: [
          { title: 'Login', path: '/auth/login' },
          { title: 'Register', path: '/auth/register' },
          { title: 'Reset password', path: '/auth/reset-password' },
          { title: 'Verify code', path: '/auth/verify' },
        ],
      },
      {
        subheader: 'Error',
        items: [
          { title: 'Page 403', path: '/403' },
          { title: 'Page 404', path: '/404' },
          { title: 'Page 500', path: '/500' },
        ],
      },
      {
        subheader: 'Dashboard',
        items: [{ title: 'Dashboard', path: '/dashboard' }],
      },
    ],
  },
];

export default menuConfig;