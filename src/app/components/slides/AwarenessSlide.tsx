import { Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function AwarenessSlide() {
  const campaigns = [
    { title: "Public Awareness Drives", desc: "Community gatherings, street campaigns, and village outreach programs", color: "bg-emerald-600" },
    { title: "Rural Outreach Initiatives", desc: "Targeting remote mountain communities with mobile awareness units", color: "bg-blue-600" },
    { title: "Seminars & Workshops", desc: "Educational sessions on preventive healthcare and healthy living", color: "bg-teal-600" }
  ];

  return (
    <div className="size-full bg-gradient-to-br from-white to-emerald-50 flex items-center relative overflow-hidden">
      <div className="w-1/2 h-full relative">
        <img
          src="https://images.unsplash.com/photo-1621353880594-70b5fd44ecb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzdHVkZW50cyUyMHlvdXRoJTIwdm9sdW50ZWVycyUyMGhlYWx0aGNhcmUlMjBhd2FyZW5lc3N8ZW58MXx8fHwxNzc4MzkyNjMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Awareness Campaign"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-emerald-50"></div>
      </div>
      <div className="w-1/2 p-16">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-6"
        >
          <Users className="w-10 h-10 text-emerald-600" />
          <h2 className="text-5xl font-bold text-slate-900">Healthcare Awareness Campaigns</h2>
        </motion.div>
        <div className="space-y-6">
          {campaigns.map((camp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex items-start gap-4"
            >
              <div className={`w-3 h-3 ${camp.color} rounded-full mt-2`}></div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-2">{camp.title}</h3>
                <p className="text-slate-600 text-lg">{camp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
