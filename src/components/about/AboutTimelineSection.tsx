
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { AboutTimelineCard } from "./timeline/AboutTimelineCard";

const timelineEvents = [
  {
    id: 1,
    year: "۱۴۰۲",
    title: "مدیر ارشد تیم امنیت",
    company: "آمبرلا",
    description: "پیشرفت در زمینه امنیت سایبری و مدیریت تیم امنیت در سطح بین‌المللی",
    achievements: ["راه‌اندازی سیستم‌های امنیتی پیشرفته", "مدیریت تیم ۱۵ نفره", "کاهش ۸۰٪ حملات سایبری"],
    icon: <Briefcase className="w-5 h-5" />,
    status: "در حال فعالیت",
    color: "from-arminred-500 to-purple-500"
  },
  {
    id: 2,
    year: "۱۴۰۰",
    title: "متخصص ارشد هوش مصنوعی",
    company: "تک‌نوین",
    description: "پیاده‌سازی سیستم‌های هوش مصنوعی و یادگیری ماشین",
    achievements: ["توسعه الگوریتم‌های پیشرفته ML", "بهینه‌سازی سیستم‌های پردازش زبان طبیعی", "افزایش دقت مدل‌ها تا ۹۵٪"],
    icon: <Award className="w-5 h-5" />,
    status: "تکمیل شده",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    year: "۱۳۹۸",
    title: "کارشناس امنیت سایبری",
    company: "امن‌پرداز",
    description: "متخصص در زمینه تست نفوذ و امنیت شبکه",
    achievements: ["شناسایی و رفع بیش از ۲۰۰ آسیب‌پذیری حیاتی", "پیاده‌سازی سیستم‌های دفاع سایبری", "آموزش تیم امنیتی"],
    icon: <GraduationCap className="w-5 h-5" />,
    status: "تکمیل شده",
    color: "from-green-500 to-emerald-500"
  }
];

export function AboutTimelineSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      
      <div className="container relative z-10 px-4 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            مسیر حرفه‌ای
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-arminred-600 to-purple-600 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            نگاهی به مسیر رشد و پیشرفت حرفه‌ای در صنعت فناوری اطلاعات
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-0 bottom-0 right-1/2 w-0.5 bg-gradient-to-b from-arminred-500/50 via-purple-500/30 to-transparent"></div>
          
          {timelineEvents.map((event, index) => (
            <AboutTimelineCard 
              key={event.id} 
              event={event} 
              index={index} 
              isEven={index % 2 === 0} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
