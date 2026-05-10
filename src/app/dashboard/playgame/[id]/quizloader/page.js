// "use client";

// import React, { useEffect, useState } from "react";
// import Quiz from "../../../../components/Quiz";
// import config from "../../../../partnerconfig.json";

// export default function QuizLoader() {
//   const [quiz, setQuiz] = useState(null);

//   useEffect(() => {
//     const qdate = localStorage.getItem("qdate");
//     const category = localStorage.getItem("category") || "senior";

//     if (!qdate) return;

//     const date = new Date(qdate);
//     const month = date.getMonth() + 1;
//     const day = date.getDate();

//     const url =
//       `${config.jrmClientUrl}jrms/v1/kidsmas/questions/2026/${month}/${day}/${category}`;

//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => setQuiz(data));
//   }, []);

//   if (!quiz) {
//     return <h2 style={{ textAlign: "center" }}>Loading Quiz...</h2>;
//   }

//   return <Quiz quiz={quiz} />;
// }