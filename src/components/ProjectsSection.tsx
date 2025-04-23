
import { useState } from "react";
import ProjectCard, { Project } from "./ProjectCard";

const projects: Project[] = [
  {
    id: 1,
    title: "User Analytics Dashboard",
    description: "Led the development of a real-time analytics dashboard that increased user engagement by 45% and reduced churn by 20%.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://example.com/case-study-1",
    githubUrl: "https://example.com/project-1",
    techStack: ["Product Strategy", "User Research", "Analytics", "Agile"]
  },
  {
    id: 2,
    title: "Mobile Payment Solution",
    description: "Spearheaded the launch of a mobile payment feature that processed $1M in transactions within the first month.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://example.com/case-study-2",
    githubUrl: "https://example.com/project-2",
    techStack: ["FinTech", "UX Design", "Data Analysis", "Scrum"]
  },
  {
    id: 3,
    title: "Customer Feedback Platform",
    description: "Designed and launched a feedback system that increased customer satisfaction scores by 35%.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://example.com/case-study-3",
    githubUrl: "https://example.com/project-3",
    techStack: ["Customer Research", "Product Development", "A/B Testing"]
  }
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const categories = Array.from(new Set(projects.flatMap(p => p.techStack)));
  
  const filteredProjects = activeFilter
    ? projects.filter(project => project.techStack.includes(activeFilter))
    : projects;

  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Selected Work</h2>
          <p className="text-xl text-muted-foreground">
            A collection of product management case studies showcasing my approach to solving complex business challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-12">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
