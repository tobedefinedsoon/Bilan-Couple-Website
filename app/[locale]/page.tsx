import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProcessSection from '@/components/ProcessSection';
import FeaturesSection from '@/components/FeaturesSection';
import WhySection from '@/components/WhySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProcessSection />
      <FeaturesSection />
      <WhySection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
