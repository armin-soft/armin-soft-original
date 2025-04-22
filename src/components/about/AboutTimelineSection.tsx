
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react";

const timelineEvents = [
  {
    year: "۱۳۹۷",
    icon: <Briefcase className="h-5 w-5" />,
    title: "شروع فعالیت حرفه‌ای",
    description: "آغاز فعالیت در زمینه برنامه‌نویسی و امنیت",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-500"
  },
  {
    year: "۱۳۹۸",
    icon: <GraduationCap className="h-5 w-5" />,
    title: "کسب مدرک تخصصی",
    description: "دریافت گواهینامه‌های معتبر در زمینه امنیت سایبری",
    iconBg: "bg-green-500/20",
    iconColor: "text-green-500"
  },
  {
    year: "۱۳۹۹",
    icon: <Briefcase className="h-5 w-5" />,
    title: "تاسیس آرمین سافت",
    description: "راه‌اندازی رسمی شرکت آرمین سافت با هدف ارائه خدمات تخصصی",
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-500"
  },
  {
    year: "۱۴۰۰",
    icon: <Award className="h-5 w-5" />,
    title: "توسعه خدمات",
    description: "گسترش فعالیت‌ها در زمینه هوش مصنوعی و اتوماسیون",
    iconBg: "bg-yellow-500/20",
    iconColor: "text-yellow-500"
  },
  {
    year: "۱۴۰۲",
    icon: <Calendar className="h-5 w-5" />,
    title: "همکاری‌های بین‌المللی",
    description: "آغاز همکاری با شرکت‌های خارجی و حضور در پروژه‌های بین‌المللی",
    iconBg: "bg-arminred-500/20",
    iconColor: "text-arminred-500"
  }
];

export function AboutTimelineSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:30px_30px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-transparent"></div>
      
      <div className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 inline-block"
          >
            مسیر حرفه‌ای
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-gradient-to-r from-arminred-600 to-purple-600 mx-auto mt-4 mb-6"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            مروری بر مهم‌ترین رویدادهای مسیر حرفه‌ای من
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Timeline center line */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="absolute h-full w-0.5 bg-gradient-to-b from-arminred-600/50 via-white/20 to-arminred-600/50 right-1/2 mr-[-2px] top-0"
          ></motion.div>
          
          <div className="relative">
            {timelineEvents.map((event, index) => (
              <div key={index} className="mb-12">
                <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className={`w-1/2 ${index % 2 === 0 ? 'pl-6 md:pl-12 text-right' : 'pr-6 md:pr-12'}`}
                  >
                    <span className={`text-xl font-bold text-gray-300 block mb-2 ${event.iconColor} farsi-numbers`}>{event.year}</span>
                    <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-400">{event.description}</p>
                  </motion.div>
                  
                  <div className="relative w-0">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 * index }}
                      viewport={{ once: true }}
                      className={`absolute top-0 right-[-20px] w-10 h-10 rounded-full flex items-center justify-center z-10 ${event.iconBg}`}
                    >
                      <span className={event.iconColor}>{event.icon}</span>
                    </motion.div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
