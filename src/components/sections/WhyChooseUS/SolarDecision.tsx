
const SolarDesicion = () => {
    
const processStep = [
    {
        no: "01",
        title: "Tell Us About Your Energy Needs",
        stepStyle: "text-amber-500",
        titleStyle: "text-slate-900 capitalize",
        discription:
            "Your property and energy information helps create a clear picture of your solar requirements and what kind of system may work for you.",
    },
    {
        no: "02",
        title: "Review Your Energy Requirements",
        stepStyle: "text-emerald-600",
        titleStyle: "text-slate-900 capitalize",
        discription:
            "Your property details, energy usage and location help identify suitable solar solutions based on your home's needs and available options.",
    },
    {
        no: "03",
        title: "Let The Right Installers Find You",
        stepStyle: "text-blue-600",
        titleStyle: "text-slate-900 capitalize",
        discription:
            "Your requirements help connect your request with suitable installers. This saves you from contacting multiple companies and gives you relevant options.",
    },
    {
        no: "04",
        title: "Understand Your Solar Options",
        stepStyle: "text-purple-600",
        titleStyle: "text-slate-900 capitalize",
        discription:
            "Compare your quotes, including system size, equipment, pricing, rebates and other details, so you can understand the value of each option before deciding.",
    },
];


    return(
        <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          <div className="space-y-10">
            {processStep.map((item) => (
            <div key={item.no} className="border-b border-slate-200 pb-10">
              <div className="flex gap-5">
                <span className={`${item.stepStyle} text-sm font-bold text-amber-500 pt-1`}> {item.no}</span>
                <div>
                  <h3 className={` ${item.titleStyle} text-2xl font-bold mb-3`}> {item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.discription}</p>
                </div>
              </div>
            </div>
            ))}
            <div className="pt-2">
              <p className="text-lg font-semibold text-slate-900">Simple information. Relevant options. A clearer decision.
              </p>
            </div>
          </div>

          <div className="lg:sticky lg:top-35 h-fit">
            <p className="text-sm font-bold uppercase tracking-widest    text-emerald-600 mb-4">The Process
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">
            Know What You're Comparing <span className="text-emerald-500">Before You Choose</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed "> Getting solar quotes can involve a lot of research and contacting different installers. Our process brings the important steps together, making it easier to understand your options and make an informed decision.
            </p>
          </div>
        </div>
      </div>
    </section>
    )
}

export default SolarDesicion