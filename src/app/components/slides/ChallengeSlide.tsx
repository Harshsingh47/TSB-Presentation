import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function ChallengeSlide() {
  const challenges = [
    {
      title: "Limited Accessibility",
      description: "Healthcare services are difficult to reach in hilly and remote mountain communities",
      color: "border-blue-600"
    },
    {
      title: "Lack of Awareness",
      description: "Limited knowledge about blood, eye, and organ donation in rural regions",
      color: "border-emerald-600"
    },
    {
      title: "Preventive Healthcare Gap",
      description: "Need for comprehensive preventive healthcare awareness programs",
      color: "border-teal-600"
    }
  ];

  return (
    <div className="size-full bg-gradient-to-br from-white to-blue-50 flex items-center relative overflow-hidden">
      <div className="w-1/2 p-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-6"
        >
          <MapPin className="w-10 h-10 text-blue-600" />
          <h2 className="text-5xl font-bold text-slate-900">The Healthcare Challenge</h2>
        </motion.div>
        <div className="space-y-6">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`bg-white p-6 rounded-2xl shadow-lg border-l-4 ${challenge.color}`}
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{challenge.title}</h3>
              <p className="text-slate-600">{challenge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="w-1/2 h-full relative">
        <img
          src="https://images.unsplash.com/photo-1646401239751-7db09206d726?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxoaW1hY2hhbCUyMHByYWRlc2glMjBtb3VudGFpbnMlMjB2aWxsYWdlJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3ODM5MjYyOXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Rural Himachal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-50"></div>
      </div>
    </div>
  );
}
