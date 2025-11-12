import HeroSection from '@/components/landing/hero-section';
import IdentificationSection from '@/components/landing/identification-section';
import TechniquesSection from '@/components/landing/techniques-section';
import BenefitsSection from '@/components/landing/benefits-section';
import BonusSection from '@/components/landing/bonus-section';
import OfferSection from '@/components/landing/offer-section';
import TestimonialsSection from '@/components/landing/testimonials-section';
import AuthorSection from '@/components/landing/author-section';
import WhatsIncludedSection from '@/components/landing/whats-included-section';
import FaqSection from '@/components/landing/faq-section';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <main className="flex-1">
        <HeroSection />
        <IdentificationSection />
        <TechniquesSection />
        <BenefitsSection />
        <BonusSection />
        <OfferSection />
        <TestimonialsSection />
        <AuthorSection />
        <WhatsIncludedSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
