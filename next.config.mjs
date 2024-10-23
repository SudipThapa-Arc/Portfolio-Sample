/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.mrfurem.com',
          port: '',
          pathname: '/products/**',  // This allows any image under the /products directory
        },
      ],
    },
  };
  
  export default nextConfig;
  