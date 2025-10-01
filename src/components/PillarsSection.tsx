import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Code2, 
  Users2, 
  Rocket,
  ChevronRight,
  TrendingUp,
  Award,
  Target
} from "lucide-react";

const PillarsSection = () => {
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);

  const pillars = [
    {
      title: "Industry-Aligned Curriculum",
      icon: Brain,
      color: "nst-blue",
      gradient: "from-nst-blue to-nst-purple",
      shortDescription: "Real-world skills that matter in today's tech landscape",
      achievements: [
        "Curriculum reviewed by 50+ industry experts",
        "Updated every 6 months with latest trends",
        "85% hands-on practical learning",
        "Direct input from hiring partners"
      ],
      stats: [
        { label: "Industry Partners", value: "100+" },
        { label: "Curriculum Updates", value: "Bi-annual" },
        { label: "Practical Learning", value: "85%" }
      ],
      details: "Our curriculum is continuously evolved based on direct feedback from our hiring partners across product companies, startups, and enterprises. Every module is designed to bridge the gap between academic knowledge and industry requirements."
    },
    {
      title: "Hands-On Project Experience",
      icon: Code2,
      color: "nst-green",
      gradient: "from-nst-green to-nst-blue",
      shortDescription: "Build production-grade applications from day one",
      achievements: [
        "50+ real-world projects per student",
        "Live deployments with user feedback",
        "Open source contributions",
        "Industry mentorship on projects"
      ],
      stats: [
        { label: "Projects Built", value: "25,000+" },
        { label: "GitHub Stars", value: "15,000+" },
        { label: "Live Applications", value: "1,200+" }
      ],
      details: "Students work on real projects that solve actual business problems. From e-commerce platforms to AI applications, every project is designed to simulate real-world development scenarios with proper code reviews, deployment pipelines, and user feedback loops."
    },
    {
      title: "Industry Mentorship",
      icon: Users2,
      color: "nst-orange",
      gradient: "from-nst-orange to-nst-warm",
      shortDescription: "Learn directly from engineering leaders at top companies",
      achievements: [
        "200+ industry mentors",
        "Weekly 1:1 mentorship sessions",
        "Career guidance and networking",
        "Code reviews by senior engineers"
      ],
      stats: [
        { label: "Active Mentors", value: "200+" },
        { label: "Mentorship Hours", value: "50,000+" },
        { label: "Companies Represented", value: "80+" }
      ],
      details: "Our mentorship program connects students with engineering leaders from Google, Microsoft, Amazon, and leading startups. Mentors provide personalized guidance, career advice, and real-world insights that accelerate student growth."
    },
    {
      title: "Continuous Assessment",
      icon: Rocket,
      color: "nst-purple",
      gradient: "from-nst-purple to-nst-blue",
      shortDescription: "Data-driven learning with personalized feedback",
      achievements: [
        "Real-time skill tracking",
        "Personalized learning paths",
        "Industry-standard assessments",
        "Performance analytics dashboard"
      ],
      stats: [
        { label: "Assessment Points", value: "500+" },
        { label: "Skill Metrics", value: "50+" },
        { label: "Learning Paths", value: "25+" }
      ],
      details: "Our proprietary assessment system tracks over 50 technical and soft skills, providing real-time feedback and personalized learning recommendations. Students receive detailed analytics on their progress compared to industry benchmarks."
    }
  ];

  return (
    <section id="pillars" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-nst-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-nst-orange/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">NST's Pillars</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four foundational pillars that make our engineering education program 
            the most effective pathway from classroom to industry leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <Card 
              key={index}
              className="p-8 card-glow cursor-pointer group relative overflow-hidden transition-all duration-500 hover:scale-[1.02]"
              onMouseEnter={() => setHoveredPillar(index)}
              onMouseLeave={() => setHoveredPillar(null)}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-${pillar.color}/20 group-hover:scale-110 transition-transform duration-300`}>
                      <pillar.icon className={`w-8 h-8 text-${pillar.color}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-nst-blue transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {pillar.shortDescription}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`w-6 h-6 text-muted-foreground group-hover:text-${pillar.color} group-hover:translate-x-1 transition-all duration-300`} />
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {pillar.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center p-3 rounded-lg bg-accent/20">
                      <div className={`text-lg font-bold text-${pillar.color}`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Achievements */}
                <div className="space-y-3 mb-6">
                  {pillar.achievements.slice(0, hoveredPillar === index ? 4 : 2).map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-start">
                      <div className={`w-2 h-2 rounded-full bg-${pillar.color} mt-2 mr-3 flex-shrink-0`}></div>
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Expanded Details */}
                {hoveredPillar === index && (
                  <div className="border-t border-border pt-6 animate-fade-in">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {pillar.details}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <Badge 
                        variant="outline" 
                        className={`border-${pillar.color}/30 text-${pillar.color}`}
                      >
                        Learn More
                      </Badge>
                      <div className="flex items-center space-x-2">
                        <TrendingUp className={`w-4 h-4 text-${pillar.color}`} />
                        <span className="text-xs text-muted-foreground">Continuous Improvement</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <Card className="p-6 text-center card-glow">
            <Award className="w-8 h-8 text-nst-blue mx-auto mb-3" />
            <div className="text-2xl font-bold gradient-text mb-2">99.2%</div>
            <div className="text-sm text-muted-foreground">Student Satisfaction Rate</div>
          </Card>
          
          <Card className="p-6 text-center card-glow">
            <Target className="w-8 h-8 text-nst-green mx-auto mb-3" />
            <div className="text-2xl font-bold gradient-text mb-2">48 hrs</div>
            <div className="text-sm text-muted-foreground">Average Response Time</div>
          </Card>
          
          <Card className="p-6 text-center card-glow">
            <TrendingUp className="w-8 h-8 text-nst-orange mx-auto mb-3" />
            <div className="text-2xl font-bold gradient-text mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Employer Satisfaction</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;