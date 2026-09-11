const HowBatteryWorks = () => {
  return (
    <section className="relative py-14 bg-slate-50 ">

      <div className="absolute top-14 right-50 w-130 h-100 bg-blue-400/10 rounded-full blur-[120px] z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center  mx-auto mb-14">
          <h1 className="text-3xl sm:text-4xl font-extrabold mt-2 font-serif text-black">How Does a Home Battery Work?</h1>

          <p className="max-w-6xl mx-auto text-lg text-slate-600  leading-7 mt-5"> A home battery stores electricity so it can be used when you need it most. During the day, your solar panels can produce more electricity than your home needs. Instead of sending all that excess energy to the grid, the battery can store it for later.
          </p>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold font-serif text-blue-900 mb-6 border-b-3 border-blue-800   inline-flex ">Battery Components</h2>
            <div className="group">
              <h3 className="text-xl font-serif font-bold mb-1 text-slate-900 group-hover:text-orange-500">Anode</h3>
              <p className="leading-7 text-slate-700  pb-1">The negative electrode involved in the battery's electrochemical reactions. During operation, electrons move through the external circuit between the electrodes. </p>
            </div>
            <div className="group">
              <h3 className="text-xl font-serif font-bold mb-1 text-slate-900 group-hover:text-orange-500"> Cathode  </h3>
              <p className="leading-7 text-slate-700"> The positive electrode that participates in the electrochemical reactions that allow the battery to store and release energy. </p>
            </div>
            <div className="group">
              <h3 className="text-xl font-serif font-bold mb-1 text-slate-900 group-hover:text-orange-500"> Electrolyte </h3>
              <p className="leading-7 text-slate-700"> The material that allows ions to move between the anode and
                cathode inside the battery. </p>
            </div>

          </div>

          <div className="flex justify-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Gd_kkaarPArbaNjs7XCI6AJDUZ5YHwh9DuNfOTO24Q&s=10" className="rounded-lg shadow-xl" alt="Home battery" />
          </div>

        </div>
      </div>
    </section>
  );
};
export default HowBatteryWorks;


