// src/utils/quizStorage.js

// Fetch questions for a specific day
export async function fetchQuestions(day) {
  try {
    const response = await fetch(`/api/quiz?day=${day}`);
    const data = await response.json();
    if (data.success) {
      return data.data.questions || [];
    }
    return [];
  } catch (error) {
    console.error('Error fetching questions:', error);
    return [];
  }
}

// Save quiz result
export function saveQuizResult(childId, day, score, totalMarks, timeTaken) {
  const key = `child_${childId}_day${day}_completed`;
  localStorage.setItem(key, 'true');
  localStorage.setItem(`child_${childId}_day${day}_score`, score);
  localStorage.setItem(`child_${childId}_day${day}_total`, totalMarks);
  localStorage.setItem(`child_${childId}_day${day}_time`, timeTaken);
  localStorage.setItem(`child_${childId}_day${day}_timestamp`, new Date().toISOString());
}

// Check if child already completed the quiz
export function hasCompletedQuiz(childId, day) {
  const key = `child_${childId}_day${day}_completed`;
  return localStorage.getItem(key) === 'true';
}

// Get saved score
export function getSavedScore(childId, day) {
  return localStorage.getItem(`child_${childId}_day${day}_score`);
}