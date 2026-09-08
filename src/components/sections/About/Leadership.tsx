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
    linkText: "Learn more",
    linkUrl: "#finn",
    isMiddle: true,
  },
  {
    name: "Tam (Tamara)",
    role: "Operations Manager",
    image: "https://www.finnpeacock.com/wp-content/uploads/2018/04/section-image.jpg",
    bio: "Supports the day-to-day platform experience by helping manage partner relationships, quote enquiries, and the processes that connect homeowners with suitable energy professionals.",
    linkText: null,
    linkUrl: null,
    isMiddle: false,
  },
];

  return (
    <section className="bg-slate-950 py-20 text-white relative timeline-view animate-blurred-fade-in animate-range-[entry_20%_contain_10%]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-wider uppercase">
            <UserCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3 font-serif">
            Guided by <span className="bg-linear-to-r from-amber-300 to-emerald-400 bg-clip-text text-transparent"> Solar Experts</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">Setting direction, making big calls, and upholding our core values.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {leaders.map((item) => (
            <div key={item.name} className={`bg-slate-900 border rounded-2xl overflow-hidden flex flex-col  transition-all duration-300 shadow-xl  ${ item.isMiddle ? "-translate-y-7 border-amber-400/40 shadow-amber-500/10" : "border-slate-800 hover:border-slate-700"
              }`}>
              <div className="flex flex-col ">
                <div className="relative h-48 w-full overflow-hidden bg-slate-800 ">
                  <img src={item.image}
                    alt={item.name} className="w-full h-full object-cover object-top"/>
                </div>

                <div className="p-5 flex flex-col ">
                  <h3 className="text-lg font-bold text-white mb-0.5">{item.name}</h3>
                  <p className="text-amber-400 font-medium text-xs uppercase tracking-wider mb-3">
                    {item.role}
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.bio}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-1 h-9 flex items-center">
                {item.linkText && item.linkUrl ? (
                  <a href={item.linkUrl } className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors">
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}