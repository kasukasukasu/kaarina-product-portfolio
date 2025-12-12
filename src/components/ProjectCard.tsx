
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  githubUrl: string;
  techStack: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden border-none shadow-none p-0">
      <div className="space-y-6">
        <div className="overflow-hidden rounded-lg h-[250px] flex items-center justify-center bg-secondary/30">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-105 p-4" 
          />
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
          <p className="text-muted-foreground mb-6">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech, index) => (
              <Badge key={index} variant="outline" className="px-3 py-1 border-primary/20 bg-primary/10 text-primary">
                {tech}
              </Badge>
            ))}
          </div>
          {project.demoUrl && (
            <Button asChild variant="outline" className="gap-2">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                Go To Project / Company
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
