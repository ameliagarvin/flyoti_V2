import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-[4px] shadow-sm mb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="text-[#141d2e] text-[16px] font-medium font-['Inter']">{question}</span>
        <div className="bg-[#0a4e9b] rounded-full p-1 text-white">
           {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-[#626d84] text-[14px] leading-relaxed border-t border-gray-100 pt-4">
          {answer}
        </div>
      )}
    </div>
  );
};

export default function AgentCenter() {
  const faqs = [
    {
      question: "Who can sign up as a travel agent?",
      answer: "Any licensed travel agent or agency in Canada can sign up to partner with OTI. We verify all registrations to ensure compliance with industry standards."
    },
    {
      question: "What benefits do registered travel agents receive?",
      answer: "Registered agents gain access to our exclusive booking engine, higher commission tiers, priority support for schedule changes, and dedicated account management."
    },
    {
      question: "Can independent or home-based agents apply?",
      answer: "Yes, independent and home-based agents are welcome to apply provided they have valid credentials (IATA/TICO/CLIA)."
    },
    {
      question: "Do I need an IATA or TICO number?",
      answer: "Yes, a valid IATA, TICO, or equivalent industry identifier is required to register and book with OTI."
    }
  ];

  return (
    <div className="bg-[#faf8f5] py-20 px-4 md:px-0 min-h-screen">
      <div className="max-w-[1000px] mx-auto">
         <div className="text-center mb-16">
             <h4 className="text-[#0dc1f2] text-[12px] font-bold tracking-[2.4px] uppercase mb-4 font-['Inter']">
                Welcome
             </h4>
             <h2 className="text-[#0a4e9b] text-[40px] md:text-[50px] leading-[1.1] font-['Playfair_Display']">
                Travel Agent Center
             </h2>
         </div>

         <div className="max-w-[800px] mx-auto">
             <div className="flex items-center gap-4 mb-8">
                 <h3 className="text-[#0dc1f2] text-[12px] font-bold tracking-[2.4px] uppercase font-['Inter'] whitespace-nowrap">
                    FREQUENTLY ASKED QUESTIONS
                 </h3>
                 <div className="h-[1px] bg-[#0dc1f2] w-full opacity-50"></div>
             </div>

             <div>
                {faqs.map((faq, index) => (
                  <FAQItem key={index} {...faq} />
                ))}
             </div>
         </div>
      </div>
    </div>
  );
}
