import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  optimizeDeps: {
    // We exclude it from optimization so Vite doesn't try to bundle it
    exclude: ['react-bits'], 
  },
  resolve: {
    alias: {
      // This tells Vite: "If you see this specific path, just ignore it"
      'react-native-web/dist/apis/StyleSheet/registry': 'identity-obj-proxy',
    },
  },
})