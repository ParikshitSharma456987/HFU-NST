import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Lightbulb, Building } from "lucide-react";
import { useState } from "react";

const partnershipOptions = [
  {
    title: "Masterclasses & Guest Lectures",
    description: "Inspire NST's students with perspectives that go beyond the classroom.",
    link: "View Past Masterclasses ",
    linkUrl: "#",
    icon: Users,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Hackathons & Workshops",
    description: "Co-create problem-solving events where students tackle real world industry challenges.",
    link: "See Blinkit's Hackathon Highlights ",
    linkUrl: "#",
    icon: Lightbulb,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Hire From NST",
    description: "Access NST talent for 2-month internships, 6-month co-ops, or full-time roles — job-ready from day one.",
    link: "Kickstart Hiring",
    linkUrl: "#",
    icon: Users,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Industry Immersion Events",
    description: "Host students at your workplace for live projects and innovation tours — amplified through our channels.",
    link: "Watch Bangalore's Immersion Highlights ",
    linkUrl: "#",
    icon: Building,
    color: "from-orange-500 to-red-500"
  }
];

const carouselImages = [
  "src/assets/Screenshot 2025-10-01 at 5.47.19 AM.png",
  "src/assets/Screenshot 2025-10-01 at 5.47.35 AM.png",
  "src/assets/Screenshot 2025-10-01 at 5.48.14 AM.png",
  "src/assets/Screenshot 2025-10-01 at 5.49.11 AM.png",
  "src/assets/Screenshot 2025-10-01 at 5.49.28 AM.png"
];

const PartnershipSection = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Glowing Circular Background Behind Carousel */}
      <div className="absolute top-1/2 right-16 w-[460px] h-[340px] translate-y-[-50%] bg-gradient-radial from-blue-900/40 via-purple-600/30 to-transparent rounded-full blur-2xl pointer-events-none"></div>
      {/* General background details */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-nst-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-nst-purple/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
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
          {/* Right Section: Framed Carousel with Glow */}
          <div className="flex flex-col items-center justify-center w-full z-10">
            <div className="relative flex items-center justify-center w-full h-80">
              {/* Card styling for frame, with shadow and rounded corners */}
              <Card className="w-full h-full bg-[#191E2C] shadow-2xl rounded-3xl overflow-hidden flex items-center justify-center relative z-20">
                <img
                  src={carouselImages[current]}
                  alt={`Partnership slide ${current + 1}`}
                  className="object-cover w-full h-full transition-all duration-500"
                  style={{ borderRadius: "1.5rem" }}
                />
              </Card>
              {/* Navigation Arrows (styled, dark transparency) */}
              <button
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#23263b] bg-opacity-60 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-[#31375e] transition z-30"
                onClick={() => setCurrent((c) => (c - 1 + carouselImages.length) % carouselImages.length)}
                aria-label="Previous image"
              >
                &#8592;
              </button>
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#23263b] bg-opacity-60 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-[#31375e] transition z-30"
                onClick={() => setCurrent((c) => (c + 1) % carouselImages.length)}
                aria-label="Next image"
              >
                &#8594;
              </button>
            </div>
            {/* Dots indicating carousel position */}
            <div className="flex gap-2 mt-8">
              {carouselImages.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to image ${idx + 1}`}
                  onClick={() => setCurrent(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    current === idx ? "bg-nst-blue" : "bg-muted opacity-30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
