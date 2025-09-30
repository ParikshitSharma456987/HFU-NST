import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, GraduationCap, Building2 } from "lucide-react";
import { useState } from "react";

// Import instructor images
import gauravImage from "@/assets/instructor-gaurav-original.jpg";
import deepakImage from "@/assets/instructor-deepak-original.jpg";
import gopinathImage from "@/assets/instructor-gopinath-original.jpg";
import soumitraImage from "@/assets/instructor-soumitra-original.jpg";

const InstructorProfileSection = () => {
  const [hoveredInstructor, setHoveredInstructor] = useState<number | null>(null);

  const instructors = [
    {
      id: 1,
      name: "Gaurav Gehlot",
      title: "Ex-Software Engineer",
      company: "Goldman Sachs",
      image: gauravImage,
      companyLogo: "",
      linkedinUrl: "#",
      expertise: ["Algorithmic Trading", "Financial Systems", "High-Performance Computing"],
      experience: "8+ years",
      background: "Led critical trading systems at Goldman Sachs with $1B+ daily transaction volume",
      color: "blue"
    },
    {
      id: 2, 
      name: "Deepak Gour",
      title: "Ex-Software Engineer", 
      company: "Google",
      image: deepakImage,
      companyLogo: "",
      linkedinUrl: "#",
      expertise: ["Distributed Systems", "Cloud Architecture", "Machine Learning"],
      experience: "6+ years",
      background: "Built scalable systems serving billions of users at Google Search and YouTube",
      color: "red"
    },
    {
      id: 3,
      name: "Dr. Gopinath",
      title: "Professor, Newton School of Technology",
      company: "PhD, Stanford University", 
      image: gopinathImage,
      companyLogo: "",
      linkedinUrl: "#",
      expertise: ["Computer Science Theory", "Research Methodology", "Academic Excellence"],
      experience: "15+ years",
      background: "Leading researcher in AI/ML with 50+ publications and Stanford PhD",
      color: "purple"
    },
    {
      id: 4,
      name: "Soumitra Mishra", 
      title: "Lead Instructor",
      company: "Ex - Principal Engineer at MakeMyTrip",
      image: soumitraImage,
      companyLogo: "",
      linkedinUrl: "#",
      expertise: ["Product Engineering", "Team Leadership", "Startup Scaling"],
      experience: "10+ years", 
      background: "Scaled MakeMyTrip's core platform from startup to IPO, leading 50+ engineers",
      color: "orange"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Students Learn From The Best{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400">
              Industry Leaders
            </span>
          </h2>
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-gradient-to-r from-slate-800/80 to-gray-800/80 rounded-2xl p-6 border-l-4 border-orange-400 backdrop-blur-sm">
              <p className="text-lg text-gray-300 leading-relaxed italic">
                "Our faculty bridges the gap between industry and academia, giving you the best of both worlds."
              </p>
            </div>
          </div>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {instructors.map((instructor, index) => {
            const isHovered = hoveredInstructor === instructor.id;
            
            return (
              <Card 
                key={instructor.id}
                className={`group relative overflow-hidden transition-all duration-500 transform cursor-pointer border-2
                  ${isHovered ? 'scale-105 shadow-2xl border-orange-400/50 shadow-orange-400/20' : 'hover:scale-102 border-gray-700'} 
                  bg-gradient-to-br from-slate-800 to-gray-900 hover:shadow-xl animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredInstructor(instructor.id)}
                onMouseLeave={() => setHoveredInstructor(null)}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-orange-400 to-purple-400"></div>
                
                <div className="relative">
                  {/* Profile Image */}
                  <div className="relative p-6 pb-0">
                    <div className="relative mx-auto w-32 h-32 mb-4">
                      <img
                        src={instructor.image}
                        alt={`${instructor.name} - ${instructor.title}`}
                        className="w-full h-full object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow border-2 border-gray-600 group-hover:border-orange-400"
                      />
                      
                      {/* LinkedIn Badge */}
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Linkedin className="w-4 h-4 text-white" />
                      </div>
                      
                      {/* Experience Badge */}
                      <div className="absolute -top-2 -left-2 px-2 py-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg text-xs font-bold text-white shadow-lg">
                        {instructor.experience}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 pt-2">
                    {/* Name & Title */}
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-300 transition-colors">
                        {instructor.name}
                      </h3>
                      <p className="text-sm font-medium text-gray-300 mb-2">
                        {instructor.title}
                      </p>
                      
                      {/* Company */}
                      <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                        <span className="font-medium">{instructor.company}</span>
                      </div>
                    </div>

                    {/* Expertise Pills */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1 justify-center">
                        {instructor.expertise.slice(0, 2).map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            variant="secondary" 
                            className="text-xs px-2 py-1 bg-gray-700/50 text-gray-300 hover:bg-orange-500/20 border-gray-600"
                          >
                            {skill}
                          </Badge>
                        ))}
                        {instructor.expertise.length > 2 && (
                          <Badge variant="secondary" className="text-xs px-2 py-1 bg-gray-700/50 text-gray-300 border-gray-600">
                            +{instructor.expertise.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Hover Content */}
                    <div className={`transition-all duration-300 ${isHovered ? 'opacity-100 max-h-32' : 'opacity-0 max-h-0'} overflow-hidden`}>
                      <div className="border-t border-gray-700 pt-3">
                        <p className="text-xs text-gray-400 leading-relaxed text-center">
                          {instructor.background}
                        </p>
                      </div>
                    </div>

                    {/* Default state indicator */}
                    {!isHovered && (
                      <div className="text-xs text-gray-500 text-center opacity-60">
                        Hover to learn more
                      </div>
                    )}

                    {/* Action Button */}
                    <div className="mt-4 text-center">
                      <button className="text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors group-hover:underline">
                        View Profile →
                      </button>
                    </div>
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

export default InstructorProfileSection;