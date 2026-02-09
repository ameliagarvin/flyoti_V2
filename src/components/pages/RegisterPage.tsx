import React from "react";

interface RegisterPageProps {
  onNavigate: (page: string) => void;
  onRegister: () => void;
}

export default function RegisterPage({ onNavigate, onRegister }: RegisterPageProps) {
  return (
    <div className="bg-[#faf8f5] py-20 px-4 md:px-0 min-h-screen">
       <div className="max-w-[1000px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
             <h4 className="text-[#0dc1f2] text-[12px] font-bold tracking-[2.4px] uppercase mb-4 font-['Inter']">
                Travel Agent
             </h4>
             <h2 className="text-[#0a4e9b] text-[40px] md:text-[50px] leading-[1.1] font-['Playfair_Display']">
                Partner with Canada's<br/>Premier Boutique AirService
             </h2>
          </div>

          {/* Form */}
          <div className="max-w-[800px] mx-auto">
             <div className="flex items-center gap-4 mb-8">
                 <h3 className="text-[#0dc1f2] text-[12px] font-bold tracking-[2.4px] uppercase font-['Inter'] whitespace-nowrap">
                    AGENCY INFORMATION
                 </h3>
                 <div className="h-[1px] bg-[#0dc1f2] w-full opacity-50"></div>
             </div>

             <form onSubmit={(e) => { e.preventDefault(); onRegister(); }} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                   <label className="block text-[#141d2e] text-[12px] font-bold uppercase mb-2 font-['Inter']">Agency:</label>
                   <input type="text" className="w-full h-[48px] px-4 border border-[#dcdfe5] rounded-[2px] bg-white focus:outline-none focus:border-[#00aeef]" />
                </div>
                <div>
                   <label className="block text-[#141d2e] text-[12px] font-bold uppercase mb-2 font-['Inter']">Agent Name :</label>
                   <input type="text" className="w-full h-[48px] px-4 border border-[#dcdfe5] rounded-[2px] bg-white focus:outline-none focus:border-[#00aeef]" />
                </div>
                
                <div>
                   <label className="block text-[#141d2e] text-[12px] font-bold uppercase mb-2 font-['Inter']">Address:</label>
                   <input type="text" className="w-full h-[48px] px-4 border border-[#dcdfe5] rounded-[2px] bg-white focus:outline-none focus:border-[#00aeef]" />
                </div>
                <div>
                   <label className="block text-[#141d2e] text-[12px] font-bold uppercase mb-2 font-['Inter']">Email:</label>
                   <input type="email" className="w-full h-[48px] px-4 border border-[#dcdfe5] rounded-[2px] bg-white focus:outline-none focus:border-[#00aeef]" />
                </div>

                <div>
                   <label className="block text-[#141d2e] text-[12px] font-bold uppercase mb-2 font-['Inter']">IATA #:</label>
                   <input type="text" className="w-full h-[48px] px-4 border border-[#dcdfe5] rounded-[2px] bg-white focus:outline-none focus:border-[#00aeef]" />
                </div>
                <div>
                   <label className="block text-[#141d2e] text-[12px] font-bold uppercase mb-2 font-['Inter']">Tel #:</label>
                   <input type="tel" className="w-full h-[48px] px-4 border border-[#dcdfe5] rounded-[2px] bg-white focus:outline-none focus:border-[#00aeef]" />
                </div>

                <div>
                   <label className="block text-[#141d2e] text-[12px] font-bold uppercase mb-2 font-['Inter']">Password:</label>
                   <input type="password" className="w-full h-[48px] px-4 border border-[#dcdfe5] rounded-[2px] bg-white focus:outline-none focus:border-[#00aeef]" />
                </div>
                <div>
                   <label className="block text-[#141d2e] text-[12px] font-bold uppercase mb-2 font-['Inter']">Confirm Password:</label>
                   <input type="password" className="w-full h-[48px] px-4 border border-[#dcdfe5] rounded-[2px] bg-white focus:outline-none focus:border-[#00aeef]" />
                </div>

                <div className="md:col-span-2 flex justify-center mt-8">
                   <button type="submit" className="bg-[#0a4e9b] text-white font-bold px-12 py-3 rounded-[2px] hover:bg-[#083d7a] transition-colors shadow-lg">
                      Register
                   </button>
                </div>
             </form>
          </div>
       </div>
    </div>
  );
}
