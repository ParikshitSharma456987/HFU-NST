import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Shield, 
  Code, 
  Trophy,
  CheckCircle,
  Sparkles
} from "lucide-react";

const USPSection = () => {
  const uspPoints = [
    {
      icon: Users,
      title: "Trained by Industry Veterans",
      description: "Learn from ex-Google, MakeMyTrip, Goldman Sachs, and Barclays engineers",
      companies: ["Google", "MakeMyTrip", "Goldman Sachs", "Barclays", "Microsoft", "Amazon"],
      color: "nst-blue"
    },
    {
      icon: Shield,
      title: "Pre-Assessed, Curated Students",
      description: "Only students who pass rigorous technical and aptitude assessments",
      stats: ["Top 5% selected", "98% placement rate", "Industry-ready skills"],
      color: "nst-green"
    },
    {
      icon: Code,
      title: "50+ Projects & Real Experience",
      description: "Hands-on hackathons, open source contributions, and industry projects",
      highlights: ["Live deployments", "Production code", "Team collaboration"],
      color: "nst-purple"
    }
  ];

  return (
    <section id="usp" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-nst-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-nst-purple/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why <span className="gradient-text">Newtons</span> are the Best{" "}
            <span className="gradient-warm-text">Fresher Engineers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our unique approach to engineering education creates graduates who are 
            industry-ready from day one, setting them apart from traditional freshers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {uspPoints.map((point, index) => (
            <Card 
              key={index}
              className="p-8 card-glow card-hover group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-${point.color}/5 to-${point.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${point.color}/20 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <point.icon className={`w-8 h-8 text-${point.color}`} />
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-nst-blue transition-colors">
                  {point.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {point.description}
                </p>

                {/* Dynamic Content Based on Point Type */}
                {point.companies && (
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-muted-foreground">INDUSTRY VETERANS FROM</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {point.companies.map((company, companyIndex) => (
                        <Badge 
                          key={companyIndex}
                          variant="outline" 
                          className={`justify-center border-${point.color}/30 text-${point.color} hover:bg-${point.color}/10`}
                        >
                          {company}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {point.stats && (
                  <div className="space-y-3">
                    {point.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="flex items-center">
                        <CheckCircle className={`w-5 h-5 text-${point.color} mr-3 flex-shrink-0`} />
                        <span className="text-sm">{stat}</span>
                      </div>
                    ))}
                  </div>
                )}

                {point.highlights && (
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-muted-foreground">KEY HIGHLIGHTS</h4>
                    <div className="space-y-2">
                      {point.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center">
                          <Sparkles className={`w-4 h-4 text-${point.color} mr-3 flex-shrink-0`} />
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6 text-center card-glow">
            <div className="text-3xl font-bold gradient-text mb-2">10%</div>
            <div className="text-sm text-muted-foreground">
              Perform at par with SDE-2s by graduation
            </div>
          </Card>
          
          <Card className="p-6 text-center card-glow">
            <div className="text-3xl font-bold gradient-text mb-2">50+</div>
            <div className="text-sm text-muted-foreground">
              Real projects in portfolio
            </div>
          </Card>
          
          <Card className="p-6 text-center card-glow">
            <div className="text-3xl font-bold gradient-text mb-2">98%</div>
            <div className="text-sm text-muted-foreground">
              Industry placement success rate
            </div>
          </Card>
          
          <Card className="p-6 text-center card-glow">
            <div className="text-3xl font-bold gradient-text mb-2">6 months</div>
            <div className="text-sm text-muted-foreground">
              Average time to promotion
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default USPSection;