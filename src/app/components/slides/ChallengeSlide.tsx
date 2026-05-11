import React from 'react';
import { MapPin, AlertCircle, Eye, HeartPulse } from 'lucide-react';
import { motion } from 'motion/react';

export default function ChallengeSlide() {
  const challenges = [
    {
      title: "Limited Accessibility",
      description: "Healthcare services are difficult to reach in hilly and remote mountain communities",
      icon: <MapPin className="w-6 h-6 text-blue-400" />,
      border: "border-blue-400/30"
    },
    {
      title: "Lack of Awareness",
      description: "Limited knowledge about blood, eye, and organ donation in rural regions",
      icon: <Eye className="w-6 h-6 text-emerald-400" />,
      border: "border-emerald-400/30"
    },
    {
      title: "Preventive Healthcare Gap",
      description: "Need for comprehensive preventive healthcare awareness programs",
      icon: <HeartPulse className="w-6 h-6 text-teal-400" />,
      border: "border-teal-400/30"
    }
  ];

  return (
    <div className="w-full h-full relative flex items-center overflow-hidden font-sans">
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <img
          src="/image5.png"
          alt="Rural Himachal Challenge"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full px-20 flex flex-col md:flex-row items-center gap-16">
        {/* Left Side: Text Heading */}
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-500 rounded-xl shadow-lg shadow-blue-500/20">
                <AlertCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-sm font-bold text-blue-400 tracking-widest uppercase">The Crisis</h2>
            </div>

            <h1 className="text-6xl font-black text-white leading-tight mb-6">
              The Healthcare <br />
              <span className="text-blue-400">Challenge</span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-lg leading-relaxed">
              Geographic barriers and informational gaps create significant hurdles in delivering timely healthcare to the last mile.
            </p>
          </motion.div>
        </div>

        {/* Right Side: Glassmorphism Cards */}
        <div className="w-full md:w-1/2 space-y-6">
          {challenges.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
              className={`p-6 rounded-2xl bg-white/5 backdrop-blur-xl border ${item.border} hover:bg-white/10 transition-all duration-300 flex gap-5 items-start group cursor-default`}
            >
              <div className="p-3 rounded-xl bg-white/10 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
