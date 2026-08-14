import { Scale, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { useQuoteModal } from '../context/QuoteModalContext';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
  const { openQuoteModal } = useQuoteModal();
  const lastUpdated = "August 14, 2026";

  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-16">
      {/* ─── Header ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
          <Scale className="w-4 h-4 text-amber-600" />
          <span>Transparent Consumer Terms</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-slate-950 tracking-tight leading-tight">
          Terms of Service
        </h1>
        <p className="text-slate-600 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
          Please review the terms and conditions governing the use of Solar Quotes Pro's independent comparison service.
        </p>
        <div className="mt-4 text-xs text-slate-700 font-semibold">
          Last Updated: {lastUpdated} • Governing Law: New South Wales, Australia
        </div>
      </div>

      {/* ─── Main Content ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-200/90 p-6 sm:p-10 space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">

          {/* 1. Introduction */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 flex items-center gap-2.5">
              <span className="w-2 h-5 bg-orange-500 rounded-full shrink-0"></span>
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the website and quote matching service provided by <strong>Solar Quotes Pro</strong> ("Platform", "we", "us", or "our"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.
            </p>
          </section>

          {/* 2. Free Comparison Service */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 flex items-center gap-2.5">
              <span className="w-2 h-5 bg-orange-500 rounded-full shrink-0"></span>
              2. Free & Independent Matching Service
            </h2>
            <p>
              Solar Quotes Pro is a <strong>100% free, no-obligation comparison service</strong> for consumers. We do not charge Australian homeowners or businesses any fee to request or receive quotes.
            </p>
            <p>
              Our role is to facilitate connections between property owners and vetted third-party Clean Energy Council (CEC) accredited solar installers operating in their regional area.
            </p>
          </section>

          {/* 3. No Obligation */}
          <section className="space-y-3 bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>Zero Pressure & No Obligation to Purchase</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Requesting quotes via Solar Quotes Pro does not obligate you to purchase a solar system, battery, or service from any installer. You remain fully empowered to evaluate proposals, negotiate terms, or decline quotes at your sole discretion.
            </p>
          </section>

          {/* 4. Installer Relationship & Disclaimers */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 flex items-center gap-2.5">
              <span className="w-2 h-5 bg-orange-500 rounded-full shrink-0"></span>
              3. Independent Installer Network & Contracts
            </h2>
            <p>
              While Solar Quotes Pro enforces rigorous vetting standards (including verification of CEC accreditation, licensing, and insurance), participating installers operate as independent businesses.
            </p>
            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-1" />
                <span>Any contract entered into for the supply or installation of solar equipment is solely between you and the chosen solar contractor.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-1" />
                <span>Installers are solely responsible for site assessments, structural integrity checks, STC rebate processing, and equipment warranties.</span>
              </li>
            </ul>
          </section>

          {/* 5. User Responsibilities */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 flex items-center gap-2.5">
              <span className="w-2 h-5 bg-orange-500 rounded-full shrink-0"></span>
              4. User Responsibilities
            </h2>
            <p>When requesting quotes through our platform, you agree to:</p>
            <ul className="space-y-2 pl-2 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Provide accurate and truthful contact information and property details.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Ensure you are the property owner, authorized representative, or tenant with landlord permission to inquire about solar installations.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Not submit fraudulent, automated, or malicious spam requests.</span>
              </li>
            </ul>
          </section>

          {/* 6. Intellectual Property */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 flex items-center gap-2.5">
              <span className="w-2 h-5 bg-orange-500 rounded-full shrink-0"></span>
              5. Intellectual Property
            </h2>
            <p>
              All content, brand assets, logos, design graphics, software, and layout on Solar Quotes Pro are protected by Australian copyright and trademark laws. You may not copy, reproduce, or scrape platform data without explicit prior written consent.
            </p>
          </section>

          {/* 7. Governing Law */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 flex items-center gap-2.5">
              <span className="w-2 h-5 bg-orange-500 rounded-full shrink-0"></span>
              6. Governing Law
            </h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the State of New South Wales, Australia. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts of NSW.
            </p>
          </section>

          {/* 8. Contact Us */}
          <section className="space-y-2 pt-4 border-t border-slate-200">
            <h3 className="font-bold text-slate-900">Legal Contact</h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Solar Quotes Pro — Legal & Compliance<br />
              Email: <a href="mailto:hello@solarquotespro.com.au" className="text-orange-600 font-semibold">hello@solarquotespro.com.au</a><br />
              Location: Sydney, NSW, Australia
            </p>
          </section>

        </div>

        {/* ─── Bottom CTA ─── */}
        <div className="mt-10 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 text-center border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
          <h3 className="text-2xl font-serif font-black text-white mb-2">Ready to Compare Verified Solar Quotes?</h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
            Get up to 3 competitive quotes from vetted CEC-accredited installers with zero sales pressure.
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
