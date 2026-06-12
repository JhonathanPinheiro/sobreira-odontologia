import Image from "next/image";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/ui/sections/Hero";
import { About } from "./components/ui/sections/About";
import { Services } from "./components/ui/sections/Services";
import { WhyChoose } from "./components/ui/sections/WhyChoose";
import { AccessibilitySection } from "./components/ui/sections/Accessibility";
import { Testimonials } from "./components/ui/sections/Testimonials";
import { Contact } from "./components/ui/sections/Contact";
import { FinalCTA } from "./components/ui/sections/FinalCTA";
import { Footer } from "./components/ui/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <AccessibilitySection />
        <Testimonials />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
