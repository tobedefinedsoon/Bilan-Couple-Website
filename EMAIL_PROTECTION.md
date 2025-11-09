# Email Protection Guide

## Overview

This website uses email obfuscation to protect `svendxs@gmail.com` from email harvesting bots and spam crawlers.

## How It Works

The `ObfuscatedEmail` component uses **Base64 encoding + client-side JavaScript** to hide email addresses from crawlers:

1. **Email is encoded** in Base64 format: `c3ZlbmR4c0BnbWFpbC5jb20=`
2. **Server renders placeholder** (`...`) in initial HTML - crawlers see nothing
3. **JavaScript decodes** email on client-side after page loads
4. **Users see normal email** with working mailto: link

## Benefits

✅ **Protects against basic web scrapers** - Email not in HTML source
✅ **Protects against crawler bots** - Requires JavaScript to decode
✅ **User-friendly** - Normal experience for real users
✅ **Maintains functionality** - mailto: links work perfectly
✅ **SEO-safe** - Google can still index the page

## Protected Locations

The email is currently obfuscated in:

- **Footer** (`components/Footer.tsx`) - Contact section
- **Privacy Policy** (`app/[locale]/privacy/PrivacyContent.tsx`):
  - Data Controller section
  - Your Rights - How to Exercise section
  - Children's Privacy section
  - Contact Us section

## Using the Component

### Basic Usage

```tsx
import ObfuscatedEmail from '@/components/ObfuscatedEmail';

<ObfuscatedEmail
  encoded="c3ZlbmR4c0BnbWFpbC5jb20="
  className="hover:underline"
/>
```

### Display Without mailto: Link

```tsx
<ObfuscatedEmail
  encoded="c3ZlbmR4c0BnbWFpbC5jb20="
  asLink={false}
  className="text-slate-700"
/>
```

### Encoding a New Email

To encode a different email address:

```javascript
// In browser console:
btoa("newemail@example.com")
// Returns: "bmV3ZW1haWxAZXhhbXBsZS5jb20="

// Or in Node.js:
Buffer.from("newemail@example.com").toString("base64")
```

## Limitations

⚠️ **Not foolproof** - Advanced bots with JavaScript execution can still harvest emails
⚠️ **Translation files** - Email still appears in `messages/en.json` and `messages/fr.json` (less critical as they're JS-loaded)

## Alternative Approaches (Not Implemented)

If you need stronger protection, consider:

1. **Contact Form** - Replace email with a form (no email exposure)
2. **CAPTCHA-protected reveal** - Require CAPTCHA before showing email
3. **Image-based email** - Display email as an image (accessibility issues)
4. **ROT13 encoding** - Additional obfuscation layer

## Testing

To verify protection works:

1. **View page source** (`Ctrl+U` or `Cmd+Option+U`) - Email should NOT appear in plain text
2. **Disable JavaScript** - Email should show as `...`
3. **Enable JavaScript** - Email should decode and display normally
4. **Click email link** - Should open your default email client

## Maintenance

When updating the contact email:

1. Encode the new email using `btoa()` or `Buffer.from().toString('base64')`
2. Replace `c3ZlbmR4c0BnbWFpbC5jb20=` with the new encoded value
3. Update all instances in:
   - `components/Footer.tsx`
   - `app/[locale]/privacy/PrivacyContent.tsx`
   - Translation files (optional, for fallback text)

## Resources

- Component: `website/components/ObfuscatedEmail.tsx`
- Email Protection Techniques: https://en.wikipedia.org/wiki/Address_munging
- Base64 Encoding: https://developer.mozilla.org/en-US/docs/Web/API/btoa
