import React from "react";
import { Mail, Key } from "lucide-react";

interface LoginPageProps {
  onNavigate: (page: string) => void;
  onLogin: () => void;
}

export default function LoginPage({ onNavigate, onLogin }: LoginPageProps) {
  return (
    <div className="relative w-full min-h-[calc(100vh-88px)] flex items-center justify-center bg-[#1E293E]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
            src="https://images.unsplash.com/photo-1764609287343-7cb772b75c55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwYm93JTIwb2NlYW4lMjBibHVlfGVufDF8fHx8MTc3MDA3OTQ0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Cruise Ship" 
            className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-[#0a4e9b]/60 mix-blend-multiply"></div>
      </div>

      {/* Login Card */}
      <div className="relative z-10 bg-white rounded-[8px] p-8 md:p-12 w-full max-w-[480px] shadow-2xl mx-4">
         <h2 className="text-[#141d2e] text-[24px] md:text-[30px] font-bold font-['Inter'] mb-8 text-center">
            Log In
         </h2>

         <form onSubmit={(e) => { e.preventDefault(); onLogin(); }} className="space-y-6">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <Mail size={18} />
                </div>
                <input 
                    type="email" 
                    placeholder="Your email" 
                    className="w-full pl-10 pr-4 py-3 border border-[#dcdfe5] rounded-[4px] focus:outline-none focus:border-[#00aeef] text-[#141d2e] placeholder-gray-400"
                />
            </div>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <Key size={18} />
                </div>
                <input 
                    type="password" 
                    placeholder="Password" 
                    className="w-full pl-10 pr-4 py-3 border border-[#dcdfe5] rounded-[4px] focus:outline-none focus:border-[#00aeef] text-[#141d2e] placeholder-gray-400"
                />
            </div>

            <button 
                type="submit"
                className="w-full bg-[#0a4e9b] text-white font-bold py-3 rounded-[4px] hover:bg-[#083d7a] transition-colors"
            >
                Log In
            </button>
         </form>

         <div className="text-right mt-4">
             <a href="#" className="text-[#626d84] text-[12px] hover:text-[#00aeef]">Forgot password?</a>
         </div>

         <div className="mt-8 pt-8 border-t border-[#dcdfe5] text-center">
             <p className="text-[#626d84] text-[14px] mb-4">Not a member yet?</p>
             <button 
                onClick={() => onNavigate("register")}
                className="w-full bg-[#00aeef] text-white font-bold py-3 rounded-[4px] hover:bg-[#009bd5] transition-colors"
             >
                Sign Up
             </button>
         </div>
      </div>
    </div>
  );
}
