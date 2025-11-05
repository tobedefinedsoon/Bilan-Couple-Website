'use client';

import { useTranslations } from 'next-intl';

const features = [
  { key: 'feature1', icon: '📝' },
  { key: 'feature2', icon: '🔒' },
  { key: 'feature3', icon: '🔄' },
  { key: 'feature4', icon: '🔔' },
  { key: 'feature5', icon: '✅' },
  { key: 'feature6', icon: '📊' },
];

export default function FeaturesSection() {
  const t = useTranslations('features');

  return (
    <section className="py-20 bg-blush">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-ink mb-16">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.key}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-ink mb-3">
                {t(`${feature.key}.title`)}
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {t(`${feature.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
