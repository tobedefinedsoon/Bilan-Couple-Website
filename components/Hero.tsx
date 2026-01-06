"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { trackAppStoreClick } from "@/lib/analytics";

export default function Hero() {
  const t = useTranslations("hero");
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
              {t("title")}
              <br />
              <span className="text-blush">{t("titleHighlight")}</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
              {t("subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="https://apps.apple.com/us/app/couple-check-in/id6754213744"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-raspberry px-8 py-4 rounded-xl font-semibold hover:bg-blush transition-colors shadow-lg hover:shadow-xl"
                onClick={() => trackAppStoreClick("app_store", "hero", locale)}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                {t("cta")}
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.glaglasven.bilancouple"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-teal text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal/90 transition-colors shadow-lg hover:shadow-xl"
                onClick={() => trackAppStoreClick("play_store", "hero", locale)}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                {t("ctaGoogle")}
              </a>
            </div>
            {/* Social Proof Badge */}
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <svg
                className="w-5 h-5 text-blush"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span>{t("socialProof")}</span>
            </div>
          </div>

          {/* Phone Mockup */}
          {/* PLACEHOLDER: Animated gif/Loom demo of app flow (15-30 sec) - currently showing static screenshot */}
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
