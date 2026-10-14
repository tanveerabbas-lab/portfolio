import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' makes the build work on GitHub Pages for both
// https://username.github.io/ and https://username.github.io/repo-name/
export default defineConfig({
  base: './',
  plugins: [react()],
})
