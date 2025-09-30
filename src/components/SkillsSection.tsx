import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Code, 
  Layers, 
  Monitor, 
  BarChart3,
  ArrowRight,
  Download,
  Quote
} from "lucide-react";

const SkillsSection = () => {
  const roles = [
    
    {
      title: "Full Stack Developer Intern",
      icon: Code,
      skills: ["React", "Node.js", "MongoDB", "Express", "TypeScript", "AWS"],
      techStack: ["React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL"],
      color: "nst-blue"
    },
    {
        title: "Front-end & Back-end Developer Intern",
        icon: Monitor,
        skills: ["React", "Node.js", "JavaScript", "TypeScript", "Python", "Docker"],
        techStack: ["React", "Vue.js", "Node.js", "Express", "Python", "AWS"],
        color: "nst-green"
    },
    {
      title: "Product Intern",
      icon: Layers,
      skills: ["Product Strategy", "User Research", "Analytics", "Figma", "SQL", "A/B Testing"],
      techStack: ["Figma", "Miro", "Google Analytics", "Mixpanel", "SQL", "Notion"],
      color: "nst-orange"
    },
    
    {
        title: "AI Engineering Intern",
        icon: Brain,
        skills: ["Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "Python", "Computer Vision"],
        techStack: ["TensorFlow", "PyTorch", "OpenCV", "Pandas", "NumPy", "Scikit-learn"],
        color: "nst-purple"
    },
    {
      title: "Data Analyst Intern",
      icon: BarChart3,
      skills: ["SQL", "Python", "Tableau", "Power BI", "Statistics", "Excel"],
      techStack: ["Python", "R", "SQL", "Tableau", "Power BI", "Jupyter"],
      color: "nst-warm"
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-slate-900">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-nst-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-nst-blue/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-white">
            Skills and Roles Our Students{" "}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Outshine In</span>
          </h2>
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Our comprehensive curriculum prepares students for the most in-demand tech roles 
            with hands-on experience in cutting-edge technologies.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-6 mb-12 snap-x snap-mandatory">
          {roles.map((role, index) => (
            <Card 
              key={index}
              className={`p-6 card-glow card-hover group cursor-pointer fade-in-up min-w-[320px] flex-shrink-0 snap-center`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-${role.color}/20 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <role.icon className={`w-6 h-6 text-${role.color}`} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-nst-blue transition-colors">
                  {role.title}
                </h3>
              </div>

              <div className="mb-4">
                <h4 className="text-base font-medium text-muted-foreground mb-3">Core Skills</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {role.skills.slice(0, 4).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 bg-${role.color}/10 text-${role.color} text-xs rounded-full`}
                    >
                      {skill}
                    </span>
                  ))}
                  {role.skills.length > 4 && (
                    <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                      +{role.skills.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-base font-medium text-muted-foreground mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {role.techStack.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded border"
                    >
                      {tech}
                    </span>
                  ))}
                  <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                    +{role.techStack.length - 3}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm text-muted-foreground">View Details</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-nst-blue group-hover:translate-x-1 transition-all" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
