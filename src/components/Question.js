import React, { useState, useEffect } from 'react';

const Question = ({ question, onTimeout }) => {
	const [timer, setTimer] = useState(question.time);
	const [isTimedOut, setIsTimedOut] = useState(false);
	const [selected, setSelected] = useState(null);
	const [isCorrect, setIsCorrect] = useState(null);

	useEffect(() => {
		setIsTimedOut(false);
		setSelected(null);
		setIsCorrect(false);
		setTimer(question.time);
	}, [question]);

	const handleAnswer = () => {
		onTimeout(isCorrect);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer((prevTimer) => prevTimer - 1);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (timer === 0) {
			setIsTimedOut(true);

			handleAnswer();
		}
	}, [timer]);

	return (
		<div className="divide-y divide-gray-300/50">
			<div className="group relative flex flex-col overflow-hidden">
				<div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none rounded-lg">
					{question.imageUrl && <img src={question.imageUrl} alt="" className="h-96 w-full object-cover object-center rounded-t-lg" />}
				</div>
				<div className="flex flex-1 flex-col bg-black h-fill">
					<h3 className="font-medium text-white text-center p-4">
						{question.question}
					</h3>
					<ul className="m-0">
						{question.options.map((option, index) => (
							<li key={index} className="flex items-center justify-center pt-1">
								<button
									className={`
										flex items-center justify-center w-full border border-gray-300 shadow-sm px-4 py-2 bg-white text-base text-black font-medium focus:outline-none
										${(selected === index) ? 'bg-yellow-300' : ''}
										${(selected === index) && isCorrect && isTimedOut ? 'bg-green-500 text-white' : ''}
									`}
									onClick={() => {
										setSelected(index);
										setIsCorrect(index === question.answer);
									}}
								>
									{(selected === index) && isCorrect && isTimedOut ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
									</svg> : null}

									{option}
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Question;

