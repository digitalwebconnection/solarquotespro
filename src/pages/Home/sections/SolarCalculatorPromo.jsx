import React from 'react';

const SolarCalculatorPromo = () => {
  return (
    <section className="calculator-promo mb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden">
       <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-50"></div>
       <div className="max-w-2xl relative z-10 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Calculate Your Solar Savings</h2>
          <p className="text-gray-300 text-lg md:text-xl">Use our advanced solar calculator to estimate your system size, costs, and potential payback period.</p>
       </div>
       <button className="relative z-10 bg-green-500 hover:bg-green-400 text-gray-900 font-bold py-4 px-10 rounded-full text-lg shadow-lg transition-colors whitespace-nowrap">
          Try the Calculator
       </button>
    </section>
  );
};

export default SolarCalculatorPromo;
