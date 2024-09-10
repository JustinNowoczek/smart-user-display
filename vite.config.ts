import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@slices': resolve(__dirname, 'src/slices'),
			'@components': resolve(__dirname, 'src/components'),
			'@custom-types': resolve(__dirname, 'src/types'),
		},
	},
})

