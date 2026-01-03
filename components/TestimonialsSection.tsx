'use client';

import { useTranslations } from 'next-intl';

const testimonials = [
  { key: 'testimonial1', color: 'raspberry', initials: 'SM' },
  { key: 'testimonial2', color: 'teal', initials: 'JA' },
  { key: 'testimonial3', color: 'lavender', initials: 'AD' },
  { key: 'testimonial4', color: 'raspberry', initials: 'CT' },
];

/* PLACEHOLDER: Replace with real couple photos */
/* Need 4 couple photos to replace illustrated placeholders */

export default function TestimonialsSection() {
  const t = useTranslations('testimonials');

  // Helper function to highlight text
  const highlightText = (text: string, highlight: string) => {
    if (!highlight) return text;
    const parts = text.split(highlight);
    if (parts.length === 1) return text;
    return (
      <>
        {parts[0]}
        <strong className="text-raspberry font-semibold">{highlight}</strong>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-100 to-blush">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-ink mb-16">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const text = t(`${testimonial.key}.text`);
            const highlight = t(`${testimonial.key}.highlight`);

            return (
              <div
                key={testimonial.key}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  {/* Illustrated Silhouette Placeholder */}
                  <div
                    className={`w-14 h-14 rounded-full bg-${testimonial.color}/20 flex items-center justify-center relative overflow-hidden`}
                  >
                    {/* Couple silhouette SVG */}
                    <svg
                      className={`w-10 h-10 text-${testimonial.color}/60`}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      {/* Different silhouettes for variety */}
                      {index % 2 === 0 ? (
                        // Two heads side by side
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                      ) : (
                        // Heart with people
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      )}
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-ink">{t(`${testimonial.key}.name`)}</h3>
                    <p className="text-sm text-slate-500">{t(`${testimonial.key}.years`)}</p>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed italic">
                  &ldquo;{highlightText(text, highlight)}&rdquo;
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
