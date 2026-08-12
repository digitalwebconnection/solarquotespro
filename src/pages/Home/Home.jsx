import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import HeroSection from './sections/HeroSection';
import FeaturedCategories from './sections/FeaturedCategories';
import HowItWorks from './sections/HowItWorks';
import WhyChooseUs from './sections/WhyChooseUs';
import SolarCalculatorPromo from './sections/SolarCalculatorPromo';
import LatestReviews from './sections/LatestReviews';
import TopInstallers from './sections/TopInstallers';
import SolarIncentives from './sections/SolarIncentives';
import FAQ from './sections/FAQ';
import CTASection from './sections/CTASection';


const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | SolarQuotes Pro</title>
        <meta name="description" content="Detailed guide and information about Home." />
      </Helmet>

      <HeroSection />
      <FeaturedCategories />
      <HowItWorks />
      <WhyChooseUs />
      <SolarCalculatorPromo />
      <LatestReviews />
      <TopInstallers />
      <SolarIncentives />
      <FAQ />
      <CTASection />

    </>
  );
};

export default Home;
