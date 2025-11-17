# Bilan Couple - Marketing Website

A bilingual (French/English) Next.js marketing website for the Bilan Couple app.

## Features

- 🌍 **Bilingual**: Full support for French (primary) and English
- 🎨 **Brand Colors**: Uses the official Bilan Couple color palette (Raspberry, Teal, Lavender)
- 📱 **Responsive**: Mobile-first design that works on all devices
- ⚡ **Fast**: Built with Next.js 14+ and Tailwind CSS v4
- 🔄 **Real-time Language Switching**: Switch between languages without page reload

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Internationalization**: next-intl
- **Deployment**: Ready for Vercel

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

The website will be available at:
- French: http://localhost:3000/fr
- English: http://localhost:3000/en

## Brand Colors

The website uses the official Bilan Couple color palette:

- **Raspberry** (#D13C6A): Primary CTAs, highlights
- **Teal** (#0F766E): Secondary actions, supportive UI
- **Lavender** (#6750A4): Headers, reflective moments

## App Store Links

Currently, the download buttons have placeholder links (`#`). Update these in:
- `components/Hero.tsx`
- `components/CTASection.tsx`

Replace `href="#"` with actual App Store and Google Play URLs when available.

## Repository Structure

This website is automatically synced from the main [Bilan-Couple](https://github.com/tobedefinedsoon/Bilan-Couple) repository.

### Automated Sync Workflow

Changes to the `website/` folder in the main repository automatically:
1. Sync to this repository's `develop` branch
2. Create a pull request to `main`
3. Once reviewed and merged, trigger deployment

**To make changes:**
1. Edit files in the `website/` folder of the main repository
2. Push to the `main` branch
3. The GitHub Action will create a PR in this repository
4. Review and merge the PR to deploy

## Deploy on Vercel

The easiest way to deploy is to use the [Vercel Platform](https://vercel.com/new).

1. Import this repository in Vercel
2. Set the root directory to `/` (repository root)
3. Configure auto-deploy on `main` branch
4. Deploy

The website will automatically redeploy when PRs are merged to `main`.
