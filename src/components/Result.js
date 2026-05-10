import React, { useEffect } from "react";

function Result(props) {
	let questions = props.questions;
	let finalScore = 0;

	useEffect(() => {
		questions.forEach((q) => {
			q.isCorrect = q.options.every((x) => x.selected === x.answer);
			if (q.isCorrect === true) {
				finalScore += 1;
			}
		});

		// window.location.href = "https://google.com";
	}, []);



	return (
		<div className="result">
			<h2 className="text-center font-weight-normal">Quiz Game</h2>
			{/* {questions.map((q, index) => (
				<div
					key={q.id}
					className={`mb-2 ${
						q.isCorrect ? "bg-success" : "bg-danger"
					}`}
				>
					<div className="result-question">
						<h5>
							{index + 1}. {q.name}
						</h5>
						<div className="row">
							{q.options.map((option) => (
								<div key={option.id} className="col">
									<input
										id={option.id}
										type="checkbox"
										disabled="disabled"
										checked={option.selected}
									/>{" "}
									{option.name}
								</div>
							))}
						</div>
						<div
							className={`m-1 p-1 text-bold ${
								q.isCorrect ? "text-success" : "text-danger"
							}`}
						>
							Your answer is {q.isCorrect ? "Correct" : "Wrong"}.
						</div>
					</div>
				</div>
			))} */}
			<h4 className="alert alert-info text-center">
				Thank you for playing<br />
			</h4>
		</div>
	);
}

export default Result;
