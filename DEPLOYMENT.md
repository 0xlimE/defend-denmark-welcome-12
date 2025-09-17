# GitHub Pages Deployment Setup

This project is now configured for automatic deployment to GitHub Pages using GitHub Actions.

## What's been configured:

### 1. GitHub Actions Workflow
- Created `.github/workflows/deploy.yml`
- Automatically builds and deploys on pushes to `main` branch
- Uses the latest GitHub Pages deployment actions

### 2. Package.json Updates
- Added homepage URL: `https://emilhorning.github.io/defend-denmark-welcome-12`
- Added deployment scripts for manual deployment option
- Project name updated to `defend-denmark-welcome`

### 3. Vite Configuration
- Added base path: `/defend-denmark-welcome-12/`
- This ensures all assets load correctly on GitHub Pages

### 4. Routing Fix
- Fixed external Microsoft Forms link to use `<a>` tag instead of React Router `Link`
- Added 404.html for client-side routing support

## To deploy:

### Option 1: Automatic (Recommended)
1. Push your code to GitHub
2. GitHub Actions will automatically build and deploy
3. Site will be available at: `https://emilhorning.github.io/defend-denmark-welcome-12`

### Option 2: Manual
```bash
npm run deploy
```

## GitHub Repository Settings:
1. Go to repository Settings → Pages
2. Source: Deploy from a branch
3. Branch: gh-pages (will be created automatically)
4. Folder: / (root)

## Important Notes:
- The site will be available at the URL specified in package.json homepage
- First deployment may take a few minutes
- Subsequent deployments are automatic on push to main
- All assets and routing should work correctly with the configured base path

## Build Status:
✅ Build test successful - ready for deployment!
