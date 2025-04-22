
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BadgeCheck, ArrowRight, Award, Star, Code, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AboutParticlesBackground } from "./AboutParticlesBackground";
import { AboutHeroTags } from "./AboutHeroTags";
import { Card, CardContent } from "@/components/ui/card";

export function AboutHeroSection() {
  const { scrollYProgress } = useScroll();
  const opacityTitle = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.15], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.9]);
  
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    { 
      icon: <ShieldCheck className="h-6 w-6 text-arminred-500" />, 
      title: "امنیت", 
      description: "متخصص در زمینه امنیت سایبری و هک اخلاقی" 
    },
    { 
      icon: <Code className="h-6 w-6 text-arminred-400" />, 
      title: "توسعه", 
      description: "برنامه‌نویسی و توسعه نرم‌افزارهای سفارشی" 
    },
    { 
      icon: <Star className="h-6 w-6 text-arminred-300" />, 
      title: "طراحی", 
      description: "طراحی تجربه کاربری با رویکرد کاربرمحور" 
    },
    { 
      icon: <Award className="h-6 w-6 text-arminred-600" />, 
      title: "مشاوره", 
      description: "ارائه راهکارهای فنی بهینه برای کسب و کارها" 
    }
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
      <AboutParticlesBackground />
      
      {/* Grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>
      
      {/* Main content container */}
      <div className="container relative z-10 px-4 md:px-6 pt-20 md:pt-10">
        <motion.div
          style={{ opacity: opacityTitle, y, scale }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Left side with profile image and glow effects */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end order-2 lg:order-1">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
              animate={{ 
                scale: isLoaded ? [0.9, 1.05, 1] : 0.8,
                opacity: isLoaded ? 1 : 0, 
                rotate: isLoaded ? 0 : -10
              }}
              transition={{ 
                duration: 1.2, 
                ease: [0.16, 1, 0.3, 1]
              }}
              className="relative z-10 mb-8 lg:mb-0"
            >
              {/* Layered circle design with glowing effects */}
              <div className="relative">
                {/* Outer glowing rings */}
                <div className="absolute -inset-6 rounded-full border border-arminred-500/10 animate-pulse"></div>
                <div className="absolute -inset-12 rounded-full border border-arminred-500/5"></div>
                <div className="absolute -inset-20 rounded-full border border-white/5"></div>
                
                {/* Main circle container */}
                <div className="p-1.5 rounded-full bg-gradient-to-tr from-arminred-600 via-arminred-500 to-purple-700 shadow-2xl">
                  <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-gray-950 to-black p-3 backdrop-blur-sm border border-white/5">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center relative overflow-hidden">
                      {/* Center icon with glow effect */}
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }} 
                        className="relative z-20"
                      >
                        <BadgeCheck className="w-24 h-24 md:w-32 md:h-32 text-arminred-500 drop-shadow-[0_0_25px_rgba(239,68,68,0.7)]" />
                        
                        {/* Particle effects */}
                        <div className="absolute top-0 left-0 w-full h-full">
                          {Array.from({ length: 8 }).map((_, idx) => (
                            <motion.div
                              key={idx}
                              className="absolute w-1.5 h-1.5 bg-arminred-400/60 rounded-full"
                              initial={{ 
                                x: 0, 
                                y: 0, 
                                opacity: 0.8 
                              }}
                              animate={{ 
                                x: Math.random() * 60 - 30, 
                                y: Math.random() * 60 - 30,
                                opacity: 0
                              }}
                              transition={{ 
                                repeat: Infinity, 
                                duration: 1.5 + Math.random() * 2,
                                delay: Math.random() * 2,
                                ease: "easeOut"
                              }}
                              style={{
                                top: `${50 + Math.random() * 10 - 5}%`,
                                left: `${50 + Math.random() * 10 - 5}%`,
                              }}
                            />
                          ))}
                        </div>
                      </motion.div>
                      
                      {/* Background gradient glow */}
                      <div className="absolute inset-0 bg-gradient-radial from-arminred-600/10 via-transparent to-transparent opacity-60"></div>
                    </div>
                  </div>
                </div>
                
                {/* Animated rotating ring */}
                <motion.div
                  className="absolute -inset-8 border-2 border-dashed border-arminred-500/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ opacity: isLoaded ? 1 : 0 }}
                />
              </div>
            </motion.div>
          </div>
          
          {/* Right side with text content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start lg:text-right order-1 lg:order-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              <Badge className="bg-arminred-600/20 text-arminred-500 text-xs mb-4 py-1 px-3 border border-arminred-500/20 shadow-sm">
                بیش از ۵ سال تجربه
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 shadow-lg drop-shadow-2xl">
                آرمین سافت
              </h1>
              
              <div className="bg-gradient-to-r from-arminred-600 to-arminred-400 h-1.5 w-32 rounded-full mb-6"></div>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                توسعه‌دهنده نرم‌افزار، متخصص امنیت و هک اخلاقی، با تجربه در زمینه هوش مصنوعی و اتوماسیون
              </p>
            </motion.div>

            <AboutHeroTags tags={["امنیت سایبری", "برنامه‌نویسی وب", "هوش مصنوعی", "اتوماسیون", "مشاوره فنی"]} />

            {/* Feature cards */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full mt-4"
            >
              {features.map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20, scale: isLoaded ? 1 : 0.9 }}
                  transition={{ duration: 0.5, delay: 0.9 + idx * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px -10px rgba(239, 68, 68, 0.2)"
                  }}
                >
                  <Card className="h-full bg-black/20 backdrop-blur-lg border border-white/5 hover:border-arminred-500/30 transition-all duration-300">
                    <CardContent className="p-4 flex flex-col items-center text-center space-y-2">
                      <div className="mt-2 p-2 rounded-full bg-arminred-900/20 border border-arminred-900/40">
                        {feature.icon}
                      </div>
                      <h3 className="text-base font-medium text-white">{feature.title}</h3>
                      <p className="text-xs text-gray-400 leading-tight">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex flex-wrap gap-4 pt-6"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800 border-0 shadow-lg hover:shadow-arminred-500/20 transition-all duration-300">
                <Link to="/contact" className="flex items-center">
                  تماس با من
                  <ArrowRight className="mr-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="bg-black/40 text-white border-white/10 hover:bg-black/60 hover:border-white/20 backdrop-blur-sm">
                <a href="#expertise" className="flex items-center">
                  مشاهده تخصص‌ها
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <div className="w-6 h-12 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-arminred-500 rounded-full"
              />
            </div>
            <span className="text-white/30 text-xs mt-2">اسکرول کنید</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
