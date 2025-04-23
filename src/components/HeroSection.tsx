
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              Digital Products with Impact
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Hi I'm Kaarina, a Digital Product Manager, Technology Consultant and a Social Scientist with roots in Finland and Vietnam. You could also describe me as a Tech-Human Bridgebuilder with expertise spanning across socio-technical issues, blending technology and digital solutions with societal needs.
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              With a background in Global Development Studies and Full-Stack Software Development, I navigate complexities with analytical prowess, anthropological curiosity and cultural sensitivity. Let's bridge the gap between technology and humanity - together.
            </p>
            <Button onClick={scrollToProjects} size="lg" className="group">
              View Case Studies
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-primary">
              <img 
                src="/lovable-uploads/890f5c58-1f48-4e7a-9765-75dac4190ddf.png"
                alt="Kaarina Suominen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
