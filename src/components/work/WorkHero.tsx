
import { motion } from "framer-motion";

export const WorkHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center py-20 bg-gradient-to-br from-black via-gray-900 to-arminred-950 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            className="absolute top-10 left-10 w-32 h-32 bg-arminred-500/20 rounded-full filter blur-3xl"
          />
          <motion.div
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.2, opacity: 0.2 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
            className="absolute bottom-10 right-10 w-56 h-56 bg-arminred-600/10 rounded-full filter blur-3xl"
          />
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-arminred-300"
          >
            نمونه کارهای آرمین سافت
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-8"
          >
            مجموعه‌ای از پروژه‌های منتخب که نشان‌دهنده توانایی‌ها و تجربیات ما در زمینه‌های مختلف فناوری است
          </motion.p>
        </div>
      </div>
    </section>
  );
};
