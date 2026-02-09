import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import TrustedBy from "@/components/TrustedBy";
import WhyNow from "@/components/WhyNow";
import ContactSection from "@/components/ContactSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <TrustedBy />
      <WhyNow />
      <ContactSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
