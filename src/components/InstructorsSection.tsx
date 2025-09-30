import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Award, 
  Users, 
  Star,
  ExternalLink,
  Linkedin,
  Github
} from "lucide-react";

const InstructorsSection = () => {
  const instructors = [
    {
      name: "Rajesh Kumar",
      role: "Lead AI Instructor",
      company: "ex-Google",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rajesh",
      location: "Mountain View, CA",
      experience: "8+ years",
      specialization: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP"],
      achievements: [
        "Led ML team at Google Search",
        "Published 15+ research papers",
        "Mentored 200+ engineers"
      ],
      students: 150,
      rating: 4.9,
      bio: "Former Google senior engineer specializing in large-scale ML systems. Led initiatives that impacted billions of users worldwide.",
      gradient: "from-nst-blue to-nst-purple"
    },
    {
      name: "Priya Sharma",
      role: "Full Stack Architecture Lead",
      company: "ex-MakeMyTrip",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya",
      location: "Bangalore, India",
      experience: "10+ years",
      specialization: ["System Design", "Microservices", "Cloud Architecture", "React"],
      achievements: [
        "Scaled MakeMyTrip to 100M+ users",
        "Built fault-tolerant systems",
        "Expert in distributed systems"
      ],
      students: 200,
      rating: 4.8,
      bio: "Led the technical transformation at MakeMyTrip, building systems that handle millions of bookings daily.",
      gradient: "from-nst-green to-nst-blue"
    },
    {
      name: "Vikram Singh",
      role: "FinTech Engineering Lead",
      company: "ex-Goldman Sachs",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=vikram",
      location: "New York, USA",
      experience: "12+ years",
      specialization: ["Trading Systems", "Risk Management", "Blockchain", "Java"],
      achievements: [
        "Built high-frequency trading systems",
        "Risk management for $100B+ portfolio",
        "Blockchain implementation expert"
      ],
      students: 120,
      rating: 4.9,
      bio: "Former Goldman Sachs VP who architected mission-critical financial systems processing trillions in transactions.",
      gradient: "from-nst-orange to-nst-warm"
    },
    {
      name: "Anita Gupta",
      role: "Data Engineering Lead",
      company: "ex-Barclays",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=anita",
      location: "London, UK",
      experience: "9+ years",
      specialization: ["Data Pipelines", "Analytics", "Python", "Spark"],
      achievements: [
        "Built real-time data platforms",
        "Led analytics for investment banking",
        "Expert in data governance"
      ],
      students: 180,
      rating: 4.7,
      bio: "Former Barclays senior data architect who designed analytics systems processing petabytes of financial data.",
      gradient: "from-nst-purple to-nst-blue"
    },
    {
      name: "Arjun Reddy",
      role: "DevOps & Cloud Lead",
      company: "ex-Microsoft",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=arjun",
      location: "Seattle, USA",
      experience: "7+ years",
      specialization: ["Kubernetes", "AWS", "CI/CD", "Infrastructure"],
      achievements: [
        "Scaled Azure services globally",
        "Zero-downtime deployments expert",
        "Container orchestration specialist"
      ],
      students: 140,
      rating: 4.8,
      bio: "Former Microsoft principal engineer who built the infrastructure powering millions of Azure deployments worldwide.",
      gradient: "from-nst-warm to-nst-orange"
    },
    {
      name: "Neha Patel",
      role: "Product Engineering Lead",
      company: "ex-Amazon",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=neha",
      location: "San Francisco, USA",
      experience: "11+ years",
      specialization: ["Product Strategy", "User Experience", "Analytics", "Growth"],
      achievements: [
        "Led Prime Video's recommendation engine",
        "Drove 40% increase in engagement",
        "Expert in A/B testing frameworks"
      ],
      students: 160,
      rating: 4.9,
      bio: "Former Amazon senior manager who led product initiatives that generated billions in revenue and delighted millions of customers.",
      gradient: "from-nst-blue to-nst-green"
    }
  ];

  return (
    <section id="instructors" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-nst-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-nst-green/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Students Learn From the{" "}
            <span className="gradient-text">Best Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            World-class instructors from top tech companies bring real-world experience 
            and cutting-edge knowledge directly to our students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {instructors.map((instructor, index) => (
            <Card 
              key={index}
              className="p-6 card-glow card-hover group relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${instructor.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="relative inline-block mb-4">
                    <img 
                      src={instructor.avatar}
                      alt={instructor.name}
                      className="w-20 h-20 rounded-full mx-auto border-4 border-accent group-hover:border-nst-blue transition-colors"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-nst-blue/20 to-nst-purple/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1 group-hover:text-nst-blue transition-colors">
                    {instructor.name}
                  </h3>
                  <p className="text-sm text-nst-blue font-medium mb-1">{instructor.role}</p>
                  <Badge variant="outline" className="mb-2">
                    {instructor.company}
                  </Badge>
                  
                  <div className="flex items-center justify-center text-sm text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    {instructor.location}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="text-center p-2 rounded-lg bg-accent/20">
                    <div className="text-lg font-bold text-nst-blue">{instructor.experience}</div>
                    <div className="text-xs text-muted-foreground">Experience</div>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-accent/20">
                    <div className="text-lg font-bold text-nst-green">{instructor.students}</div>
                    <div className="text-xs text-muted-foreground">Students</div>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-accent/20">
                    <div className="flex items-center justify-center">
                      <Star className="w-4 h-4 text-nst-orange mr-1 fill-current" />
                      <span className="text-lg font-bold text-nst-orange">{instructor.rating}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                  </div>
                </div>

                {/* Specializations */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-2">SPECIALIZATIONS</h4>
                  <div className="flex flex-wrap gap-2">
                    {instructor.specialization.slice(0, 3).map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary" 
                        className="text-xs bg-nst-blue/10 text-nst-blue hover:bg-nst-blue/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                    {instructor.specialization.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{instructor.specialization.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">KEY ACHIEVEMENTS</h4>
                  <div className="space-y-2">
                    {instructor.achievements.slice(0, 2).map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start">
                        <Award className="w-3 h-3 text-nst-orange mt-1 mr-2 flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bio */}
                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                  {instructor.bio}
                </p>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm" className="text-nst-blue hover:text-nst-blue/80">
                    View Profile
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6 text-center card-glow">
            <Users className="w-8 h-8 text-nst-blue mx-auto mb-3" />
            <div className="text-2xl font-bold gradient-text mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Industry Experts</div>
          </Card>
          
          <Card className="p-6 text-center card-glow">
            <Award className="w-8 h-8 text-nst-green mx-auto mb-3" />
            <div className="text-2xl font-bold gradient-text mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Years Combined Experience</div>
          </Card>
          
          <Card className="p-6 text-center card-glow">
            <Star className="w-8 h-8 text-nst-orange mx-auto mb-3" />
            <div className="text-2xl font-bold gradient-text mb-2">4.8</div>
            <div className="text-sm text-muted-foreground">Average Instructor Rating</div>
          </Card>
          
          <Card className="p-6 text-center card-glow">
            <MapPin className="w-8 h-8 text-nst-purple mx-auto mb-3" />
            <div className="text-2xl font-bold gradient-text mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Global Locations</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;