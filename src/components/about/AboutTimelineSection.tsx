
import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Award, Calendar, ChevronDown, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { cn } from "@/lib/utils";

const timelineEvents = [
  {
    id: 1,
    year: "۱۴۰۲",
    title: "مدیر ارشد تیم امنیت",
    company: "آمبرلا",
    location: "تهران، ایران",
    description: "پیشرفت در زمینه امنیت سایبری و مدیریت تیم امنیت در سطح بین‌المللی",
    achievements: [
      "راه‌اندازی سیستم‌های امنیتی پیشرفته", 
      "مدیریت تیم ۱۵ نفره", 
      "کاهش ۸۰٪ حملات سایبری",
      "پیاده‌سازی فرآیندهای DevSecOps"
    ],
    technologies: ["شبکه", "امنیت", "راهبری تیم", "مانیتورینگ"],
    icon: <Briefcase className="w-5 h-5" />,
    status: "در حال فعالیت",
    color: "from-arminred-500 to-purple-500",
    shadowColor: "shadow-arminred-500/20",
    expandedContent: "با توسعه و راه‌اندازی فرآیندهای امنیتی پیشرفته، موفق به افزایش سطح امنیت سازمانی و کاهش چشمگیر تهدیدات شدیم. همچنین با تشکیل تیم متخصص، زیرساخت‌های نوآورانه‌ای برای حفاظت از اطلاعات حساس پیاده‌سازی کردیم."
  },
  {
    id: 2,
    year: "۱۴۰۰",
    title: "متخصص ارشد هوش مصنوعی",
    company: "تک‌نوین",
    location: "اصفهان، ایران",
    description: "پیاده‌سازی سیستم‌های هوش مصنوعی و یادگیری ماشین",
    achievements: [
      "توسعه الگوریتم‌های پیشرفته ML", 
      "بهینه‌سازی سیستم‌های پردازش زبان طبیعی", 
      "افزایش دقت مدل‌ها تا ۹۵٪",
      "پیاده‌سازی معماری میکروسرویس"
    ],
    technologies: ["پایتون", "TensorFlow", "PyTorch", "NLP"],
    icon: <Award className="w-5 h-5" />,
    status: "تکمیل شده",
    color: "from-blue-500 to-cyan-500",
    shadowColor: "shadow-blue-500/20",
    expandedContent: "با استفاده از تکنیک‌های پیشرفته یادگیری ماشین و شبکه‌های عصبی، سیستم‌های هوشمندی توسعه دادیم که قادر به تحلیل داده‌های پیچیده و استخراج بینش‌های ارزشمند بودند. این پروژه منجر به افزایش ۳۰٪ در بهره‌وری سازمانی شد."
  },
  {
    id: 3,
    year: "۱۳۹۸",
    title: "کارشناس امنیت سایبری",
    company: "امن‌پرداز",
    location: "مشهد، ایران",
    description: "متخصص در زمینه تست نفوذ و امنیت شبکه",
    achievements: [
      "شناسایی و رفع بیش از ۲۰۰ آسیب‌پذیری حیاتی", 
      "پیاده‌سازی سیستم‌های دفاع سایبری", 
      "آموزش تیم امنیتی",
      "طراحی و توسعه ابزار امنیتی"
    ],
    technologies: ["تست نفوذ", "کالی لینوکس", "OWASP", "سیسکو"],
    icon: <GraduationCap className="w-5 h-5" />,
    status: "تکمیل شده",
    color: "from-green-500 to-emerald-500",
    shadowColor: "shadow-green-500/20",
    expandedContent: "در نقش کارشناس امنیت سایبری، مسئولیت تست نفوذ و ارزیابی آسیب‌پذیری‌ها را بر عهده داشتم. با شناسایی و مستندسازی نقاط ضعف امنیتی، به سازمان‌ها کمک کردم تا زیرساخت‌های خود را در برابر تهدیدات سایبری محافظت کنند."
  }
];

