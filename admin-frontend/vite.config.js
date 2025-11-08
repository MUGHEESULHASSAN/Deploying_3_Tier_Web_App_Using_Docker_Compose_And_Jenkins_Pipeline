/*import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
base: "/admin/",
  server: { port: 5174 },
});
*/

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //base: "/admin/", // ✅ Serve from root of S3 bucket
  base:"/",
  server: {
    port: 5174, // optional, for local dev
  },
  build: {
    outDir: "dist", // default build output directory
  },
});


