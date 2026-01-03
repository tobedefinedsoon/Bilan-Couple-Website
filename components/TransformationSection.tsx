'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';

export default function TransformationSection() {
  const t = useTranslations('transformation');
  const locale = useLocale();

  const benefits = [
    { key: 'benefit1' },
    { key: 'benefit2' },
    { key: 'benefit3' },
  ];

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
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-ink mb-12">
          {t('title')}
        </h2>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {benefits.map((benefit) => (
            <div
              key={benefit.key}
              className="bg-blush/30 rounded-xl p-6 border border-raspberry/10"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink mb-2">
                    {t(`${benefit.key}.title`)}
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {t(`${benefit.key}.description`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-ink mb-12">
            {t('howItWorks.title')}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step) => (
              <div
                key={step.key}
                className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${step.gradient} p-8 text-white`}
              >
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-4">
                    {t(`howItWorks.${step.key}.title`)}
                  </h4>
                  <p className="text-white/90 mb-6 leading-relaxed text-sm">
                    {t(`howItWorks.${step.key}.description`)}
                  </p>
                  <div className="flex justify-center">
                    <Image
                      src={step.image}
                      alt={t(`howItWorks.${step.key}.title`)}
                      width={180}
                      height={360}
                      className="rounded-xl border-2 border-white/20 shadow-xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
