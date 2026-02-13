import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  base: '/Happy_Eid/',
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'app.html'),
      },
    },
  },
  plugins: [react()],
})
