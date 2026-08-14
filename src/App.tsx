import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
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
import ScrollToTop from './components/common/ScrollToTop';
import { QuoteModalProvider } from './context/QuoteModalContext';

const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const CECStandards = lazy(() => import('./pages/CECStandards'));

function PageLoader() {
  return (
    <div className="min-h-120 flex items-center justify-center">
      <div className="w-10 h-10 border-3 border-orange-500/20 border-t-orange-500 rounded-full animate-spin" />
    </div>
  );
}

function HomePage() {
  return (
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
  );
}

function App() {
  return (
    <QuoteModalProvider>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-clip scroll-smooth flex flex-col justify-between">
        <ScrollToTop />
        <Header />
        <div className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/cec-standards" element={<CECStandards />} />
              <Route path="/verification-standards" element={<CECStandards />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
        <SolarAdvisorBot />
      </div>
    </QuoteModalProvider>
  );
}

export default App;
