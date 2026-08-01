import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import ReviewCard from '../../components/cards/ReviewCard';

const AllSolarReviews = () => {
  return (
    <>
      <Helmet>
        <title>All Solar Reviews | SolarQuotes Pro</title>
        <meta name="description" content="Detailed guide and information about All Solar Reviews." />
      </Helmet>
      
      <main className="min-h-screen bg-gray-50 font-sans text-gray-800">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <Breadcrumbs paths={["Reviews","All Solar Reviews"]} />
          </div>
          
          <section className="hero bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-16 px-4 md:px-8 rounded-2xl mb-12 shadow-lg text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">All Solar Reviews</h1>
        <p className="text-lg text-orange-50 max-w-2xl mx-auto">Read honest feedback from thousands of homeowners who have made the switch.</p>
      </section>

      <section className="mb-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder review cards */}
          <ReviewCard title="Great Service" rating={5} text="They were fantastic. The installation was seamless and the team was very professional." author="John D." />
          <ReviewCard title="Highly Recommend" rating={4} text="Good installation. Everything went smoothly. Just a minor delay with the paperwork." author="Jane S." />
          <ReviewCard title="Saved money immediately" rating={5} text="My bills are down significantly. Best investment I've made for my home this year." author="Bob M." />
          <ReviewCard title="Very knowledgeable" rating={5} text="The salesperson wasn't pushy and actually explained how the system works." author="Alice K." />
          <ReviewCard title="Clean install" rating={5} text="No exposed conduits, perfectly aligned panels. Very happy." author="Tom H." />
          <ReviewCard title="Solid warranty" rating={4} text="Got a great 25-year warranty on the panels." author="Sarah W." />
        </div>
      </section>
          
        </div>
      </main>
    </>
  );
};

export default AllSolarReviews;
