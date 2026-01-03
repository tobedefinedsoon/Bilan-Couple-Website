'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';

const featureGroups = [
  {
    key: 'group1',
    icon: '📝',
    /* PLACEHOLDER: Screenshot of question categories */
    image: null,
  },
  {
    key: 'group2',
    icon: '🔒',
    /* PLACEHOLDER: Gif showing role alternation */
    image: null,
  },
  {
    key: 'group3',
    icon: '✅',
    /* PLACEHOLDER: Screenshot of action items */
    image: null,
  },
  {
    key: 'group4',
    icon: '📅',
    /* PLACEHOLDER: Calendar or history view */
    image: null,
  },
];

export default function FeaturesSection() {
  const t = useTranslations('features');
  const locale = useLocale();

  return (
    <section className="py-20 bg-blush">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-ink mb-16">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {featureGroups.map((group) => {
            const points = t.raw(`${group.key}.points`) as string[];

            return (
              <div
                key={group.key}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{group.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-ink mb-2">
                      {t(`${group.key}.title`)}
                    </h3>
                    <p className="text-slate-600 text-sm">
                      {t(`${group.key}.description`)}
                    </p>
                  </div>
                </div>

                {/* Points */}
                <ul className="space-y-2 mt-4">
                  {points.map((point: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg
                        className="w-4 h-4 text-teal flex-shrink-0 mt-1"
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
                      <span className="text-slate-700 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Visual Placeholder */}
                {group.image ? (
                  <div className="mt-6 flex justify-center">
                    <Image
                      src={group.image}
                      alt={t(`${group.key}.title`)}
                      width={200}
                      height={400}
                      className="rounded-xl shadow-md"
                    />
                  </div>
                ) : (
                  <div className="mt-6 bg-slate-100 rounded-xl p-4 text-center">
                    <div className="text-4xl mb-2">{group.icon}</div>
                    <p className="text-xs text-slate-400">
                      {/* PLACEHOLDER: Visual asset needed */}
                      Visual coming soon
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
