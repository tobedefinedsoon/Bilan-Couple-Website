'use client';

/**
 * Analytics Provider Component
 *
 * Initializes Firebase Analytics and Vercel Analytics on the client side and tracks page views.
 * Must be used in Client Component due to useEffect and window object.
 */

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Analytics } from '@vercel/analytics/react';
import { initializeFirebase, getFirebaseAnalytics } from '@/lib/firebase';
import { trackPageView } from '@/lib/analytics';

interface AnalyticsProviderProps {
  children: React.ReactNode;
  locale: string;
}

export function AnalyticsProvider({
  children,
  locale,
}: AnalyticsProviderProps) {
  const pathname = usePathname();

  // Initialize Firebase on mount
  useEffect(() => {
    initializeFirebase();
    getFirebaseAnalytics(); // Initialize analytics
  }, []);

  // Track page views on navigation
  useEffect(() => {
    if (pathname) {
      trackPageView(pathname, locale);
    }
  }, [pathname, locale]);

  return (
    <>
      <Analytics />
      {children}
    </>
  );
}
