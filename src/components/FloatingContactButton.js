"use client";

import React, { useEffect, useState } from "react";
import { Fab, Box } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function FloatingContactButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 9488375315

  // Change these numbers to your actual phone numbers
  const phoneNumber = "9488375315";
  const whatsappNumber = "9488375315";

  if (!mounted) {
    return null;
  }

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 1000,
        top: 200,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {/* WhatsApp Button */}
      <Fab
        size="medium"
        sx={{ 
          bgcolor: "#25D366",  // WhatsApp Green
          color: "#fff",
          "&:hover": { 
            bgcolor: "#128C7E",  // Darker green on hover
            transform: "scale(1.1)"
          },
          transition: "all 0.3s ease"
        }}
        onClick={() => {
          window.open(`https://wa.me/${whatsappNumber}`, "_blank", "noopener,noreferrer");
        }}
      >
        <WhatsAppIcon />
      </Fab>

      {/* Phone Button */}
      <Fab
        size="medium"
        sx={{ 
          bgcolor: "#FF9800",  // Orange color
          color: "#fff",
          "&:hover": { 
            bgcolor: "#F57C00",  // Darker orange on hover
            transform: "scale(1.1)"
          },
          transition: "all 0.3s ease"
        }}
        onClick={() => {
          window.location.href = `tel:${phoneNumber}`;
        }}
      >
        <PhoneIcon />
      </Fab>
    </Box>
  );
}