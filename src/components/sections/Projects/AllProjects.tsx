import { useState } from "react";
import { ArrowRight, MapPin, Zap, Sun, BatteryCharging, Building2, Home, Factory } from "lucide-react";
// import BlogPage from "../../../pages/Blogs/BlogPage";

export default function AllProjects() {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      id: 1,
      title: "10kW Solar & 13.5kWh Battery Setup",
      client: "Luxury Residence",
      location: "Sydney, NSW",
      category: "residential",
      type: "Solar & Battery",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800",
      accent: "border-l-amber-500",
      badgeStyle: "bg-amber-500/10 text-amber-500 border-amber-500/30",
      icon: <Sun className="w-5 h-5 text-amber-500" />,
      specs: [
        { label: "System Size", value: "10.4 kW" },
        { label: "Storage", value: "13.5 kWh LFP" },
        { label: "Bill Reduction", value: "92%" },
      ],
      link: "#",
    },
    {
      id: 2,
      title: "150kW Commercial Rooftop Solar",
      client: "Logistics Distribution Center",
      location: "Melbourne, VIC",
      category: "commercial",
      type: "Commercial Solar",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800",
      badgeStyle: "bg-emerald-500/20 text-emerald-700 border-emerald-500/30",
      icon: <Building2 className="w-5 h-5 text-emerald-500" />,
      specs: [
        { label: "System Size", value: "150 kW" },
        { label: "Payback Period", value: "3.2 Years" },
        { label: "CO2 Saved", value: "180 Tons/yr" },
      ],
      link: "#",
    },
    {
      id: 3,
      title: "Industrial Microgrid & EV Charging Hub",
      client: "Fleet & Manufacturing Depot",
      location: "Brisbane, QLD",
      category: "industrial",
      type: "Microgrid & EV",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOyzEhIbpF0_DLoNsdspXl1hNsg5PN1D_o8TKB1LBgcg&s=10",
      badgeStyle: "bg-blue-500/10 text-blue-700 border-blue-500/30",
      icon: <Factory className="w-5 h-5 text-blue-500" />,
      specs: [
        { label: "Solar Array", value: "500 kW" },
        { label: "EV Fleet Ports", value: "12x Level 2" },
        { label: "Battery Hub", value: "250 kWh" },
      ],
      link: "#",
    },
    {
      id: 4,
      title: "Dual Level-2 Smart EV Charger Station",
      client: "Modern Home Installation",
      location: "Perth, WA",
      category: "residential",
      type: "EV Charging",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXzhHZRoMYruqRFRqFLXQVBeImGuifZ1oMc8wtP2ui5w&s=10",
      badgeStyle: "bg-green-200/10 text-green-500 border-green-500/40",
      icon: <Zap className="w-5 h-5 text-cyan-500" />,
      specs: [
        { label: "Output", value: "22 kW Dual" },
        { label: "Solar Sync", value: "100% Excess" },
        { label: "Charge Speed", value: "75 km/hr" },
      ],
      link: "#",
    },
    {
      id: 5,
      title: "Commercial Battery Backup Infrastructure",
      client: "Medical & Office Complex",
      location: "Adelaide, SA",
      category: "commercial",
      type: "Battery Storage",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSETYjTXDu-sEdUI4sZJym_4p1i_jYuAXi8g5oc_P08WQ&s=10",
      badgeStyle: "bg-emerald-500/20 text-emerald-800 border-emerald-500/30",
      icon: <BatteryCharging className="w-5 h-5 text-emerald-500" />,
      specs: [
        { label: "Battery Capacity", value: "100 kWh" },
        { label: "Backup Runtime", value: "12 Hours" },
        { label: "Response Time", value: "<10 ms" },
      ],
      link: "#",
    },
    {
      id: 6,
      title: "1MW Megawatt Solar Array Installation",
      client: "Agricultural Processing Plant",
      location: "Regional NSW",
      category: "industrial",
      type: "Industrial Solar",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaiSyQASL8YH_RO-rSr3e1hTHFLP_CkFbtYvkoGLA_aQ&s=10",
      badgeStyle: "bg-amber-500/10 text-amber-500 border-amber-500/30",
      icon: <Sun className="w-5 h-5 text-amber-500" />,
      specs: [
        { label: "Capacity", value: "1.2 MW" },
        { label: "Panels Used", value: "2,200 Monocrystalline" },
        { label: "Annual Yield", value: "1.8 GWh" },
      ],
      link: "#",
    },
  ];

  const filteredProjects = activeTab === "all" ? projects : projects.filter((item) => item.category === activeTab);

  return (
    <section className="bg-slate-50 py-16 text-slate-900 relative">
      <div className="w-200 h-150 rounded-full absolute inset-0 bg-blue-600/15 -top-10 left-100 blur-[120px]"></div>
      <div className="w-200 h-200 rounded-full absolute inset-0 bg-amber-400/20 top-80 -left-20 blur-[120px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-2">
        <div className="flex  justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-blue-950 mt-3"> Explore Our Recent Projects
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2 bg-white p-1.5 rounded-xl ">
            {[
              { id: "all", label: "All Projects" },
              { id: "residential", label: "Residential", icon: <Home className="w-3.5 h-3.5" /> },
              { id: "commercial", label: "Commercial", icon: <Building2 className="w-3.5 h-3.5" /> },
              { id: "industrial", label: "Industrial", icon: <Factory className="w-3.5 h-3.5" /> },
            ].map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${activeTab === tab.id ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`}>{tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className={`group bg-white rounded-2xl overflow-hidden shadow-gray-500 shadow-md hover:shadow-xl transition-all duration-300 justify-between hover:-translate-y-1`}>
              <div className="relative h-56 w-full overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105" />
                <span className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full border backdrop-blur-md ${project.badgeStyle}`}> {project.type}</span>
              </div>
              <div className="p-6 flex flex-col ">
          
                  <div className="flex items-center justify-between text-xs  mb-3">
                    <span className="font-semibold text-slate-700">{project.client}</span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <MapPin className="w-3.5 h-3.5" />{project.location}</span>
                  </div>
                  <h3 className="text-xl font-serif tracking-wide font-bold text-slate-900 group-hover:text-green-600 transition-colors mb-3"> {project.title}</h3>
                  <div className="grid grid-cols-3 gap-2 py-3 px-1 rounded-xl mb-4">
                    {project.specs.map((spec, sIndex) => (
                      <div key={sIndex} className="text-center">
                        <span className="block text-[11px] text-slate-600 uppercase tracking-wider">
                          {spec.label}
                        </span>
                        <span className="block text-xs font-bold text-slate-800 "> {spec.value}</span>
                      </div>
                    ))}
                  </div>
                <div className="pt-3  flex items-center justify-between">
                  <div className="flex items-center gap-2">{project.icon}
                    <span className="text-xs font-medium text-slate-500 capitalize">
                      {project.category} </span>
                  </div>
                  <a href={project.link} className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-600 hover:text-green-500 transition-colors group" >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"/>
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