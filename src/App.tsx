import Header from './components/Header';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import TopInstallers from './components/TopInstallers';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans bg-slate-50">
      <Header />
      <main>
        <Hero />
        <CategoryGrid />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <TopInstallers />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
