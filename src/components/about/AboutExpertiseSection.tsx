
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Code, Shield, Bot, Server, Database, Cpu, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

// دیتای حوزه‌های تخصصی
const expertiseAreas = [
  {
    icon: Code,
    title: "توسعه نرم‌افزار",
    description: "تخصص در زبان‌های برنامه‌نویسی متنوع و فریم‌ورک‌های مدرن برای ایجاد راهکارهای جامع",
    color: "from-blue-600/20 to-purple-600/20",
    textColor: "text-blue-500",
    iconBg: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    hoverColor: "group-hover:text-blue-400",
    shadowColor: "shadow-blue-500/10",
    badges: ["ری‌اکت", "نود.جی‌اس", "پی‌اچ‌پی", "لاراول"],
    detailBackgroundClass: "bg-gradient-to-br from-blue-950/50 to-indigo-900/50"
  },
  {
    icon: Shield,
    title: "امنیت سایبری",
    description: "تامین امنیت سیستم‌ها با استفاده از تکنیک‌های پیشرفته و ابزارهای تخصصی",
    color: "from-arminred-600/20 to-pink-600/20",
    textColor: "text-arminred-500",
    iconBg: "bg-arminred-500/10",
    borderColor: "border-arminred-500/20",
    hoverColor: "group-hover:text-arminred-400",
    shadowColor: "shadow-arminred-500/10",
    badges: ["تست نفوذ", "اُواسپ", "فایروال", "رمزنگاری"],
    detailBackgroundClass: "bg-gradient-to-br from-arminred-950/50 to-rose-900/50"
  },
  {
    icon: Bot,
    title: "هوش مصنوعی",
    description: "بکارگیری الگوریتم‌های پیشرفته برای توسعه سیستم‌های هوشمند و خودکار",
    color: "from-emerald-600/20 to-teal-600/20",
    textColor: "text-emerald-500",
    iconBg: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    hoverColor: "group-hover:text-emerald-400",
    shadowColor: "shadow-emerald-500/10",
    badges: ["یادگیری ماشین", "پردازش زبان طبیعی", "شبکه عصبی", "پایتون"],
    detailBackgroundClass: "bg-gradient-to-br from-emerald-950/50 to-teal-900/50"
  },
  {
    icon: Server,
    title: "زیرساخت ابری",
    description: "طراحی و پیاده‌سازی زیرساخت‌های ابری مقیاس‌پذیر و مقاوم",
    color: "from-amber-600/20 to-yellow-600/20",
    textColor: "text-amber-500",
    iconBg: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    hoverColor: "group-hover:text-amber-400",
    shadowColor: "shadow-amber-500/10",
    badges: ["داکر", "کوبرنتیز", "AWS", "دِوآپس"],
    detailBackgroundClass: "bg-gradient-to-br from-amber-950/50 to-yellow-900/50"
  },
  {
    icon: Database,
    title: "مدیریت داده",
    description: "طراحی و بهینه‌سازی پایگاه‌های داده و سیستم‌های ذخیره‌سازی اطلاعات",
    color: "from-purple-600/20 to-indigo-600/20",
    textColor: "text-purple-500",
    iconBg: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    hoverColor: "group-hover:text-purple-400", 
    shadowColor: "shadow-purple-500/10",
    badges: ["مای‌اس‌کیو‌ال", "مونگو‌دی‌بی", "پوستگرس‌کیو‌ال", "ردیس"],
    detailBackgroundClass: "bg-gradient-to-br from-purple-950/50 to-indigo-900/50"
  },
  {
    icon: Cpu,
    title: "اتوماسیون",
    description: "طراحی سیستم‌های خودکار برای بهینه‌سازی فرآیندها و افزایش بهره‌وری",
    color: "from-cyan-600/20 to-sky-600/20",
    textColor: "text-cyan-500",
    iconBg: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
    hoverColor: "group-hover:text-cyan-400",
    shadowColor: "shadow-cyan-500/10",
    badges: ["CI/CD", "اسکریپت‌نویسی", "تست خودکار", "مانیتورینگ"],
    detailBackgroundClass: "bg-gradient-to-br from-cyan-950/50 to-sky-900/50"
  }
];

