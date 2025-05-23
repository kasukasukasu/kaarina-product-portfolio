import { Button } from "@/components/ui/button";
import { Linkedin, Github } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-background pt-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6">
              <span className="text-[#b0fc38]">Digital Products</span>, with Impact
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl">
              Hi I'm Kaarina, a Digital Product Manager, Technology Consultant and a Social Scientist with roots in Finland and Vietnam. You could also describe me as a Tech-Human Bridgebuilder with expertise spanning across socio-technical issues, blending technology and digital solutions with societal needs.
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl">
              With a background in Global Development Studies and Full-Stack Software Development, I navigate complexities with analytical prowess, anthropological curiosity and cultural sensitivity. Let's bridge the gap between technology and humanity - together.
            </p>
            <div className="flex gap-4">
              <Button
                onClick={() => window.open('https://www.linkedin.com/in/kaarina-suominen/', '_blank')}
                size="lg"
                className="group text-black"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
              <Button
                onClick={() => window.open('https://github.com/kaarinadev', '_blank')}
                size="lg"
                className="group text-black"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
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
