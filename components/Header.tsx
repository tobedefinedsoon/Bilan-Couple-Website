'use client';

import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const router = useRouter();

  const getCurrentLocale = () => {
    return pathname.startsWith('/en') ? 'en' : 'fr';
  };

  const switchLanguage = (newLocale: string) => {
    const currentLocale = getCurrentLocale();
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-300">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={`/${getCurrentLocale()}`} className="flex items-center gap-3">
          <Image
            src="/BilanCoupleLogo.png"
            alt="Bilan Couple"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="text-xl font-bold text-raspberry">
            Bilan Couple
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href={`/${getCurrentLocale()}`}
            className="text-slate-700 hover:text-raspberry transition-colors"
          >
            {t('home')}
          </Link>
          <Link
            href={`/${getCurrentLocale()}/privacy`}
            className="text-slate-700 hover:text-raspberry transition-colors"
          >
            {t('privacy')}
          </Link>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 border-l border-slate-300 pl-4">
            <button
              onClick={() => switchLanguage('fr')}
              className={`px-3 py-1 rounded-md transition-colors ${
                getCurrentLocale() === 'fr'
                  ? 'bg-raspberry text-white'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              FR
            </button>
            <button
              onClick={() => switchLanguage('en')}
              className={`px-3 py-1 rounded-md transition-colors ${
                getCurrentLocale() === 'en'
                  ? 'bg-raspberry text-white'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
