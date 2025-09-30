import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, DollarSign, Star, Zap, Target } from "lucide-react";

const StudentAchievementsSection = () => {
  const achievements = [
    {
      icon: Trophy,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      title: "Regional ICPC Rank-Holder",
      subtitle: "Competitive Programming Milestone",
      description: "Secured Rank #112 in the ICPC Regional rounds—a testament to strong problem-solving abilities, teamwork, and algorithmic depth under competitive pressure.",
      highlight: "Rank 112 in ICPC Regionals",
      details: "Achieved under mentorship through Newton School of Technology’s GoForGold initiative, competing among top collegiate teams in the region."
    },
    
    {
      icon: Award,
      color: "text-blue-500", 
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      title: "Google Summer of Code",
      subtitle: "Open Source Contributors",
      description: "Six of our students have been selected for Google Summer of Code (GSoC) - one of the world's most prestigious open-source programmes. They're interning with global brands, building real-world software, and contributing to impactful tech projects.",
      highlight: "6 Selected Students",
      details: "Contributing to global open-source projects with Google mentorship"
    },
    {
      icon: DollarSign,
      color: "text-green-500",
      bgColor: "bg-green-50", 
      borderColor: "border-green-200",
      title: "ISB Startup Funding",
      subtitle: "Entrepreneurial Success",
      description: "Secured ₹10 Lakh funding from Indian School of Business (ISB) for innovative startup ventures. This achievement showcases our students' ability to transform technical skills into viable business solutions.",
      highlight: "₹10 Lakh Funding",
      details: "Seed funding from prestigious ISB incubation program"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-nst-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-nst-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {/* <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
            🏆 Exceptional Achievements
          </Badge> */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            NST's <span className="gradient-text">Student Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our students consistently achieve excellence across competitive programming, 
            open-source contributions, and entrepreneurial ventures
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className={`p-8 bg-card border border-border hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group`}>
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${achievement.color.replace('text-', 'from-').replace('-500', '-500')} to-${achievement.color.replace('text-', '').replace('-500', '-600')} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <Badge className={`mb-3 bg-gradient-to-r ${achievement.color.replace('text-', 'from-').replace('-500', '-100')} to-${achievement.color.replace('text-', '').replace('-500', '-200')} text-${achievement.color.replace('text-', '')} border-0`}>
                    {achievement.subtitle}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{achievement.title}</h3>
                  <div className={`text-3xl font-bold ${achievement.color} mb-4`}>
                    {achievement.highlight}
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                  <div className={`p-4 bg-gradient-to-r ${achievement.color.replace('text-', 'from-').replace('-500', '-50')} to-${achievement.color.replace('text-', '').replace('-500', '-100')} rounded-xl border border-${achievement.color.replace('text-', '').replace('-500', '-200')}`}>
                    <p className={`text-sm font-medium ${achievement.color}`}>
                      {achievement.details}
                    </p>
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

export default StudentAchievementsSection;