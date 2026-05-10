import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function RoadmapSlide() {
  const phases = [
    {
      phase: "Phase 1",
      year: "2026",
      title: "Foundation",
      color: "from-blue-600 to-blue-700",
      accent: "bg-blue-200",
      dot: "bg-blue-600",
      reach: "10,000+",
      items: ["Himachal Pradesh coverage", "50+ village programs", "Volunteer network setup"]
    },
    {
      phase: "Phase 2",
      year: "2027",
      title: "Expansion",
      color: "from-emerald-600 to-emerald-700",
      accent: "bg-emerald-200",
      dot: "bg-emerald-600",
      reach: "50,000+",
      items: ["Neighboring states", "200+ communities", "Partner hospitals"]
    },
    {
      phase: "Phase 3",
      year: "2028",
      title: "Scale",
      color: "from-purple-600 to-purple-700",
      accent: "bg-purple-200",
      dot: "bg-purple-600",
      reach: "200,000+",
      items: ["Multi-state presence", "500+ locations", "NGO partnerships"]
    },
    {
      phase: "Phase 4",
      year: "2029+",
      title: "National",
      color: "from-orange-600 to-orange-700",
      accent: "bg-orange-200",
      dot: "bg-orange-600",
      reach: "1M+",
      items: ["Pan-India network", "1000+ communities", "Sustainable ecosystem"]
    }
  ];

  return (
    <div className="size-full bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 p-8 flex flex-col items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.07]">
        <img
          src="https://images.unsplash.com/photo-1705219310872-ba67389496ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hY2hhbCUyMHByYWRlc2glMjBtb3VudGFpbnMlMjB2aWxsYWdlJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3ODM5MjYyOXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
            <MapPin className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-900 via-purple-900 to-orange-900 bg-clip-text text-transparent">Our Roadmap</h2>
        </div>
        <p className="text-lg text-slate-600">Building a Healthier India, One Phase at a Time</p>
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-[100px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-400 via-emerald-400 via-purple-400 to-orange-400 rounded-full origin-left"
        ></motion.div>

        <div className="grid grid-cols-4 gap-8">
          {phases.map((phase, index) => (
            <div key={index} className="relative group">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.5 }}
                className={`absolute top-[92px] left-1/2 -translate-x-1/2 w-8 h-8 ${phase.dot} rounded-full border-4 border-white shadow-lg z-10`}
              ></motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`bg-gradient-to-br ${phase.color} text-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 mt-24`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full">{phase.phase}</div>
                  <div className="text-xs font-semibold opacity-90">{phase.year}</div>
                </div>
                <div className="text-4xl font-bold mb-4">{phase.title}</div>
                <div className="h-1 w-16 bg-white/30 rounded-full mb-4"></div>
                <ul className="space-y-3 text-sm">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className={`w-1.5 h-1.5 ${phase.accent} rounded-full mt-1.5 flex-shrink-0`}></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-white/20">
                  <div className="text-xs opacity-75">Target Reach</div>
                  <div className="text-2xl font-bold">{phase.reach}</div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
