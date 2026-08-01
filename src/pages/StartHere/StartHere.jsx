import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/common/Breadcrumbs';

const StartHere = () => {
  return (
    <>
      <Helmet>
        <title>Start Here | SolarQuotes Pro</title>
        <meta name="description" content="Detailed guide and information about Start Here." />
      </Helmet>
      
      <main className="min-h-screen bg-gray-50 font-sans text-gray-800">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <Breadcrumbs paths={["Start Here","Start Here"]} />
          </div>
          
          <section className="hero bg-gradient-to-r from-blue-700 to-cyan-600 text-white py-20 px-4 md:px-8 rounded-2xl mb-12 shadow-lg text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">Start Your Solar Journey</h1>
        <p className="text-lg md:text-xl font-medium text-blue-100 max-w-2xl mx-auto">
          New to solar? You are in the right place. Browse our comprehensive guides by category.
        </p>
      </section>
      
      <section className="mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            'Solar & Battery Guides', 'Installers', 'Solar Panels',
            'Inverters', 'Batteries', 'EV Chargers'
          ].map((cat) => (
            <div key={cat} className="bg-white p-8 border border-gray-200 rounded-2xl hover:shadow-xl hover:border-blue-300 transition-all cursor-pointer group text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{cat}</h3>
              <p className="text-gray-500">Explore comprehensive guides, reviews, and comparisons for {cat.toLowerCase()}.</p>
            </div>
          ))}
        </div>
      </section>
          
        </div>
      </main>
    </>
  );
};

export default StartHere;
