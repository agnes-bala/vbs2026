"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Box, Typography, Button } from "@mui/material";

export default function Day1Quiz() {
  const router = useRouter();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Day 1 specific questions
  const day1Questions = [
    {
      id: 1,
      text: "Sample Question 1 for Day 1?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      correct: "Option A"
    },
    {
      id: 2,
      text: "Sample Question 2 for Day 1?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      correct: "Option B"
    },
    // Add more questions for Day 1
  ];

  useEffect(() => {
    setQuestions(day1Questions);
  }, []);

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
      // Calculate score and submit
      let score = 0;
      questions.forEach((q, index) => {
        if (answers[index] === q.correct) score++;
      });
      localStorage.setItem("day1_score", score);
      localStorage.setItem("day1_answers", JSON.stringify(answers));
      setSubmitted(true);
    }
  };

  const handleSubmit = () => {
    router.push("/quiz"); // Go back to quiz selection
  };

  if (submitted) {
    const score = localStorage.getItem("day1_score");
    return (
      <Box sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(135deg, #1a237e, #3f51b5)" }}>
        <Box sx={{ textAlign: "center", color: "white", p: 4 }}>
          <Typography variant="h4" gutterBottom>🎉 Quiz Completed! 🎉</Typography>
          <Typography variant="h5" gutterBottom>Your Score: {score}/{questions.length}</Typography>
          <Button variant="contained" onClick={handleSubmit} sx={{ mt: 3, background: "#FFA726" }}>
            Back to Quiz Selection
          </Button>
        </Box>
      </Box>
    );
  }

  if (questions.length === 0) {
    return (
      <Box sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: "100vh", background: "linear-gradient(135deg, #1a237e, #3f51b5)", p: 4 }}>
      <Box sx={{ maxWidth: "800px", margin: "0 auto" }}>
        <Typography variant="h4" sx={{ color: "white", textAlign: "center", mb: 4 }}>
          Day 1 Quiz
        </Typography>
        
        <Box sx={{ background: "white", borderRadius: "20px", p: 4 }}>
          <Typography variant="h6" gutterBottom>
            Question {currentQuestion + 1} of {questions.length}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, fontSize: "18px" }}>
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
                  background: answers[currentQuestion] === option ? "#FFA726" : "white",
                  color: answers[currentQuestion] === option ? "white" : "#333",
                  borderColor: "#FFA726",
                  '&:hover': {
                    background: "#FFA726",
                    color: "white"
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
            sx={{ mt: 4, background: "#1a237e", '&:hover': { background: "#283593" } }}
          >
            {currentQuestion === questions.length - 1 ? "Submit Quiz" : "Next Question"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}