
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MousePointerClick, Code, ShieldCheck, Cpu } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { HeroBackground } from "./hero/HeroBackground";
import { HeroServices } from "./hero/HeroServices";

export const HomeHero = () => {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "easeInOut"
    }
  };

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('services-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <HeroBackground />
      
      <div className="container relative z-10 px-4 md:px-6 py-12 md:py-24">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-6 max-w-4xl">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 inline-block"
            >
              <span className="inline-flex items-center rounded-full border border-arminred-500/30 bg-arminred-500/10 px-3 py-1 text-sm text-arminred-500 backdrop-blur">
                <span className="mr-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-arminred-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-arminred-500"></span>
                </span>
                به آرمین سافت خوش آمدید
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.span 
                className="inline-block relative" 
                custom={1} 
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                <span className="relative">
                  آرمین 
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-arminred-400/0 via-arminred-500 to-arminred-400/0"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  />
                </span>
              </motion.span>{" "}
              <motion.span 
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-arminred-400 to-arminred-600" 
                custom={2} 
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                سافت
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              متخصص توسعه نرم افزار، امنیت وب و هوش مصنوعی با بیش از 
              <span className="text-white font-bold mx-1">۱۰</span> 
              سال تجربه در صنعت فناوری اطلاعات
            </motion.p>

            <HeroServices />
          </div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800 shadow-lg shadow-arminred-600/20 relative overflow-hidden group">
              <Link to="/Contact" className="flex items-center gap-2">
                <span className="relative z-10">مشاوره رایگان</span>
                <ArrowRight className="h-5 w-5 relative z-10" />
                <span className="absolute inset-0 w-full h-full bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left z-0"></span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-gray-700 hover:bg-gray-800/50 text-gray-300 shadow-lg backdrop-blur">
              <Link to="/Services" className="flex items-center gap-2">
                <span>خدمات ما</span>
              </Link>
            </Button>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer text-white/60 hover:text-white transition-colors"
            animate={floatingAnimation}
            onClick={scrollToNextSection}
          >
            <MousePointerClick className="h-6 w-6" />
            <span className="sr-only">اسکرول به پایین</span>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      />
    </section>
  );
};
