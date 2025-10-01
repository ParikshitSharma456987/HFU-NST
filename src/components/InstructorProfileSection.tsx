import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, ChevronLeft, ChevronRight } from "lucide-react";

// Import instructor images
import gauravImage from "@/assets/instructor-gaurav-original.jpg";
import deepakImage from "@/assets/instructor-deepak-original.jpg";
import gopinathImage from "@/assets/instructor-gopinath-original.jpg";
import soumitraImage from "@/assets/instructor-soumitra-original.jpg";

const InstructorProfileSection = () => {

  const instructors = [
    {
      id: 1,
      name: "Gaurav Gehlot",
      title: "Ex-Software Engineer",
      company: "Goldman Sachs",
      image: gauravImage,
      linkedinUrl: "#"
    },
    {
      id: 2, 
      name: "Deepak Gour",
      title: "Ex-Software Engineer", 
      company: "Google",
      image: deepakImage,
      linkedinUrl: "#"
    },
    {
      id: 3,
      name: "Dr. Gopinath",
      title: "Professor, Newton School of Technology",
      company: "PhD, Stanford University", 
      image: gopinathImage,
      linkedinUrl: "#"
    },
    {
      id: 4,
      name: "Soumitra Mishra", 
      title: "Lead Instructor",
      company: "Ex - Principal Engineer at MakeMyTrip",
      image: soumitraImage,
      linkedinUrl: "#"
    }
  ];

  return (
    <section className="py-20 bg-background text-white relative overflow-hidden">
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
        </div>

        {/* Instructors Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {instructors.map((instructor, index) => (
              <Card 
                key={instructor.id}
                className="relative overflow-hidden border border-gray-700 bg-gradient-to-br from-slate-800 to-gray-900"
              >
                <div className="relative p-4">
                  {/* Profile Image */}
                  <div className="relative mx-auto w-20 h-20 mb-3">
                    <img
                      src={instructor.image}
                      alt={`${instructor.name} - ${instructor.title}`}
                      className="w-full h-full object-cover rounded-xl shadow-md border border-gray-600"
                    />
                    
                    {/* LinkedIn Badge */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-nst-blue rounded-full flex items-center justify-center shadow-md">
                      <Linkedin className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    {/* Name & Title */}
                    <h3 className="text-lg font-bold text-white mb-1">
                      {instructor.name}
                    </h3>
                    <p className="text-xs text-gray-300 mb-2">
                      {instructor.title}
                    </p>
                    
                    {/* Company */}
                    <div className="text-xs text-gray-400">
                      <span>{instructor.company}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-end gap-2">
            <button className="w-10 h-10 bg-gradient-to-r from-nst-blue to-nst-purple rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button className="w-10 h-10 bg-gradient-to-r from-nst-blue to-nst-purple rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorProfileSection;