
import { motion, useAnimation } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Users, Code2, Shield, Clock, BarChart3, Award } from "lucide-react";
import { toPersianNumbers } from "@/utils/numberUtils";
import { useEffect, useRef, useState } from "react";

export const HomeStats = () => {
  const stats = [
    {
      icon: <Users className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-arminred-500" />,
      value: toPersianNumbers(69),
      label: "مشتری راضی",
      plusSign: true
    },
    {
      icon: <Code2 className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-arminred-500" />,
      value: toPersianNumbers(42),
      label: "پروژه موفق",
      plusSign: true
    },
    {
      icon: <Shield className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-arminred-500" />,
      value: "۱۰۰%",
      label: "تضمین امنیت",
      plusSign: false
    },
    {
      icon: <Clock className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-arminred-500" />,
      value: toPersianNumbers(10),
      label: "سال تجربه",
      plusSign: true
    },
    {
      icon: <BarChart3 className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-arminred-500" />,
      value: toPersianNumbers(94),
      label: "نرخ رضایت‌مندی",
      plusSign: false
    },
    {
      icon: <Award className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-arminred-500" />,
      value: toPersianNumbers(7),
      label: "جوایز و افتخارات",
      plusSign: true
    }
  ];

  const controls = useAnimation();
  const statsRef = useRef<HTMLDivElement>(null);
  const [viewportEntered, setViewportEntered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !viewportEntered) {
          setViewportEntered(true);
          controls.start("visible");
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [controls, viewportEntered]);

  return (
    <section 
      ref={statsRef} 
      className="relative py-16 sm:py-20 overflow-hidden bg-gradient-to-b from-black to-gray-950" 
      id="services-section"
    >
      <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:60px_60px]" />
      
      <div className="relative container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block mb-2">
            <span className="bg-arminred-500/10 text-arminred-500 text-xs font-medium px-2.5 py-1 rounded-md">
              دستاوردها
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            آمار و ارقام فعالیت‌های ما
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            عملکرد ما را با اعداد و ارقام بسنجید - کیفیت و کمیت را در کنار هم ارائه می‌دهیم
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5, delay: index * 0.1 } 
                }
              }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <Card className="p-3 sm:p-4 md:p-6 bg-black/50 backdrop-blur-xl border-gray-800 hover:border-arminred-500/30 transition-all duration-300 relative overflow-hidden group">
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="mb-2 sm:mb-3 p-2 rounded-full bg-arminred-500/10">{stat.icon}</div>
                  <motion.div
                    className="text-xl sm:text-2xl md:text-4xl font-bold mb-1 farsi-numbers flex items-center justify-center"
                    initial={{ opacity: viewportEntered ? 0 : 1, scale: viewportEntered ? 0.8 : 1 }}
                    animate={viewportEntered ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    {stat.value}
                    {stat.plusSign && <span className="text-arminred-500 mr-1">+</span>}
                  </motion.div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-400">{stat.label}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-arminred-600/0 via-arminred-600/5 to-arminred-600/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-arminred-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
