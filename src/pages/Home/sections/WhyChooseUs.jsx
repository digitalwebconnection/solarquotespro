import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us mb-20 px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose SolarQuotes Pro?</h2>
          <p className="text-lg text-gray-600 mb-8">We are committed to helping you find the best solar solution with absolute transparency and unbiased advice.</p>
          <ul className="space-y-4">
            {[
              'Vetted and trusted local installers',
              '100% free, no-obligation quotes',
              'Independent, unbiased reviews and guides',
              'Secure and private data handling'
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <svg className="w-6 h-6 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className="text-gray-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-blue-50 rounded-3xl p-8 relative overflow-hidden min-h-100 flex items-center justify-center">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="z-10 text-center">
             <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto flex items-center justify-center text-white text-5xl mb-6 shadow-xl">🛡️</div>
             <h3 className="text-2xl font-bold text-blue-900">Your Trust, Our Priority</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
