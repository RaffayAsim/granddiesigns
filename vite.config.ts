import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import path from "path";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6Lc4GH8tAAAAAFpFHpBhCKk7gLTS1zAkMEMDZdCB";
const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY || "6Lc4GH8tAAAAAHb4Puq8mcD899X5NfBuWrPCmr_q";

export default defineConfig({
  define: {
    "process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY": JSON.stringify(SITE_KEY),
    "process.env.RECAPTCHA_SECRET_KEY": JSON.stringify(SECRET_KEY),
  },
  server: {
    watch: {
      ignored: ["**/Companies logo/**"],
    },
  },
  plugins: [
    {
      name: "recaptcha-verify-api",
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url === "/api/verify-recaptcha" && req.method === "POST") {
            let body = "";
            req.on("data", (chunk) => {
              body += chunk;
            });
            req.on("end", async () => {
              try {
                const parsed = JSON.parse(body || "{}");
                const token = parsed.token || "";
                const googleRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
                  method: "POST",
                  headers: { "Content-Type": "application/x-www-form-urlencoded" },
                  body: new URLSearchParams({
                    secret: SECRET_KEY,
                    response: token,
                  }),
                });
                const data = await googleRes.json();
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify(data));
              } catch (err: any) {
                res.statusCode = 500;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({ success: false, error: err.message }));
              }
            });
            return;
          }
          next();
        });
      },
    },
    TanStackRouterVite({
      routesDirectory: "./src/routes",
      generatedRouteTree: "./src/routeTree.gen.ts",
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
