
import { motion, useScroll, useTransform } from "framer-motion";
import { usePersianNumbers } from "@/hooks/usePersianNumbers";
import { MessageSquare, FileCode2, BarChart4, Send } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useRef } from "react";

export const ProcessSection = () => {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  const steps = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "مشاوره و تحلیل",
      description: "بررسی دقیق نیازها و اهداف پروژه به همراه مشاوره تخصصی",
      color: "from-blue-500 to-blue-600",
      lightColor: "from-blue-500/20 to-blue-600/10",
      darkColor: "from-blue-600/50 to-blue-800/50"
    },
    {
      icon: <FileCode2 className="h-6 w-6" />,
      title: "توسعه و پیاده‌سازی",
      description: "طراحی و توسعه اصولی با استفاده از بهترین تکنولوژی‌ها",
      color: "from-purple-500 to-purple-600",
      lightColor: "from-purple-500/20 to-purple-600/10",
      darkColor: "from-purple-600/50 to-purple-800/50"
    },
    {
      icon: <BarChart4 className="h-6 w-6" />,
      title: "تست و بهینه‌سازی",
      description: "ارزیابی کیفیت، عملکرد و امنیت برای اطمینان از کارایی",
      color: "from-green-500 to-green-600",
      lightColor: "from-green-500/20 to-green-600/10",
      darkColor: "from-green-600/50 to-green-800/50"
    },
    {
      icon: <Send className="h-6 w-6" />,
      title: "تحویل و پشتیبانی",
      description: "ارائه محصول نهایی همراه با پشتیبانی مستمر و بروزرسانی",
      color: "from-arminred-500 to-arminred-600",
      lightColor: "from-arminred-500/20 to-arminred-600/10",
      darkColor: "from-arminred-600/50 to-arminred-800/50"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section 
      ref={containerRef}
      className="relative py-24 sm:py-32 md:py-40 bg-gradient-to-b from-background to-black overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      </div>
      
      <motion.div style={{ y }} className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-2">
            <span className="bg-arminred-500/10 text-arminred-500 text-xs font-medium px-2.5 py-1 rounded">چهار مرحله</span>
          </div>
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            {usePersianNumbers("فرآیند همکاری")}
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            روندی شفاف و کارآمد برای تبدیل ایده شما به واقعیت
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="relative"
            >
              <div className="h-full rounded-xl bg-black/60 backdrop-blur-xl border border-gray-800 hover:border-arminred-500/30 transition-all duration-300 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${step.darkColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Top decorative bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${step.color}`} />
                
                <div className="p-6 sm:p-7 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl mb-6 relative bg-gradient-to-br ${step.lightColor} flex items-center justify-center`}>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white`}>
                      {step.icon}
                    </div>
                    {/* Animated glow effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${step.color} opacity-0 filter blur-xl animate-pulse-glow`} />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <span className="w-8 h-8 bg-black/60 border border-gray-700 rounded-full flex items-center justify-center text-white font-bold text-sm ml-3">
                      {usePersianNumbers(index + 1)}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">{step.title}</h3>
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
              
              {/* Connection arrows between steps for desktop */}
              {!isMobile && index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <motion.div 
                    className="w-8 h-8 text-arminred-500"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 5L21 12M21 12L14 19M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Responsive connection lines for mobile/tablet */}
        {isMobile && (
          <div className="flex justify-center mt-6">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-8 bg-gradient-to-b from-arminred-500/20 to-arminred-500/40"></div>
              <div className="text-sm text-gray-400 py-2 bg-black/50 backdrop-blur-sm px-3 rounded-full border border-arminred-500/20">مسیر روند همکاری</div>
              <div className="w-0.5 h-8 bg-gradient-to-b from-arminred-500/40 to-arminred-500/20"></div>
            </div>
          </div>
        )}
      </motion.div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};
