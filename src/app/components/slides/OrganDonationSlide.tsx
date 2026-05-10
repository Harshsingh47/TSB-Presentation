import { Eye, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export default function OrganDonationSlide() {
  return (
    <div className="size-full bg-gradient-to-br from-indigo-50 via-white to-rose-50 p-16 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.1]">
        <img
          src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?fm=jpg&q=80&w=2400&auto=format&fit=crop"
          alt="Compassion Background"
          className="w-full h-full object-cover"
        />
      </div>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 mb-8"
      >
        <Eye className="w-12 h-12 text-purple-600" />
        <h2 className="text-5xl font-bold text-slate-900">Eye & Organ Donation Awareness</h2>
      </motion.div>
      <p className="text-2xl text-slate-700 mb-12 text-center max-w-4xl">
        The Gift of Life: Empowering Communities Through Organ and Eye Donation Education
      </p>
      <div className="grid grid-cols-2 gap-12 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white p-10 rounded-3xl shadow-xl"
        >
          <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6">
            <Eye className="w-10 h-10 text-purple-600" />
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Eye Donation</h3>
          <ul className="space-y-3 text-slate-600 text-lg">
            {["Restoring sight to the visually impaired", "Awareness campaigns on eye pledge", "Partnerships with eye banks"].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white p-10 rounded-3xl shadow-xl"
        >
          <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mb-6">
            <Heart className="w-10 h-10 text-rose-600" />
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Organ Donation</h3>
          <ul className="space-y-3 text-slate-600 text-lg">
            {["Breaking myths and misconceptions", "Educating about organ pledge process", "Creating awareness about living donation"].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-rose-600 rounded-full mt-2"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
