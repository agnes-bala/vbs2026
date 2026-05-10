// src/app/api/quiz/route.js
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const quizFilePath = path.join(process.cwd(), 'quiz-data.json');

// Default quiz data structure
const getDefaultQuizData = () => {
  const daysData = {};
  
  // Create structure for Day 1 to Day 5
  for (let i = 1; i <= 5; i++) {
    daysData[i] = {
      title: `Day ${i} - Bible Quiz`,
      questions: [
        {
          id: 1,
          text: i === 1 ? "What did God create on the first day?" : `Sample question for Day ${i}`,
          options: ["Option A", "Option B", "Option C", "Option D"],
          correct: "Option A",
          bibleVerse: "Genesis 1:1",
          emoji: "📖",
          active: true
        }
      ]
    };
  }
  
  return { days: daysData };
};

// GET - Fetch quiz questions for a specific day
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const day = searchParams.get('day');
    
    // Create file if doesn't exist
    if (!fs.existsSync(quizFilePath)) {
      fs.writeFileSync(quizFilePath, JSON.stringify(getDefaultQuizData(), null, 2), 'utf8');
    }
    
    const data = fs.readFileSync(quizFilePath, 'utf8');
    const quizData = JSON.parse(data);
    
    if (day) {
      const dayData = quizData.days[day] || { title: `Day ${day}`, questions: [] };
      return NextResponse.json({ success: true, data: dayData });
    }
    
    return NextResponse.json({ success: true, data: quizData });
    
  } catch (error) {
    console.error('GET Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// POST - Add or update question
export async function POST(request) {
  try {
    const body = await request.json();
    const { action, day, question } = body;
    
    // Read existing data
    let quizData = getDefaultQuizData();
    if (fs.existsSync(quizFilePath)) {
      const data = fs.readFileSync(quizFilePath, 'utf8');
      quizData = JSON.parse(data);
    }
    
    if (action === 'add') {
      // Add new question
      if (!quizData.days[day]) {
        quizData.days[day] = { title: `Day ${day}`, questions: [] };
      }
      
      const newQuestion = {
        id: Date.now(),
        text: question.text,
        options: [question.option1, question.option2, question.option3, question.option4],
        correct: question.correct,
        bibleVerse: question.bibleVerse || "",
        emoji: question.emoji || "📖",
        active: true
      };
      
      quizData.days[day].questions.push(newQuestion);
      
    } else if (action === 'delete') {
      // Delete question
      if (quizData.days[day]) {
        quizData.days[day].questions = quizData.days[day].questions.filter(q => q.id !== question.id);
      }
      
    } else if (action === 'update') {
      // Update question
      if (quizData.days[day]) {
        const index = quizData.days[day].questions.findIndex(q => q.id === question.id);
        if (index !== -1) {
          quizData.days[day].questions[index] = { ...quizData.days[day].questions[index], ...question };
        }
      }
    }
    
    // Save to file
    fs.writeFileSync(quizFilePath, JSON.stringify(quizData, null, 2), 'utf8');
    
    return NextResponse.json({ success: true, message: 'Question saved successfully!' });
    
  } catch (error) {
    console.error('POST Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}