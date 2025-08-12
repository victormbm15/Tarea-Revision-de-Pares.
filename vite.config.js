import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/https://github.com/victormbm15/Tarea-Revision-de-Pares./', // reemplaza con el nombre real del repo
  build: {
    outDir: 'docs'
  },
  plugins: [react()]
})

touch docs/.nojekyll
