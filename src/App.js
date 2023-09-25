import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Splash from './components/Splash';
import Quiz from './components/Quiz';

const App = () => {
	const [questions, setQuestions] = useState([]);

	useEffect(() => {
		const fetchQuestions = async () => {
			const response = await axios.get('https://scs-interview-api.herokuapp.com/questions');
			setQuestions(response.data);
		};

		fetchQuestions();
	}, []);

	return (
		<div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
			<div className="relative bg-white shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg rounded-lg h-152 w-96">
				<div className="mx-auto max-w-md">
					{questions.length === 0 ? <Splash /> : <Quiz questions={questions} />}
				</div>
			</div>
		</div>
	);
}

export default App;
