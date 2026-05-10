"use client";

import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import { toast } from "react-toastify";

const exportAsImage = async (element, filename) => {
  const canvas = element.querySelector("canvas");
  if (!canvas) return;

  try {
    const link = document.createElement("a");
    link.download = `${filename}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  } catch (err) {
    console.error("Download failed", err);
    toast.error("Failed to download certificate");
  }
};

export default function DownloadCertPage() {
  const router = useRouter();
  const [childName, setChildName] = useState("");
  const [childGender, setChildGender] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const exportRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const name = localStorage.getItem("cName");
    const gender = localStorage.getItem("cGender");
    
    if (!name) {
      toast.error("No child selected.");
      router.push("/dashboard");
      return;
    }
    
    setChildName(name);
    setChildGender(gender ? parseInt(gender) : 1);
    setLoading(false);
  }, [router]);

  useEffect(() => {
    if (loading || !childName) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 1014;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const img = new Image();
    
    const certificateImage = childGender === 2 ? "/assets/girl.png" : "/assets/boy.png";
    img.src = certificateImage;

    img.onload = () => {
      ctx.drawImage(img, 0, 0, 800, 1014);
      
      const nameText = childName.toUpperCase();
      const nameLength = nameText.length;
      
      // Dynamic font size based on name length
      let fontSize;
      if (nameLength <= 10) {
        fontSize = 28;
      } else if (nameLength <= 15) {
        fontSize = 24;
      } else if (nameLength <= 20) {
        fontSize = 20;
      } else {
        fontSize = 18;
      }
      
      // Dynamic X position based on name length
      let xPosition;
      if (nameLength <= 10) {
        xPosition = 400; // Center
      } else if (nameLength <= 15) {
        xPosition = 395; // Slightly left
      } else if (nameLength <= 20) {
        xPosition = 390; // More left
      } else {
        xPosition = 385; // Most left
      }
      
      // Dynamic Y position (move up if name is long to avoid overlap)
      let yPosition = 520; // Default
      if (nameLength > 20) {
        yPosition = 470; // Move up slightly
      }
      
      ctx.font = `${fontSize}px 'Verdana', 'Poppins', sans-serif`;
      ctx.textAlign = "center";
      ctx.fillStyle = "#000000";
      ctx.fillText(nameText, xPosition, yPosition);
      setImageLoaded(true);
    };

    img.onerror = (err) => {
      console.error("Image load error:", err);
      toast.error(`Certificate image not found. Please check ${certificateImage}`);
      setImageLoaded(false);
    };
  }, [loading, childName, childGender]);

  const handleDownload = () => {
    if (exportRef.current && imageLoaded) {
      exportAsImage(exportRef.current, `${childName}_certificate`);
      toast.success("Downloading...");
    } else {
      toast.error("Certificate not ready yet.");
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ textAlign: "center", py: 4, px: 2, bgcolor: "transparent" }}>
      <Typography
        sx={{
          fontSize: "28px",
          fontFamily: "Poppins, Aclonica, Lato, Roboto",
          fontWeight: 600,
          color: "#000",
          mb:2,
        }}
      >
        Certificate for {childName.toUpperCase()}
      </Typography>

      <div
        ref={exportRef}
        style={{
          display: "flex",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <canvas
          ref={canvasRef}
          width={800}
          height={1014}
          style={{
            display: "block",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            maxWidth: "100%",
            height: "auto",
            background: "transparent",
          }}
        />
      </div>

      <Button
        onClick={handleDownload}
        disabled={!imageLoaded}
        sx={{
          mt: 4,
          backgroundColor: "transparent",
          color: "#2e7d32",
          px: 4,
          py: 1.5,
          fontWeight: 600,
          fontSize: "1rem",
          textTransform: "none",
          boxShadow: "none",
          textShadow: "0 1px 2px rgba(0,0,0,0.2)",
          "&:hover": {
            backgroundColor: "transparent",
            color: "#1b5e20",
            textShadow: "0 1px 3px rgba(0,0,0,0.3)",
          },
        }}
      >
        Download Certificate for {childName.toUpperCase()}
      </Button>
    </Box>
  );
}