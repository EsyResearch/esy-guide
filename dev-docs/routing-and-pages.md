# Routing and Pages Structure

## Overview

This Docusaurus site is configured with the documentation as the main content at the root path (`/`). This is achieved by setting `routeBasePath: '/'` in the docs configuration.

## Current Configuration

```typescript
docs: {
  sidebarPath: './sidebars.ts',
  routeBasePath: '/', // Docs at the root
  homePageId: 'intro', // Set intro as homepage
},
```

## Route Structure

### Documentation Routes (Main Content)
- `/` - Introduction page (from `docs/intro.md`)
- `/tutorial-basics/*` - Tutorial sections
- `/tutorial-extras/*` - Additional tutorials
- Any other markdown files in `docs/` directory

### Why We Removed `src/pages/index.tsx`

The default Docusaurus setup includes a homepage at `src/pages/index.tsx` that renders at `/`. However, with our configuration:

1. **Route Conflict**: Both the docs (with `routeBasePath: '/'`) and the homepage want to render at `/`
2. **Duplicate Routes Error**: This causes the build to fail with "Duplicate routes found!"
3. **Purpose**: Since this is a documentation site (esy.com/guide), users expect to see documentation immediately, not a landing page

## Adding Additional Pages

You can still add custom pages in two ways:

### 1. As Part of Documentation
Simply add more `.md` or `.mdx` files to the `docs/` directory:
```
docs/
  ├── intro.md
  ├── getting-started.md
  ├── advanced-topics.md
  └── api-reference.md
```

### 2. As Standalone Pages
Create pages in `src/pages/` with specific routes (not `index.tsx`):

```
src/pages/
  ├── about.tsx      → renders at /about
  ├── pricing.tsx    → renders at /pricing
  └── contact.tsx    → renders at /contact
```

Example standalone page:
```tsx
// src/pages/about.tsx
import React from 'react';
import Layout from '@theme/Layout';

export default function About() {
  return (
    <Layout title="About">
      <div className="container margin-vert--lg">
        <h1>About Us</h1>
        <p>Custom page content here...</p>
      </div>
    </Layout>
  );
}
```

## Deployment Configurations

We have three different configurations:

1. **Production** (`docusaurus.config.ts`): For direct GitHub Pages deployment with `baseUrl: '/guide/'`
2. **Netlify Direct** (`docusaurus.config.netlify.ts`): For esy-guide.netlify.app with `baseUrl: '/'`
3. **Proxy** (`docusaurus.config.proxy.ts`): For esy.com/guide proxy with `baseUrl: '/'`

The proxy configuration is currently used for the Netlify deployment that gets proxied through esy.com/guide.