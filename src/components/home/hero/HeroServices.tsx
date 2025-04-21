
import { motion } from "framer-motion";
import { Code, Shield, Bot, Database, Server, LayoutGrid } from "lucide-react";

export const HeroServices = () => {
  const services = [
    { icon: <Code className="h-5 w-5" />, text: "توسعه نرم افزار" },
    { icon: <Shield className="h-5 w-5" />, text: "امنیت سایبری" },
    { icon: <Bot className="h-5 w-5" />, text: "هوش مصنوعی" },
    { icon: <Database className="h-5 w-5" />, text: "مدیریت داده" },
    { icon: <Server className="h-5 w-5" />, text: "خدمات سرور" },
    { icon: <LayoutGrid className="h-5 w-5" />, text: "طراحی سیستم" }
  ];

  return (
    <motion.div 
      className="flex flex-wrap justify-center gap-3 pt-3"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + (index * 0.1) }}
          whileHover={{ y: -5, scale: 1.05 }}
          className="bg-gradient-to-r from-black/70 to-black/40 backdrop-blur-lg border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg shadow-arminred-900/10"
        >
          <div className="bg-arminred-500/20 p-1.5 rounded-full">
            {service.icon}
          </div>
          <span className="text-sm text-gray-300">{service.text}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};
