import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Users, Lightbulb, BookOpen, Building } from "lucide-react";

const PartnershipSection = () => {
  const partnershipOptions = [
    {
      title: "Masterclasses & Guest Lectures",
      description: "Inspire NST students with your expertise and position your company as a thought leader.",
      link: "View Past Masterclasses ->",
      linkUrl: "#",
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Hackathons & Workshops", 
      description: "Co-create problem-solving events where students tackle real industry challenges.",
      link: "See Blinkit Hackathon Highlights ->",
      linkUrl: "#",
      icon: Lightbulb,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Custom Training Programs",
      description: "Design modules on your tech stack and groom future hires who understand your workflows.",
      link: "Explore Training Program Case Studies ->",
      linkUrl: "#",
      icon: BookOpen,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Industry Immersion Events",
      description: "Host students at your workplace for live projects and innovation tours — amplified through our channels.",
      link: "Watch Bangalore Immersion Highlights ->", 
      linkUrl: "#",
      icon: Building,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-nst-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-nst-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Content */}
          <div>
            <div className="mb-8">
              
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Shape the Next <span className="gradient-text">Generation of Engineers</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Join hands with NST to create meaningful impact and discover exceptional talent for your organization.
              </p>
            </div>

            <div className="space-y-6">
              {partnershipOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <Card key={index} className="p-6 bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${option.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 text-foreground">{option.title}</h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {option.description}
                        </p>
                        <Button variant="link" className="p-0 h-auto text-nst-blue hover:text-nst-blue/80 group">
                          {option.link}
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="relative">
            <Card className="bg-gradient-to-br from-card to-accent/5 border border-border rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-nst-blue to-nst-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Partner with Us?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Join 800+ companies already working with NST to discover exceptional talent and create meaningful impact.
                </p>
                <Button className="bg-gradient-to-r from-nst-blue to-nst-purple text-white font-semibold px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 group">
                  Start Partnership Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;