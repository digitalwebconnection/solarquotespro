import React from 'react';

const LatestReviews = () => {
  return (
    <section className="latest-reviews mb-20 bg-gray-50 py-16 rounded-xl px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Latest Trusted Reviews</h2>
        <p className="text-lg text-gray-500 mt-4">Real feedback from real customers</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((review) => (
          <div key={review} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-1 text-yellow-400 mb-4">
              {'★'.repeat(5)}
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">"Fantastic Installation"</h4>
            <p className="text-gray-600 mb-6 line-clamp-3">
              The installers were incredibly professional. They arrived on time, answered all my questions, and the system looks incredibly clean on the roof. Highly recommend.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">JD</div>
              <div>
                <p className="text-sm font-bold text-gray-900">John Doe</p>
                <p className="text-xs text-gray-500">Verified Customer</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestReviews;
