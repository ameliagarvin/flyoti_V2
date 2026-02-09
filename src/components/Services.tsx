import React from "react";
import imgTravelConsultation from "figma:asset/d3eafd09c91f395cf200ef75fa36276696ac4a85.png";
import svgPaths from "../imports/svg-6v7tj2hpja";

// Icons for the services grid
const ServiceIcon1 = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d={svgPaths.p39d37580} stroke="#0DC1F2" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ServiceIcon2 = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
     <path d="M14 11.8872V16.3333" stroke="#0DC1F2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
     <path d="M14 2.33333V5.83333" stroke="#0DC1F2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
     <path d={svgPaths.p7d1c300} stroke="#0DC1F2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
     <path d={svgPaths.p21dea6c0} stroke="#0DC1F2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
     <path d={svgPaths.p15a21600} stroke="#0DC1F2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
  </svg>
);
const ServiceIcon3 = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d={svgPaths.p30003e80} stroke="#0DC1F2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
    <path d={svgPaths.p1c910f00} stroke="#0DC1F2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
    <path d={svgPaths.p291af900} stroke="#0DC1F2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
    <path d={svgPaths.p1fa66600} stroke="#0DC1F2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
  </svg>
);
const ServiceIcon4 = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d={svgPaths.pcd14e00} stroke="#0DC1F2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
  </svg>
);
const ServiceIcon5 = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M9.33333 2.33333V7" stroke="#0DC1F2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
    <path d="M18.6667 2.33333V7" stroke="#0DC1F2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
    <path d={svgPaths.p57f3600} stroke="#0DC1F2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
    <path d="M3.5 11.6667H24.5" stroke="#0DC1F2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
  </svg>
);
const ServiceIcon6 = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d={svgPaths.p1b228440} stroke="#0DC1F2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
  </svg>
);

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      title: "Complex Itineraries",
      desc: "Expert handling of multi-leg journeys across Europe, Asia, South America, and the South Pacific with precision and care.",
      icon: ServiceIcon1
    },
    {
      title: "Cruise Air Packages",
      desc: "Specialized flight arrangements perfectly timed with your cruise departures. Book up to 11 months in advance.",
      icon: ServiceIcon2
    },
    {
      title: "Business & Premium economy Class",
      desc: "Our expertise in premium cabin bookings makes upgraded travel more achievable than many think possible.",
      icon: ServiceIcon3
    },
    {
      title: "Personal Support",
      desc: "A real person to talk to, listen, and solve problems. Not a search engine—a dedicated travel professional.",
      icon: ServiceIcon4
    },
    {
      title: "Advance Booking",
      desc: "Book flights up to 11 months ahead with no conditions on schedules or routes. Secure the best seats and prices.",
      icon: ServiceIcon5
    },
    {
      title: "Crisis Management",
      desc: "We handle schedule changes, cancellations, airline strikes, and unexpected disruptions with expertise and calm.",
      icon: ServiceIcon6
    }
  ];

  return (
    <div className="bg-[#f6f4ee]">
      {/* Intro Section */}
      <div className="bg-white py-20 px-4 md:px-0">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 lg:max-w-[600px]">
            <h4 className="text-[#00aeef] text-[12px] font-bold tracking-[2.4px] uppercase mb-4 font-['Inter']">
              Where Excellence Takes Flight
            </h4>
            <h2 className="text-[#0a4e9b] text-[40px] md:text-[60px] leading-[1.1] font-['Playfair_Display'] mb-8">
              Personalized Service for Discerning Travelers
            </h2>
            <div className="text-[#626d84] text-[18px] leading-relaxed font-['Inter'] space-y-6">
              <p>
                OTI has carved a unique niche in the Canadian travel industry by providing elite levels of personalized service to travel agents and travelers booking flights for their cruise and land tour packages.
              </p>
              <p>
                For travelers who prefer their booking process to be initiated, compiled, and completed with the help of an experienced, elite travel professional—this is where OTI shines.
              </p>
            </div>
            <button 
                onClick={() => onNavigate("inquiry")}
                className="mt-8 bg-[#0a4e9b] text-white text-[14px] px-8 py-3 rounded-[2px] hover:bg-[#083d7a] transition-colors"
            >
              Speak to an Agent
            </button>
          </div>

          {/* Image */}
          <div className="flex-1 relative w-full aspect-[636/477] max-w-[600px] shadow-[0px_20px_50px_-12px_rgba(20,29,46,0.2)]">
             <div className="absolute inset-0 overflow-hidden rounded-[4px]">
                <img 
                    src={imgTravelConsultation} 
                    alt="Airplane taking off" 
                    className="w-full h-full object-cover transform scale-105"
                />
             </div>
             {/* Decorative Border */}
             <div className="absolute -bottom-[24px] -left-[24px] w-[192px] h-[192px] border-2 border-[#d99726] -z-10 hidden lg:block"></div>
          </div>

        </div>
      </div>

      {/* Services Grid Section */}
      <div className="py-20 px-4 md:px-0 bg-[#f6f4ee]">
         <div className="max-w-[1400px] mx-auto text-center mb-16">
            <h4 className="text-[#00aeef] text-[12px] font-bold tracking-[2.4px] uppercase mb-4 font-['Inter']">
               Our Services
            </h4>
            <h2 className="text-[#0a4e9b] text-[40px] md:text-[60px] leading-[1] font-['Playfair_Display'] mb-8">
               Comprehensive Air Solutions
            </h2>
            <p className="text-[#626d84] text-[18px] md:text-[20px] font-['Inter']">
               Comprehensive air fulfillment solutions designed for the discerning traveler
            </p>
         </div>

         <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-[16px] shadow-[0px_4px_20px_-4px_rgba(28,53,84,0.15)] flex flex-col items-start text-left h-full">
                    <div className="bg-[#f3f4f5] w-[56px] h-[56px] rounded-[12px] flex items-center justify-center mb-6">
                        <service.icon />
                    </div>
                    <h3 className="text-[#132439] text-[20px] font-['Playfair_Display'] mb-4">
                        {service.title}
                    </h3>
                    <p className="text-[#56708f] text-[16px] leading-[1.6] font-['Inter']">
                        {service.desc}
                    </p>
                </div>
            ))}
         </div>

         <div className="flex justify-center mt-12">
            <button 
                onClick={() => onNavigate("inquiry")}
                className="bg-[#0a4e9b] text-white text-[14px] px-8 py-3 rounded-[2px] hover:bg-[#083d7a] transition-colors"
            >
              Speak to an Agent
            </button>
         </div>
      </div>
    </div>
  );
}
