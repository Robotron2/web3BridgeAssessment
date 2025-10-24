import { render, screen } from "@testing-library/react"
import Quiz from "../components/Quiz"
import { afterAll, beforeAll, describe, expect, test, vi } from "vitest"

// Mock global fetch to prevent runtime errors
beforeAll(() => {
	global.fetch = vi.fn(() =>
		Promise.resolve({
			ok: true,
			json: async () => [],
		})
	)
})

afterAll(() => {
	vi.restoreAllMocks()
})

describe("Quiz Component", () => {
	test("renders loading state initially", () => {
		render(<Quiz onComplete={() => {}} />)
		expect(screen.getByText(/loading/i)).toBeInTheDocument()
	})
})
