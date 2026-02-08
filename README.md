# Claymorphism Portfolio (Astro + Tailwind + MDX)

Static portfolio site with Home, Blog, Gallery, and Contact pages, optimized for GitHub Pages subpath hosting.

## Requirements

- Node.js 18+
- npm

## Exact terminal commands

```bash
# create or clone the repository
git clone https://github.com/<username>/<repo>.git
cd <repo>

# install, run, and build
npm install
npm run dev
npm run build
```

## Local development

```bash
npm install
npm run dev
```

Open the local URL shown by Astro (usually `http://localhost:4321`).

## Build and preview

```bash
npm run build
npm run preview
```

## Deployment (GitHub Pages)

1. Push this repository to the `main` branch.
2. In GitHub: `Settings -> Pages -> Build and deployment -> Source: GitHub Actions`.
3. The workflow at `.github/workflows/deploy.yml` builds `dist/` and deploys automatically.

## Configuration for subpath hosting

Edit `astro.config.mjs`:

- `site`: set to `https://<username>.github.io` (default in repo: `https://username.github.io`)
- `base`: set to `/<repo>` (default in repo: `/repo`)

Example:

```js
site: 'https://janedoe.github.io',
base: '/portfolio-site'
```

These values are required so links and assets resolve at:

`https://<username>.github.io/<repo>/`
