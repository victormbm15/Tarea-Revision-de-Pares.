import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/nombre-del-repo/', // reemplaza con el nombre real del repo
  build: {
    outDir: 'docs'
  },
  plugins: [react()]
})

touch docs/.nojekyll
