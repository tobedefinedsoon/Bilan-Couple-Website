# Website Analytics Documentation

## Overview

This document describes the Firebase Analytics implementation for the Bilan Couple marketing website. Analytics tracking follows the same privacy-first principles as the mobile apps.

**Technology**: Firebase Analytics for Web (v10+)
**Implementation**: Next.js 16 App Router with TypeScript
**Privacy**: GDPR compliant, no personal data logged

---

## Privacy Rules (CRITICAL)

### What We Track

✅ **Allowed**:
- Page views and navigation paths
- Button clicks and CTA interactions
- App store link clicks
- Language preferences
- Email reveal interactions (contact)
- Section visibility (scroll depth)

❌ **Never Track**:
- Personal information (names, emails, phone numbers)
- User-generated content
- IP addresses or precise geolocation
- Any data that can identify individuals

### GDPR Compliance

- Analytics is **enabled by default** (implied consent through website use)
- Users can opt out via browser "Do Not Track" settings
- No cookies are required for Firebase Analytics (uses localStorage)
- Data retention: 14 months (Firebase default)

---

## Event Catalog

### Page Tracking

#### `page_view`
**When**: Automatically on every page navigation
**Purpose**: Track user journey through the website
**Parameters**:
- `page_path` (string): URL path (e.g., `/fr`, `/en/privacy`)
- `page_title` (string): Document title
- `locale` (string): Current language (`fr` or `en`)

**Example**:
```typescript
trackPageView('/fr', 'fr');
// Logs: page_view { page_path: '/fr', page_title: 'Bilan Couple - ...', locale: 'fr' }
```

---

### User Actions

#### `cta_click`
**When**: User clicks a CTA button
**Purpose**: Measure conversion funnel effectiveness
**Parameters**:
- `cta_type` (string): Location of CTA (`hero` | `footer` | `cta_section`)
- `platform` (string): Target platform (`ios` | `android` | `both`)
- `locale` (string): Current language

**Example**:
```typescript
trackCTAClick('hero', 'ios', 'fr');
```

#### `app_store_click`
**When**: User clicks App Store or Google Play link
**Purpose**: Track conversion to app downloads
**Parameters**:
- `store` (string): Store type (`app_store` | `play_store`)
- `source` (string): Click source (`hero` | `footer` | `cta_section`)
- `locale` (string): Current language

**Example**:
```typescript
trackAppStoreClick('app_store', 'hero', 'en');
```

#### `navigation_click`
**When**: User clicks navigation links
**Purpose**: Understand user navigation patterns
**Parameters**:
- `destination` (string): Target page (`home` | `privacy`)
- `source` (string): Click source (`header` | `footer` | `inline`)
- `locale` (string): Current language

**Example**:
```typescript
trackNavigation('privacy', 'footer', 'fr');
```

#### `email_reveal`
**When**: User clicks obfuscated email (contact)
**Purpose**: Track contact interest
**Parameters**:
- `locale` (string): Current language

**Example**:
```typescript
trackEmailReveal('en');
```

#### `faq_click`
**When**: User expands FAQ item
**Purpose**: Identify most common questions
**Parameters**:
- `question_id` (string): Unique question identifier
- `locale` (string): Current language

**Example**:
```typescript
trackFAQClick('q1-what-is-bilan-couple', 'fr');
```

#### `language_change`
**When**: User switches website language
**Purpose**: Track language preferences
**Parameters**:
- `from_locale` (string): Previous language
- `to_locale` (string): New language

**Example**:
```typescript
trackLanguageChange('fr', 'en');
```

---

### Engagement Metrics

#### `section_view`
**When**: User scrolls to a section (Intersection Observer)
**Purpose**: Measure content engagement
**Parameters**:
- `section` (string): Section name (`hero` | `process` | `features` | `why` | `testimonials` | `faq` | `cta`)
- `locale` (string): Current language

**Example**:
```typescript
trackSectionView('features', 'fr');
```

#### `external_link_click`
**When**: User clicks external link
**Purpose**: Track outbound traffic
**Parameters**:
- `url` (string): Destination URL
- `link_type` (string): Link category (`privacy` | `social` | `other`)
- `locale` (string): Current language

**Example**:
```typescript
trackExternalLink('https://example.com', 'social', 'en');
```

---

## Implementation Guide

### Setup

1. **Install Firebase SDK**:
```bash
cd website
npm install firebase
```

2. **Configure Firebase** (`.env.local`):
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=bilan-couple.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=bilan-couple
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=bilan-couple.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=496991294245
NEXT_PUBLIC_FIREBASE_APP_ID=your_web_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

