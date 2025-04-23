
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Projector, Users, Activity, Search } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Development Policy",
    icon: <Projector className="h-10 w-10 text-primary" />,
    skills: [
      "Policy Analysis", "International Development", "Sustainable Development",
      "Social Impact Assessment", "Policy Implementation", "Stakeholder Engagement",
      "Development Cooperation", "Global Governance"
    ]
  },
  {
    title: "Research & Analysis",
    icon: <Search className="h-10 w-10 text-primary" />,
    skills: [
      "Qualitative Research", "Policy Research", "Impact Evaluation",
      "Development Studies", "Anthropological Methods", "Cross-cultural Analysis",
      "Social Science Research", "Field Research"
    ]
  },
  {
    title: "Technical Solutions",
    icon: <Activity className="h-10 w-10 text-primary" />,
    skills: [
      "Full-Stack Development", "Digital Solutions", "Technology Integration",
      "Human-Centered Design", "Socio-technical Systems", "Digital Transformation",
      "Tech for Development", "Inclusive Design"
    ]
  },
  {
    title: "Social Innovation",
    icon: <Users className="h-10 w-10 text-primary" />,
    skills: [
      "Social Impact", "Community Engagement", "Cultural Sensitivity",
      "Capacity Building", "Human Rights", "Social Justice",
      "Participatory Methods", "Sustainable Solutions"
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Core Skills</h2>
          <p className="text-xl text-muted-foreground">
            My expertise spans product strategy, user research, and technical leadership, enabling me to drive successful product outcomes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden bg-background">
              <div className="p-6 flex items-center gap-4 border-b">
                {category.icon}
                <h3 className="text-xl font-medium">{category.title}</h3>
              </div>
              
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="px-3 py-1">
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
