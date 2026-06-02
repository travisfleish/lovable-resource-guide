import { defineConfig } from '@tanstack/react-start/config'
import path from 'node:path'

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '~': path.resolve('./src'),
      },
    },
  },
})
