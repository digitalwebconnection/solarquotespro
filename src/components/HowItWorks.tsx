import { FileText, Users, DollarSign, ChevronRight } from 'lucide-react';

const steps = [
  {
    num: '1',
    icon: <FileText size={28} className="text-[#1b75bb]" />,
    title: 'Request Quotes',
    desc: 'Tell us about your home and energy needs through our quick form.'
  },
  {
    num: '2',
    icon: <Users size={28} className="text-[#1b75bb]" />,
    title: 'Compare Installers',
    desc: 'Receive quotes from up to three pre-vetted, trusted local solar installers.'
  },
  {
    num: '3',
    icon: <DollarSign size={28} className="text-[#1b75bb]" />,
    title: 'Choose & Save',
    desc: 'Select the best quote for you and start saving money on your electricity bills.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-[#eaeff3] font-['Helvetica_Neue',Helvetica,Arial,sans-serif]" id="how-it-works">
      <div className="max-w-[1110px] mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-[26px] md:text-[32px] font-bold text-[#2b3864] uppercase tracking-wide mb-4">
            How It Works
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#404040] max-w-2xl mx-auto">
            Three simple steps to switch to solar and take control of your energy bills.
          </p>
        </div>
        
        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[40px] left-[16%] right-[16%] h-[2px] bg-[#d4d7e0] -z-10"></div>
          
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-[8px] border border-[#e0e0e0] shadow-[4px_4px_12px_rgba(0,0,0,0.07)] p-8 pt-10 relative flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300"
            >
              {/* Number Badge & Icon Container */}
              <div className="w-[80px] h-[80px] bg-white rounded-full border-2 border-[#1b75bb] flex items-center justify-center absolute -top-[40px] left-1/2 -translate-x-1/2 shadow-[0_4px_10px_rgba(27,117,187,0.15)]">
                {step.icon}
                
                {/* Step Number Indicator */}
                <div className="absolute -top-1 -right-2 w-[28px] h-[28px] bg-[#f3701f] text-white rounded-full flex items-center justify-center font-bold text-[14px] shadow-sm border border-white">
                  {step.num}
                </div>
              </div>
              
              <h3 className="text-[#2b3864] text-[18px] font-bold mt-6 mb-3">
                {step.title}
              </h3>
              
              <p className="text-[#494949] text-[15px] leading-relaxed m-0">
                {step.desc}
              </p>
              
              {/* Mobile Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="md:hidden absolute -bottom-[20px] left-1/2 -translate-x-1/2 z-20 w-[40px] h-[40px] bg-[#eaeff3] rounded-full flex items-center justify-center text-[#9fa2a5]">
                  <ChevronRight size={24} className="rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Optional Call to Action to complete the SolarQuotes feel */}
        <div className="mt-16 text-center">
          <a 
            href="#get-quotes" 
            className="inline-block bg-[#f3701f] hover:bg-[#d96218] text-white font-bold text-[16px] md:text-[18px] py-4 px-10 rounded-[40px] shadow-[0_4px_15px_rgba(243,112,31,0.3)] transition-colors duration-300 uppercase tracking-wide"
          >
            Get 3 Free Quotes Now
          </a>
        </div>
        
      </div>
    </section>
  );
}
