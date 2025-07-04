import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],
  server: {
    host: "0.0.0.0", // Allow access from any hostname
    port: 3000,
    allowedHosts: [
      "localhost",
      "127.0.0.1",
      "theme1.ranjeet.com",
      "theme2.ranjeet.com",
      "theme1.ranjeet.com", // Added this variant in case there was a typo
      "theme2.ranjeet.com"
    ]
  },
});
