export async function POST(request) {
  const { identifier } = await request.json();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(identifier)) {
    return Response.json(
      { message: 'Please enter a valid email address' },
      { status: 400 }
    );
  }
  // For this flow, always go to OTP (no password step)
  return Response.json({ hasPassword: false });
}