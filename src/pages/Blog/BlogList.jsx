import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/common/Breadcrumbs';

const BlogList = () => {
  return (
    <>
      <Helmet>
        <title>Blog List | SolarQuotes Pro</title>
        <meta name="description" content="Detailed guide and information about Blog List." />
      </Helmet>
      
      <main className="min-h-screen bg-gray-50 font-sans text-gray-800">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <Breadcrumbs paths={["Blog","Blog List"]} />
          </div>
          
          {/* 1. Dynamic Hero Section */}
      <section className="hero bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20 px-4 md:px-8 rounded-xl mb-12 shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Blog List
          </h1>
          <p className="text-lg md:text-xl font-medium text-blue-100 max-w-2xl mx-auto">
            Everything you need to know about blog list. Discover comprehensive insights, expert advice, and detailed guides.
          </p>
        </div>
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute top-1/2 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
      </section>

      {/* 2. Introduction / Overview Section */}
      <section className="introduction mb-16 px-4 md:px-8 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Welcome to the detailed guide on Blog List. Whether you're just starting your research or you're ready to make a decision, this page provides all the essential information. Our experts have compiled the latest data, trends, and actionable advice to help you navigate through the complexities of blog list.
        </p>
      </section>

      {/* 3. Key Features / Highlights Grid */}
      <section className="features mb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Key Highlights</h2>
          <p className="text-gray-500 mt-2">What you need to keep in mind</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Highlight Feature {item}</h3>
              <p className="text-gray-600">
                Detailed explanation for this specific highlight. It gives users a quick summary of why this feature or point matters.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Main Content Section */}
      <section className="content mb-16 px-4 md:px-8 max-w-4xl mx-auto prose prose-lg prose-blue text-gray-700">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Deep Dive into Blog List</h2>
        <p>
          This section contains the core content for Blog List. Typically, this would involve several paragraphs of detailed explanation, breaking down the topic into easily digestible parts. 
        </p>
        <p>
          It's important to consider all aspects when looking into this subject. For example, efficiency, cost, long-term savings, and installation requirements are all crucial factors.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
          <h4 className="text-xl font-bold text-blue-900 mb-2">Pro Tip</h4>
          <p className="text-blue-800 m-0">Always consult with multiple certified installers to compare quotes and ensure you are getting the best possible system for your specific needs.</p>
        </div>
        <p>
          Concluding thoughts on the topic go here. This wraps up the detailed explanation and transitions the reader towards taking action.
        </p>
      </section>

      {/* 5. Call to Action (CTA) Section */}
      <section className="cta bg-gray-900 text-white py-16 px-4 md:px-8 rounded-xl text-center shadow-xl">
        <h2 className="text-3xl font-bold mb-4">Ready to take the next step?</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Get up to 3 free, no-obligation quotes from pre-vetted installers in your local area.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-colors duration-200">
            Get 3 Free Quotes
          </button>
          <button className="bg-transparent hover:bg-gray-800 text-white font-semibold py-3 px-8 border border-gray-600 rounded-xl transition-colors duration-200">
            Contact Us
          </button>
        </div>
      </section>
          
        </div>
      </main>
    </>
  );
};

export default BlogList;
