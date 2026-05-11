import React from 'react';
import { Droplet, Heart, Users, Activity } from 'lucide-react';
import { motion } from 'motion/react';

export default function BloodDonationSlide() {
  const stats = [
    { 
      title: "Life-Saving", 
      desc: "One donation can save up to 3 lives",
      icon: <Heart className="w-6 h-6 text-rose-500" />
    },
    { 
      title: "Regular Camps", 
      desc: "Monthly drives across remote Himachal regions",
      icon: <Activity className="w-6 h-6 text-rose-500" />
    },
    { 
      title: "Community", 
      desc: "Building a network of voluntary donors",
      icon: <Users className="w-6 h-6 text-rose-500" />
    }
  ];

  return (
    <div className="w-full h-full relative flex items-center justify-center overflow-hidden font-sans">
      {/* Immersive Background */}
      <div className="absolute inset-0">
        <img
          src="/image6.png"
          alt="Blood Donation Campaign"
          className="w-full h-full object-cover"
        />
        {/* Stronger Overlay for Readability */}
        <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[4px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40"></div>
      </div>

      <div className="relative z-10 max-w-5xl w-full px-12 text-center py-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-3 mb-8"
        >
          <div className="p-4 bg-rose-600 rounded-full shadow-2xl shadow-rose-600/30 animate-pulse">
            <Droplet className="w-8 h-8 text-white fill-white" />
          </div>
          <h2 className="text-[10px] font-bold text-rose-400 tracking-[0.4em] uppercase">Emergency Response</h2>
          <h1 className="text-6xl font-black text-white leading-tight">
            Blood Donation <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-orange-400">
              Awareness
            </span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto font-medium italic italic-none"
        >
          "Every Drop Counts. Every Donor is a Hero."
        </motion.p>

        <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.15, duration: 0.5 }}
              className="group backdrop-blur-2xl bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-rose-500/50 hover:bg-white/10 transition-all duration-500"
            >
              <div className="flex justify-center mb-4 transition-transform duration-500 group-hover:scale-110">
                <div className="p-3 bg-white/5 rounded-xl">
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-1.5">{stat.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed px-2">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 inline-block backdrop-blur-lg bg-rose-600/5 px-6 py-3 rounded-full border border-rose-500/20"
        >
          <p className="text-sm text-rose-100/80 font-medium tracking-wide">
            Breaking myths, saving lives, and creating a culture of compassionate giving.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
