export default function AboutCompany() {

    return (
        <section className="py-14 bg-slate-50">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 px-4 py-7 sm:px-6 lg:px-8">
                <div className="relative">
                    <h1 className="text-3xl font-extrabold text-blue-900 font-serif"> About Our Company </h1>

                    <p className="text-lg text-slate-600 text-justify leading-7 mt-5  ">Choosing solar, batteries or other home-energy solutions can be confusing. There are different products, installers, prices, warranties and incentives to consider.
                    </p>
                    <p className="text-lg text-slate-600 text-justify leading-7 mt-3">True Solar Quote was created to make that process easier.We help Australian homeowners research their options,understand the market and connect with trusted solar and home-energy professionals.
                    </p>
                    <p className="text-lg text-slate-600 text-justify leading-7 mt-3">From solar panels and batteries to EV chargers, hot-water heat pumps and air conditioning, our goal is to give
                        homeowners the information and comparison tools they need to make confident decisions.
                    </p>

                    <div className="mt-6">
                        <p className="font-bold text-blue-900 text-lg">
                            Research. Compare. Choose with confidence.
                        </p>
                    </div>
                </div>
                <div className="relative flex items-center min-h-100">
                    <div className="absolute z-0 -top-15 -left-20 w-90 h-80 bg-blue-800/35 rounded-full blur-[120px]">
                    </div>

                    <img src="https://www.solarquotes.com.au/wp-content/uploads/2024/01/solarquotes-team.jpg"
                        alt="Solar panels on an Australian home" className="absolute z-1 rounded-lg shadow-xl shadow-slate-500 w-full h-90 object-cover"/>
                </div>

            </div>
        </section>
    );
}