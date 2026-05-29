/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  trailingSlash: true,
  images: {
    loader: 'custom',
    loaderFile: './src/lib/imageLoader.ts',
  },
}

module.exports = nextConfig
