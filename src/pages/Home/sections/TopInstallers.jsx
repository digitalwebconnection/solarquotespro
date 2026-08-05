import React from 'react';

const TopInstallers = () => {
  return (
    <section className="top-installers mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Top Rated Installers in Your Area</h2>
        <p className="text-lg text-gray-500 mt-4">Connect with the best local professionals</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white shadow-md">
              <img src={`https://ui-avatars.com/api/?name=Company+${item}&background=0D8ABC&color=fff&size=96`} alt="Installer Logo" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">SolarPro Tech</h3>
            <div className="flex justify-center items-center gap-1 text-yellow-400 text-sm mb-3">
              {'★'.repeat(5)} <span className="text-gray-500 ml-1">(120)</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">Serving your local area with over 10 years of experience.</p>
            <button className="text-blue-600 font-bold hover:text-blue-800 text-sm w-full py-2 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">View Profile</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopInstallers;
