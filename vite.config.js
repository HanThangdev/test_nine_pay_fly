import {
  defineConfig
} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3001
  },
  optimizeDeps: {
    include: ['@ant-design/colors', '@ant-design/icons', '@ant-design/icons/es/icons'],
  },
})