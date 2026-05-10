import LoginForm from '@/components/LoginForm'; // or your actual path
import { Container, Paper, Typography } from '@mui/material';

export default function LoginPage() {
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom textAlign="center">Sign In</Typography>
        <LoginForm />
      </Paper>
    </Container>
  );
}