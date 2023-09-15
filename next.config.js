/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.devdojo.com',
            port: '',
            
          },
        ],
      },
       
};

module.exports = nextConfig;
