import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import ContactForm from '../../components/forms/ContactForm';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | SolarQuotes Pro</title>
        <meta name="description" content="Detailed guide and information about Contact." />
      </Helmet>
      
      <main className="min-h-screen bg-gray-50 font-sans text-gray-800">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <Breadcrumbs paths={["Contact","Contact"]} />
          </div>
          
          <section className="hero bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16 px-4 md:px-8 rounded-xl mb-12 shadow-lg text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Contact Us</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">Have questions? We're here to help. Reach out to our team.</p>
      </section>

      <section className="mb-16 max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-8 md:p-12 border-r border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send a Message</h2>
            <ContactForm />
          </div>
          <div className="lg:w-1/2 bg-gray-50 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
            <div className="space-y-6 text-lg">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">📍</div>
                <div>
                  <h4 className="font-bold text-gray-900">Address</h4>
                  <p className="text-gray-600">123 Solar Street, Sunnyville, SA 5000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">📞</div>
                <div>
                  <h4 className="font-bold text-gray-900">Phone</h4>
                  <p className="text-gray-600">1300 123 456</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center shrink-0">✉️</div>
                <div>
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <p className="text-gray-600">hello@solarquotes.example.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-gray-200 h-64 rounded-xl flex items-center justify-center text-gray-500 overflow-hidden shadow-inner">
              <span className="font-medium text-lg text-gray-400">[ Interactive Map Placeholder ]</span>
            </div>
          </div>
        </div>
      </section>
          
        </div>
      </main>
    </>
  );
};

export default Contact;
