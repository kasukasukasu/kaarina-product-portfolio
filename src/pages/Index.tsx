import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Kaarina Suominen",
        "url": "https://kaarina-product-portfolio.lovable.app",
        "jobTitle": "Digital Product Manager & Technology Consultant",
        "description": "Digital Product Manager, Technology Consultant and Social Scientist specialising in sustainable development, AI, climate tech and digital democracy.",
        "sameAs": [
          "https://www.linkedin.com/in/kaarina-suominen/",
          "https://github.com/kaarinadev"
        ]
      }) }} />
    </div>
  );
};

export default Index;
