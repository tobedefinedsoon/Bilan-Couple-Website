'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { trackNavigation, trackLanguageChange } from '@/lib/analytics';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations('nav');
  const pathname = usePathname();
  const router = useRouter();

  const getCurrentLocale = () => {
    return pathname.startsWith('/en') ? 'en' : 'fr';
  };

  const switchLanguage = (newLocale: string) => {
    const currentLocale = getCurrentLocale();
    if (currentLocale !== newLocale) {
      trackLanguageChange(currentLocale, newLocale);
    }
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
    setIsMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-300">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Brand Name */}
        <Link
          href={`/${getCurrentLocale()}`}
          className="flex items-center gap-3"
          onClick={() => trackNavigation('home', 'header', getCurrentLocale())}
        >
          <Image
            src="/BilanCoupleLogo.png"
            alt="Bilan Couple"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="text-xl font-bold text-raspberry">
            {t('appName')}
          </span>
        </Link>

        {/* Desktop Navigation - Hidden on Mobile */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href={`/${getCurrentLocale()}`}
            className="text-slate-700 hover:text-raspberry transition-colors"
            onClick={() => trackNavigation('home', 'header', getCurrentLocale())}
          >
            {t('home')}
          </Link>
          <Link
            href={`/${getCurrentLocale()}/privacy`}
            className="text-slate-700 hover:text-raspberry transition-colors"
            onClick={() => trackNavigation('privacy', 'header', getCurrentLocale())}
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

        {/* Mobile Hamburger Button - Visible only on Mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Slide-out */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="flex flex-col p-6 space-y-6">
          {/* Close Button */}
          <button
            onClick={closeMobileMenu}
            className="self-end w-10 h-10 flex items-center justify-center text-slate-700 hover:text-raspberry"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
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
          </button>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-4">
            <Link
              href={`/${getCurrentLocale()}`}
              onClick={() => {
                trackNavigation('home', 'header', getCurrentLocale());
                closeMobileMenu();
              }}
              className="text-lg text-slate-700 hover:text-raspberry transition-colors py-2"
            >
              {t('home')}
            </Link>
            <Link
              href={`/${getCurrentLocale()}/privacy`}
              onClick={() => {
                trackNavigation('privacy', 'header', getCurrentLocale());
                closeMobileMenu();
              }}
              className="text-lg text-slate-700 hover:text-raspberry transition-colors py-2"
            >
              {t('privacy')}
            </Link>
          </div>

          {/* Mobile Language Switcher */}
          <div className="pt-4 border-t border-slate-300">
            <p className="text-sm text-slate-500 mb-3">{t('language') || 'Language'}</p>
            <div className="flex gap-3">
              <button
                onClick={() => switchLanguage('fr')}
                className={`flex-1 px-4 py-3 rounded-md transition-colors ${
                  getCurrentLocale() === 'fr'
                    ? 'bg-raspberry text-white'
                    : 'text-slate-700 bg-slate-100 hover:bg-slate-200'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => switchLanguage('en')}
                className={`flex-1 px-4 py-3 rounded-md transition-colors ${
                  getCurrentLocale() === 'en'
                    ? 'bg-raspberry text-white'
                    : 'text-slate-700 bg-slate-100 hover:bg-slate-200'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
