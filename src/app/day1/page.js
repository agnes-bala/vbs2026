"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Typography, Button, Stack, Paper } from "@mui/material";

export default function Day1Quiz() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Day 1 Questions - CHANGE THESE
  const questions = [
    {
      id: 1,
      text: "What is the first book of the Bible?",
      options: ["Genesis", "Exodus", "Leviticus", "Numbers"],
      correct: "Genesis"
    },
    {
      id: 2,
      text: "Who built the ark?",
      options: ["Moses", "Abraham", "Noah", "David"],
      correct: "Noah"
    },
    {
      id: 3,
      text: "How many days did God take to create the world?",
      options: ["5 days", "6 days", "7 days", "8 days"],
      correct: "6 days"
    },
    {
      id: 4,
      text: "Who was swallowed by a big fish?",
      options: ["Jonah", "Daniel", "Joseph", "Peter"],
      correct: "Jonah"
    },
    {
      id: 5,
      text: "Where was Jesus born?",
      options: ["Jerusalem", "Nazareth", "Bethlehem", "Capernaum"],
      correct: "Bethlehem"
    }
  ];

  const handleAnswer = (answer) => {
    setAnswers({
      ...answers,
      [currentQuestion]: answer
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score
      let score = 0;
      questions.forEach((q, index) => {
        if (answers[index] === q.correct) {
          score++;
        }
      });
      localStorage.setItem("day1_score", score);
      localStorage.setItem("day1_total", questions.length);
      localStorage.setItem("day1_answers", JSON.stringify(answers));
      setSubmitted(true);
    }
  };

  const handleBackToQuiz = () => {
    router.push("/quiz-radio"); // Change to your quiz selection page path
  };

  if (submitted) {
    const score = localStorage.getItem("day1_score");
    const total = localStorage.getItem("day1_total");
    return (
      <Box sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(135deg, #1a237e, #3f51b5)" }}>
        <Paper elevation={3} sx={{ textAlign: "center", p: 5, borderRadius: "20px", maxWidth: "500px", mx: 2 }}>
          <Typography variant="h3" sx={{ mb: 2 }}>🎉</Typography>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#1a237e" }}>
            Quiz Completed!
          </Typography>
          <Typography variant="h5" sx={{ my: 3, color: "#3f51b5" }}>
            Your Score: {score} / {total}
          </Typography>
          <Button 
            variant="contained" 
            onClick={handleBackToQuiz}
            sx={{ 
              background: "#FFA726", 
              px: 4, 
              py: 1.5,
              '&:hover': { background: "#f57c00" }
            }}
          >
            Back to Quiz Selection
          </Button>
        </Paper>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: "100vh", background: "linear-gradient(135deg, #1a237e, #3f51b5)", p: { xs: 2, md: 4 } }}>
      <Box sx={{ maxWidth: "800px", margin: "0 auto" }}>
        <Typography variant="h4" sx={{ color: "white", textAlign: "center", mb: 4, fontWeight: "bold" }}>
          Day 1 Quiz 📖
        </Typography>
        
        <Paper elevation={3} sx={{ borderRadius: "20px", p: { xs: 3, md: 4 } }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
            <Typography variant="h6" sx={{ color: "#1a237e", fontWeight: "bold" }}>
              Question {currentQuestion + 1} of {questions.length}
            </Typography>
            <Box sx={{ 
              width: 50, 
              height: 50, 
              borderRadius: "50%", 
              background: "#FFA726",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: "18px"
            }}>
              {currentQuestion + 1}
            </Box>
          </Box>
          
          <Typography variant="h6" sx={{ mb: 4, lineHeight: 1.5, minHeight: "80px" }}>
            {questions[currentQuestion]?.text}
          </Typography>
          
          <Stack spacing={2}>
            {questions[currentQuestion]?.options.map((option, idx) => (
              <Button
                key={idx}
                variant={answers[currentQuestion] === option ? "contained" : "outlined"}
                onClick={() => handleAnswer(option)}
                sx={{
                  justifyContent: "flex-start",
                  textTransform: "none",
                  p: 2,
                  fontSize: "16px",
                  background: answers[currentQuestion] === option ? "#FFA726" : "white",
                  color: answers[currentQuestion] === option ? "white" : "#333",
                  borderColor: "#FFA726",
                  '&:hover': {
                    background: "#FFA726",
                    color: "white",
                    borderColor: "#FFA726"
                  }
                }}
              >
                {option}
              </Button>
            ))}
          </Stack>
          
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={answers[currentQuestion] === undefined}
            sx={{ 
              mt: 4, 
              background: "#1a237e",
              px: 4,
              py: 1.5,
              '&:hover': { background: "#283593" },
              '&.Mui-disabled': { background: "#ccc" }
            }}
          >
            {currentQuestion === questions.length - 1 ? "Submit Quiz 📝" : "Next Question ➡"}
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}