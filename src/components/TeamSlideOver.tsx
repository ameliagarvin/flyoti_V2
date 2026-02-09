import React from "react";
import { X } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  specialization: string;
  stats: string[];
  bio: string;
  fullBio?: string;
  image?: string;
}

interface TeamSlideOverProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TeamSlideOver({ member, isOpen, onClose }: TeamSlideOverProps) {
  if (!member) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] transition-visibility duration-500 ${isOpen ? 'visible' : 'invisible'}`}
    >
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/50 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      {/* Slide-over Panel */}
      <div 
        className={`absolute inset-y-0 right-0 w-full md:w-[90%] lg:w-[80%] bg-white shadow-2xl transform transition-transform duration-500 ease-in-out flex flex-col md:flex-row ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
         {/* Close Button */}
         <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-black/5 transition-colors"
         >
            <X size={32} className="text-gray-500" />
         </button>

         {/* Content Side */}
         <div className="flex-1 p-8 md:p-16 lg:p-24 overflow-y-auto bg-white flex flex-col justify-center">
             <div className="max-w-[600px]">
                 <h2 className="text-[32px] md:text-[48px] font-['Playfair_Display'] text-[#141d2e] mb-2">
                    {member.name}
                 </h2>
                 <p className="text-[#00aeef] text-[16px] font-medium font-['Inter'] mb-1">
                    {member.role}
                 </p>
                 <p className="text-[#141d2e] text-[14px] font-bold font-['Inter'] mb-8">
                    {member.specialization}
                 </p>

                 <div className="space-y-6 text-[#626d84] text-[16px] leading-relaxed font-['Inter']">
                     {/* Using the short bio as intro, and simulating more content if fullBio is missing */}
                     <p>{member.bio}</p>
                     
                     <p>
                        Serving as flight department manager for a busy European tour operator in Portland Oregon, she found her true love for flights and complex itineraries. That passion followed her north when she relocated to Vancouver BC, where she spent many years specializing in travel arrangements for Portugal and Spain, creating memorable journeys for her clients.
                     </p>
                     <p>
                        In 2016, {member.name.split(' ')[0]} joined the OTI family, where she found her ideal professional environment and home. For the past six years she has been a proud team member of the Scenic and Emerald Cruises Canadian air department, who had contracted OTI to manage their flights for their 5 -star river cruise line for Canadian guests.
                     </p>
                     <p>
                         {member.name.split(' ')[0]}'s dedication, attention to detail, and genuine enthusiasm make her a trusted advisor in creating seamless travel experiences.
                     </p>
                 </div>

                 <button className="mt-12 px-12 py-3 border border-[#dcdfe5] rounded-full text-[#141d2e] font-['Inter'] hover:bg-gray-50 transition-colors">
                    Contact
                 </button>
             </div>
         </div>

         {/* Image Side */}
         <div className="hidden md:block w-1/2 h-full bg-gray-100 relative">
             <img 
                src={member.image || "https://images.unsplash.com/photo-1623594675959-02360202d4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzAwNTg2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"} 
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover"
             />
         </div>
      </div>
    </div>
  );
}
