import { useState, useEffect } from "react"
import QuestionCard from "./QuestionCard"
import { shuffleArray } from "../utils/shuffle"

const Quiz = ({ onComplete }) => {
	const [questions, setQuestions] = useState([])
	const [currentIndex, setCurrentIndex] = useState(0)
	const [score, setScore] = useState(0)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [answered, setAnswered] = useState(false)
	const [selectedAnswer, setSelectedAnswer] = useState(null)
	const [isCorrect, setIsCorrect] = useState(null)

	useEffect(() => {
		loadQuestions()
	}, [])

	const loadQuestions = async () => {
		try {
			const response = await fetch("/questions.json")
			if (!response.ok) throw new Error("Failed to load questions")
			const data = await response.json()

			if (!Array.isArray(data) || data.length === 0) {
				throw new Error("No questions found in file")
			}

			// Shuffle questions and their options
			const shuffled = shuffleArray(data).map((q) => ({
				...q,
				options: shuffleArray([...q.options]),
			}))

			setQuestions(shuffled)
			setLoading(false)
		} catch (err) {
			setError(err.message)
			setLoading(false)
		}
	}

	const handleAnswer = (selectedOption) => {
		if (answered) return

		setSelectedAnswer(selectedOption)
		const correct = selectedOption === questions[currentIndex].correct
		setIsCorrect(correct)
		setAnswered(true)

		if (correct) {
			setScore(score + 1)
		}

		// Move to next question after delay
		setTimeout(() => {
			if (currentIndex < questions.length - 1) {
				setCurrentIndex(currentIndex + 1)
				setAnswered(false)
				setSelectedAnswer(null)
				setIsCorrect(null)
			} else {
				onComplete(correct ? score + 1 : score, questions.length)
			}
		}, 1500)
	}

	if (loading) {
		return (
			<div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-12 text-center">
				<div className="animate-spin text-5xl mb-4">⏳</div>
				<p className="text-white text-xl">Loading questions...</p>
			</div>
		)
	}

	if (error) {
		return (
			<div className="backdrop-blur-md bg-red-500/20 border border-red-400/30 rounded-3xl p-12 text-center">
				<div className="text-5xl mb-4"></div>
				<p className="text-white text-xl">Error: {error}</p>
				<p className="text-slate-300 mt-4">Please ensure questions.json is in the public folder</p>
			</div>
		)
	}

	if (questions.length === 0) {
		return (
			<div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-12 text-center">
				<p className="text-white text-xl">No questions available</p>
			</div>
		)
	}

	const progress = ((currentIndex + 1) / questions.length) * 100

	return (
		<div className="space-y-6 animate-fade-in">
			{/* Progress Bar */}
			<div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
				<div className="flex justify-between items-center mb-4">
					<span className="text-slate-300">
						Question {currentIndex + 1} of {questions.length}
					</span>
					<span className="text-blue-300 font-bold">Score: {score}</span>
				</div>
				<div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
					<div
						className="bg-gradient-to-r from-blue-500 to-purple-600 h-full transition-all duration-500"
						style={{ width: `${progress}%` }}
					/>
				</div>
			</div>

			{/* Question Card */}
			<QuestionCard
				question={questions[currentIndex]}
				onAnswer={handleAnswer}
				answered={answered}
				selectedAnswer={selectedAnswer}
				isCorrect={isCorrect}
			/>
		</div>
	)
}
export default Quiz
