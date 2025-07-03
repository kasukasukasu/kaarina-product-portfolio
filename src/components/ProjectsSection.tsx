import { useState } from "react";
import ProjectCard, { Project } from "./ProjectCard";

const projects: Project[] = [
  {
    id: 1,
    title: "Full-Stack Software Development",
    description: "Developing, testing and maintaining software products for a wide range of clients from retail to banking and insurance sectors.",
    image: "https://cdn.prod.website-files.com/65f5f702b76fe4658a6269b5/65f61df653cdcc61b90a097e_logo%20ACN-p-500.png",
    demoUrl: "https://www.accenture.com/fi-en/about/company/finland",
    githubUrl: "",
    techStack: ["Accenture", "Software Development"]
  },
  {
    id: 2,
    title: "Digital Product Management",
    description: "End-to-end Product Management of an Project, Finance, Recruitment and Monitoring Platform for International Development Projects.",
    image: "https://cdn.prod.website-files.com/65f5f702b76fe4658a6269b5/65f759aab0e037bb331e5b0d_NIRAS-p-800.png",
    demoUrl: "https://www.niras.com/sectors/development-consulting/",
    githubUrl: "",
    techStack: ["NIRAS", "Product Management", "Product Strategy"]
  },
  {
    id: 3,
    title: "Digital Sales x Solutions Delivery",
    description: "Digital Sales and Solutions Delivery for an integrated Programme and MEL Suit for Development Funds and Programmes.",
    image: "https://cdn.prod.website-files.com/65f5f702b76fe4658a6269b5/65f6ed5584038dee30a680b6_SmartME-p-500.png",
    demoUrl: "https://www.smartrme.global/",
    githubUrl: "",
    techStack: ["NIRAS", "Digital Sales x Solutions Delivery", "Product Strategy"]
  },
  {
    id: 4,
    title: "Digital Product Management x Business Development x Digital Sales",
    description: "Product Management and business operations development at the UNDP Chief Digital Office and UNDP Digital Studio.",
    image: "https://cdn.prod.website-files.com/65f5f702b76fe4658a6269b5/65f7540e4524b5eaca5142cf_CDO-p-500.png",
    demoUrl: "https://www.undp.org/digital",
    githubUrl: "",
    techStack: ["UNDP Chief Digital Office / ExO", "Product Management", "Business Development", "Digital Sales", "Software Sales"]
  },
  {
    id: 5,
    title: "Digital Product Management",
    description: "Product Management for UNDP Accelerator Labs Web presence and the UNTAPPED collective intelligence for climate action report digitalization.",
    image: "/lovable-uploads/55452907-eda7-4224-9b7a-bfb6c42ee9a0.png",
    demoUrl: "https://www.undp.org/acceleratorlabs",
    githubUrl: "",
    techStack: ["UNDP Accelerator Labs", "Product Management", "Product Strategy"]
  },
  {
    id: 6,
    title: "Digital Product Management",
    description: "Product Management for multiple digital tools to support democracy and information integrity, including iVerify and iReport.",
    image: "https://cdn.prod.website-files.com/65f5f702b76fe4658a6269b5/65f756b7f9ed005fb34ae23d_iVerify-p-500.png",
    demoUrl: "https://www.undp.org/digital/verify",
    githubUrl: "",
    techStack: ["UNDP Governance / Digital Democracy", "Product Management", "Product Strategy"]
  },
  {
    id: 7,
    title: "Digital Product Management",
    description: "Product Management for open-source software ecosystems around the Paris Agreement, the UNDP Carbon Registry and the UNDP Transparency System.",
    image: "https://cdn.prod.website-files.com/65f5f702b76fe4658a6269b5/65f75c7802aea38a08e06bf9_CarbReg-p-500.png",
    demoUrl: "https://demo.carbonregistry.org/",
    githubUrl: "",
    techStack: ["UNDP Digital 4 Planet", "Product Management", "Product Strategy"]
  },
  {
    id: 8,
    title: "Digital Product Management",
    description: "Product and Design Management for the SDG Investor Platform unlocking financing for the SDGs and the UNDP Sustainable Finance Hub.",
    image: "https://cdn.prod.website-files.com/65f5f702b76fe4658a6269b5/65f75edcd0d5daf21d2e028c_SDGInvestor-p-500.png",
    demoUrl: "https://sdginvestorplatform.undp.org/",
    githubUrl: "",
    techStack: ["UNDP Sustainable Finance Hub", "Product Management", "Product Strategy", "UX Research", "Workshop Facilitation"]
  },
  {
    id: 9,
    title: "Digital Product Management",
    description: "Website Product Management and Information Management System Solutions Delivery for the UNDP Conscious Food Systems.",
    image: "https://cdn.prod.website-files.com/65f5f702b76fe4658a6269b5/65f75e5bdaab805a9229e8fb_COFSA-p-800.png",
    demoUrl: "https://consciousfoodsystems.org/",
    githubUrl: "",
    techStack: ["UNDP Conscious Food Systems", "Product Management", "Product Strategy", "Information Management"]
  },
  {
    id: 10,
    title: "Digital Product Management",
    description: "Product Management for a Virtual Policy Platform for Participatory Policy Making in South-East Asia.",
    image: "https://cdn.prod.website-files.com/65f5f702b76fe4658a6269b5/663dd880c1afc0912971b096_Decidim_Cover-p-800.png",
    demoUrl: "https://decidim.org",
    githubUrl: "",
    techStack: ["Tech & Democracy", "Public Policy", "Product Management", "Product Strategy", "UX Research"]
  },
  {
    id: 11,
    title: "Data Management System Build",
    description: "Development for an internal Reporting and Data Management system.",
    image: "https://cdn.prod.website-files.com/65f5f702b76fe4658a6269b5/66433c26cbde38c5dc58dfe5_Funding_Windows_Reporting-p-500.png",
    demoUrl: "https://www.undp.org",
    githubUrl: "",
    techStack: ["UNDP Funding Windows", "Data Management", "Data Analytics"]
  },
  {
    id: 12,
    title: "Big Data Radio Mining, AI & API Development PM",
    description: "Product Management for a Big Data Radio Mining and API Development collaboration pilot between the iVerify and Unite Wave Systems.",
    image: "https://cdn.prod.website-files.com/65f5f702b76fe4658a6269b5/67a2fb619a35971de10da32c_UniteWave2-p-500.png",
    demoUrl: "https://www.undp.org",
    githubUrl: "",
    techStack: ["Integration Pilot", "Product Management", "UX Research", "Artificial Intelligence"]
  },
  {
    id: 13,
    title: "Digital Design & Sales x Product Studio",
    description: "Designing and leading digital product end-to-end cycles using efficient agile methodologies",
    image: "public/lovable-uploads/6d1c91f0-a3fc-4d80-b1a0-14616177ca38.png",
    demoUrl: "https://www.example.com/product-studio",
    githubUrl: "",
    techStack: ["Product Leadership", "Agile Development", "Design Thinking", "Product Strategy"]
  },
  {
    id: 14,
    title: "Electoral Conflict Reporting System",
    description: "Product management for an system to identify and report electoral conflicts.",
    image: "public/lovable-uploads/a5920c90-a234-4c0b-a22d-30d1cc909d48.png",
    demoUrl: "https://www.example.com/electoral-system",
    githubUrl: "",
    techStack: ["Democracy Tech", "Conflict Mapping", "Data Analysis", "Product Management"]
  },
  {
    id: 15,
    title: "AI & Information Integrity Platform",
    description: "Product management for an AI Human-in-the-loop platform separating truth from fiction in news",
    image: "public/lovable-uploads/b99342b4-9505-4ecb-9b6f-a4c1c3c68c10.png",
    demoUrl: "https://www.example.com/truth-verification",
    githubUrl: "",
    techStack: ["Media Tech", "Fact Checking", "News Verification", "Information Integrity", "Artificial Intelligence"]
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
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Selected Technology References</h2>
          <p className="text-xl text-muted-foreground">
            A collection of product cases that showcase the technology projects I have been working on as either a software developer, digital solutions consultant or a Product Manager
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
