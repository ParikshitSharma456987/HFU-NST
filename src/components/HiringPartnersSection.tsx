import React from "react";

const logos = [
  "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/67f387374a95e6ea1541b540_Frame.avif",
  "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/67f3873751afb18d7b397193_Frame-1.avif",
  "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/67f387372106c61b5dd5037f_Frame-2.avif",
  "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/67f3873722d59a6af2b0d7e5_Frame-3.avif",
  "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/67f39e4aaf65c29e9fd97d00_adhelp-allendigital-logo%201.avif",
  "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/67f387374a95e6ea1541b53c_Frame-5.avif",
  "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/67f387373ed6c653fca33306_Frame-6.avif",
  "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/67f387373f2affc4bcb6d1c3_Frame-7.avif",
];

const logoBarHeight = "5rem";

const PanelBar = ({ children }) => (
  <div
    className="flex items-center justify-center relative mb-4 rounded-xl"
    style={{
      height: logoBarHeight,
      width: "100vw",
      position: "relative",
      left: "50%",
      right: "50%",
      marginLeft: "-50vw",
      marginRight: "-50vw",
      overflow: "hidden",
      boxSizing: "border-box"
    }}
  >
    <div
      className="absolute left-0 top-0 w-full h-full rounded-xl bg-gray-200/70 shadow-lg z-0"
      style={{ pointerEvents: "none" }}
    />
    <div className="relative z-10 w-full h-full flex items-center justify-center">
      {children}
    </div>
  </div>
);

const HiringPartnersSection = () => (
  <section className="pb-20 bg-background border-b border-border">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-8">
          <span className="text-nst-blue">800+</span> Active Hiring Partners
        </h2>
        <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
          Our Students are trusted by industry leaders across technology, finance, consumer -tech and various other leading sectors.
        </p>

        {/* Logos in full width bar */}
        <PanelBar>
          <div className="flex animate-marquee whitespace-nowrap w-full py-6">
            {logos.concat(logos).map((src, idx) => (
              <div
                key={idx}
                className="inline-flex items-center justify-center px-12"
                style={{ minWidth: "14rem" }}
              >
                <img
                  src={src}
                  alt=""
                  style={{ height: "10rem", width: "auto" }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </PanelBar>

        {/* Subheading after logos */}
        <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          And Many More Organisation across India and Globally
        </p>
      </div>

      {/* Decorative elements */}
      <div className="mb-12 relative overflow-hidden">
        <div className="absolute -top-4 -left-4 w-20 h-20 bg-nst-blue/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-nst-purple/10 rounded-full blur-xl"></div>
      </div>
    </div>

    <style jsx>{`
      @keyframes marquee {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      .animate-marquee {
        animation: marquee 20s linear infinite;
      }
    `}</style>
  </section>
);

export default HiringPartnersSection;
