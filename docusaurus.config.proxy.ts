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

  // For proxy deployment through esy.com/guide
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
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Docs at the root
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'The Essay Writing Guide',
      logo: {
        alt: 'Esy Logo',
        src: 'img/esy-logo.svg',
        href: '/',
      },
      items: [],
    },
    footer: {
      links: [
        {
          title: 'Explore',
          items: [
            {
              label: 'Essays',
              href: 'https://esy.com/essays',
            },
            {
              label: 'AI Writing Tools',
              href: 'https://esy.com/ai-writing-tools',
            },
            {
              label: 'Writing Prompts',
              href: 'https://esy.com/prompts',
            },
          ],
        },
        {
          title: 'Learn',
          items: [
            {
              label: 'School',
              href: 'https://esy.com/school',
            },
            {
              label: 'Glossary',
              href: 'https://esy.com/glossary',
            },
            {
              label: 'How to Write',
              href: 'https://esy.com/how-to-write',
            },
            {
              label: 'Guide',
              href: 'https://esy.com/guide',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'AI Essay Writer',
              href: 'https://esy.com/ai-essay-writer',
            },
            {
              label: 'Agentic Workflows',
              href: 'https://esy.com/agentic-workflows',
            },
            {
              label: 'Extended School Year',
              href: 'https://esy.com/extended-school-year',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'About Us',
              href: 'https://esy.com/about',
            },
            {
              label: 'Contact',
              href: 'https://esy.com/contact',
            },
            {
              label: 'Privacy',
              href: 'https://esy.com/privacy',
            },
            {
              label: 'Cookies',
              href: 'https://esy.com/cookies',
            },
            {
              label: 'Terms',
              href: 'https://esy.com/terms',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Esy, LLC. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;