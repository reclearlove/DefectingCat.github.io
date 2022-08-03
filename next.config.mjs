import remarkFrontmatter from 'remark-frontmatter';
import mdx from '@next/mdx';
import rehypePrism from '@mapbox/rehype-prism';
import composePlugins from 'next-compose-plugins';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
// import { remarkCodeHike } from '@code-hike/mdx';
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// const theme = require('shiki/themes/nord.json');

const composedConfig = composePlugins([
  mdx({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [remarkFrontmatter, remarkGfm],
      rehypePlugins: [
        [rehypePrism, { alias: { vue: 'xml' }, ignoreMissing: true }],
        rehypeSlug,
      ],
      providerImportSource: '@mdx-js/react',
    },
  }),
  /** @type {import('next').NextConfig} */
  {
    reactStrictMode: true,
    output: 'standalone',
    experimental: {
      // runtime: 'nodejs',
      // outputStandalone: true,
    },
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    images: { domains: ['avatars.githubusercontent.com'] },
  },
]);

export default composedConfig;
