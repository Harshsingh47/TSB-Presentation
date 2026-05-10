import { Globe } from 'lucide-react';
import { motion } from 'motion/react';

export default function VisionSlide() {
  const stats = [
    { value: "100%", label: "Village Coverage in Himachal", color: "text-emerald-400" },
    { value: "Pan-India", label: "Expansion Roadmap", color: "text-blue-400" },
    { value: "1M+", label: "Lives Impacted Annually", color: "text-teal-400" }
  ];

  return (
    <div className="size-full bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1734625621841-b79eceba24a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxoaW1hY2hhbCUyMHByYWRlc2glMjBtb3VudGFpbnMlMjB2aWxsYWdlJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3ODM5MjYyOXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Vision"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 text-center px-16 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <Globe className="w-12 h-12 text-emerald-400" />
          <h2 className="text-5xl font-bold text-white">Our Vision</h2>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl text-blue-200 mb-12 font-light leading-relaxed"
        >
          From the Hills of Himachal Pradesh to Every Village in India
        </motion.p>
        <div className="grid grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20"
            >
              <div className={`text-5xl font-bold ${stat.color} mb-3`}>{stat.value}</div>
              <p className="text-xl text-white">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
