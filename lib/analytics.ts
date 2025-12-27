/**
 * Analytics Tracking for Bilan Couple Website
 *
 * Privacy-compliant analytics tracking following the same rules as mobile apps.
 * See: /firebase/ANALYTICS.md for complete event catalog and privacy rules.
 *
 * PRIVACY RULES:
 * - NEVER log answer content, question text, or personal data
 * - Only log metadata: IDs, counts, timestamps, actions
 * - All analytics events must be documented
 */

import { logEvent } from 'firebase/analytics';
import { getFirebaseAnalytics } from './firebase';

/**
 * Track page view (automatically called by Next.js navigation)
 */
export async function trackPageView(page: string, locale: string) {
  const analytics = await getFirebaseAnalytics();
  if (!analytics) return;

  logEvent(analytics, 'page_view', {
    page_path: page,
    page_title: document.title,
    locale,
  });
}

/**
 * Track CTA button clicks (Download app, Get started, etc.)
 */
export async function trackCTAClick(
  ctaType: 'hero' | 'footer' | 'cta_section',
  platform: 'ios' | 'android' | 'both',
  locale: string
) {
  const analytics = await getFirebaseAnalytics();
  if (!analytics) return;

  logEvent(analytics, 'cta_click', {
    cta_type: ctaType,
    platform,
    locale,
  });
}

/**
 * Track app store link clicks
 */
export async function trackAppStoreClick(
  store: 'app_store' | 'play_store',
  source: 'hero' | 'footer' | 'cta_section',
  locale: string
) {
  const analytics = await getFirebaseAnalytics();
  if (!analytics) return;

  logEvent(analytics, 'app_store_click', {
    store,
    source,
    locale,
  });
}

/**
 * Track navigation clicks (menu, footer links, etc.)
 */
export async function trackNavigation(
  destination: string,
  source: 'header' | 'footer' | 'inline',
  locale: string
) {
  const analytics = await getFirebaseAnalytics();
  if (!analytics) return;

  logEvent(analytics, 'navigation_click', {
    destination,
    source,
    locale,
  });
}

/**
 * Track email obfuscation reveal (contact)
 */
export async function trackEmailReveal(locale: string) {
  const analytics = await getFirebaseAnalytics();
  if (!analytics) return;

  logEvent(analytics, 'email_reveal', {
    locale,
  });
}

/**
 * Track FAQ interaction
 */
export async function trackFAQClick(questionId: string, locale: string) {
  const analytics = await getFirebaseAnalytics();
  if (!analytics) return;

  logEvent(analytics, 'faq_click', {
    question_id: questionId,
    locale,
  });
}

/**
 * Track language change
 */
export async function trackLanguageChange(
  fromLocale: string,
  toLocale: string
) {
  const analytics = await getFirebaseAnalytics();
  if (!analytics) return;

  logEvent(analytics, 'language_change', {
    from_locale: fromLocale,
    to_locale: toLocale,
  });
}

/**
 * Track section visibility (scroll tracking for engagement)
 */
export async function trackSectionView(
  section:
    | 'hero'
    | 'process'
    | 'features'
    | 'why'
    | 'testimonials'
    | 'faq'
    | 'cta',
  locale: string
) {
  const analytics = await getFirebaseAnalytics();
  if (!analytics) return;

  logEvent(analytics, 'section_view', {
    section,
    locale,
  });
}

/**
 * Track external link clicks (social media, etc.)
 */
export async function trackExternalLink(
  url: string,
  linkType: 'privacy' | 'social' | 'other',
  locale: string
) {
  const analytics = await getFirebaseAnalytics();
  if (!analytics) return;

  logEvent(analytics, 'external_link_click', {
    url,
    link_type: linkType,
    locale,
  });
}
