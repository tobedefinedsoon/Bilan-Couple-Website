import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import { AnalyticsProvider } from '@/components/AnalyticsProvider';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bilan Couple - Renforcez Votre Relation",
  description: "Bilan Couple aide les couples à construire des relations plus solides grâce à des sessions de bilan trimestrielles structurées.",
  icons: {
    icon: [
      { url: '/icon.png', sizes: '1024x1024', type: 'image/png' },
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48 64x64' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '1024x1024', type: 'image/png' },
    ],
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <AnalyticsProvider locale={locale}>
            {children}
          </AnalyticsProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
