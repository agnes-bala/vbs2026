"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Quiz from "../../../../components/Quiz";

export default function QuizLoader() {
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);

  const qno = typeof window !== "undefined" ? localStorage.getItem("qdate") : null;
  const category = typeof window !== "undefined" ? localStorage.getItem("category") || "default" : "default";
  const month = qno ? new Date(qno).getMonth() + 1 : "";
  const day = qno ? new Date(qno).getDate() : "";
  const quizId = `https://your-api-url/jrms/v1/kidsmas/questions/2026/${month}/${day}/${category}`;

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(quizId);
        const data = await res.json();
        if (data?.questions?.length > 0) {
          data.questions.forEach((q) => {
            q.options.forEach((o) => (o.selected = false));
          });
          setQuiz(data);
        } else {
          setQuiz(null);
        }
      } catch (err) {
        console.log("Quiz load error:", err);
        setQuiz(null);
      }
      setLoading(false);
    };
    load();
  }, [quizId]);
  useEffect(() => {
  // Only apply on mobile screens (width < 870px)
  const handleMobileFix = () => {
    if (window.innerWidth < 870) {
      document.body.style.margin = "0";
      document.body.style.padding = "0";
      document.body.style.overflowX = "hidden";
      // Optional: remove any extra spacing from html
      document.documentElement.style.margin = "0";
         document.documentElement.style.height = "100%";   
         document.body.style.height = "100%"; 
      document.documentElement.style.padding = "0";
    } else {
      // Restore default styles on larger screens (if needed)
      document.body.style.margin = "";
      document.body.style.padding = "";
      document.body.style.overflowX = "";
      document.documentElement.style.margin = "";
      document.documentElement.style.padding = "";
    }
  };

  handleMobileFix();
  window.addEventListener("resize", handleMobileFix);
  return () => {
    window.removeEventListener("resize", handleMobileFix);
    // Cleanup: restore body styles
    document.body.style.margin = "";
    document.body.style.padding = "";
    document.body.style.overflowX = "";
    document.documentElement.style.margin = "";
    document.documentElement.style.padding = "";
  };
}, []);

  return (
    <Box
      sx={{
        width: "100vw",
               minHeight: "100vh",  
        position: "relative",
        //  top: { xs: "-90px", md: 0 },
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        overflowY: "auto", 
        minHeight: "100%",
        height: { xs: "calc(100vh + 90px)", md: "auto" },
       
         backgroundSize: "contain",          // ✅ shows full image (top to bottom)
    backgroundPosition: "top center", 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url('/assets/quiz1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        marginTop: { xs: "-75px", md: 0 },
        marginBottom: 0,
        padding: 0,
         transform: { xs: "translateY(-10px)", md: "none" },
        overflowX: "hidden",
      }}
    >
      <Typography
        sx={{
          fontSize: "19px",
          fontWeight: "bold",
          color: "#fff0b2",
          mb: 5,
         
         mt: { xs: 10, md: 10 },
          fontFamily: "'Aclonica', 'Poppins', sans-serif",
          letterSpacing: "1px",
        }}
      >
        Quiz Game
      </Typography>

      <Box
        sx={{
          width: "90%",
          maxWidth: "1300px",
          height: "70vh",
          borderRadius: "14px",
          mb: 30,
                   
          padding: "10px",
          textAlign: "center",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.1)",
          overflow: "auto",
          backgroundImage: "linear-gradient(to right, #200020 10%, #33003e 100%)",
                    backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Typography
            sx={{
              fontFamily: "'Poppins', 'Aclonica', 'Lato', 'Roboto', sans-serif",
              fontSize: "22px",
              mt: 26,
              textAlign: "left",
              fontWeight: 400,
            }}
          >
            Quiz is not yet started.
            <br />
            Quiz will start after the program ends
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
