import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <span className="text-xl font-bold">Kaarina Suominen</span>

          <nav className="hidden md:flex items-center space-x-8">
            {["projects", "skills"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-base text-foreground/80 hover:text-primary transition-colors capitalize"
              >
                {section}
              </button>
            ))}
            <Button onClick={() => scrollToSection('contact')} className="gap-2 text-black">
              <Mail className="h-4 w-4" />
              Contact
            </Button>
          </nav>

          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 top-[80px] bg-background z-40 md:hidden transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {["projects", "skills", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-xl font-medium text-foreground/80 hover:text-primary transition-colors capitalize"
            >
              {section}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
