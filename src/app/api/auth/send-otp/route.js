import { otpStore } from '@/lib/otpStore';

export async function POST(request) {
  const { identifier } = await request.json();
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore.set(identifier, { otp, expires: Date.now() + 5 * 60 * 1000 });
  console.log(`OTP for ${identifier}: ${otp}`);   // ← check your terminal
  return Response.json({ message: 'OTP sent successfully' });
}