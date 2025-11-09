'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';

export default function ProcessSection() {
  const t = useTranslations('process');
  const locale = useLocale();

  const steps = [
    {
      key: 'step1',
      image: `/screenshots/${locale.toUpperCase()}/3-Preparation.png`,
      gradient: 'from-raspberry to-teal',
    },
    {
      key: 'step2',
      image: `/screenshots/${locale.toUpperCase()}/4-Session.png`,
      gradient: 'from-teal to-lavender',
    },
    {
      key: 'step3',
      image: `/screenshots/${locale.toUpperCase()}/5-Action.png`,
      gradient: 'from-lavender to-raspberry',
    },
    {
      key: 'step4',
      image: `/screenshots/${locale.toUpperCase()}/6-ActionSummary.png`,
      gradient: 'from-raspberry to-teal',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-ink mb-16">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <div
              key={step.key}
              className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${step.gradient} p-8 text-white`}
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">{t(`${step.key}.title`)}</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  {t(`${step.key}.description`)}
                </p>
                <div className="flex justify-center">
                  <Image
                    src={step.image}
                    alt={t(`${step.key}.title`)}
                    width={200}
                    height={400}
                    className="rounded-xl border-2 border-white/20 shadow-xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
