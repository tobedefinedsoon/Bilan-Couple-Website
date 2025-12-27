'use client';

import { useTranslations } from 'next-intl';

export default function CTASection() {
  const t = useTranslations('cta');

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal via-lavender to-raspberry py-20 md:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          {t('title')}
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://apps.apple.com/us/app/couple-check-in/id6754213744"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-raspberry px-8 py-4 rounded-xl font-semibold hover:bg-blush transition-colors shadow-lg hover:shadow-xl"
          >
            {t('download')}
          </a>
          <a
            href="ABC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-ink text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-700 transition-colors shadow-lg hover:shadow-xl"
          >
            {t('downloadGoogle')}
          </a>
        </div>
      </div>
    </section>
  );
}
