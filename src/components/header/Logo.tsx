
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import { motion } from "framer-motion";

export function Logo() {
  return (
    <Link
      to="/"
      className="group flex items-center space-x-2 space-x-reverse font-bold text-xl md:text-2xl"
    >
      <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative bg-gradient-to-br from-arminred-700 to-arminred-500 text-white p-2 md:p-2.5 rounded-lg shadow-md group-hover:shadow-arminred-500/30 flex items-center justify-center overflow-hidden transition-all duration-300"
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-arminred-600 to-arminred-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        <Shield className="h-6 w-6 text-white relative z-10" strokeWidth={2.5} />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          style={{ 
            translateX: '-100%'
          }}
          animate={{ translateX: ['100%', '100%'] }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut", 
            repeatDelay: 1
          }}
        />
      </motion.div>
      <span className="text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-arminred-600">آرمین سافت</span>
    </Link>
  );
}
