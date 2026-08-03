import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Mail, Phone, MapPin } from 'lucide-react';
import { APP_NAME, CONTACT_EMAIL, CONTACT_PHONE } from '../../utils/constants';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-auto border-t border-slate-800">
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="mb-8 md:mb-0">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white mb-6">
              <Sun className="h-8 w-8 text-yellow-500" />
              <span>{APP_NAME}</span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Your trusted independent source for solar energy information, tools, quotes, and installer reviews across the country.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white uppercase tracking-wider text-sm">Explore</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors flex items-center"><span className="text-blue-500 mr-2 text-xs">▶</span> Home</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors flex items-center"><span className="text-blue-500 mr-2 text-xs">▶</span> About Us</Link></li>
              <li><Link to="/tools/all-solar-tools" className="text-slate-400 hover:text-white transition-colors flex items-center"><span className="text-blue-500 mr-2 text-xs">▶</span> Solar Calculators</Link></li>
              <li><Link to="/faq" className="text-slate-400 hover:text-white transition-colors flex items-center"><span className="text-blue-500 mr-2 text-xs">▶</span> Common Questions</Link></li>
              <li><Link to="/reviews/all-solar-reviews" className="text-slate-400 hover:text-white transition-colors flex items-center"><span className="text-blue-500 mr-2 text-xs">▶</span> Installer Reviews</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white uppercase tracking-wider text-sm">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-slate-400 hover:text-white transition-colors flex items-center"><span className="text-blue-500 mr-2 text-xs">▶</span> Solar Blog</Link></li>
              <li><Link to="/search" className="text-slate-400 hover:text-white transition-colors flex items-center"><span className="text-blue-500 mr-2 text-xs">▶</span> Search Site</Link></li>
              <li><Link to="/start-here" className="text-slate-400 hover:text-white transition-colors flex items-center"><span className="text-blue-500 mr-2 text-xs">▶</span> Beginner's Guide</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white uppercase tracking-wider text-sm">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-slate-400">
                <MapPin className="h-5 w-5 mr-3 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>123 Solar Way, Suite 100<br/>Sunnyville, CA 90210</span>
              </li>
              <li className="flex items-center text-slate-400">
                <Phone className="h-5 w-5 mr-3 text-blue-500 flex-shrink-0" />
                <span>{CONTACT_PHONE}</span>
              </li>
              <li className="flex items-center text-slate-400">
                <Mail className="h-5 w-5 mr-3 text-blue-500 flex-shrink-0" />
                <span>{CONTACT_EMAIL}</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link to="/contact" className="inline-block bg-transparent border-2 border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-md text-sm font-semibold transition-colors w-full text-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-500">
            <p>Designed for a brighter future ☀️</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
