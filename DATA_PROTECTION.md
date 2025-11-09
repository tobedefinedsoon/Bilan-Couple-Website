# Personal Data Protection Guide

## Overview

This website uses **Base64 encoding + client-side JavaScript obfuscation** to protect personal information from web scrapers and spam crawlers.

### Protected Information

- **Email**: `svendxs@gmail.com`
- **Name**: `Sven Borden`
- **Address**: `Route d'Yverdon 34a, 1028 Préverenges, Suisse/Switzerland`

## How It Works

Both components (`ObfuscatedEmail` and `ObfuscatedText`) use the same protection mechanism:

1. **Data is encoded** in Base64 format
2. **Server renders placeholder** (`...`) in initial HTML - crawlers see nothing
3. **JavaScript decodes** on client-side after page loads
4. **Users see normal text** with full functionality

## Benefits

✅ **Protects against basic web scrapers** - No personal data in HTML source
✅ **Protects against crawler bots** - Requires JavaScript to decode
✅ **User-friendly** - Normal experience for real users
✅ **Maintains functionality** - mailto: links work perfectly
✅ **SEO-safe** - Google can still index the page content

## Protected Locations

### Footer (`components/Footer.tsx`)
- Email address (contact section)

### Privacy Policy (`app/[locale]/privacy/PrivacyContent.tsx`)
- **Data Controller section**: Name, physical address, email, DPO name
- **Your Rights section**: Email address
- **Children's Privacy section**: Email address
- **Contact Us section**: Email address, full address with name

## Components

### ObfuscatedEmail

For email addresses with automatic mailto: links.

```tsx
import ObfuscatedEmail from '@/components/ObfuscatedEmail';

<ObfuscatedEmail
  encoded="c3ZlbmR4c0BnbWFpbC5jb20="
  className="hover:underline"
/>
// Renders: <a href="mailto:svendxs@gmail.com">svendxs@gmail.com</a>
```

**Props:**
- `encoded` (required): Base64-encoded email address
- `className` (optional): CSS classes for styling
- `asLink` (optional): Show as mailto: link (default: true)

### ObfuscatedText

For any text content (names, addresses, etc.).

```tsx
import ObfuscatedText from '@/components/ObfuscatedText';

<ObfuscatedText
  encoded="U3ZlbiBCb3JkZW4="
  className="font-bold"
/>
// Renders: <span>Sven Borden</span>
```

**Props:**
- `encoded` (required): Base64-encoded text
- `className` (optional): CSS classes for styling
- `as` (optional): Render as "span" or "div" (default: "span")

## Encoded Values Reference

### Email
```
svendxs@gmail.com = c3ZlbmR4c0BnbWFpbC5jb20=
```

### Name
```
Sven Borden = U3ZlbiBCb3JkZW4=
```

### Addresses
```
Route d'Yverdon 34a, 1028 Préverenges, Suisse
= Um91dGUgZCdZdmVyZG9uIDM0YSwgMTAyOCBQcsOpdmVyZW5nZXMsIFN1aXNzZQ==

Route d'Yverdon 34a, 1028 Préverenges, Switzerland
= Um91dGUgZCdZdmVyZG9uIDM0YSwgMTAyOCBQcsOpdmVyZW5nZXMsIFN3aXR6ZXJsYW5k

Adresse : Sven Borden, Route d'Yverdon 34a, 1028 Préverenges, Suisse
= QWRyZXNzZSA6IFN2ZW4gQm9yZGVuLCBSb3V0ZSBkJ1l2ZXJkb24gMzRhLCAxMDI4IFByw6l2ZXJlbmdlcywgU3Vpc3Nl

Address: Sven Borden, Route d'Yverdon 34a, 1028 Préverenges, Switzerland
= QWRkcmVzczogU3ZlbiBCb3JkZW4sIFJvdXRlIGQnWXZlcmRvbiAzNGEsIDEwMjggUHLDqXZlcmVuZ2VzLCBTd2l0emVybGFuZA==
```

## Encoding New Values

### Browser Console
```javascript
btoa("Your text here")
// Example: btoa("John Doe") → "Sm9obiBEb2U="
```

### Node.js
```javascript
Buffer.from("Your text here").toString("base64")
// Example: Buffer.from("John Doe").toString("base64") → "Sm9obiBEb2U="
```

### Command Line
```bash
node -e "console.log(Buffer.from('Your text here').toString('base64'))"
```

