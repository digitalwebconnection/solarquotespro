import Header from './components/Header';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import VerificationProcess from './components/VerificationProcess';
import WhyCompare from './components/WhyCompare';
import FAQ from './components/FAQ';
import SolarJourney from './components/SolarJourney';
import Footer from './components/Footer';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-clip">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <HowItWorks />
        <WhyChooseUs />
        <VerificationProcess />
        <WhyCompare />
        
        <SolarJourney />
        <FAQ />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
