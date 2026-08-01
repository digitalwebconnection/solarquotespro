import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/common/Breadcrumbs';

const SolarInYourLocation = () => {
  return (
    <>
      <Helmet>
        <title>Solar In Your Location | SolarQuotes Pro</title>
        <meta name="description" content="Detailed guide and information about Solar In Your Location." />
      </Helmet>
      
      <main className="min-h-screen bg-gray-50 font-sans text-gray-800">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <Breadcrumbs paths={["Tools","Solar In Your Location"]} />
          </div>
          
          <section className="hero bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16 px-4 md:px-8 rounded-2xl mb-12 shadow-lg text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Solar In Your Location</h1>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto">Use our free tool to calculate estimates and make informed decisions.</p>
      </section>

      <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200 max-w-3xl mx-auto mb-16">
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Enter your postcode</label>
              <input type="text" className="w-full border-gray-300 rounded-lg shadow-sm p-3 border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" placeholder="e.g. 2000" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Select System Size</label>
              <select className="w-full border-gray-300 rounded-lg shadow-sm p-3 border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow">
                <option>5 kW</option>
                <option>6.6 kW</option>
                <option>10 kW</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Additional Details (Optional)</label>
            <textarea className="w-full border-gray-300 rounded-lg shadow-sm p-3 border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow h-32" placeholder="Tell us more about your requirements..."></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-lg">
            Calculate Now
          </button>
        </form>
      </section>
          
        </div>
      </main>
    </>
  );
};

export default SolarInYourLocation;
