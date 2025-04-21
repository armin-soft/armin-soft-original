
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Shield, Bot, ArrowDown } from "lucide-react";
import { HeroBackground } from "./hero/HeroBackground";

export const HomeHero = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Particle animation effect
  const particles = Array.from({ length: 20 });
  
  // Text rotation for hero headline
  const headlines = [
    "توسعه نرم افزار",
    "امنیت سایبری",
    "هوش مصنوعی"
  ];
  
  // Icons for each headline
  const headlineIcons = [
    <Code className="h-6 w-6 text-arminred-400" />,
    <Shield className="h-6 w-6 text-arminred-400" />,
    <Bot className="h-6 w-6 text-arminred-400" />
  ];

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % headlines.length);
    }, 3000);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, [headlines.length]);

  // Scroll-based animations
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Enhanced background with more dynamic elements */}
      <HeroBackground />
      
      {/* Floating particles */}
      {particles.map((_, index) => (
        <motion.div
          key={index}
          className="particle absolute rounded-full"
          initial={{
            opacity: Math.random() * 0.3 + 0.1,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 1 + 0.5,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            opacity: [Math.random() * 0.3 + 0.1, Math.random() * 0.5 + 0.3, Math.random() * 0.3 + 0.1],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: `${Math.random() * 8 + 2}px`,
            height: `${Math.random() * 8 + 2}px`,
            background: `rgba(238, 42, 67, ${Math.random() * 0.3 + 0.1})`,
            filter: `blur(${Math.random() + 0.5}px)`,
          }}
        />
      ))}
      
      <div className="container relative z-10 px-4 md:px-6 py-12 md:py-24">
        <motion.div 
          style={{ opacity, y, scale }}
          className="flex flex-col items-center text-center"
        >
          <div className="space-y-6 max-w-4xl">
            {/* Glowing badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              className="bg-gradient-to-r from-arminred-900/20 to-arminred-500/20 backdrop-blur-md border border-arminred-500/20 rounded-full px-6 py-2 inline-flex items-center gap-2 mb-4 shadow-lg shadow-arminred-900/10"
            >
              <span className="h-2 w-2 rounded-full bg-arminred-500 animate-pulse"></span>
              <span className="text-sm text-gray-300">آرمین سافت - متخصص برنامه نویسی بک اند</span>
            </motion.div>
            
            {/* Main headline with rotating text */}
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                راهکارهای پیشرفته
              </span>
              <div className="h-16 md:h-20 lg:h-24 relative mt-2 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <span className="flex items-center gap-3 bg-clip-text text-transparent bg-gradient-to-r from-arminred-400 to-arminred-600">
                      {headlineIcons[activeIndex]}
                      <span>{headlines[activeIndex]}</span>
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.h1>
            
            {/* Enhanced description with gradient text */}
            <motion.p 
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              با بیش از <span className="text-arminred-400 font-semibold">۱۰ سال تجربه</span> در{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-white font-medium">
                صنعت فناوری اطلاعات
              </span>
              ، آماده ارائه خدمات حرفه‌ای به کسب‌وکار شما هستیم
            </motion.p>

            {/* Service tags with improved styling */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {[
                { icon: <Code className="h-5 w-5" />, text: "توسعه نرم افزار" },
                { icon: <Shield className="h-5 w-5" />, text: "امنیت سایبری" },
                { icon: <Bot className="h-5 w-5" />, text: "هوش مصنوعی" }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + (index * 0.1) }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(238, 42, 67, 0.1)" }}
                  className="bg-white/5 backdrop-blur border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300"
                >
                  {service.icon}
                  <span className="text-sm text-gray-300">{service.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* CTA buttons with enhanced animations */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            <Button asChild size="lg" 
              className="bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800 shadow-lg shadow-arminred-600/20 relative overflow-hidden group"
            >
              <Link to="/Contact" className="flex items-center gap-2 px-8 py-6">
                <span className="relative z-10">مشاوره رایگان</span>
                <motion.div
                  className="relative z-10"
                  animate={{
                    x: [0, 5, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 1.5
                  }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
                
                {/* Button particle effects */}
                <span className="absolute inset-0 w-full h-full">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="absolute top-0 left-0 w-2 h-2 rounded-full bg-white opacity-0 group-hover:animate-particle-emit"
                      style={{
                        animationDelay: `${i * 0.2}s`,
                        left: `${Math.random() * 100}%`
                      }}
                    />
                  ))}
                </span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" 
              className="border-gray-700 hover:border-arminred-500 hover:bg-arminred-500/5 transition-all duration-300 px-8 py-6"
            >
              <Link to="/Resume" className="flex items-center gap-2">
                <span>مشاهده رزومه</span>
                <motion.div
                  animate={{
                    y: [0, 3, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 1.5
                  }}
                >
                  <ArrowDown className="h-5 w-5" />
                </motion.div>
              </Link>
            </Button>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute left-1/2 bottom-8 transform -translate-x-1/2 hidden md:flex flex-col items-center"
          >
            <motion.span 
              className="text-sm text-gray-500 mb-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              اسکرول کنید
            </motion.span>
            <motion.div 
              className="w-6 h-10 border-2 border-gray-700 rounded-full relative flex justify-center"
              initial={{ y: 0 }}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div 
                className="w-1.5 h-1.5 bg-arminred-500 rounded-full absolute top-2"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
