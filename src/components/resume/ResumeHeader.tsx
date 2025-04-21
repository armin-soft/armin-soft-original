import React from 'react';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { Download, ArrowLeft, Twitter, Github, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ResumeParallax } from './ResumeParallax';
import { useBreakpoint } from "@/utils/responsive";

export function ResumeHeader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 350]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  
  const isDesktop = useBreakpoint('lg');

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <ResumeParallax />
      
      <div className="container relative z-10 px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            style={{ y, opacity, scale }}
            className="flex flex-col space-y-6 md:space-y-8 text-center lg:text-right"
          >
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-arminred-500/10 text-arminred-500 text-xs px-3 py-1 rounded-full w-fit mx-auto lg:mr-0 lg:ml-auto"
              >
                برنامه‌نویس حرفه‌ای بک‌اند
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-100 to-gray-300"
              >
                آرمین سافت
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-base xs:text-lg md:text-xl text-gray-400 mt-4"
              >
                متخصص توسعه نرم افزار، امنیت سایبری و هوش مصنوعی
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3 mt-2 justify-center lg:justify-start"
            >
              <Button asChild variant="outline" className="border-gray-700 hover:border-arminred-500/50 hover:bg-arminred-500/5 gap-2">
                <a href="#" download>
                  <Download className="w-4 h-4" />
                  دانلود رزومه
                </a>
              </Button>
              
              <Button asChild variant="outline" className="border-gray-700 hover:border-arminred-500/50 hover:bg-arminred-500/5 gap-2">
                <Link to="/contact">
                  تماس با من
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 mt-4 justify-center lg:justify-start"
            >
              <SocialButton icon={<Twitter size={18} />} href="https://twitter.com/armin_soft" />
              <SocialButton icon={<Github size={18} />} href="https://github.com/armin-soft" />
              <SocialButton icon={<Mail size={18} />} href="mailto:info@armin-soft.ir" />
              <SocialButton icon={<Phone size={18} />} href="tel:+989358983854" />
            </motion.div>
          </motion.div>
          
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
            className="relative flex justify-center"
          >
            {isDesktop ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="relative z-10"
              >
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative">
                  <div className="absolute inset-0 animate-spin-slow">
                    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full fill-none stroke-arminred-500/20">
                      <circle cx="50" cy="50" r="40" strokeWidth="1" strokeDasharray="3 3" />
                    </svg>
                  </div>
                  
                  {/* Resume image */}
                  <div className="absolute inset-6 overflow-hidden rounded-full border-2 border-arminred-500/20">
                    <div className="w-full h-full bg-gradient-to-br from-black to-gray-900 flex items-center justify-center">
                      <div className="text-5xl md:text-6xl font-bold text-arminred-500">AS</div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  {['Python', 'Java', 'PHP', 'Node.js', 'SQL', 'NoSQL', 'API'].map((tech, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      className="absolute"
                      style={{
                        top: `${20 + Math.sin(i * 1.5) * 35}%`,
                        left: `${20 + Math.cos(i * 1.8) * 35}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <div className="bg-black/50 backdrop-blur-md text-xs px-2 py-1 rounded-full border border-gray-800">
                        {tech}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <div className="hidden"></div>
            )}
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute left-1/2 bottom-10 transform -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <span className="text-sm text-gray-500 mb-2">اسکرول کنید</span>
            <div className="w-5 h-9 border-2 border-gray-700 rounded-full relative">
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute left-1/2 top-1 w-1 h-1 bg-arminred-500 rounded-full transform -translate-x-1/2"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function SocialButton({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-arminred-500/10 border border-gray-800 hover:border-arminred-500/30 transition-all duration-300"
    >
      {icon}
    </motion.a>
  );
}
