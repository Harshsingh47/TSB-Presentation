import { Heart } from 'lucide-react';
import { motion } from 'motion/react';

export default function CoverSlide() {
  return (
    <div className="size-full bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1705219310872-ba67389496ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hY2hhbCUyMHByYWRlc2glMjBtb3VudGFpbnMlMjB2aWxsYWdlJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3ODM5MjYyOXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Himachal Mountains"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 text-center px-8 max-w-5xl">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="mb-8 flex justify-center"
        >
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center p-4 shadow-2xl">
            <img 
              src="/logo the swasth bharat (1).png" 
              alt="Swasth Bharat Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Swasth Bharat
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl text-blue-200 mb-4 font-light"
        >
          Building a Healthier, More Aware, and Compassionate India
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-emerald-300 mt-8"
        >
          A Healthcare Awareness Initiative Born in Himachal Pradesh
        </motion.p>
      </div>
    </div>
  );
}
