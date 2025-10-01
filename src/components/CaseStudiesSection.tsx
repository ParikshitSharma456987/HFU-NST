import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import zuveesImage from '@/assets/Screenshot 2025-10-01 at 3.32.25 AM.png';

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-20 bg-background relative overflow-hidden">
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

        {/* Case Study Card Layout */}
        <div className="flex items-center gap-6 w-full mb-16">
          {/* Main Card - 75% width */}
          <div className="w-3/4">
            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden relative h-96">
              <div className="p-8 h-full flex flex-col">
                {/* NST Logo overlay on top right */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md p-2">
                  <img 
                    src="/src/assets/nst-logo.png" 
                    alt="NST Logo" 
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Zuvees Logo at top center */}
                <div className="flex justify-center pt-4">
                  <div className="w-32 h-20 bg-white rounded-xl flex items-center justify-center shadow-lg p-4">
                    <img 
                      src="/src/assets/Zuvees logo.png" 
                      alt="Zuvees Logo" 
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Main Title */}
                <div className="text-center mb-4">
                  <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                    Building a UAE-Based Startup's Product from Scratch
                  </h2>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-slate-200 leading-relaxed text-left">
                    When Dubai-based Zuvees needed a full-stack solution, they turned to NST students — who delivered backend, frontend, and logistics architecture for the fast-growing gifting brand
                  </p>
                </div>

                {/* Content Layout */}
                <div className="flex-1 grid grid-cols-2 gap-6 items-center">
                  {/* Left side - Screenshots */}
                  <div className="space-y-2">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-slate-700/50 rounded-lg overflow-hidden border border-slate-600 shadow-md">
                        <img 
                          src="/src/assets/Screenshot 2025-10-01 at 12.16.24 AM.png" 
                          alt="Zuvees Screenshot 1" 
                          className="w-full h-20 object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="bg-slate-700/50 rounded-lg overflow-hidden border border-slate-600 shadow-md">
                        <img 
                          src="/src/assets/Screenshot 2025-10-01 at 12.16.30 AM.png" 
                          alt="Zuvees Screenshot 2" 
                          className="w-full h-20 object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="bg-slate-700/50 rounded-lg overflow-hidden border border-slate-600 shadow-md">
                        <img 
                          src="/src/assets/Screenshot 2025-10-01 at 12.16.35 AM.png" 
                          alt="Zuvees Screenshot 3" 
                          className="w-full h-20 object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right side - Student Profile */}
                  <div className="flex flex-col items-center space-y-3">
                    {/* Student Image */}
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-400 shadow-xl">
                      <img 
                        src="/src/assets/Student Image.png" 
                        alt="Shah Fathal Koul" 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Student Details */}
                    <div className="text-center space-y-1">
                      <h3 className="text-lg font-bold text-white">Shah Fathal Koul</h3>
                      <p className="text-sm text-slate-300">SDE Intern, Zuvees</p>
                      <p className="text-xs text-slate-400">NST Batch 23</p>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Strip */}
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-3 border border-blue-500/30 mt-4">
                  <div className="text-center">
                    <button className="text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors flex items-center justify-center gap-2 mx-auto">
                      Look At Fathal's Journey 
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Next Card - 25% width */}
          <div className="w-1/4 relative">
            <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-slate-700 shadow-xl overflow-hidden relative opacity-75 h-96">
              <div className="p-4 h-full flex flex-col">
                {/* NST Logo overlay on top right */}
                <div className="absolute top-2 right-2 w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-md p-1">
                  <img 
                    src="/src/assets/nst-logo.png" 
                    alt="NST Logo" 
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Logo at top center */}
                <div className="flex justify-center pt-6">
                  <div className="w-16 h-10 bg-white rounded-lg flex items-center justify-center shadow-md p-2">
                    <img 
                      src="/src/assets/Zuvees logo.png" 
                      alt="Zuvees Logo" 
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Title */}
                <div className="text-center mb-3">
                  <h3 className="text-sm font-bold text-white leading-tight">
                    Building a UAE-Based Startup's Product from Scratch
                  </h3>
                </div>

                {/* Description */}
                <div className="mb-4">
                  <p className="text-xs text-slate-200 leading-relaxed text-center">
                    When Dubai-based Zuvees needed a full-stack solution, they turned to NST students
                  </p>
                </div>

                {/* Single Screenshot */}
                <div className="mb-4">
                  <div className="bg-slate-600/50 rounded-lg overflow-hidden border border-slate-600">
                    <img 
                      src="/src/assets/Screenshot 2025-10-01 at 12.16.24 AM.png" 
                      alt="Zuvees Screenshot" 
                      className="w-full h-16 object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Profile */}
                <div className="flex-1 flex flex-col items-center justify-end space-y-2">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-400 shadow-md">
                    <img 
                      src="/src/assets/Student Image.png" 
                      alt="Student" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-xs font-semibold text-white">Shah Fathal Koul</h4>
                    <p className="text-xs text-slate-400">NST Batch 23</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Right Arrow Navigation */}
            <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
              <button className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                <ArrowRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CaseStudiesSection;
