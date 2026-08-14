import { useQuoteModal } from '../../context/QuoteModalContext';

const CTA = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="py-8 lg:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Floating Premium Card */}
        <div className="relative overflow-hidden bg-linear-to-br from-[#00417E] via-[#002e5b] to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">

          {/* Ambient warm gradient glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F9B122]/15 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A6702]/15 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#F9B122] text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#0A6702] ring-2 ring-white/30 animate-pulse"></span>
                100% Free & Independent Comparison
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-white tracking-tight mb-4 leading-tight">
                Ready To Compare Solar Quotes?
              </h2>

              <div className="space-y-1 text-base md:text-lg text-slate-200 font-medium">
                <p>
                  Get connected with trusted Australian solar installers through <strong className="text-white">True Solar Quote</strong> today.
                </p>
                <p className="text-[#F9B122]">
                  Receive up to 3 competitive quotes and choose with complete confidence.
                </p>
              </div>
            </div>

            {/* Structured CTA Box */}
            <div className="shrink-0 w-full lg:w-auto flex flex-col items-center">
              <button 
                onClick={() => openQuoteModal()}
                className="bg-[#F9B122] hover:bg-[#eab308] text-[#00417E] font-black text-lg py-4 px-10 rounded-full transition-all shadow-[0_10px_35px_rgba(249,177,34,0.45)] hover:shadow-[0_15px_45px_rgba(249,177,34,0.6)] w-full mb-3 cursor-pointer hover:scale-105 active:scale-100"
              >
                Get 3 Free Quotes
              </button>

              <div className="flex items-center gap-2 text-xs text-slate-300 font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#F9B122]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Takes less than 60 seconds
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CTA;
