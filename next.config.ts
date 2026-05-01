import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* Explicitly set the root directory for Turbopack to silence warnings */
  // @ts-ignore
  turbopack: {
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;
