import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full  overflow-hidden mb-16 shadow-2xl min-h-[80vh] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.png" 
          alt="Modern solar home" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/90 via-slate-900/60 to-slate-900/95 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 pt-20 pb-24">
        {/* Text Content */}
        <div className="text-left max-w-3xl flex-1 mt-10 lg:mt-0">
          <div className="inline-flex px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-md mb-8 items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-white font-semibold tracking-wide text-sm uppercase">The Future of Energy</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight drop-shadow-lg">
            Switch to Solar, <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-teal-300">
              Save on Bills.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed drop-shadow-md font-medium">
            Join thousands of homeowners taking control of their energy. Get up to 3 free, no-obligation quotes from trusted local installers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg py-4 px-8 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2 group">
              Get 3 Free Quotes
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold text-lg py-4 px-8 rounded-full transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
              Learn More
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              <img className="w-12 h-12 rounded-full border-2 border-slate-900 object-cover shadow-sm" src="https://i.pravatar.cc/100?img=33" alt="User" />
              <img className="w-12 h-12 rounded-full border-2 border-slate-900 object-cover shadow-sm" src="https://i.pravatar.cc/100?img=47" alt="User" />
              <img className="w-12 h-12 rounded-full border-2 border-slate-900 object-cover shadow-sm" src="https://i.pravatar.cc/100?img=12" alt="User" />
              <div className="w-12 h-12 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-xs font-bold text-white shadow-sm">+2k</div>
            </div>
            <div className="text-sm text-slate-300">
              <div className="flex text-yellow-400 text-lg">
                ★★★★★
              </div>
              <span className="font-semibold text-white text-base">4.9/5</span> from happy homeowners
            </div>
          </div>
        </div>

        {/* Floating Glass Card - Quick Calculator */}
        <div className="hidden lg:block flex-1 relative w-full max-w-md w-full">
          <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-teal-400 rounded-xl blur-xl opacity-30 animate-pulse"></div>
          <div className="relative bg-slate-900/70 backdrop-blur-2xl border border-white/10 p-8 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-2">Calculate Savings</h3>
            <p className="text-slate-300 mb-6 text-sm">See how much you could save with solar in seconds.</p>
            
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Your Postcode</label>
                <input type="text" placeholder="e.g. 2000" className="w-full bg-slate-800/80 border border-slate-600 rounded-xl px-4 py-3.5 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-inner" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Average Power Bill</label>
                <div className="relative">
                  <select className="w-full bg-slate-800/80 border border-slate-600 rounded-xl px-4 py-3.5 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-inner">
                    <option value="" disabled selected>Select your range</option>
                    <option value="under_300">Under $300 / quarter</option>
                    <option value="300_to_600">$300 - $600 / quarter</option>
                    <option value="600_to_1000">$600 - $1000 / quarter</option>
                    <option value="over_1000">Over $1000 / quarter</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
              <button type="button" className="w-full bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold py-4 rounded-xl mt-2 transition-colors text-lg shadow-lg">
                Get Estimate
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
