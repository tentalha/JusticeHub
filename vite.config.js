import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      assets: "/src/assets",
      constant: "/src/constant",
      features: "/src/features",
      schema: "/src/schema",
      services: "/src/services",
      store: "/src/store",
      pages: "/src/pages",
      routes: "/src/routes",
      helpers: "/src/helpers",
      errors: "/src/errors",
      hooks: "/src/hooks",
    },
  },
});
