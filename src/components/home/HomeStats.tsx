
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Users, Code2, Shield, Clock } from "lucide-react";

export const HomeStats = () => {
  const stats = [
    {
      icon: <Users className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-arminred-500" />,
      value: "۶۹+",
      label: "مشتری راضی",
    },
    {
      icon: <Code2 className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-arminred-500" />,
      value: "۴۲+",
      label: "پروژه موفق",
    },
    {
      icon: <Shield className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-arminred-500" />,
      value: "۱۰۰%",
      label: "تضمین امنیت",
    },
    {
      icon: <Clock className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-arminred-500" />,
      value: "۱۰+",
      label: "سال تجربه",
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 overflow-hidden bg-black" id="services-section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-3 sm:p-4 md:p-6 bg-black/50 backdrop-blur-xl border-gray-800 hover:border-arminred-500/30 transition-all duration-300 relative overflow-hidden group">
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="mb-2 sm:mb-3 text-arminred-500">{stat.icon}</div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="text-xl sm:text-2xl md:text-4xl font-bold mb-1 farsi-numbers"
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-400">{stat.label}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-arminred-600/0 via-arminred-600/5 to-arminred-600/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
