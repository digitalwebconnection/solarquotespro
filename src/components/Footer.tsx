export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl p-16 mb-24 shadow-xl shadow-orange-500/20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to go solar?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Join thousands of homeowners saving on their energy bills.</p>
          <button className="bg-white text-orange-500 hover:bg-slate-50 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-lg">
            Get Free Quotes Today
          </button>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-16 mb-16">
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-6">
              <img src="/solarquotepro-logo.png" alt="SolarQuotes Pro Logo" className="h-12 w-auto brightness-0 invert" />
            </a>
            <p className="text-slate-400 leading-relaxed">
              Empowering homeowners to make the switch to clean, affordable solar energy with absolute transparency.
            </p>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Explore</h4>
              <ul className="flex flex-col gap-4">
                <li><a href="#how-it-works" className="text-slate-400 hover:text-orange-500 transition-colors">How It Works</a></li>
                <li><a href="#categories" className="text-slate-400 hover:text-orange-500 transition-colors">Categories</a></li>
                <li><a href="#installers" className="text-slate-400 hover:text-orange-500 transition-colors">Installers</a></li>
                <li><a href="#reviews" className="text-slate-400 hover:text-orange-500 transition-colors">Reviews</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Resources</h4>
              <ul className="flex flex-col gap-4">
                <li><a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">Solar Calculator</a></li>
                <li><a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">Rebates Guide</a></li>
                <li><a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">Blog</a></li>
                <li><a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
              <ul className="flex flex-col gap-4">
                <li><a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">About Us</a></li>
                <li><a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">Contact</a></li>
                <li><a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} SolarQuotes Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
