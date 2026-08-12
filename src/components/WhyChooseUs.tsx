import { motion } from 'framer-motion';
import { Shield, Clock, DollarSign, HeartHandshake, MapPin, Gift } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6 text-amber-500" />,
      title: "Verified Solar Professionals",
      description: "Every installer in our network is carefully reviewed before joining."
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-500" />,
      title: "Save Time",
      description: "Complete one form instead of contacting multiple companies yourself."
    },
    {
      icon: <DollarSign className="w-6 h-6 text-amber-500" />,
      title: "Better Prices",
      description: "Installers know they're competing, helping you receive competitive offers."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-amber-500" />,
      title: "Honest Advice",
      description: "Our goal is to help you make an informed decision—not push you toward any particular installer."
    },
    {
      icon: <MapPin className="w-6 h-6 text-amber-500" />,
      title: "Australia Wide Coverage",
      description: "Our installer network continues to grow across Australia."
    },
    {
      icon: <Gift className="w-6 h-6 text-amber-500" />,
      title: "Completely Free",
      description: "Our service costs homeowners absolutely nothing."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Choose True Solar Quote?</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white hover:bg-slate-50 border border-slate-200 hover:border-amber-300 rounded-2xl p-6 transition-all group hover:-translate-y-1 shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
