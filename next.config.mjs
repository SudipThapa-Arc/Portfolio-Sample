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
      unoptimized: true
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(ico|png|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      });
      return config;
    }
  };
  
  export default nextConfig;
  