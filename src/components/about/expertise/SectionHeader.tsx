
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface SectionHeaderProps {
  isVisible: boolean;
}

export function SectionHeader({ isVisible }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16 md:mb-24 relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative inline-block"
      >
        <Badge 
          className="px-4 py-1.5 text-sm bg-gradient-to-r from-arminred-500/20 to-purple-500/20 text-arminred-400 border-arminred-500/30 backdrop-blur-sm mb-4"
        >
          تخصص‌های حرفه‌ای
        </Badge>
        <motion.div 
          className="absolute -inset-1 rounded-full blur-xl bg-arminred-500/10"
          animate={{ 
            opacity: [0.5, 0.8, 0.5],
            scale: [0.95, 1.05, 0.95]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0, y: -10 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-300 mb-6"
      >
        حوزه‌های تخصصی
      </motion.h2>
      
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={isVisible ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="h-1 w-24 bg-gradient-to-r from-arminred-600 to-purple-600 mx-auto my-6 rounded-full"
      >
        <motion.div 
          className="h-full w-full bg-white/50"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-gray-400 max-w-2xl mx-auto text-lg"
      >
        زمینه‌های اصلی تخصص و مهارت‌های فنی من در حوزه‌های مختلف فناوری اطلاعات
      </motion.p>
    </div>
  );
}
