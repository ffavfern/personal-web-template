import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@fortawesome/free-solid-svg-icons': '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-brands-svg-icons': '@fortawesome/free-brands-svg-icons',
      '@fortawesome/react-fontawesome': '@fortawesome/react-fontawesome',
    },
  },
  
});