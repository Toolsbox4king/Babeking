import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Tailwind CSS is configured via postcss.config.js, not directly here
  // Remove the tailwindcss import and plugin usage from here
  // The alias is also not strictly necessary for basic setup and can be removed for simplicity
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
