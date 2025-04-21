
import React from "react";
import { motion } from "framer-motion";
import { BriefcaseBusiness, Zap, Award, Shield } from "lucide-react";
import { StatItem } from "./StatItem";
import { toPersianNumbers } from "@/utils/numberUtils";

export function ResumeStatsSection() {
  return (
    <section className="relative z-10 py-20">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
      <div className="container px-4 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            آمار و ارقام کلیدی
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-arminred-500 to-transparent rounded-full mx-auto"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatItem 
            value={toPersianNumbers(5)}
            label="سال تجربه" 
            icon={<BriefcaseBusiness className="h-6 w-6 text-arminred-500" />}
            delay={0.1}
          />
          <StatItem 
            value={toPersianNumbers(75)}
            label="پروژه موفق" 
            icon={<Zap className="h-6 w-6 text-arminred-500" />}
            delay={0.2}
          />
          <StatItem 
            value={toPersianNumbers(50)}
            label="مشتری راضی" 
            icon={<Award className="h-6 w-6 text-arminred-500" />}
            delay={0.3}
          />
          <StatItem 
            value="۱۰۰%"
            label="تضمین امنیت" 
            icon={<Shield className="h-6 w-6 text-arminred-500" />}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}
