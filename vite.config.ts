import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  server: {
    port: 5174,
  },
  plugins: [
    react(),
    federation({
      name: "comments",
      filename: "remoteEntry.js",
      exposes: {
        "./comments": "./src/main.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "chrome89",
  },
});
