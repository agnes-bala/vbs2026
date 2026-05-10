'use client';

import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { Container, Typography } from '@mui/material';
// components
import { MotionContainer, varBounce } from '../components/animate';
// assets – ensure ForbiddenIllustration is available (e.g., as a component or image)
import { ForbiddenIllustration } from '../assets';

// ----------------------------------------------------------------------

RoleBasedGuard.propTypes = {
  hasContent: PropTypes.bool,
  roles: PropTypes.arrayOf(PropTypes.string), // Example ['admin', 'leader']
  children: PropTypes.node.isRequired,
};

export default function RoleBasedGuard({ hasContent, roles, children }) {
  // Replace this with your actual role logic (e.g., from context or localStorage)
  const currentRole = 'user'; // or from auth context

  // For demo, we check if the current role is allowed
  // Note: the original code had a bug: it set currentRole = roles, which is wrong.
  // We'll correct it: check if roles array is defined and contains currentRole.
  if (roles && !roles.includes(currentRole)) {
    return hasContent ? (
      <Container component={MotionContainer} sx={{ textAlign: 'center' }}>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" paragraph>
            Permission Denied
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{ color: 'text.secondary' }}>
            You do not have permission to access this page
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <ForbiddenIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
        </m.div>
      </Container>
    ) : null;
  }

  return <>{children}</>;
}