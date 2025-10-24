import { useState, useEffect } from "react"
import "./index.css"
import Scoreboard from "./components/Scoreboard"
import Leaderboard from "./components/Leaderboard"
import Quiz from "./components/Quiz"
import Start from "./components/Start"

export default function App() {
	const [gameState, setGameState] = useState("start") // this will be: start, quiz, results
	const [score, setScore] = useState(0)
	const [totalQuestions, setTotalQuestions] = useState(0)
	const [leaderboard, setLeaderboard] = useState([])

	useEffect(() => {
		// Load leaderboard from localStorage
		const saved = localStorage.getItem("quizLeaderboard")
		if (saved) {
			setLeaderboard(JSON.parse(saved))
		}
	}, [])

	const handleStartQuiz = () => {
		setScore(0)
		setGameState("quiz")
	}

	const handleQuizComplete = (finalScore, total) => {
		setScore(finalScore)
		setTotalQuestions(total)

		// Save to leaderboard
		const newEntry = {
			score: finalScore,
			total: total,
			percentage: Math.round((finalScore / total) * 100),
			date: new Date().toLocaleDateString(),
			time: new Date().toLocaleTimeString(),
		}

		const updated = [newEntry, ...leaderboard].slice(0, 10)
		setLeaderboard(updated)
		localStorage.setItem("quizLeaderboard", JSON.stringify(updated))

		setGameState("results")
	}

	const handlePlayAgain = () => {
		setGameState("start")
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
			<header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-6 shadow-lg">
				<div className="max-w-6xl mx-auto px-4">
					<h1 className="text-4xl font-bold text-center"> Quiz Master</h1>
					<p className="text-center text-purple-100 mt-2">Test your knowledge and climb the leaderboard!</p>
				</div>
			</header>

			<main className="flex-1 flex items-center justify-center p-4 py-12">
				<div className="w-full max-w-2xl">
					{gameState === "start" && <Start onStart={handleStartQuiz} />}
					{gameState === "quiz" && <Quiz onComplete={handleQuizComplete} />}
					{gameState === "results" && (
						<div className="space-y-8">
							<Scoreboard score={score} total={totalQuestions} onPlayAgain={handlePlayAgain} />
							<Leaderboard entries={leaderboard} />
						</div>
					)}
				</div>
			</main>

			<footer className="bg-slate-900 text-slate-400 py-6 border-t border-slate-700">
				<div className="max-w-6xl mx-auto px-4 text-center">
					<p>&copy; The0ph1lus</p>
					<p className="text-sm mt-2">
						<a
							href="https://github.com/robotron2"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-400 hover:text-blue-300">
							GitHub Repository
						</a>
					</p>
				</div>
			</footer>
		</div>
	)
}
