import { Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function ImpactSlide() {
  const impacts = [
    { title: "Increased Healthcare Awareness", desc: "Communities are now more informed about preventive healthcare and healthy living practices", accent: "text-emerald-300" },
    { title: "Community Empowerment", desc: "Local volunteers and youth leaders driving sustainable healthcare initiatives", accent: "text-blue-300" },
    { title: "Rural Transformation", desc: "Remote villages experiencing improved health outcomes and quality of life", accent: "text-teal-300" }
  ];

  return (
    <div className="size-full bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 flex items-center relative overflow-hidden">
      <div className="w-1/2 h-full relative">
        <img
          src="https://images.unsplash.com/photo-1774504798113-a03e2aa24789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxtZWRpY2FsJTIwY2FtcCUyMGhlYWx0aGNhcmUlMjB3b3JrZXJzJTIwY29tbXVuaXR5fGVufDF8fHx8MTc3ODM5MjYzMXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Community Impact"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="w-1/2 p-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-8"
        >
          <Award className="w-12 h-12 text-emerald-400" />
          <h2 className="text-5xl font-bold text-white">Community Impact</h2>
        </motion.div>
        <div className="space-y-6">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="backdrop-blur-md bg-white/10 p-6 rounded-2xl border border-white/20"
            >
              <h3 className={`text-3xl font-bold ${impact.accent} mb-3`}>{impact.title}</h3>
              <p className="text-blue-100 text-lg">{impact.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
