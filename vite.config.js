import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/",
    test: {
      globals: true,
      include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
      environment: 'jsdom',
      setupFiles: './src/setupTest.js',
      CSS: true
    }
  };

  if (command !== "serve") {
    config.base = "/background-effects/";
  }

  return config;
});
