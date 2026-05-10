// "use client";

// import { useState } from "react";
// import { 
//   Box, 
//   TextField, 
//   Button, 
//   Paper, 
//   Typography, 
//   Stack, 
//   Alert,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl,
//   Grid,
//   CircularProgress
// } from "@mui/material";

// // Your Google Apps Script URL
// const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzuTKB83dqofAZGVyfkVZD7ChNLjc8vPvJH_mmYAB2hlmBR-2WCp64o4wUyepL1-c2Hag/exec";

// export default function AdminPage() {
//   const [form, setForm] = useState({
//     day: "1",
//     question: "",
//     option1: "",
//     option2: "",
//     option3: "",
//     option4: "",
//     correct: "",
//     bibleVerse: ""
//   });
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [messageType, setMessageType] = useState("success");

//   const addToSheet = async () => {
//     if (!form.question || !form.option1 || !form.option2 || !form.option3 || !form.option4 || !form.correct) {
//       setMessageType("error");
//       setMessage("❌ Please fill all fields!");
//       setTimeout(() => setMessage(""), 3000);
//       return;
//     }

//     setLoading(true);
    
//     try {
//       const response = await fetch(SCRIPT_URL, {
//         method: "POST",
//         mode: "no-cors",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           day: form.day,
//           question: form.question,
//           option1: form.option1,
//           option2: form.option2,
//           option3: form.option3,
//           option4: form.option4,
//           correct: form.correct,
//           bibleVerse: form.bibleVerse || ""
//         })
//       });
      
//       setMessageType("success");
//       setMessage("✅ Question added successfully! All users will see it in 1-2 minutes.");
      
//       // Clear form
//       setForm({
//         day: "1",
//         question: "",
//         option1: "",
//         option2: "",
//         option3: "",
//         option4: "",
//         correct: "",
//         bibleVerse: ""
//       });
      
//     } catch (error) {
//       console.error("Error:", error);
//       setMessageType("error");
//       setMessage("❌ Failed to add. Please try again.");
//     }
    
//     setLoading(false);
//     setTimeout(() => setMessage(""), 5000);
//   };

//   const days = [1, 2, 3, 4, 5];

//   return (
//     <Box sx={{ minHeight: "100vh", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", py: 4, px: 2 }}>
//       <Paper sx={{ maxWidth: 700, mx: "auto", p: { xs: 3, sm: 4 }, borderRadius: 3 }}>
//         <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center", mb: 3 }}>
//           📝 Add Question to Google Sheet
//         </Typography>
        
//         {message && (
//           <Alert severity={messageType === "success" ? "success" : "error"} sx={{ mb: 3 }}>
//             {message}
//           </Alert>
//         )}
        
//         <Stack spacing={2.5}>
//           <FormControl fullWidth>
//             <InputLabel>Select Day</InputLabel>
//             <Select value={form.day} onChange={(e) => setForm({...form, day: e.target.value})} label="Select Day">
//               {days.map((day) => (<MenuItem key={day} value={day}>Day {day}</MenuItem>))}
//             </Select>
//           </FormControl>

//           <TextField 
//             label="Question" 
//             fullWidth 
//             multiline 
//             rows={2} 
//             value={form.question} 
//             onChange={(e) => setForm({...form, question: e.target.value})} 
//           />

//           <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Answer Options:</Typography>
//           <Grid container spacing={2}>
//             {[1, 2, 3, 4].map((num) => (
//               <Grid item xs={12} sm={6} key={num}>
//                 <TextField 
//                   label={`Option ${num}`} 
//                   fullWidth 
//                   value={form[`option${num}`]} 
//                   onChange={(e) => setForm({...form, [`option${num}`]: e.target.value})} 
//                 />
//               </Grid>
//             ))}
//           </Grid>

