import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative base: works at muralikrishna2977.github.io/lgd-website/ and at the custom domain root
  base: './',
})