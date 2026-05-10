export async function POST(request) {
  const { identifier, password } = await request.json();
  // Mock: accept any non-empty password
  if (!password) {
    return Response.json({ message: 'Password required' }, { status: 400 });
  }
  const token = 'mock-jwt-token-' + Date.now();
  return Response.json({ token });
}