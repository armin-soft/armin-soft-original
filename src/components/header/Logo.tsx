
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Logo() {
  return (
    <Link
      to="/"
      className="group flex items-center space-x-2 space-x-reverse font-bold text-xl md:text-2xl perspective-hover"
    >
      <div className="flex items-center space-x-2 space-x-reverse relative overflow-visible">
        {/* لوگو متحرک */}
        <motion.div 
          whileHover={{ 
            scale: 1.08,
            transition: { duration: 0.4, ease: "easeOut" }
          }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          {/* قاب اصلی لوگو */}
          <div className={cn(
            "relative overflow-hidden",
            "w-11 h-11 md:w-12 md:h-12",
            "bg-gradient-to-br from-arminred-700 via-arminred-600 to-arminred-500",
            "rounded-xl md:rounded-xl",
            "flex items-center justify-center",
            "shadow-md shadow-arminred-500/20 group-hover:shadow-arminred-500/50",
            "transition-all duration-300 z-10",
            "before:absolute before:inset-0 before:bg-gradient-to-br before:from-arminred-600/0 before:via-arminred-400/50 before:to-arminred-600/0 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500"
          )}>
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
              className="text-white text-2xl md:text-3xl font-extrabold z-20 transform-gpu"
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
          </div>
          
          {/* افکت‌های بیرونی */}
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-arminred-500/0 via-arminred-500/30 to-arminred-500/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
          
          {/* ذرات متحرک */}
          <motion.div
            className="absolute -inset-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-white rounded-full"
                initial={{ 
                  x: "50%", 
                  y: "50%", 
                  opacity: 0,
                  scale: 0.5
                }}
                animate={{ 
                  x: `${50 + (Math.random() * 80 - 40)}%`,
                  y: `${50 + (Math.random() * 80 - 40)}%`,
                  opacity: [0, 0.8, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 1.5 + Math.random() * 0.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
        </motion.div>
        
        {/* متن لوگو */}
        <motion.div 
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex items-center mb-0.5">
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 font-bold"
              whileHover={{ y: -1 }}
            >
              آرمین
            </motion.span>
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-arminred-400 to-arminred-500 font-extrabold mr-1"
              whileHover={{ y: -1 }}
            >
              سافت
            </motion.span>
          </div>
          
          {/* Tagline */}
          <motion.div 
            className="overflow-hidden h-4"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <motion.span 
              className="text-[10px] md:text-xs text-gray-500 block tracking-wider"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 0.8 }}
              transition={{ delay: 0.6, duration: 0.3 }}
            >
              توسعه‌دهنده حرفه‌ای
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </Link>
  );
}
