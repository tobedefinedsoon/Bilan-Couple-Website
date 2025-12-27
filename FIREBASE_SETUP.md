# Firebase Setup for Website

## Overview

This guide walks you through setting up Firebase Analytics for the Bilan Couple website.

**Prerequisites**:
- Firebase project already exists (`bilan-couple`)
- Access to Firebase Console
- Node.js and npm installed

---

## Step 1: Register Web App in Firebase Console

1. **Navigate to Firebase Console**:
   - URL: https://console.firebase.google.com/project/bilan-couple
   - Go to **Project Settings** (gear icon)

2. **Add Web App**:
   - Scroll to **"Your apps"** section
   - Click **"Add app"** → Select **Web** (</> icon)

3. **Configure Web App**:
   - **App nickname**: `Bilan Couple Website` (or any name)
   - **Firebase Hosting**: ❌ Not required (unless deploying to Firebase Hosting)
   - Click **"Register app"**

4. **Copy Firebase Configuration**:
   Firebase will display a config object like this:

   ```javascript
   const firebaseConfig = {
     apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
     authDomain: "bilan-couple.firebaseapp.com",
     projectId: "bilan-couple",
     storageBucket: "bilan-couple.firebasestorage.app",
     messagingSenderId: "496991294245",
     appId: "1:496991294245:web:XXXXXXXXXXXX",
     measurementId: "G-XXXXXXXXXX"
   };
   ```

   **Keep this window open** - you'll need these values in Step 2.

---

## Step 2: Configure Environment Variables

1. **Create `.env.local` file**:
   ```bash
   cd website
   cp .env.local.example .env.local
   ```

2. **Add Firebase Configuration**:
   Open `website/.env.local` and fill in the values from Step 1:

   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=bilan-couple.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=bilan-couple
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=bilan-couple.firebasestorage.app
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=496991294245
   NEXT_PUBLIC_FIREBASE_APP_ID=1:496991294245:web:XXXXXXXXXXXX
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

   **Important**:
   - ✅ Use `NEXT_PUBLIC_` prefix for all variables (required by Next.js)
   - ❌ Never commit `.env.local` to Git (it's in `.gitignore`)

3. **Restart Development Server**:
   ```bash
   npm run dev
   ```

---

## Step 3: Verify Analytics is Working

### Local Testing

1. **Open Website**: http://localhost:3000

2. **Open Browser Console** (F12 or Cmd+Option+J):
   - Look for Firebase initialization messages
   - Check for any errors

3. **Enable Debug Mode** (in browser console):
   ```javascript
   window.gtag('config', 'G-XXXXXXXXXX', { debug_mode: true });
   ```
   Replace `G-XXXXXXXXXX` with your actual `measurementId` from `.env.local`.

4. **Open Firebase DebugView**:
   - URL: https://console.firebase.google.com/project/bilan-couple/analytics/debugview
   - You should see events appear in real-time as you navigate the website

5. **Test Key Events**:
   - Navigate between pages → `page_view` event
   - Click App Store link → `app_store_click` event
   - Switch language → `language_change` event
   - Click contact email → `email_reveal` event

### Production Testing

1. **Deploy Website** (to Vercel, Netlify, etc.)

2. **Add Environment Variables** to hosting platform:
   - Copy all variables from `.env.local`
   - Add them to your hosting dashboard (Vercel → Settings → Environment Variables)

3. **Check Firebase Console** (after 24-48 hours):
   - Events: https://console.firebase.google.com/project/bilan-couple/analytics/events
   - Realtime: https://console.firebase.google.com/project/bilan-couple/analytics/realtime

---

## Step 4: Enable Google Analytics 4 (Optional)

Firebase Analytics automatically integrates with Google Analytics 4 (GA4) for advanced reporting.

1. **Link to GA4**:
   - Firebase Console → Analytics → Link to Google Analytics
   - Follow the prompts to create or link a GA4 property

2. **Benefits**:
   - Advanced funnel analysis
   - Custom reports and dashboards
   - Audience segmentation
   - Integration with Google Ads

---

## Troubleshooting

### "Analytics not initialized" Error

**Cause**: Environment variables not loaded

**Solution**:
1. Verify `.env.local` exists in `website/` directory
2. Check all variables have `NEXT_PUBLIC_` prefix
3. Restart dev server: `npm run dev`

### Events Not Appearing in DebugView

**Cause**: Debug mode not enabled or ad blocker active

**Solution**:
1. Enable debug mode: `window.gtag('config', 'G-XXX', { debug_mode: true })`
2. Disable ad blockers (uBlock Origin, AdBlock, etc.)
3. Try incognito/private browsing mode
4. Check browser console for errors

### "Firebase config is invalid" Error

**Cause**: Incorrect environment variables

**Solution**:
1. Double-check all values from Firebase Console
2. Ensure no extra spaces or quotes in `.env.local`
3. Verify `measurementId` starts with `G-`

### Events Delayed in Production

**Cause**: Normal Firebase behavior

**Solution**:
- DebugView shows real-time events (development only)
- Standard reports have 24-48 hour delay
- Use Realtime view for live production data

---

## Security Best Practices

### Environment Variables

✅ **Do**:
- Use `.env.local` for local development
- Add environment variables to hosting platform
- Keep `.env.local` out of Git (already in `.gitignore`)

❌ **Don't**:
- Commit API keys to Git
- Share `.env.local` publicly
- Hardcode credentials in source code

### Firebase Security Rules

Firebase Analytics doesn't use Security Rules, but ensure:
- Firestore rules are configured (if using Firestore)
- Authentication rules are set (if using Auth)

---

## Files Modified

**Created**:
- `website/lib/firebase.ts` - Firebase initialization
- `website/lib/analytics.ts` - Analytics tracking functions
- `website/components/AnalyticsProvider.tsx` - Analytics provider component
- `website/.env.local.example` - Environment variables template
- `website/ANALYTICS.md` - Analytics documentation
- `website/FIREBASE_SETUP.md` - This setup guide

**Modified**:
- `website/app/[locale]/layout.tsx` - Added AnalyticsProvider
- `website/components/Hero.tsx` - Added app store tracking
- `website/components/CTASection.tsx` - Added CTA tracking
- `website/components/Footer.tsx` - Added navigation tracking
- `website/components/Header.tsx` - Added navigation and language tracking
- `website/components/ObfuscatedEmail.tsx` - Added email reveal tracking

---

## Next Steps

1. ✅ Complete this setup guide
2. 🔄 Test analytics in local development
3. 🚀 Deploy website with environment variables
4. 📊 Monitor analytics in Firebase Console
5. 📈 Set up Google Analytics 4 (optional)
6. 🎯 Create custom reports and dashboards

---

## Resources

- **Firebase Console**: https://console.firebase.google.com/project/bilan-couple
- **Firebase Analytics Docs**: https://firebase.google.com/docs/analytics/get-started?platform=web
- **DebugView**: https://console.firebase.google.com/project/bilan-couple/analytics/debugview
- **Events Dashboard**: https://console.firebase.google.com/project/bilan-couple/analytics/events
- **Next.js Environment Variables**: https://nextjs.org/docs/basic-features/environment-variables

---

**Version**: 1.0
**Last Updated**: December 27, 2024
**Maintainer**: Bilan Couple Team
