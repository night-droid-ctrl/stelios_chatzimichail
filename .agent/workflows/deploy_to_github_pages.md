---
description: How to deploy the academic website to GitHub Pages
---

# Deploying to GitHub Pages

This guide assumes you have a GitHub account.

1.  **Create a New Repository on GitHub**
    *   Go to GitHub.com and create a new public repository (e.g., named `stelios_intro` or `academic-profile`).
    *   Do **not** initialize it with a README, .gitignore, or license (we already have these).

2.  **Configure Vite**
    *   Open `vite.config.js`.
    *   Add the `base` property with your repository name:
        ```javascript
        export default defineConfig({
          plugins: [react()],
          base: '/<YOUR-REPO-NAME>/', // e.g. '/stelios_intro/'
        })
        ```

3.  **Install Deployment Tool**
    *   Run this command to install the `gh-pages` helper:
        ```bash
        npm install gh-pages --save-dev
        ```

4.  **Update package.json**
    *   Add these two scripts to the `"scripts"` section in `package.json`:
        ```json
        "predeploy": "npm run build",
        "deploy": "gh-pages -d dist"
        ```

5.  **Push to GitHub**
    *   Initialize git (if not already done): `git init`
    *   Add your files: `git add .`
    *   Commit: `git commit -m "Initial commit"`
    *   Link your local repo to GitHub (replace URL with yours):
        ```bash
        git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
        git branch -M main
        git push -u origin main
        ```

6.  **Deploy**
    *   Run the deploy script:
        ```bash
        npm run deploy
        ```

7.  **View Your Site**
    *   Your site will be live at `https://<YOUR-USERNAME>.github.io/<YOUR-REPO-NAME>/`.
