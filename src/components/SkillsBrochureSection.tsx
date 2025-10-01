import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { useState } from "react";
import { TrendingUp, Award, Users, Target, IndianRupee, CheckCircle, FileText, ArrowRight, Star, ArrowDown } from "lucide-react";


const SkillsBrochureSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedSector, setSelectedSector] = useState<any>(null);


  const placementStats = [
    {
      icon: TrendingUp,
      label: "Highest Internship Monthly Stipend",
      value: "₹1,25,000",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Target,
      label: "Students Recieved a Full-Time Role Commitment",
      value: "71%",
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: IndianRupee,
      label: "Average Monthly Stipend of top 25% Students",
      value: "₹49,000",
      color: "text-blue-500",
      bgColor: "bg-muted/20"
    },
    {
      icon: Award,
      label: "Internship Placement Rate",
      value: "93%",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      icon: Users,
      label: "Students completed a second internship within 2 years of their program",
      value: "20%",
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10"
    },
    {
      icon: CheckCircle,
      label: "Average Manager Rating",
      value: "4.5/5",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10"
    }
  ];


  const internshipData = [
    { name: "Ed-Tech", value: 24.3, color: "#4F46E5" },
    { name: "Agency", value: 24.3, color: "#8B5CF6" },
    { name: "AI/Deep Tech", value: 18.9, color: "#10B981" },
    { name: "Financial Services", value: 13.5, color: "#F59E0B" },
    { name: "Others", value: 8.1, color: "#EF4444" },
    { name: "Health Tech", value: 5.4, color: "#F97316" },
    { name: "Defense/Research", value: 2.7, color: "#06B6D4" },
    { name: "Automobile", value: 2.7, color: "#84CC16" }
  ];


  const handlePieEnter = (_: any, index: number) => {
    setActiveIndex(index);
    setSelectedSector(internshipData[index]);
  };


  const handlePieLeave = () => {
    setActiveIndex(null);
    setSelectedSector(null);
  };


  const renderCustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-card p-3 rounded-lg shadow-lg border border-border text-sm">
          <p className="font-semibold text-foreground">{data.name}</p>
          <p className="text-muted-foreground">{`${data.value}%`}</p>
        </div>
      );
    }
    return null;
  };


  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-nst-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-nst-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">93%</span> Students Landed a{" "}
            <span className="gradient-text">6 Month Internship</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See What Managers Are Saying—Straight From the Source
          </p>
        </div>


        {/* Modern Feedback Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 h-full">
          {/* SarvamAI Testimonial */}
          <Card className="flex flex-col justify-between bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
            <div>
            <div className="flex justify-center mb-4">
                <img 
                  src="/src/components/ui/Sarvam Logo.png" 
                  alt="Sarvam Logo" 
                  className="h-25 object-contain"
                />
                <span className="text-lg font-bold text-foreground">Rachit</span>
              </div>
              <div className="text-gray-700 mb-4 leading-relaxed text-xl text-center">
                There were times when we had just <span className="font-bold">two days—or even less</span> to deliver, and <span className="font-bold">Rachit stepped up</span> to handle everything on his own, ensuring it was <span className="font-bold">production-ready</span>.
              </div>
            </div>
            <div className="mt-6 text-center">
              <div className="font-bold text-gray-900 text-lg">Sneha Prabu</div>
              <div className="text-gray-500 text-base mt-1">Product Manager, SarvamAI</div>
            </div>
          </Card>


          {/* Allen Digital Testimonial */}
          <Card className="flex flex-col justify-between bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
            <div>
            <div className="flex justify-center mb-4">
                <img 
                  src="src/assets/Allen .png" 
                  alt="Sarvam Logo" 
                  className="h-25 object-contain"
                />
                <span className="text-lg font-bold text-foreground">Aryan</span>
              </div>
              <div className="text-gray-700 mb-4 leading-relaxed text-xl text-center">
                <span className="font-bold">Aryan has performed well</span> in automation and <span className="font-bold">on-call failure analysis</span>. He has also shown <span className="font-bold">genuine involvement in AI-related tasks</span> and was able to <span className="font-bold">drive his work effectively with guidance</span>.
              </div>
            </div>
            <div className="mt-6 text-center">
              <div className="font-bold text-gray-900 text-lg">Sanyasi Naidu</div>
              <div className="text-gray-500 text-base mt-1">Director Of Engineering, Allen Digital</div>
            </div>
          </Card>


          {/* ZoomCar Testimonial */}
          <Card className="flex flex-col justify-between bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
            <div>
              <div className="flex justify-center mb-4">
                <img 
                  src="src/assets/image copy 2.png" 
                  alt="Sarvam Logo" 
                  className="h-25 object-contain"
                />
              </div>
              <div className="text-gray-700 mb-4 leading-relaxed text-xl text-center">
                Vaishnav <span className="font-bold">quickly grasped our coding practices</span>, <span className="font-bold">adapted to new tech stacks</span>, and <span className="font-bold">made meaningful contributions</span>. With <span className="font-bold">solid fundamentals</span> and a <span className="font-bold">strong ability to learn</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <div className="font-bold text-gray-900 text-lg">Arpit Dixit</div>
              <div className="text-gray-500 text-base mt-1">Lead Software Engineer, ZoomCar</div>
            </div>
          </Card>
        </div>


        {/* Divider & Load More Button */}
        <div className="flex items-center justify-center mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <div className="px-6">
            <Button
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-6 py-2 rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition-all duration-300"
              onClick={() => {
                // Add load more functionality here
                console.log("Load more clicked");
              }}
            >
              Load More
              <ArrowDown className="w-5 h-5" />
            </Button>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        </div>


        {/* Enhanced Performance Statistics Section */}
        <div className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border/50 mb-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch min-h-[600px]">
            <div className="flex flex-col space-y-6">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                  <span className="gradient-text">Placement Statistics</span>
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Our students consistently excel in their internships and secure excellent opportunities
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                {placementStats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <Card 
                      key={index} 
                      className={`p-4 bg-gradient-to-br from-background to-accent/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 ${stat.color.replace('text-', 'border-')} group h-full`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <div className={`p-3 rounded-xl ${stat.bgColor} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`h-5 w-5 ${stat.color}`} />
                        </div>
                        <div className={`text-lg font-bold ${stat.color}`}>
                          {stat.value}
                        </div>
                      </div>
                      <div className="text-xs font-medium text-foreground leading-relaxed">
                        {stat.label}
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>


            {/* Divider */}
            <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-border to-transparent transform -translate-x-1/2"></div>


            {/* Pie Chart Section */}
            <div className="flex flex-col">
              <Card className="bg-gradient-to-br from-card to-accent/5 rounded-2xl border border-border shadow-xl hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">
                <div className="p-6 flex flex-col h-full">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Where Our <span className="text-nst-purple">Students Interned</span>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Distribution across various industry sectors
                    </p>
                  </div>
                  <div className="mb-6 flex-1 flex items-center justify-center">
                    <ResponsiveContainer width="100%" height={280}>
                      <PieChart onMouseLeave={handlePieLeave}>
                        <Pie
                          data={internshipData}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          outerRadius={120}
                          innerRadius={50}
                          paddingAngle={5}
                          fill="#8884d8"
                          onMouseEnter={handlePieEnter}
                          onMouseLeave={handlePieLeave}
                        >
                          {internshipData.map((entry, index) => (
                            <Cell 
                              key={`cell-${index}`} 
                              fill={entry.color} 
                              stroke={entry.color}
                              strokeWidth={activeIndex === index ? 3 : 1}
                              style={{ 
                                filter: activeIndex === index ? 'brightness(1.2)' : 'none', 
                                transition: 'filter 0.3s ease-in-out, stroke-width 0.3s ease-in-out' 
                              }}
                            />
                          ))}
                        </Pie>
                        <Tooltip content={renderCustomTooltip} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                    {internshipData.map((entry, index) => (
                      <div 
                        key={index}
                        className="flex items-center cursor-pointer hover:bg-accent/50 rounded p-1 transition-colors"
                        onMouseEnter={() => handlePieEnter(entry, index)}
                        onMouseLeave={handlePieLeave}
                      >
                        <div 
                          className="w-3 h-3 rounded-full mr-2 flex-shrink-0" 
                          style={{ backgroundColor: entry.color }}
                        ></div>
                        <span className={`text-muted-foreground truncate ${activeIndex === index ? 'font-bold text-foreground' : ''}`}>
                          {entry.name}: {entry.value}%
                        </span>
                      </div>
                    ))}
                  </div>
                  {selectedSector && (
                    <div className="mb-4 p-3 bg-accent/20 rounded-lg border border-border">
                      <p className="text-sm font-semibold text-foreground text-center" style={{ color: selectedSector.color }}>
                        {selectedSector.name}: {selectedSector.value}%
                      </p>
                    </div>
                  )}
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">
                      Click on any sector to see detailed information
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>


        {/* Enhanced Report Card CTA - Full Width */}
        <div className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-xl">
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-8 relative overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group">
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-start gap-8">
              <div className="flex-shrink-0 mx-auto lg:mx-0">
                <div className="relative transform rotate-3 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-6 shadow-xl group-hover:rotate-6 transition-transform duration-500">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-nst-blue to-nst-purple rounded-xl flex items-center justify-center mx-auto mb-3">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-sm uppercase tracking-wide">
                      INTERNSHIP REPORT
                    </h4>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <div className="w-12 h-1 bg-muted rounded"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <div className="w-12 h-1 bg-muted rounded"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <div className="w-12 h-1 bg-muted rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <div className="mb-6">
                  <Badge className="mb-3 bg-green-900 text-green-100 text-xs font-medium">
                    Released Audited Placement Internship Report 2025
                  </Badge>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    93.07% Of Students Secured Internships By Their Second Year.
                  </h3>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl px-6 py-4 text-white flex items-center gap-4 mb-8 justify-center lg:justify-start shadow-lg">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-base">
                      Certified by B2K Analytics
                    </p>
                    <p className="text-white/90 text-sm">(IIM Ahmedabad's Placement Auditors)</p>
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-nst-blue to-nst-purple text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl w-full lg:w-auto text-base group">
                  View Official Report
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </div>


        {/* Internship Case Studies Section */}
        <div className="py-20 relative overflow-hidden bg-background">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]"></div>
          </div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-nst-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-nst-purple/5 rounded-full blur-3xl"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="gradient-text">Internship Case Studies</span>
              </h2>
              <p className="text-lg lg:text-xl text-muted-foreground">
                From Classrooms to Industry: Hands-On Internship Experience and Projects
              </p>
            </div>
            {/* Zuvees Promotional Graphics */}
            <div className="flex justify-center mb-16 space-x-8 relative">
              <div className="max-w-4xl w-full relative z-10">
                <img
                  src="/src/assets/Screenshot 2025-10-01 at 3.32.25 AM.png"
                  alt="Zuvees - Building a UAE-Based Startup's Product from Scratch"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  loading="lazy"
                />
              </div>
              <div className="max-w-4xl w-full absolute top-0 left-0 z-0">
                <img
                  src="/src/assets/Screenshot 2025-10-01 at 3.32.25 AM.png"
                  alt="Blurred Zuvees Background"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  loading="lazy"
                  style={{ filter: "blur(8px)", opacity: 0.5 }}
                />
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};


export default SkillsBrochureSection;
