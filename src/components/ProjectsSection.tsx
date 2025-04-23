
import { useState } from "react";
import ProjectCard, { Project } from "./ProjectCard";

const projects: Project[] = [
  {
    id: 1,
    title: "Webflow Enterprise Platform",
    description: "Led the development of enterprise-grade features that increased enterprise revenue by 300% and improved customer satisfaction scores by 45%.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://example.com/case-study-1",
    githubUrl: "https://example.com/project-1",
    techStack: ["Product Strategy", "Enterprise", "Analytics", "B2B"]
  },
  {
    id: 2,
    title: "Collaboration Suite",
    description: "Spearheaded the launch of real-time collaboration features that increased team productivity by 60% and reduced project delivery time by 40%.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://example.com/case-study-2",
    githubUrl: "https://example.com/project-2",
    techStack: ["User Research", "Team Collaboration", "UX Design"]
  },
  {
    id: 3,
    title: "Design System Platform",
    description: "Created a unified design system that reduced design-to-development handoff time by 50% and improved consistency across products.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://example.com/case-study-3",
    githubUrl: "https://example.com/project-3",
    techStack: ["Design Systems", "Product Development", "User Testing"]
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description: "Developed an analytics suite that provided actionable insights, leading to a 35% increase in user engagement and 25% reduction in churn.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://example.com/case-study-4",
    githubUrl: "https://example.com/project-4",
    techStack: ["Data Analytics", "UX Research", "Product Strategy"]
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
            A collection of product cases that showcase my strategic thinking and ability to drive measurable business impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
