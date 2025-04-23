
import { useState } from "react";
import ProjectCard, { Project } from "./ProjectCard";

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A fully functional e-commerce website with product filtering, cart and checkout features.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/yourusername/ecommerce",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"]
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A task management app with drag and drop features, team collaboration, and time tracking.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/yourusername/task-app",
    techStack: ["TypeScript", "React", "Firebase", "Redux"]
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A modern portfolio website showcasing projects and skills with responsive design.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/yourusername/portfolio",
    techStack: ["React", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "An analytics dashboard for social media accounts with data visualization.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/yourusername/social-dashboard",
    techStack: ["Vue.js", "D3.js", "Express", "PostgreSQL"]
  }
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const techStacks = Array.from(new Set(projects.flatMap(p => p.techStack)));
  
  const filteredProjects = activeFilter
    ? projects.filter(project => project.techStack.includes(activeFilter))
    : projects;

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check out my latest web development projects. Each project includes links to code and live demos.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            className={`px-4 py-2 rounded-full text-sm transition-colors ${activeFilter === null ? 'bg-primary text-white' : 'bg-secondary hover:bg-secondary/80'}`}
            onClick={() => setActiveFilter(null)}
          >
            All
          </button>
          
          {techStacks.map(tech => (
            <button
              key={tech}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${activeFilter === tech ? 'bg-primary text-white' : 'bg-secondary hover:bg-secondary/80'}`}
              onClick={() => setActiveFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
