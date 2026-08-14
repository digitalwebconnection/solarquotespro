import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ValueProposition from './components/sections/ValueProposition';
import HowItWorks from './components/sections/HowItWorks';
import WhyChooseUs from './components/sections/WhyChooseUs';
import VerificationProcess from './components/sections/VerificationProcess';
import WhyCompare from './components/sections/WhyCompare';
import SolarJourney from './components/sections/SolarJourney';
import FAQ from './components/sections/FAQ';
import SolarAdvisorBot from './components/common/SolarAdvisorBot';
import { QuoteModalProvider } from './context/QuoteModalContext';

function App() {
  return (
    <QuoteModalProvider>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-clip scroll-smooth">
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
        <Footer />
        <SolarAdvisorBot />
      </div>
    </QuoteModalProvider>
  );
}

export default App;
