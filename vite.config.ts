import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths({
      projects: ['./tsconfig.json'], // ← you can change this if using tsconfig.app.json or similar
    }),
    tailwindcss(),
  ],
  build: {
    outDir: 'dist', // ✅ This must match what Netlify expects
  },
})
