import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr()
  ],
  resolve: {
    alias: {
      'assets': path.resolve(__dirname, './src/assets'),        
      'components': path.resolve(__dirname, './src/components'),        
      'constants': path.resolve(__dirname, './src/constants'),        
      'context': path.resolve(__dirname, './src/context'),        
      'hooks': path.resolve(__dirname, './src/hooks'),        
      'pages': path.resolve(__dirname, './src/pages'),        
      'services': path.resolve(__dirname, './src/services'),        
      'utils': path.resolve(__dirname, './src/utils'),        
    }
  }
})
