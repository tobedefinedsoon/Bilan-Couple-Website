'use client';

import { useTranslations } from 'next-intl';
import ObfuscatedEmail from '@/components/ObfuscatedEmail';

export default function PrivacyContent() {
  const t = useTranslations('privacy');

  return (
    <div className="flex-grow bg-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4">
          {t('title')}
        </h1>
        <p className="text-sm text-slate-600 mb-12">{t('lastUpdated')}</p>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg text-slate-700 leading-relaxed">
            {t('intro.text')}
          </p>
        </section>

        {/* 1. Data Controller */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-ink mb-4">
            {t('controller.title')}
          </h2>
          <div className="bg-blush rounded-xl p-6">
            <p className="text-slate-700 mb-2">
              <strong>{t('controller.name')}</strong>
            </p>
            <p className="text-slate-700 mb-2">{t('controller.address')}</p>
            <p className="text-slate-700 mb-2">
              <ObfuscatedEmail
                encoded="c3ZlbmR4c0BnbWFpbC5jb20="
                className="hover:underline"
              />
            </p>
            <p className="text-slate-700">{t('controller.dpo')}</p>
          </div>
        </section>

        {/* 2. Data We Collect */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-ink mb-4">
            {t('dataCollected.title')}
          </h2>
          <p className="text-slate-700 mb-6">{t('dataCollected.intro')}</p>

          <div className="space-y-6">
            {/* Account Data */}
            <div>
              <h3 className="text-xl font-semibold text-ink mb-3">
                {t('dataCollected.account.title')}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                {t.raw('dataCollected.account.items').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Profile Data */}
            <div>
              <h3 className="text-xl font-semibold text-ink mb-3">
                {t('dataCollected.profile.title')}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                {t.raw('dataCollected.profile.items').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* User Content */}
            <div>
              <h3 className="text-xl font-semibold text-ink mb-3">
                {t('dataCollected.content.title')}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                {t.raw('dataCollected.content.items').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Usage Data */}
            <div>
              <h3 className="text-xl font-semibold text-ink mb-3">
                {t('dataCollected.usage.title')}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                {t.raw('dataCollected.usage.items').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Technical Data */}
            <div>
              <h3 className="text-xl font-semibold text-ink mb-3">
                {t('dataCollected.technical.title')}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                {t.raw('dataCollected.technical.items').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 3. How We Use Your Data */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-ink mb-4">
            {t('howWeUse.title')}
          </h2>
          <p className="text-slate-700 mb-4">{t('howWeUse.intro')}</p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
            {t.raw('howWeUse.items').map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* 4. Legal Basis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-ink mb-4">
            {t('legalBasis.title')}
          </h2>
          <p className="text-slate-700 mb-6">{t('legalBasis.intro')}</p>

          <div className="space-y-4">
            <div className="bg-blush rounded-xl p-6">
              <h3 className="text-lg font-semibold text-ink mb-2">
                {t('legalBasis.consent.title')}
              </h3>
              <p className="text-slate-700">{t('legalBasis.consent.text')}</p>
            </div>
            <div className="bg-blush rounded-xl p-6">
              <h3 className="text-lg font-semibold text-ink mb-2">
                {t('legalBasis.contract.title')}
              </h3>
              <p className="text-slate-700">{t('legalBasis.contract.text')}</p>
            </div>
            <div className="bg-blush rounded-xl p-6">
              <h3 className="text-lg font-semibold text-ink mb-2">
                {t('legalBasis.legitimate.title')}
              </h3>
              <p className="text-slate-700">{t('legalBasis.legitimate.text')}</p>
            </div>
          </div>
        </section>

        {/* 5. Privacy-First Design */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-ink mb-4">
            {t('privacyFirst.title')}
          </h2>
          <p className="text-slate-700 mb-4">{t('privacyFirst.intro')}</p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
            {t.raw('privacyFirst.items').map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* 6. Data Sharing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-ink mb-4">
            {t('sharing.title')}
          </h2>
          <p className="text-slate-700 mb-6">{t('sharing.intro')}</p>

          <div className="space-y-6">
            {/* Firebase */}
            <div className="bg-blush rounded-xl p-6">
              <h3 className="text-lg font-semibold text-ink mb-3">
                {t('sharing.firebase.title')}
              </h3>
              <p className="text-slate-700 mb-2">{t('sharing.firebase.services')}</p>
              <p className="text-slate-700 mb-2">{t('sharing.firebase.location')}</p>
              <p className="text-slate-700">
                {t('sharing.firebase.privacy')}
              </p>
            </div>

            {/* Apple */}
            <div className="bg-blush rounded-xl p-6">
              <h3 className="text-lg font-semibold text-ink mb-3">
                {t('sharing.apple.title')}
              </h3>
              <p className="text-slate-700 mb-2">{t('sharing.apple.services')}</p>
              <p className="text-slate-700">{t('sharing.apple.privacy')}</p>
            </div>

            {/* Partner */}
            <div className="bg-blush rounded-xl p-6">
              <h3 className="text-lg font-semibold text-ink mb-3">
                {t('sharing.partner.title')}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                {t.raw('sharing.partner.items').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 7. Data Retention */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-ink mb-4">
            {t('retention.title')}
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-ink mb-3">
                {t('retention.active.title')}
              </h3>
              <p className="text-slate-700">{t('retention.active.text')}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-ink mb-3">
                {t('retention.deletion.title')}
              </h3>
              <p className="text-slate-700 mb-4">{t('retention.deletion.text')}</p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                {t.raw('retention.deletion.items').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 8. Your Rights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-ink mb-4">
            {t('yourRights.title')}
          </h2>
          <p className="text-slate-700 mb-6">{t('yourRights.intro')}</p>

          <div className="space-y-4">
            <div className="bg-blush rounded-xl p-4">
              <h3 className="font-semibold text-ink mb-2">
                {t('yourRights.access.title')}
              </h3>
              <p className="text-slate-700">{t('yourRights.access.text')}</p>
            </div>
            <div className="bg-blush rounded-xl p-4">
              <h3 className="font-semibold text-ink mb-2">
                {t('yourRights.rectification.title')}
              </h3>
              <p className="text-slate-700">{t('yourRights.rectification.text')}</p>
            </div>
            <div className="bg-blush rounded-xl p-4">
              <h3 className="font-semibold text-ink mb-2">
                {t('yourRights.erasure.title')}
              </h3>
              <p className="text-slate-700">{t('yourRights.erasure.text')}</p>
            </div>
            <div className="bg-blush rounded-xl p-4">
              <h3 className="font-semibold text-ink mb-2">
                {t('yourRights.portability.title')}
              </h3>
              <p className="text-slate-700">{t('yourRights.portability.text')}</p>
            </div>
            <div className="bg-blush rounded-xl p-4">
              <h3 className="font-semibold text-ink mb-2">
                {t('yourRights.restriction.title')}
              </h3>
              <p className="text-slate-700">{t('yourRights.restriction.text')}</p>
            </div>
            <div className="bg-blush rounded-xl p-4">
              <h3 className="font-semibold text-ink mb-2">
                {t('yourRights.objection.title')}
              </h3>
              <p className="text-slate-700">{t('yourRights.objection.text')}</p>
            </div>
            <div className="bg-blush rounded-xl p-4">
              <h3 className="font-semibold text-ink mb-2">
                {t('yourRights.withdraw.title')}
              </h3>
              <p className="text-slate-700">{t('yourRights.withdraw.text')}</p>
            </div>
          </div>

          <div className="mt-8 bg-teal/10 border-l-4 border-teal rounded-xl p-6">
            <h3 className="text-lg font-semibold text-ink mb-4">
              {t('yourRights.howTo.title')}
            </h3>
            <p className="text-slate-700 mb-2">{t('yourRights.howTo.inApp')}</p>
            <p className="text-slate-700 mb-2">
              {t.raw('yourRights.howTo.email').split('svendxs@gmail.com')[0]}
              <ObfuscatedEmail
                encoded="c3ZlbmR4c0BnbWFpbC5jb20="
                className="hover:underline"
              />
            </p>
            <p className="text-slate-700 font-semibold">{t('yourRights.howTo.response')}</p>
          </div>
        </section>

        {/* 9. Security */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-ink mb-4">
            {t('security.title')}
          </h2>
          <p className="text-slate-700 mb-4">{t('security.intro')}</p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
            {t.raw('security.items').map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* 10. Children's Privacy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-ink mb-4">
            {t('children.title')}
          </h2>
          <p className="text-slate-700">
            {t.raw('children.text').split('svendxs@gmail.com')[0]}
            <ObfuscatedEmail
              encoded="c3ZlbmR4c0BnbWFpbC5jb20="
              className="hover:underline"
            />
            {t.raw('children.text').split('svendxs@gmail.com')[1]}
          </p>
        </section>

        {/* 11. International Transfers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-ink mb-4">
            {t('international.title')}
          </h2>
          <p className="text-slate-700">{t('international.text')}</p>
        </section>

        {/* 12. Changes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-ink mb-4">
            {t('changes.title')}
          </h2>
          <p className="text-slate-700">{t('changes.text')}</p>
        </section>

        {/* 13. Complaints */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-ink mb-4">
            {t('complaints.title')}
          </h2>
          <p className="text-slate-700 mb-4">{t('complaints.text')}</p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
            <li>{t('complaints.swiss')}</li>
            <li>{t('complaints.eu')}</li>
          </ul>
        </section>

        {/* 14. Contact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-ink mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-slate-700 mb-6">{t('contact.intro')}</p>
          <div className="bg-raspberry/10 border-l-4 border-raspberry rounded-xl p-6">
            <p className="text-slate-700 mb-2">
              {t.raw('contact.email').split('svendxs@gmail.com')[0]}
              <ObfuscatedEmail
                encoded="c3ZlbmR4c0BnbWFpbC5jb20="
                className="hover:underline"
              />
            </p>
            <p className="text-slate-700 mb-4">{t('contact.address')}</p>
            <p className="text-slate-700 font-semibold">{t('contact.response')}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
