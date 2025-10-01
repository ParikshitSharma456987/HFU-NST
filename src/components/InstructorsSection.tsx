import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

const InstructorsSection = () => {
  const instructors = [
    {
      name: "Rajesh Kumar",
      role: "Lead AI Instructor",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rajesh",
      companyLogo: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/67d143e5ffe3116be7d21aba_9634f2b7700412ce89f0c93a5e111dc7_goldman%20sacha.avif",
      linkedInUrl: "https://www.linkedin.com/in/rajeshkumar"
    },
    {
      name: "Priya Sharma",
      role: "Full Stack Architecture Lead",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya",
      companyLogo: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/67d28507758687e1665dcdfd_178f7e8c4d44cff3975aa9ca2c1f1fee_makemytrip.avif",
      linkedInUrl: "https://www.linkedin.com/in/priyasharma"
    },
    {
      name: "Vikram Singh",
      role: "FinTech Engineering Lead",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=vikram",
      companyLogo: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/67d143e5ffe3116be7d21aba_9634f2b7700412ce89f0c93a5e111dc7_goldman%20sacha.avif",
      linkedInUrl: "https://www.linkedin.com/in/vikramsingh"
    },
    {
      name: "Anita Gupta",
      role: "Data Engineering Lead",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=anita",
      companyLogo: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/67d143e5ffe3116be7d21aba_9634f2b7700412ce89f0c93a5e111dc7_goldman%20sacha.avif",
      linkedInUrl: "https://www.linkedin.com/in/anitagupta"
    }
  ];

  const swiperRef = useRef(null);

  return (
    <section id="instructors" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-nst-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-nst-green/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Students Learn From the{" "}
            <span className="gradient-text">Best Industry Leaders</span>
          </h2>
        </div>

        <div className="relative">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={4}
            spaceBetween={12}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 8 },
              640: { slidesPerView: 2, spaceBetween: 10 },
              1024: { slidesPerView: 3, spaceBetween: 12 },
              1280: { slidesPerView: 4, spaceBetween: 12 },
            }}
          >
            {instructors.map((inst, index) => (
              <SwiperSlide key={index} aria-label={`${index + 1} / ${instructors.length}`}>
                <Card className="p-4 home_mentor_card-wrapper group">
                  <div className="nst_mentor_image-wrapper mb-4">
                    <img 
                      loading="lazy" 
                      src={inst.avatar} 
                      alt={`${inst.name} Image`} 
                      className="home_mentor_image rounded-full"
                    />
                  </div>
                  <div className="home_mentor_info-wrapper text-center">
                    <div className="home_mentor_name-linkedin-profile-wrapper flex justify-center items-center space-x-2 mb-2">
                      <div className="home_mentor-name font-semibold text-lg">{inst.name}</div>
                      <a 
                         href={inst.linkedInUrl} 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="home_mentor-linkedin-profile"
                         aria-label={`${inst.name} LinkedIn profile`}
                      >
                        <Linkedin className="w-5 h-5 text-nst-blue hover:text-nst-blue/80" />
                      </a>
                    </div>
                    <div className="home_mentor_designation-wrapper mb-2">
                      <div className="home_mentor-designation text-sm text-muted-foreground">
                        {inst.role}
                      </div>
                      <img 
                        loading="lazy" 
                        src={inst.companyLogo} 
                        alt={`${inst.role} Company Logo`} 
                        className="mentor_card-company-logo mx-auto mt-1 max-h-8 object-contain"
                      />
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-prev-custom absolute top-1/2 -left-8 z-20 cursor-pointer text-nst-blue hover:text-nst-blue/80" aria-label="Previous mentors">&#8592;</button>
          <button className="swiper-button-next-custom absolute top-1/2 -right-8 z-20 cursor-pointer text-nst-blue hover:text-nst-blue/80" aria-label="Next mentors">&#8594;</button>
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
