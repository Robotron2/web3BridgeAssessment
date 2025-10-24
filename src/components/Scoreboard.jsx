const Scoreboard = ({ score, total, onPlayAgain }) => {
	const percentage = Math.round((score / total) * 100)

	let message = ""
	let emoji = ""

	if (percentage === 100) {
		message = "Perfect Score! You're a Quiz Master! 🏆"
		emoji = "👑"
	} else if (percentage >= 80) {
		message = "Excellent! You really know your stuff! 🌟"
		emoji = "⭐"
	} else if (percentage >= 60) {
		message = "Good job! Keep practicing! 💪"
		emoji = "👍"
	} else if (percentage >= 40) {
		message = "Not bad! Try again to improve! 🚀"
		emoji = "📈"
	} else {
		message = "Keep learning! You'll do better next time! 📚"
		emoji = "💡"
	}

	return (
		<div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-12 text-center space-y-8 animate-fade-in">
			<div className="text-7xl">{emoji}</div>

			<div>
				<h2 className="text-4xl font-bold text-white mb-4">Quiz Complete!</h2>
				<p className="text-xl text-slate-200">{message}</p>
			</div>

			<div className="grid grid-cols-3 gap-4">
				<div className="backdrop-blur-md bg-blue-500/20 border border-blue-400/30 rounded-xl p-6">
					<div className="text-4xl font-bold text-blue-300">{score}</div>
					<div className="text-sm text-slate-300 mt-2">Correct</div>
				</div>
				<div className="backdrop-blur-md bg-purple-500/20 border border-purple-400/30 rounded-xl p-6">
					<div className="text-4xl font-bold text-purple-300">{total - score}</div>
					<div className="text-sm text-slate-300 mt-2">Incorrect</div>
				</div>
				<div className="backdrop-blur-md bg-pink-500/20 border border-pink-400/30 rounded-xl p-6">
					<div className="text-4xl font-bold text-pink-300">{percentage}%</div>
					<div className="text-sm text-slate-300 mt-2">Score</div>
				</div>
			</div>

			<div className="w-full bg-slate-700/50 rounded-full h-4 overflow-hidden">
				<div
					className="bg-gradient-to-r from-blue-500 to-purple-600 h-full transition-all duration-1000"
					style={{ width: `${percentage}%` }}
				/>
			</div>

			<button
				onClick={onPlayAgain}
				className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-12 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
				Play Again
			</button>
		</div>
	)
}

export default Scoreboard
