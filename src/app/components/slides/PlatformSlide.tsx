import { UserPlus, Calendar, Video, FlaskConical, Layout } from 'lucide-react';
import { motion } from 'motion/react';

export default function PlatformSlide() {
  const features = [
    {
      icon: UserPlus,
      title: "Doctor Connect",
      desc: "Connecting rural and urban users with a vast network of verified healthcare professionals.",
      color: "from-blue-500 to-blue-600",
      iconColor: "text-blue-600"
    },
    {
      icon: Calendar,
      title: "Smart Appointments",
      desc: "Hassle-free scheduling for in-person visits with automated reminders and digital tokens.",
      color: "from-emerald-500 to-emerald-600",
      iconColor: "text-emerald-600"
    },
    {
      icon: Video,
      title: "Tele-Consultations",
      desc: "High-quality video and audio consultations for remote medical advice and follow-ups.",
      color: "from-purple-500 to-purple-600",
      iconColor: "text-purple-600"
    },
    {
      icon: FlaskConical,
      title: "Diagnostic Services",
      desc: "Easy booking for lab tests and health checkups with digital report delivery.",
      color: "from-orange-500 to-orange-600",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <div className="size-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-12 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center mb-12"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
            <Layout className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-5xl font-bold text-slate-900">The Digital Healthcare Platform</h2>
        </div>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          An integrated ecosystem designed to bridge the gap between healthcare providers and seekers.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-8 max-w-6xl w-full relative z-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="flex items-start gap-6">
              <div className={`w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                <div className={`mt-4 h-1 w-12 rounded-full bg-gradient-to-r ${feature.color} opacity-30 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-slate-500 font-medium flex items-center gap-2"
      >
        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
        Building the future of accessible healthcare in India
      </motion.div>
    </div>
  );
}
