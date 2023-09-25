const Results = ({ score }) => {
	const { correct, total } = score;

	return (
		<div className="flex justify-center items-center h-152 bg-gray-300 rounded-lg">
			<div>
				<h1 className="text-3xl text-center text-white uppercase">Your Score</h1>
				<div className="flex justify-center">
					<div className="flex flex-col">
						<h1 className="text-7xl text-center text-white">{correct}/{total}</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Results;