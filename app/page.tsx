import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ImpactCounter from "@/components/ImpactCounter";
import FeaturedProducts from "@/components/FeaturedProducts";
import Manifesto from "@/components/Manifesto";
import HowItWorks from "@/components/HowItWorks";
import ConsignmentCTA from "@/components/ConsignmentCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <ImpactCounter />
      <FeaturedProducts />
      <Manifesto />
      <HowItWorks />
      <ConsignmentCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
