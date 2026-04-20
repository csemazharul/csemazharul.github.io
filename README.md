# Md. Mazharul Islam — Portfolio (SvelteKit)

A simple portfolio built with **SvelteKit** + **Vite**, statically prerendered for GitHub Pages.

## Stack
- SvelteKit 2
- Svelte 5
- Vite 5
- `@sveltejs/adapter-static` (fully static output)

## Structure
```
sveltekit/
├── src/
│   ├── app.html          # HTML shell
│   ├── app.css           # Global styles
│   ├── lib/
│   │   ├── data.js       # Skills, projects, contact links
│   │   ├── Nav.svelte
│   │   ├── Hero.svelte
│   │   ├── Skills.svelte
│   │   ├── Projects.svelte
│   │   └── Contact.svelte
│   └── routes/
│       ├── +layout.svelte
│       ├── +layout.js
│       └── +page.svelte  # Main page
├── static/
│   ├── portrait.jpg
│   └── favicon.svg
├── svelte.config.js
├── vite.config.js
└── package.json
```

## Develop
```bash
cd sveltekit
npm install
npm run dev
```
Opens at http://localhost:5173

## Build (production)
```bash
npm run build
```
Output goes to `sveltekit/build/` — ready to deploy anywhere static.

## Deploy to GitHub Pages

### Option A — Automatic (GitHub Actions)
The workflow at `.github/workflows/deploy.yml` builds + deploys on every push to `main`.

1. In your repo Settings → Pages → **Source: GitHub Actions**
2. Push to `main` — it builds and deploys automatically
3. `BASE_PATH` is auto-set to `/<repo-name>` so asset URLs resolve correctly

### Option B — Manual
```bash
npm run build
# Copy sveltekit/build/* to the root of a `gh-pages` branch
# Or use `npx gh-pages -d build`
```
If deploying to `<user>.github.io/<repo>/`, build with:
```bash
BASE_PATH=/<repo> npm run build
```

## Edit content
All text lives in `src/lib/data.js` (skills, projects, contact links) and in the individual `.svelte` component files for the hero copy.
