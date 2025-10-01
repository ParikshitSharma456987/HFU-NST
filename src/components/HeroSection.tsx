import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Users, Award, TrendingUp } from "lucide-react";
import heroVideo from "@/assets/hero-background-video.mp4";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden pt-16 bg-background">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover blur-sm"
          style={{ filter: 'blur(8px)' }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Enhanced Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
      </div>
      
      {/* Enhanced Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-nst-blue/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-nst-purple/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-nst-blue/5 to-nst-purple/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center min-h-screen pt-20">
          {/* Enhanced Content */}
          <div className="text-center max-w-5xl relative z-20">
            {/* Trust Badge */}
            {/* <Badge variant="secondary" className="mb-6 px-6 py-3 text-sm font-medium bg-white/10 text-white border-white/20 backdrop-blur-sm">
              🚀 Trusted by 800+ Leading Companies
            </Badge> */}

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight text-white drop-shadow-2xl">
              <span className="gradient-text drop-shadow-lg">Future-Ready Talent</span>{" "}
              for a{" "}
              <span className="gradient-warm-text drop-shadow-lg">Tech-First World</span>
            </h1>
            
            <p className="text-xl lg:text-2xl xl:text-3xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              NST's talent is built on an{" "}
              <span className="font-semibold text-white bg-white/10 px-2 py-1 rounded">industry-first curriculum</span>, 
              designed to keep pace with{" "}
              <span className="font-semibold text-white bg-white/10 px-2 py-1 rounded">tomorrow's tech needs</span>.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button size="lg" className="btn-hero text-lg px-10 py-6 h-auto shadow-2xl backdrop-blur-sm bg-gradient-to-r from-nst-blue to-nst-purple border-0 text-white hover:scale-105 transition-all duration-300 group" asChild>
                <a href="#contact-form">
                  Discover Future-Ready Talent
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-white/50 text-white hover:bg-white/10 text-lg px-10 py-6 h-auto backdrop-blur-sm shadow-2xl group" asChild>
                <a href="#curriculum">
                  View Our Curriculum
                </a>
              </Button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;