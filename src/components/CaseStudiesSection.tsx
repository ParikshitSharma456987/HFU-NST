import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  ExternalLink, 
  Users, 
  Calendar, 
  Trophy,
  ArrowRight,
  X
} from "lucide-react";

const CaseStudiesSection = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const caseStudies = [
    {
      company: "Sarvam AI",
      logo: "🤖",
      title: "Building Conversational AI Models",
      description: "NST students developed advanced NLP models for multilingual conversation systems.",
      duration: "6 months",
      students: 4,
      technologies: ["Python", "TensorFlow", "Transformers", "AWS", "Docker"],
      achievements: [
        "Improved model accuracy by 35%",
        "Reduced inference time by 50%",
        "Deployed to production serving 100K+ users"
      ],
      results: "4 students received full-time offers with 40% salary premium",
      testimonial: "These students delivered production-ready code from week one. Exceptional talent.",
      manager: "Dr. Vivek Kumar, CTO",
      videoUrl: "#",
      gradient: "from-nst-purple to-nst-blue"
    },
    {
      company: "Zuvees",
      logo: "🚀",
      title: "E-commerce Platform Optimization",
      description: "Full-stack development of scalable e-commerce solutions with advanced analytics.",
      duration: "4 months",
      students: 3,
      technologies: ["React", "Node.js", "MongoDB", "Redis", "Kubernetes"],
      achievements: [
        "Increased platform speed by 60%",
        "Built real-time analytics dashboard",
        "Implemented microservices architecture"
      ],
      results: "All 3 students joined as full-time developers",
      testimonial: "Outstanding problem-solving skills and clean code architecture.",
      manager: "Rahul Mehta, VP Engineering",
      videoUrl: "#",
      gradient: "from-nst-orange to-nst-warm"
    },
    {
      
      company: "Salary Se",
      logo: "💰",
      title: "FinTech Payment Solutions",
      description: "Secure payment processing and fraud detection systems development.",
      duration: "5 months",
      students: 2,
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Kafka", "ML"],
      achievements: [
        "Built fraud detection with 99.2% accuracy",
        "Processed $2M+ in transactions safely",
        "Reduced payment failures by 45%"
      ],
      results: "Both students promoted to senior intern roles",
      testimonial: "Security-first approach and attention to detail was impressive.",
      manager: "Priya Sharma, Head of Engineering",
      videoUrl: "#",
      gradient: "from-nst-green to-nst-blue"
    },
    {
      company: "IIT Roorkee",
      logo: "🎓",
      title: "Research Collaboration Project",
      description: "AI-powered research analysis tools for academic paper processing.",
      duration: "8 months",
      students: 5,
      technologies: ["Python", "PyTorch", "NLP", "FastAPI", "Docker"],
      achievements: [
        "Published 2 research papers",
        "Created open-source library with 500+ stars",
        "Presented at international conference"
      ],
      results: "2 students received PhD fellowship offers",
      testimonial: "Research-grade code quality and innovative thinking.",
      manager: "Prof. Ankit Sharma, CS Dept",
      videoUrl: "#",
      gradient: "from-nst-blue to-nst-purple"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-1/3 w-72 h-72 bg-nst-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-nst-purple/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Internship Case Studies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real projects, real impact. See how our students deliver exceptional results 
            in their internships across top companies and research institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <Card 
              key={index}
              className="p-6 card-glow card-hover cursor-pointer group relative overflow-hidden"
              onClick={() => setSelectedCase(index)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{study.logo}</div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-nst-blue transition-colors">
                        {study.company}
                      </h3>
                      <p className="text-sm text-muted-foreground">{study.title}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>

                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {study.description}
                </p>

                <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {study.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {study.students} students
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {study.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {study.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{study.technologies.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center text-sm">
                    <Trophy className="w-4 h-4 text-nst-orange mr-2" />
                    <span className="text-muted-foreground">View Success Story</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-nst-blue group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Detailed Case Study Modal */}
        {selectedCase !== null && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-lg z-50 flex items-center justify-center p-4">
            <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 relative">
              <Button
                variant="ghost" 
                size="icon"
                className="absolute top-4 right-4 z-10"
                onClick={() => setSelectedCase(null)}
              >
                <X className="w-4 h-4" />
              </Button>

              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">{caseStudies[selectedCase].logo}</div>
                  <div>
                    <h2 className="text-3xl font-bold gradient-text">{caseStudies[selectedCase].company}</h2>
                    <p className="text-xl text-muted-foreground">{caseStudies[selectedCase].title}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 rounded-lg bg-accent/20">
                    <Calendar className="w-6 h-6 text-nst-blue mx-auto mb-2" />
                    <div className="font-semibold">{caseStudies[selectedCase].duration}</div>
                    <div className="text-sm text-muted-foreground">Duration</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-accent/20">
                    <Users className="w-6 h-6 text-nst-green mx-auto mb-2" />
                    <div className="font-semibold">{caseStudies[selectedCase].students}</div>
                    <div className="text-sm text-muted-foreground">Students</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-accent/20">
                    <Trophy className="w-6 h-6 text-nst-orange mx-auto mb-2" />
                    <div className="font-semibold">Success</div>
                    <div className="text-sm text-muted-foreground">Outcome</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
                  <ul className="space-y-3 mb-6">
                    {caseStudies[selectedCase].achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-nst-green mt-2 mr-3 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudies[selectedCase].technologies.map((tech, index) => (
                      <Badge key={index} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Results</h3>
                  <Card className="p-4 bg-gradient-to-br from-nst-green/10 to-nst-blue/10 mb-6">
                    <p className="font-medium text-nst-green mb-2">🎯 Outcome</p>
                    <p>{caseStudies[selectedCase].results}</p>
                  </Card>

                  <h3 className="text-xl font-semibold mb-4">Manager Testimonial</h3>
                  <Card className="p-4 bg-accent/20">
                    <blockquote className="italic mb-3">
                      "{caseStudies[selectedCase].testimonial}"
                    </blockquote>
                    <div className="text-sm text-muted-foreground">
                      — {caseStudies[selectedCase].manager}
                    </div>
                  </Card>
                </div>
              </div>

              <div className="flex items-center justify-center mt-8 space-x-4">
                <Button className="btn-hero">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Success Story
                </Button>
                <Button variant="outline">
                  View Similar Projects
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudiesSection;