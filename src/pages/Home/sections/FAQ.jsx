import React from 'react';

const FAQ = () => {
  return (
    <section className="faq mb-20 max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-500 mt-4">Got questions? We've got answers.</p>
      </div>
      <div className="space-y-4">
        {[
          { q: 'How much does solar cost?', a: 'The cost varies depending on system size, location, and equipment. However, with incentives and financing, many homeowners see immediate savings on their utility bills.' },
          { q: 'Are your quotes really free?', a: 'Yes! We connect you with up to 3 local installers to provide free, no-obligation quotes.' },
          { q: 'How long do solar panels last?', a: 'Most modern solar panels are guaranteed to last 25 years or more, with very little degradation in performance.' },
          { q: 'Do I need a battery with my solar system?', a: 'It depends on your energy goals. A battery is great for backup power and maximizing self-consumption, but a grid-tied system without a battery is still highly cost-effective.' }
        ].map((item, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.q}</h3>
            <p className="text-gray-600">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
