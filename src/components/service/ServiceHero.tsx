
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const ServiceHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2] 
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
            className="absolute top-10 left-10 w-32 h-32 bg-arminred-500/20 rounded-full filter blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1] 
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
            className="absolute bottom-10 right-10 w-56 h-56 bg-arminred-600/10 rounded-full filter blur-3xl"
          />
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
            خدمات تخصصی آرمین سافت
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            ارائه راهکارهای نرم‌افزاری پیشرفته، خدمات امنیتی حرفه‌ای و توسعه سیستم‌های هوشمند
            برای کسب و کارها و پروژه‌های شخصی
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800 shadow-lg hover:shadow-arminred-600/20">
              <Link to="/contact" className="px-8 py-3 text-lg">
                مشاوره رایگان
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
