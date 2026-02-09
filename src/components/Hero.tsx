import React from "react";
import imgAirplaneWingAtSunset from "figma:asset/435b36de96afa1d7a2a25f0ca57dc5823d7bb44d.png";
import imgAdobeStock17905931771 from "figma:asset/76dbf4e999001c4bbbc0c4638c19861802006fa0.png";
import imgAdobeStock2210828561 from "figma:asset/cbf99ac5f8a471706837141bbb635166a85c7f75.png";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  onNavigate?: (page: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <div className="relative w-full h-[800px] md:h-[1000px] lg:h-[1200px] overflow-hidden bg-[#0A4E9B]">
      {/* Background Images */}
      <div className="absolute inset-0">
        <img 
            src={imgAirplaneWingAtSunset} 
            alt="Airplane Wing" 
            className="absolute inset-0 w-full h-full object-cover"
        />
        {/* These seem to be overlay textures or additional layers, sticking to the design intent */}
        <img 
            src={imgAdobeStock17905931771} 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay"
        />
        <img 
            src={imgAdobeStock2210828561} 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-soft-light"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A4E9B] to-[#1E293E] opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-[100px]">
        <h3 className="text-[#00aeef] text-[12px] md:text-[14px] font-bold tracking-[4.2px] uppercase mb-6 md:mb-10 font-['Inter']">
          Premier Air Fulfillment
        </h3>
        
        <h1 className="text-[#faf8f5] text-[40px] md:text-[60px] lg:text-[72px] leading-[1.1] md:leading-[1] font-['Playfair_Display'] font-normal mb-8 max-w-[800px]">
          Where extraordinary <br/>
          <span className="italic">Journeys take flight!</span>
        </h1>

        <p className="text-[rgba(250,248,245,0.8)] text-[16px] md:text-[20px] font-['Inter'] max-w-[534px] mb-12 leading-relaxed">
          Canada's most distinguished boutique air department for cruise and luxury travel
        </p>

        <button 
            onClick={() => onNavigate && onNavigate("inquiry")}
            className="bg-[#00aeef] text-white text-[16px] font-bold tracking-[0.4px] px-8 py-4 rounded-[2px] hover:bg-[#009bd5] transition-colors"
        >
          Begin Your Journey
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
         <div className="w-[24px] h-[24px] text-[rgba(250,248,245,0.6)]">
             <ChevronDown size={24} />
         </div>
      </div>
    </div>
  );
}
