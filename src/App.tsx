import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import HomePage from "./pages/Home/HomePage"
import AboutPage from './pages/About/AboutPage';
import ServicePage from './pages/Services/ServicePage'; 
import BlogPage from './pages/Blogs/BlogPage';

import SolarAdvisorBot from './components/common/SolarAdvisorBot';
import LiveSocialProof from './components/common/LiveSocialProof';
import ScrollToTop from './components/common/ScrollToTop';
import { QuoteModalProvider } from './context/QuoteModalContext';


const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const CECStandards = lazy(() => import('./pages/CECStandards'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageLoader() {
  return (
    <div className="min-h-120 flex items-center justify-center">
      <div className="w-10 h-10 border-3 border-orange-500/20 border-t-orange-500 rounded-full animate-spin" />
    </div>
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
              <Route path="/about-us" element={<AboutPage />} />
              <Route path='/service-page' element={<ServicePage/>} />
              <Route path='/blog-page' element={<BlogPage/>} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/cec-standards" element={<CECStandards />} />
              <Route path="/verification-standards" element={<CECStandards />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
        <SolarAdvisorBot />
        <LiveSocialProof />
      </div>
    </QuoteModalProvider>
  );
}

export default App;