//           <FormControl fullWidth>
//             <InputLabel>Correct Answer</InputLabel>
//             <Select 
//               value={form.correct} 
//               onChange={(e) => setForm({...form, correct: e.target.value})} 
//               label="Correct Answer"
//             >
//               <MenuItem value="">Select correct answer</MenuItem>
//               {[form.option1, form.option2, form.option3, form.option4].map((opt, idx) => (
//                 opt && <MenuItem key={idx} value={opt}>Option {idx + 1}: {opt}</MenuItem>
//               ))}
//             </Select>
//           </FormControl>

//           <TextField 
//             label="Bible Verse (Optional)" 
//             fullWidth 
//             multiline 
//             rows={2} 
//             value={form.bibleVerse} 
//             onChange={(e) => setForm({...form, bibleVerse: e.target.value})} 
//             placeholder="e.g., John 3:16" 
//           />

//           <Button 
//             variant="contained" 
//             onClick={addToSheet} 
//             disabled={loading} 
//             sx={{ py: 1.5, background: "#4CAF50", fontWeight: "bold" }}
//           >
//             {loading ? <CircularProgress size={24} /> : "📝 ADD TO GOOGLE SHEET"}
//           </Button>
          
//           <Typography variant="caption" sx={{ textAlign: "center", color: "text.secondary" }}>
//             Question will be added to Google Sheet. All users will see it within 1-2 minutes.
//           </Typography>
//         </Stack>
//       </Paper>
//     </Box>
//   );
// }







// src/app/admin/page.js
"use client";

import { useState, useEffect } from "react";
import { 
  Box, 
  TextField, 
  Button, 
  Paper, 
  Typography, 
  Stack, 
  Alert,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Grid,
  CircularProgress,
  Tab,
  Tabs,
  Card,
  CardContent,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  Divider
} from "@mui/material";
import { Delete, Edit, Add, YouTube, Security, ArrowBack } from "@mui/icons-material";

// Tab Panel component
function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

