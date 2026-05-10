import Link from 'next/link';
import { Box } from '@mui/material';
export default function Logo() {
  return (
    <Link href="/" style={{ textDecoration: 'none' }}>
      <Box sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>VBS</Box>
    </Link>
  );
}