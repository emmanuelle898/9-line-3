/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'build',
  },
  // test: {
  //   globals: true, // Allows using `describe`, `it`, `expect` without imports
  //   environment: 'jsdom', // Simulates a browser environment
  //   setupFiles: './src/setupTests.ts', // File for test setup (see below)
  //   css: true // Optional: Include CSS in tests if needed
  // }
})
