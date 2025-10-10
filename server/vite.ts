import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import { nanoid } from "nanoid";

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const sanitizedMessage = message.replace(/[\r\n]/g, ' ');
  console.log(`${formattedTime} [${source}] ${sanitizedMessage}`);
}

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const baseDir = path.resolve(import.meta.dirname, "..");
      const clientTemplate = path.join(baseDir, "client", "index.html");
      
      // Validate path to prevent traversal
      if (!clientTemplate.startsWith(baseDir)) {
        throw new Error("Invalid path");
      }

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      const cacheBuster = nanoid();
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${cacheBuster}"`,
      );
      const sanitizedUrl = url.replace(/[<>]/g, '');
      const page = await vite.transformIndexHtml(sanitizedUrl, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const baseDir = path.resolve(import.meta.dirname);
  const distPath = path.join(baseDir, "public");
  
  // Validate path
  if (!distPath.startsWith(baseDir)) {
    throw new Error("Invalid path");
  }

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    const indexPath = path.join(distPath, "index.html");
    if (!indexPath.startsWith(distPath)) {
      return res.status(400).send("Invalid request");
    }
    res.sendFile(indexPath);
  });
}
