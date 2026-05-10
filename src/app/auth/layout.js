import GuestGuard from '@/guards/GuestGuard';

export default function AuthLayout({ children }) {
  return <GuestGuard>{children}</GuestGuard>;
}