"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");
  const pathname = usePathname();

  const getCurrentLocale = () => {
    return pathname.startsWith("/en") ? "en" : "fr";
  };

  return (
    <footer className="bg-slate-100 border-t border-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-raspberry mb-2">
              Bilan Couple
            </h3>
            <p className="text-slate-700 text-sm">
              {getCurrentLocale() === "fr"
                ? "Renforcez votre relation, un trimestre à la fois."
                : "Strengthen your relationship, one quarter at a time."}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-ink mb-3">
              {getCurrentLocale() === "fr" ? "Liens" : "Links"}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${getCurrentLocale()}`}
                  className="text-slate-700 hover:text-raspberry transition-colors text-sm"
                >
                  {getCurrentLocale() === "fr" ? "Accueil" : "Home"}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${getCurrentLocale()}/privacy`}
                  className="text-slate-700 hover:text-raspberry transition-colors text-sm"
                >
                  {t("privacy")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-ink mb-3">{t("contact")}</h4>
            <p className="text-slate-700 text-sm">
              <a
                href="mailto:svendxs@gmail.com"
                className="hover:text-raspberry transition-colors"
              >
                svendxs@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-300 text-center">
          <p className="text-slate-500 text-sm">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