export default function AdminPage() {
  const [tabValue, setTabValue] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");
  
  // Live URL state
  const [liveUrl, setLiveUrl] = useState("");
  const [urlSuccess, setUrlSuccess] = useState("");
  
  // Quiz state
  const [quizForm, setQuizForm] = useState({
    day: "1",
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correct: "",
    bibleVerse: "",
    emoji: "📖"
  });
  
  const [questions, setQuestions] = useState({});
  const [selectedDay, setSelectedDay] = useState("1");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [questionToDelete, setQuestionToDelete] = useState(null);

  // Load live URL
  useEffect(() => {
    fetchLiveUrl();
    loadQuestions();
  }, []);

  const fetchLiveUrl = async () => {
    try {
      const response = await fetch('/api/live-url');
      const data = await response.json();
      if (data.url) setLiveUrl(data.url);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const loadQuestions = async (day = "1") => {
    try {
      const response = await fetch(`/api/quiz?day=${day}`);
      const data = await response.json();
      if (data.success) {
        setQuestions(prev => ({ ...prev, [day]: data.data.questions || [] }));
      }
    } catch (error) {
      console.error('Error loading questions:', error);
    }
  };

  const handleSaveLiveUrl = async () => {
    if (!liveUrl.trim()) {
      setMessageType("error");
      setMessage("Please enter a YouTube URL");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/live-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: liveUrl.trim() })
      });
      
      const data = await response.json();
      
      if (data.success) {
        localStorage.setItem('liveStreamUrl', liveUrl.trim());
        setMessageType("success");
        setMessage("✅ Live URL updated globally! All users will see it.");
        setUrlSuccess("URL updated!");
        setTimeout(() => setUrlSuccess(""), 3000);
      } else {
        setMessageType("error");
        setMessage("Failed to save URL");
      }
    } catch (error) {
      setMessageType("error");
      setMessage("Error saving URL");
    }
    setLoading(false);
    setTimeout(() => setMessage(""), 3000);
  };

  const addQuestion = async () => {
    if (!quizForm.question || !quizForm.option1 || !quizForm.option2 || !quizForm.option3 || !quizForm.option4 || !quizForm.correct) {
      setMessageType("error");
      setMessage("❌ Please fill all fields!");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'add',
          day: quizForm.day,
          question: {
            text: quizForm.question,
            option1: quizForm.option1,
            option2: quizForm.option2,
            option3: quizForm.option3,
            option4: quizForm.option4,
            correct: quizForm.correct,
            bibleVerse: quizForm.bibleVerse,
            emoji: quizForm.emoji
          }
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        setMessageType("success");
        setMessage(`✅ Question added to Day ${quizForm.day}! All users will see it.`);
        
        // Clear form
        setQuizForm({
          day: quizForm.day,
          question: "",
          option1: "",
          option2: "",
          option3: "",
          option4: "",
          correct: "",
          bibleVerse: "",
          emoji: "📖"
        });
        
        // Reload questions for current day
        await loadQuestions(quizForm.day);
      } else {
        setMessageType("error");
        setMessage("❌ Failed to add question");
      }
    } catch (error) {
      setMessageType("error");
      setMessage("❌ Error adding question");
    }
    setLoading(false);
    setTimeout(() => setMessage(""), 3000);
  };

  const deleteQuestion = async () => {
    if (!questionToDelete) return;
    
    setLoading(true);
    try {
      const response = await fetch('/api/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'delete',
          day: selectedDay,
          question: { id: questionToDelete }
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        setMessageType("success");
        setMessage("✅ Question deleted successfully!");
        await loadQuestions(selectedDay);
      } else {
        setMessageType("error");
        setMessage("❌ Failed to delete question");
      }
    } catch (error) {
      setMessageType("error");
      setMessage("❌ Error deleting question");
    }
    setLoading(false);
    setDeleteDialogOpen(false);
    setQuestionToDelete(null);
    setTimeout(() => setMessage(""), 3000);
  };

  const handleDayChange = async (day) => {
    setSelectedDay(day);
    await loadQuestions(day);
  };

  const days = [1, 2, 3, 4, 5];

  return (
    <Box sx={{ minHeight: "100vh", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", py: 4, px: 2 }}>
      <Paper sx={{ maxWidth: 900, mx: "auto", p: { xs: 2, sm: 3 }, borderRadius: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", mb: 3, color: "#1a237e" }}>
          Admin Dashboard
        </Typography>
        
        {message && (
          <Alert severity={messageType === "success" ? "success" : "error"} sx={{ mb: 2 }} onClose={() => setMessage("")}>
            {message}
          </Alert>
        )}
        
        <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)} sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tab label="🎥 Live Stream" />
          <Tab label="📝 Quiz Management" />
        </Tabs>
        
        {/* Live Stream Tab */}
        <TabPanel value={tabValue} index={0}>
          <Stack spacing={2}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>YouTube Live Stream URL</Typography>
            <TextField
              fullWidth
              label="YouTube Live URL or Video ID"
              value={liveUrl}
              onChange={(e) => setLiveUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=VIDEO_ID"
              helperText="Paste YouTube live URL or video ID"
            />
            <Button
              variant="contained"
              startIcon={<YouTube />}
              onClick={handleSaveLiveUrl}
              disabled={loading}
              sx={{ background: "#ff0000", "&:hover": { background: "#cc0000" } }}
            >
              {loading ? <CircularProgress size={24} /> : "Update Live URL (Global)"}
            </Button>
            {urlSuccess && <Alert severity="success">{urlSuccess}</Alert>}
            <Typography variant="caption" color="text.secondary" sx={{ textAlign: "center" }}>
              ✓ This URL will be visible to ALL users across all browsers
            </Typography>
          </Stack>
        </TabPanel>
        
        {/* Quiz Management Tab */}
        <TabPanel value={tabValue} index={1}>
          <Stack spacing={3}>
            {/* Day Selector */}
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {days.map(day => (
                <Button
                  key={day}
                  variant={selectedDay === day.toString() ? "contained" : "outlined"}
                  onClick={() => handleDayChange(day.toString())}
                  sx={{ borderRadius: 2 }}
                >
                  Day {day}
                </Button>
              ))}
            </Box>
            
            {/* Add Question Form */}
            <Paper sx={{ p: 2, bgcolor: "#f5f5f5" }}>
              <Typography variant="h6" sx={{ mb: 2 }}>➕ Add New Question - Day {quizForm.day}</Typography>
              
              <Stack spacing={2}>
                <FormControl fullWidth>
                  <InputLabel>Select Day</InputLabel>
                  <Select value={quizForm.day} onChange={(e) => setQuizForm({...quizForm, day: e.target.value})} label="Select Day">
                    {days.map(day => <MenuItem key={day} value={day}>Day {day}</MenuItem>)}
                  </Select>
                </FormControl>
                
                <TextField
                  label="Question"
                  fullWidth
                  multiline
                  rows={2}
                  value={quizForm.question}
                  onChange={(e) => setQuizForm({...quizForm, question: e.target.value})}
                />
                
                <TextField
                  label="Emoji (Optional)"
                  fullWidth
                  value={quizForm.emoji}
                  onChange={(e) => setQuizForm({...quizForm, emoji: e.target.value})}
                  placeholder="📖"
                />
                
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Answer Options:</Typography>
                <Grid container spacing={2}>
                  {[1, 2, 3, 4].map((num) => (
                    <Grid item xs={12} sm={6} key={num}>
                      <TextField 
                        label={`Option ${num}`} 
                        fullWidth 
                        value={quizForm[`option${num}`]} 
                        onChange={(e) => setQuizForm({...quizForm, [`option${num}`]: e.target.value})} 
                      />
                    </Grid>
                  ))}
                </Grid>
                
                <FormControl fullWidth>
                  <InputLabel>Correct Answer</InputLabel>
                  <Select 
                    value={quizForm.correct} 
                    onChange={(e) => setQuizForm({...quizForm, correct: e.target.value})} 
                    label="Correct Answer"
                  >
                    <MenuItem value="">Select correct answer</MenuItem>
                    {[quizForm.option1, quizForm.option2, quizForm.option3, quizForm.option4].map((opt, idx) => (
                      opt && <MenuItem key={idx} value={opt}>Option {idx + 1}: {opt}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                
                <TextField
                  label="Bible Verse (Optional)"
                  fullWidth
                  multiline
                  rows={1}
                  value={quizForm.bibleVerse}
                  onChange={(e) => setQuizForm({...quizForm, bibleVerse: e.target.value})}
                  placeholder="e.g., John 3:16"
                />
                
                <Button 
                  variant="contained" 
                  onClick={addQuestion} 
                  disabled={loading}
                  startIcon={<Add />}
                  sx={{ background: "#4CAF50" }}
                >
                  {loading ? <CircularProgress size={24} /> : "Add Question"}
                </Button>
              </Stack>
            </Paper>
            
            {/* Questions List */}
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>📋 Questions - Day {selectedDay}</Typography>
              {questions[selectedDay] && questions[selectedDay].length > 0 ? (
                <List>
                  {questions[selectedDay].map((q, idx) => (
                    <Card key={q.id} sx={{ mb: 1 }}>
                      <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                              {idx + 1}. {q.emoji} {q.text}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Options: {q.options.join(" | ")}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#4CAF50", fontWeight: "bold" }}>
                              ✓ Correct: {q.correct}
                            </Typography>
                            {q.bibleVerse && (
                              <Typography variant="caption" sx={{ color: "#FF6B6B" }}>
                                📖 {q.bibleVerse}
                              </Typography>
                            )}
                          </Box>
                          <IconButton 
                            color="error" 
                            onClick={() => {
                              setQuestionToDelete(q.id);
                              setDeleteDialogOpen(true);
                            }}
                          >
                            <Delete />
                          </IconButton>
                        </Box>
                      </CardContent>
                    </Card>
                  ))}
                </List>
              ) : (
                <Typography sx={{ textAlign: "center", py: 4, color: "text.secondary" }}>
                  No questions yet for Day {selectedDay}. Add your first question above!
                </Typography>
              )}
            </Paper>
          </Stack>
        </TabPanel>
      </Paper>
      
      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Delete Question?</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this question? This action cannot be undone.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={deleteQuestion} color="error" variant="contained">Delete</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}