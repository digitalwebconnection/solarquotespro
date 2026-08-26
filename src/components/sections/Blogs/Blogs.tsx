import { ArrowRight, Calendar, Clock, User , Sun } from "lucide-react";

export default function Blog() {
    const posts = [
        {
            id: 1,
            title: "How Solar Panels Lower Your Energy Bills in 2026",
            desc: "Learn how modern Tier-1 solar panels and smart inverter management maximize daily savings and reduce power dependence.",
            category: "Solar Tech",
            categoryStyle: "bg-amber-500/10 text-amber-700 border-amber-500/30",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbvCjQzT0XlMybpQ-2d8o0KrXI0d0QAffHdqwWbizvDQ&s=10",
            date: "Aug 12, 2026",
            readTime: "5 min read",
            author: "Alex Morgan",
            link: "#",
        },
        {
            id: 2,
            title: "Is Home Battery Storage Worth the Investment?",
            desc: "A complete breakdown of LFP battery benefits, emergency blackout protection, and smart grid feed-in rates.",
            category: "Batteries",
            categoryStyle: "bg-emerald-500/10 text-emerald-700 border-emerald-500/30",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPn2w3-Wnu4GSWur1p1ukAXgpLa6mSoSDzrmnvukW43Q&s=10",
            date: "Aug 18, 2026",
            readTime: "7 min read",
            author: "Sarah Jenkins",
            link: "#",
        },
        {
            id: 3,
            title: "Optimizing EV Chargers with Solar Panels",
            desc: "Discover how Level-2 EV home chargers automatically route free daytime solar power straight into your electric vehicle.",
            category: "EV Charging",
            categoryStyle: "bg-blue-500/10 text-blue-700 border-blue-500/30",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKr1CXkjGALy847Q9jHcDg3f8hto6IHwoOdN4JkINyGw&s=10",
            date: "Aug 22, 2026",
            readTime: "4 min read",
            author: "David Chen",
            link: "#",
        },
    ];

    return (
        <section className="bg-slate-50  text-slate-900 py-16" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 rounded-full bg-amber-500/10 border border-amber-500 text-amber-600 text-xs font-semibold tracking-wide uppercase">
                            <span className="inline-flex items-center gap-1"><Sun className="w-4 h-4" />Latest Articles</span>
                        </div>
                        <h2 className="text-4xl font-serif font-bold bg-linear-to-r from-blue-900 via-blue-800 to-emerald-500 bg-clip-text text-transparent"> Energy News & Buying Guides </h2>
                        <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed mt-2">
                            Stay informed with expert insights, home tech tips, and energy-saving strategies.</p>
                    </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="group bg-white rounded-2xl overflow-hidden hover:border-b-4 border-blue-700 shadow-gray-400 shadow-md hover:shadow-lg hover:shadow-gray-500 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">

                            <div className="relative h-52 w-full overflow-hidden ">
                                <img src={post.image} alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full border backdrop-blur-md ${post.categoryStyle}`}> {post.category}
                                </span>
                            </div>

                            <div className="p-6 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3.5 h-3.5 text-slate-400" />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-2 mb-2"> {post.title} </h3>

                                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">
                                        {post.desc}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                    <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                                        <User className="w-3.5 h-3.5 text-slate-400" /> {post.author} </span>

                                    <a href={post.link} className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 hover:text-amber-700 transition-colors group/link" >
                                        <span>Read Article</span>
                                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
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