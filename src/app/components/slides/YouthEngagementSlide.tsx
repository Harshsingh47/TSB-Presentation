import { GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

export default function YouthEngagementSlide() {
  const initiatives = [
    { title: "Student Volunteer Initiatives", desc: "Training college and school students as healthcare awareness ambassadors" },
    { title: "Campus Awareness Programs", desc: "Interactive sessions on healthy lifestyle, mental health, and preventive care" },
    { title: "Youth Leadership", desc: "Creating a network of young changemakers driving healthcare transformation" }
  ];

  return (
    <div className="size-full bg-gradient-to-br from-blue-50 to-white flex items-center relative overflow-hidden">
      <div className="w-1/2 p-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-6"
        >
          <GraduationCap className="w-10 h-10 text-blue-600" />
          <h2 className="text-5xl font-bold text-slate-900">Youth Engagement Programs</h2>
        </motion.div>
        <p className="text-2xl text-slate-700 mb-8">Empowering the next generation of health advocates</p>
        <div className="space-y-6">
          {initiatives.map((init, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-500"
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">{init.title}</h3>
              <p className="text-slate-600">{init.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="w-1/2 h-full relative">
        <img
          src="https://images.unsplash.com/photo-1545886082-e66c6b9e011a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxzdHVkZW50cyUyMHlvdXRoJTIwdm9sdW50ZWVycyUyMGhlYWx0aGNhcmUlMjBhd2FyZW5lc3N8ZW58MXx8fHwxNzc4MzkyNjMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Youth Volunteers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-50"></div>
      </div>
    </div>
  );
}
