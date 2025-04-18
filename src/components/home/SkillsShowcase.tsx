
import { motion, useAnimation } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Shield, Bot, Server, Database, Cpu, Smartphone, Globe, Wrench, Zap } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export const SkillsShowcase = () => {
  const skills = [
    { name: "برنامه‌نویسی بک‌اند", level: 95, icon: <Code className="h-5 w-5 text-arminred-600" /> },
    { name: "هک و امنیت سایبری", level: 90, icon: <Shield className="h-5 w-5 text-arminred-600" /> },
    { name: "هوش مصنوعی", level: 85, icon: <Bot className="h-5 w-5 text-arminred-600" /> },
    { name: "طراحی API", level: 88, icon: <Server className="h-5 w-5 text-arminred-600" /> },
    { name: "مدیریت دیتابیس", level: 92, icon: <Database className="h-5 w-5 text-arminred-600" /> },
    { name: "اتوماسیون", level: 87, icon: <Cpu className="h-5 w-5 text-arminred-600" /> },
    { name: "توسعه موبایل", level: 82, icon: <Smartphone className="h-5 w-5 text-arminred-600" /> },
    { name: "طراحی وب", level: 80, icon: <Globe className="h-5 w-5 text-arminred-600" /> },
    { name: "DevOps", level: 86, icon: <Wrench className="h-5 w-5 text-arminred-600" /> },
    { name: "بهینه‌سازی عملکرد", level: 89, icon: <Zap className="h-5 w-5 text-arminred-600" /> },
  ];

  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [progressValues, setProgressValues] = useState<number[]>(skills.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start("visible");
          
          // Animate progress bars
          const timers = skills.map((skill, index) => {
            return setTimeout(() => {
              setProgressValues(prev => {
                const newValues = [...prev];
                newValues[index] = skill.level;
                return newValues;
              });
            }, 200 + index * 100);
          });
          
          return () => {
            timers.forEach(timer => clearTimeout(timer));
          };
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls, skills]);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section ref={sectionRef} className="relative py-32 bg-gradient-to-b from-background to-black overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInUpVariants}
          className="text-center mb-16"
        >
          <div className="inline-block mb-2">
            <span className="bg-arminred-500/10 text-arminred-500 text-xs font-medium px-2.5 py-1 rounded">مهارت‌ها</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            مهارت‌های تخصصی
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            تخصص‌های حرفه‌ای در زمینه‌های مختلف فناوری اطلاعات
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1, 
                  y: 0, 
                  transition: { duration: 0.5, delay: index * 0.1 }
                }
              }}
            >
              <Card className="bg-black/50 backdrop-blur-xl border-gray-800 hover:border-arminred-500/50 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {skill.icon}
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground farsi-numbers">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={progressValues[index]} 
                    className="h-2 bg-white/10" 
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 p-8 rounded-xl bg-black/50 backdrop-blur-xl border border-gray-800"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } }
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <h3 className="text-xl font-bold mb-1">تکنولوژی‌های بک‌اند</h3>
              <p className="text-gray-400 text-sm">Python، PHP، Node.js، Java، Go</p>
            </div>
            <div className="text-center p-4">
              <h3 className="text-xl font-bold mb-1">فریم‌ورک‌های فرانت‌اند</h3>
              <p className="text-gray-400 text-sm">React، Vue، Next.js، Angular، Svelte</p>
            </div>
            <div className="text-center p-4">
              <h3 className="text-xl font-bold mb-1">دیتابیس‌ها</h3>
              <p className="text-gray-400 text-sm">MySQL، PostgreSQL، MongoDB، Redis، ElasticSearch</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
