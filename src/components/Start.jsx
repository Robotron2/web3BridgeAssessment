const Start = ({ onStart }) => {
	return (
		<div className="text-center space-y-8 animate-fade-in">
			<div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl">
				<div className="text-6xl mb-6"></div>
				<h2 className="text-4xl font-bold text-white mb-4">Welcome to Quiz Master</h2>
				<p className="text-xl text-slate-200 mb-8">
					Challenge yourself with our engaging quiz! Answer questions correctly to build your score and
					compete on the leaderboard.
				</p>

				<div className="grid grid-cols-3 gap-4 mb-8 text-center">
					<div className="backdrop-blur-md bg-blue-500/20 border border-blue-400/30 rounded-xl p-4">
						<div className="text-3xl font-bold text-blue-300">10</div>
						<div className="text-sm text-slate-300">Questions</div>
					</div>
					<div className="backdrop-blur-md bg-purple-500/20 border border-purple-400/30 rounded-xl p-4">
						<div className="text-3xl font-bold text-purple-300">⏱️</div>
						<div className="text-sm text-slate-300">Timer</div>
					</div>
					<div className="backdrop-blur-md bg-pink-500/20 border border-pink-400/30 rounded-xl p-4">
						<div className="text-3xl font-bold text-pink-300">🏆</div>
						<div className="text-sm text-slate-300">Leaderboard</div>
					</div>
				</div>

				<button
					onClick={onStart}
					className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-12 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
					Start Quiz
				</button>
			</div>

			<div className="text-slate-400 text-sm">
				<p> Answer all questions to see your final score</p>
				<p> Your scores are saved to the leaderboard</p>
			</div>
		</div>
	)
}

export default Start
