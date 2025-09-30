import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "../backend/static", // Compile React files into Flask's static/ folder
        emptyOutDir: true,
        sourcemap: true,
    },
    server: {
        proxy: {
            "/api": "http://127.0.0.1:5000", // Proxy API calls to Flask during development
        },
        host: true, // Allow access from network
    },
});