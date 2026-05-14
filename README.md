# maisonette-9

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## GitHub Pages deployments

Each push to these branches builds the Vite app and publishes it to `gh-pages` in separate folders:

- `main` branch: `https://romakarmka.github.io/maisonette-9/main/`
- `develop` branch: `https://romakarmka.github.io/maisonette-9/develop/`

The deployment workflow is defined in `.github/workflows/deploy-branch-pages.yml`.
