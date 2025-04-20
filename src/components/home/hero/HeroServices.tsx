
import { motion } from "framer-motion";
import { Code, Shield, Bot, Zap, Server, Smartphone, Database, Cloud } from "lucide-react";

export const HeroServices = () => {
  const services = [
    { icon: <Code className="h-4 w-4 md:h-5 md:w-5" />, text: "توسعه نرم افزار" },
    { icon: <Shield className="h-4 w-4 md:h-5 md:w-5" />, text: "امنیت سایبری" },
    { icon: <Bot className="h-4 w-4 md:h-5 md:w-5" />, text: "هوش مصنوعی" },
    { icon: <Zap className="h-4 w-4 md:h-5 md:w-5" />, text: "بهینه‌سازی" },
    { icon: <Server className="h-4 w-4 md:h-5 md:w-5" />, text: "خدمات ابری" },
    { icon: <Smartphone className="h-4 w-4 md:h-5 md:w-5" />, text: "توسعه موبایل" },
    { icon: <Database className="h-4 w-4 md:h-5 md:w-5" />, text: "مدیریت داده" },
    { icon: <Cloud className="h-4 w-4 md:h-5 md:w-5" />, text: "رایانش ابری" }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <motion.div 
      className="flex flex-wrap justify-center gap-2 md:gap-3 pt-3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ 
            scale: 1.05, 
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            boxShadow: '0 0 20px rgba(239, 68, 68, 0.25)' 
          }}
          className="bg-white/5 backdrop-blur border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 transition-all duration-300 cursor-pointer"
        >
          <span className="text-arminred-500">{service.icon}</span>
          <span className="text-xs md:text-sm text-gray-300">{service.text}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};
