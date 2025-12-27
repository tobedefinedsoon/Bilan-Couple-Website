'use client';

import { useTranslations } from 'next-intl';

export default function WhySection() {
  const t = useTranslations('why');

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-ink mb-8">
          {t('title')}
        </h2>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-slate-700 leading-relaxed mb-12 text-center">
            {t('description')}
          </p>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200">
              <span className="text-2xl">✓</span>
              <span className="text-slate-700">{t('benefit1')}</span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200">
              <span className="text-2xl">✓</span>
              <span className="text-slate-700">{t('benefit2')}</span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200">
              <span className="text-2xl">✓</span>
              <span className="text-slate-700">{t('benefit3')}</span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200">
              <span className="text-2xl">✓</span>
              <span className="text-slate-700">{t('benefit4')}</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-raspberry/10 to-lavender/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-ink mb-6">{t('perfectFor')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-raspberry text-xl">•</span>
                <span className="text-slate-700">{t('audience1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal text-xl">•</span>
                <span className="text-slate-700">{t('audience2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lavender text-xl">•</span>
                <span className="text-slate-700">{t('audience3')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
