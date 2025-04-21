
import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code, Shield, Bot, Server, Database, Monitor, Cloud, Smartphone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

export const ServiceOverview = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "توسعه نرم افزار",
      description: "طراحی و توسعه انواع نرم‌افزارهای تحت وب با جدیدترین تکنولوژی‌ها",
      color: "from-blue-500/20 to-blue-600/5",
      hoverColor: "from-blue-500/30 to-blue-600/10",
      borderColor: "blue-500/50"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "امنیت و هک اخلاقی",
      description: "تست نفوذ، ارزیابی امنیتی و مشاوره در زمینه امنیت سایبری",
      color: "from-arminred-500/20 to-arminred-600/5",
      hoverColor: "from-arminred-500/30 to-arminred-600/10",
      borderColor: "arminred-500/50"
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "هوش مصنوعی",
      description: "پیاده‌سازی سیستم‌های هوشمند و یادگیری ماشین در کسب و کار شما",
      color: "from-purple-500/20 to-purple-600/5",
      hoverColor: "from-purple-500/30 to-purple-600/10",
      borderColor: "purple-500/50"
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "خدمات سرور",
      description: "مدیریت، بهینه‌سازی و امن‌سازی سرورها و زیرساخت‌های شبکه",
      color: "from-green-500/20 to-green-600/5",
      hoverColor: "from-green-500/30 to-green-600/10",
      borderColor: "green-500/50"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "مدیریت دیتابیس",
      description: "طراحی، بهینه‌سازی و مدیریت انواع پایگاه‌های داده رابطه‌ای و NoSQL",
      color: "from-amber-500/20 to-amber-600/5",
      hoverColor: "from-amber-500/30 to-amber-600/10",
      borderColor: "amber-500/50"
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "طراحی رابط کاربری",
      description: "طراحی رابط کاربری زیبا و کاربردی با تمرکز بر تجربه کاربری",
      color: "from-cyan-500/20 to-cyan-600/5",
      hoverColor: "from-cyan-500/30 to-cyan-600/10",
      borderColor: "cyan-500/50"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "خدمات کلود",
      description: "پیاده‌سازی و مدیریت زیرساخت‌های ابری با AWS، Google Cloud و Azure",
      color: "from-indigo-500/20 to-indigo-600/5",
      hoverColor: "from-indigo-500/30 to-indigo-600/10",
      borderColor: "indigo-500/50"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "توسعه اپلیکیشن‌های موبایل",
      description: "طراحی و توسعه اپلیکیشن‌های iOS و اندروید با فلاتر و React Native",
      color: "from-rose-500/20 to-rose-600/5",
      hoverColor: "from-rose-500/30 to-rose-600/10",
      borderColor: "rose-500/50"
    }
  ];
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5
      }
    }),
    hover: { y: -10, transition: { duration: 0.2 } }
  };

  return (
    <section 
      ref={containerRef} 
      className="relative py-32 bg-black overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>
      
      <motion.div style={{ y }} className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-2">
            <span className="bg-arminred-500/10 text-arminred-500 text-xs font-medium px-2.5 py-1 rounded">خدمات تخصصی</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            راهکارهای حرفه‌ای
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            ارائه خدمات تخصصی در زمینه‌های مختلف فناوری اطلاعات
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <Link to="/service" className="block h-full">
                <Card className="p-6 h-full bg-black/60 backdrop-blur-xl border border-gray-800 hover:border-arminred-500/50 transition-all duration-300 overflow-hidden group relative">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} group-hover:${service.hoverColor} transition-all duration-300 opacity-50`} />
                  
                  {/* Top light beam */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-white blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
                  
                  {/* Content */}
                  <div className="flex flex-col items-center text-center h-full relative z-10">
                    <div className={`mb-4 p-4 rounded-xl bg-gradient-to-br ${service.color} group-hover:${service.hoverColor} transition-colors duration-300 relative`}>
                      <motion.div
                        animate={{ rotate: [0, 5, 0, -5, 0] }}
                        transition={{ duration: 6, repeat: Infinity }}
                        className="relative z-10"
                      >
                        {service.icon}
                      </motion.div>
                      <div className="absolute inset-0 bg-white/5 rounded-xl filter blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-arminred-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                      {service.description}
                    </p>
                    
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="inline-flex items-center gap-1 text-xs text-arminred-500">
                        <span>بیشتر بدانید</span>
                        <motion.div
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="h-3 w-3" />
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-arminred-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-arminred-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-16"
        >
          <Link 
            to="/service"
            className="relative inline-flex items-center gap-2 overflow-hidden"
          >
            <span className="relative z-10 px-6 py-3 bg-white/5 backdrop-blur text-white hover:bg-white/10 transition-colors rounded-full border border-gray-700 group">
              <span className="flex items-center gap-2">
                <span>مشاهده همه خدمات</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="h-5 w-5 text-arminred-500" />
                </motion.div>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-arminred-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};
