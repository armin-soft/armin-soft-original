
import { motion } from "framer-motion";

export const HeroLogo = () => {
  return (
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
  );
};
