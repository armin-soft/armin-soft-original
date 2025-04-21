
import { motion, useAnimation, useInView } from "framer-motion";
import { usePersianNumbers } from "@/hooks/usePersianNumbers";
import { useEffect, useState, useRef } from "react";
import { SkillCard } from "@/components/resume/SkillCard";
import { Shield, Bot, Cpu, Smartphone, Wrench, Zap, Code, Database, Globe, Server } from "lucide-react";

export const SkillsShowcase = () => {
  const skills = [
    { name: "هک و امنیت سایبری", level: 90, icon: <Shield className="h-5 w-5 text-arminred-600" /> },
    { name: "هوش مصنوعی", level: 85, icon: <Bot className="h-5 w-5 text-arminred-600" /> },
    { name: "اتوماسیون", level: 87, icon: <Cpu className="h-5 w-5 text-arminred-600" /> },
    { name: "توسعه موبایل", level: 82, icon: <Smartphone className="h-5 w-5 text-arminred-600" /> },
    { name: "DevOps", level: 86, icon: <Wrench className="h-5 w-5 text-arminred-600" /> },
    { name: "بهینه‌سازی عملکرد", level: 89, icon: <Zap className="h-5 w-5 text-arminred-600" /> },
    { name: "توسعه بک‌اند", level: 92, icon: <Code className="h-5 w-5 text-arminred-600" /> },
    { name: "مدیریت دیتابیس", level: 88, icon: <Database className="h-5 w-5 text-arminred-600" /> },
    { name: "توسعه وب", level: 84, icon: <Globe className="h-5 w-5 text-arminred-600" /> },
    { name: "مدیریت سرور", level: 91, icon: <Server className="h-5 w-5 text-arminred-600" /> },
  ];

  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [isAnimated, setIsAnimated] = useState(false);
  const [progressValues, setProgressValues] = useState<number[]>(skills.map(() => 0));

  useEffect(() => {
    if (inView && !isAnimated) {
      setIsAnimated(true);
      controls.start("visible");
      
      skills.forEach((skill, index) => {
        setTimeout(() => {
          setProgressValues(prev => {
            const newValues = [...prev];
            newValues[index] = skill.level;
            return newValues;
          });
        }, 200 + index * 100);
      });
    }
  }, [inView, controls, isAnimated, skills]);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const wrapperVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 bg-gradient-to-b from-background to-black overflow-hidden"
      id="skills-section"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/70 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInUpVariants}
          className="text-center mb-16"
        >
          <div className="inline-block mb-2">
            <span className="bg-arminred-500/10 text-arminred-500 text-xs font-medium px-2.5 py-1 rounded">مهارت‌ها</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            {usePersianNumbers("مهارت‌های تخصصی")}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            تخصص‌های حرفه‌ای در زمینه‌های مختلف فناوری اطلاعات
          </p>
        </motion.div>

        <motion.div 
          variants={wrapperVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <SkillCard 
                name={skill.name}
                level={progressValues[index]}
                icon={skill.icon}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-3 border border-arminred-500/30 rounded-lg bg-gradient-to-r from-arminred-500/5 to-black/20 backdrop-blur-sm">
            <p className="text-gray-300">
              مهارت‌های تخصصی خود را با سال‌ها تجربه در پروژه‌های مختلف توسعه داده‌ام
            </p>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute -bottom-10 right-0 left-0 h-40 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  );
};
