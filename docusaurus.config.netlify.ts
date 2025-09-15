import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This configuration is for Netlify deployment at esy-guide.netlify.app
// It uses baseUrl: '/' instead of '/guide/'

const config: Config = {
  title: 'Esy Writing Guide',
  tagline: 'The Ultimate Essay Writing Guide',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // For Netlify deployment at root domain
  url: 'https://esy-guide.netlify.app',
  baseUrl: '/',
  trailingSlash: false,

  // Not using GitHub Pages; keep these neutral or set to your repo if you later use docusaurus deploy
  organizationName: 'esy',   // <- optional: your GitHub org/user
  projectName: 'guide',      // <- optional: your repo name

  onBrokenLinks: 'throw',
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

    navbar: {
      title: 'Guide',
      logo: {
        alt: 'Esy Logo',
        src: 'img/esy-logo.svg',
        href: '/',
      },
      items: [
        // Sidebar link to the guide root (uses the default docs sidebar id)
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar', // <- make sure this matches your sidebars.ts export
          position: 'left',
          label: 'Contents',
        },
        // Link back to main site surfaces (use absolute URLs so they don't inherit /guide/)
        { href: 'https://esy.com/school', label: 'School', position: 'left' },
        { href: 'https://esy.com/essays', label: 'Essays', position: 'left' },
        { href: 'https://esy.com/blog', label: 'Blog', position: 'left' },
        { href: 'https://app.esy.com', label: 'Open in Esy', position: 'right' },
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
            { label: 'App', href: 'https://app.esy.com' }
          ],
        },
        {
          title: 'Legal',
          items: [
            { label: 'Privacy', href: 'https://esy.com/privacy' },
            { label: 'Terms', href: 'https://esy.com/terms' }
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