/**
 * Firebase Configuration for Bilan Couple Website
 *
 * This file initializes Firebase for web analytics tracking.
 * Firebase project: bilan-couple (496991294245)
 *
 * IMPORTANT: Replace firebaseConfig with actual web app configuration
 * from Firebase Console > Project Settings > General > Your apps > Web app
 */

import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAnalytics, Analytics, isSupported } from 'firebase/analytics';

// Firebase configuration
// TODO: Replace with actual web app config from Firebase Console
// Get this from: https://console.firebase.google.com/project/bilan-couple/settings/general
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

let app: FirebaseApp | undefined;
let analytics: Analytics | undefined;

/**
 * Initialize Firebase app (singleton pattern)
 */
export function initializeFirebase(): FirebaseApp {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }
  return app;
}

/**
 * Get Firebase Analytics instance
 * Only initializes in browser environment and if supported
 */
export async function getFirebaseAnalytics(): Promise<Analytics | null> {
  if (typeof window === 'undefined') {
    return null; // Server-side rendering
  }

  if (!analytics) {
    const app = initializeFirebase();
    const supported = await isSupported();

    if (supported) {
      analytics = getAnalytics(app);
    }
  }

  return analytics || null;
}
