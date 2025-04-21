
import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Users, Code2, Shield, Clock } from "lucide-react";
import { toPersianNumbers } from "@/utils/numberUtils";
import { useRef } from "react";

export const HomeStats = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);
  
  const stats = [
    {
      icon: <Users className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />,
      value: toPersianNumbers(69),
      label: "مشتری راضی",
      color: "from-blue-600 to-blue-400",
      colorLight: "from-blue-500/20 to-blue-400/20"
    },
    {
      icon: <Code2 className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />,
      value: toPersianNumbers(42),
      label: "پروژه موفق",
      color: "from-green-600 to-green-400",
      colorLight: "from-green-500/20 to-green-400/20"
    },
    {
      icon: <Shield className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />,
      value: "۱۰۰%",
      label: "تضمین امنیت",
      color: "from-arminred-600 to-arminred-400",
      colorLight: "from-arminred-500/20 to-arminred-400/20"
    },
    {
      icon: <Clock className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />,
      value: toPersianNumbers(10),
      label: "سال تجربه",
      color: "from-purple-600 to-purple-400",
      colorLight: "from-purple-500/20 to-purple-400/20"
    },
  ];

  return (
    <section 
      ref={containerRef}
      className="relative py-16 sm:py-20 overflow-hidden bg-black" 
      id="services-section"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
      
      <motion.div style={{ y, opacity }} className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block mb-2 px-3 py-1 rounded-full bg-arminred-500/10 text-arminred-500 text-sm font-medium">
            آمار و ارقام
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            ما به نتایج افتخار می‌کنیم
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            نگاهی به آمار عملکرد و دستاوردهای ما در طول سال‌های فعالیت
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="p-4 sm:p-5 md:p-6 bg-black/50 backdrop-blur-xl border-gray-800 hover:border-arminred-500/30 transition-all duration-300 relative overflow-hidden group">
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className={`mb-4 w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.colorLight} flex items-center justify-center`}>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-white`}>
                      {stat.icon}
                    </div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 farsi-numbers bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-sm sm:text-base text-gray-400">{stat.label}</p>
                </div>
                
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-arminred-500/70 to-transparent" />
                  <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-transparent via-arminred-500/70 to-transparent" />
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-arminred-500/70 to-transparent" />
                  <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-transparent via-arminred-500/70 to-transparent" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
