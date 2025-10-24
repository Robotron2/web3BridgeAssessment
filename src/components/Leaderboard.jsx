const Leaderboard = ({ entries }) => {
	if (entries.length === 0) {
		return null
	}

	return (
		<div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 animate-fade-in">
			<h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">🏆 Top Scores</h3>

			<div className="space-y-3">
				{entries.map((entry, index) => (
					<div
						key={index}
						className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between hover:bg-white/10 transition-all">
						<div className="flex items-center gap-4">
							<div className="text-2xl font-bold text-purple-300 w-8">
								{index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : `#${index + 1}`}
							</div>
							<div>
								<div className="text-white font-semibold">
									{entry.score}/{entry.total} ({entry.percentage}%)
								</div>
								<div className="text-xs text-slate-400">
									{entry.date} at {entry.time}
								</div>
							</div>
						</div>
						<div className="text-3xl">
							{entry.percentage === 100 ? "⭐" : entry.percentage >= 80 ? "✨" : "💫"}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Leaderboard
