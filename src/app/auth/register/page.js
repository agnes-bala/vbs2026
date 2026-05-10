'use client';

import dynamic from 'next/dynamic';

// Dynamically import ContactForm with SSR disabled
const ContactForm = dynamic(() => import('@/sections/auth/register/ContactForm'), {
  ssr: false,
  loading: () => <div>Loading...</div>, // optional loading placeholder
});

export default function RegisterPage() {
  return <ContactForm />;
}