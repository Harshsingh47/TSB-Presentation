import { Droplet } from 'lucide-react';
import { motion } from 'motion/react';

export default function BloodDonationSlide() {
  const stats = [
    { title: "Life-Saving", desc: "One donation can save up to 3 lives" },
    { title: "Regular Camps", desc: "Monthly blood donation drives across Himachal" },
    { title: "Community", desc: "Building a network of voluntary donors" }
  ];

  return (
    <div className="size-full bg-gradient-to-br from-slate-900 via-rose-950 to-slate-900 flex items-center justify-center p-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1653508311233-65033d5860d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxibG9vZCUyMGRvbmF0aW9uJTIwY2FtcCUyMHZvbHVudGVlcnN8ZW58MXx8fHwxNzc4MzkyNjMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Blood Donation"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 max-w-5xl text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <Droplet className="w-16 h-16 text-rose-400" />
          <h2 className="text-6xl font-bold text-white">Blood Donation Awareness</h2>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl text-blue-200 mb-12 font-light"
        >
          Every Drop Counts. Every Donor is a Hero.
        </motion.p>
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-rose-400/30"
            >
              <div className="text-5xl font-bold text-rose-400 mb-3">{stat.title}</div>
              <p className="text-xl text-white">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 backdrop-blur-md bg-rose-500/20 p-6 rounded-2xl border border-rose-400/30"
        >
          <p className="text-2xl text-white font-light">
            Breaking myths, saving lives, and creating a culture of compassionate giving
          </p>
        </motion.div>
      </div>
    </div>
  );
}