## Usage Examples

### Multi-language Address (with locale detection)
```tsx
import { useLocale } from 'next-intl';
import ObfuscatedText from '@/components/ObfuscatedText';

export default function MyComponent() {
  const locale = useLocale();

  return (
    <ObfuscatedText
      encoded={
        locale === 'fr'
          ? 'Um91dGUgZCdZdmVyZG9uIDM0YSwgMTAyOCBQcsOpdmVyZW5nZXMsIFN1aXNzZQ=='
          : 'Um91dGUgZCdZdmVyZG9uIDM0YSwgMTAyOCBQcsOpdmVyZW5nZXMsIFN3aXR6ZXJsYW5k'
      }
    />
  );
}
```

### Mixed Text with Obfuscation
```tsx
<p>
  Data Protection Officer: {' '}
  <ObfuscatedText encoded="U3ZlbiBCb3JkZW4=" className="font-bold" />
</p>
```

### Email Without Link
```tsx
<ObfuscatedEmail
  encoded="c3ZlbmR4c0BnbWFpbC5jb20="
  asLink={false}
  className="text-slate-700"
/>
```

## Limitations

⚠️ **Not foolproof** - Advanced bots with JavaScript execution can still decode the data

⚠️ **Requires JavaScript** - Users with JavaScript disabled will see `...` placeholders

⚠️ **Translation files** - Data still appears in `messages/en.json` and `messages/fr.json` (but these are JS-loaded and less accessible to simple scrapers)

## Alternative Approaches (Not Implemented)

For stronger protection, consider:

1. **Contact Form** - Replace direct contact info with a form (no data exposure)
2. **CAPTCHA-protected reveal** - Require CAPTCHA before showing contact info
3. **Image-based display** - Display as images (accessibility issues)
4. **Server-side rendering with rate limiting** - Serve data only to legitimate users
5. **HTML Entity Encoding** - Simpler but weaker (e.g., `&#109;&#97;&#105;&#108;`)

## Testing Checklist

To verify protection works:

1. ✅ **View page source** (`Ctrl+U` or `Cmd+Option+U`)
   - Personal data should NOT appear in plain text
   - Should see Base64 strings like `c3ZlbmR4c0BnbWFpbC5jb20=`

2. ✅ **Disable JavaScript**
   - All protected fields should show `...` placeholders

3. ✅ **Enable JavaScript**
   - All data should decode and display normally

4. ✅ **Test functionality**
   - Email links should open mail client
   - Text should be selectable and copyable

5. ✅ **Test both locales**
   - `/en` and `/fr` routes should show correct language

## Maintenance

### Updating Email Address

1. Encode the new email:
   ```bash
   node -e "console.log(Buffer.from('newemail@example.com').toString('base64'))"
   ```

2. Replace `c3ZlbmR4c0BnbWFpbC5jb20=` in:
   - `components/Footer.tsx`
   - `app/[locale]/privacy/PrivacyContent.tsx` (4 locations)

### Updating Name

1. Encode the new name:
   ```bash
   node -e "console.log(Buffer.from('New Name').toString('base64'))"
   ```

2. Replace `U3ZlbiBCb3JkZW4=` in:
   - `app/[locale]/privacy/PrivacyContent.tsx` (2 locations)

### Updating Address

1. Encode both language versions:
   ```bash
   node -e "console.log('FR:', Buffer.from('Address FR').toString('base64')); console.log('EN:', Buffer.from('Address EN').toString('base64'));"
   ```

2. Replace in `app/[locale]/privacy/PrivacyContent.tsx`:
   - Data Controller section (both locales)
   - Contact section (both locales with full address)

3. Update the reference table in this document

## Files Reference

### Components
- `website/components/ObfuscatedEmail.tsx` - Email obfuscation component
- `website/components/ObfuscatedText.tsx` - Generic text obfuscation component

### Usage Locations
- `website/components/Footer.tsx` - Footer contact section
- `website/app/[locale]/privacy/PrivacyContent.tsx` - Privacy policy (multiple sections)

### Documentation
- `website/DATA_PROTECTION.md` - This file

## Resources

- Base64 Encoding: https://developer.mozilla.org/en-US/docs/Web/API/btoa
- Email Protection Techniques: https://en.wikipedia.org/wiki/Address_munging
- GDPR Compliance: https://gdpr.eu/
