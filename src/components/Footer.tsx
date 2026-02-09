import React from "react";
import svgPaths from "../imports/svg-6v7tj2hpja";

function FlyOtiWhite() {
  return (
    <div className="h-[50px] aspect-[205/70] mb-6">
      <svg className="block w-full h-full" fill="none" preserveAspectRatio="xMinYMid meet" viewBox="0 0 205.08 70.65">
        <g id="FlyOTI_WHITE 1">
          <path d={svgPaths.pe406700} fill="currentColor" id="Vector" />
          <path d={svgPaths.p5d5fd00} fill="currentColor" id="Vector_2" />
          <path d={svgPaths.p30812700} fill="currentColor" id="Vector_3" />
          <path d={svgPaths.p173a7290} fill="currentColor" id="Vector_4" />
          <path d={svgPaths.p301daa90} fill="currentColor" id="Vector_5" />
          <path d={svgPaths.p13cd5800} fill="currentColor" id="Vector_6" />
          <path d={svgPaths.p2096a180} fill="currentColor" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0a4e9b] text-white py-16 px-4 md:px-0 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Logo & Info */}
        <div>
          <FlyOtiWhite />
          <p className="text-[rgba(250,248,245,0.6)] text-[14px] leading-[1.6] mb-6">
            Canada's most distinguished boutique air department for cruise and luxury travel.
          </p>
        </div>

        {/* Quick Links */}
        <div>
           <h4 className="text-[#0dc1f2] font-bold uppercase tracking-[1.2px] text-[14px] mb-6">Quick Links</h4>
           <ul className="space-y-4 text-[14px] text-[rgba(250,248,245,0.8)]">
               <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Our Credentials</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Experience</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Our Legacy</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
           </ul>
        </div>

        {/* Contact */}
        <div>
            <h4 className="text-[#0dc1f2] font-bold uppercase tracking-[1.2px] text-[14px] mb-6">Contact Us</h4>
             <ul className="space-y-4 text-[14px] text-[rgba(250,248,245,0.8)]">
               <li className="flex flex-col">
                   <span className="font-bold text-white">800-817-0544</span>
                   <span>Toll Free</span>
               </li>
               <li className="flex flex-col">
                   <span className="font-bold text-white">604-738-3433</span>
                   <span>Local</span>
               </li>
               <li>
                   <a href="mailto:info@flyoti.com" className="hover:text-white transition-colors">info@flyoti.com</a>
               </li>
           </ul>
        </div>
        
        {/* Address */}
         <div>
            <h4 className="text-[#0dc1f2] font-bold uppercase tracking-[1.2px] text-[14px] mb-6">Office</h4>
             <p className="text-[rgba(250,248,245,0.8)] text-[14px] leading-[1.6]">
                1234 Travel Way<br/>
                Vancouver, BC<br/>
                Canada, V6B 3H6
             </p>
        </div>

      </div>

      <div className="max-w-[1400px] mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[12px] text-[rgba(250,248,245,0.4)]">
          <p>&copy; {new Date().getFullYear()} OTI. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
      </div>
    </footer>
  );
}
