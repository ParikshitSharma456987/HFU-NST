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
      quote: "NST students come with exceptional problem-solving skills. We hired 3 interns and all of them exceeded expectations. Their code quality and understanding of system design is remarkable for freshers.",
      manager: "Priya Sharma",
      position: "Senior Engineering Manager",
      company: "Flipkart",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya"
    },
    {
      quote: "What impressed me most about NST students is their ability to work independently from day one. They don't need handholding and can contribute meaningfully to complex projects immediately.",
      manager: "Rohit Verma",
      position: "CTO",
      company: "Zomato",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rohit"
    },
    {
      quote: "The practical knowledge these students possess is outstanding. They understand not just coding but also deployment, testing, and best practices. It's rare to find such well-rounded freshers.",
      manager: "Anita Gupta",
      position: "VP Engineering",
      company: "Paytm",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=anita"
    },
    {
      quote: "NST graduates are different. They think like engineers from day one. Their ability to grasp business requirements and translate them into technical solutions is impressive.",
      manager: "Vikram Singh",
      position: "Head of Product",
      company: "Ola",
      rating: 4,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=vikram"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-900 relative overflow-hidden">
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

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="p-8 lg:p-12 card-glow relative overflow-hidden">
            <div className="absolute top-6 left-6 opacity-20">
              <Quote className="w-16 h-16 text-nst-blue" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-6 h-6 ${
                      i < testimonials[currentTestimonial].rating 
                        ? 'text-nst-orange fill-current' 
                        : 'text-muted-foreground'
                    }`} 
                  />
                ))}
              </div>
              
              <blockquote className="text-xl lg:text-2xl text-center mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              
              <div className="flex items-center justify-center">
                <img 
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].manager}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="text-center">
                  <div className="font-semibold text-lg">{testimonials[currentTestimonial].manager}</div>
                  <div className="text-nst-blue">{testimonials[currentTestimonial].position}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[currentTestimonial].company}</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full hover:bg-nst-blue/10"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial 
                      ? 'bg-nst-blue w-8' 
                      : 'bg-muted hover:bg-nst-blue/50'
                  }`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full hover:bg-nst-blue/10"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Additional Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card 
              key={index}
              className={`p-6 card-glow card-hover cursor-pointer transition-all duration-300 ${
                index === currentTestimonial ? 'ring-2 ring-nst-blue' : ''
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${
                      i < testimonial.rating 
                        ? 'text-nst-orange fill-current' 
                        : 'text-muted-foreground'
                    }`} 
                  />
                ))}
              </div>
              
              <blockquote className="text-sm mb-4 line-clamp-3">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.manager}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-medium text-sm">{testimonial.manager}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;