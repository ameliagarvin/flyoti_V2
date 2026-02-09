import React, { useState, useEffect } from "react";
import svgPaths from "../imports/svg-6v7tj2hpja";
import { Menu, X } from "lucide-react";

function FlyOtiWhite() {
  return (
    <div className="h-[40px] md:h-[70px] aspect-[205/70] cursor-pointer">
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

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isLoggedIn: boolean;
  onLogout: () => void;
}

export default function Header({ currentPage, onNavigate, isLoggedIn, onLogout }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#" },
    { name: "Our Legacy", href: "#" },
    { name: "Team", href: "#" },
    { name: "Our Credentials", href: "#" },
    { name: "Experience", href: "#" },
  ];

  const handleLogoClick = () => {
    onNavigate("home");
  };
  
  const isHome = currentPage === "home";
  // If not home, always blue. If home, blue only when scrolled.
  const bgClass = !isHome || isScrolled ? "bg-[#0a4e9b] shadow-md py-0" : "bg-transparent pt-4 md:pt-[30px]";

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${bgClass}`}>
      <div className={`max-w-[1400px] mx-auto relative flex justify-between items-center h-[88px] px-4 md:px-0`}>
        {/* Logo */}
        <div className="text-white" onClick={handleLogoClick}>
          <FlyOtiWhite />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 bg-transparent">
            <nav className="flex gap-8 items-center text-[14px] text-[rgba(250,248,245,0.9)] tracking-[0.35px]">
                {navLinks.map((link) => (
                <button 
                    key={link.name} 
                    onClick={() => {
                        onNavigate("home");
                    }} 
                    className="hover:text-white transition-colors whitespace-nowrap bg-transparent border-none cursor-pointer"
                >
                    {link.name}
                </button>
                ))}
            </nav>
            <button 
                onClick={() => onNavigate("inquiry")}
                className="bg-[#00aeef] text-white text-[14px] px-6 py-2.5 rounded-[2px] hover:bg-[#009bd5] transition-colors"
            >
                Inquire Now
            </button>
        </div>

        {/* Phone Numbers & Travel Agent (Desktop) */}
        <div className="hidden xl:flex flex-row items-center gap-6 ml-8">
            {isLoggedIn ? (
                <button 
                    onClick={onLogout}
                    className="border border-white/30 text-white text-[14px] px-4 py-2 rounded-[2px] hover:bg-white/10 transition-colors whitespace-nowrap"
                >
                    Logout
                </button>
            ) : (
                <button 
                    onClick={() => onNavigate("login")}
                    className="border border-white/30 text-white text-[14px] px-4 py-2 rounded-[2px] hover:bg-white/10 transition-colors whitespace-nowrap"
                >
                    Travel Agent
                </button>
            )}
            
            <div className="flex flex-col items-end text-white font-bold text-[16px] tracking-[0.35px] leading-[20px]">
                <p>800-817-0544</p>
                <p>604-738-3433</p>
            </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[88px] left-0 w-full bg-[#0a4e9b] p-4 flex flex-col gap-4 shadow-lg z-50">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => {
                  onNavigate("home");
                  setIsMenuOpen(false);
              }}
              className="text-white text-lg py-2 border-b border-white/10 text-left"
            >
              {link.name}
            </button>
          ))}
          {isLoggedIn ? (
             <button 
                onClick={() => {
                    onLogout();
                    setIsMenuOpen(false);
                }}
                className="text-white text-lg py-2 border-b border-white/10 text-left"
              >
                Logout
              </button>
          ) : (
             <button 
                onClick={() => {
                    onNavigate("login");
                    setIsMenuOpen(false);
                }}
                className="text-white text-lg py-2 border-b border-white/10 text-left"
              >
                Travel Agent Center
              </button>
          )}
           <div className="flex flex-col text-white font-bold text-[16px] tracking-[0.35px] leading-[20px] py-4">
            <p>800-817-0544</p>
            <p>604-738-3433</p>
          </div>
          <button 
            onClick={() => {
                onNavigate("inquiry");
                setIsMenuOpen(false);
            }}
            className="bg-[#00aeef] text-white text-[16px] w-full py-3 rounded-[2px] hover:bg-[#009bd5] transition-colors"
          >
            Inquire Now
          </button>
        </div>
      )}
    </div>
  );
}