export function AboutTimelineSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px 0px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  
  // انیمیشن خط زمان
  const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);
  
  // ایجاد حرکت انیمیشنی برای کارت‌ها
  const handleExpandClick = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  // تغییر فعال بودن کارت با اسکرول
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const cards = containerRef.current.querySelectorAll(".timeline-card");
        const containerTop = containerRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        cards.forEach((card, index) => {
          const cardRect = card.getBoundingClientRect();
          const cardCenter = cardRect.top + cardRect.height / 2;
          const distanceFromCenter = Math.abs(windowHeight / 2 - cardCenter);
          
          if (distanceFromCenter < windowHeight * 0.3) {
            setActiveIndex(index);
          }
        });
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <section className="py-28 md:py-36 lg:py-44 relative overflow-hidden">
      {/* پس‌زمینه و افکت‌های گرافیکی */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/90 to-black backdrop-blur-sm"></div>
      
      {/* المان‌های تزئینی */}
      <div className="absolute top-1/4 right-10 md:right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 md:left-20 w-64 h-64 bg-arminred-500/5 rounded-full blur-3xl"></div>
      <motion.div 
        className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-arminred-500/80 via-purple-500/50 to-transparent z-10"
        style={{ scaleY: timelineProgress }}
      ></motion.div>
      
      <motion.div
        ref={containerRef}
        style={{ opacity, y }}
        className="container relative z-20 px-4 mx-auto max-w-6xl"
      >
        {/* هدر بخش */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="relative inline-block mb-4">
            <Badge 
              className="px-4 py-1.5 text-sm bg-gradient-to-r from-arminred-500/20 to-purple-500/20 text-arminred-400 border-arminred-500/30 backdrop-blur-sm"
            >
              مسیر حرفه‌ای
            </Badge>
            <motion.div 
              className="absolute -inset-1 rounded-full blur-xl bg-arminred-500/10"
              animate={{ 
                opacity: [0.5, 0.8, 0.5],
                scale: [0.95, 1.05, 0.95]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-300 mb-6">
            تجربیات کاری و سوابق
          </h2>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-gradient-to-r from-arminred-600 to-purple-600 mx-auto my-6 rounded-full"
          >
            <motion.div 
              className="h-full w-full bg-white/50"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            مروری بر تجربیات، دستاوردها و پروژه‌های کلیدی در سفر حرفه‌ای من
          </p>
        </motion.div>

        {/* خط زمان اصلی */}
        <div className="relative">
          {/* خط مرکزی */}
          <div className="absolute top-0 bottom-0 right-1/2 w-0.5 bg-gradient-to-b from-arminred-500/30 via-purple-500/20 to-blue-500/10"></div>
          
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px 0px" }}
              className="timeline-card mb-16 relative"
            >
              <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}>
                {/* کارت اصلی */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-6 md:pl-12 text-right' : 'pr-6 md:pr-12 text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className={cn(
                      "relative cursor-pointer",
                      activeIndex === index ? "z-30" : "z-20"
                    )}
                    onClick={() => handleExpandClick(event.id)}
                  >
                    <Card className={cn(
                      "bg-black/40 border backdrop-blur-sm transition-all duration-500",
                      activeIndex === index 
                        ? `border-${event.color.split(' ')[1]}/40 ${event.shadowColor}`
                        : "border-white/10 shadow-lg",
                      "hover:shadow-xl group"
                    )}>
                      <motion.div
                        className={cn(
                          "absolute inset-0 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-500",
                          `bg-gradient-to-br ${event.color}`
                        )}
                        layoutId={`bg-${event.id}`}
                      />
                      
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <motion.div 
                              className={`p-2 rounded-lg bg-gradient-to-br ${event.color} bg-opacity-20`}
                              whileHover={{ rotate: 10, scale: 1.1 }}
                              transition={{ duration: 0.3 }}
                            >
                              {event.icon}
                            </motion.div>
                            <span className="text-xl font-bold text-white">{event.year}</span>
                          </div>
                          <Badge 
                            className={`bg-gradient-to-r ${event.color} text-white border-0`}
                          >
                            {event.status}
                          </Badge>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white/90">{event.title}</h3>
                        
                        <div className="flex items-center gap-2 mb-4">
                          <p className="text-gray-400 text-sm">{event.company}</p>
                          <span className="text-gray-600">•</span>
                          <p className="text-gray-500 text-sm flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {event.location}
                          </p>
                        </div>
                        
                        <p className="text-gray-300 mb-4">{event.description}</p>
                        
                        <div className="space-y-2 mb-4">
                          {event.achievements.slice(0, expandedId === event.id ? 4 : 2).map((achievement, i) => (
                            <motion.div 
                              key={i}
                              initial={{ opacity: 0, x: -5 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center gap-2 text-sm text-gray-400"
                            >
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${event.color}`}></div>
                              <span>{achievement}</span>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* تگ‌های تکنولوژی */}
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {event.technologies.map((tech, i) => (
                            <Badge 
                              key={tech} 
                              className="bg-white/5 hover:bg-white/10 text-gray-300 border-0 px-2 text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        
                        {/* دکمه توسعه */}
                        <motion.div 
                          className="flex justify-end mt-3"
                          animate={{ rotate: expandedId === event.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-gray-400 hover:text-white hover:bg-white/5 p-1.5 h-auto"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleExpandClick(event.id);
                            }}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </Button>
                        </motion.div>
                      </CardContent>
                    </Card>
                    
                    {/* پنل توسعه یافته */}
                    <AnimatePresence>
                      {expandedId === event.id && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: 'auto' }}
                          exit={{ opacity: 0, y: -10, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className={cn(
                            "mt-3 p-4 rounded-lg border backdrop-blur-lg",
                            `bg-gradient-to-br from-gray-900/70 to-black/80 border-${event.color.split(' ')[1]}/20`,
                            event.shadowColor
                          )}
                        >
                          <p className="text-gray-300 text-sm leading-relaxed mb-3">
                            {event.expandedContent}
                          </p>
                          <div className="flex justify-end">
                            <Button 
                              size="sm" 
                              variant="ghost"
                              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white"
                            >
                              <span>مشاهده جزئیات پروژه</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
                
                {/* نقطه مرکزی روی خط زمان */}
                <div className="relative w-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={cn(
                      "absolute top-8 right-[-20px] w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-30",
                      `bg-gradient-to-br ${event.color}`
                    )}
                  >
                    {event.icon}
                    <motion.div 
                      className="absolute -inset-1.5 rounded-full"
                      animate={{ 
                        boxShadow: activeIndex === index 
                          ? [
                              `0 0 0 rgba(255,255,255,0.1)`, 
                              `0 0 20px ${getComputedColor(event.color.split(' ')[1])}`, 
                              `0 0 0 rgba(255,255,255,0.1)`
                            ] 
                          : `0 0 0 rgba(255,255,255,0)`
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                </div>
                
                <div className="w-1/2"></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* بخش پایینی - دکمه CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true, margin: "-100px 0px" }}
          className="mt-12 md:mt-20 text-center"
        >
          <Button 
            className="bg-gradient-to-r from-arminred-600 to-purple-700 hover:from-arminred-700 hover:to-purple-800 text-white shadow-lg shadow-arminred-600/20 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center text-base">
              مشاهده رزومه کامل
              <ExternalLink className="mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 1 }}
            />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

// تابع کمکی برای گرفتن رنگ محاسبه شده از کلاس تِیلویند
function getComputedColor(colorName: string): string {
  switch(colorName) {
    case 'purple-500': return 'rgba(168, 85, 247, 0.5)';
    case 'cyan-500': return 'rgba(6, 182, 212, 0.5)';
    case 'emerald-500': return 'rgba(16, 185, 129, 0.5)';
    default: return 'rgba(239, 68, 68, 0.5)'; // arminred-500
  }
}
