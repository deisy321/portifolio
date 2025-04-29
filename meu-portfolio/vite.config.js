import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/meu-portfolio/', // Substitua '/meu-portfolio/' pelo caminho correto se necessário
});
