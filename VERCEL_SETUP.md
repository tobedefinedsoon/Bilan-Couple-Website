# Vercel Deployment Setup

## Adding Environment Variables to Vercel

Since the website is deployed on Vercel, you need to add the Firebase environment variables to your Vercel project.

### Step 1: Access Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your **Bilan Couple** project
3. Navigate to **Settings** → **Environment Variables**

### Step 2: Add Environment Variables

Add these **7 environment variables** one by one:

| Variable Name | Value |
|--------------|-------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | `AIzaSyBEkjZOU-2_MuxszZGE24XH2ZVdVzJBSco` |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | `bilan-couple.firebaseapp.com` |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | `bilan-couple` |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | `bilan-couple.firebasestorage.app` |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | `496991294245` |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | `1:496991294245:web:885e9b241d300c2e6440cc` |
| `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID` | `G-4MXJYQQMZL` |

**For each variable**:
1. Click **"Add New"**
2. Enter the **Name** (e.g., `NEXT_PUBLIC_FIREBASE_API_KEY`)
3. Enter the **Value** (e.g., `AIzaSyBEkjZOU-2_MuxszZGE24XH2ZVdVzJBSco`)
4. Select environments: ✅ **Production**, ✅ **Preview**, ✅ **Development**
5. Click **"Save"**

### Step 3: Redeploy

After adding all variables:

1. Go to **Deployments** tab
2. Click **"..."** on the latest deployment
3. Click **"Redeploy"** → **"Redeploy with existing Build Cache"**

Alternatively, push a new commit to trigger automatic redeployment.

---

## Quick Copy-Paste Method

If you prefer, you can use Vercel CLI to add all variables at once:

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Login to Vercel
vercel login

# Link to your project (run in website/ directory)
cd website
vercel link

# Add all environment variables
vercel env add NEXT_PUBLIC_FIREBASE_API_KEY
# When prompted, paste: AIzaSyBEkjZOU-2_MuxszZGE24XH2ZVdVzJBSco
# Select: Production, Preview, Development

vercel env add NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
# Paste: bilan-couple.firebaseapp.com

vercel env add NEXT_PUBLIC_FIREBASE_PROJECT_ID
# Paste: bilan-couple

vercel env add NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
# Paste: bilan-couple.firebasestorage.app

vercel env add NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
# Paste: 496991294245

vercel env add NEXT_PUBLIC_FIREBASE_APP_ID
# Paste: 1:496991294245:web:885e9b241d300c2e6440cc

vercel env add NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
# Paste: G-4MXJYQQMZL

# Redeploy
vercel --prod
```

---

## Verification

### 1. Check Build Logs

After redeployment, check the build logs to ensure no Firebase errors:
- Vercel Dashboard → Deployments → Click on latest deployment → View Function Logs

### 2. Test Production Analytics

1. Visit your production website
2. Open browser console (F12)
3. Enable debug mode:
   ```javascript
   window.gtag('config', 'G-4MXJYQQMZL', { debug_mode: true });
   ```
4. Navigate and interact with the site
5. Check [Firebase DebugView](https://console.firebase.google.com/project/bilan-couple/analytics/debugview)

### 3. Monitor Events (After 24-48 Hours)

Production events appear in Firebase Console after a delay:
- [Events Dashboard](https://console.firebase.google.com/project/bilan-couple/analytics/events)
- [Realtime View](https://console.firebase.google.com/project/bilan-couple/analytics/realtime)

---

## Important Notes

### Security

#### About the "NEXT_PUBLIC_FIREBASE_API_KEY" Warning ⚠️

**Vercel will show a warning**: *"This key might expose sensitive information to the browser"*

**This warning is SAFE TO IGNORE for Firebase web config.** Here's why:

✅ **Firebase web API keys are NOT secret keys**:
- They're **client identifiers** designed to be publicly visible
- Every Firebase web app exposes them in browser source code
- Security is enforced by **Firebase Security Rules**, not by hiding the API key
- The API key just identifies which Firebase project to connect to

**Official Firebase Documentation** ([source](https://firebase.google.com/docs/projects/api-keys)):
> *"Unlike how API keys are typically used, API keys for Firebase services are not used to control access to backend resources; that can only be done with Firebase Security Rules."*

> *"Usually, you need to fastidiously guard API keys; but API keys for Firebase services are OK to include in code or checked-in config files."*

#### What IS Safe to Expose

✅ **All Firebase web config values** (designed for public use):
- `NEXT_PUBLIC_FIREBASE_API_KEY` ← This is safe!
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`

All these values are visible in browser network requests and source code.

#### What to NEVER Expose

❌ **Never expose these** (not used in this project):
- Firebase Admin SDK private keys
- Service account JSON files
- Database passwords
- OAuth client secrets
- Server-side API keys

### Environment Variable Scope

- **`NEXT_PUBLIC_` prefix**: Required for client-side access in Next.js
- **Without prefix**: Only available server-side (not needed for Firebase Analytics)

### Caching

Vercel caches environment variables during build:
- Changes require redeployment to take effect
- Use **"Redeploy"** button after adding/modifying variables

---

## Troubleshooting

### "Analytics not initialized" in Production

**Cause**: Environment variables not loaded

**Solution**:
1. Verify all 7 variables exist in Vercel Settings → Environment Variables
2. Check they're enabled for Production environment
3. Redeploy the site

### Build Errors After Adding Variables

**Cause**: Typo in variable names

**Solution**:
1. Verify exact spelling (case-sensitive): `NEXT_PUBLIC_FIREBASE_API_KEY`
2. Ensure `NEXT_PUBLIC_` prefix is present
3. No extra spaces in values

### Events Not Appearing

**Cause**: Normal delay (24-48 hours) or ad blockers

**Solution**:
1. Use DebugView for real-time testing
2. Check Realtime view (updates every few minutes)
3. Wait 24-48 hours for Events Dashboard

---

## Checklist

- [ ] Add all 7 environment variables to Vercel
- [ ] Select Production, Preview, Development for each
- [ ] Redeploy the website
- [ ] Test with DebugView
- [ ] Monitor events in Firebase Console

---

**Status**: Ready for Vercel Deployment ✅
**Next**: Add environment variables and redeploy
