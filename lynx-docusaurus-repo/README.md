# LYNX Onboarding Docs

This is a ready-to-deploy Docusaurus site built from your exported onboarding guide.

## What is included

- A branded homepage in a LYNX-style dark + gold theme
- Clean sidebar navigation by module
- Docs moved into GitHub-friendly filenames
- A lightweight SVG logo you can replace later with your official mark
- GitHub Pages-ready config

## Quick start

```bash
npm install
npm run start
```

## Build for production

```bash
$env:GIT_USER="YOUR USER NAME"
npm run build
```

## Deploy to GitHub Pages

Update these values in `docusaurus.config.ts` first:

- `url`
- `baseUrl`
- `organizationName`
- `projectName`

Then deploy:

```bash
npm run deploy
```

## Suggested repo name

`lynx-onboarding`

## Content editing

All content lives in the `docs/` folder.

- Module 1: `docs/module-1/`
- Module 2: `docs/module-2/`
- Module 3: `docs/module-3/`
- Module 4: `docs/module-4/`
- Module 5: `docs/module-5/`

## Notes

This repo uses Docusaurus 3.10.0 and follows the current official install and deployment flow.
