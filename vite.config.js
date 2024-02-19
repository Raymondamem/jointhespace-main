import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_PUBLIC_URL, // Set the base URL to the public URL
  plugins: [react(), reactRefresh()],
});
