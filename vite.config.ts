import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import inertia from "@inertiajs/vite";

export default defineConfig({
  plugins: [
    laravel({
      input: ["views/css/app.css", "views/js/main.tsx"],
      refresh: true,
    }),
    tailwindcss(),
    inertia({
      ssr: {
        entry: "views/js/ssr.tsx",
        port: 13714,
        host: "127.0.0.1",
        cluster: true,
      },
    }),
    react({}),
  ],
});
