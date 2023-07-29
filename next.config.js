/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    imgbbApiKey: "de4dcd4e2348725816d3612462c58d93",
  },
  images: {
    remotePatterns: [
      {
        hostname: "i.ibb.co",
      },
    ],
  },
};

module.exports = nextConfig;
