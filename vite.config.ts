import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin, type PreviewServer, type ViteDevServer } from 'vite'

// SPA fallback plugin - serves index.html for all routes (fixes 404 on page reload)
function spaFallback(): Plugin {
  return {
    name: 'spa-fallback',
    configureServer(server: ViteDevServer) {
      server.middlewares.use((req, _res, next) => {
        const url = req.url || ''
        // Skip API calls, static assets, and root
        if (
          url.startsWith('/@') ||
          url.startsWith('/__') ||
          url.includes('.') ||
          url === '/'
        ) {
          return next()
        }
        // Rewrite to index.html for SPA routing
        req.url = '/'
        next()
      })
    },
    configurePreviewServer(server: PreviewServer) {
      server.middlewares.use((req, _res, next) => {
        const url = req.url || ''
        if (
          url.startsWith('/@') ||
          url.startsWith('/__') ||
          url.includes('.') ||
          url === '/'
        ) {
          return next()
        }
        req.url = '/'
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), spaFallback()],
  css: {
    postcss: './postcss.config.js',
  },
  base: '/',
})

