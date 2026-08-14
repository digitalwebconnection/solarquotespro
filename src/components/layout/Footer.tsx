import { ArrowRight, Mail, Phone, ShieldCheck, Zap, Award, Lock } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/solarqoat copy.png';
import { useQuoteModal } from '../../context/QuoteModalContext';

const Facebook = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Twitter = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Instagram = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Linkedin = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const { openQuoteModal } = useQuoteModal();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '');

      if (location.pathname === '/') {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          window.history.pushState(null, '', `#${targetId}`);
        }
      } else {
        navigate(`/#${targetId}`);
      }
    } else if (href === '/') {
      if (location.pathname === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const trustGuarantees = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      title: "100% CEC Accredited",
      desc: "Only certified Australian solar installers"
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: "Save Up To 30%",
      desc: "Installers compete for your business"
    },
    {
      icon: <Award className="w-5 h-5 text-sky-600" />,
      title: "100% Free Service",
      desc: "Zero cost, no-obligation comparison"
    },
    {
      icon: <Lock className="w-5 h-5 text-purple-600" />,
      title: "Data Protection",
      desc: "No relentless spam or robocalls"
    }
  ];

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Why Choose Us', href: '/#why-choose-us' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Our Standards', href: '/cec-standards' },
    { label: 'Frequently Asked Questions', href: '/#faq' }
  ];

  const serviceLinks = [
    { label: 'Residential Solar Quotes', action: () => openQuoteModal() },
    { label: 'Commercial Solar Quotes', action: () => openQuoteModal() },
    { label: 'Battery Storage Comparison', action: () => openQuoteModal() },
    { label: 'Solar & Battery Combos', action: () => openQuoteModal() },
    { label: 'Get 3 Free Installer Quotes', action: () => openQuoteModal() }
  ];

  return (
    <footer className="relative bg-linear-to-b from-slate-50 via-white to-slate-50 text-slate-600 pt-4 pb-6 overflow-hidden border-t border-slate-200">
      
      {/* ─── Ambient Background Glows & Pattern ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-size-[24px_24px] opacity-35" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 relative z-10">
        
        {/* ─── Pre-Footer Trust Ribbon Graphic ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-3 bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/50 mb-12">
          {trustGuarantees.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3.5 p-2">
              <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 shadow-xs">
                {item.icon}
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm">{item.title}</div>
                <div className="text-xs text-slate-800 font-medium">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ─── Main Footer Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-6">

          {/* Brand Column */}
          <div className="space-y-4 lg:pr-6">
            <Link 
              to="/" 
              onClick={(e) => handleNavClick(e, '/')}
              className="flex items-center gap-3"
            >
              <img src={logo} alt="Solar Quotes Pro Logo" className="h-18 w-auto" />
            </Link>
            <p className="text-sm text-slate-900 leading-relaxed font-medium">
              Empowering Australian homeowners with transparent, competitive, and verified solar energy quotes from CEC-accredited professionals nationwide.
            </p>
            <div className="flex space-x-2.5 pt-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social Link" className="text-slate-900 bg-white border border-slate-300 hover:bg-linear-to-r hover:from-amber-400 hover:to-orange-500 hover:text-slate-950 hover:border-orange-400 transition-all duration-300 p-2.5 rounded-xl hover:-translate-y-1 hover:shadow-md">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-900 font-serif font-black text-base mb-4 tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-4 bg-orange-500 rounded-full"></span> Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link 
                    to={item.href} 
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-slate-900 font-semibold hover:text-orange-600 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-orange-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services / Quotes */}
          <div>
            <h3 className="text-slate-900 font-serif font-black text-base mb-4 tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-4 bg-orange-500 rounded-full"></span> Solar Quotes
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <button 
                    onClick={item.action} 
                    className="text-slate-900 font-semibold hover:text-orange-600 transition-colors duration-300 text-sm flex items-center gap-2 group cursor-pointer text-left"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-orange-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-slate-900 font-serif font-black text-base mb-4 tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-4 bg-orange-500 rounded-full"></span> Contact Us
            </h3>
            <ul className="space-y-3.5 text-sm">
           
              <li className="flex items-center gap-3 text-slate-900 group">
                <div className="bg-white p-2 rounded-xl border border-slate-200 group-hover:bg-amber-50 group-hover:border-orange-300 transition-colors shrink-0 shadow-xs">
                  <Phone className="w-4 h-4 text-orange-600" />
                </div>
                <a href="tel:1300000000" className="hover:text-orange-600 transition-colors font-bold">1300 000 000</a>
              </li>
              <li className="flex items-center gap-3 text-slate-900 group">
                <div className="bg-white p-2 rounded-xl border border-slate-200 group-hover:bg-amber-50 group-hover:border-orange-300 transition-colors shrink-0 shadow-xs">
                  <Mail className="w-4 h-4 text-orange-600" />
                </div>
                <a href="mailto:solarquotespro@gmail.com" className="hover:text-orange-600 transition-colors font-bold">solarquotespro@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* ─── Bottom Bar ─── */}
        <div className="pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-900 text-xs font-semibold">
            &copy; {new Date().getFullYear()} Solar Quotes Pro. All rights reserved. Australia's trusted solar comparison engine.
          </div>
          <div className="flex items-center gap-6 text-xs pe-30 font-bold text-slate-900">
            <Link to="/privacy" className="hover:text-orange-600 transition-colors">Privacy & Data Standards</Link>
            <Link to="/terms" className="hover:text-orange-600 transition-colors">Terms of Service</Link>
            <Link to="/cec-standards" className="hover:text-orange-600 transition-colors">CEC Verification Standards</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
