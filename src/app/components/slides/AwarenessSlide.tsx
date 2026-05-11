import React from 'react';
import { Megaphone, Truck, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

export default function AwarenessSlide() {
  const features = [
    {
      title: "Public Awareness Drives",
      desc: "Community gatherings, street campaigns, and village outreach programs",
      icon: <Megaphone className="w-6 h-6 text-emerald-500" />,
      accent: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      title: "Rural Outreach Initiatives",
      desc: "Targeting remote mountain communities with mobile awareness units",
      icon: <Truck className="w-6 h-6 text-blue-500" />,
      accent: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      title: "Seminars & Workshops",
      desc: "Educational sessions on preventive healthcare and healthy living",
      icon: <GraduationCap className="w-6 h-6 text-purple-500" />,
      accent: "bg-purple-500/10",
      border: "border-purple-500/20"
    }
  ];

  return (
    <div className="w-full h-full bg-white flex relative overflow-hidden font-sans">
      {/* Left Side: Image Section (55%) */}
      <div className="w-[55%] h-full relative overflow-hidden">
        <img
          src="/image2.png"
          alt="Rural Himachal Healthcare Camp"
          className="w-full h-full object-cover object-left transition-transform duration-700 hover:scale-105"
        />
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-white/10"></div>
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[0.5px]"></div>
        
        {/* Smooth Curved Divider - Fixed Path and Positioning */}
        <div className="absolute top-0 -right-1 h-full w-40 z-10 pointer-events-none">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M100,0 L100,100 L0,100 C60,100 60,0 0,0 Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* Right Side: Content Section (45%) */}
      <div className="w-[45%] h-full p-16 flex flex-col justify-center relative bg-white">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h1 className="text-5xl font-black text-[#0F172A] leading-tight mb-12">
            Healthcare Awareness <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              Campaigns
            </span>
          </h1>

          <div className="space-y-8">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                className={`group p-6 rounded-2xl bg-white border ${item.border} shadow-sm hover:shadow-md transition-all duration-300 flex gap-5 items-start cursor-default`}
              >
                <div className={`p-3 rounded-xl ${item.accent} transition-transform duration-300 group-hover:scale-110`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1E293B] mb-1">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
