'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function FAQSection() {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // 7 objection-focused questions
  const faqs = [
    { question: t('q1.question'), answer: t('q1.answer') },
    { question: t('q2.question'), answer: t('q2.answer') },
    { question: t('q3.question'), answer: t('q3.answer') },
    { question: t('q4.question'), answer: t('q4.answer') },
    { question: t('q5.question'), answer: t('q5.answer') },
    { question: t('q6.question'), answer: t('q6.answer') },
    { question: t('q7.question'), answer: t('q7.answer') },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-ink text-center mb-16">
          {t('title')}
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden transition-all hover:border-raspberry"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-blush/5 transition-colors"
              >
                <span className="font-semibold text-ink text-lg pr-8">
                  {faq.question}
                </span>
                <span
                  className={`text-2xl text-raspberry transition-transform duration-200 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-5 bg-blush/5 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
