/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
}

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|mov|mp4)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};
// module.exports = nextConfig
