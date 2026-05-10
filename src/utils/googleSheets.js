// src/utils/googleSheets.js

// Your published CSV link
const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTCZlUj18jfARxtJfm3jlsdHYoMKwTOTIVrKmLAEdMMFb_iPb_koRg1V2jV_mNpAY0jFxft3OAuY9mU/pub?gid=1223788972&output=csv";

export async function getQuestionsFromSheet(day) {
  try {
    console.log("Fetching questions for day:", day);
    const response = await fetch(CSV_URL);
    const csvText = await response.text();
    
    const lines = csvText.trim().split('\n');
    
    if (lines.length < 2) {
      console.log("No data found");
      return [];
    }
    
    const questions = [];
    
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      // Parse CSV
      const values = [];
      let inQuotes = false;
      let current = '';
      
      for (let char of line) {
        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
          values.push(current);
          current = '';
        } else {
          current += char;
        }
      }
      values.push(current);
      
      if (values.length < 8) continue;
      
      const questionDay = parseInt(values[0]);
      
      if (questionDay === day) {
        questions.push({
          id: i,
          text: values[1] || "",
          options: [
            values[2] || "",
            values[3] || "",
            values[4] || "",
            values[5] || ""
          ],
          correct: values[6] || "",
          bibleVerse: values[7] || "God loves you!",
          emoji: "📖",
          marks: 20
        });
      }
    }
    
    console.log(`Found ${questions.length} questions for day ${day}`);
    return questions;
  } catch (error) {
    console.error("Error loading questions:", error);
    return [];
  }
}