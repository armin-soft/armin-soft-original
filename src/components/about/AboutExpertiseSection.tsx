
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Code, Shield, Bot, Server, Database, Cpu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

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
    badges: ["React", "Node.js", "PHP", "Laravel"]
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
    badges: ["تست نفوذ", "OWASP", "فایروال", "رمزنگاری"]
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
    badges: ["یادگیری ماشین", "NLP", "شبکه عصبی", "پایتون"]
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
    badges: ["Docker", "کوبرنتیز", "AWS", "DevOps"]
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
    badges: ["MySQL", "MongoDB", "PostgreSQL", "Redis"]
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
    badges: ["CI/CD", "اسکریپت‌نویسی", "تست خودکار", "مانیتورینگ"]
  }
];

export function AboutExpertiseSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, 60]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  
  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="py-28 md:py-36 relative overflow-hidden bg-black" id="expertise">
      <motion.div 
        style={{ opacity, y, scale }}
        className="relative z-10"
        ref={containerRef}
      >
        {/* Decorative elements */}
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-arminred-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>
        
        {/* Grid pattern background */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] opacity-30"></div>
        
        {/* Main content */}
        <div className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10">
          {/* Section header */}
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
              className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300 mb-6"
            >
              حوزه‌های تخصصی
            </motion.h2>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={isVisible ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 w-24 bg-gradient-to-r from-arminred-600 to-purple-600 mx-auto my-6 rounded-full overflow-hidden"
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
          
          {/* Expertise cards grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  transition: { duration: 0.3 } 
                }}
                onHoverStart={() => setActiveIndex(index)}
                onHoverEnd={() => setActiveIndex(null)}
                className={cn(
                  "group relative overflow-hidden rounded-2xl transition-all duration-500",
                  "backdrop-blur-lg border border-white/10",
                  "hover:border-transparent hover:shadow-2xl",
                  area.shadowColor
                )}
              >
                {/* Animated gradient background */}
                <div className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  `bg-gradient-to-br ${area.color}`
                )} />
                
                {/* Animated border */}
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 border-2 border-white/20 rounded-2xl"
                    >
                      <motion.div 
                        className={`absolute h-full w-1 ${area.borderColor} left-0 top-0`}
                        initial={{ height: "0%" }}
                        animate={{ height: "100%" }}
                        exit={{ height: "0%" }}
                        transition={{ duration: 0.4 }}
                      />
                      <motion.div 
                        className={`absolute h-1 w-full ${area.borderColor} left-0 bottom-0`}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        exit={{ width: "0%" }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      />
                      <motion.div 
                        className={`absolute h-full w-1 ${area.borderColor} right-0 top-0`}
                        initial={{ height: "0%" }}
                        animate={{ height: "100%" }}
                        exit={{ height: "0%" }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      />
                      <motion.div 
                        className={`absolute h-1 w-full ${area.borderColor} left-0 top-0`}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        exit={{ width: "0%" }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Card content */}
                <div className="p-8 relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={cn(
                      "mb-6 p-4 rounded-xl inline-block",
                      area.iconBg,
                      "group-hover:bg-white/10 transition-colors duration-300"
                    )}
                  >
                    <area.icon className={cn("h-8 w-8", area.textColor, area.hoverColor)} />
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className={cn(
                    "text-xl md:text-2xl font-bold mb-3 transition-colors duration-300",
                    "text-white group-hover:text-white"
                  )}>
                    {area.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-6 flex-grow">
                    {area.description}
                  </p>
                  
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mt-auto mb-4">
                    {area.badges.map((badge) => (
                      <Badge 
                        key={badge} 
                        className={cn(
                          "bg-white/5 text-gray-300 border-0 hover:bg-white/10",
                          "transition-all duration-300"
                        )}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Action button */}
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
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        className="inline-block ml-1"
                      >
                        <ArrowRight className="h-4 w-4 inline-block" />
                      </motion.div>
                    </Button>
                  </div>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-white/10 group-hover:border-white/30 rounded-tr-md transition-colors duration-500" />
                  <div className="absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 border-white/10 group-hover:border-white/30 rounded-bl-md transition-colors duration-500" />
                </div>
                
                {/* Glow effect */}
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${getComputedColor(area.textColor)}, transparent 70%)`
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
          
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <Button 
              className="bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800 relative overflow-hidden group px-6 py-6 text-white"
            >
              <span className="relative z-10 flex items-center text-lg">
                مشاهده نمونه پروژه‌ها
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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

// Helper function to get computed color from Tailwind class
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
