import { Target, Heart, Stethoscope, Users, Droplet, TrendingUp, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function MissionSlide() {
  const missionCards = [
    { icon: Heart, color: "bg-blue-100 text-blue-600", title: "Improve Awareness", desc: "Spreading healthcare knowledge to every corner of India" },
    { icon: Stethoscope, color: "bg-emerald-100 text-emerald-600", title: "Increase Accessibility", desc: "Making healthcare services reachable for all communities" },
    { icon: Users, color: "bg-teal-100 text-teal-600", title: "Empower Communities", desc: "Building self-sufficient healthcare ecosystems" },
    { icon: Droplet, color: "bg-purple-100 text-purple-600", title: "Promote Donation", desc: "Encouraging blood, eye, and organ donation awareness" },
    { icon: TrendingUp, color: "bg-orange-100 text-orange-600", title: "Preventive Healthcare", desc: "Focus on prevention rather than cure" },
    { icon: Award, color: "bg-rose-100 text-rose-600", title: "Social Impact", desc: "Creating lasting change in communities" }
  ];

  return (
    <div className="size-full bg-gradient-to-br from-blue-50 to-white p-16 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]">
        <img
          src="https://images.unsplash.com/photo-1516549655169-df83a0774514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtZWRpY2FsJTIwY29tbXVuaXR5JTIwaGVhbHRoJTIwc2VydmljZXxlbnwxfHx8fDE3NzgzOTI2MzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Healthcare Background"
          className="w-full h-full object-cover"
        />
      </div>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 mb-12"
      >
        <Target className="w-12 h-12 text-blue-600" />
        <h2 className="text-5xl font-bold text-slate-900">Our Purpose, Mission & Values</h2>
      </motion.div>
      <div className="grid grid-cols-3 gap-8 max-w-6xl">
        {missionCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-8 rounded-3xl shadow-xl text-center hover:shadow-2xl transition-shadow group"
          >
            <div className={`w-16 h-16 ${card.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
              <card.icon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">{card.title}</h3>
            <p className="text-slate-600">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
