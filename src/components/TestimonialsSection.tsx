import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Quote, 
  Star, 
  Users, 
  Building, 
  TrendingUp,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const stats = [
    { label: "Students Placed", value: "93", icon: Users },
    { label: "Partner Companies", value: "45", icon: Building },
    { label: "Success Rate", value: "93%", icon: TrendingUp },
    { label: "Average Rating", value: "4.8", icon: Star },
  ];

  const testimonials = [
    {
      quote: "Vaishnav quickly grasped our coding practices, adapted to new tech stacks, and made meaningful contributions. With solid fundamentals and a strong ability to learn, he also demonstrated good communication skills and built rapport effectively within the team and across teams.",
      manager: "Arpit Dixit",
      position: "Lead Software Engineer",
      company: "Zoomcar",
      rating: 5,
      avatar: "A"
    },
    {
      quote: "He has good learning ability and can pick up new concepts effectively.",
      manager: "Abhishek Daiya",
      position: "Founder",
      company: "Zuvees",
      rating: 5,
      avatar: "U"
    },
    {
      quote: "Rachit Kumar worked on the company's flagship product, implementing new features to enhance responsiveness.",
      manager: "Rachit Kumar",
      position: "Frontend Engineer Intern",
      company: "Sarvam",
      rating: 5,
      avatar: "R"
    },
    {
      quote: "Sneha showed exceptional ownership and adaptability, especially under tight deadlines and in a new company environment. She delivered results consistently.",
      manager: "Sneha",
      position: "Product Manager",
      company: "SarvamAI",
      rating: 5,
      avatar: "J"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-nst-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-nst-orange/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">93 Students Placed</span> Through 1st-Year Internships
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Don't Trust Us, Listen To Raw Manager Feedbacks
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-6 text-center card-glow card-hover fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-nst-blue/20 mb-4 mx-auto">
                <stat.icon className="w-6 h-6 text-nst-blue" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>


        {/* Single Testimonial Card with Scroll */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-0">
            {/* Avatar */}
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                {testimonials[currentTestimonial].avatar}
              </div>
              <div className="flex-1">
                <blockquote className="text-gray-800 leading-relaxed text-sm">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
              </div>
            </div>
            
            {/* Author Info */}
            <div className="text-right">
              <div className="font-bold text-gray-900 text-sm">{testimonials[currentTestimonial].manager}</div>
              <div className="text-gray-600 text-xs">{testimonials[currentTestimonial].position}, {testimonials[currentTestimonial].company}</div>
            </div>
          </div>

          {/* Scroll Navigation */}
          <div className="flex items-center justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentTestimonial 
                    ? 'bg-nst-blue w-6' 
                    : 'bg-muted hover:bg-nst-blue/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;