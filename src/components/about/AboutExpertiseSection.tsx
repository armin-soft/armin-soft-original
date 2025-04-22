
import { motion } from "framer-motion";
import { Code, Shield, Bot, Server, Database, Cpu } from "lucide-react";

const expertiseAreas = [
  {
    icon: <Code className="h-8 w-8 text-arminred-500" />,
    title: "توسعه نرم‌افزار",
    description: "تخصص در زبان‌های برنامه‌نویسی متنوع و فریم‌ورک‌های مدرن برای ایجاد راهکارهای جامع"
  },
  {
    icon: <Shield className="h-8 w-8 text-arminred-500" />,
    title: "امنیت سایبری",
    description: "تامین امنیت سیستم‌ها با استفاده از تکنیک‌های پیشرفته و ابزارهای تخصصی"
  },
  {
    icon: <Bot className="h-8 w-8 text-arminred-500" />,
    title: "هوش مصنوعی",
    description: "بکارگیری الگوریتم‌های پیشرفته برای توسعه سیستم‌های هوشمند و خودکار"
  },
  {
    icon: <Server className="h-8 w-8 text-arminred-500" />,
    title: "زیرساخت ابری",
    description: "طراحی و پیاده‌سازی زیرساخت‌های ابری مقیاس‌پذیر و مقاوم"
  },
  {
    icon: <Database className="h-8 w-8 text-arminred-500" />,
    title: "مدیریت داده",
    description: "طراحی و بهینه‌سازی پایگاه‌های داده و سیستم‌های ذخیره‌سازی اطلاعات"
  },
  {
    icon: <Cpu className="h-8 w-8 text-arminred-500" />,
    title: "اتوماسیون",
    description: "طراحی سیستم‌های خودکار برای بهینه‌سازی فرآیندها و افزایش بهره‌وری"
  }
];

export function AboutExpertiseSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-arminred-900/5 to-transparent opacity-30"></div>
      <div className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 inline-block"
          >
            حوزه‌های تخصصی
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-gradient-to-r from-arminred-600 to-purple-600 mx-auto mt-4 mb-6"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            زمینه‌های اصلی تخصص و مهارت‌های فنی من در حوزه‌های مختلف فناوری اطلاعات
          </motion.p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 shadow-xl hover:shadow-arminred-500/5 hover:border-arminred-500/30 transition-all duration-300"
            >
              <div className="mb-4 bg-gradient-to-br from-black/60 to-gray-900/60 p-4 rounded-lg inline-block">
                {area.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>
              <p className="text-gray-400">{area.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
