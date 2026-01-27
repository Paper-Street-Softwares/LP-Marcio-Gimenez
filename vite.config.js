// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import imagePresets from 'vite-plugin-image-presets'
import path from 'path'

function nonBlockingCssPlugin() {
  return {
    name: 'non-blocking-css',
    enforce: 'post',
    transformIndexHtml(html) {
      return html.replace(
        /<link rel="stylesheet"([^>]+)>/g,
        `<link rel="stylesheet"$1 media="print" onload="this.media='all'">`,
      )
    },
  }
}

export default defineConfig({
  plugins: [
    react(),

    imagePresets({
      hero: {
        widths: [480, 768, 1024, 1440, 1920],
        formats: ['webp'], // mantém webp
        sizes: '(max-width: 1215px) 100vw, 1215px',
      },
    }),

    nonBlockingCssPlugin(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
