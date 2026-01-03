'use client';

import { useTranslations } from 'next-intl';

export default function ProblemSection() {
  const t = useTranslations('problem');

  const painPoints = [
    { key: 'point1' },
    { key: 'point2' },
    { key: 'point3' },
  ];

  return (
    <section className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        {/* Status Quo Quote */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-2xl md:text-3xl font-light italic text-slate-300 mb-6">
            {t('statusQuo')}
          </p>
          <p className="text-xl md:text-2xl font-semibold text-white">
            {t('intro')}
          </p>
        </div>

        {/* Pain Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {painPoints.map((point) => (
            <div
              key={point.key}
              className="bg-slate-700/50 rounded-xl p-6 border border-slate-600"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-raspberry/20 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-raspberry"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {t(`${point.key}.title`)}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {t(`${point.key}.description`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
