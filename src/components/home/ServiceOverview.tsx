
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code, Shield, Bot, Server, Database, Monitor, Cloud, Smartphone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const ServiceOverview = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "توسعه نرم افزار",
      description: "طراحی و توسعه انواع نرم‌افزارهای تحت وب با جدیدترین تکنولوژی‌ها",
      link: "/service",
      color: "from-blue-500/20 to-blue-600/5"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "امنیت و هک اخلاقی",
      description: "تست نفوذ، ارزیابی امنیتی و مشاوره در زمینه امنیت سایبری",
      link: "/service",
      color: "from-arminred-500/20 to-arminred-600/5"
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "هوش مصنوعی",
      description: "پیاده‌سازی سیستم‌های هوشمند و یادگیری ماشین در کسب و کار شما",
      link: "/service",
      color: "from-purple-500/20 to-purple-600/5"
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "خدمات سرور",
      description: "مدیریت، بهینه‌سازی و امن‌سازی سرورها و زیرساخت‌های شبکه",
      link: "/service",
      color: "from-green-500/20 to-green-600/5"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "مدیریت دیتابیس",
      description: "طراحی، بهینه‌سازی و مدیریت انواع پایگاه‌های داده رابطه‌ای و NoSQL",
      link: "/service",
      color: "from-amber-500/20 to-amber-600/5"
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "طراحی رابط کاربری",
      description: "طراحی رابط کاربری زیبا و کاربردی با تمرکز بر تجربه کاربری",
      link: "/service",
      color: "from-cyan-500/20 to-cyan-600/5"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "خدمات کلود",
      description: "پیاده‌سازی و مدیریت زیرساخت‌های ابری با AWS، Google Cloud و Azure",
      link: "/service",
      color: "from-indigo-500/20 to-indigo-600/5"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "توسعه اپلیکیشن‌های موبایل",
      description: "طراحی و توسعه اپلیکیشن‌های iOS و اندروید با فلاتر و React Native",
      link: "/service",
      color: "from-rose-500/20 to-rose-600/5"
    }
  ];

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link to={service.link} className="block h-full">
                <Card className="p-6 h-full bg-black/50 backdrop-blur-xl border-gray-800 hover:border-arminred-500/50 transition-all duration-300 group relative overflow-hidden">
                  <div className="flex flex-col items-center text-center h-full relative z-10">
                    <div className={`mb-4 p-4 rounded-xl bg-gradient-to-br ${service.color} group-hover:from-arminred-500/20 group-hover:to-arminred-600/5 transition-colors duration-300`}>
                      <motion.div
                        animate={{ rotate: [0, 5, 0, -5, 0] }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut"
                        }}
                      >
                        {service.icon}
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-arminred-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                      {service.description}
                    </p>
                  </div>

                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-arminred-500/0 to-arminred-600/0 group-hover:from-arminred-500/5 group-hover:to-arminred-600/0 transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  
                  {/* Bottom highlight line */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-arminred-500 group-hover:w-full transition-all duration-500" />
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
          className="flex justify-center mt-12"
        >
          <Link 
            to="/service"
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur text-white hover:bg-white/10 transition-colors px-6 py-2.5 rounded-full border border-gray-700"
          >
            <span>مشاهده همه خدمات</span>
            <ArrowRight className="h-5 w-5 text-arminred-500" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
