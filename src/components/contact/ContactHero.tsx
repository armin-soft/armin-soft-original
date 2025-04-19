
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Users } from "lucide-react";

export function ContactHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-900/90 z-0" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            className="absolute top-10 left-10 w-64 h-64 bg-arminred-500/20 rounded-full filter blur-3xl"
          />
          <motion.div 
            initial={{ scale: 1, opacity: 0.2 }}
            animate={{ scale: 1.2, opacity: 0.1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
            className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl"
          />
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center text-white"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6 p-2 px-4 rounded-full bg-white/10 backdrop-blur-md text-white/80 text-sm font-medium"
          >
            <span className="animate-pulse inline-block w-2 h-2 bg-arminred-500 rounded-full ml-2"></span>
            ارتباط با ما
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">تماس با</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-arminred-400 to-arminred-600"> آرمین سافت</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed"
          >
            برای ارتباط با من و صحبت درباره پروژه‌ها و همکاری‌های احتمالی، از راه‌های زیر استفاده کنید.
            <br />همیشه آماده شنیدن ایده‌های جدید و همکاری در پروژه‌های هیجان‌انگیز هستم.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a 
              href="tel:+989358983854"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-xl transition-all duration-300 border border-white/10 shadow-xl"
            >
              <div className="p-2 bg-arminred-500 rounded-lg">
                <Phone className="w-5 h-5" />
              </div>
              <span>تماس مستقیم</span>
            </motion.a>
            <motion.a 
              href="mailto:info@armin-soft.ir"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-xl transition-all duration-300 border border-white/10 shadow-xl"
            >
              <div className="p-2 bg-blue-500 rounded-lg">
                <Mail className="w-5 h-5" />
              </div>
              <span>ارسال ایمیل</span>
            </motion.a>
            <motion.a 
              href="#contact-form"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800 backdrop-blur-lg rounded-xl transition-all duration-300 border border-white/10 shadow-xl"
            >
              <div className="p-2 bg-white/20 rounded-lg">
                <Users className="w-5 h-5" />
              </div>
              <span>فرم تماس</span>
            </motion.a>
          </motion.div>
          
          {/* Wave shape at bottom */}
          <div className="absolute left-0 right-0 bottom-0 overflow-hidden leading-0 transform rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-12 md:h-24 w-full">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-muted/50"></path>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
