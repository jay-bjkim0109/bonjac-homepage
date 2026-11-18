import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Empty on S3 (site at the domain root); "/<repo>" in the GitHub Pages build
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  // Static HTML export to ./out for S3 hosting
  output: "export",
  // Emit /about/index.html instead of /about.html so S3 can resolve routes
  trailingSlash: true,
  // No image optimization server on S3
  images: { unoptimized: true },
};

export default nextConfig;
