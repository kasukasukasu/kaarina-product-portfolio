import { useState } from "react";
import ProjectCard, { Project } from "./ProjectCard";

const projects: Project[] = [
  {
    id: 1,
    title: "Full-Stack Software Development",
    description: "Developing, testing and maintaining software products for a wide range of clients from retail to banking and insurance sectors.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://www.accenture.com/fi-en/about/company/finland",
    githubUrl: "",
    techStack: ["Accenture", "Software Development"]
  },
  {
    id: 2,
    title: "Digital Product Management",
    description: "End-to-end Product Management of an Project, Finance, Recruitment and Monitoring Platform for International Development Projects.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://www.niras.com/sectors/development-consulting/",
    githubUrl: "",
    techStack: ["NIRAS", "Product Management", "Product Strategy"]
  },
  {
    id: 3,
    title: "Digital Sales x Solutions Delivery",
    description: "Digital Sales and Solutions Delivery for an integrated Programme and MEL Suit for Development Funds and Programmes.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://www.smartrme.global/",
    githubUrl: "",
    techStack: ["NIRAS", "Digital Sales x Solutions Delivery", "Product Strategy"]
  },
  {
    id: 4,
    title: "Digital Product Management x Business Development x Digital Sales",
    description: "Product Management and business operations development at the UNDP Chief Digital Office and UNDP Digital Studio.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://www.undp.org/digital",
    githubUrl: "",
    techStack: ["UNDP Chief Digital Office / ExO", "Product Management", "Business Development", "Digital Sales", "Software Sales"]
  },
  {
    id: 5,
    title: "Digital Product Management",
    description: "Product Management for UNDP Accelerator Labs Web presence and reports digitalization.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://www.undp.org/acceleratorlabs",
    githubUrl: "",
    techStack: ["UNDP Accelerator Labs", "Product Management", "Product Strategy"]
  },
  {
    id: 6,
    title: "Digital Product Management",
    description: "Product Management for multiple digital tools to support democracy and information integrity, including iVerify and iReport.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://www.undp.org/digital/verify",
    githubUrl: "",
    techStack: ["UNDP Governance / Digital Democracy", "Product Management", "Product Strategy"]
  },
  {
    id: 7,
    title: "Digital Product Management",
    description: "Product Management for open-source software ecosystems around the Paris Agreement, the UNDP Carbon Registry and the UNDP Transparency System.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://demo.carbonregistry.org/",
    githubUrl: "",
    techStack: ["UNDP Digital 4 Planet", "Product Management", "Product Strategy"]
  },
  {
    id: 8,
    title: "Digital Product Management",
    description: "Product and Design Management for the SDG Investor Platform unlocking financing for the SDGs and the UNDP Sustainable Finance Hub.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://sdginvestorplatform.undp.org/",
    githubUrl: "",
    techStack: ["UNDP Sustainable Finance Hub", "Product Management", "Product Strategy", "UX Research", "Workshop Facilitation"]
  },
  {
    id: 9,
    title: "Digital Product Management",
    description: "Website Product Management and Information Management System Solutions Delivery for the UNDP Conscious Food Systems.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://consciousfoodsystems.org/",
    githubUrl: "",
    techStack: ["UNDP Conscious Food Systems", "Product Management", "Product Strategy", "Information Management"]
  },
  {
    id: 10,
    title: "Digital Product Management",
    description: "Product Management for a Virtual Policy Platform for Participatory Policy Making in South-East Asia.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://decidim.org",
    githubUrl: "",
    techStack: ["Tech & Democracy", "Public Policy", "Product Management", "Product Strategy", "UX Research"]
  },
  {
    id: 11,
    title: "Data Management System Build",
    description: "Development for an internal Reporting and Data Management system.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://www.undp.org",
    githubUrl: "",
    techStack: ["UNDP Funding Windows", "Data Management", "Data Analytics"]
  },
  {
    id: 12,
    title: "Big Data Radio Mining & API Development PM",
    description: "Product Management for a Big Data Radio Mining and API Development collaboration pilot between the iVerify and Unite Wave Systems.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://www.undp.org",
    githubUrl: "",
    techStack: ["Integration Pilot", "Product Management", "UX Research"]
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Selected Technology References</h2>
          <p className="text-xl text-muted-foreground">
            A collection of product cases that showcase the technology projects I have been working on as either a software developer, digital solutions consultant or a Product Manager
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
