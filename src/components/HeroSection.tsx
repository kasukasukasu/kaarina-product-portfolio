
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen pt-16 flex items-center">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="text-primary block mt-2">Your Name</span>
              <span className="block mt-2">Web Developer</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground">
              I build exceptional and accessible digital experiences for the web.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button onClick={scrollToContact} size="lg">
                Contact Me
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                  alt="Developer" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
