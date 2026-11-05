#!/usr/bin/env sh

set -e

# build
npm run build

# navigate into the build output directory
cd dist

# GitHub Pages fallback so history-mode URLs survive a refresh
cp index.html 404.html

# deploy to GitHub Pages
git init
git add -A
git commit -m 'deploy'
git branch -M main
git remote add origin https://github.com/AndieTM98/Module11.git
git push -f origin main:gh-pages