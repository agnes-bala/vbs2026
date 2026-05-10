"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Paper,
  Stack,
  IconButton,
  Card,
  CardContent,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  Snackbar,
  Tabs,
  Tab,
  Chip,
  CircularProgress,
  Fade,
  Grow,
  Zoom
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PreviewIcon from "@mui/icons-material/Preview";
import QuizIcon from "@mui/icons-material/Quiz";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

// Default emojis list
const emojis = ["📖", "✝️", "⭐", "🌟", "🌈", "🕊️", "🦁", "🐟", "🎵", "🙏", "❤️", "🔆", "📜", "🏆", "🎉", "🎈", "🕯️", "👼", "🌿", "🍇"];

export default function QuizManager() {
  const router = useRouter();
  const [selectedDay, setSelectedDay] = useState(1);
  const [questions, setQuestions] = useState({});
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  const [previewChildId] = useState("preview-child-id");
  const [loading, setLoading] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    text: "",
    emoji: "📖",
    correct: "",
    bibleVerse: "",
    options: ["", "", "", ""]
  });

  // Load questions from localStorage on mount
  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = () => {
    setLoading(true);
    setTimeout(() => {
      const saved = localStorage.getItem("all_quiz_questions");
      if (saved) {
        setQuestions(JSON.parse(saved));
      } else {
        const emptyQuestions = {
          day1: [],
          day2: [],
          day3: [],
          day4: [],
          day5: []
        };
        setQuestions(emptyQuestions);
        localStorage.setItem("all_quiz_questions", JSON.stringify(emptyQuestions));
      }
      setLoading(false);
    }, 500);
  };

  const saveQuestions = (updatedQuestions) => {
    localStorage.setItem("all_quiz_questions", JSON.stringify(updatedQuestions));
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    setEditingQuestion(null);
    setFormData({
      text: "",
      emoji: "📖",
      correct: "",
      bibleVerse: "",
      options: ["", "", "", ""]
    });
    setDialogOpen(true);
  };

  const handleEditQuestion = (index) => {
    const dayKey = `day${selectedDay}`;
    const question = questions[dayKey][index];
    setEditingQuestion(index);
    setFormData({
      text: question.text,
      emoji: question.emoji || "📖",
      correct: question.correct,
      bibleVerse: question.bibleVerse || "",
      options: [...question.options]
    });
    setDialogOpen(true);
  };

  const handleDeleteQuestion = (index) => {
    const dayKey = `day${selectedDay}`;
    const updatedQuestions = { ...questions };
    updatedQuestions[dayKey] = updatedQuestions[dayKey].filter((_, i) => i !== index);
    saveQuestions(updatedQuestions);
    setSnackbar({
      open: true,
      message: "Question deleted successfully!",
      severity: "success"
    });
  };

  const handleSaveQuestion = () => {
    if (!formData.text.trim()) {
      setSnackbar({ open: true, message: "Please enter question text", severity: "error" });
      return;
    }
    if (!formData.correct.trim()) {
      setSnackbar({ open: true, message: "Please select correct answer", severity: "error" });
      return;
    }
    if (formData.options.some(opt => !opt.trim())) {
      setSnackbar({ open: true, message: "Please fill all options", severity: "error" });
      return;
    }
    if (!formData.options.includes(formData.correct)) {
      setSnackbar({ open: true, message: "Correct answer must match one of the options", severity: "error" });
      return;
    }

    const dayKey = `day${selectedDay}`;
    const updatedQuestions = { ...questions };
    const newQuestion = {
      text: formData.text,
      emoji: formData.emoji,
      correct: formData.correct,
      bibleVerse: formData.bibleVerse || "God loves you!",
      options: [...formData.options]
    };

    if (editingQuestion !== null) {
      updatedQuestions[dayKey][editingQuestion] = newQuestion;
      setSnackbar({ open: true, message: "Question updated successfully!", severity: "success" });
    } else {
      updatedQuestions[dayKey].push(newQuestion);
      setSnackbar({ open: true, message: "Question added successfully!", severity: "success" });
    }

    saveQuestions(updatedQuestions);
    setDialogOpen(false);
  };

  const handleClearAllQuestions = () => {
    if (window.confirm(`⚠️ Are you sure you want to delete ALL questions for Day ${selectedDay}? This cannot be undone!`)) {
      const dayKey = `day${selectedDay}`;
      const updatedQuestions = { ...questions };
      updatedQuestions[dayKey] = [];
      saveQuestions(updatedQuestions);
      setSnackbar({
        open: true,
        message: `All questions for Day ${selectedDay} deleted!`,
        severity: "warning"
      });
    }
  };

  const handlePreviewQuiz = () => {
    localStorage.setItem("current_child_name", "Test Child");
    localStorage.setItem("current_child_display_name", "TEST CHILD");
    localStorage.setItem("current_child_id", previewChildId);
    localStorage.setItem("childId", previewChildId);
    router.push(`/dashboard/playgame/${previewChildId}/day${selectedDay}`);
  };

  const handleBack = () => {
    router.push("/");
  };

  const currentQuestions = questions[`day${selectedDay}`] || [];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
        py: 4,
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Animated Background Elements */}
      <Box sx={{ position: "absolute", top: "10%", left: "5%", fontSize: 50, opacity: 0.1, animation: "float 4s ease-in-out infinite" }}>
        ✨
      </Box>
      <Box sx={{ position: "absolute", bottom: "15%", right: "8%", fontSize: 70, opacity: 0.1, animation: "float 5s ease-in-out infinite 1s" }}>
        🌟
      </Box>
      <Box sx={{ position: "absolute", top: "30%", right: "15%", fontSize: 40, opacity: 0.1, animation: "float 3.5s ease-in-out infinite 0.5s" }}>
        🎈
      </Box>
      <Box sx={{ position: "absolute", bottom: "30%", left: "10%", fontSize: 55, opacity: 0.1, animation: "float 4.5s ease-in-out infinite 1.5s" }}>
        🎪
      </Box>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>

      <Box sx={{ maxWidth: 1200, mx: "auto", px: 2 }}>
        {/* Header */}
        <Grow in timeout={500}>
          <Paper
            sx={{
              p: 4,
              mb: 4,
              borderRadius: 4,
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              border: "1px solid rgba(255,255,255,0.3)"
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <QuizIcon sx={{ fontSize: 50, color: "#667eea" }} />
                </motion.div>
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    }}
                  >
                    Quiz Manager
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Create, edit, and manage quiz questions for all days
                  </Typography>
                </Box>
              </Box>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outlined"
                  startIcon={<ArrowBackIcon />}
                  onClick={handleBack}
                  sx={{
                    borderRadius: 3,
                    px: 3,
                    py: 1,
                    borderColor: "#667eea",
                    color: "#667eea",
                    "&:hover": {
                      borderColor: "#764ba2",
                      background: "linear-gradient(135deg, #667eea10, #764ba210)"
                    }
                  }}
                >
                  Back
                </Button>
              </motion.div>
            </Box>
          </Paper>
        </Grow>

        {/* Day Selection Tabs */}
        <Zoom in timeout={600}>
          <Paper
            sx={{
              mb: 3,
              borderRadius: 4,
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(10px)",
              overflow: "hidden"
            }}
          >
            <Tabs
              value={selectedDay}
              onChange={(e, newValue) => setSelectedDay(newValue)}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                "& .MuiTab-root": {
                  fontSize: "1rem",
                  fontWeight: 600,
                  py: 2,
                  transition: "all 0.3s",
                  "&:hover": {
                    background: "linear-gradient(135deg, #667eea10, #764ba210)"
                  }
                },
                "& .Mui-selected": {
                  color: "#764ba2",
                  background: "linear-gradient(135deg, #667eea15, #764ba215)"
                },
                "& .MuiTabs-indicator": {
                  background: "linear-gradient(90deg, #667eea, #764ba2)",
                  height: 3
                }
              }}
            >
              {[1, 2, 3, 4, 5].map(day => (
                <Tab
                  key={day}
                  label={`🌟 Day ${day}`}
                  value={day}
                />
              ))}
            </Tabs>
          </Paper>
        </Zoom>

        {/* Action Buttons */}
        <Fade in timeout={700}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3, flexWrap: "wrap", gap: 2 }}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={handleAddQuestion}
                  sx={{
                    background: "linear-gradient(135deg, #4CAF50, #45a049)",
                    borderRadius: 3,
                    px: 4,
                    py: 1.2,
                    fontSize: "1rem",
                    fontWeight: 600,
                    boxShadow: "0 4px 15px rgba(76,175,80,0.3)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #45a049, #3d8b40)",
                      transform: "translateY(-2px)"
                    }
                  }}
                >
                  Add Question
                </Button>
              </motion.div>
              
              {currentQuestions.length > 0 && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={handleClearAllQuestions}
                    sx={{ borderRadius: 3, px: 3, fontWeight: 600 }}
                  >
                    Clear All
                  </Button>
                </motion.div>
              )}
            </Box>

            {currentQuestions.length > 0 && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ pulse: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Button
                  variant="contained"
                  startIcon={<PreviewIcon />}
                  onClick={handlePreviewQuiz}
                  sx={{
                    background: "linear-gradient(135deg, #ff9800, #f57c00)",
                    borderRadius: 3,
                    px: 4,
                    py: 1.2,
                    fontSize: "1rem",
                    fontWeight: 600,
                    boxShadow: "0 4px 15px rgba(255,152,0,0.3)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #f57c00, #e65100)",
                      transform: "translateY(-2px)"
                    }
                  }}
                >
                  Preview Quiz
                </Button>
              </motion.div>
            )}
          </Box>
        </Fade>

        {/* Questions Count */}
        <Typography variant="body1" sx={{ mb: 2, color: "rgba(255,255,255,0.9)", display: "flex", alignItems: "center", gap: 1 }}>
          <AutoAwesomeIcon sx={{ fontSize: 20 }} />
          Total Questions: <strong>{currentQuestions.length}</strong>
        </Typography>

        {/* Loading State */}
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", py: 10 }}>
            <CircularProgress sx={{ color: "white" }} />
            <Typography sx={{ ml: 2, color: "white" }}>Loading questions...</Typography>
          </Box>
        ) : currentQuestions.length === 0 ? (
          <Grow in timeout={800}>
            <Paper
              sx={{
                p: 6,
                textAlign: "center",
                borderRadius: 4,
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(10px)"
              }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Typography variant="h1" sx={{ fontSize: 80 }}>📭</Typography>
              </motion.div>
              <Typography variant="h5" color="text.secondary" sx={{ mt: 2, fontWeight: 600 }}>
                No questions added for Day {selectedDay}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Click "Add Question" to start creating quiz questions
              </Typography>
            </Paper>
          </Grow>
        ) : (
          <Grid container spacing={3}>
            {currentQuestions.map((q, index) => (
              <Grid item xs={12} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      borderRadius: 4,
                      background: "rgba(255,255,255,0.95)",
                      backdropFilter: "blur(10px)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                      }
                    }}
                  >
                    <CardContent>
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <Box sx={{ flex: 1 }}>
                          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5, flexWrap: "wrap" }}>
                            <Typography variant="h4">{q.emoji || "📖"}</Typography>
                            <Chip
                              label={`Q${index + 1}`}
                              size="medium"
                              sx={{
                                background: "linear-gradient(135deg, #667eea, #764ba2)",
                                color: "white",
                                fontWeight: "bold"
                              }}
                            />
                            <Chip
                              icon={<CheckCircleIcon />}
                              label={`Answer: ${q.correct}`}
                              size="small"
                              color="success"
                              variant="outlined"
                            />
                          </Box>
                          <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1.5, fontSize: "1.1rem" }}>
                            {q.text}
                          </Typography>
                          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 1.5 }}>
                            {q.options.map((opt, optIdx) => (
                              <Chip
                                key={optIdx}
                                label={`${String.fromCharCode(65 + optIdx)}. ${opt}`}
                                size="medium"
                                sx={{
                                  background: opt === q.correct ? "linear-gradient(135deg, #4CAF50, #45a049)" : "rgba(0,0,0,0.05)",
                                  color: opt === q.correct ? "white" : "#333",
                                  fontWeight: opt === q.correct ? "bold" : "normal"
                                }}
                              />
                            ))}
                          </Box>
                          {q.bibleVerse && (
                            <Typography
                              variant="caption"
                              sx={{
                                color: "#764ba2",
                                display: "flex",
                                alignItems: "center",
                                gap: 0.5,
                                fontStyle: "italic"
                              }}
                            >
                              📖 {q.bibleVerse}
                            </Typography>
                          )}
                        </Box>
                        <Box>
                          <IconButton
                            onClick={() => handleEditQuestion(index)}
                            sx={{
                              color: "#ff9800",
                              "&:hover": { background: "rgba(255,152,0,0.1)" }
                            }}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            onClick={() => handleDeleteQuestion(index)}
                            sx={{
                              color: "#f44336",
                              "&:hover": { background: "rgba(244,67,54,0.1)" }
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Add/Edit Dialog */}
        <Dialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 4,
              background: "linear-gradient(135deg, #ffffff, #f5f5f5)"
            }
          }}
        >
          <DialogTitle sx={{ background: "linear-gradient(135deg, #667eea, #764ba2)", color: "white", borderRadius: "16px 16px 0 0" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <EmojiEmotionsIcon />
              <Typography variant="h6">
                {editingQuestion !== null ? `Edit Question ${editingQuestion + 1}` : `Add New Question for Day ${selectedDay}`}
              </Typography>
            </Box>
          </DialogTitle>
          <DialogContent sx={{ pt: 3 }}>
            <Stack spacing={2.5}>
              {/* Emoji Selection */}
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600, color: "#667eea" }}>Choose Emoji:</Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {emojis.map(emoji => (
                    <Button
                      key={emoji}
                      variant={formData.emoji === emoji ? "contained" : "outlined"}
                      onClick={() => setFormData({ ...formData, emoji })}
                      sx={{
                        minWidth: 50,
                        fontSize: 24,
                        background: formData.emoji === emoji ? "linear-gradient(135deg, #667eea, #764ba2)" : "transparent",
                        borderRadius: 2
                      }}
                    >
                      {emoji}
                    </Button>
                  ))}
                </Box>
              </Box>

              {/* Question Text */}
              <TextField
                fullWidth
                label="Question"
                multiline
                rows={2}
                value={formData.text}
                onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2
                  }
                }}
              />

              {/* Options */}
              <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#667eea" }}>Options (A, B, C, D):</Typography>
              {["A", "B", "C", "D"].map((letter, idx) => (
                <TextField
                  key={idx}
                  fullWidth
                  label={`Option ${letter}`}
                  value={formData.options[idx]}
                  onChange={(e) => {
                    const newOptions = [...formData.options];
                    newOptions[idx] = e.target.value;
                    setFormData({ ...formData, options: newOptions });
                  }}
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2
                    }
                  }}
                />
              ))}

              {/* Correct Answer */}
              <TextField
                fullWidth
                select
                label="Correct Answer"
                value={formData.correct}
                onChange={(e) => setFormData({ ...formData, correct: e.target.value })}
                SelectProps={{ native: true }}
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2
                  }
                }}
              >
                <option value="">Select correct answer</option>
                {formData.options.map((opt, idx) => (
                  opt && <option key={idx} value={opt}>Option {String.fromCharCode(65 + idx)}: {opt}</option>
                ))}
              </TextField>

              {/* Bible Verse */}
              <TextField
                fullWidth
                label="Bible Verse (Optional)"
                multiline
                rows={2}
                placeholder="e.g., John 3:16 - For God so loved the world..."
                value={formData.bibleVerse}
                onChange={(e) => setFormData({ ...formData, bibleVerse: e.target.value })}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2
                  }
                }}
              />
            </Stack>
          </DialogContent>
          <DialogActions sx={{ p: 3 }}>
            <Button onClick={() => setDialogOpen(false)} sx={{ borderRadius: 2, px: 3 }}>
              Cancel
            </Button>
            <Button
              onClick={handleSaveQuestion}
              variant="contained"
              startIcon={<SaveIcon />}
              sx={{
                background: "linear-gradient(135deg, #4CAF50, #45a049)",
                borderRadius: 2,
                px: 4
              }}
            >
              Save Question
            </Button>
          </DialogActions>
        </Dialog>

        {/* Snackbar */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={3000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            severity={snackbar.severity}
            sx={{
              width: "100%",
              borderRadius: 2,
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
            }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}