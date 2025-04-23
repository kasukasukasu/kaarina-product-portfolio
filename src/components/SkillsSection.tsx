
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Users } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Technologies",
    icon: <Code className="h-10 w-10 text-primary" />,
    skills: [
      "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js",
      "Vue.js", "Angular", "Redux", "Tailwind CSS", "Styled Components",
      "Framer Motion", "SASS/SCSS", "Webpack"
    ]
  },
  {
    title: "Backend Technologies",
    icon: <Code className="h-10 w-10 text-primary" />,
    skills: [
      "Node.js", "Express.js", "NestJS", "Python", "Django", "Flask",
      "Ruby on Rails", "PHP", "Laravel", "GraphQL", "REST API Design"
    ]
  },
  {
    title: "Database & DevOps",
    icon: <Code className="h-10 w-10 text-primary" />,
    skills: [
      "MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase",
      "Docker", "Kubernetes", "AWS", "Git/GitHub", "CI/CD", "Jest",
      "Testing Library", "Cypress"
    ]
  },
  {
    title: "Soft Skills",
    icon: <Users className="h-10 w-10 text-primary" />,
    skills: [
      "Project Management", "Team Leadership", "Communication", 
      "Problem Solving", "Time Management", "Agile/Scrum", 
      "UI/UX Understanding", "Client Relations"
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My technical skillset and areas of expertise in web development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="bg-primary/5 p-6 flex items-center gap-4 border-b">
                {category.icon}
                <h3 className="text-xl font-medium">{category.title}</h3>
              </div>
              
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="px-3 py-1 text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
