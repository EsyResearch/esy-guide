import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Esy Writing Guide',
  tagline: 'The Ultimate Essay Writing Guide',
  favicon: 'favicon.ico',
  
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'apple-touch-icon.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: 'favicon-32x32.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: 'favicon-16x16.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'manifest',
        href: 'manifest.json',
      },
    },
  ],

  future: {
    v4: true,
  },

  // Canonical site + base path for subdirectory hosting
  url: 'https://esy.com',
  baseUrl: '/guide/',
  trailingSlash: false,

  // Not using GitHub Pages; keep these neutral or set to your repo if you later use docusaurus deploy
  organizationName: 'esy',   // <- optional: your GitHub org/user
  projectName: 'guide',      // <- optional: your repo name

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        // Put the "book" (docs) at the root of this app so it renders under /guide in prod
        docs: {
          routeBasePath: '/',                          // docs live at / (prefixed by baseUrl=/guide/)
          sidebarPath: require.resolve('./sidebars.ts'),
          breadcrumbs: true,
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
          remarkPlugins: [],
          rehypePlugins: [],
        },

        // This project is a single evergreen reference (no blog/pages)
        blog: false,
        pages: false,

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg', // replace with your social card when ready
    
    metadata: [
      {name: 'msapplication-TileColor', content: '#8b5cf6'},
      {name: 'theme-color', content: '#8b5cf6'},
    ],

    navbar: {
      title: 'Essay Guide',
      logo: {
        alt: 'Esy Logo',
        src: 'img/esy-logo.svg',
        href: '/',
      },
      items: [
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guide',
          items: [
            // If your first doc id is 'intro' or 'start-here', update the path to match
            { label: 'Start Here', to: '/' }
          ],
        },
        {
          title: 'Esy',
          items: [
            { label: 'School', href: 'https://esy.com/school' },
            { label: 'Essays', href: 'https://esy.com/essays' },
            { label: 'Blog', href: 'https://esy.com/blog' },
            { label: 'App', href: 'https://app.esy.com' },
          ],
        },
        {
          title: 'Legal',
          items: [
            { label: 'Privacy', href: 'https://esy.com/privacy' },
            { label: 'Terms', href: 'https://esy.com/terms' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Esy.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;