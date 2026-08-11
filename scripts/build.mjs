import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const dist = resolve(root, "dist");

if (dirname(dist) !== root || dist === root) {
  throw new Error("Refusing to clean an unexpected build directory.");
}

await rm(dist, { recursive: true, force: true });
await mkdir(resolve(dist, "client", "assets", "css"), { recursive: true });
await mkdir(resolve(dist, "client", "assets", "js"), { recursive: true });
await mkdir(resolve(dist, "client", "assets", "images"), { recursive: true });
await mkdir(resolve(dist, "server"), { recursive: true });
await mkdir(resolve(dist, ".openai"), { recursive: true });

await Promise.all([
  cp(resolve(root, "index.html"), resolve(dist, "client", "index.html")),
  cp(resolve(root, "app-ads.txt"), resolve(dist, "client", "app-ads.txt")),
  cp(resolve(root, "assets", "css", "style.css"), resolve(dist, "client", "assets", "css", "style.css")),
  cp(resolve(root, "assets", "js", "main.js"), resolve(dist, "client", "assets", "js", "main.js")),
  cp(resolve(root, "assets", "images"), resolve(dist, "client", "assets", "images"), { recursive: true }),
  cp(resolve(root, ".openai", "hosting.json"), resolve(dist, ".openai", "hosting.json")),
]);

const fallbackHtml = await readFile(resolve(root, "index.html"), "utf8");
const workerSource = `const fallbackHtml = ${JSON.stringify(fallbackHtml)};

const securityHeaders = {
  "content-security-policy": "default-src 'self'; img-src 'self' data:; style-src 'self'; script-src 'self' 'unsafe-inline'; base-uri 'self'; form-action 'none'; frame-ancestors 'none'",
  "referrer-policy": "strict-origin-when-cross-origin",
  "x-content-type-options": "nosniff",
  "x-frame-options": "DENY"
};

export default {
  async fetch(request, env) {
    let response;

    if (env?.ASSETS) {
      response = await env.ASSETS.fetch(request);
    } else {
      const url = new URL(request.url);
      response = url.pathname === "/" || url.pathname === "/index.html"
        ? new Response(fallbackHtml, { headers: { "content-type": "text/html; charset=utf-8" } })
        : new Response("Not found", { status: 404 });
    }

    const headers = new Headers(response.headers);
    for (const [key, value] of Object.entries(securityHeaders)) headers.set(key, value);
    if (/\\.(?:png|webp)$/i.test(new URL(request.url).pathname)) {
      headers.set("cache-control", "public, max-age=31536000, immutable");
    }
    return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
  }
};
`;

await writeFile(resolve(dist, "server", "index.js"), workerSource, "utf8");

console.log("Built Mahjong Red Dragon site into dist/.");
