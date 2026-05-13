/** @type {import('next').NextConfig} */
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'

const nextConfig = {
  output: 'export',
  basePath: isGitHubActions ? '/THEBEAUTEBUNGALOW' : '',
  assetPrefix: isGitHubActions ? '/THEBEAUTEBUNGALOW/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
