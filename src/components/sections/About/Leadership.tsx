import { motion } from "framer-motion";
import { UserCheck, ArrowRight } from "lucide-react";
export default function LeadershipSection() {
  const leaders = [
    {
      name: "Trevor",
      role: "General Manager",
      image: "https://www.finnpeacock.com/wp-content/uploads/2018/04/section-image.jpg",
      bio: "Oversees the platform's overall direction, focusing on transparent quote comparisons, homeowner education, and creating a simple experience for Australians exploring solar and home-energy options.",
      linkText: "LinkedIn",
      linkUrl: "#linkedIn",
      isMiddle: false,
    },
    {
      name: "Finn Peacock",
      role: "Founder of Solar Quotes Pro",
      image: "https://www.finnpeacock.com/wp-content/uploads/2018/04/section-image.jpg",
      bio: "Provides industry insight and helps shape the platform's approach to solar research, energy education, installer comparisons, and practical resources for Australian homeowners.",
      linkText: "LinkedIn",
      linkUrl: "#linkedIn",
      isMiddle: true,
    },
    {
      name: "Tam (Tamara)",
      role: "Operations Manager",
      image: "https://www.finnpeacock.com/wp-content/uploads/2018/04/section-image.jpg",
      bio: "Supports the day-to-day platform experience by helping manage partner relationships, quote enquiries, and the processes that connect homeowners with suitable energy professionals.",
      linkText: "LinkedIn",
      linkUrl: "#linkedIn",
      isMiddle: false,
    },
  ];

  return (
    <section className="bg-white py-20 text-slate-950 relative">
      <div className="" />
      <motion.section
        initial={{ opacity: 0.50, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 tracking-[2px]  text-amber-500 text-xs font-semibold uppercase">
              <UserCheck className="w-4 h-4 text-amber-500" />
              <span>Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 mb-3 font-serif">
              Guided by <span className="bg-linear-to-r from-amber-300 to-emerald-700  bg-clip-text text-transparent"> Solar Experts</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">Setting direction, making big calls, and upholding our core values.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
            {leaders.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: item.isMiddle ? -48 : 24 }}
                whileInView={{ opacity: 1, y: item.isMiddle ? -24 : 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                className={`bg-white border rounded-lg overflow-hidden flex flex-col transition-all duration-300 shadow-lg ${item.isMiddle ? "-translate-y-6 border-amber-200 shadow-amber-500/10" : "border-slate-200 hover:border-slate-300"
                  }`}>
                <div className="flex flex-col ">
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img src={item.image}
                      alt={item.name} className="w-full h-full object-cover object-top" />
                  </div>

                  <div className="p-5 flex flex-col ">
                    <h3 className="text-lg font-bold text-slate-950 mb-0.5">{item.name}</h3>
                    <p className="text-amber-600 font-medium text-xs uppercase tracking-wider mb-3">
                      {item.role}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.bio}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-1 h-9 flex items-center">
                  {item.linkText && item.linkUrl ? (
                    <a href={item.linkUrl} className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 hover:text-amber-800 transition-colors">
                      <span>{item.linkText}</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </section>
  );
}


