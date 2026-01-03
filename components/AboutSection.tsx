'use client';

import { useTranslations } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations('about');

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-ink mb-12">
            {t('title')}
          </h2>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* PLACEHOLDER: Founder photo or illustration needed */}
            {/* Image placeholder - illustrated silhouette */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-raspberry/20 to-lavender/20 flex items-center justify-center border-4 border-white shadow-lg">
                <svg
                  className="w-24 h-24 text-raspberry/40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>

            {/* Story */}
            <div className="flex-1">
              <blockquote className="text-lg text-slate-700 leading-relaxed space-y-4">
                <p className="italic">
                  &ldquo;{t('paragraph1')}&rdquo;
                </p>
                <p>
                  {t('paragraph2')}
                </p>
              </blockquote>
              <p className="mt-6 text-raspberry font-semibold">
                — {t('signature')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
