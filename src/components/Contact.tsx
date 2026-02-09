import React from "react";
import imgSplitBanner from "figma:asset/85e4bc635bc5400d814a63025c9a6c91aab3438d.png";

interface ContactProps {
  onNavigate?: (page: string) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-[500px] md:h-[600px]">
      
      {/* Left Section: Travelers */}
      <div className="flex-1 relative flex flex-col justify-center items-center text-center p-8 border-b md:border-b-0 md:border-r border-white/10 group overflow-hidden">
        {/* Background Layer using the left half of the image */}
        <div 
            className="absolute inset-0 bg-cover bg-no-repeat bg-[position:25%_center] md:bg-[position:left_center] transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${imgSplitBanner})` }}
        ></div>
        
        {/* Blue Overlay to ensure text legibility and match design */}
        <div className="absolute inset-0 bg-[#0a4e9b]/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[#0a4e9b]/40"></div>

        {/* Content */}
        <div className="relative z-10 max-w-[400px]">
             <h2 className="text-white text-[32px] md:text-[42px] font-['Playfair_Display'] mb-8 leading-tight">
                Don't Have a <br/>
                Travel Agent?
             </h2>
             <button 
                onClick={() => onNavigate && onNavigate("inquiry")}
                className="bg-[#00aeef] text-white text-[14px] font-bold px-8 py-3 rounded-[2px] hover:bg-[#009bd5] transition-colors uppercase tracking-wider"
             >
                Find One
             </button>
        </div>
      </div>

      {/* Right Section: Agents */}
      <div className="flex-1 relative flex flex-col justify-center items-center text-center p-8 group overflow-hidden">
        {/* Background Layer using the right half of the image */}
        <div 
            className="absolute inset-0 bg-cover bg-no-repeat bg-[position:75%_center] md:bg-[position:right_center] transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${imgSplitBanner})` }}
        ></div>

        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-[#0a4e9b]/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[#0a4e9b]/40"></div>

        {/* Content */}
        <div className="relative z-10 max-w-[400px]">
             <h2 className="text-white text-[32px] md:text-[42px] font-['Playfair_Display'] mb-8 leading-tight">
                Travel Agent? <br/>
                Book For Your Client Here
             </h2>
             <button 
                onClick={() => onNavigate && onNavigate("login")}
                className="bg-[#00aeef] text-white text-[14px] font-bold px-8 py-3 rounded-[2px] hover:bg-[#009bd5] transition-colors uppercase tracking-wider"
             >
                Book Now
             </button>
        </div>
      </div>

    </div>
  );
}
