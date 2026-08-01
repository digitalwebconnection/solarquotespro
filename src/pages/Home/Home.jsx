import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/common/Breadcrumbs';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | SolarQuotes Pro</title>
        <meta name="description" content="Detailed guide and information about Home." />
      </Helmet>
      
      <main className="min-h-screen bg-gray-50 font-sans text-gray-800">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <Breadcrumbs paths={["Home","Home"]} />
          </div>
          
          {/* 1. Dynamic Hero Section */}
      <section className="hero bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-24 px-4 md:px-8 rounded-2xl mb-16 shadow-2xl relative overflow-hidden text-center">
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Solar Energy, <span className="text-blue-300">Simplified.</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-blue-100 max-w-3xl mx-auto mb-10">
            Get up to 3 free quotes from trusted installers, read comprehensive reviews, and find the perfect solar solution for your home.
          </p>
          <button className="bg-white text-blue-700 hover:bg-blue-50 font-bold text-lg py-4 px-10 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">
            Get Started Now
          </button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
      </section>
      
      {/* 2. Featured Categories Grid */}
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
            <div key={cat.title} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group cursor-pointer text-center">
              <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-3xl mb-6 ${cat.color} group-hover:scale-110 transition-transform`}>
                {cat.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{cat.title}</h3>
              <p className="text-gray-500 text-sm">Read guides and reviews</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Latest Reviews */}
      <section className="latest-reviews mb-20 bg-gray-50 py-16 rounded-3xl px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Latest Trusted Reviews</h2>
          <p className="text-lg text-gray-500 mt-4">Real feedback from real customers</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((review) => (
            <div key={review} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
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
      
      {/* CTA Section */}
      <section className="cta bg-blue-900 text-white py-20 px-4 md:px-8 rounded-3xl text-center shadow-xl mb-8">
        <h2 className="text-4xl font-bold mb-6">Ready to go solar?</h2>
        <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">Join thousands of homeowners saving on their energy bills.</p>
        <button className="bg-white text-blue-900 hover:bg-gray-100 font-bold py-4 px-12 rounded-full text-lg transition-colors duration-200">
          Get Free Quotes Today
        </button>
      </section>
          
        </div>
      </main>
    </>
  );
};

export default Home;
