import Header from './components/Header';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import VerificationProcess from './components/VerificationProcess';
import WhyCompare from './components/WhyCompare';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <HowItWorks />
        <WhyChooseUs />
        <VerificationProcess />
        <WhyCompare />
        
        {/* Your Solar Journey Starts Here - small transition section */}
        <section className="py-20 bg-amber-500 text-slate-900 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Solar Journey Starts Here</h2>
            <p className="text-lg md:text-xl font-medium opacity-90 max-w-2xl mx-auto">
              Whether you're installing your first solar system or upgrading your existing one, True Solar Quote makes finding the right installer simple.
              We'll help you compare trusted professionals so you can buy with confidence.
            </p>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
