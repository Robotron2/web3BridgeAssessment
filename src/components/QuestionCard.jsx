const QuestionCard = ({ question, onAnswer, answered, selectedAnswer, isCorrect }) => {
	return (
		<div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
			<h2 className="text-2xl font-bold text-white mb-8 text-balance">{question.question}</h2>

			<div className="space-y-4">
				{question.options.map((option, index) => {
					const isSelected = selectedAnswer === option
					const isCorrectOption = option === question.correct

					let buttonClass = "bg-white/10 border-white/20 hover:bg-white/20 text-white"

					if (answered) {
						if (isCorrectOption) {
							buttonClass = "bg-green-500/30 border-green-400/50 text-green-100"
						} else if (isSelected && !isCorrect) {
							buttonClass = "bg-red-500/30 border-red-400/50 text-red-100"
						}
					}

					return (
						<button
							key={index}
							onClick={() => onAnswer(option)}
							disabled={answered}
							className={`w-full p-4 rounded-xl border-2 transition-all duration-300 font-semibold text-lg backdrop-blur-md ${buttonClass} ${
								answered ? "cursor-default" : "cursor-pointer hover:scale-102"
							} ${isSelected ? "border-blue-400" : "border-white/20"}`}>
							<div className="flex items-center justify-between">
								<span>{option}</span>
								{answered && isCorrectOption && <span>✓</span>}
								{answered && isSelected && !isCorrect && <span>✗</span>}
							</div>
						</button>
					)
				})}
			</div>

			{answered && (
				<div
					className={`mt-6 p-4 rounded-xl text-center font-semibold text-lg ${
						isCorrect
							? "bg-green-500/20 border border-green-400/50 text-green-100"
							: "bg-red-500/20 border border-red-400/50 text-red-100"
					}`}>
					{isCorrect ? "Correct!" : " Wrong!"}
				</div>
			)}
		</div>
	)
}

export default QuestionCard
