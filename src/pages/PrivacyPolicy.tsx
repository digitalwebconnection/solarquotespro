import { ShieldCheck, Lock, CheckCircle2, ArrowRight } from 'lucide-react';
import { useQuoteModal } from '../context/QuoteModalContext';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  const { openQuoteModal } = useQuoteModal();
  const lastUpdated = "August 14, 2026";

  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-16">
      {/* ─── Hero Header ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Australian Privacy Principles (APP) Compliant</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-slate-950 tracking-tight leading-tight">
          Privacy & Data Standards
        </h1>
        <p className="text-slate-600 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
          We believe in 100% transparency. Learn how True Solar Quote protects your personal information, enforces strict data security, and respects your privacy.
        </p>
        <div className="mt-4 text-xs text-slate-700 font-semibold">
          Last Updated: {lastUpdated} • Applicable Australia-Wide
        </div>
      </div>

      {/* ─── Main Content Container ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-200/90 p-6 sm:p-10 space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">

          {/* 1. Overview */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 flex items-center gap-2.5">
              <span className="w-2 h-5 bg-[#003B73] rounded-full shrink-0"></span>
              1. Our Privacy Commitment
            </h2>
            <p>
              At <strong>True Solar Quote</strong> ("we", "our", or "us"), we are committed to protecting the privacy of Australian homeowners and business operators who use our independent solar comparison platform.
            </p>
            <p>
              We comply with the <strong>Privacy Act 1988 (Cth)</strong> and the <strong>Australian Privacy Principles (APPs)</strong>, which govern standards, rights, and obligations around handling, using, and storing personal information.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 flex items-center gap-2.5">
              <span className="w-2 h-5 bg-orange-500 rounded-full shrink-0"></span>
              2. Information We Collect
            </h2>
            <p>
              To connect you with verified local Clean Energy Council (CEC) accredited installers and provide accurate solar sizing recommendations, we collect:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <strong className="block text-slate-900 font-bold mb-1">👤 Contact Details</strong>
                <span className="text-xs text-slate-600">Full Name, Email Address, and Australian Mobile Phone Number.</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <strong className="block text-slate-900 font-bold mb-1">📍 Property Information</strong>
                <span className="text-xs text-slate-600">4-Digit Postcode, State/Suburb, Residential or Commercial Property Type.</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <strong className="block text-slate-900 font-bold mb-1">⚡ Energy & Sizing Data</strong>
                <span className="text-xs text-slate-600">Average Quarterly Electricity Bill bracket and Solar/Battery preferences.</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <strong className="block text-slate-900 font-bold mb-1">🏠 Roof Specifications</strong>
                <span className="text-xs text-slate-600">Property Ownership status (Owner/Renter) and Single/Multi-Storey Roof pitch.</span>
              </div>
            </div>
          </section>

          {/* 3. How Your Information is Used */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 flex items-center gap-2.5">
              <span className="w-2 h-5 bg-orange-500 rounded-full shrink-0"></span>
              3. How We Use Your Information
            </h2>
            <p>Your details are strictly used for the following legitimate purposes:</p>
            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                <span>Matching your roof and energy profile with <strong>up to 3 verified CEC-accredited solar installers</strong> servicing your postcode.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                <span>Allowing installers to review roof layout via satellite imagery and calculate accurate system sizing & solar rebate estimates.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                <span>Sending you confirmation receipts and quote status updates regarding your request.</span>
              </li>
            </ul>
          </section>

          {/* 4. Strict Anti-Spam Guarantee */}
          <section className="space-y-3 bg-amber-50/70 border border-amber-200/80 p-5 sm:p-6 rounded-2xl">
            <div className="flex items-center gap-2 text-amber-800 font-bold text-base">
              <Lock className="w-5 h-5 text-amber-600" />
              <span>Strict No-Spam & No-Reselling Guarantee</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              We <strong>NEVER</strong> sell, rent, or trade your personal information to third-party telemarketers, lead aggregators, or unsolicited marketing networks. Your request is exclusively shared with verified local installers preparing your custom quotes.
            </p>
          </section>

          {/* 5. Data Security & Storage */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 flex items-center gap-2.5">
              <span className="w-2 h-5 bg-orange-500 rounded-full shrink-0"></span>
              5. 256-Bit SSL Security & Data Storage
            </h2>
            <p>
              We implement industry-standard <strong>256-bit SSL encryption</strong> to protect all data transmissions between your browser and our servers. Our database infrastructure is hosted in enterprise-grade, secure cloud facilities with continuous access monitoring and firewall safeguards.
            </p>
          </section>

          {/* 6. Your Rights (Access & Deletion) */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 flex items-center gap-2.5">
              <span className="w-2 h-5 bg-orange-500 rounded-full shrink-0"></span>
              6. Access, Correction, and Deletion Rights
            </h2>
            <p>
              Under the Australian Privacy Principles, you have the right to request access to the personal information we hold about you, request corrections, or request immediate deletion from our matching database.
            </p>
            <p>
              To submit a data access or deletion request, please email our Data Privacy Officer at <a href="mailto:privacy@truesolarquote.com.au" className="text-[#003B73] font-bold underline">privacy@truesolarquote.com.au</a>.
            </p>
          </section>

          {/* 7. Contact Info */}
          <section className="space-y-2 pt-4 border-t border-slate-200">
            <h3 className="font-bold text-slate-900">Questions or Concerns?</h3>
            <p className="text-xs sm:text-sm text-slate-600">
              True Solar Quote — Privacy & Compliance Division<br />
              Email: <a href="mailto:privacy@truesolarquote.com.au" className="text-[#003B73] font-semibold">privacy@truesolarquote.com.au</a><br />
              Location: Sydney, NSW, Australia (Operating Nationwide)
            </p>
          </section>

        </div>

        {/* ─── Bottom CTA Banner ─── */}
        <div className="mt-10 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 text-center border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
          <h3 className="text-2xl font-serif font-black text-white mb-2">Ready to Compare Verified Solar Quotes?</h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
            Join thousands of Australian homeowners who saved up to 30% with CEC-accredited installers.
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
