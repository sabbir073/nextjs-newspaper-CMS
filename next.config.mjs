/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'd1uo68v5hl2ge5.cloudfront.net',
          },
        ],
      },
};

export default nextConfig;
