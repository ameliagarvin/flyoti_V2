import React, { useState } from "react";
import TeamSlideOver from "./TeamSlideOver";

interface TeamMember {
  name: string;
  role: string;
  specialization: string;
  stats: string[];
  bio: string;
  image?: string;
}

const TeamCard = ({ member, onLearnMore }: { member: TeamMember, onLearnMore: (member: TeamMember) => void }) => (
  <div className="bg-white p-8 rounded-[16px] shadow-[0px_4px_20px_-4px_rgba(20,29,46,0.1)] flex flex-col h-full border border-gray-100 min-w-[300px]">
    <h3 className="text-[#141d2e] text-[20px] font-['Playfair_Display'] mb-2">{member.name}</h3>
    <p className="text-[#0dc1f2] text-[14px] font-['Inter'] mb-1">{member.role}</p>
    <p className="text-[#626d84] text-[14px] font-bold font-['Inter'] mb-6">{member.specialization}</p>
    
    <div className="border-t border-b border-[#dcdfe5] py-4 mb-6">
       <ul className="space-y-4">
          {member.stats.map((stat, i) => (
             <li key={i} className="flex items-start text-[#d99726] text-[14px]">
                <span className="mr-2">•</span>
                <span className="text-[#141d2e]">{stat}</span>
             </li>
          ))}
       </ul>
    </div>

    <div className="text-[#626d84] text-[14px] leading-[1.5] mb-6 flex-grow">
       <p className="line-clamp-4">{member.bio}</p>
    </div>
    
    <div className="mt-auto flex items-center justify-between">
       <button 
        onClick={() => onLearnMore(member)}
        className="text-[#141d2e] font-bold border-b border-black text-[14px] hover:text-[#00aeef] hover:border-[#00aeef] transition-colors"
       >
        Learn More
       </button>
       <button className="bg-[#faf8f5] border border-[rgba(20,29,46,0.2)] text-[#141d2e] text-[14px] px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
          Contact
       </button>
    </div>
  </div>
);

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: "Malisa Miletich",
      role: "Senior Air Specialist",
      specialization: "Business Class & Premium Travel",
      stats: [
        "Complex routings & contracted airfares",
        "European & cruise air specialist",
        "Personalized, precision-led service"
      ],
      bio: "With a lifelong passion for travel and exploration, Malisa has dedicated over 35+ years to the industry, inspiring clients with her enthusiasm and expertise."
    },
    {
      name: "Jessica Jonas",
      role: "Senior Air Specialist",
      specialization: "Cruise Air Packages",
      stats: [
        "30+ years airline & cruise air experience",
        "Complex itineraries & disruption support",
        "Trusted, detail-focused service"
      ],
      bio: "Long before she began her career, Jessica was captivated by the idea of exploring the world—a passion that led her into the travel industry at 19."
    },
    {
      name: "Angela Helgesen",
      role: "Senior Air Specialist",
      specialization: "African Safaris & River Cruises",
      stats: [
        "Complex international & cruise air expert",
        "Precision-driven, calm problem solver",
        "Seamless, stress-free travel planning"
      ],
      bio: "Angela never expected to become a lifelong member of the travel industry, but each new opportunity extended her journey—and now she proudly marks her 32nd year in the field."
    },
     {
      name: "Greg",
      role: "Senior Air Specialist",
      specialization: "Cruise Air Packages",
      stats: [
        "Complex international & cruise air expert",
        "Precision-driven, calm problem solver",
        "Seamless, stress-free travel planning"
      ],
      bio: "Long before he began his career, Greg was captivated by the idea of exploring the world—a passion that led him into the travel industry."
    },
     {
      name: "Raymond",
      role: "Senior Air Specialist",
      specialization: "African Safaris & River Cruises",
      stats: [
        "30+ years airline & cruise air experience",
        "Complex itineraries & disruption support",
        "Trusted, detail-focused service"
      ],
      bio: "Raymond never expected to become a lifelong member of the travel industry, but each new opportunity extended her journey."
    }
  ];

  return (
    <div className="bg-[#faf8f5] py-20 px-4 md:px-0">
       <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
             <h4 className="text-[#0dc1f2] text-[12px] font-bold tracking-[2.4px] uppercase mb-4 font-['Inter']">
                Meet Our Team
             </h4>
             <h2 className="text-[#0a4e9b] text-[40px] md:text-[60px] leading-[1.1] font-['Playfair_Display'] mb-8">
                Experienced Professionals at<br/>Your Service
             </h2>
             <p className="text-[#626d84] text-[18px] md:text-[20px] font-['Inter'] max-w-[700px] mx-auto">
                Work directly with seasoned professionals who deliver white glove service, cutting your costs and saving you valuable time
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {teamMembers.map((member, i) => (
                <TeamCard 
                    key={i} 
                    member={member} 
                    onLearnMore={setSelectedMember} 
                />
             ))}
          </div>
       </div>

       <TeamSlideOver 
          member={selectedMember} 
          isOpen={!!selectedMember} 
          onClose={() => setSelectedMember(null)} 
       />
    </div>
  );
}
