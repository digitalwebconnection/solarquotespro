import Hero from '../components/sections/Home/Hero';
import ValueProposition from '../components/sections/Home/ValueProposition';
import HowItWorks from '../components/sections/Home/HowItWorks';
import WhyChooseUs from '../components/sections/Home/WhyChooseUs';
import VerificationProcess from '../components/sections/Home/VerificationProcess';
import WhyCompare from '../components/sections/Home/WhyCompare';
import SolarJourney from '../components/sections/Home/SolarJourney';
import FAQ from '../components/sections/Home/FAQ';

export default function HomePage() {
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