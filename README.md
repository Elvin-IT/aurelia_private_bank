
# Run and deploy your AI Studio app

## Deploy to Vercel

[![Vercel Deploy](https://vercel.com/button)](https://vercel.com/new/project?template=git+https://github.com/Elvin-IT/aurelia_private_bank.git)

The site is automatically deployed on pushes to the `main` branch.

## CI/CD Status

[![CI](https://github.com/Elvin-IT/aurelia_private_bank/actions/workflows/deploy.yml/badge.svg)](https://github.com/Elvin-IT/aurelia_private_bank/actions/workflows/deploy.yml)

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/c2eac24b-3425-4364-b430-dc75505aa710

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
