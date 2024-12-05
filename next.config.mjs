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
      async headers() {
        return [
          // Cache only /api/public/*
          {
            source: "/api/public/:path*",
            headers: process.env.NODE_ENV === "development"
              ? [
                  {
                    key: "Cache-Control",
                    value: "no-store", // Disable caching in development
                  },
                ]
              : [
                  {
                    key: "Cache-Control",
                    value: "s-maxage=3600, stale-while-revalidate=59", // Cache for production
                  },
                ],
          },
        ];
      },
};

export default nextConfig;
