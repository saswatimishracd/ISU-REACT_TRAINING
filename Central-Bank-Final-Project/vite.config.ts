import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true, // Forces Vite to fail if 3000 is unavailable
    proxy: {
      '/api-encr': {
        target: 'http://encr-decr.iserveu.online',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-encr/, '/encr'),
        configure: (proxy, _options) => {
          proxy.on('proxyReq', (proxyReq, _req, _res) => {
             proxyReq.setHeader('user-agent', 'PostmanRuntime/7.28.4');
          });
        }
      },
      '/api-decr': {
        target: 'http://encr-decr.iserveu.online',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-decr/, '/decr'),
        configure: (proxy, _options) => {
          proxy.on('proxyReq', (proxyReq, _req, _res) => {
             proxyReq.setHeader('user-agent', 'PostmanRuntime/7.28.4');
          });
        }
      },
      '/api-fetch': {
        target: 'https://api-preprod.txninfra.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api-fetch/, '')
      }
    }
  }
})
