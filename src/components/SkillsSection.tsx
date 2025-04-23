
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
    title: "Product Strategy",
    icon: <Projector className="h-10 w-10 text-primary" />,
    skills: [
      "Product Vision & Strategy", "Market Research", "Competitive Analysis",
      "Product Roadmapping", "Business Case Development", "Go-to-Market Strategy",
      "Product Lifecycle Management", "Revenue Modeling"
    ]
  },
  {
    title: "User-Centered Design",
    icon: <Users className="h-10 w-10 text-primary" />,
    skills: [
      "User Research", "Customer Journey Mapping", "Usability Testing",
      "Wireframing", "Prototyping", "User Stories", "UX Design",
      "Information Architecture"
    ]
  },
  {
    title: "Technical Leadership",
    icon: <Activity className="h-10 w-10 text-primary" />,
    skills: [
      "Agile/Scrum", "Sprint Planning", "Feature Prioritization",
      "Technical Requirements", "Data Analytics", "A/B Testing",
      "Product Analytics", "Release Management"
    ]
  },
  {
    title: "Research & Analytics",
    icon: <Search className="h-10 w-10 text-primary" />,
    skills: [
      "Quantitative Analysis", "User Behavior Analysis", "Market Analysis",
      "Data-Driven Decisions", "KPI Definition", "Cohort Analysis",
      "Feature Impact Analysis", "Customer Feedback Analysis"
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
