import React from "react";
import imgCruiseShipElegance from "figma:asset/5db019839e0ec27df3e78d1ab02e26c983765cb2.png";
import imgAdobeStock204825621 from "figma:asset/c80cf6a05f90b923cbc314cfb11dff402c5d3369.png";
import imgPremiumTravelExperience from "figma:asset/fe99f2acd870053b0dee24f4cee705d5e97c4be4.png";

export default function Legacy() {
  return (
    <div className="bg-[#0a4e9b] py-20 px-4 md:px-0 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* Images Area */}
        <div className="flex-1 w-full relative min-h-[500px] lg:min-h-[600px] hidden lg:block">
           {/* Abstract composition of images */}
           <div className="absolute left-0 top-0 w-[60%] aspect-[3/4] overflow-hidden shadow-2xl z-10">
              <img src={imgPremiumTravelExperience} alt="Premium Travel" className="w-full h-full object-cover" />
           </div>

           <div className="absolute right-0 bottom-0 w-[40%] aspect-[3/4] overflow-hidden shadow-2xl z-0 opacity-60">
                <img src={imgAdobeStock204825621} alt="" className="w-full h-full object-cover" />
           </div>
        </div>
        
        {/* Mobile Images (Simplified) */}
        <div className="lg:hidden w-full flex gap-4 overflow-x-auto pb-4 snap-x">
            <img src={imgPremiumTravelExperience} alt="Premium Travel" className="w-[80%] aspect-[3/4] object-cover rounded-lg shadow-lg snap-center" />
            <img src={imgCruiseShipElegance} alt="Cruise Ship" className="w-[80%] aspect-[3/4] object-cover rounded-lg shadow-lg snap-center" />
        </div>

        {/* Content Area */}
        <div className="flex-1 text-white">
           <h4 className="text-[#0dc1f2] text-[14px] font-bold tracking-[2.8px] uppercase mb-4 font-['Inter']">
              Our Legacy
           </h4>
           <h2 className="text-[#faf8f5] text-[40px] md:text-[48px] font-['Playfair_Display'] mb-8">
              A Decade of Excellence
           </h2>
           
           <div className="text-[rgba(250,248,245,0.8)] text-[18px] leading-[1.6] font-['Inter'] space-y-6 mb-12">
              <p>
                Over the past 10 years, OTI has been the trusted air fulfillment provider for Scenic Cruises and Emerald Waterways—two companies renowned for their quality and excellence.
              </p>
              <p>
                Our place inside their product mix provided clients with the comfort of knowing their flights and schedule changes were attended to proactively and in their best interests.
              </p>
              <p>
                Travel agents frequently expressed how relieved they were that OTI was "on it"—managing complex itineraries across all continents with precision and care.
              </p>
           </div>

           {/* Stats Border */}
           <div className="border-t border-[rgba(250,248,245,0.2)] py-8 flex flex-wrap gap-8 md:gap-16 mb-8">
               <div>
                   <span className="block text-[#0dc1f2] text-[36px] font-['Playfair_Display']">10+</span>
                   <span className="text-[rgba(250,248,245,0.6)] text-[14px] tracking-[0.7px] uppercase font-['Inter']">Years of Experience</span>
               </div>
               <div>
                   <span className="block text-[#0dc1f2] text-[36px] font-['Playfair_Display']">7</span>
                   <span className="text-[rgba(250,248,245,0.6)] text-[14px] tracking-[0.7px] uppercase font-['Inter']">Continents Served</span>
               </div>
               <div>
                   <span className="block text-[#0dc1f2] text-[36px] font-['Playfair_Display']">100%</span>
                   <span className="text-[rgba(250,248,245,0.6)] text-[14px] tracking-[0.7px] uppercase font-['Inter']">Dedicated Service</span>
               </div>
           </div>

           <button className="bg-[#00aeef] text-white text-[14px] px-8 py-3 rounded-[2px] hover:bg-[#009bd5] transition-colors">
              Speak to an Agent
           </button>
        </div>

      </div>
    </div>
  );
}
