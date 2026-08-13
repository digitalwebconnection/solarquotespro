import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/solarqoat copy.png';

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
  return (
    <footer className="relative bg-white text-slate-600 py-10 overflow-hidden border-t border-slate-100 font-sans">
      {/* Soft Background gradients for white theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-60">
        <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[50%] rounded-full bg-amber-400/10 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[40%] rounded-full bg-yellow-400/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 relative z-10">


        {/* Footer Navigation & Info (Original 4-column Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-6">

          {/* Brand Column */}
          <div className="space-y-6 lg:pr-8">
            <div className="flex items-center gap-3">
              <div className="">
                <img src={logo} alt="True Solar Quote Logo" className="h-17 w-auto" />
              </div>
              {/* <span className="text-2xl font-black text-slate-900 tracking-tight">True Solar</span> */}
            </div>
            <p className="text-base text-slate-600 leading-relaxed font-medium">
              Empowering homeowners with transparent, competitive, and reliable solar energy solutions across Australia.
            </p>
            <div className="flex space-x-3 pt-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="text-slate-500 bg-slate-50 hover:bg-amber-500 hover:text-white transition-all duration-300 p-3 rounded-full hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/30">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-900 font-bold text-lg mb-6 tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-6 bg-amber-500 rounded-full"></span> Quick Links
            </h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'How It Works', 'Solar Calculator', 'Reviews'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-600 font-medium hover:text-amber-600 transition-colors duration-300 text-base flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 text-amber-500 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-slate-900 font-bold text-lg mb-6 tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-6 bg-amber-500 rounded-full"></span> Services
            </h3>
            <ul className="space-y-4">
              {['Residential Solar', 'Commercial Solar', 'Battery Storage', 'Off-Grid Systems', 'Solar Maintenance'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-600 font-medium hover:text-amber-600 transition-colors duration-300 text-base flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 text-amber-500 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-slate-900 font-bold text-lg mb-6 tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-6 bg-amber-500 rounded-full"></span> Contact Us
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-base font-medium text-slate-600 group">
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
                  <MapPin className="w-5 h-5 text-amber-600" />
                </div>
                <span className="mt-1">Level 4, 20 Example Street<br />Sydney NSW 2000, Australia</span>
              </li>
              <li className="flex items-center gap-4 text-base font-medium text-slate-600 group">
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
                  <Phone className="w-5 h-5 text-amber-600" />
                </div>
                <a href="tel:1300000000" className="hover:text-amber-600 transition-colors">1300 000 000</a>
              </li>
              <li className="flex items-center gap-4 text-base font-medium text-slate-600 group">
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
                  <Mail className="w-5 h-5 text-amber-600" />
                </div>
                <a href="mailto:hello@truesolarquote.com.au" className="hover:text-amber-600 transition-colors">hello@truesolarquote.com.au</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-slate-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-800 text-sm font-medium">
            &copy; {new Date().getFullYear()} True Solar Quote. All rights reserved.
          </div>
          <div className="flex items-center gap-8 text-sm font-medium text-slate-800">
            <a href="#" className="hover:text-amber-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-amber-600 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
