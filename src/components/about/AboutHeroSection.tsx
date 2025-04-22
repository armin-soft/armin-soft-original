
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { BadgeCheck, ExternalLink, Heart, Code, Shield, ChevronDown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { AboutHeroTags } from "@/components/about/AboutHeroTags";

export function AboutHeroSection() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  
  const [isVisible, setIsVisible] = useState(false);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  
  const skills = [
    { icon: Code, text: "برنامه‌نویسی وب", color: "text-blue-500", bg: "bg-blue-500/10" },
    { icon: Shield, text: "امنیت سایبری", color: "text-arminred-500", bg: "bg-arminred-500/10" },
    { icon: Heart, text: "طراحی تجربه کاربری", color: "text-pink-500", bg: "bg-pink-500/10" },
    { icon: Star, text: "هوش مصنوعی", color: "text-amber-500", bg: "bg-amber-500/10" },
  ];

  const tags = [
    "React.js", "Next.js", "Node.js", "PHP", "Python", 
    "Laravel", "Django", "امنیت", "UI/UX", "هوش مصنوعی"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated parallax background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-arminred-950/20 via-black to-black" />
        
        <motion.div 
          className="absolute inset-0"
          style={{ 
            y: useTransform(scrollYProgress, [0, 1], [0, 300]),
            opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0.2])
          }}
        >
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-arminred-900/20 via-black to-transparent" />
        </motion.div>
        
        <motion.div 
          className="absolute inset-0 bg-[url('/grid.svg')] bg-center"
          style={{ 
            opacity: useTransform(scrollYProgress, [0, 0.5], [0.2, 0.05]),
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.2])
          }}
        />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-white/20"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: Math.random() * 0.5 + 0.2
              }}
              animate={{ 
                y: [
                  Math.random() * 100 + "%", 
                  Math.random() * 100 + "%"
                ],
                opacity: [
                  Math.random() * 0.5 + 0.2,
                  Math.random() * 0.3 + 0.1
                ]
              }}
              transition={{ 
                duration: Math.random() * 10 + 10, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          {/* Title section with animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
            style={{ y, scale }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.3,
                type: "spring",
                stiffness: 100
              }}
            >
              <Badge 
                className="px-4 py-2 text-lg bg-gradient-to-r from-arminred-500/20 to-arminred-600/20 border border-arminred-500/30 backdrop-blur-sm shadow-lg shadow-arminred-500/5"
              >
                <BadgeCheck className="w-5 h-5 ml-2 text-arminred-400" />
                توسعه‌دهنده حرفه‌ای
              </Badge>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mt-6 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring", damping: 12 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-400 relative z-10">
                آرمین سافت
              </span>
              <motion.span 
                className="absolute -inset-1 bg-arminred-500/10 blur-3xl rounded-full z-0"
                animate={{ 
                  opacity: [0.4, 0.6, 0.4], 
                  scale: [0.95, 1.05, 0.95]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.h1>

            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="h-1 w-32 mx-auto bg-gradient-to-r from-arminred-600 to-arminred-400 rounded-full relative overflow-hidden"
            >
              <motion.span 
                className="absolute inset-0 bg-white/50"
                animate={{ x: ["0%", "100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-xl md:text-2xl text-gray-300 mt-6 leading-relaxed max-w-3xl mx-auto"
            >
              با بیش از <span className="text-arminred-400 font-semibold farsi-numbers">۵</span> سال تجربه در زمینه برنامه‌نویسی و امنیت سایبری، 
              متخصص در توسعه نرم‌افزارهای تحت وب و اپلیکیشن‌های پیشرفته
            </motion.p>
            
            {/* Skill tags */}
            <AboutHeroTags tags={tags} />
          </motion.div>

          {/* Animated skills section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8"
            style={{ y, scale }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  scale: currentSkillIndex === index ? 1.05 : 1,
                  boxShadow: currentSkillIndex === index ? 
                    "0 0 25px rgba(239, 68, 68, 0.15)" : 
                    "0 0 0 rgba(0, 0, 0, 0)"
                }}
                transition={{
                  duration: 0.5, 
                  delay: 1.1 + index * 0.2,
                  scale: { duration: 0.3 }
                }}
                className={`group relative overflow-hidden rounded-xl ${skill.bg} border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm`}
              >
                <motion.div 
                  className="absolute -inset-px bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                />
                
                <motion.div 
                  className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-gradient-to-br from-arminred-500/20 to-arminred-500/5"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10"
                >
                  <skill.icon className={`w-8 h-8 ${skill.color} mb-4`} />
                </motion.div>
                
                <h3 className="text-lg font-semibold text-white mb-2 relative z-10">{skill.text}</h3>
                
                <motion.div 
                  className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-arminred-500/40 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-wrap gap-4 justify-center mt-8"
            style={{ y, scale }}
          >
            <Button 
              asChild
              size="lg"
              className="relative group overflow-hidden bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800 text-white border-0 shadow-lg hover:shadow-arminred-500/20 transition-all duration-300"
            >
              <Link to="/contact" className="text-lg px-8 py-6">
                <span className="relative z-10 flex items-center">
                  تماس با من
                  <ExternalLink className="w-5 h-5 mr-2 inline-block group-hover:rotate-12 transition-transform" />
                </span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-arminred-400/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 1 }}
                />
              </Link>
            </Button>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
              <span className="text-gray-400 text-sm mb-2">برای مشاهده بیشتر اسکرول کنید</span>
              <ChevronDown className="w-6 h-6 text-arminred-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
