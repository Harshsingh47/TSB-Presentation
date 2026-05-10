import { Rocket, Globe, Handshake, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function FutureGrowthSlide() {
  const points = [
    { icon: Globe, title: "National Expansion", desc: "Scaling from Himachal Pradesh to every state in India with localized programs", color: "text-purple-300", borderColor: "border-purple-400/30" },
    { icon: Handshake, title: "Strategic Partnerships", desc: "Collaborating with NGOs, hospitals, government bodies, and CSR initiatives", color: "text-blue-300", borderColor: "border-blue-400/30" },
    { icon: TrendingUp, title: "Sustainable Model", desc: "Creating self-sustaining community healthcare networks with long-term impact", color: "text-emerald-300", borderColor: "border-emerald-400/30" }
  ];

  return (
    <div className="size-full bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 flex items-center justify-center p-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.1]">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxnbG9iYWwlMjBjb25uZWN0aXZpdHl8ZW58MXx8fHwxNzc4MzkyNjMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Future Growth Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-6xl text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <Rocket className="w-12 h-12 text-purple-400" />
          <h2 className="text-6xl font-bold text-white">Future Growth & Expansion</h2>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl text-blue-200 mb-12 font-light"
        >
          Building a Sustainable Healthcare Ecosystem Across India
        </motion.p>
        <div className="grid grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className={`backdrop-blur-md bg-white/10 p-8 rounded-2xl border ${point.borderColor}`}
            >
              <point.icon className={`w-12 h-12 ${point.color.replace('300', '400')} mx-auto mb-4`} />
              <h3 className={`text-2xl font-bold ${point.color} mb-3`}>{point.title}</h3>
              <p className="text-blue-100">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
