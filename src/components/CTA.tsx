

const CTA = () => {
  return (
    <section className="py-6 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Floating Premium Card */}
        <div className="relative  overflow-hidden">

          {/* Extremely subtle warm accent in the background of the card */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-70 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">

            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-10 py-1 rounded-full bg-slate-50 border border-slate-300 text-black text-sm font-semibold mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                100% Free & No Obligation
              </div>

              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight mb-5 leading-[1.15]">
                Ready To Compare  Solar Quotes?
              </h2>

              <div className="space-y-2 text-lg md:text-xl text-slate-800 font-light">
                <p>
                  Get connected with trusted Australian solar installers today.
                </p>
                <p>
                  Receive up to 3 free quotes and choose with confidence.
                </p>
              </div>
            </div>

            {/* Structured CTA Box */}
            <div className="shrink-0 w-full lg:w-auto flex flex-col items-center ">
              <button className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-lg md:text-xl py-3 px-12 rounded-xl transition-all shadow-sm hover:shadow-md w-full mb-5 animate-scale-pulse">
                Get My Free Quotes
              </button>

              <div className="flex items-center gap-2 text-sm text-slate-900 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                It only takes 2 minutes
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CTA;
