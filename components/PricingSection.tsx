'use client';

import { useTranslations, useLocale } from 'next-intl';
import { trackAppStoreClick } from '@/lib/analytics';

export default function PricingSection() {
  const t = useTranslations('pricing');
  const locale = useLocale();

  const trialFeatures = t.raw('trial.features') as string[];
  const annualFeatures = t.raw('annual.features') as string[];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-100 to-blush">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-slate-600">
            {t('subtitle')}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Trial */}
          <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-ink mb-2">
              {t('trial.name')}
            </h3>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl font-bold text-ink">{t('trial.price')}</span>
              <span className="text-slate-500">{t('trial.period')}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {trialFeatures.map((feature: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-teal flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://apps.apple.com/us/app/couple-check-in/id6754213744"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-slate-100 text-ink px-6 py-3 rounded-xl font-semibold hover:bg-slate-200 transition-colors"
              onClick={() => trackAppStoreClick('app_store', 'pricing_trial', locale)}
            >
              {t('trial.cta')}
            </a>
          </div>

          {/* Annual */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-raspberry relative">
            {/* Popular Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-raspberry text-white text-sm font-semibold px-4 py-1 rounded-full">
                {t('annual.badge')}
              </span>
            </div>
            <h3 className="text-xl font-bold text-ink mb-2 mt-2">
              {t('annual.name')}
            </h3>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl font-bold text-raspberry">{t('annual.price')}</span>
              <span className="text-slate-500">{t('annual.period')}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {annualFeatures.map((feature: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-teal flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://apps.apple.com/us/app/couple-check-in/id6754213744"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-raspberry text-white px-6 py-3 rounded-xl font-semibold hover:bg-raspberry/90 transition-colors"
              onClick={() => trackAppStoreClick('app_store', 'pricing_annual', locale)}
            >
              {t('annual.cta')}
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-teal"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span>{t('note')}</span>
          </div>
          <span className="hidden sm:inline text-slate-300">|</span>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-teal"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
            <span>{t('noCreditCard')}</span>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href="https://apps.apple.com/us/app/couple-check-in/id6754213744"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-ink text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-700 transition-colors"
            onClick={() => trackAppStoreClick('app_store', 'pricing_bottom', locale)}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            App Store
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.glaglasven.bilancouple"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-teal text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal/90 transition-colors"
            onClick={() => trackAppStoreClick('play_store', 'pricing_bottom', locale)}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            Google Play
          </a>
        </div>
      </div>
    </section>
  );
}
