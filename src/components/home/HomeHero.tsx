
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { HeroBackground } from "./hero/HeroBackground";
import { HeroServices } from "./hero/HeroServices";
import { HeroLogo } from "./hero/HeroLogo";

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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <HeroBackground />
      
      <div className="container relative z-10 px-4 md:px-6 py-12 md:py-24">
        <div className="flex flex-col items-center text-center">
          <HeroLogo />
          
          <div className="space-y-6 max-w-4xl">
            <motion.h1 
              className="text-4xl md:text-7xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
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
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              متخصص توسعه نرم‌افزار، امنیت وب و هوش مصنوعی با بیش از ۱۰ سال تجربه در صنعت فناوری اطلاعات
            </motion.p>

            <HeroServices />
          </div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800 shadow-lg shadow-arminred-600/20">
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
        </div>
      </div>
    </section>
  );
};
