# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages at https://abhijnya002.github.io/

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. Node.js and npm installed

## Step-by-Step Deployment Instructions

### Step 1: Initialize Git Repository (if not already done)

```bash
cd /Users/abhijnyakg/Desktop/Porfolio_Latest
git init
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install `gh-pages` package which is needed for deployment.

### Step 3: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `abhijnya002.github.io` (must match your GitHub username)
3. Make it **Public**
4. **DO NOT** initialize with README, .gitignore, or license
5. Click "Create repository"

### Step 4: Add Remote and Push Code

```bash
# Add all files
git add .

# Commit the files
git commit -m "Initial commit - Portfolio website"

# Add your GitHub repository as remote (replace YOUR_USERNAME if different)
git remote add origin https://github.com/abhijnya002/abhijnya002.github.io.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 5: Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. Build your React app (`npm run build`)
2. Deploy the `build` folder to the `gh-pages` branch
3. Make your site live at https://abhijnya002.github.io/

### Step 6: Enable GitHub Pages (if needed)

1. Go to your repository: https://github.com/abhijnya002/abhijnya002.github.io
2. Click **Settings** tab
3. Scroll down to **Pages** section (in left sidebar)
4. Under "Source", select **Deploy from a branch**
5. Select branch: **gh-pages**
6. Select folder: **/ (root)**
7. Click **Save**

Your site should be live within a few minutes at: **https://abhijnya002.github.io/**

## Updating Your Site

Whenever you make changes and want to update the live site:

```bash
# Make your changes, then:
git add .
git commit -m "Your commit message"
git push

# Then deploy:
npm run deploy
```

## Troubleshooting

1. **Site not loading**: Wait 5-10 minutes after deployment. GitHub Pages can take time to update.

2. **404 errors on routes**: This is normal for React Router. The site should work from the homepage.

3. **Build errors**: Run `npm run build` locally first to check for errors before deploying.

4. **Images not loading**: Make sure all images are in the `public` folder and use `process.env.PUBLIC_URL` in code.

## Notes

- The `gh-pages` branch will be created automatically by the deployment script
- Your source code stays on the `main` branch
- The built site is deployed to the `gh-pages` branch
- GitHub Pages serves content from the `gh-pages` branch