3. **Add AnalyticsProvider to layout** (`app/[locale]/layout.tsx`):
```tsx
import { AnalyticsProvider } from '@/components/AnalyticsProvider';

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body>
        <AnalyticsProvider locale={locale}>
          {children}
        </AnalyticsProvider>
      </body>
    </html>
  );
}
```

### Usage in Components

```typescript
import { trackAppStoreClick } from '@/lib/analytics';

export default function Hero() {
  const locale = useLocale();

  return (
    <a
      href="https://apps.apple.com/..."
      onClick={() => trackAppStoreClick('app_store', 'hero', locale)}
    >
      Download
    </a>
  );
}
```

---

## Testing Analytics

### Development Testing

1. **Enable Debug Mode**:
```bash
# Open browser console and run:
window.gtag('config', 'G-XXXXXXXXXX', { debug_mode: true });
```

2. **Use DebugView** in Firebase Console:
- Navigate to: https://console.firebase.google.com/project/bilan-couple/analytics/debugview
- Events appear in real-time

### Production Verification

1. **Firebase Console**: https://console.firebase.google.com/project/bilan-couple/analytics/events
2. **Google Analytics 4**: Link Firebase to GA4 for advanced reporting

---

## Key Files

**Core Files**:
- `website/lib/firebase.ts` - Firebase initialization
- `website/lib/analytics.ts` - Analytics tracking functions
- `website/components/AnalyticsProvider.tsx` - Analytics context provider

**Components with Tracking**:
- `website/components/Hero.tsx` - App store clicks
- `website/components/CTASection.tsx` - CTA button clicks
- `website/components/Footer.tsx` - Navigation clicks
- `website/components/Header.tsx` - Navigation, language switching
- `website/components/ObfuscatedEmail.tsx` - Email reveal tracking

**Configuration**:
- `website/.env.local` - Firebase credentials (gitignored)
- `website/.env.local.example` - Template for credentials

---

## Analytics Metrics to Monitor

### Conversion Funnel
1. Page views (entry point)
2. Section views (engagement depth)
3. CTA clicks (intent to download)
4. App store clicks (conversion)

### Key Questions
- Which sections drive the most CTA clicks?
- What's the conversion rate from page view to app store click?
- Do users prefer iOS or Android?
- Which language has better engagement?
- Which FAQ questions are most popular?

### Performance Indicators
- **Bounce rate**: Users who leave without scrolling
- **Scroll depth**: % of users reaching each section
- **Time on page**: Engagement duration
- **Conversion rate**: CTA clicks / Page views

---

## Privacy Compliance Checklist

✅ **Required**:
- [x] No personal data in events
- [x] No user-identifiable information
- [x] GDPR-compliant data retention
- [x] Privacy policy mentions analytics
- [x] Environment variables for credentials

❌ **Forbidden**:
- [ ] Tracking without consent (we use implied consent)
- [ ] Logging email addresses, names, or personal info
- [ ] Tracking across domains (single-domain only)
- [ ] Storing sensitive data in Firebase

---

## Future Enhancements

### Potential Additions
1. **Scroll Depth Tracking**: Measure how far users scroll on each page
2. **Video Tracking**: If demo videos are added
3. **Form Tracking**: If lead capture forms are added
4. **A/B Testing**: Test different CTAs or hero messages
5. **Heatmaps**: Visual engagement tracking (external service)

### Analytics Integrations
- Google Analytics 4 (GA4) for advanced reporting
- Google Tag Manager (GTM) for tag management
- Conversion tracking for paid advertising

---

## Troubleshooting

### Events Not Appearing

1. **Check Firebase Configuration**:
   - Verify `.env.local` has correct values
   - Ensure `NEXT_PUBLIC_` prefix on all variables
   - Restart dev server after changing env vars

2. **Check Browser Console**:
   - Look for Firebase errors
   - Verify `getFirebaseAnalytics()` returns non-null

3. **Verify Debug Mode**:
   - Use Firebase DebugView in Console
   - Enable debug mode: `window.gtag('config', 'G-XXX', { debug_mode: true })`

### Common Issues

**Issue**: "Analytics not supported"
**Solution**: Check browser privacy settings, ad blockers, or incognito mode

**Issue**: Events delayed in Firebase Console
**Solution**: Normal - events can take 24-48 hours to appear in standard reports (use DebugView for real-time)

**Issue**: `window is undefined` error
**Solution**: Ensure analytics only runs client-side (use `'use client'` directive)

---

**Version**: 1.0
**Last Updated**: December 27, 2024
**Status**: Complete ✅
