import { Stethoscope } from 'lucide-react';
import { motion } from 'motion/react';

export default function MedicalCampSlide() {
  return (
    <div className="size-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center relative overflow-hidden p-16">
      <div className="absolute inset-0 opacity-30">
        <img
          src="https://images.unsplash.com/photo-1758653500388-36b051468d09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2hlY2t1cCUyMGhlYWx0aCUyMGV4YW1pbmF0aW9ufGVufDF8fHx8MTc3ODM5MjYzM3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Medical Camp"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-8"
        >
          <Stethoscope className="w-12 h-12 text-blue-400" />
          <h2 className="text-5xl font-bold text-white">Free Medical Camps & Health Checkups</h2>
        </motion.div>
        <div className="grid grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20"
          >
            <h3 className="text-3xl font-bold text-blue-300 mb-4">Free Healthcare Camps</h3>
            <p className="text-blue-100 text-lg mb-4">Organized in villages and remote areas across Himachal Pradesh</p>
            <ul className="space-y-2 text-white">
              {["General health checkups", "Blood pressure & diabetes screening", "Vision and dental checkups"].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20"
          >
            <h3 className="text-3xl font-bold text-emerald-300 mb-4">Rural Healthcare Support</h3>
            <p className="text-blue-100 text-lg mb-4">Mobile healthcare units reaching the most remote communities</p>
            <ul className="space-y-2 text-white">
              {["Free medicines distribution", "Specialist doctor consultations", "Follow-up care coordination"].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
