
import { motion } from "framer-motion";

export function LoadingLogo() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center mb-8"
    >
      <motion.div
        className={`relative overflow-hidden
          w-24 h-24
          bg-gradient-to-br from-arminred-700 via-arminred-600 to-arminred-500
          rounded-xl
          flex items-center justify-center
          shadow-md shadow-arminred-500/20
          transition-all duration-300 z-10`}
      >
        {/* طرح ضربدری پشت متن */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-white/20" />
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black/20" />
          <div className="absolute top-0 left-0 h-full w-0.5 bg-white/20" />
          <div className="absolute top-0 right-0 h-full w-0.5 bg-black/20" />
        </div>
        
        {/* پنج ضلعی پشت حرف */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <motion.path 
            d="M50 15 L85 35 L85 65 L50 85 L15 65 L15 35 Z" 
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop", repeatDelay: 1 }}
          />
        </svg>
        
        {/* حرف A برای آرمین */}
        <motion.div 
          className="text-white text-3xl font-extrabold z-20 transform-gpu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          A
        </motion.div>
        
        {/* افکت درخشش */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          style={{ translateX: '-100%' }}
          animate={{ translateX: '100%' }}
          transition={{ 
            repeat: Infinity, 
            repeatType: "loop",
            duration: 1.5,
            repeatDelay: 2
          }}
        />
      </motion.div>
      
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center mt-4"
      >
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">آرمین</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-arminred-400 to-arminred-500">سافت</span>
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          در حال آماده‌سازی...
        </p>
      </motion.div>
    </motion.div>
  );
}
