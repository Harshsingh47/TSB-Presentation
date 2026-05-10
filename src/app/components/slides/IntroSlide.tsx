import { Stethoscope } from 'lucide-react';
import { motion } from 'motion/react';

export default function IntroSlide() {
  const points = [
    {
      title: "Healthcare Awareness Movement",
      description: "A community-driven initiative to transform healthcare awareness across India",
      accent: "text-emerald-300"
    },
    {
      title: "Social Welfare Initiative",
      description: "Empowering communities through education, outreach, and compassionate care",
      accent: "text-blue-300"
    },
    {
      title: "Inspired by Himachali Values",
      description: "Rooted in the culture of service, unity, and community spirit of Himachal Pradesh",
      accent: "text-teal-300"
    }
  ];

  return (
    <div className="size-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center relative overflow-hidden">
      <div className="w-1/2 h-full relative">
        <img
          src="/47aa2a98-20a6-4fee-a6da-d1fbb2e8031f.png"
          alt="Swasth Bharat Healthcare Camp"
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      <div className="w-1/2 p-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-6"
        >
          <Stethoscope className="w-10 h-10 text-emerald-400" />
          <h2 className="text-5xl font-bold text-white">What is Swasth Bharat?</h2>
        </motion.div>
        <div className="space-y-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="backdrop-blur-sm bg-white/10 p-6 rounded-2xl border border-white/20"
            >
              <h3 className={`text-2xl font-semibold ${point.accent} mb-3`}>{point.title}</h3>
              <p className="text-blue-100 text-lg">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
