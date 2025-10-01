import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Brain, Monitor, Users, Star, Target, Code2 } from "lucide-react";

const NSTsPillarsSection = () => {
  const pillars = [
    {
      id: 1,
      title: "Industry-Ready Talent",
      icon: Users,
      color: "purple",
      gradientFrom: "from-purple-500",
      gradientTo: "to-blue-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      description: "Trained by ex-engineers from Google, MakeMyTrip, Goldman Sachs, and Barclays.",
      stats: {
        number: "50+",
        label: "Industry Mentors"
      }
    },
    
    
    {
      id: 2,
      title: "Internship-Driven Learning",
      icon: Code2,
      color: "orange", 
      gradientFrom: "from-orange-500",
      gradientTo: "to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      description: "Students gain practical exposure through internships, working on real industry projects, solving live business problems, and building skills that translate directly into workplace success.",
      stats: {
        number: "93%",
        label: "6-Month Internship Placement Rate"
      }
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-nst-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-nst-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Why Newtons are the Best <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent"> Engineering Talent</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Our students don't just chase degrees—they have real-world experience, industry mentorship, and proven problem-solving abilities.
          </p>
        </div>

        {/* Enhanced Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;

            return (
              <Card 
                key={pillar.id}
                className="relative overflow-hidden bg-gradient-to-br from-card to-accent/5 border border-border h-full"
              >
                {/* Gradient Background Overlay */}
                <div className={`absolute inset-0 opacity-5 bg-gradient-to-br ${pillar.gradientFrom} ${pillar.gradientTo}`}></div>
                {/* Use flex to align stats at bottom */}
                <div className="relative p-8 h-full flex flex-col justify-between">
                  {/* Icon and Title */}
                  <div>
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${pillar.gradientFrom} ${pillar.gradientTo} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {pillar.title}
                      </h3>
                    </div>
                    {/* Description */}
                    <p className="text-muted-foreground mb-6 text-center leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  {/* Stats: pinned to bottom */}
                  <div className="text-center mt-auto">
                    <div className={`text-4xl font-bold bg-gradient-to-r ${pillar.gradientFrom} ${pillar.gradientTo} text-transparent bg-clip-text mb-2`}>
                      {pillar.stats.number}
                    </div>
                    <div className="text-muted-foreground text-sm">{pillar.stats.label}</div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NSTsPillarsSection;
