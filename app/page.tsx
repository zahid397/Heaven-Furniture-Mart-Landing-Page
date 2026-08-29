import BespokeHighlight from '@/components/BespokeHighlight';
import BrandIntro from '@/components/BrandIntro';
import Collections from '@/components/Collections';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import SocialProof from '@/components/SocialProof';
import StickyMobileCTA from '@/components/StickyMobileCTA';

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main">
        <Hero />
        <BrandIntro />
        <Collections />
        <BespokeHighlight />
        <SocialProof />
      </main>

      <Footer />

      {/* Bottom padding so the sticky bar never covers the last line of the footer. */}
      <div aria-hidden="true" className="h-20 bg-charcoal md:hidden" />

      <FloatingWhatsApp />
      <StickyMobileCTA />
    </>
  );
}
