import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/meu-portfolio/', // Use o nome da pasta ou subdiretório onde o portfólio estará hospedado
})
