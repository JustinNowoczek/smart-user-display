import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@stores': resolve(__dirname, 'src/stores'),
			'@components': resolve(__dirname, 'src/components'),
			'@types': resolve(__dirname, 'src/types'),
		},
	},
})

