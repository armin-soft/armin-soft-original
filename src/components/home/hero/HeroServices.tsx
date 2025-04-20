
import { motion } from "framer-motion";
import { Code, Shield, Bot } from "lucide-react";

export const HeroServices = () => {
  const services = [
    { icon: <Code className="h-5 w-5" />, text: "توسعه نرم افزار" },
    { icon: <Shield className="h-5 w-5" />, text: "امنیت سایبری" },
    { icon: <Bot className="h-5 w-5" />, text: "هوش مصنوعی" }
  ];

  return (
    <motion.div 
      className="flex flex-wrap justify-center gap-2 pt-2"
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
          className="bg-white/5 backdrop-blur border border-white/10 px-4 py-2 rounded-full flex items-center gap-2"
        >
          {service.icon}
          <span className="text-sm text-gray-300">{service.text}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};
