
import { useState } from "react";
import ProjectCard, { Project } from "./ProjectCard";

const projects: Project[] = [
  {
    id: 1,
    title: "Full-Stack Software Development",
    description: "Developing, testing and maintaining software products for a wide range of clients from retail to banking and insurance sectors.",
    image: "https://cdn.prod.website-files.com/65f5f702b76fe4658a6269b5/65f61df653cdcc61b90a097e_logo%20ACN-p-500.png",
    demoUrl: "https://www.accenture.com/fi-en/about/technology-index",
    githubUrl: "",
    techStack: ["Accenture", "Software Development", "Kanban", "Agile Development", "Jira", "SDLC", "Front-End Development", "Back-End Development"]
  },
  {
    id: 2,
    title: "Digital Solutions Sales, Consulting and CRM Development",
    description: "End-to-end Product Management of an Project, Finance, Recruitment and Monitoring Platform for International Development Projects.",
    image: "https://cdn.prod.website-files.com/65f5f702b76fe4658a6269b5/65f759aab0e037bb331e5b0d_NIRAS-p-800.png",
    demoUrl: "https://www.niras.com/sectors/development-consulting/",
    githubUrl: "",
    techStack: ["NIRAS", "Digital Solutions Specialist", "Bid Development", "Functionality Development", "Agile", "Specifications", "Consulting", "Product Management", "Solution Engineering", "CRM Development"]
  },
  {
    id: 3,
    title: "Digital Sales x Solutions Delivery",
    description: "Digital Sales and Solutions Delivery for an integrated Programme and MEL Suit for Development Funds and Programmes.",
    image: "https://cdn.prod.website-files.com/65f5f702b76fe4658a6269b5/65f6ed5584038dee30a680b6_SmartME-p-500.png",
    demoUrl: "https://www.smartme.global/",
    githubUrl: "",
    techStack: ["NIRAS", "Digital Solutions Specialist", "Product Sales", "Product Configuration", "Product Consulting", "Product Support", "Product Training"]
  },
  {
    id: 4,
    title: "Digital Product Management x Business Development x Digital Sales",
    description: "Product Management and business operations development at the UNDP Chief Digital Office and UNDP Digital Studio. Leading the technical and financial proposals for 15+ products",
    image: "https://cdn.prod.website-files.com/65f5f702b76fe4658a6269b5/65f7540e4524b5eaca5142cf_CDO-p-500.png",
    demoUrl: "https://www.undp.org/digital",
    githubUrl: "",
    techStack: ["UNDP Chief Digital Office / ExO", "Product Management", "Business Development", "Digital Sales", "AI Tools", "Proposal Building", "Software Sales", "Project Management"]
  },
  {
    id: 5,
    title: "Drupal CMS & Report Digitalization",
    description: "Product Management for UNDP Accelerator Labs Web presence and the UNTAPPED collective intelligence for climate action report digitalization.",
    image: "/lovable-uploads/55452907-eda7-4224-9b7a-bfb6c42ee9a0.png",
    demoUrl: "https://www.undp.org/acceleratorlabs/our-work/untapped",
    githubUrl: "",
    techStack: ["UNDP Accelerator Labs", "UI/UX", "Drupal CMS", "UX Research", "Stakeholder Management", "Product Management", "Project Management"]
  },
  {
    id: 6,
    title: "Digital Democracy Tools Project and Product Management",
    description: "Product Management for multiple digital tools to support democracy and information integrity, including iVerify and iReport.",
    image: "https://cdn.prod.website-files.com/65f5f702b76fe4658a6269b5/65f756b7f9ed005fb34ae23d_iVerify-p-500.png",
    demoUrl: "https://www.undp.org/digital/iverify",
    githubUrl: "",
    techStack: ["UNDP Governance / Digital Democracy", "Information Integrity", "Human-in-the-loop Machine Learning", "Cloud Architecture", "AWS", "Functionality Specifications", "UI/UX", "Stakeholder Management", "Maintenance", "Integrations", "Digital Public Good", "Proposal Development", "Product Strategy"]
  },
  {
    id: 7,
    title: "Climate Tech Product Management",
    description: "Product Management for open-source software ecosystems around the Paris Agreement, the UNDP Carbon Registry and the UNDP Transparency System.",
    image: "https://cdn.prod.website-files.com/65f5f702b76fe4658a6269b5/65f75c7802aea38a08e06bf9_CarbReg-p-500.png",
    demoUrl: "https://github.com/undp/undp-national-carbon-registry/",
    githubUrl: "",
    techStack: ["UNDP Digital 4 Planet", "Climate Tech", "Cloud Architecture", "AWS", "Functionality Specifications", "UI/UX", "Stakeholder Management", "Digital Public Infrastructure", "Digital Public Good", "Product Strategy"]
  },
  {
    id: 8,
    title: "SDG Private Finance Platform Product and Project Management",
    description: "Product and Design Management for the SDG Investor Platform unlocking financing for the SDGs and the UNDP Sustainable Finance Hub.",
    image: "https://cdn.prod.website-files.com/65f5f702b76fe4658a6269b5/65f75edcd0d5daf21d2e028c_SDGInvestor-p-500.png",
    demoUrl: "https://sdgprivatefinance.undp.org/",
    githubUrl: "",
    techStack: ["UNDP Sustainable Finance Hub", "Product Management", "Product Strategy", "UX Research", "Workshop Facilitation", "Project Management", "Proposal Development", "Maintenance Strategy", "Azure Cloud"]
  },
  {
    id: 9,
    title: "WP CMS & Upgrades Product and Project Management",
    description: "Website Product Management and Information Management System Solutions Delivery for the UNDP Conscious Food Systems.",
    image: "https://cdn.prod.website-files.com/65f5f702b76fe4658a6269b5/65f75e5bdaab805a9229e8fb_COFSA-p-800.png",
    demoUrl: "https://consciousfoodsystems.org/",
    githubUrl: "",
    techStack: ["UNDP Conscious Food Systems", "Product Management", "Product Strategy", "Information Management", "Project Management", "Data Integrations", "Stakeholder Management"]
  },
  {
    id: 10,
    title: "Digital Democracy Tool Product and Project Management",
    description: "Product Management for a Virtual Policy Platform for Participatory Policy Making in South-East Asia.",
    image: "https://cdn.prod.website-files.com/65f5f702b76fe4658a6269b5/663dd880c1afc0912971b096_Decidim_Cover-p-800.png",
    demoUrl: "",
    githubUrl: "",
    techStack: ["Tech & Democracy", "Public Policy", "Product Management", "Product Strategy", "UX Research", "Project Management", "Stakeholder Management"]
  },
  {
    id: 11,
    title: "Data Platform Build and Management",
    description: "Development for an internal Reporting and Data Management system.",
    image: "https://cdn.prod.website-files.com/65f5f702b76fe4658a6269b5/66433c26cbde38c5dc58dfe5_Funding_Windows_Reporting-p-500.png",
    demoUrl: "",
    githubUrl: "",
    techStack: ["UNDP Funding Windows", "Data Management", "Data Analytics", "Project Management", "Product Management", "Automation", "Data Collection", "Stakeholder Management"]
  },
  {
    id: 14,
    title: "Digital Conflict Reporting Platform Tool Product and Project Management",
    description: "Product management for an system to identify and report electoral conflicts.",
    image: "/lovable-uploads/1e522141-0037-43d9-8a40-8d5080504c99.png",
    demoUrl: "https://www.undp.org/governance/ireport",
    githubUrl: "",
    techStack: ["Democracy Tech", "Conflict Mapping", "Data Analysis", "Product Management", "Project Management", "UX Research", "Reporting", "Monitoring", "Functionality Specifications", "Integrations", "AWS Cloud"]
  },
  {
    id: 13,
    title: "AI Products, Development, Design & Sales x Product Studio",
    description: "UNDP Product Studio is an in-house agency that designs and deploys scalable digital solutions across the UN system. This initiative helps the UN serve its mandates more effectively by leveraging cutting-edge technologies.",
    image: "/lovable-uploads/6d1c91f0-a3fc-4d80-b1a0-14616177ca38.png",
    demoUrl: "https://www.undp.org/digital/productstudio",
    githubUrl: "",
    techStack: ["Product Leadership", "Agile Development", "Design Thinking", "Product Strategy", "Project Management", "Proposal Development"]
  },
  {
    id: 15,
    title: "AI Hub for Sustainable development platform pilot for African AI innovators",
    description: "AI PM & Development for the AI hub for Sustainable Development",
    image: "/lovable-uploads/5006dddf-724c-4522-bf3c-93c65495ecdd.png",
    demoUrl: "https://ask.aihubfordevelopment.org/",
    githubUrl: "",
    techStack: ["AI Hub", "Sustainable Development", "African Innovation", "Artificial Intelligence", "Project Management", "AI Ecosystem", "Product Strategy", "Stakeholder Management", "UX Research"]
  },
  {
    id: 12,
    title: "AI For Partner Intelligence - Design",
    description: "Technical Product and Design Lead. Led the design phase of an AI-powered donor intelligence platform bridging user-centered design to surface actionable insights and technical development with organizational strategy, ensuring the AI solution aligns with real user needs and long-term sustainability goals.",
    image: "/lovable-uploads/ai-sustainable-dev.png",
    demoUrl: "",
    githubUrl: "",
    techStack: ["Product Leadership", "Generative AI & Prompt Engineering", "Data Integration & Knowledge Management", "UX Research & User Testing", "AI Governance & Quality Assurance", "Roadmap Planning & Stakeholder Management"]
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
