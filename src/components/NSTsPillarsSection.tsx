import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Brain, Monitor, Users, ArrowRight, Star, Target, Code2 } from "lucide-react";
import { useState } from "react";

const NSTsPillarsSection = () => {
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);

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
      achievements: [
        "Ex-Google Engineers as Mentors",
        "Goldman Sachs Alumni Faculty", 
        "MakeMyTrip Veterans Teaching",
        "Barclays Industry Experts"
      ],
      stats: {
        number: "50+",
        label: "Industry Mentors"
      }
    },
    {
      id: 2,
      title: "Future-Ready Engineers",
      icon: Target,
      color: "green",
      gradientFrom: "from-green-500",
      gradientTo: "to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      description: "At Newton School of Technology, students undergo a unique blend of rigorous academics and real-world exposure—ensuring they graduate not just with degrees, but with industry-ready skills and entrepreneurial mindset.",
      achievements: [
      "Cutting-edge Curriculum co-designed with Industry Leaders",
      "Hands-on Learning through Projects & Start-up Simulations",
      "Global Exposure via Tech Mentors & Alumni Network",
      "Personalized Career Development & Placement Support"
      ],
      stats: {
      number: "93%",
      label: "Internship Placement Success"
      }
      },
    {
      id: 3,
      title: "Hands-On Experience",
      icon: Code2,
      color: "orange", 
      gradientFrom: "from-orange-500",
      gradientTo: "to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      description: "Students code from Day 1 making them work on various projects, attending numerous hackathons and open-source contributions ensuring practical learning.",
      achievements: [
        "50+ Hackathons Won",
        "Open Source Contributions",
        "Real-World Project Experience",
        "Industry Case Studies"
      ],
      stats: {
        number: "100%",
        label: "Practical Learning"
      }
    }
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
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

        {/* Central Hub with Connection Lines */}
        <div className="relative mb-16">
          {/* Central "Industry Ready Engineers" Hub */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-card to-accent/5 border border-border text-center shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-nst-blue to-nst-purple rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Industry Ready</h3>
                <p className="text-lg text-muted-foreground">Engineers</p>
              </Card>
              
              {/* Connection Lines */}
              <div className="absolute -top-6 -left-40 w-32 h-0.5 bg-gradient-to-r from-purple-500 to-transparent transform -rotate-12 hidden lg:block"></div>
              <div className="absolute -top-6 -right-40 w-32 h-0.5 bg-gradient-to-l from-green-500 to-transparent transform rotate-12 hidden lg:block"></div>
              <div className="absolute top-6 -left-40 w-32 h-0.5 bg-gradient-to-r from-orange-500 to-transparent transform rotate-12 hidden lg:block"></div>
            </div>
          </div>

          {/* Enhanced Pillars Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              const isHovered = hoveredPillar === pillar.id;
              
              return (
                <Card 
                  key={pillar.id}
                  className={`relative overflow-hidden transition-all duration-500 transform cursor-pointer group
                    ${isHovered ? 'scale-105 shadow-2xl' : 'hover:scale-102'} 
                    bg-gradient-to-br from-card to-accent/5 border border-border hover:border-${pillar.color}-400`}
                  onMouseEnter={() => setHoveredPillar(pillar.id)}
                  onMouseLeave={() => setHoveredPillar(null)}
                >
                  {/* Gradient Background Overlay */}
                  <div className={`absolute inset-0 opacity-5 bg-gradient-to-br ${pillar.gradientFrom} ${pillar.gradientTo}`}></div>
                  
                  <div className="relative p-8 h-full">
                    {/* Icon and Title */}
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${pillar.gradientFrom} ${pillar.gradientTo} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-muted-foreground">
                        {pillar.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 text-center leading-relaxed">
                      {pillar.description}
                    </p>

                    {/* Stats */}
                    <div className="text-center mb-6">
                      <div className={`text-4xl font-bold bg-gradient-to-r ${pillar.gradientFrom} ${pillar.gradientTo} text-transparent bg-clip-text mb-2`}>
                        {pillar.stats.number}
                      </div>
                      <div className="text-muted-foreground text-sm">{pillar.stats.label}</div>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center">
                      <Button 
                        variant="outline" 
                        className={`w-full bg-white hover:bg-${pillar.color}-50 border-${pillar.color}-200 text-foreground hover:text-${pillar.color}-600 transition-all duration-300 group/btn`}
                      >
                        Learn More
                        <div className={`w-6 h-6 bg-${pillar.color}-500 rounded-full flex items-center justify-center ml-2 group-hover/btn:scale-110 transition-transform`}>
                          <ArrowRight className="w-3 h-3 text-white" />
                        </div>
                      </Button>
                    </div>

                    {/* Hover Content */}
                    <div className={`transition-all duration-300 ${isHovered ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'} overflow-hidden`}>
                      <div className="border-t border-border pt-6 mt-6">
                        <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center justify-center">
                          <Star className="w-4 h-4 mr-2 text-yellow-500" />
                          Key Achievements
                        </h4>
                        <div className="space-y-3">
                          {pillar.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="flex items-start text-sm text-muted-foreground">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${pillar.gradientFrom} ${pillar.gradientTo} mr-3 mt-1.5 flex-shrink-0`}></div>
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Default state indicator */}
                    {!isHovered && (
                      <div className="mt-4 text-xs text-muted-foreground opacity-60 text-center">
                        Hover to view achievements
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NSTsPillarsSection;