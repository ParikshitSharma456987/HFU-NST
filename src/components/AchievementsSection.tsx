import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  Medal, 
  Target, 
  Zap, 
  Award, 
  Star,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from "lucide-react";

const AchievementsSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const achievements = [
    {
      category: "Competitive Programming",
      icon: Trophy,
      color: "nst-orange",
      gradient: "from-nst-orange to-nst-warm",
      stats: { primary: "250+", secondary: "Rank 1-1000" },
      achievements: [
        { title: "CodeChef 6-Star", count: 12, description: "Global top 0.1% programmers" },
        { title: "Codeforces Expert+", count: 28, description: "Rating 1600+ competitive coders" },
        { title: "Google Kickstart", count: 15, description: "Top 500 globally in multiple rounds" },
        { title: "ICPC Regionals", count: 8, description: "Asia-Pacific regional qualifiers" }
      ],
      details: "Our students consistently rank in top percentiles of global programming competitions, demonstrating exceptional algorithmic thinking and problem-solving skills."
    },
    {
      category: "Google Summer of Code",
      icon: Medal,
      color: "nst-green",
      gradient: "from-nst-green to-nst-blue",
      stats: { primary: "45", secondary: "GSOC Selections" },
      achievements: [
        { title: "2024 Selections", count: 18, description: "Highest from any Indian institute" },
        { title: "2023 Selections", count: 15, description: "Contributed to major open source projects" },
        { title: "Mentorship Projects", count: 8, description: "NST students as mentors" },
        { title: "Project Completions", count: 42, description: "98% successful completion rate" }
      ],
      details: "Exceptional open-source contributions with students selected for prestigious Google Summer of Code program, working with organizations like Apache, Mozilla, and TensorFlow."
    },
    {
      category: "Startup Funding",
      icon: Target,
      color: "nst-purple",
      gradient: "from-nst-purple to-nst-blue",
      stats: { primary: "$2.5M+", secondary: "Funding Raised" },
      achievements: [
        { title: "Seed Funding", count: 8, description: "Startups with $50K-500K funding" },
        { title: "Incubator Selection", count: 12, description: "Top accelerators like Y Combinator, Techstars" },
        { title: "Product Launches", count: 15, description: "Live products with 10K+ users" },
        { title: "Patents Filed", count: 6, description: "IP protection for innovative solutions" }
      ],
      details: "Student entrepreneurs securing significant funding and building scalable products, with several startups achieving unicorn potential."
    },
    {
      category: "Technical Excellence",
      icon: Zap,
      color: "nst-blue",
      gradient: "from-nst-blue to-nst-purple",
      stats: { primary: "500+", secondary: "Projects Built" },
      achievements: [
        { title: "Open Source Stars", count: 15000, description: "Combined GitHub stars across projects" },
        { title: "Research Papers", count: 25, description: "Published in top-tier conferences" },
        { title: "Tech Talks", count: 80, description: "Conferences and meetup presentations" },
        { title: "Certifications", count: 200, description: "Cloud and AI certifications achieved" }
      ],
      details: "Comprehensive technical achievements spanning open source contributions, research publications, and industry recognition."
    },
    {
      category: "Industry Recognition",
      icon: Award,
      color: "nst-warm",
      gradient: "from-nst-warm to-nst-orange",
      stats: { primary: "100+", secondary: "Awards Won" },
      achievements: [
        { title: "Hackathon Wins", count: 35, description: "Major hackathons including Smart India Hackathon" },
        { title: "Innovation Awards", count: 18, description: "University and industry innovation recognition" },
        { title: "Scholarship Recipients", count: 45, description: "Merit-based scholarships and grants" },
        { title: "Industry Mentorships", count: 60, description: "Selected for exclusive mentorship programs" }
      ],
      details: "Outstanding recognition from industry leaders, universities, and government institutions for innovative solutions and technical excellence."
    },
    {
      category: "Academic Excellence",
      icon: Star,
      color: "nst-green",
      gradient: "from-nst-green to-nst-warm",
      stats: { primary: "9.2", secondary: "Average CGPA" },
      achievements: [
        { title: "University Toppers", count: 22, description: "Rank 1-10 in respective universities" },
        { title: "Research Fellowships", count: 15, description: "PhD and Masters fellowship offers" },
        { title: "Publication Citations", count: 500, description: "Combined citations for research work" },
        { title: "Teaching Assistantships", count: 30, description: "Selected as TAs in premier institutions" }
      ],
      details: "Exceptional academic performance with students consistently ranking among university toppers and pursuing advanced research opportunities."
    }
  ];

  const toggleExpansion = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="achievements" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-nst-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-nst-orange/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Achievements Our Students <span className="gradient-text">Have</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From competitive programming championships to startup funding, our students 
            consistently achieve excellence across multiple domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className={`p-6 card-glow cursor-pointer transition-all duration-300 hover:scale-105 ${
                expandedCard === index ? `ring-2 ring-offset-2 ring-offset-background ring-${achievement.color}` : ''
              }`}
              onClick={() => toggleExpansion(index)}
            >
              <div className="relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-5`}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-${achievement.color}/20`}>
                      <achievement.icon className={`w-6 h-6 text-${achievement.color}`} />
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold text-${achievement.color}`}>
                        {achievement.stats.primary}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {achievement.stats.secondary}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-3">
                    {achievement.category}
                  </h3>

                  {/* Preview Achievements */}
                  <div className="space-y-2 mb-4">
                    {achievement.achievements.slice(0, 2).map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{item.title}</span>
                        <Badge 
                          variant="secondary" 
                          className={`bg-${achievement.color}/10 text-${achievement.color} hover:bg-${achievement.color}/20`}
                        >
                          {item.count}
                        </Badge>
                      </div>
                    ))}
                  </div>

                  {/* Expand/Collapse Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">
                      {expandedCard === index ? 'Show Less' : `+${achievement.achievements.length - 2} more`}
                    </span>
                    {expandedCard === index ? (
                      <ChevronUp className="w-4 h-4 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-muted-foreground" />
                    )}
                  </div>

                  {/* Expanded Content */}
                  {expandedCard === index && (
                    <div className="mt-6 space-y-4 animate-fade-in">
                      <div className="space-y-3">
                        {achievement.achievements.slice(2).map((item, itemIndex) => (
                          <div key={itemIndex + 2} className="border-l-2 border-accent pl-4">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-sm">{item.title}</span>
                              <Badge 
                                variant="outline" 
                                className={`border-${achievement.color}/30 text-${achievement.color}`}
                              >
                                {item.count}
                              </Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">{item.description}</p>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 rounded-lg bg-accent/20 border border-accent">
                        <p className="text-sm text-muted-foreground mb-3">
                          {achievement.details}
                        </p>
                        <div className="flex items-center text-xs text-nst-blue">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          View Detailed Achievements
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Total Achievements", value: "2,500+", icon: Trophy },
            { label: "Recognition Awards", value: "150+", icon: Medal },
            { label: "Student Entrepreneurs", value: "25", icon: Target },
            { label: "Industry Partnerships", value: "50+", icon: Award }
          ].map((stat, index) => (
            <Card key={index} className="p-4 text-center card-glow">
              <stat.icon className="w-8 h-8 text-nst-blue mx-auto mb-2" />
              <div className="text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;