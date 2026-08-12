import React from 'react';

const HowItWorks = () => {
  return (
    <section className="how-it-works mb-20 bg-white py-16 rounded-xl shadow-sm border border-gray-100 px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">How It Works</h2>
        <p className="text-lg text-gray-500 mt-4">Three simple steps to switch to solar</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div>
          <div className="w-20 h-20 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl font-bold mb-6">1</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Request Quotes</h3>
          <p className="text-gray-600">Tell us about your home and energy needs through our quick form.</p>
        </div>
        <div>
          <div className="w-20 h-20 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl font-bold mb-6">2</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Compare Installers</h3>
          <p className="text-gray-600">Receive quotes from up to three pre-vetted, trusted local solar installers.</p>
        </div>
        <div>
          <div className="w-20 h-20 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl font-bold mb-6">3</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Choose & Save</h3>
          <p className="text-gray-600">Select the best quote for you and start saving money on your electricity bills.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
