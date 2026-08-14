import { useState } from 'react';

const SolarJourney = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section 
        className="relative h-80 min-h-112.5 flex flex-col justify-center items-center bg-slate-900 overflow-hidden mt-12 bg-fixed bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop')" }}
      >
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-amber-400 text-sm font-semibold tracking-wide uppercase mb-8 backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="M5 5l1.5 1.5"></path>
              <path d="M17.5 17.5L19 19"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="M5 19l1.5-1.5"></path>
              <path d="M17.5 6.5L19 5"></path>
            </svg>
            The Smart Way to Go Solar
          </div>

          <h2 className="text-4xl md:text-5xl font-serif lg:text-6xl font-bold text-white mb-4 tracking-tight leading-tight">
            Your Solar Journey <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-amber-200">Starts Here</span>
          </h2>
          
          <div className="space-y-2 text-lg md:text-xl lg:text-2xl text-slate-100 font-light max-w-5xl mx-auto ">
            <p>
              Whether you're installing your first solar system or upgrading your existing one, True Solar Quote makes finding the right installer simple.
            </p>
            <p className="text-white font-medium text-xl md:text-2xl">
              We'll help you compare trusted professionals so you can buy with confidence.
            </p>
          </div>

          {/* Action Button */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="mt-10 bg-[#FFA100] hover:bg-[#E59100] text-slate-900 font-bold text-xl py-4 px-12 rounded-full shadow-[0_0_15px_rgba(255,161,0,0.4)] transition-transform hover:scale-105"
          >
            Get Free Quotes
          </button>
        </div>
      </section>

      {/* Modal Popup Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          {/* Modal Content */}
          <div 
            className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-slate-50 p-6 md:p-8 border-b border-slate-100 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Get Free Quotes</h3>
                <p className="text-slate-500 text-sm mt-1">Take the first step in your solar journey.</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 bg-white hover:bg-slate-100 rounded-full p-2.5 transition-colors border border-slate-200 self-start"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            {/* Modal Form */}
            <div className="p-6 md:p-8">
              <form className="space-y-5" onSubmit={(e) => { 
                e.preventDefault(); 
                alert("Thank you! Your request for quotes has been submitted.");
                setIsModalOpen(false); 
              }}>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Full Name</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Email Address</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Phone Number</label>
                  <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400" placeholder="0412 345 678" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Postcode</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400" placeholder="2000" />
                </div>
                
                <button type="submit" className="w-full mt-6 bg-[#FFA100] hover:bg-[#E59100] text-slate-900 text-lg font-bold py-4 rounded-xl shadow-lg transition-transform hover:scale-[1.02]">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SolarJourney;
