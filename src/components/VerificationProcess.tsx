import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function VerificationProcess() {
  const criteria = [
    "Appropriate licences and accreditation",
    "Industry experience",
    "Business reputation",
    "Customer feedback",
    "Product quality",
    "Warranty support",
    "Professional installation standards"
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-amber-200/50 blur-[100px] rounded-full" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Our Installer <span className="text-amber-500">Verification</span> Process
            </h2>
            <div className="text-lg text-slate-600 space-y-4 mb-8">
              <p>We don't accept every installer who applies.</p>
              <p>Before joining our network, installers are assessed based on a strict set of criteria to ensure quality and reliability.</p>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 border-l-4 border-l-amber-500 shadow-sm">
               <p className="text-slate-900 font-semibold italic text-lg">
                 Our goal is simple: Connect Australian homeowners with installers we'd confidently recommend.
               </p>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl relative"
          >
             <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200/60 blur-2xl rounded-full" />
             <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
               <CheckCircle2 className="w-6 h-6 text-amber-500" />
               Assessment Checklist
             </h3>
             
             <ul className="space-y-4">
               {criteria.map((item, idx) => (
                 <motion.li 
                   key={idx}
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.3 + (idx * 0.1) }}
                   className="flex items-start gap-3 text-slate-700"
                 >
                   <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                   <span>{item}</span>
                 </motion.li>
               ))}
             </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
