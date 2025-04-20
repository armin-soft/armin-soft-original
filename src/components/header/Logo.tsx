
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import { motion } from "framer-motion";

export function Logo() {
  return (
    <Link
      to="/"
      className="group flex items-center space-x-2 space-x-reverse font-bold text-xl md:text-2xl relative perspective-hover"
    >
      <motion.div 
        whileHover={{ 
          scale: 1.08,
          rotate: [0, -2, 0, 2, 0],
          transition: { duration: 0.5 }
        }}
        whileTap={{ scale: 0.92 }}
        className="relative bg-gradient-to-br from-arminred-700 to-arminred-500 text-white p-2 md:p-2.5 rounded-lg shadow-md shadow-arminred-500/20 group-hover:shadow-arminred-500/40 flex items-center justify-center overflow-hidden transition-all duration-300"
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-arminred-600 to-arminred-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        <Shield className="h-6 w-6 text-white relative z-10" strokeWidth={2.5} />
        
        {/* Shimmer effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          style={{ 
            translateX: '-100%'
          }}
          animate={{ translateX: ['100%', '100%'] }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut", 
            repeatDelay: 2
          }}
        />
        
        {/* Glow particles */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{ 
                x: "50%", 
                y: "50%", 
                opacity: 0 
              }}
              animate={{ 
                x: `${50 + (Math.random() * 60 - 30)}%`,
                y: `${50 + (Math.random() * 60 - 30)}%`,
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 1.5 + Math.random(),
                repeat: Infinity,
                repeatType: "loop",
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>
      </motion.div>
      
      <div className="flex flex-col items-start">
        <motion.span 
          className="text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-arminred-600"
          whileHover={{ y: -1 }}
        >
          آرمین سافت
        </motion.span>
        <motion.span 
          className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-all duration-300"
          initial={{ y: -5, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
        >
          توسعه‌دهنده حرفه‌ای
        </motion.span>
      </div>
    </Link>
  );
}
