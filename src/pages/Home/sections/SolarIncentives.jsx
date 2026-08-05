import React from 'react';

const SolarIncentives = () => {
  return (
    <section className="solar-incentives mb-20 bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100">
       <div className="max-w-3xl mx-auto text-center">
         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Government Rebates & Incentives</h2>
         <p className="text-lg text-gray-700 mb-8">
           Going solar is more affordable than ever. Take advantage of federal and state incentives that can significantly reduce your upfront installation costs.
         </p>
         <div className="flex flex-col sm:flex-row justify-center gap-4">
           <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-md transition-colors">
             Check Local Rebates
           </button>
           <button className="bg-white text-blue-600 border border-blue-200 hover:bg-blue-50 font-bold py-3 px-8 rounded-full shadow-sm transition-colors">
             Read Our Guide
           </button>
         </div>
       </div>
    </section>
  );
};

export default SolarIncentives;
