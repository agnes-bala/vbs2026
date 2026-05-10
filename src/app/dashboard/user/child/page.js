'use client';

import { Container, Paper } from '@mui/material';
import ChildForm from '@/components/ChildForm';

export default function ChildPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper sx={{ p: 3 }}>
        <ChildForm />
      </Paper>
    </Container>
  );
}