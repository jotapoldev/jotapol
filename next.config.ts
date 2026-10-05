import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sitio 100 % estático: se sirve desde un CDN, sin servidor encendido.
  output: "export",
  poweredByHeader: false,
  images: { unoptimized: true },
  // Mientras no haya dominio propio, GitHub Pages lo sirve en /jotapol. Con dominio, se deja vacío.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default nextConfig;
