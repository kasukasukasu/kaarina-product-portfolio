import { Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-bold text-lg">Kaarina's Portfolio</span>
            <p className="text-sm text-muted-foreground mt-1">
              © 2025 Kaarina Suominen. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-secondary/80 hover:bg-secondary p-3 rounded-full transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
