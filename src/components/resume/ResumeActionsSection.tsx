
import React from "react";
import { motion } from "framer-motion";
import { BriefcaseBusiness, Shield, Code, Brain, Server, Database } from "lucide-react";

export function ResumeActionsSection() {
  return (
    <section className="relative z-10 py-14 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6 relative inline-block section-title">
              اقدامات
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-arminred-500 to-transparent"></span>
            </h2>
            <div className="space-y-6 text-base leading-8 text-gray-300">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="p-5 rounded-lg border border-gray-800 bg-black/50 backdrop-blur-sm hover:border-arminred-500/50 transition-all duration-300 group"
              >
                <span className="font-semibold text-arminred-500 flex items-center gap-2 mb-2">
                  <BriefcaseBusiness className="w-4 h-4" />
                  موقعیت شغلی:
                </span>
                <p className="group-hover:text-white transition-colors">
                  کارمند بخش نرم افزاری و امنیتی آمبرلا در کشور فرانسه در منطقه پاریس هستم.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="p-5 rounded-lg border border-gray-800 bg-black/50 backdrop-blur-sm hover:border-arminred-500/50 transition-all duration-300 group"
              >
                <span className="font-semibold text-arminred-500 flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4" />
                  هک و امنیت:
                </span>
                <p className="group-hover:text-white transition-colors">
                  بصورت تخصصی یک سرور یا ابزار را مورد بررسی قرار می‌دهم و در صورت کشف باگ به مدیران گزارش می‌کنم.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="p-5 rounded-lg border border-gray-800 bg-black/50 backdrop-blur-sm hover:border-arminred-500/50 transition-all duration-300 group"
              >
                <span className="font-semibold text-arminred-500 flex items-center gap-2 mb-2">
                  <Code className="w-4 h-4" />
                  تجربیات:
                </span>
                <p className="group-hover:text-white transition-colors">
                  به عنوان توسعه‌دهنده بک‌اند کدنویسی می‌کنم و هیچ علاقه‌ای به فرانت‌اند ندارم.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="p-5 rounded-lg border border-gray-800 bg-black/50 backdrop-blur-sm hover:border-arminred-500/50 transition-all duration-300 group"
              >
                <span className="font-semibold text-arminred-500 flex items-center gap-2 mb-2">
                  <Brain className="w-4 h-4" />
                  الگوی ذهنی:
                </span>
                <p className="group-hover:text-white transition-colors">
                  هر آن چیزی که در ذهن شما خطور پیدا می‌کند با استفاده از هوش مصنوعی در پلتفرم‌های خاص طراحی می‌شود.
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* سمت راست: المنت‌های تزئینی */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-arminred-500/5 rounded-full filter blur-[100px] z-0"></div>
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="grid grid-cols-2 gap-8 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-arminred-500/20 to-transparent rounded-lg filter blur-[30px] z-0 opacity-60"></div>
                {['Server', 'Security', 'Backend', 'API'].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative z-10 p-6 rounded-xl border border-gray-800 bg-black/70 backdrop-blur-xl shadow-lg hover:border-arminred-500/40 transition-all duration-300 group"
                  >
                    <div className="mb-3">
                      {index === 0 && <Server className="w-10 h-10 text-arminred-500/80" />}
                      {index === 1 && <Shield className="w-10 h-10 text-arminred-500/80" />}
                      {index === 2 && <Code className="w-10 h-10 text-arminred-500/80" />}
                      {index === 3 && <Database className="w-10 h-10 text-arminred-500/80" />}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-arminred-500 transition-colors">{item}</h3>
                    <div className="h-1 w-12 bg-gradient-to-r from-arminred-500 to-transparent rounded-full"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
