
import { motion, useAnimation } from "framer-motion";
import { usePersianNumbers } from "@/hooks/usePersianNumbers";
import { useEffect, useState, useRef } from "react";
import { SkillCard } from "@/components/resume/SkillCard";
import { Shield, Bot, Cpu, Smartphone, Wrench, Zap } from "lucide-react";

export const SkillsShowcase = () => {
  const skills = [
    { name: "هک و امنیت سایبری", level: 90, icon: <Shield className="h-5 w-5 text-arminred-600" /> },
    { name: "هوش مصنوعی", level: 85, icon: <Bot className="h-5 w-5 text-arminred-600" /> },
    { name: "اتوماسیون", level: 87, icon: <Cpu className="h-5 w-5 text-arminred-600" /> },
    { name: "توسعه موبایل", level: 82, icon: <Smartphone className="h-5 w-5 text-arminred-600" /> },
    { name: "DevOps", level: 86, icon: <Wrench className="h-5 w-5 text-arminred-600" /> },
    { name: "بهینه‌سازی عملکرد", level: 89, icon: <Zap className="h-5 w-5 text-arminred-600" /> },
  ];

  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [progressValues, setProgressValues] = useState<number[]>(skills.map(() => 0));

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && !isInView) {
        setIsInView(true);
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
    };
    
    const observer = new IntersectionObserver(handleIntersection, { 
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls, isInView, skills]);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 bg-gradient-to-b from-background to-black overflow-hidden"
      id="skills-section"
    >
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
            {usePersianNumbers("مهارت‌های تخصصی")}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            تخصص‌های حرفه‌ای در زمینه‌های مختلف فناوری اطلاعات
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard 
              key={index}
              name={skill.name}
              level={progressValues[index]}
              icon={skill.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
