
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code, Shield, Bot, Server } from "lucide-react";
import { Link } from "react-router-dom";

export const ServiceOverview = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "توسعه نرم‌افزار",
      description: "طراحی و توسعه انواع نرم‌افزارهای تحت وب با جدیدترین تکنولوژی‌ها",
      link: "/service#software"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "امنیت و هک اخلاقی",
      description: "تست نفوذ، ارزیابی امنیتی و مشاوره در زمینه امنیت سایبری",
      link: "/service#security"
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "هوش مصنوعی",
      description: "پیاده‌سازی سیستم‌های هوشمند و یادگیری ماشین در کسب و کار شما",
      link: "/service#ai"
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "خدمات سرور",
      description: "مدیریت، بهینه‌سازی و امن‌سازی سرورها و زیرساخت‌های شبکه",
      link: "/service#server"
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-black to-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            خدمات تخصصی
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            ارائه راهکارهای حرفه‌ای در زمینه‌های مختلف فناوری اطلاعات
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={service.link}>
                <Card className="p-6 h-full bg-black/50 backdrop-blur-xl border-gray-800 hover:border-arminred-500/50 transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 rounded-xl bg-gradient-to-br from-arminred-500/20 to-arminred-500/5 group-hover:from-arminred-500/30 group-hover:to-arminred-500/10 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
