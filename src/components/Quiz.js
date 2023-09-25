import React, { useState } from 'react';
import Question from './Question';
import Results from './Results';

const Quiz = ({ questions }) => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [showResults, setShowResults] = useState(false);
	const [score, setScore] = useState({ correct: 0, total: questions.length });

	const handleAnswer = (isCorrect) => {
		if (currentQuestionIndex + 1 < questions.length) {
			const timeout = setTimeout(() => {
				setCurrentQuestionIndex(currentQuestionIndex + 1);

				if (isCorrect) {
					setScore((prevScore) => ({ ...prevScore, correct: prevScore.correct + 1 }));
				}
			}, 3000);

			return () => clearTimeout(timeout);
		} else {
			setShowResults(true);
		}
	};

	return showResults ? <Results score={score} /> : <Question question={questions[currentQuestionIndex]} onTimeout={handleAnswer} />;
};

export default Quiz;
