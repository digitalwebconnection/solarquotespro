import React from 'react';

const CTASection = () => {
  return (
    <section className="cta bg-blue-900 text-white py-20 px-4 md:px-8 rounded-xl text-center shadow-xl mb-8">
      <h2 className="text-4xl font-bold mb-6">Ready to go solar?</h2>
      <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">Join thousands of homeowners saving on their energy bills.</p>
      <button className="bg-white text-blue-900 hover:bg-gray-100 font-bold py-4 px-12 rounded-full text-lg transition-colors duration-200">
        Get Free Quotes Today
      </button>
    </section>
  );
};

export default CTASection;
