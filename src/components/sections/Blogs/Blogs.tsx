import { ArrowRight, Calendar, User, BookOpen } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "How Much Does Solar Cost in Australia?",
      desc: "Understand the factors that affect solar prices, including system size, panels, inverters, installation and available incentives.",
      category: "Solar Guide",
      categoryStyle: "bg-amber-500/10 text-amber-700 border-amber-500/30",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbvCjQzT0XlMybpQ-2d8o0KrXI0d0QAffHdqwWbizvDQ&s=10",
      date: "Aug 12, 2026",
      author: "Solar Research Team",
      link: "#",
    },
    {
      id: 2,
      title: "Are Home Batteries Worth the Investment?",
      desc: "Compare battery capacity, usable energy, warranties, backup capability and potential savings before choosing home battery storage.",
      category: "Batteries",
      categoryStyle: "bg-emerald-500/10 text-emerald-700 border-emerald-500/30",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPn2w3-Wnu4GSWur1p1ukAXgpLa6mSoSDzrmnvukW43Q&s=10",
      date: "Aug 18, 2026",
      author: "Energy Research Team",
      link: "#",
    },
    {
      id: 3,
      title: "How to Choose a Home EV Charger",
      desc: "Learn about charger types, charging speeds, installation requirements and how solar energy can be used to charge your EV.",
      category: "EV Charging",
      categoryStyle: "bg-blue-500/10 text-blue-700 border-blue-500/30",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKr1CXkjGALy847Q9jHcDg3f8hto6IHwoOdN4JkINyGw&s=10",
      date: "Aug 22, 2026",
      author: "Energy Research Team",
      link: "#",
    },
    {
      id: 4,
      title: "What Should You Look for in Solar Panels?",
      desc: "Explore panel efficiency, warranties, degradation, technology and other factors that matter when comparing solar panels.",
      category: "Solar Comparison",
      categoryStyle: "bg-orange-500/10 text-orange-700 border-orange-500/30",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbvCjQzT0XlMybpQ-2d8o0KrXI0d0QAffHdqwWbizvDQ&s=10",
      date: "Aug 24, 2026",
      author: "Solar Research Team",
      link: "#",
    },
    {
      id: 5,
      title: "Understanding Solar Rebates & Incentives",
      desc: "Learn how rebates and incentives can affect the upfront cost of solar and what homeowners should check before buying.",
      category: "Rebates",
      categoryStyle: "bg-purple-500/10 text-purple-700 border-purple-500/30",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKr1CXkjGALy847Q9jHcDg3f8hto6IHwoOdN4JkINyGw&s=10",
      date: "Aug 26, 2026",
      author: "Energy Research Team",
      link: "#",
    },
    {
      id: 6,
      title: "How to Compare Solar Quotes",
      desc: "Learn what to compare between quotes, including system size, equipment, warranties, estimated generation and overall value.",
      category: "Buying Guide",
      categoryStyle: "bg-cyan-500/10 text-cyan-700 border-cyan-500/30",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPn2w3-Wnu4GSWur1p1ukAXgpLa6mSoSDzrmnvukW43Q&s=10",
      date: "Aug 28, 2026",
      author: "Solar Research Team",
      link: "#",
    },
  ];

  return (
    <section className="relative bg-slate-50 text-slate-900 py-12 sm:py-14 overflow-hidden" id="blogs">
      <div className="absolute z-0 -top-20 -left-40 w-100 h-100 bg-amber-400/20 rounded-full blur-[120px]" />
      <div className="absolute z-0 bottom-0 -right-20 w-150 h-120 bg-blue-700/30 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-9">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 text-xs font-semibold tracking-wide uppercase">
            <BookOpen className="w-4 h-4" />
            <span>Energy Knowledge Hub</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold bg-linear-to-r from-blue-900 via-blue-700 to-orange-500 bg-clip-text text-transparent">
            Guides, Reviews & Energy Insights
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium mt-2">
            Helpful information to understand, compare and research your home-energy options.
          </p>
        </div>

        <div className="relative z-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-8">
          {posts.map((post) => (
            <div key={post.id} className="group rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 shadow-gray-500/50 shadow-lg hover:shadow-xl hover:shadow-gray-500/30 transition-all duration-300 flex flex-col hover:-translate-y-1 bg-slate-50"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img src={post.image} alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 to-transparent" />
                <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full border backdrop-blur-md ${post.categoryStyle}`}>
                  {post.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="pb-2.5 border-b border-slate-300 flex items-center gap-1.5 text-xs mb-3.5 text-slate-500">
                    <Calendar className="w-3 h-3 text-slate-400" /> {post.date}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{post.desc}</p>
                </div>

                <div className="pt-3 border-t border-slate-300 flex items-center justify-between mt-auto">
                  <span className="flex items-center gap-1.5 text-xs text-slate-500">
                    <User className="w-3 h-3 text-slate-400" />
                    {post.author}
                  </span>

                  <a href={post.link} className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 hover:text-amber-700 transition-colors" >
                    <span>Read Guide</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}