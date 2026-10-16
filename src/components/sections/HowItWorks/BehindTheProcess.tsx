
import { motion } from "framer-motion";
export default function HowItWorksInfo() {
  const processStep = [
    {
      no: "01",
      title: "Tell Us About Your Energy Needs",
      stepStyle: "text-amber-500 ",
      hoverBg: "hover:bg-amber-100/60",
      borderStyle: "border-t-amber-500/40 border-r-amber-500/40",
      titleStyle: "text-slate-900 capitalize",
      discription:
        "Your property and energy information helps create a clear picture of your solar requirements. These details provide the starting point for understanding what kind of system may work for you."
    },
    {
      no: "02",
      title: "Let The Right Installers Find You",
      stepStyle: "text-emerald-600 ",
      hoverBg: "hover:bg-emerald-50",
      borderStyle: "border-t-emerald-600/40 border-r-emerald-600/40",
      titleStyle: "text-slate-900 capitalize",
      discription:
        "Your location and requirements help connect your request with suitable installers. This saves you from contacting multiple companies and gives you access to relevant options for your property."
    },
    {
      no: "03",
      title: "Understand Your Solar Options",
      stepStyle: "text-blue-600 ",
      borderStyle: "border-t-blue-600/40 border-r-blue-600/40",
      hoverBg: "hover:bg-blue-100/70",
      titleStyle: "text-slate-900 capitalize",
      discription:
        "Your quotes give you the information needed to make a confident choice. Compare the system size, equipment, pricing, rebates and other details to understand the value of each option before deciding."
    },
    {
      no: "04",
      title: "Choose Your Installer And Go Solar",
      stepStyle: "text-orange-500 ",
      hoverBg: "hover:bg-orange-100/50",
      borderStyle: "border-t-orange-500/40 border-r-orange-500/40",
      titleStyle: "text-slate-900 capitalize",
      discription:
        "Once you have compared your quotes, pick the installer that best fits your needs and budget. They will guide you through the final design, installation and system activation so you can start saving on your energy bills."
    }
  ];

  return (
    <section className="w-full bg-slate-50 py-16 sm:py-20 lg:py-20">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14">

            <div className="h-fit lg:sticky lg:top-35">
              <div className="absolute w-100 h-70 bg-amber-300/20 blur-[120px] rounded-full top-0 -left-30 z-0" />
              <p className="text-sm font-semibold uppercase tracking-[2px]    text-amber-600 mb-4">The Process
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 leading-tight capitalize">
                A simpler way to find and compare
                <span className="bg-linear-to-r from-emerald-600 to-amber-500 text-transparent bg-clip-text"> solar quotes.</span>
              </h2>
              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed "> Getting solar quotes can involve a lot of research and contacting different installers. Our process brings the important steps together, making it easier to understand your options and make an informed decision.
              </p>
            </div>

            <div className="relative isolate space-y-6">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 top-8 z-0 h-75 w-75 rounded-full bg-amber-400/12 blur-[120px]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-8 -left-8 z-0 h-80 w-80 rounded-full bg-linear-to-tr from-emerald-300/35 via-sky-200/25 to-transparent blur-[120px]"
              />
              {processStep.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  key={item.no}
                  className={`relative z-10  border border-transparent p-5 px-8 hover:shadow-xl/50 shadow-xl/30 shadow-black/20 rounded-xl transition-all duration-200 bg-white/70 ${item.hoverBg} border-2 ${item.borderStyle}`}
                >
                  <div className="flex gap-5">
                    <span className={`${item.stepStyle} pt-1 text-sm font-bold`}>{item.no}</span>
                    <div>
                      <h3 className={`${item.titleStyle} mb-3 text-xl font-bold sm:text-2xl`}>{item.title}</h3>
                      <p className="leading-relaxed text-slate-600">{item.discription}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="relative z-10 pt-2">
                <p className="text-lg text-center font-semibold text-slate-900">Simple information. Relevant options. A clearer decision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </section>
  );
}
