import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { useState } from "react";
import { TrendingUp, Award, Users, Target, IndianRupee, CheckCircle, FileText, ArrowRight, Star, Zap } from "lucide-react";

const SkillsBrochureSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedSector, setSelectedSector] = useState<any>(null);

  const placementStats = [
    {
      icon: TrendingUp,
      label: "Highest Internship Monthly Stipend",
      value: "₹1,25,000",
      // description: "per month achieved by students",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Target,
      label: "Students Recieved a Full-Time Role Commitment",
      value: "71%",
      // description: "of our students qualified for full-time roles",
      color: "text-green-500",
      bgColor: "bg-green-500/10"
      
    },
    {
      icon: IndianRupee,
      label: "Average Monthly Stipend of top 25% Students",
      value: "₹49,000",
      // description: "per month during internship",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
   
    {
      icon: Award,
      label: "Internship Placement Rate",
      value: "93%",
      // description: "successfully completed internships",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      icon: Users,
      label: "Students completed a second internship within 2 years of their program",
      value: "20%",
      // description: "",
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10"
    },
    {
      icon: CheckCircle,
      label: "Average Manager Rating",
      value: "4.5/5",
      // description: "average rating by managers",
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

  const handlePieClick = (data: any, index: number) => {
    setActiveIndex(index);
    setSelectedSector(data);
  };

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
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-nst-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-nst-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Main Heading Section */}
        <div className="text-center mb-16">
          {/* <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
            📊 Proven Results
          </Badge> */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">93%</span> Students Landed a{" "}
            <span className="gradient-text">6 month Internship</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See What Managers Are Saying—Straight From the Source
          </p>
        </div>

        {/* Modern Horizontal Feedback Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* DRDO Testimonial */}
          <Card className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              {/* Circular Avatar */}
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                <span className="text-white font-bold text-lg">J</span>
              </div>
              
              {/* Content Area */}
              <div className="flex-1 min-w-0">
                {/* Feedback Text */}
                <div className="text-gray-700 mb-4 leading-relaxed text-base">
                Rachit has consistently shown high ownership and adaptability, especially when we had less than 2 days to deliver critical work — he took charge and ensured everything was production-ready. Despite being in a very new company where many things had to be built from scratch, he embraced diverse tasks, learned quickly, and delivered results. 
                </div>
                
                {/* Author Info */}
                <div className="space-y-1">
                  <div className="font-bold text-gray-900 text-sm">Sneha</div>
                  <div className="text-gray-500 text-xs">Product Manager , SarvamAI</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Razorpay Testimonial */}
          <Card className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              {/* Circular Avatar */}
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                <span className="text-white font-bold text-lg">U</span>
              </div>
              
              {/* Content Area */}
              <div className="flex-1 min-w-0">
                {/* Feedback Text */}
                <div className="text-gray-700 mb-4 leading-relaxed text-base">
                   He has good learning ability and can pick up new concepts effectively. 
                </div>
                
                {/* Author Info */}
                <div className="space-y-1">
                  <div className="font-bold text-gray-900 text-sm">Abhishek Daiya</div>
                  <div className="text-gray-500 text-xs">Founder , Zuvees</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Sarvam Testimonial */}
          <Card className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              {/* Circular Avatar */}
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              
              {/* Content Area */}
              <div className="flex-1 min-w-0">
                {/* Feedback Text */}
                <div className="text-gray-700 mb-4 leading-relaxed text-base">
                  Rachit Kumar worked on the company's flagship product, implementing new features to enhance responsiveness.
                </div>
                
                {/* Author Info */}
                <div className="space-y-1">
                  <div className="font-bold text-gray-900 text-sm">Rachit Kumar</div>
                  <div className="text-gray-500 text-xs">Frontend Engineer Intern, Sarvam</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <div className="px-6">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        </div>

        {/* Enhanced Performance Statistics Section */}
        <div className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border/50 mb-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch min-h-[600px]">
            {/* Left Side - Enhanced Performance Statistics */}
            <div className="flex flex-col space-y-6">
              <div className="text-center lg:text-left">
                
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                  <span className="gradient-text">Performance Statistics</span>
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
                      <div className="flex items-start space-x-3 h-full">
                        <div className={`p-3 rounded-xl ${stat.bgColor} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`h-5 w-5 ${stat.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`text-lg font-bold ${stat.color} mb-2`}>
                            {stat.value}
                          </div>
                          <div className="text-xs font-medium text-foreground leading-relaxed">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-border to-transparent transform -translate-x-1/2"></div>

            {/* Right Side - Industry Distribution Pie Chart */}
            <div className="flex flex-col">
              <Card className="bg-gradient-to-br from-card to-accent/5 rounded-2xl border border-border shadow-xl hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">
                <div className="p-6 flex flex-col h-full">
                  {/* Header */}
                  <div className="text-center mb-6">
                    
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Where Our <span className="text-nst-purple">Students Interned</span>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Distribution across various industry sectors
                    </p>
                  </div>

                  {/* Pie Chart */}
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

                  {/* Legend */}
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

                  {/* Selected Sector Info */}
                  {selectedSector && (
                    <div className="mb-4 p-3 bg-accent/20 rounded-lg border border-border">
                      <p className="text-sm font-semibold text-foreground text-center" style={{ color: selectedSector.color }}>
                        {selectedSector.name}: {selectedSector.value}%
                      </p>
                    </div>
                  )}

                  {/* Interactive Instruction */}
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
          {/* Enhanced Report Card CTA */}
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-8 relative overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group">
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-start gap-8">
              {/* Enhanced Document Graphic */}
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
                        <div className="w-12 h-1 bg-slate-600 rounded"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <div className="w-12 h-1 bg-slate-600 rounded"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <div className="w-12 h-1 bg-slate-600 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="mb-6">
                  <Badge className="mb-3 bg-green-900 text-green-100 text-xs font-medium">
                    📊 RELEASED: INTERNSHIP REPORT 2025
                  </Badge>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    93.07% of students secured internships by their second year.
                  </h3>
                </div>

                {/* Enhanced Certification Badge */}
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl px-6 py-4 text-white flex items-center gap-4 mb-8 justify-center lg:justify-start shadow-lg">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-base">
                      Certified by B2K Analytics
                    </p>
                    <p className="text-white/90 text-sm">
                      (IIM Ahmedabad's Placement Auditors)
                    </p>
                  </div>
                </div>

                {/* Enhanced CTA Button */}
                <Button className="bg-gradient-to-r from-nst-blue to-nst-purple text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl w-full lg:w-auto text-base group">
                  View Official Report
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Internship Case Studies Section */}
        <div className="py-20 relative overflow-hidden bg-slate-900">
          {/* Grid Pattern Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]"></div>
          </div>
          
          {/* Background Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-nst-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-nst-purple/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="gradient-text">Internship Case Studies</span>
              </h2>
            </div>

            {/* Case Studies Horizontal Scroll */}
            <div className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory">
              {/* Case Study 1 - DRDO */}
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden w-full max-w-md flex-shrink-0 snap-center">
                <div className="p-6 space-y-5">
                  {/* Company Logo - Centered at Top */}
                  <div className="flex justify-center">
                    <div className="w-20 h-12 bg-white rounded-lg flex items-center justify-center shadow-md p-2">
                      <img 
                        src="https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/6839667e3698a2cb9f468d4a_Zuvees%20Logo.avif" 
                        alt="Zuvees Logo" 
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Project Title */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-white leading-tight">
                      Zuvees Platform
                    </h3>
                  </div>

                  {/* Internship Summary */}
                  <div className="bg-slate-700/50 rounded-xl p-4 border border-slate-600/50">
                    <p className="text-sm text-slate-200 leading-relaxed text-center">
                      Developed and enhanced the Zuvees platform with advanced features and user interface improvements. Implemented modern web technologies and optimized performance for better user experience.
                    </p>
                  </div>

                  {/* Bottom Section - Proof of Concept & Student Info */}
                  <div className="space-y-4">
                    {/* Proof of Concept Image */}
                    <div className="w-full h-32 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg border border-slate-600 overflow-hidden shadow-sm">
                      <img 
                        src="https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/683a981c53773d98819f128c_Zuvees%20Img.avif" 
                        alt="Zuvees Platform Proof of Work" 
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Student Info */}
                    <div className="flex items-center gap-3">
                      {/* Student Photo */}
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white font-bold text-sm">JY</span>
                      </div>
                      
                      {/* Student Details */}
                      <div>
                        <h4 className="text-sm font-semibold text-white">Janhvi Yadav</h4>
                        <p className="text-xs text-slate-300">Batch 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Case Study 2 - Razorpay */}
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden w-full max-w-md flex-shrink-0 snap-center">
                <div className="p-6 space-y-5">
                  {/* Company Logo - Centered at Top */}
                  <div className="flex justify-center">
                    <div className="w-20 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-md">
                      <span className="text-white font-bold text-sm">Razorpay</span>
                    </div>
                  </div>

                  {/* Project Title */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-white leading-tight">
                      AI Code Generator
                    </h3>
                  </div>

                  {/* Internship Summary */}
                  <div className="bg-slate-700/50 rounded-xl p-4 border border-slate-600/50">
                    <p className="text-sm text-slate-200 leading-relaxed text-center">
                      Built an intelligent AI tool that automatically converts design mockups into production-ready code. Integrated advanced computer vision and natural language processing to streamline the development workflow.
                    </p>
                  </div>

                  {/* Bottom Section - Proof of Concept & Student Info */}
                  <div className="space-y-4">
                    {/* Proof of Concept Image */}
                    <div className="w-full h-20 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg border border-slate-600 flex items-center justify-center shadow-sm">
                      <div className="w-10 h-10 bg-slate-500 rounded flex items-center justify-center">
                        <span className="text-slate-300 text-lg">🤖</span>
                      </div>
                    </div>
                    
                    {/* Student Info */}
                    <div className="flex items-center gap-3">
                      {/* Student Photo */}
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white font-bold text-sm">U</span>
                      </div>
                      
                      {/* Student Details */}
                      <div>
                        <h4 className="text-sm font-semibold text-white">Udita</h4>
                        <p className="text-xs text-slate-300">Batch 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsBrochureSection;
