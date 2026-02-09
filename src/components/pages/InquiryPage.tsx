import React from "react";

interface InquiryPageProps {
  onNavigate: (page: string) => void;
}

export default function InquiryPage({ onNavigate }: InquiryPageProps) {
  return (
    <div className="bg-white py-12 md:py-20 px-4 md:px-0 min-h-screen">
      <div className="max-w-[1000px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h4 className="text-[#0dc1f2] text-[12px] font-bold tracking-[2.4px] uppercase mb-4 font-['Inter']">
            Welcome!
          </h4>
          <h2 className="text-[#0a4e9b] text-[36px] md:text-[50px] leading-[1.1] font-['Playfair_Display']">
            Let's Plan the Journey for Your Client
          </h2>
        </div>

        <form className="max-w-[800px] mx-auto space-y-12">
          
          {/* Agency Information Section */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-[#0dc1f2] text-[12px] font-bold tracking-[2.4px] uppercase font-['Inter'] whitespace-nowrap">
                AGENCY INFORMATION
              </h3>
              <div className="h-[1px] bg-[#0dc1f2] w-full opacity-30"></div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-4 mb-8 bg-gray-50 p-4 rounded-md">
                <button 
                    type="button"
                    onClick={() => onNavigate("register")}
                    className="bg-[#0dc1f2] text-white text-[14px] font-bold px-6 py-3 rounded-[2px] whitespace-nowrap hover:bg-[#0bb0dd] transition-colors"
                >
                    Register as a Travel Agent
                </button>
                <p className="text-[#626d84] text-[13px] leading-relaxed">
                    Create an account to access exclusive rates, faster bookings, and support. 
                    Need help right away? You can still submit an urgent inquiry without registering.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                   <label className="block text-[#141d2e] text-[11px] font-bold uppercase mb-2 font-['Inter'] tracking-wider">Name:</label>
                   <input type="text" className="w-full h-[48px] px-4 border border-[#dcdfe5] rounded-[2px] bg-white focus:outline-none focus:border-[#00aeef]" />
                </div>
                <div>
                   <label className="block text-[#141d2e] text-[11px] font-bold uppercase mb-2 font-['Inter'] tracking-wider">Email :</label>
                   <input type="email" className="w-full h-[48px] px-4 border border-[#dcdfe5] rounded-[2px] bg-white focus:outline-none focus:border-[#00aeef]" />
                </div>
                
                <div>
                   <label className="block text-[#141d2e] text-[11px] font-bold uppercase mb-2 font-['Inter'] tracking-wider">Address:</label>
                   <input type="text" className="w-full h-[48px] px-4 border border-[#dcdfe5] rounded-[2px] bg-white focus:outline-none focus:border-[#00aeef]" />
                </div>
                <div>
                   <label className="block text-[#141d2e] text-[11px] font-bold uppercase mb-2 font-['Inter'] tracking-wider">Tel No:</label>
                   <input type="tel" className="w-full h-[48px] px-4 border border-[#dcdfe5] rounded-[2px] bg-white focus:outline-none focus:border-[#00aeef]" />
                </div>

                <div className="md:col-span-2">
                   <label className="block text-[#141d2e] text-[11px] font-bold uppercase mb-2 font-['Inter'] tracking-wider">Reason for Journey:</label>
                   <div className="relative">
                        <select className="w-full h-[48px] px-4 border border-[#dcdfe5] rounded-[2px] bg-white focus:outline-none focus:border-[#00aeef] appearance-none text-[#141d2e]">
                            <option>Please Select</option>
                            <option>Business</option>
                            <option>Leisure</option>
                            <option>Group Travel</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                   </div>
                </div>
            </div>
          </div>

          {/* Request Details Section */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-[#0dc1f2] text-[12px] font-bold tracking-[2.4px] uppercase font-['Inter'] whitespace-nowrap">
                REQUEST DETAILS
              </h3>
              <div className="h-[1px] bg-[#0dc1f2] w-full opacity-30"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                   <label className="block text-[#141d2e] text-[11px] font-bold uppercase mb-2 font-['Inter'] tracking-wider">Type:</label>
                   <div className="relative">
                        <select className="w-full h-[48px] px-4 border border-[#dcdfe5] rounded-[2px] bg-white focus:outline-none focus:border-[#00aeef] appearance-none text-[#141d2e]">
                            <option>Round trip</option>
                            <option>One way</option>
                            <option>Multi-city</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                   </div>
                </div>
                <div>
                   <label className="block text-[#141d2e] text-[11px] font-bold uppercase mb-2 font-['Inter'] tracking-wider">Traveller(s):</label>
                   <div className="relative">
                        <select className="w-full h-[48px] px-4 border border-[#dcdfe5] rounded-[2px] bg-white focus:outline-none focus:border-[#00aeef] appearance-none text-[#141d2e]">
                            <option>1 Adult, Economy</option>
                            <option>2 Adults, Economy</option>
                            <option>1 Adult, Business</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                   </div>
                </div>

                <div>
                   <label className="block text-[#141d2e] text-[11px] font-bold uppercase mb-2 font-['Inter'] tracking-wider">Date:</label>
                   <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="Departure" className="w-full h-[48px] px-4 border border-[#dcdfe5] rounded-[2px] bg-white focus:outline-none focus:border-[#00aeef]" onFocus={(e) => e.target.type='date'} onBlur={(e) => e.target.type='text'} />
                        <input type="text" placeholder="Return" className="w-full h-[48px] px-4 border border-[#dcdfe5] rounded-[2px] bg-white focus:outline-none focus:border-[#00aeef]" onFocus={(e) => e.target.type='date'} onBlur={(e) => e.target.type='text'} />
                   </div>
                </div>
                <div>
                   <label className="block text-[#141d2e] text-[11px] font-bold uppercase mb-2 font-['Inter'] tracking-wider">Where To:</label>
                   <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="From?" className="w-full h-[48px] px-4 border border-[#dcdfe5] rounded-[2px] bg-white focus:outline-none focus:border-[#00aeef]" />
                        <input type="text" placeholder="To?" className="w-full h-[48px] px-4 border border-[#dcdfe5] rounded-[2px] bg-white focus:outline-none focus:border-[#00aeef]" />
                   </div>
                </div>

                <div>
                   <label className="block text-[#141d2e] text-[11px] font-bold uppercase mb-2 font-['Inter'] tracking-wider">Preferred Airline(s):</label>
                   <input type="text" className="w-full h-[48px] px-4 border border-[#dcdfe5] rounded-[2px] bg-white focus:outline-none focus:border-[#00aeef]" />
                </div>
                <div>
                   <label className="block text-[#141d2e] text-[11px] font-bold uppercase mb-2 font-['Inter'] tracking-wider">Cabin:</label>
                   <div className="relative">
                        <select className="w-full h-[48px] px-4 border border-[#dcdfe5] rounded-[2px] bg-white focus:outline-none focus:border-[#00aeef] appearance-none text-[#141d2e]">
                            <option>Select Cabin Class</option>
                            <option>Economy</option>
                            <option>Premium Economy</option>
                            <option>Business</option>
                            <option>First</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                   </div>
                </div>
            </div>
          </div>

          {/* Passenger Details Section */}
          <div>
            <div className="flex items-center gap-4 mb-2">
              <h3 className="text-[#0dc1f2] text-[12px] font-bold tracking-[2.4px] uppercase font-['Inter'] whitespace-nowrap">
                PASSENGER DETAILS
              </h3>
              <div className="h-[1px] bg-[#0dc1f2] w-full opacity-30"></div>
            </div>
            <p className="text-[#626d84] text-[11px] font-bold uppercase tracking-wider mb-6">
                PLEASE FILL IN PASSPORT NAMES AND DATES OF BIRTH
            </p>

            <div className="space-y-4">
                <div>
                   <label className="block text-[#141d2e] text-[11px] font-bold uppercase mb-2 font-['Inter'] tracking-wider">PASSENGER 1:</label>
                   <input type="text" className="w-full h-[48px] px-4 border border-[#dcdfe5] rounded-[2px] bg-white focus:outline-none focus:border-[#00aeef]" />
                </div>
            </div>
          </div>

          <div className="pt-8">
             <button type="submit" className="bg-[#0a4e9b] text-white font-bold px-12 py-4 rounded-[2px] hover:bg-[#083d7a] transition-colors shadow-lg text-[14px] uppercase tracking-wide">
                Submit Inquiry
             </button>
          </div>

        </form>
      </div>
    </div>
  );
}
