/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
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
