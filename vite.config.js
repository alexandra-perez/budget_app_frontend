import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

console.log('Configuring Vite with SVGR');

export default defineConfig({
  plugins: [react()],
});