export function AboutExpertiseSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "0px 0px -200px 0px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, 60]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);
  
  // پارالاکس برای کارت‌ها
  const cardsY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  // اثر هاور روی کارت‌ها
  const handleCardHover = (index: number | null) => {
    setHoveredIndex(index);
  };

  // انیمیشن‌های ورودی
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  // انیمیشن‌های جزئیات کارت‌ها
  const detailVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 20,
        staggerChildren: 0.08
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 }
    }
  };

  const detailItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 150, damping: 15 }
    }
  };

  return (
    <section className="py-28 md:py-36 relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black" id="expertise">
      <motion.div 
        style={{ opacity, y, scale }}
        className="relative z-10"
        ref={containerRef}
      >
        {/* عناصر تزئینی */}
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-arminred-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 rounded-full blur-3xl"></div>
        
        {/* پترن پس‌زمینه */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] opacity-30"></div>
        
        {/* محتوای اصلی */}
        <div className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10">
          {/* هدر بخش */}
          <div className="text-center mb-16 md:mb-24 relative">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative inline-block"
            >
              <Badge 
                className="px-4 py-1.5 text-sm bg-gradient-to-r from-arminred-500/20 to-purple-500/20 text-arminred-400 border-arminred-500/30 backdrop-blur-sm mb-4"
              >
                تخصص‌های حرفه‌ای
              </Badge>
              <motion.div 
                className="absolute -inset-1 rounded-full blur-xl bg-arminred-500/10"
                animate={{ 
                  opacity: [0.5, 0.8, 0.5],
                  scale: [0.95, 1.05, 0.95]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: -10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-300 mb-6"
            >
              حوزه‌های تخصصی
            </motion.h2>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={isVisible ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 w-24 bg-gradient-to-r from-arminred-600 to-purple-600 mx-auto my-6 rounded-full"
            >
              <motion.div 
                className="h-full w-full bg-white/50"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-gray-400 max-w-2xl mx-auto text-lg"
            >
              زمینه‌های اصلی تخصص و مهارت‌های فنی من در حوزه‌های مختلف فناوری اطلاعات
            </motion.p>
          </div>
          
          {/* گرید کارت‌های تخصصی */}
          <motion.div 
            style={{ y: cardsY }}
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8"
            ref={cardsContainerRef}
          >
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                variants={itemVariants}
                onHoverStart={() => handleCardHover(index)}
                onHoverEnd={() => handleCardHover(null)}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className={cn(
                  "group relative z-10 cursor-pointer perspective-card",
                  "transition-all duration-500 transform-gpu",
                  hoveredIndex !== null && hoveredIndex !== index ? "opacity-60 scale-95" : ""
                )}
              >
                <div 
                  className={cn(
                    "relative h-full rounded-2xl overflow-hidden border border-white/10",
                    "transition-all duration-500 transform-gpu",
                    "hover:border-transparent",
                    area.shadowColor,
                    hoveredIndex === index ? "shadow-xl scale-[1.03]" : "shadow-md"
                  )}
                >
                  {/* پس‌زمینه متحرک */}
                  <motion.div 
                    className={cn(
                      "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                      `bg-gradient-to-br ${area.color}`
                    )}
                    animate={
                      hoveredIndex === index 
                        ? { opacity: 0.15, transition: { duration: 0.5 }} 
                        : { opacity: 0, transition: { duration: 0.3 }}
                    }
                  />
                  
                  {/* بخش محتوا */}
                  <div className="relative backdrop-blur-sm bg-black/50 hover:bg-black/40 transition-colors duration-300 h-full">
                    {/* محتوای کارت */}
                    <div className="p-8 h-full flex flex-col">
                      <div className="flex justify-between items-start mb-6">
                        {/* آیکون */}
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className={cn(
                            "p-4 rounded-xl",
                            area.iconBg,
                            "group-hover:bg-white/10 transition-colors duration-300"
                          )}
                        >
                          <area.icon className={cn("h-7 w-7", area.textColor, area.hoverColor)} />
                        </motion.div>
                        
                        {/* خطوط تزئینی گوشه */}
                        <div className="relative h-10 w-10">
                          <motion.div 
                            className={cn(
                              "absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 rounded-tr-md transition-colors duration-500",
                              "border-white/10 group-hover:border-white/30"
                            )}
                            animate={
                              hoveredIndex === index 
                                ? { width: 40, height: 40, transition: { duration: 0.3 }} 
                                : { width: 32, height: 32, transition: { duration: 0.3 }}
                            }
                          />
                        </div>
                      </div>
                      
                      {/* عنوان */}
                      <h3 className={cn(
                        "text-xl md:text-2xl font-bold mb-3 transition-colors duration-300",
                        "text-white/90 group-hover:text-white"
                      )}>
                        {area.title}
                      </h3>
                      
                      {/* توضیحات */}
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-6 flex-grow">
                        {area.description}
                      </p>
                      
                      {/* بج‌ها */}
                      <div className="flex flex-wrap gap-2 mt-auto mb-5">
                        {area.badges.map((badge) => (
                          <HoverCard key={badge} openDelay={200} closeDelay={100}>
                            <HoverCardTrigger asChild>
                              <Badge 
                                className={cn(
                                  "bg-white/5 text-gray-300 border-0 hover:bg-white/10",
                                  "transition-all duration-300 cursor-help"
                                )}
                              >
                                {badge}
                              </Badge>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-auto bg-black/80 border-gray-800 backdrop-blur-md">
                              <div className="text-sm text-gray-300">
                                جزئیات بیشتر درباره {badge}
                              </div>
                            </HoverCardContent>
                          </HoverCard>
                        ))}
                      </div>
                      
                      {/* دکمه */}
                      <div className="mt-2">
                        <Button 
                          variant="ghost" 
                          className={cn(
                            "p-0 h-auto text-sm font-medium group/btn",
                            area.textColor,
                            "hover:bg-transparent hover:opacity-80"
                          )}
                        >
                          <span>مشاهده جزئیات</span>
                          <motion.div
                            animate={{ x: hoveredIndex === index ? 5 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="inline-block mr-1"
                          >
                            <ChevronRight className="h-4 w-4 inline-block" />
                          </motion.div>
                        </Button>
                      </div>
                      
                      {/* گوشه پایین سمت چپ */}
                      <div className="absolute bottom-3 left-3">
                        <motion.div 
                          className={cn(
                            "w-10 h-10 border-b-2 border-l-2 rounded-bl-md transition-colors duration-500",
                            "border-white/10 group-hover:border-white/30"
                          )}
                          animate={
                            hoveredIndex === index 
                              ? { width: 40, height: 40, transition: { duration: 0.3 }} 
                              : { width: 32, height: 32, transition: { duration: 0.3 }}
                          }
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* افکت درخشش */}
                  <motion.div 
                    className={cn(
                      "absolute inset-0 opacity-0 transition-opacity duration-500",
                      hoveredIndex === index ? "opacity-20" : "opacity-0"
                    )}
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${getComputedColor(area.textColor)}, transparent 70%)`
                    }}
                  />
                </div>
                
                {/* جزئیات بیشتر */}
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      variants={detailVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className={cn(
                        "absolute top-[calc(100%+1rem)] left-0 right-0 z-20 rounded-xl overflow-hidden",
                        "border border-white/10 shadow-2xl", 
                        area.detailBackgroundClass,
                        "backdrop-blur-md p-6"
                      )}
                    >
                      <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rotate-45 w-4 h-4 bg-white/5 border border-white/10" />
                      
                      <motion.h4 
                        variants={detailItemVariants}
                        className={cn("text-xl font-bold mb-4", area.textColor)}
                      >
                        جزئیات {area.title}
                      </motion.h4>
                      
                      <motion.ul variants={detailItemVariants} className="space-y-2 text-gray-300 mb-4">
                        <li className="flex items-center gap-2">
                          <span className={cn("h-1.5 w-1.5 rounded-full", area.iconBg)}></span>
                          <span>تکنولوژی‌های پیشرفته</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className={cn("h-1.5 w-1.5 rounded-full", area.iconBg)}></span>
                          <span>راهکارهای بهینه‌سازی شده</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className={cn("h-1.5 w-1.5 rounded-full", area.iconBg)}></span>
                          <span>خدمات سفارشی‌سازی شده</span>
                        </li>
                      </motion.ul>
                      
                      <motion.div variants={detailItemVariants}>
                        <Button 
                          size="sm" 
                          className={cn(
                            "bg-white/10 hover:bg-white/20 text-white",
                            "border border-white/5"
                          )}
                        >
                          اطلاعات بیشتر
                        </Button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
          
          {/* بخش CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-20 text-center"
          >
            <Button 
              className="bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800 relative overflow-hidden group px-6 py-6 text-white"
            >
              <span className="relative z-10 flex items-center text-lg">
                مشاهده نمونه پروژه‌ها
                <ChevronRight className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 1 }}
              />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// تابع کمکی برای گرفتن رنگ محاسبه شده از کلاس تِیلویند
function getComputedColor(colorClass: string): string {
  switch(colorClass) {
    case 'text-blue-500': return '#3b82f6';
    case 'text-arminred-500': return '#ef4444';
    case 'text-emerald-500': return '#10b981';
    case 'text-amber-500': return '#f59e0b';
    case 'text-purple-500': return '#8b5cf6';
    case 'text-cyan-500': return '#06b6d4';
    default: return '#ef4444';
  }
}
