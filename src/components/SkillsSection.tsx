import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Code, 
  Layers, 
  Monitor, 
  BarChart3,
} from "lucide-react";

// Utility for color classes
const roleColors = {
  "nst-blue": {
    bg: "bg-nst-blue/20",
    text: "text-nst-blue",
    pill: "bg-nst-blue/10",
    hover: "hover:border-nst-blue hover:shadow-nst-blue/30",
  },
  "nst-green": {
    bg: "bg-nst-green/20",
    text: "text-nst-green",
    pill: "bg-nst-green/10",
    hover: "hover:border-nst-green hover:shadow-nst-green/30",
  },
  "nst-orange": {
    bg: "bg-nst-orange/20",
    text: "text-nst-orange",
    pill: "bg-nst-orange/10",
    hover: "hover:border-nst-orange hover:shadow-nst-orange/30",
  },
  "nst-purple": {
    bg: "bg-nst-purple/20",
    text: "text-nst-purple",
    pill: "bg-nst-purple/10",
    hover: "hover:border-nst-purple hover:shadow-nst-purple/30",
  },
  "nst-warm": {
    bg: "bg-nst-warm/20",
    text: "text-nst-warm",
    pill: "bg-nst-warm/10",
    hover: "hover:border-nst-warm hover:shadow-nst-warm/30",
  },
};

const roles = [
  {
    title: "Full Stack Developer Intern",
    icon: Code,
    skills: [
      "HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "PostgreSQL", "Git", "REST APIs"
    ],
    color: "nst-blue"
  },
  {
    title: "Front-end Developer Intern",
    icon: Monitor,
    skills: [
      "HTML", "CSS", "JavaScript", "React", "TypeScript", "Node.js", "Express", "Docker", "Testing", "Responsive Design"
    ],
    color: "nst-orange"
  },
  {
    title: "Back-end Developer Intern",
    icon: Monitor,
    skills: [
      "JavaScript", "Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "Authentication", "Version Control", "Testing", "API Design"
    ],
    color: "nst-green"
  },
  {
    title: "Product Intern",
    icon: Layers,
    skills: [
      "Product Strategy", "User Research", "Analytics", "Figma", "Roadmapping", "Data-driven Decisions", "Presentation Skills", "Market Analysis", "Customer Focus"
    ],
    color: "nst-orange"
  },
  {
    title: "AI Engineering Intern",
    icon: Brain,
    skills: [
      "Python", "Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "Prompt Engineering", "Data Structures", "Statistics", "Mathematics", "Computer Vision"
    ],
    color: "nst-purple"
  },
  {
    title: "Data Analyst Intern",
    icon: BarChart3,
    skills: [
      "SQL", "Python", "R", "Excel", "Tableau", "Power BI", "Data Visualization", "Statistical Analysis", "Data Cleaning", "Critical Thinking"
    ],
    color: "nst-warm"
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-nst-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-nst-blue/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-white">
            Skills and Roles Our Students{" "}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Outshine In</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our comprehensive curriculum prepares students for the most in-demand tech roles 
            with hands-on experience in cutting-edge technologies.
          </p>
        </div>

        {/* Uniform Grid Layout: All Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, idx) => {
            const colors = roleColors[role.color];
            return (
              <Card
                key={idx}
                className={`flex flex-col justify-between items-stretch h-full min-h-[250px] p-6 rounded-2xl border border-border bg-card transition-all duration-300 cursor-pointer shadow-lg group ${colors.hover}`}
              >
                <div>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colors.bg} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                    <role.icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className={`text-xl font-semibold mb-4 transition-colors ${colors.text} group-hover:underline`}>
                    {role.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 items-center mb-4">
                  {role.skills.slice(0, 3).map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className={`px-3 py-1 ${colors.pill} ${colors.text} text-xs rounded-full`}
                    >
                      {skill}
                    </span>
                  ))}
                  {role.skills.length > 3 && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="px-3 py-1 text-xs rounded-full ml-1 bg-muted text-muted-foreground border-none flex items-center"
                    >
                      +{role.skills.length - 3} more
                    </Button>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
