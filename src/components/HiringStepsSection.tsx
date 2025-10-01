import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  UserPlus,
  PhoneCall,
  Target,
  CheckCircle,
  Handshake,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

// Two-column utility
const FieldRow = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
);

const HiringInterestForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    hiringFor: "",
    company: "",
    designation: "",
    comments: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Card className="bg-card p-8 rounded-2xl max-w-2xl mx-auto border border-border shadow-lg">
      <h3 className="text-3xl font-bold text-center mb-2">
        Let's Connect and Build Your <span className="gradient-text">Next Star Team</span>
      </h3>
      <p className="text-muted-foreground text-center mb-8">
        Tell us about your hiring needs and our team will reach out with tailored support.
      </p>
      <form className="w-full flex flex-col gap-6">
        <FieldRow>
          <div>
            <label className="block text-sm font-medium mb-2 text-muted-foreground">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-background text-foreground border border-border rounded-lg p-3 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-nst-blue"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-muted-foreground">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-background text-foreground border border-border rounded-lg p-3 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-nst-blue"
              required
            />
          </div>
        </FieldRow>

        <FieldRow>
          <div>
            <label className="block text-sm font-medium mb-2 text-muted-foreground">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Contact number"
              value={form.phone}
              onChange={handleChange}
              className="w-full bg-background text-foreground border border-border rounded-lg p-3 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-nst-blue"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-muted-foreground">Company Name</label>
            <input
              type="text"
              name="company"
              placeholder="Your company"
              value={form.company}
              onChange={handleChange}
              className="w-full bg-background text-foreground border border-border rounded-lg p-3 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-nst-blue"
            />
          </div>
        </FieldRow>

        <FieldRow>
          <div>
            <label className="block text-sm font-medium mb-2 text-muted-foreground">Designation</label>
            <input
              type="text"
              name="designation"
              placeholder="Your designation"
              value={form.designation}
              onChange={handleChange}
              className="w-full bg-background text-foreground border border-border rounded-lg p-3 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-nst-blue"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-muted-foreground">
              Interested In Hiring For
            </label>
            <select
              name="hiringFor"
              value={form.hiringFor}
              onChange={handleChange}
              className="w-full bg-background text-foreground border border-border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-nst-blue"
              required
            >
              <option value="">Select hiring type</option>
              <option value="Summer Internship">Summer Internship</option>
              <option value="Spring Internship">Spring Internship</option>
              <option value="Full Time Roles">Full Time Roles</option>
            </select>
          </div>
        </FieldRow>
        <div>
          <label className="block text-sm font-medium mb-2 text-muted-foreground">Comments</label>
          <textarea
            name="comments"
            placeholder="Any additional details or notes?"
            value={form.comments}
            onChange={handleChange}
            className="w-full bg-background text-foreground border border-border rounded-lg p-3 h-28 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-nst-blue"
            maxLength={500}
          />
          <div className="text-xs text-muted-foreground mt-1">{form.comments.length}/500 characters</div>
        </div>
        <Badge className="w-full py-3 mt-2 text-lg text-center text-white bg-gradient-to-r from-nst-blue to-nst-purple rounded-xl hover:shadow-lg transition-shadow cursor-pointer">
          Submit Interest
        </Badge>
      </form>
    </Card>
  );
};

const HiringStepsSection = () => {
  const steps = [
    {
      number: 1,
      title: "Register",
      description: "Sign up on the website to get started",
      icon: UserPlus,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: 2,
      title: "POC Contacts You",
      description: "Our team reaches out to discuss your needs",
      icon: PhoneCall,
      color: "from-green-500 to-emerald-500",
    },
    {
      number: 3,
      title: "Define Talent",
      description: "POC helps refine requirements ",
      icon: Target,
      color: "from-purple-500 to-pink-500",
    },
    {
      number: 4,
      title: "Interview & Assess",
      description: "Our team schedules and facilitates interviews",
      icon: CheckCircle,
      color: "from-orange-500 to-red-500",
    },
    {
      number: 5,
      title: "Offer & Onboard",
      description: "We guide you through offers and onboarding",
      icon: Handshake,
      color: "from-teal-500 to-blue-500",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Steps to <span className="gradient-text">Hire from Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seamless Journey From Registration To Onboarding—with Complete Support Throughout The Process
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="hidden lg:block relative mb-12">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-nst-blue via-nst-purple to-nst-orange transform -translate-y-1/2"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isLast = index === steps.length - 1;
              return (
                <div key={step.number} className="relative">
                  <Card className="relative p-6 text-center bg-card border-border hover:shadow-lg transition-all duration-300 group">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-nst-blue to-nst-purple rounded-full flex items-center justify-center shadow-lg z-10">
                      <span className="text-white font-bold text-sm">{step.number}</span>
                    </div>
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-nst-blue/10 to-nst-purple/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-nst-blue" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </Card>
                  {!isLast && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                      <div className="w-8 h-8 bg-gradient-to-r from-nst-blue to-nst-purple rounded-full flex items-center justify-center shadow-lg border-2 border-background">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="lg:hidden mt-8">
            <div className="flex flex-col items-center space-y-4">
              {steps.map((step, index) => {
                if (index === steps.length - 1) return null;
                return (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-nst-blue rounded-full"></div>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-nst-blue to-nst-purple"></div>
                    <div className="w-2 h-2 bg-nst-purple rounded-full"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div id="contact-form" className="text-center mt-16">
          <HiringInterestForm />
        </div>
      </div>
    </section>
  );
};

export default HiringStepsSection;
