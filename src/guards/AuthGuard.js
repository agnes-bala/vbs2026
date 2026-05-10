'use client';

import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { styled } from "@mui/material/styles";
import { Typography, Dialog, DialogContent, Button, Card } from "@mui/material";
import { logoutPartner } from "@/services/JRMPartnerAuthService";
import { getAuthInfo, removeAuthInfo } from "@/auth/AppAuthStorage";
import ContactFormPopup from "@/sections/auth/register/ContactFormPopup";

// ----------------------------------------------------------------------
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    backgroundColor: "transparent",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

AuthGuard.propTypes = {
  children: PropTypes.node,
};

const decodeJWT = (token) => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};

const isIatValid = (token) => {
  const decoded = decodeJWT(token);
  if (!decoded || !decoded.iat) {
    console.log("❌ Invalid JWT: No 'iat' field found");
    return false;
  }
  // For now, always return true – adjust if you need strict date check
  return true;
};

export default function AuthGuard({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [jwt, setJwt] = useState(null);
  const [status, setStatus] = useState(null);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [logoutClicked, setLogoutClicked] = useState(false);

  // Only access localStorage after mount (client side)
  useEffect(() => {
    setMounted(true);
    const token = localStorage.getItem("jwt");
    const profileStatus = localStorage.getItem("profileStatus");
    setJwt(token);
    setStatus(profileStatus);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Check stored location and navigate if needed
    const storedLocation = localStorage.getItem("storedLocation");
    if (storedLocation && storedLocation !== pathname) {
      router.replace(storedLocation);
      return;
    }

    if (!jwt) {
      router.replace("/auth/login");
      return;
    }

    if (!isIatValid(jwt)) {
      // invalid token – log out
      const doLogout = async () => {
        const authInfo = await getAuthInfo();
        await logoutPartner(authInfo);
        await removeAuthInfo();
        localStorage.clear();
        router.replace("/auth/login");
      };
      doLogout();
      return;
    }

    // If we reach here, user is authenticated
    setShouldRedirect(false);
  }, [mounted, jwt, pathname, router]);

  const handleLogout = async () => {
    setLogoutClicked(true);
    const authInfo = await getAuthInfo();
    await logoutPartner(authInfo);
    await removeAuthInfo();
    localStorage.clear();
    router.replace("/auth/login");
  };

  if (!mounted) {
    // return nothing during SSR (or a loading placeholder)
    return null;
  }

  // If no JWT or invalid JWT, we already redirected; prevent rendering children
  if (!jwt || !isIatValid(jwt)) {
    return null;
  }

  // Profile not completed (status === 0)
  if (status === "0" || status === 0) {
    return (
      <>
        <BootstrapDialog
          open={true}
          BackdropProps={{ invisible: true }}
          closeAfterTransition={false}
          fullScreen
        >
          <DialogContent sx={{ backgroundColor: "#000000" }}>
            <Card
              sx={{
                marginTop: "30px",
                marginLeft: "20px",
                marginRight: "20px",
                padding: "30px",
                backgroundColor: "transparent",
              }}
            >
              <Typography align="center" variant="h4">
                Dear Partner
              </Typography>
              <Typography align="center" variant="h4">
                Please provide your information
              </Typography>
              <ContactFormPopup />
              <Button onClick={handleLogout} color="error" disabled={logoutClicked}>
                Logout
              </Button>
            </Card>
          </DialogContent>
        </BootstrapDialog>
      </>
    );
  }

  return children;
}