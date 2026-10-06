import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sitio 100 % estático: se sirve desde un CDN, sin servidor encendido.
  output: "export",
  poweredByHeader: false,
  images: { unoptimized: true },
};

export default nextConfig;
