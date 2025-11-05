'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function PrivacyContent() {
  const t = useTranslations('privacy');
  const pathname = usePathname();

  const getCurrentLocale = () => {
    return pathname.startsWith('/en') ? 'en' : 'fr';
  };

  return (
    <div className="flex-grow bg-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-8">
          {t('title')}
        </h1>

        <div className="bg-blush rounded-2xl p-8 md:p-12 text-center">
          <div className="text-6xl mb-6">🔒</div>
          <h2 className="text-2xl font-bold text-ink mb-4">
            {t('comingSoon')}
          </h2>
          <p className="text-lg text-slate-700 mb-8">
            {t('description')}
          </p>
          <Link
            href={`/${getCurrentLocale()}`}
            className="inline-block bg-raspberry text-white px-8 py-4 rounded-xl font-semibold hover:bg-raspberry/90 transition-colors"
          >
            {t('backHome')}
          </Link>
        </div>
      </div>
    </div>
  );
}
