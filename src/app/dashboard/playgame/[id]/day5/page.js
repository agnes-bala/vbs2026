// src/app/dashboard/playgame/[id]/day1/page.js
"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Box, Typography, Button, Paper, LinearProgress, Menu, MenuItem, IconButton, CircularProgress } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { fetchQuestions } from '../../../../../utils/quizStorage';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import RefreshIcon from '@mui/icons-material/Refresh';

// Safe config import with fallback
let config;
try {
  config = require('../../../../../partnerconfig.json');
} catch (e) {
  console.log("Config file not found, using environment variables");
  config = { jrmClientUrl: process.env.NEXT_PUBLIC_JRM_CLIENT_URL || "" };
}

export default function KidsQuiz() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  const currentDay = 5;
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [celebrate, setCelebrate] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [timeTaken, setTimeTaken] = useState(null);
  const [childName, setChildName] = useState("");
  const [childId, setChildId] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [shareAnchorEl, setShareAnchorEl] = useState(null);
  const [globalRank, setGlobalRank] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [loadingLeaderboard, setLoadingLeaderboard] = useState(false);
  const [totalPlayers, setTotalPlayers] = useState(0);

  const getApiUrl = () => {
    if (config && config.jrmClientUrl) {
      return config.jrmClientUrl;
    }
    return process.env.NEXT_PUBLIC_JRM_CLIENT_URL || "";
  };

  // Fetch children data from API
  useEffect(() => {
    const fetchChildData = async () => {
      try {
        const pId = localStorage.getItem("partnerId");
        const token = localStorage.getItem("jwt");
        const url = getApiUrl();
        
        if (pId && token && url) {
          const response = await axios.get(`${url}jrms/v1/partners/${pId}/childreninfo`, {
            headers: { 'Authorization': `Bearer ${token}` }
          });
          
          if (response.data && response.data.children) {
            const urlChildId = decodeURIComponent(id);
            setChildId(urlChildId);
            
            const foundChild = response.data.children.find(child => child.childId === urlChildId);
            if (foundChild && foundChild.fullName) {
              const originalName = foundChild.fullName;
              const upperCaseName = originalName.toUpperCase();
              setChildName(originalName);
              setDisplayName(upperCaseName);
              localStorage.setItem('current_child_name', originalName);
              localStorage.setItem('current_child_display_name', upperCaseName);
              localStorage.setItem('current_child_id', urlChildId);
            } else {
              const savedName = localStorage.getItem('current_child_name');
              if (savedName) {
                setChildName(savedName);
                setDisplayName(savedName.toUpperCase());
              } else {
                setChildName("Child");
                setDisplayName("CHILD");
              }
            }
          }
        } else {
          const savedName = localStorage.getItem('current_child_name');
          if (savedName) {
            setChildName(savedName);
            setDisplayName(savedName.toUpperCase());
          } else {
            setChildName(decodeURIComponent(id));
            setDisplayName(decodeURIComponent(id).toUpperCase());
          }
          setChildId(decodeURIComponent(id));
        }
      } catch (error) {
        console.error("Error fetching child data:", error);
        const savedName = localStorage.getItem('current_child_name');
        if (savedName) {
          setChildName(savedName);
          setDisplayName(savedName.toUpperCase());
        } else {
          setChildName(decodeURIComponent(id));
          setDisplayName(decodeURIComponent(id).toUpperCase());
        }
        setChildId(decodeURIComponent(id));
      }
    };
    
    fetchChildData();
  }, [id]);

  // Save score to server
  const saveScoreToServer = async (finalScore, timeSpent) => {
    try {
      const pId = localStorage.getItem("partnerId");
      const tok = localStorage.getItem("jwt");
      const url = getApiUrl();
      
      if (!pId || !tok || !url) return;
      
      await axios.post(`${url}jrms/v1/quiz/save-score`, {
        partnerId: pId,
        childId: childId,
        childName: displayName || childName || "Unknown",
        day: currentDay,
        score: finalScore,
        totalMarks: totalMarks,
        timeTaken: timeSpent,
        timestamp: new Date().toISOString()
      }, {
        headers: { 'Authorization': `Bearer ${tok}` }
      });
      
      console.log("Score saved to server");
    } catch (error) {
      console.error("Error saving score:", error);
      saveScoreLocally(finalScore, timeSpent);
    }
  };
  
  const saveScoreLocally = (finalScore, timeSpent) => {
    localStorage.setItem(`child_${childId}_day${currentDay}_score`, finalScore);
    localStorage.setItem(`child_${childId}_day${currentDay}_total`, totalMarks);
    localStorage.setItem(`child_${childId}_day${currentDay}_completed`, 'true');
    localStorage.setItem(`child_${childId}_day${currentDay}_time`, timeSpent);
    localStorage.setItem(`child_${childId}_day${currentDay}_timestamp`, new Date().toISOString());
    localStorage.setItem(`child_${childId}_name`, childName || "Unknown");
    localStorage.setItem(`child_${childId}_display_name`, displayName || childName?.toUpperCase() || "UNKNOWN");
  };
  
  const fetchGlobalLeaderboard = async () => {
    try {
      setLoadingLeaderboard(true);
      const pId = localStorage.getItem("partnerId");
      const tok = localStorage.getItem("jwt");
      const url = getApiUrl();
      
      if (!pId || !tok || !url) {
        loadLocalLeaderboard();
        return;
      }
      
      const response = await axios.get(`${url}jrms/v1/quiz/leaderboard/${currentDay}`, {
        headers: { 'Authorization': `Bearer ${tok}` }
      });
      
      if (response.data && response.data.leaderboard) {
        let sortedLeaderboard = [...response.data.leaderboard];
        
        sortedLeaderboard.sort((a, b) => {
          if (a.score !== b.score) {
            return b.score - a.score;
          }
          return a.time - b.time;
        });
        
        const rankedLeaderboard = sortedLeaderboard.map((entry, index) => ({
          ...entry,
          rank: index + 1,
          name: entry.name || entry.childName || "Unknown"
        }));
        
        setLeaderboard(rankedLeaderboard);
        setTotalPlayers(rankedLeaderboard.length);
        
        const currentUserEntry = rankedLeaderboard.find(
          entry => entry.childId === childId
        );
        setGlobalRank(currentUserEntry ? currentUserEntry.rank : null);
      }
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
      loadLocalLeaderboard();
    } finally {
      setLoadingLeaderboard(false);
    }
  };
  
  const loadLocalLeaderboard = () => {
    try {
      const allEntries = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.includes(`_day${currentDay}_score`)) {
          const childIdKey = key.replace(`_day${currentDay}_score`, '');
          const score = parseInt(localStorage.getItem(key));
          const time = parseInt(localStorage.getItem(`${childIdKey}_day${currentDay}_time`));
          let name = localStorage.getItem(`${childIdKey}_display_name`) || 
                     localStorage.getItem(`${childIdKey}_name`) || 
                     "Unknown";
          
          if (!name || name === "undefined" || name === "null") {
            name = "Unknown";
          }
          
          if (!isNaN(score) && !isNaN(time)) {
            allEntries.push({
              childId: childIdKey,
              name: name,
              score: score,
              time: time,
              weightedScore: score * 1000 - time
            });
          }
        }
      }
      
      allEntries.sort((a, b) => b.weightedScore - a.weightedScore);
      
      const rankedLeaderboard = allEntries.map((entry, index) => ({
        rank: index + 1,
        childId: entry.childId,
        name: entry.name || "Unknown",
        score: entry.score,
        time: entry.time
      }));
      
      setLeaderboard(rankedLeaderboard);
      setTotalPlayers(rankedLeaderboard.length);
      
      const rank = allEntries.findIndex(entry => entry.childId === childId) + 1;
      setGlobalRank(rank > 0 ? rank : null);
    } catch (error) {
      console.error("Error loading local leaderboard:", error);
    }
  };

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        setLoading(true);
        const dayQuestions = await fetchQuestions(currentDay);
        setQuestions(dayQuestions);
        
        const pId = localStorage.getItem("partnerId");
        const tok = localStorage.getItem("jwt");
        const url = getApiUrl();
        
        if (pId && tok && url && childId) {
          try {
            const response = await axios.get(`${url}jrms/v1/quiz/child-score/${childId}/${currentDay}`, {
              headers: { 'Authorization': `Bearer ${tok}` }
            });
            
            if (response.data && response.data.completed) {
              setHasPlayed(true);
              setScore(response.data.score);
              setTimeTaken(response.data.timeTaken);
              setSubmitted(true);
              await fetchGlobalLeaderboard();
              setLoading(false);
              return;
            }
          } catch (err) {
            console.log("No server record, checking local");
          }
        }
        
        const childQuizKey = `child_${childId}_day${currentDay}_completed`;
        const completed = localStorage.getItem(childQuizKey);
        const savedScore = localStorage.getItem(`child_${childId}_day${currentDay}_score`);
        const savedTime = localStorage.getItem(`child_${childId}_day${currentDay}_time`);
        
        if (completed === 'true' && savedScore !== null) {
          setHasPlayed(true);
          setScore(parseInt(savedScore));
          setTimeTaken(parseInt(savedTime));
          setSubmitted(true);
          loadLocalLeaderboard();
        }
      } catch (error) {
        console.error("Error loading questions:", error);
      } finally {
        setLoading(false);
      }
    };
    
    if (childId) {
      loadQuestions();
    }
  }, [currentDay, childId]);

  useEffect(() => {
    if (!hasPlayed && questions.length > 0 && !submitted && !startTime && childId) {
      setStartTime(Date.now());
    }
  }, [questions, hasPlayed, submitted, startTime, childId]);

  useEffect(() => {
    const gradient = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
    
    const originalBodyBg = document.body.style.background;
    const originalHtmlBg = document.documentElement.style.background;
    const originalBodyMinHeight = document.body.style.minHeight;
    const originalHtmlMinHeight = document.documentElement.style.minHeight;
    
    document.body.style.background = gradient;
    document.documentElement.style.background = gradient;
    document.body.style.minHeight = "100vh";
    document.documentElement.style.minHeight = "100vh";
    
    return () => {
      document.body.style.background = originalBodyBg;
      document.documentElement.style.background = originalHtmlBg;
      document.body.style.minHeight = originalBodyMinHeight;
      document.documentElement.style.minHeight = originalHtmlMinHeight;
    };
  }, []);

  const totalMarks = questions.length * 20;
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const getScoreIcon = (score, total) => {
    const percentage = (score / total) * 100;
    if (percentage === 100) return "👑🏆✨";
    if (percentage >= 80) return "🥇🌟";
    if (percentage >= 60) return "🥈📖";
    if (percentage >= 40) return "🥉💪";
    return "👑🌱";
  };

  const getMotivationalQuote = (score, total) => {
    const percentage = (score / total) * 100;
    if (percentage === 100) return "PERFECT! You're a Bible Champion! Jesus is so proud of you!";
    if (percentage >= 80) return "EXCELLENT! Keep shining God's light! Next time, aim for PERFECT!";
    if (percentage >= 60) return "GOOD JOB! You're doing great! With a little more practice, you'll be a champion!";
    if (percentage >= 40) return "NICE TRY! Every quiz makes you stronger! Next game, SUCCESS is waiting for you!";
    return "KEEP GOING! Don't give up! Next game, SUCCESS is waiting for you! You can do better!";
  };

  const handleAnswer = (answer) => {
    if (!showFeedback && !hasPlayed) {
      setSelectedAnswer(answer);
    }
  };

  const handleNext = () => {
    if (selectedAnswer === null || hasPlayed) return;
    
    const isCorrect = selectedAnswer === questions[currentQuestion]?.correct;
    let newScore = score;
    if (isCorrect) {
      newScore = score + 20;
      setScore(newScore);
      setCelebrate(true);
      setTimeout(() => setCelebrate(false), 500);
    }
    
    setShowFeedback(true);
    
    setTimeout(async () => {
      setShowFeedback(false);
      setSelectedAnswer(null);
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        const finalScore = isCorrect ? newScore : score;
        const endTimeValue = Date.now();
        const timeSpent = Math.floor((endTimeValue - startTime) / 1000);
        setTimeTaken(timeSpent);
        
        saveScoreLocally(finalScore, timeSpent);
        await saveScoreToServer(finalScore, timeSpent);
        
        setScore(finalScore);
        setSubmitted(true);
        setHasPlayed(true);
        await fetchGlobalLeaderboard();
      }
    }, 1500);
  };

  const generateResultImage = async () => {
    const percentage = (score / totalMarks) * 100;
    const medal = getScoreIcon(score, totalMarks);
    const message = getMotivationalQuote(score, totalMarks);
    let bgColor = "";
    
    if (percentage === 100) bgColor = "#FFD700";
    else if (percentage >= 80) bgColor = "#C0C0C0";
    else if (percentage >= 60) bgColor = "#CD7F32";
    else bgColor = "#999";
    
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 850;
    const ctx = canvas.getContext('2d');
    
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#667eea');
    gradient.addColorStop(1, '#764ba2');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = 'white';
    ctx.shadowBlur = 15;
    ctx.shadowColor = 'rgba(0,0,0,0.2)';
    ctx.fillRect(40, 70, 520, 710);
    ctx.shadowBlur = 0;
    
    ctx.font = '60px Arial';
    ctx.fillStyle = '#333';
    ctx.fillText(medal, canvas.width/2 - 30, 170);
    
    ctx.font = 'bold 26px Arial';
    ctx.fillStyle = '#1a237e';
    let titleText = `${displayName || childName || "CHILD"}'s Day ${currentDay}`;
    let titleWidth = ctx.measureText(titleText).width;
    ctx.fillText(titleText, canvas.width/2 - titleWidth/2, 250);
    
    const centerX = canvas.width/2;
    const centerY = 370;
    const radius = 75;
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#E0E0E0';
    ctx.fill();
    
    ctx.beginPath();
    let startAngle = -Math.PI / 2;
    let endAngle = startAngle + (percentage / 100) * 2 * Math.PI;
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.fillStyle = bgColor;
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, 60, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    
    ctx.font = 'bold 36px Arial';
    ctx.fillStyle = '#FF6B6B';
    let scoreText = `${score}`;
    let scoreWidth = ctx.measureText(scoreText).width;
    ctx.fillText(scoreText, centerX - scoreWidth/2, centerY + 10);
    
    ctx.font = '14px Arial';
    ctx.fillStyle = '#666';
    let totalText = `/ ${totalMarks}`;
    let totalWidth = ctx.measureText(totalText).width;
    ctx.fillText(totalText, centerX - totalWidth/2, centerY + 35);
    
    ctx.font = 'bold 14px Arial';
    ctx.fillStyle = '#4ECDC4';
    const words = message.split(' ');
    let line = '';
    let y = 490;
    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > 480 && line.length > 0) {
        ctx.fillText(line, canvas.width/2 - ctx.measureText(line).width/2, y);
        line = words[i] + ' ';
        y += 25;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, canvas.width/2 - ctx.measureText(line).width/2, y);
    
    ctx.font = '14px Arial';
    ctx.fillStyle = '#FF6B6B';
    let timeText = `Time: ${minutes}m ${seconds}s`;
    let timeWidth = ctx.measureText(timeText).width;
    ctx.fillText(timeText, canvas.width/2 - timeWidth/2, y + 40);
    
    ctx.font = '14px Arial';
    ctx.fillStyle = '#4CAF50';
    let correctText = `Correct: ${score/20} / ${questions.length}`;
    let correctWidth = ctx.measureText(correctText).width;
    ctx.fillText(correctText, canvas.width/2 - correctWidth/2, y + 70);
    
    if (globalRank && globalRank > 0) {
      ctx.font = 'bold 16px Arial';
      ctx.fillStyle = '#FFA726';
      let rankText = `Global Rank: #${globalRank} / ${totalPlayers}`;
      let rankWidth = ctx.measureText(rankText).width;
      ctx.fillText(rankText, canvas.width/2 - rankWidth/2, y + 105);
    }
    
    ctx.font = '12px Arial';
    ctx.fillStyle = '#999';
    let footerText = 'Jesus Redeems Bible Quiz';
    let footerWidth = ctx.measureText(footerText).width;
    ctx.fillText(footerText, canvas.width/2 - footerWidth/2, y + 145);
    
    return canvas.toDataURL('image/png');
  };

  const shareToPlatform = async (platform) => {
    try {
      const imageDataUrl = await generateResultImage();
      
      const now = new Date();
      const date = now.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
      
      const minutes = Math.floor(timeTaken / 60);
      const seconds = timeTaken % 60;
      const quote = getMotivationalQuote(score, totalMarks);
      
      const cleanShareText = `BIBLE QUIZ RESULT

Name: ${displayName || childName || "UNKNOWN"}
Day: Day ${currentDay}
Score: ${score}/${totalMarks}
Time: ${minutes}m ${seconds}s
Global Rank: #${globalRank || 'N/A'} / ${totalPlayers}
Date: ${date}

"${quote}"

Check out Jesus Redeems Bible Quiz
https://kids.jesusredeems.com`;
      
      const response = await fetch(imageDataUrl);
      const blob = await response.blob();
      const file = new File([blob], `quiz_result_${displayName || childName || "unknown"}_day${currentDay}.png`, { type: 'image/png' });
      
      if (platform === 'whatsapp') {
        window.open(`https://wa.me/?text=${encodeURIComponent(cleanShareText + '\n\n(Image saved separately)')}`, '_blank');
        const link = document.createElement('a');
        link.download = `quiz_result_${displayName || childName || "unknown"}_day${currentDay}.png`;
        link.href = imageDataUrl;
        link.click();
        alert('Image saved! Please attach it to your WhatsApp message.');
      } 
      else if (platform === 'facebook') {
        const fbShareText = `BIBLE QUIZ RESULT\n\nName: ${displayName || childName || "UNKNOWN"}\nDay: Day ${currentDay}\nScore: ${score}/${totalMarks}\nTime: ${minutes}m ${seconds}s\nGlobal Rank: #${globalRank || 'N/A'} / ${totalPlayers}\n\n"${quote}"\n\nhttps://kids.jesusredeems.com`;
        const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://kids.jesusredeems.com')}&quote=${encodeURIComponent(fbShareText)}`;
        window.open(fbShareUrl, '_blank', 'width=600,height=400');
        const link = document.createElement('a');
        link.download = `quiz_result_${displayName || childName || "unknown"}_day${currentDay}.png`;
        link.href = imageDataUrl;
        link.click();
      }
      // else if (platform === 'instagram') {
      //   const link = document.createElement('a');
      //   link.download = `quiz_result_${displayName || childName || "unknown"}_day${currentDay}.png`;
      //   link.href = imageDataUrl;
      //   link.click();
      //   alert('Image saved! You can now:\n1. Open Instagram\n2. Create a new post\n3. Select this image\n4. Paste this caption:\n\n' + cleanShareText);
      // }
      else if (platform === 'more') {
        if (navigator.share) {
          try {
            await navigator.share({
              title: 'Bible Quiz Result',
              text: cleanShareText,
              url: 'https://kids.jesusredeems.com',
              files: [file]
            });
          } catch (err) {
            console.log('Error sharing:', err);
            const link = document.createElement('a');
            link.download = `quiz_result_${displayName || childName || "unknown"}_day${currentDay}.png`;
            link.href = imageDataUrl;
            link.click();
            alert('Image saved! You can now share it manually.');
          }
        } else {
          const link = document.createElement('a');
          link.download = `quiz_result_${displayName || childName || "unknown"}_day${currentDay}.png`;
          link.href = imageDataUrl;
          link.click();
          await navigator.clipboard.writeText(cleanShareText);
          alert('Image saved and text copied to clipboard! You can now share it on any platform.');
        }
      }
      
      handleShareMenuClose();
      
    } catch (error) {
      console.error("Share error:", error);
      alert('Failed to share. Please try again.');
    }
  };

  const handleShareMenuOpen = (event) => {
    setShareAnchorEl(event.currentTarget);
  };

  const handleShareMenuClose = () => {
    setShareAnchorEl(null);
  };

  const handleBackToDashboard = () => {
    router.push('/dashboard');
  };

  const handleRefreshLeaderboard = () => {
    fetchGlobalLeaderboard();
  };

  if (loading) {
    return (
      <Box sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.2, 1] }} 
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Typography sx={{ fontSize: { xs: 40, sm: 60 } }}>🎮🌟</Typography>
        </motion.div>
      </Box>
    );
  }

  if (questions.length === 0) {
    return (
      <Box sx={{ 
        minHeight: "100vh", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", 
        flexDirection: "column", 
        gap: 3,
        px: 2,
      }}>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", duration: 0.5 }}>
          <Typography sx={{ fontSize: { xs: 60, sm: 80 } }}>📭</Typography>
          <Typography sx={{ color: "white", fontSize: { xs: 24, sm: 32 }, fontWeight: "bold", textAlign: "center", mt: 2 }}>
            No Questions Yet!
          </Typography>
          <Typography sx={{ color: "white", fontSize: { xs: 14, sm: 18 }, textAlign: "center", mt: 2, px: 3 }}>
            Admin hasn't added questions for Day {currentDay}. <br />
            Please check back later! 🌟
          </Typography>
          <Button 
            variant="contained" 
            onClick={() => router.push('/dashboard')} 
            sx={{ background: "#FFA726", borderRadius: "50px", px: { xs: 3, sm: 5 }, py: 1.5, mt: 4, fontSize: { xs: 14, sm: 16 } }}
          >
            📚 Back to Dashboard
          </Button>
        </motion.div>
      </Box>
    );
  }

  if (submitted && hasPlayed) {
    const percentage = (score / totalMarks) * 100;
    const medal = getScoreIcon(score, totalMarks);
    const quote = getMotivationalQuote(score, totalMarks);
    let bgColor = "";
    
    if (percentage === 100) bgColor = "#FFD700";
    else if (percentage >= 80) bgColor = "#C0C0C0";
    else if (percentage >= 60) bgColor = "#CD7F32";
    else bgColor = "#999";
    
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    
    return (
      <Box sx={{ 
        minHeight: "100vh", 
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        p: 2,
        position: "relative",
        overflow: "hidden",
      }}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              fontSize: [20, 25, 30][Math.floor(Math.random() * 3)],
              opacity: 0.3,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              pointerEvents: "none"
            }}
            animate={{ 
              y: [0, -100, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 3 + Math.random() * 5, 
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            {["⭐", "🌟", "🎈", "🎨", "🐟", "🌈", "🦁", "🕊️", "🎉", "🏆"][i % 10]}
          </motion.div>
        ))}
        
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", duration: 0.5 }} style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: 500 }}>
          <Paper elevation={24} sx={{ 
            textAlign: "center", 
            p: { xs: 2, sm: 3 }, 
            borderRadius: "40px", 
            mx: "auto", 
            background: "white", 
            position: "relative", 
            zIndex: 10,
            maxHeight: "90vh",
            overflow: "auto"
          }}>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Typography variant="h1" sx={{ fontSize: { xs: 50, sm: 70 }, mb: 1 }}>{medal}</Typography>
            </motion.div>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#1a237e", mb: 1, fontSize: { xs: 18, sm: 24 } }}>
              {displayName || childName || "CHILD"}'s Day {currentDay} Complete! 🎉
            </Typography>
            
            <Box sx={{ 
              width: { xs: 120, sm: 150 }, 
              height: { xs: 120, sm: 150 }, 
              borderRadius: "50%", 
              margin: "15px auto", 
              background: `conic-gradient(${bgColor} ${percentage}%, #E0E0E0 0)`,
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center"
            }}>
              <Box sx={{ 
                width: { xs: 90, sm: 120 }, 
                height: { xs: 90, sm: 120 }, 
                borderRadius: "50%", 
                background: "white", 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
                justifyContent: "center" 
              }}>
                <Typography variant="h3" sx={{ fontWeight: "bold", color: "#FF6B6B", fontSize: { xs: 32, sm: 48 } }}>{score}</Typography>
                <Typography sx={{ color: "#666", fontSize: { xs: 12, sm: 14 } }}>/ {totalMarks}</Typography>
              </Box>
            </Box>
            
            <Typography variant="body2" sx={{ mb: 1, color: "#666", fontSize: { xs: 12, sm: 14 } }}>
              You got {score/20} out of {questions.length} correct!
            </Typography>
            
            {timeTaken && timeTaken > 0 && (
              <Typography variant="body2" sx={{ mb: 1, color: "#FF6B6B", fontWeight: "bold", fontSize: { xs: 10, sm: 12 } }}>
                Time taken: {minutes} minute{minutes !== 1 ? 's' : ''} {seconds} second{seconds !== 1 ? 's' : ''}
              </Typography>
            )}
            
            <Typography variant="body1" sx={{ my: 1, color: "#4ECDC4", fontWeight: "bold", fontSize: { xs: 12, sm: 14 }, fontStyle: "italic", px: 2 }}>
              "{quote}"
            </Typography>
            
            {globalRank && globalRank > 0 && (
              <Typography variant="body1" sx={{ mb: 2, color: "#FFA726", fontWeight: "bold", fontSize: { xs: 14, sm: 16 } }}>
                Global Rank: #{globalRank} / {totalPlayers} players
              </Typography>
            )}
            
            <Button 
              variant="outlined" 
              onClick={() => {
                if (!showLeaderboard) {
                  fetchGlobalLeaderboard();
                }
                setShowLeaderboard(!showLeaderboard);
              }}
              startIcon={<EmojiEventsIcon />}
              sx={{ mb: 2, borderRadius: "50px", borderColor: "#FFA726", color: "#FFA726" }}
            >
              {showLeaderboard ? "Hide Leaderboard" : "View Top 50 Leaderboard"}
            </Button>
            
            {showLeaderboard && (
              <Paper elevation={3} sx={{ mt: 2, mb: 2, maxHeight: 400, overflow: "auto", borderRadius: "20px" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", bgcolor: "#FFA726", color: "white", p: 1.5, borderRadius: "20px 20px 0 0" }}>
                  <Typography sx={{ flex: 0.5, fontWeight: "bold" }}>#</Typography>
                  <Typography sx={{ flex: 2, fontWeight: "bold" }}>Name</Typography>
                  <Typography sx={{ flex: 1, fontWeight: "bold", textAlign: "center" }}>Score</Typography>
                  <Typography sx={{ flex: 1, fontWeight: "bold", textAlign: "center" }}>Time</Typography>
                  <IconButton size="small" onClick={handleRefreshLeaderboard} sx={{ color: "white" }}>
                    <RefreshIcon />
                  </IconButton>
                </Box>
                {loadingLeaderboard ? (
                  <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
                    <CircularProgress />
                  </Box>
                ) : leaderboard.length === 0 ? (
                  <Typography sx={{ p: 3, textAlign: "center", color: "#666" }}>
                    No players yet. Be the first! 🎯
                  </Typography>
                ) : (
                  leaderboard.map((entry) => (
                    <Box key={entry.rank} sx={{ 
                      display: "flex", 
                      alignItems: "center",
                      p: 1.5,
                      bgcolor: (entry.name === displayName || entry.name === childName) ? "#FFF3E0" : "transparent",
                      borderBottom: "1px solid #eee"
                    }}>
                      <Typography sx={{ flex: 0.5, fontWeight: entry.rank <= 3 ? "bold" : "normal" }}>
                        {entry.rank === 1 ? "🥇" : entry.rank === 2 ? "🥈" : entry.rank === 3 ? "🥉" : `#${entry.rank}`}
                      </Typography>
                      <Typography sx={{ flex: 2, fontWeight: (entry.name === displayName || entry.name === childName) ? "bold" : "normal" }}>
                        {entry.name || "Unknown"}
                        {(entry.name === displayName || entry.name === childName) && " (You)"}
                      </Typography>
                      <Typography sx={{ flex: 1, textAlign: "center", fontWeight: "bold", color: "#FF6B6B" }}>
                        {entry.score}/{totalMarks}
                      </Typography>
                      <Typography sx={{ flex: 1, textAlign: "center", fontSize: "12px", color: "#666" }}>
                        {Math.floor(entry.time / 60)}m {entry.time % 60}s
                      </Typography>
                    </Box>
                  ))
                )}
              </Paper>
            )}
            
            <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
              <Button variant="contained" onClick={handleBackToDashboard} sx={{ background: "#1a237e", borderRadius: "50px", px: { xs: 2, sm: 3 }, py: 0.8, fontSize: { xs: 12, sm: 14 } }}>
                Dashboard
              </Button>
              
              <Button 
                variant="contained" 
                onClick={handleShareMenuOpen}
                startIcon={<ShareIcon />}
                sx={{ background: "#25D366", borderRadius: "50px", px: { xs: 2, sm: 3 }, py: 0.8, fontSize: { xs: 12, sm: 14 } }}
              >
                Share to Your Friends
              </Button>
            </Box>
            
            <Typography variant="caption" sx={{ display: "block", mt: 2, color: "#999", fontSize: { xs: 8, sm: 10 } }}>
              {displayName || childName || "CHILD"} has already completed this quiz! 
            </Typography>
          </Paper>
        </motion.div>
        
        <Menu
          anchorEl={shareAnchorEl}
          open={Boolean(shareAnchorEl)}
          onClose={handleShareMenuClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          sx={{ '& .MuiPaper-root': { borderRadius: "20px", mt: 1, minWidth: 200, zIndex: 9999, boxShadow: "0px 4px 20px rgba(0,0,0,0.15)" } }}
        >
          <MenuItem onClick={() => shareToPlatform('whatsapp')} sx={{ gap: 2, py: 1.5 }}>
            <WhatsAppIcon sx={{ color: '#25D366' }} />
            <Typography>WhatsApp</Typography>
          </MenuItem>
          <MenuItem onClick={() => shareToPlatform('facebook')} sx={{ gap: 2, py: 1.5 }}>
            <FacebookIcon sx={{ color: '#1877F2' }} />
            <Typography>Facebook</Typography>
          </MenuItem>
          {/* <MenuItem onClick={() => shareToPlatform('instagram')} sx={{ gap: 2, py: 1.5 }}>
            <InstagramIcon sx={{ color: '#E4405F' }} />
            <Typography>Instagram</Typography>
          </MenuItem> */}
          <MenuItem onClick={() => shareToPlatform('more')} sx={{ gap: 2, py: 1.5 }}>
            <ShareIcon sx={{ color: '#666' }} />
            <Typography>More Options</Typography>
          </MenuItem>
        </Menu>
      </Box>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <Box sx={{ 
      minHeight: "100vh", 
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      position: "relative", 
      overflow: "hidden",
      paddingTop: "0",
    }}>
      <motion.div
        style={{
          position: "absolute",
          width: "200%",
          height: "200%",
          background: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          top: "-50%",
          left: "-50%",
          pointerEvents: "none"
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      
      {["⭐", "🌟", "🎈", "🎨", "🐟", "🌈", "🦁", "🕊️", "🎪", "🎠", "🎡", "🍭"].map((emoji, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            fontSize: [20, 30, 40][Math.floor(Math.random() * 3)],
            opacity: 0.4,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            pointerEvents: "none"
          }}
          animate={{ 
            y: [0, -80, 0],
            x: [0, 30, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 4 + i * 0.5, 
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        >
          {emoji}
        </motion.div>
      ))}
      
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`ball-${i}`}
          style={{
            position: "absolute",
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`,
            background: `hsla(${Math.random() * 360}, 70%, 60%, 0.3)`,
            borderRadius: "50%",
            bottom: 0,
            left: `${Math.random() * 100}%`,
            pointerEvents: "none"
          }}
          animate={{ 
            y: [0, -window.innerHeight * 0.3, 0],
            x: [0, Math.random() * 100 - 50, 0]
          }}
          transition={{ 
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        />
      ))}
      
      <Box sx={{ 
        maxWidth: { xs: "95%", sm: 700 }, 
        margin: "0 auto", 
        position: "relative", 
        zIndex: 1, 
        px: { xs: 1, sm: 2 }
      }}>
        <Box sx={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          mb: 2, 
          flexWrap: "wrap", 
          gap: 1, 
        }}>
          <Button onClick={handleBackToDashboard} sx={{ 
            color: "white", 
            background: "rgba(255,255,255,0.2)", 
            borderRadius: "50px", 
            px: { xs: 1.5, sm: 2 }, 
            py: 0.5, 
            fontSize: { xs: 10, sm: 12 }, 
            backdropFilter: "blur(5px)",
            '&:hover': { background: "rgba(255,255,255,0.3)" }
          }}>
            ← Back
          </Button>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Box sx={{ background: "rgba(255,255,255,0.2)", borderRadius: "50px", px: { xs: 1, sm: 2 }, py: 0.5, backdropFilter: "blur(5px)" }}>
              <Typography sx={{ color: "white", fontWeight: "bold", fontSize: { xs: 10, sm: 12 } }}>
                {displayName || childName || "CHILD"} - D{currentDay} - Q{currentQuestion + 1}/{questions.length}
              </Typography>
            </Box>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Box sx={{ background: "rgba(255,255,255,0.2)", borderRadius: "50px", px: { xs: 1, sm: 2 }, py: 0.5, backdropFilter: "blur(5px)" }}>
              <Typography sx={{ color: "white", fontWeight: "bold", fontSize: { xs: 10, sm: 12 } }}>
                🎯 {score}
              </Typography>
            </Box>
          </motion.div>
        </Box>
        
        <LinearProgress 
          variant="determinate" 
          value={progress} 
          sx={{ 
            height: { xs: 6, sm: 10 }, 
            borderRadius: 5, 
            mb: 2, 
            backgroundColor: "rgba(255,255,255,0.3)",
            '& .MuiLinearProgress-bar': { borderRadius: 5, background: "linear-gradient(90deg, #FFD700, #FFA500)" }
          }} 
        />
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentQuestion} 
            initial={{ scale: 0.8, opacity: 0, rotateY: 90 }} 
            animate={{ scale: 1, opacity: 1, rotateY: 0 }} 
            exit={{ scale: 0.8, opacity: 0, rotateY: -90 }} 
            transition={{ type: "spring", duration: 0.6 }}
          >
            <Paper elevation={24} sx={{ 
              borderRadius: { xs: "30px", sm: "40px" }, 
              p: { xs: 2, md: 3 }, 
              background: "white", 
              textAlign: "center",
              position: "relative",
              overflow: "hidden"
            }}>
              <motion.div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "linear-gradient(45deg, rgba(255,107,107,0.1), rgba(78,205,196,0.1))",
                  pointerEvents: "none"
                }}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <motion.div animate={celebrate ? { scale: 1.3, rotate: 360 } : {}} transition={{ duration: 0.3 }}>
                <Typography variant="h1" sx={{ fontSize: { xs: 40, sm: 50 }, mb: 1, position: "relative", zIndex: 1 }}>{currentQ.emoji}</Typography>
              </motion.div>
              
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1a237e", mb: 2, lineHeight: 1.3, fontSize: { xs: "14px", sm: "16px", md: "18px" }, position: "relative", zIndex: 1 }}>
                {currentQ.text}
              </Typography>
              
              <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 1, sm: 1.5 }, mb: 2, position: "relative", zIndex: 1 }}>
                {currentQ.options.map((opt, idx) => {
                  const letters = ["A", "B", "C", "D"];
                  const isSelected = selectedAnswer === opt;
                  const showCorrect = showFeedback && opt === currentQ.correct;
                  const showWrong = showFeedback && isSelected && opt !== currentQ.correct;
                  
                  return (
                    <motion.div key={idx} whileHover={{ scale: 1.02, x: 5 }} whileTap={{ scale: 0.98 }} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: idx * 0.1 }}>
                      <Button
                        fullWidth
                        disabled={showFeedback || hasPlayed}
                        onClick={() => handleAnswer(opt)}
                        sx={{
                          justifyContent: "flex-start",
                          textTransform: "none",
                          p: { xs: 1, sm: 1.5 },
                          fontSize: { xs: "11px", sm: "12px", md: "14px" },
                          fontWeight: 500,
                          borderRadius: "30px",
                          background: showCorrect ? "linear-gradient(135deg, #4CAF50, #45a049)" : showWrong ? "linear-gradient(135deg, #f44336, #e53935)" : isSelected ? "linear-gradient(135deg, #FFA726, #f57c00)" : "white",
                          color: (showCorrect || showWrong || isSelected) ? "white" : "#333",
                          border: "1.5px solid",
                          borderColor: showCorrect ? "#4CAF50" : showWrong ? "#f44336" : isSelected ? "#FFA726" : "#E0E0E0",
                          transition: "all 0.3s ease"
                        }}
                      >
                        <Box sx={{ width: { xs: 24, sm: 28 }, height: { xs: 24, sm: 28 }, borderRadius: "50%", background: "rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", mr: 1.5, fontSize: { xs: "10px", sm: "12px" } }}>
                          {letters[idx]}
                        </Box>
                        <Box sx={{ textAlign: "left", flex: 1 }}>{opt}</Box>
                        {showCorrect && <span style={{ marginLeft: "auto" }}>✅</span>}
                        {showWrong && <span style={{ marginLeft: "auto" }}>❌</span>}
                      </Button>
                    </motion.div>
                  );
                })}
              </Box>
              
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  disabled={!selectedAnswer || showFeedback || hasPlayed}
                  sx={{ background: "linear-gradient(135deg, #FF6B6B, #4ECDC4)", borderRadius: "30px", px: { xs: 3, sm: 4 }, py: { xs: 0.8, sm: 1 }, fontSize: { xs: "12px", sm: "14px" }, fontWeight: "bold", width: "100%" }}
                >
                  {currentQuestion === questions.length - 1 ? "Finish Quiz!" : "Next →"}
                </Button>
              </motion.div>
            </Paper>
          </motion.div>
        </AnimatePresence>
        
        {showFeedback && (
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: "spring", duration: 0.5 }}>
            <Paper elevation={12} sx={{ mt: 1.5, p: { xs: 1, sm: 1.5 }, borderRadius: "20px", textAlign: "center", background: selectedAnswer === currentQ.correct ? "#E8F5E9" : "#FFEBEE", border: `1.5px solid ${selectedAnswer === currentQ.correct ? "#4CAF50" : "#f44336"}` }}>
              <Typography sx={{ fontSize: { xs: "12px", sm: "14px" }, fontWeight: "bold" }}>
                {selectedAnswer === currentQ.correct ? "CORRECT! +20 points! 🎉" : `Oops! Correct: "${currentQ.correct}"`}
              </Typography>
              <Typography sx={{ fontSize: { xs: "10px", sm: "11px" }, color: "#666", mt: 0.5 }}>
                {currentQ.bibleVerse}
              </Typography>
            </Paper>
          </motion.div>
        )}
      </Box>
    </Box>
  );
} // <-- Make sure this closing bracket exists