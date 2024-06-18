import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "frontend/dist", // pastikan ini sesuai dengan konfigurasi vercel.json
  },
});
