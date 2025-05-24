import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Add base URL for GitHub Pages,
  
  server: {
    host: "::",
    port: 8080
  },
  
  plugins: [react()],
  base:"/official.sijalu/",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },

  // Optimize build for GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  }
}));