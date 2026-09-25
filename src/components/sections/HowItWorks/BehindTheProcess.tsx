
import { motion } from "framer-motion";
export default function HowItWorksInfo() {
  const processStep = [
    {
      no: "01",
      title: "Tell Us About Your Energy Needs",
      stepStyle: "text-amber-500 ",
      titleStyle: "text-slate-900 capitalize",
      discription:
        "Your property and energy information helps create a clear picture of your solar requirements. These details provide the starting point for understanding what kind of system may work for you."
    },
    {
      no: "02",
      title: "Let The Right Installers Find You",
      stepStyle: "text-emerald-600 ",
      titleStyle: "text-slate-900 capitalize",
      discription:
        "Your location and requirements help connect your request with suitable installers. This saves you from contacting multiple companies and gives you access to relevant options for your property."
    },
    {
      no: "03",
      title: "Understand Your Solar Options",
      stepStyle: "text-blue-600 ",
      titleStyle: "text-slate-900 capitalize",
      discription:
        "Your quotes give you the information needed to make a confident choice. Compare the system size, equipment, pricing, rebates and other details to understand the value of each option before deciding."
    }
  ];


  return (
    <section className="w-full bg-slate-50 py-16 sm:py-20 lg:py-24">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            <div className="sticky top-35 h-fit ">
              <div className="absolute w-100 h-70 bg-amber-400/15 blur-[120px] rounded-full top-0 -left-50"/>
              <p className="text-sm font-bold uppercase tracking-widest    text-amber-600 mb-4">The Process
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">
                A simpler way to find and compare
                <span className="text-amber-500"> solar quotes.</span>
              </h2>
              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed "> Getting solar quotes can involve a lot of research and contacting different installers. Our process brings the important steps together, making it easier to understand your options and make an informed decision.
              </p>
            </div>

            <div className="space-y-10">
              {processStep.map((item , index) => (
                <motion.div initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 , delay: index * 0.12 }} 
                  key={item.no} className="border-b border-slate-200 pb-10">
                  <div className="flex gap-5">
                    <span className={`${item.stepStyle} text-sm font-bold text-amber-500 pt-1`}> {item.no}</span>
                    <div>
                      <h3 className={` ${item.titleStyle} text-2xl font-bold mb-3`}> {item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.discription}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="pt-2">
                <p className="text-lg font-semibold text-slate-900">Simple information. Relevant options. A clearer decision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </section>
  );
}

