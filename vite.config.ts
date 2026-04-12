import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
const normalizeBasePath = (value?: string) => {
  if (!value || value === '/') {
    return '/'
  }

  const trimmedValue = value.replace(/^\/+|\/+$/g, '')

  return `/${trimmedValue}/`
}

export default defineConfig({
  base: normalizeBasePath(process.env.BASE_PATH),
  plugins: [vue(), tailwindcss(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
