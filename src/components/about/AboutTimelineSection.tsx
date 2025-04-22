
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-6 md:pl-12 text-right' : 'pr-6 md:pr-12'}`}>
                  <Card className="bg-black/40 border border-white/10 backdrop-blur-sm hover:border-arminred-500/30 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${event.color} bg-opacity-20`}>
                            {event.icon}
                          </div>
                          <span className="text-xl font-bold text-white">{event.year}</span>
                        </div>
                        <Badge 
                          className={`bg-gradient-to-r ${event.color} text-white border-0`}
                        >
                          {event.status}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-gray-400 text-sm mb-4">{event.company}</p>
                      <p className="text-gray-300 mb-4">{event.description}</p>
                      
                      <div className="space-y-2">
                        {event.achievements.map((achievement, i) => (
                          <div 
                            key={i}
                            className="flex items-center gap-2 text-sm text-gray-400"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-arminred-500"></div>
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="relative w-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`absolute top-8 right-[-20px] w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br ${event.color} shadow-lg z-10`}
                  >
                    {event.icon}
                  </motion.div>
                </div>
                
                <div className="w-1/2"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
