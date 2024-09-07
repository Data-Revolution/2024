/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.awdcomp.net',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
