import { Handshake, Heart, Globe, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function SupportSlide() {
  const reasons = [
    { icon: Heart, title: "High Social Impact", desc: "Directly improving lives of underserved communities with measurable healthcare outcomes", color: "from-blue-600 to-blue-700", accent: "text-blue-100" },
    { icon: Globe, title: "Nationwide Scalability", desc: "Proven model in Himachal Pradesh ready for pan-India expansion with strong ROI", color: "from-emerald-600 to-emerald-700", accent: "text-emerald-100" },
    { icon: TrendingUp, title: "Long-Term Transformation", desc: "Creating sustainable healthcare ecosystems that empower communities for generations", color: "from-purple-600 to-purple-700", accent: "text-purple-100" }
  ];

  return (
    <div className="size-full bg-gradient-to-br from-white to-blue-50 p-16 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]">
        <img
          src="https://images.unsplash.com/photo-1582213726892-25b796d563a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb21tdW5pdHklMjBzdXBwb3J0JTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NzgzOTI2MzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Support Background"
          className="w-full h-full object-cover"
        />
      </div>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 mb-12"
      >
        <Handshake className="w-12 h-12 text-blue-600" />
        <h2 className="text-5xl font-bold text-slate-900">Why Support Swasth Bharat?</h2>
      </motion.div>
      <div className="max-w-5xl grid grid-cols-1 gap-8 w-full">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`bg-gradient-to-r ${reason.color} text-white p-10 rounded-3xl shadow-xl flex items-center gap-6 hover:scale-[1.02] transition-transform`}
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <reason.icon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">{reason.title}</h3>
              <p className={`text-xl ${reason.accent}`}>{reason.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
