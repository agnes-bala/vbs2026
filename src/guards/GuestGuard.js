'use client';

import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

GuestGuard.propTypes = {
  children: PropTypes.node,
};

export default function GuestGuard({ children }) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    setMounted(true);
    const jwt = localStorage.getItem("jwt");
    setHasToken(!!jwt);
    if (jwt) {
      router.replace("/dashboard");
    }
  }, [router]);

  if (!mounted) {
    return null; // or a loading spinner
  }

  if (hasToken) {
    return null; // redirect is already triggered
  }

  return <>{children}</>;
}