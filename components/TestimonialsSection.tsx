'use client';

import { useTranslations } from 'next-intl';

const testimonials = [
  { key: 'testimonial1', color: 'raspberry' },
  { key: 'testimonial2', color: 'teal' },
  { key: 'testimonial3', color: 'lavender' },
  { key: 'testimonial4', color: 'raspberry' },
];

export default function TestimonialsSection() {
  const t = useTranslations('testimonials');

  return (
    <section className="py-20 bg-gradient-to-br from-slate-100 to-blush">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-ink mb-16">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.key}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-full bg-${testimonial.color}/20 flex items-center justify-center text-2xl`}>
                  💑
                </div>
                <div>
                  <h3 className="font-bold text-ink">{t(`${testimonial.key}.name`)}</h3>
                  <p className="text-sm text-slate-500">{t(`${testimonial.key}.years`)}</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed italic">
                "{t(`${testimonial.key}.text`)}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
