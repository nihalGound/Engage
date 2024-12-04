import CTASection from "./_components/cta-section";
import FeaturesSection from "./_components/features-section";
import Footer from "./_components/footer";
import HeroSection from "./_components/hero-section";
import  Navbar from "./_components/navbar";
import PricingSection from "./_components/pricing-section";
import TestimonialsSection from "./_components/testimonials-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

