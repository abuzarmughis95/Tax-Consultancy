import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import JsonLd from "@/components/JsonLd";
import Loader from "@/components/Loader";

export default function Home() {
  return (
    <>
      <Loader />
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <About />
        <TrustStrip />
        <Services />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
