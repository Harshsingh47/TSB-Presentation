import React from 'react';
import { GraduationCap, Users, Sparkles, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

export default function YouthEngagementSlide() {
  const initiatives = [
    { 
      title: "Student Volunteer Initiatives", 
      desc: "Training college and school students as healthcare awareness ambassadors",
      icon: <Users className="w-5 h-5 text-blue-500" />,
      accent: "bg-blue-500/10"
    },
    { 
      title: "Campus Awareness Programs", 
      desc: "Interactive sessions on healthy lifestyle, mental health, and preventive care",
      icon: <BookOpen className="w-5 h-5 text-purple-500" />,
      accent: "bg-purple-500/10"
    },
    { 
      title: "Youth Leadership", 
      desc: "Creating a network of young changemakers driving healthcare transformation",
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
      accent: "bg-amber-500/10"
    }
  ];

  return (
    <div className="w-full h-full bg-white flex overflow-hidden relative font-sans">
      {/* Left Side: Content Section (45%) */}
      <div className="w-[45%] h-full px-16 py-12 flex flex-col justify-center relative z-10 bg-white">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-blue-600 rounded-lg shadow-lg shadow-blue-200">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase">Empowering Youth</h2>
          </div>

          <h1 className="text-5xl font-black text-[#0F172A] leading-[1.1] mb-4">
            Youth Engagement <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Programs
            </span>
          </h1>
          
          <p className="text-base text-slate-500 mb-10 max-w-sm leading-relaxed">
            Cultivating a new generation of healthcare advocates and community leaders through structured training and outreach.
          </p>

          <div className="space-y-4">
            {initiatives.map((init, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="group p-4 rounded-xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/20 transition-all duration-300 flex gap-4 items-start"
              >
                <div className={`p-2.5 rounded-lg ${init.accent} group-hover:scale-110 transition-transform`}>
                  {init.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1E293B] mb-0.5">{init.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{init.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Side: Image Section (55%) */}
      <div className="w-[55%] h-full relative">
        <img
          src="/image3.png"
          alt="Youth Volunteers"
          className="w-full h-full object-cover"
        />
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-white/90"></div>
        
        {/* Decorative Curve - Improved Path */}
        <div className="absolute top-0 left-[-1px] h-full w-40 z-10 pointer-events-none">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 C60,0 60,100 0,100 L0,100 Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  );
}
