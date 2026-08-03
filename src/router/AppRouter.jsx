import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

// Main Pages
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import BlogList from '../pages/Blog/BlogList';
import Contact from '../pages/Contact/Contact';
import FAQ from '../pages/FAQ/FAQ';
import NotFound from '../pages/NotFound/NotFound';
import SearchResults from '../pages/Search/SearchResults';
import StartHere from '../pages/StartHere/StartHere';

// Reviews
import AllSolarReviews from '../pages/Reviews/AllSolarReviews';
import SolarQuotesTestimonials from '../pages/Reviews/SolarQuotesTestimonials';

// Tools
import AllSolarTools from '../pages/Tools/AllSolarTools';
import SolarPowerCalculator from '../pages/Tools/SolarPowerCalculator';
import PriceExplorer from '../pages/Tools/PriceExplorer';
import CompareElectricityPlans from '../pages/Tools/CompareElectricityPlans';
import SolarInYourLocation from '../pages/Tools/SolarInYourLocation';
import AddBatteryCalculator from '../pages/Tools/AddBatteryCalculator';
import FederalBatteryRebateCalculator from '../pages/Tools/FederalBatteryRebateCalculator';

// Start Here Categories
// Solar Battery Guides
import AllGuides from '../pages/StartHere/SolarBatteryGuides/AllGuides';
import UnderstandingSolar from '../pages/StartHere/SolarBatteryGuides/UnderstandingSolar';
import BuyingSolar from '../pages/StartHere/SolarBatteryGuides/BuyingSolar';

// Solar Panels
import ChoosingSolarPanels from '../pages/StartHere/SolarPanels/ChoosingSolarPanels';
import PanelReviews from '../pages/StartHere/SolarPanels/PanelReviews';
import CostOfSolar from '../pages/StartHere/SolarPanels/CostOfSolar';

// Installers
import InstallersNearMe from '../pages/StartHere/Installers/InstallersNearMe';
import TopPerformers from '../pages/StartHere/Installers/TopPerformers';
import InstallerReviews from '../pages/StartHere/Installers/InstallerReviews';

// Inverters
import ChoosingAnInverter from '../pages/StartHere/Inverters/ChoosingAnInverter';
import InverterReviews from '../pages/StartHere/Inverters/InverterReviews';
import CompareInverters from '../pages/StartHere/Inverters/CompareInverters';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<BlogList />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="search" element={<SearchResults />} />
          
          {/* Start Here & Subpages */}
          <Route path="start-here" element={<StartHere />} />
          <Route path="start-here/solar-battery-guides/all-guides" element={<AllGuides />} />
          <Route path="start-here/solar-battery-guides/understanding-solar" element={<UnderstandingSolar />} />
          <Route path="start-here/solar-battery-guides/buying-solar" element={<BuyingSolar />} />
          
          <Route path="start-here/solar-panels/choosing-solar-panels" element={<ChoosingSolarPanels />} />
          <Route path="start-here/solar-panels/panel-reviews" element={<PanelReviews />} />
          <Route path="start-here/solar-panels/cost-of-solar" element={<CostOfSolar />} />
          
          <Route path="start-here/installers/installers-near-me" element={<InstallersNearMe />} />
          <Route path="start-here/installers/top-performers" element={<TopPerformers />} />
          <Route path="start-here/installers/installer-reviews" element={<InstallerReviews />} />
          
          <Route path="start-here/inverters/choosing-an-inverter" element={<ChoosingAnInverter />} />
          <Route path="start-here/inverters/inverter-reviews" element={<InverterReviews />} />
          <Route path="start-here/inverters/compare-inverters" element={<CompareInverters />} />

          {/* Reviews */}
          <Route path="reviews" element={<AllSolarReviews />} />
          <Route path="reviews/all-solar-reviews" element={<AllSolarReviews />} />
          <Route path="reviews/solar-quotes-testimonials" element={<SolarQuotesTestimonials />} />

          {/* Tools */}
          <Route path="tools" element={<AllSolarTools />} />
          <Route path="tools/all-solar-tools" element={<AllSolarTools />} />
          <Route path="tools/solar-power-calculator" element={<SolarPowerCalculator />} />
          <Route path="tools/price-explorer" element={<PriceExplorer />} />
          <Route path="tools/compare-electricity-plans" element={<CompareElectricityPlans />} />
          <Route path="tools/solar-in-your-location" element={<SolarInYourLocation />} />
          <Route path="tools/add-battery-calculator" element={<AddBatteryCalculator />} />
          <Route path="tools/federal-battery-rebate-calculator" element={<FederalBatteryRebateCalculator />} />
          
          {/* Catch All */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
