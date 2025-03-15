/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  
  // Optimize bundle size
  swcMinify: true,
  
  // Configure compiler options for smaller bundles
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Optimize production builds
  experimental: {
    // Use critters for CSS optimization
    optimizeCss: {
      inlineThreshold: 3 * 1024, // 3kb
    },
    optimizePackageImports: [
      'framer-motion',
      'react-icons',
      'lucide-react',
      'react-markdown',
      'react-syntax-highlighter',
    ],
  },
};

export default nextConfig;
