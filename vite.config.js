/// <reference types="vitest" />
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./src/setupTests.js",
		pool: "threads",
		maxThreads: 1,
		minThreads: 1,
		testTimeout: 10000,
		include: ["src/__tests__/**/*.test.{js,jsx}"],
	},
})
