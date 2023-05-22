import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({emitCss: false})
  ],
  build: {
    minify: true,
    lib: {
      entry: 'src/main.js',
      name: 'product_menu',
      formats: ['umd', 'es'],
      fileName: (format) => `product_menu.${format}.js`
    }
  },
})
