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

## Deploy on Vercel

The easiest way to deploy is to use the [Vercel Platform](https://vercel.com/new).

1. Push the code to GitHub
2. Import the project in Vercel
3. Set the root directory to `website`
4. Deploy
# Test change - Wed Nov  5 13:21:30 UTC 2025
