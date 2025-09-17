# GitHub Pages Deployment Setup (Project Site with Custom Domain)

This project is configured for deployment as a **GitHub Pages project site** with a custom domain `defenddenmark.dk`.

## What's been configured:

### 1. GitHub Actions Workflow
- Created `.github/workflows/deploy.yml`
- Automatically builds and deploys on pushes to `main` branch
- Uses the latest GitHub Pages deployment actions

### 2. Package.json Updates
- Added homepage URL: `https://defenddenmark.dk`
- Added deployment scripts for manual deployment option
- Project name updated to `defend-denmark-welcome`

### 3. Vite Configuration
- Base path set to `/` for custom domain deployment
- This ensures all assets load correctly at the custom domain

### 4. Custom Domain Setup
- Added `CNAME` file with `defenddenmark.dk`
- This tells GitHub Pages to serve the site from your custom domain

### 5. Routing Fix
- Fixed external Microsoft Forms link to use `<a>` tag instead of React Router `Link`
- Added 404.html for client-side routing support

## DNS Configuration Required:

### For defenddenmark.dk:
```
Type: CNAME
Name: @
Value: 0xlime.github.io
```

### For www.defenddenmark.dk:
```
Type: CNAME  
Name: www
Value: 0xlime.github.io
```

**Important**: Do NOT use A records for the custom domain - use CNAME records pointing to your main GitHub Pages domain (`0xlime.github.io`).

## To deploy:

### Option 1: Automatic (Recommended)
1. Push your code to GitHub
2. GitHub Actions will automatically build and deploy
3. Site will be available at: `https://defenddenmark.dk`

### Option 2: Manual
```bash
npm run deploy
```

## GitHub Repository Settings:
1. Go to **this repository's** Settings → Pages
2. Source: Deploy from a branch
3. Branch: gh-pages (will be created automatically)
4. Custom domain: `defenddenmark.dk`
5. Enforce HTTPS: ✓ (check this box)

## Project Structure:
- **Main site**: `blog.r4.dk` (from 0xlime.github.io repository)
- **This project**: `defenddenmark.dk` (from defend-denmark-welcome-12 repository)

## Important Notes:
- This is a PROJECT site, not your main GitHub Pages site
- The custom domain `defenddenmark.dk` will point to this specific project
- Your main site `blog.r4.dk` remains unchanged
- DNS should use CNAME records, not A records
- First deployment may take a few minutes
- SSL certificate will be automatically provisioned by GitHub

## Build Status:
✅ Build test successful - ready for deployment!
