import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/",
    plugins: [vue()],
    build: {
        assetsDir: "assets",
        outDir: "dist",
        rollupOptions: {
            output: {
                manualChunks: {
                    'vendor': ['vue'],
                },
            },
        },
        // Optimize chunk size
        chunkSizeWarningLimit: 1000,
        // Enable minification with esbuild (faster than terser)
        minify: 'esbuild',
    },
    // Optimize dependencies
    optimizeDeps: {
        include: ['vue', 'sweetalert2', 'vue3-smooth-scroll'],
    },
});
