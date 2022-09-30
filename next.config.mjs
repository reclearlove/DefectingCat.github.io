/**
 * @type {import('next').NextConfig}
 */
const isExport = process.env.NEXT_BUILD === 'export';
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  images: isExport ? { unoptimized: true } : {},
  experimental: {
    // runtime: 'nodejs',
    // outputStandalone: true,
  },
  compiler: {
    removeConsole: true,
  },
  // assetPrefix: isExport ? './' : undefined,
  // images:
  //   process.env.NEXT_BUILD === 'export'
  //     ? {
  //         loader: 'imgix',
  //         path: 'https://rua.plus/',
  //       }
  //     : {},
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

export default nextConfig;
