
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Shield, Bot, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

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

  const scrollToNext = () => {
    const nextSection = document.getElementById("services-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
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

  const services = [
    { icon: <Code className="h-5 w-5" />, text: "توسعه نرم‌افزار" },
    { icon: <Shield className="h-5 w-5" />, text: "امنیت سایبری" },
    { icon: <Bot className="h-5 w-5" />, text: "هوش مصنوعی" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute h-full w-full"
        >
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-arminred-500/20 rounded-full filter blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-arminred-600/20 rounded-full filter blur-[120px]" />
        </motion.div>
        
        {/* Dynamic particles effect */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 20 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-1 h-1 rounded-full bg-white"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 2 + 0.5
              }}
              animate={{
                x: [
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth
                ],
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight
                ]
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container relative z-10 px-4 md:px-6 py-12 md:py-24">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-3 rounded-full bg-white/5 backdrop-blur border border-white/10 mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-arminred-400 to-arminred-600 flex items-center justify-center relative overflow-hidden group">
                  <motion.div 
                    className="text-3xl font-bold text-white z-10 relative"
                    whileHover={{ scale: 1.2 }}
                  >
                    AS
                  </motion.div>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-arminred-300 to-arminred-600 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    animate={{ 
                      background: [
                        "linear-gradient(to right, #f43f5e, #e11d48)",
                        "linear-gradient(to right, #be123c, #f43f5e)",
                        "linear-gradient(to right, #f43f5e, #e11d48)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
          
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
              متخصص توسعه نرم‌افزار، امنیت وب و هوش مصنوعی با بیش از ۵ سال تجربه در صنعت فناوری اطلاعات
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center gap-2 pt-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + (index * 0.1) }}
                  className="bg-white/5 backdrop-blur border border-white/10 px-4 py-2 rounded-full flex items-center gap-2"
                >
                  {service.icon}
                  <span className="text-sm text-gray-300">{service.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800 shadow-lg shadow-arminred-600/20">
              <Link to="/service" className="flex items-center gap-2">
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

      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer hidden md:flex flex-col items-center gap-2"
        animate={{ 
          y: [0, 10, 0],
          opacity: scrolled ? 0 : 1
        }}
        transition={{ 
          y: { 
            repeat: Infinity, 
            duration: 1.5,
            ease: "easeInOut"
          },
          opacity: { duration: 0.3 }
        }}
        onClick={scrollToNext}
      >
        <span className="text-sm text-gray-400">مشاهده بیشتر</span>
        <ArrowDown className="h-5 w-5 text-arminred-500" />
      </motion.div>
    </section>
  );
};
