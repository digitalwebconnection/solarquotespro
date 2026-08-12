import React from 'react';

const FeaturedCategories = () => {
  return (
    <section className="categories mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Explore by Category</h2>
        <p className="text-lg text-gray-500 mt-4">Everything you need to know about solar</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: 'Solar Panels', icon: '☀️', color: 'bg-orange-100 text-orange-600' },
          { title: 'Batteries', icon: '🔋', color: 'bg-green-100 text-green-600' },
          { title: 'Inverters', icon: '⚡', color: 'bg-yellow-100 text-yellow-600' },
          { title: 'Installers', icon: '👷', color: 'bg-blue-100 text-blue-600' }
        ].map((cat) => (
          <div key={cat.title} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group cursor-pointer text-center">
            <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-3xl mb-6 ${cat.color} group-hover:scale-110 transition-transform`}>
              {cat.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{cat.title}</h3>
            <p className="text-gray-500 text-sm">Read guides and reviews</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
