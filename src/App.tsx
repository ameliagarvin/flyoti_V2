import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Legacy from "./components/Legacy";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import AgentCenter from "./components/pages/AgentCenter";
import InquiryPage from "./components/pages/InquiryPage";
import Footer from "./components/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home"); // 'home', 'login', 'register', 'agent-center', 'inquiry'
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigateTo("agent-center");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigateTo("home");
  };

  return (
    <div className="w-full min-h-screen bg-white font-['Inter'] overflow-x-hidden relative">
      <Header 
        currentPage={currentPage} 
        onNavigate={navigateTo} 
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />
      
      {currentPage === "home" ? (
        <>
          <Hero onNavigate={navigateTo} />
          <Services onNavigate={navigateTo} />
          <Legacy />
          <Team />
          <Testimonials />
          <Contact onNavigate={navigateTo} />
        </>
      ) : (
        <div className="pt-[88px]">
            {currentPage === "login" && (
                <LoginPage 
                    onNavigate={navigateTo} 
                    onLogin={handleLogin}
                />
            )}

            {currentPage === "register" && (
                <RegisterPage 
                    onNavigate={navigateTo} 
                    onRegister={() => navigateTo("agent-center")}
                />
            )}

            {currentPage === "agent-center" && (
                <AgentCenter />
            )}

            {currentPage === "inquiry" && (
                <InquiryPage 
                    onNavigate={navigateTo}
                />
            )}
        </div>
      )}

      <Footer />
    </div>
  );
}
