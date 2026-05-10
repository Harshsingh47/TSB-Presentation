import { Heart } from 'lucide-react';
import { motion } from 'motion/react';

export default function FinalSlide() {
  return (
    <div className="size-full bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1734625621823-85a6bd20281f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxoaW1hY2hhbCUyMHByYWRlc2glMjBtb3VudGFpbnMlMjB2aWxsYWdlJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3ODM5MjYyOXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Himachal Landscape"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 text-center px-16 max-w-5xl">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="mb-8 flex justify-center"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center">
            <Heart className="w-14 h-14 text-white" />
          </div>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-6xl font-bold text-white mb-6"
        >
          Together We Can Build a Healthier India
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-3xl text-emerald-300 mb-12 font-light"
        >
          From the Hills of Himachal Pradesh to the Heart of India
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20 mb-8"
        >
          <p className="text-2xl text-white mb-4">
            Join us in creating a healthcare revolution that transforms lives, empowers communities, and builds a compassionate India.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-4xl font-bold text-white mb-2"
        >
          Thank You
        </motion.div>
        <p className="text-xl text-blue-200">
          For believing in our vision of a healthier, more aware, and compassionate India
        </p>
      </div>
    </div>
  );
}
