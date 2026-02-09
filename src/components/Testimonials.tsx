import React from "react";
import imgScenicTravelDestination from "figma:asset/3c49a9e2f3d68282c073d81177b0d2de36521542.png";
import imgAdobeStock2607944331 from "figma:asset/97dae99aec9c59a741962c7d17f14f3e6a8863b1.png";
import imgOceanHorizon from "figma:asset/a412e26f01786ce749a87b29a2a207c951a978a6.png";
import imgAdobeStock1832985911 from "figma:asset/b1d857d78de151fe84a617d092716cb1d624280f.png";
import { Check, Star } from "lucide-react";

const TestimonialCard = ({ quote, name, role }) => (
    <div className="bg-[rgba(250,248,245,0.05)] backdrop-blur-[2px] border border-[rgba(250,248,245,0.1)] p-8 rounded-[8px] flex flex-col h-full">
        <div className="flex gap-1 mb-6">
            {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#D99726" stroke="#D99726" />)}
        </div>
        <p className="text-[rgba(250,248,245,0.9)] text-[14px] leading-[1.6] mb-6 flex-grow font-['Inter']">"{quote}"</p>
        <div>
            <p className="text-[#faf8f5] text-[16px] font-['Playfair_Display']">{name}</p>
            <p className="text-[rgba(250,248,245,0.6)] text-[14px] font-['Inter']">{role}</p>
        </div>
    </div>
)

export default function Testimonials() {
  const benefits = [
    "Book flights up to 11 months in advance",
    "No restrictions on carriers or routing",
    "Best seats at optimal prices",
    "Expert multi-continent itineraries",
    "Proactive schedule management",
    "Higher agent commissions",
    "Unparalleled client satisfaction",
    "Full flexibility for layovers",
    "Boutique-level personalized service",
    "Pre/post cruise flight planning"
  ];

  const testimonials = [
      {
          quote: "OTI transformed how I book travel for my clients. Their expertise in business class routing saved my clients thousands, and the proactive service during schedule changes was invaluable.",
          name: "Margaret Richardson",
          role: "Travel Advisor, Vancouver"
      },
      {
          quote: "After years of receiving tickets just 30 days before sailing with limited options, working with OTI was a revelation. We booked our flights 10 months early and saved significantly.",
          name: "Robert & Patricia Jameson",
          role: "World Cruise Enthusiasts"
      },
      {
          quote: "The level of service is extraordinary. My agent handled a complex itinerary involving four continents with precision. When our cruise departure was moved, they proactively rebooked everything.",
          name: "Dr. Michael Chen",
          role: "Frequent Luxury Traveler"
      },
      {
          quote: "As a travel agent, my reputation depends on seamless service. OTI consistently delivers. Higher commissions, exceptional client satisfaction, and peace of mind.",
          name: "Linda Morrison",
          role: "Luxury Travel Specialist, Toronto"
      },
      {
          quote: "What sets OTI apart is their deep knowledge of airline contracts and pricing. They found premium economy options at prices that made luxury travel affordable.",
          name: "David Sullivan",
          role: "Multi-Generational Cruise Planner"
      }
  ];

  return (
    <div>
        {/* Difference Section */}
        <div className="bg-white py-20 px-4 md:px-0 overflow-hidden">
            <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16">
                
                {/* Text & Checklist */}
                <div className="flex-1 lg:max-w-[600px]">
                     <h4 className="text-[#0dc1f2] text-[12px] font-bold tracking-[2.4px] uppercase mb-4 font-['Inter']">
                        The OTI Difference
                     </h4>
                     <h2 className="text-[#0a4e9b] text-[40px] md:text-[60px] leading-[1.1] font-['Playfair_Display'] mb-8">
                        Without Question,<br/>
                        <span className="italic">Canada's Best</span>
                     </h2>
                     <p className="text-[#626d84] text-[18px] leading-[1.6] font-['Inter'] mb-12">
                        While some cruise companies only send tickets 30 days prior to departure with no say in carriers, OTI gives you complete control and flexibility from day one.
                     </p>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        {benefits.map((benefit, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <div className="bg-[rgba(217,151,38,0.2)] rounded-full p-1 min-w-[20px] flex items-center justify-center">
                                    <Check size={12} stroke="#D99726" strokeWidth={3} />
                                </div>
                                <span className="text-[#141d2e] text-[14px] font-['Inter']">{benefit}</span>
                            </div>
                        ))}
                     </div>

                     <div className="mt-12">
                        <button className="bg-[#0a4e9b] text-white text-[14px] px-8 py-3 rounded-[2px] hover:bg-[#083d7a] transition-colors">
                            Speak to an Agent
                        </button>
                     </div>
                </div>

                {/* Images */}
                <div className="flex-1 hidden lg:block relative min-h-[600px]">
                     <div className="absolute top-0 right-[20%] w-[45%] aspect-[3/4] z-20 shadow-xl overflow-hidden">
                        <img src={imgScenicTravelDestination} alt="Scenic" className="w-full h-full object-cover" />
                     </div>
                     <div className="absolute top-[50px] right-0 w-[45%] aspect-[3/4] z-10 shadow-xl overflow-hidden">
                        <img src={imgOceanHorizon} alt="Ocean" className="w-full h-full object-cover opacity-80" />
                     </div>
                     {/* Quote overlay */}
                     <div className="absolute bottom-20 left-0 right-0 text-center">
                        <p className="text-[#141d2e] text-[24px] md:text-[30px] font-['Playfair_Display'] italic leading-[1.2]">
                             "Travel agents and cruise customers return to book with us because OTI is the best boutique air department in Canada."
                        </p>
                     </div>
                </div>
            </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-[#0a4e9b] py-20 px-4 md:px-0">
             <div className="max-w-[1400px] mx-auto text-center mb-16">
                 <h4 className="text-[#0dc1f2] text-[14px] font-bold tracking-[2.8px] uppercase mb-4 font-['Inter']">
                    What Our Partners Say
                 </h4>
                 <h2 className="text-[#faf8f5] text-[40px] md:text-[48px] font-['Playfair_Display'] mb-8">
                    Testimonials
                 </h2>
                 <p className="text-[rgba(250,248,245,0.7)] text-[18px] font-['Inter']">
                    From travel agents and discerning travelers who trust OTI
                 </p>
             </div>
             
             <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {testimonials.map((t, i) => (
                     <TestimonialCard key={i} {...t} />
                 ))}
             </div>

             <div className="text-center mt-12 text-[rgba(250,248,245,0.6)] text-[16px]">
                Join hundreds of satisfied clients who have discovered the OTI difference
             </div>
             <div className="flex justify-center mt-8">
                <button className="bg-[#0dc1f2] text-white text-[14px] px-8 py-3 rounded-[2px] hover:bg-[#0baacf] transition-colors">
                    Start Your Journey
                </button>
             </div>
        </div>
    </div>
  );
}
