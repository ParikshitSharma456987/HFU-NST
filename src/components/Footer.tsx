import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Instagram,
  ExternalLink,
  ChevronRight
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Hiring Partners", href: "#partners" },
    { name: "Student Success", href: "#success" },
    { name: "Instructors", href: "#instructors" },
    { name: "Contact", href: "#contact" }
  ];

  const programs = [
    { name: "Full Stack Development", href: "#fullstack" },
    { name: "Data Science", href: "#datascience" },
    { name: "Machine Learning", href: "#ml" },
    { name: "DevOps Engineering", href: "#devops" },
    { name: "Mobile Development", href: "#mobile" },
    { name: "Cloud Computing", href: "#cloud" }
  ];

  const resources = [
    { name: "Student Portal", href: "#portal" },
    { name: "Corporate Hiring", href: "#hiring" },
    { name: "Alumni Network", href: "#alumni" },
    { name: "Career Support", href: "#careers" },
    { name: "Blog", href: "#blog" },
    { name: "Help Center", href: "#help" }
  ];

  return (
    <footer className="bg-background text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-nst-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-nst-purple/10 rounded-full blur-3xl"></div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Newton School of Technology
                </span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Bridging the gap between industry and academia to create world-class engineers ready for tomorrow's challenges.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">info@newtonschool.co</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-400 mt-1" />
                <span className="text-gray-300">
                  Bangalore, Karnataka<br />
                  India - 560001
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-sky-400 to-sky-500 rounded-full flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all">
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all">
                  <Youtube className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Programs</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a 
                    href={program.href} 
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href} 
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div className="mt-8 p-6 bg-gradient-to-r from-slate-800/50 to-gray-800/50 rounded-lg border border-gray-700">
              <h5 className="text-white font-semibold mb-2">Stay Updated</h5>
              <p className="text-gray-400 text-sm mb-4">Get the latest updates on programs and placements.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-3 py-2 bg-gray-700 text-white text-sm rounded-l-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm rounded-r-lg hover:shadow-lg transition-shadow">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-background/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Newton School of Technology. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                Made in India
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;