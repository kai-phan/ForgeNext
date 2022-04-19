/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      src: path.resolve(__dirname, 'src'),
    };

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
};

module.exports = nextConfig;
