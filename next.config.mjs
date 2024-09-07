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
  // output: "export", // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
