import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  UserPlus, 
  Target, 
  Users, 
  CheckCircle, 
  Handshake,
  ArrowRight
} from "lucide-react";

const HiringStepsSection = () => {
  const steps = [
    {
      number: 1,
      title: "Register",
      description: "Free signup in minutes",
      icon: UserPlus,
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: 2,
      title: "Define Needs",
      description: "Share your requirements",
      icon: Target,
      color: "from-green-500 to-emerald-500"
    },
    {
      number: 3,
      title: "Browse Talent",
      description: "Access curated profiles",
      icon: Users,
      color: "from-purple-500 to-pink-500"
    },
    {
      number: 4,
      title: "Interview & Hire",
      description: "Connect with candidates",
      icon: CheckCircle,
      color: "from-orange-500 to-red-500"
    },
    {
      number: 5,
      title: "Onboard",
      description: "Welcome your new hire",
      icon: Handshake,
      color: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Steps to <span className="gradient-text">Hire from Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From registration to onboarding—streamlined in 5 simple steps
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden lg:block relative mb-12">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-nst-blue via-nst-purple to-nst-orange transform -translate-y-1/2"></div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isLast = index === steps.length - 1;
              
              return (
                <div key={step.number} className="relative">
                  {/* Step Card */}
                  <Card className="relative p-6 text-center bg-card border-border hover:shadow-lg transition-all duration-300 group">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-nst-blue to-nst-purple rounded-full flex items-center justify-center shadow-lg z-10">
                      <span className="text-white font-bold text-sm">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-nst-blue/10 to-nst-purple/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-nst-blue" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </Card>

                  {/* Arrow Connector */}
                  {!isLast && (
                    <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-20">
                      <div className="w-4 h-4 bg-background border border-border rounded-full flex items-center justify-center">
                        <ArrowRight className="w-2 h-2 text-muted-foreground" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden mt-8">
            <div className="flex flex-col items-center space-y-4">
              {steps.map((step, index) => {
                if (index === steps.length - 1) return null;
                return (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-nst-blue rounded-full"></div>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-nst-blue to-nst-purple"></div>
                    <div className="w-2 h-2 bg-nst-purple rounded-full"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 max-w-2xl mx-auto border border-border">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Build Your <span className="gradient-text">Dream Team</span>?
            </h3>
            <p className="text-muted-foreground mb-6">
              Start your hiring journey today with our streamlined process
            </p>
            <Badge className="px-6 py-3 text-white bg-gradient-to-r from-nst-blue to-nst-purple hover:shadow-lg transition-shadow">
              Start Hiring Now - Free Registration
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringStepsSection;