import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PrivacyContent from './PrivacyContent';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <PrivacyContent />
      <Footer />
    </main>
  );
}
