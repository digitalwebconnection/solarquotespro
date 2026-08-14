import { ArrowRight, Mail, Phone, ShieldCheck, Zap, Award, Lock } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/truesolar.png';
import { useQuoteModal } from '../../context/QuoteModalContext';

const Facebook = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);


const Instagram = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
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
              className="inline-block py-1"
            >
              <img src={logo} alt="True Solar Quote Logo" className="h-12 sm:h-14 w-auto object-contain" />
            </Link>
            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              Empowering Australian homeowners with transparent, competitive, and verified solar energy quotes from CEC-accredited professionals nationwide.
            </p>
            <div className="flex space-x-2.5 pt-2">
              <a 
                href="https://www.facebook.com/profile.php?id=61592788688425" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="True Solar Quote Facebook" 
                className="text-slate-800 bg-white border border-slate-300 hover:bg-linear-to-r hover:from-amber-400 hover:to-orange-500 hover:text-slate-950 hover:border-orange-400 transition-all duration-300 p-2.5 rounded-xl hover:-translate-y-1 hover:shadow-md"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/truesolarquote/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="True Solar Quote Instagram" 
                className="text-slate-800 bg-white border border-slate-300 hover:bg-[#F9B122] hover:text-[#00417E] hover:border-[#F9B122] transition-all duration-300 p-2.5 rounded-xl hover:-translate-y-1 hover:shadow-md"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-900 font-serif font-black text-base mb-4 tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#00417E] rounded-full"></span> Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link 
                    to={item.href} 
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-slate-700 font-semibold hover:text-[#00417E] transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#F9B122] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services / Quotes */}
          <div>
            <h3 className="text-slate-900 font-serif font-black text-base mb-4 tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#0A6702] rounded-full"></span> Solar Quotes
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <button 
                    onClick={item.action} 
                    className="text-slate-700 font-semibold hover:text-[#0A6702] transition-colors duration-300 text-sm flex items-center gap-2 group cursor-pointer text-left"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#0A6702] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-slate-900 font-serif font-black text-base mb-4 tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#F9B122] rounded-full"></span> Contact Us
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-center gap-3 text-slate-800 group">
                <div className="bg-white p-2 rounded-xl border border-slate-200 group-hover:bg-[#F9B122]/10 group-hover:border-[#F9B122] transition-colors shrink-0 shadow-xs">
                  <Phone className="w-4 h-4 text-[#00417E]" />
                </div>
                <a href="tel:+61420135638" className="hover:text-[#00417E] transition-colors font-bold">+61 420 135 638</a>
              </li>
              <li className="flex items-center gap-3 text-slate-800 group">
                <div className="bg-white p-2 rounded-xl border border-slate-200 group-hover:bg-[#0A6702]/10 group-hover:border-[#0A6702] transition-colors shrink-0 shadow-xs">
                  <Mail className="w-4 h-4 text-[#0A6702]" />
                </div>
                <a href="mailto:hello@truesolarquote.com.au" className="hover:text-[#0A6702] transition-colors font-bold">hello@truesolarquote.com.au</a>
              </li>
              <li className="pt-2">
                <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-2xl text-[11px] text-slate-600 space-y-1">
                  <p className="font-bold text-slate-800 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#0A6702]"></span>
                    Australian Registered Entity
                  </p>
                  <p>Operating under Australian Consumer Law (ACL) & Clean Energy Council guidelines.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* ─── Bottom Bar ─── */}
        <div className="pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-700 text-xs font-semibold">
            &copy; {new Date().getFullYear()} True Solar Quote. All rights reserved. Australia's trusted solar comparison engine.
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-bold text-slate-700">
            <Link to="/privacy" className="hover:text-[#00417E] transition-colors">Privacy & Data</Link>
            <Link to="/terms" className="hover:text-[#00417E] transition-colors">Terms of Service</Link>
            <Link to="/cec-standards" className="hover:text-[#00417E] transition-colors">CEC Standards</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
