import { Mail, Phone, MapPin } from "lucide-react";

const SimpleFooter = () => {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Newton School Of Technology
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-nst-blue mt-1 flex-shrink-0" />
                <div className="text-muted-foreground text-sm leading-relaxed">
                  <p>2nd Floor, Sona Towers, 26, 27 and 3, Hosur Main Road,</p>
                  <p>Krishna Nagar, Industrial Area, Bengaluru, Karnataka 560030</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-nst-blue flex-shrink-0" />
                <a 
                  href="mailto:Placement-office@newtonschool.co" 
                  className="text-muted-foreground text-sm hover:text-nst-blue transition-colors"
                >
                  Placement-office@newtonschool.co
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-nst-blue flex-shrink-0" />
                <a 
                  href="tel:+918951475103" 
                  className="text-muted-foreground text-sm hover:text-nst-blue transition-colors"
                >
                  +91 89514 75103
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-right">
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#curriculum" className="text-muted-foreground text-sm hover:text-nst-blue transition-colors">
                  Curriculum
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground text-sm hover:text-nst-blue transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#campuses" className="text-muted-foreground text-sm hover:text-nst-blue transition-colors">
                  Campuses
                </a>
              </li>
              <li>
                <a href="#profiles" className="text-muted-foreground text-sm hover:text-nst-blue transition-colors">
                  Profiles
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Newton School of Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
