
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { HeroBackground } from "./hero/HeroBackground";
import { HeroServices } from "./hero/HeroServices";

export const HomeHero = () => {
  const [scrolled, setScrolled] = useState(false);

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

  const scrollDown = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
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

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(244, 63, 94, 0.3)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <HeroBackground />
      
      <div className="container relative z-10 px-4 md:px-6 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-6 max-w-4xl">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.span 
                className="inline-block" 
                custom={1} 
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                آرمین 
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
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <p className="relative text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                <span className="relative">
                  متخصص توسعه نرم افزار، امنیت وب و هوش مصنوعی
                  <motion.span 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-arminred-500 to-transparent"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </span>
                {" "}با بیش از ۱۰ سال تجربه در صنعت فناوری اطلاعات
              </p>
            </motion.div>

            <HeroServices />
          </div>

          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-col items-center mt-12 space-y-8"
          >
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <Button asChild size="lg" className="bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800 shadow-lg shadow-arminred-600/20 h-14 px-8 text-base">
                  <Link to="/Contact" className="flex items-center gap-2">
                    <motion.span
                      initial={{ x: 5 }}
                      animate={{ x: 0 }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 1
                      }}
                    >
                      مشاوره رایگان
                    </motion.span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <Button asChild variant="outline" size="lg" className="border-gray-700 hover:border-white hover:bg-white/5 transition-all duration-300 h-14 px-8 text-base">
                  <Link to="/service" className="flex items-center gap-2">
                    مشاهده خدمات
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              onClick={scrollDown}
              className="cursor-pointer mt-10 flex flex-col items-center text-gray-500 hover:text-white transition-colors"
            >
              <span className="text-sm mb-2">پایین بروید</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown className="h-6 w-6" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      />
    </section>
  );
};
