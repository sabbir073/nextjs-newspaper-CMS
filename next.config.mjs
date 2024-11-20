/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'd1uo68v5hl2ge5.cloudfront.net' ,
          },
          {
            protocol: 'https',
            hostname: "firebasestorage.googleapis.com" ,
          },
          {
            protocol: 'https',
            hostname: "dainikdhaka24.com" ,
          },
        ],
      },
};

export default nextConfig;
