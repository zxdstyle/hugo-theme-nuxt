import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

export default defineConfig({
    plugins: [vue()],
    build: {
        outDir: "static",
        rollupOptions: {
            output: {
                assetFileNames: "app.min.css",
                chunkFileNames: "vendor.min.js",
                entryFileNames: "app.min.js",
            },
        },
    },
})
