import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import legacyPlugin from "@vitejs/plugin-legacy"

const { resolve } = require("path")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), legacyPlugin()],
  server: {
    port: 8000,
  },
  resolve: {
    alias: {
      "@/": `${resolve(__dirname, "src")}/`,
    },
  },
})
