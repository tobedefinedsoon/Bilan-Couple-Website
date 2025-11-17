'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-raspberry via-lavender to-teal py-20 md:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('title')}
              <br />
              <span className="text-blush">{t('titleHighlight')}</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
              {t('subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://apps.apple.com/us/app/couple-check-in/id6754213744"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-raspberry px-8 py-4 rounded-xl font-semibold hover:bg-blush transition-colors shadow-lg hover:shadow-xl"
              >
                {t('cta')}
              </a>
              <a
                href="#"
                className="inline-block bg-teal text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal/90 transition-colors shadow-lg hover:shadow-xl"
              >
                {t('ctaGoogle')}
              </a>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[300px] md:w-[350px] drop-shadow-2xl">
              <Image
                src={`/screenshots/${locale.toUpperCase()}/1-HomePage.png`}
                alt="Bilan Couple App"
                width={350}
                height={700}
                className="rounded-[2rem] border-4 border-white shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
