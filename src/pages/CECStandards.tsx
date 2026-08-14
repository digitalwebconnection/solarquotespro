import { Award, ShieldCheck, CheckCircle2, Zap, FileCheck, ArrowRight } from 'lucide-react';
import { useQuoteModal } from '../context/QuoteModalContext';
import { Link } from 'react-router-dom';

export default function CECStandards() {
  const { openQuoteModal } = useQuoteModal();

  const standardsList = [
    {
      number: "01",
      title: "Clean Energy Council (CEC) Accreditation",
      desc: "Every installer in our network must hold active, verifiable CEC accreditation for solar PV design and battery storage installation. We verify credentials directly against the national registry.",
      icon: <Award className="w-6 h-6 text-amber-500" />
    },
    {
      number: "02",
      title: "Tier-1 Clean Energy Equipment Standards",
      desc: "We exclusively approve installers who supply Tier-1 solar panels, high-efficiency inverters (SMA, Fronius, Sungrow, Enphase, SolarEdge), and certified lithium storage systems complying with AS/NZS 5033 and AS/NZS 4777.2 standards.",
      icon: <Zap className="w-6 h-6 text-orange-500" />
    },
    {
      number: "03",
      title: "Mandatory 10-Year Workmanship Warranties",
      desc: "Contractors must provide a minimum 10-year comprehensive workmanship installation warranty, backed by 25-year panel performance guarantees and minimum 10-year inverter manufacturer warranties.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />
    },
    {
      number: "04",
      title: "Comprehensive Liability & Indemnity Insurance",
      desc: "All participating contractors maintain active Public Liability Insurance (minimum $10,000,000 to $20,000,000 coverage) and full worker compensation policies to protect your property at all times.",
      icon: <FileCheck className="w-6 h-6 text-sky-500" />
    },
    {
      number: "05",
      title: "Strict Zero-Hard-Sales Code of Conduct",
      desc: "Installers must adhere to our consumer protection code: transparent itemized pricing, no pushy door-to-door sales tactics, clear rebate calculations (STCs), and zero hidden connection fees.",
      icon: <CheckCircle2 className="w-6 h-6 text-purple-500" />
    },
    {
      number: "06",
      title: "Grid Connection & DNSP Pre-Approval",
      desc: "Installers handle the complete regulatory process with your local Distributed Network Service Provider (DNSP) — including Ausgrid, Endeavour, Essential, Jemena, Powercor, Energex, or Western Power.",
      icon: <Zap className="w-6 h-6 text-blue-500" />
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-16">
      {/* ─── Header ─── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
          <Award className="w-4 h-4 text-orange-600" />
          <span>Clean Energy Council (CEC) Quality Framework</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-slate-950 tracking-tight leading-tight">
          CEC Verification Standards
        </h1>
        <p className="text-slate-600 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
          How Solar Quotes Pro audits, verifies, and continually benchmarks Australian solar installers to guarantee safety, maximum rebate eligibility, and long-term energy savings.
        </p>
      </div>

      {/* ─── Standards Grid ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {standardsList.map((std) => (
            <div 
              key={std.number}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-orange-300 transition-all duration-300 relative group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                  {std.icon}
                </div>
                <span className="text-2xl font-black text-slate-200 font-serif">{std.number}</span>
              </div>

              <h3 className="text-lg font-serif font-black text-slate-900 mb-2 leading-snug">
                {std.title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {std.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ─── 10-Point Inspection Infobox ─── */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-6">
          <div className="text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Pre-Match Verification</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-slate-950 mt-1">
              Our 10-Point Pre-Screening Checklist
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Before an installer is permitted to submit quotes on Solar Quotes Pro, they must pass each check:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-slate-800">
            {[
              "Active Australian Business Number (ABN/ACN) & ASIC Check",
              "Current Clean Energy Council (CEC) Accreditation ID",
              "Licensed Electrical Contractor (REC) in Operating State",
              "$10M - $20M Public Liability Insurance Certificate",
              "Tier-1 Solar Panel Hardware Compliance Validation",
              "CEC Approved Battery Storage Endorsement (where applicable)",
              "Minimum 4.5+ Star Verified Australian Customer Review Rating",
              "Signed Agreement to 10-Year Workmanship Warranty Standard",
              "Zero Unresolved Fair Trading or Consumer Tribunal Complaints",
              "Transparent STC Government Rebate Calculation Guarantee"
            ].map((check, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-200/80">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{check}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Bottom CTA ─── */}
        <div className="bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 text-center border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
          <h3 className="text-2xl font-serif font-black text-white mb-2">Connect with Verified CEC Solar Installers</h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
            Compare 3 itemized quotes from certified local pros who compete for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => openQuoteModal()}
              className="w-full sm:w-auto bg-linear-to-r from-amber-400 via-orange-500 to-amber-500 text-slate-950 font-black text-sm uppercase tracking-wider py-3.5 px-7 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get 3 Free Solar Quotes</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/"
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-sm py-3.5 px-6 rounded-xl border border-slate-700 transition-all text-center"
            >
              Return to Home
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
