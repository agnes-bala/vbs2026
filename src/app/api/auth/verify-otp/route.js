import { otpStore } from '@/lib/otpStore';

export async function POST(request) {
  const { identifier, otp } = await request.json();
  const record = otpStore.get(identifier);
  if (!record) {
    return Response.json({ message: 'OTP not requested or expired' }, { status: 400 });
  }
  if (Date.now() > record.expires) {
    otpStore.delete(identifier);
    return Response.json({ message: 'OTP expired' }, { status: 400 });
  }
  if (record.otp !== otp) {
    return Response.json({ message: 'Invalid OTP' }, { status: 400 });
  }
  otpStore.delete(identifier);
  const token = 'mock-jwt-token-' + Date.now();
  return Response.json({ token });
}