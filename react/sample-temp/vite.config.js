// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/RuzelVicedo/', // IMPORTANT: must match your repo name!
  plugins: [react()],
})
