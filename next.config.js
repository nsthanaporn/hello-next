const nextConfig = {
  reactStictModel: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "robohash.org",
      },
    ],
    unoptimized: true,
  },
};
module.exports = nextConfig;
