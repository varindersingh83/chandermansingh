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

- `site`: set to `https://<username>.github.io` (for this repo: `https://varindersingh83.github.io`)
- `base`: set to `/<repo>` (for this repo: `/chandermansingh`)

Example:

```js
site: 'https://varindersingh83.github.io',
base: '/chandermansingh'
```

These values are required so links and assets resolve at:

`https://varindersingh83.github.io/chandermansingh/`
