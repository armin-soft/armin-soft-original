
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const HeroBackground = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      {/* Animated gradient overlays */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute h-full w-full"
      >
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-arminred-500/20 rounded-full filter blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        <motion.div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-arminred-600/20 rounded-full filter blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.25, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
        
        <motion.div 
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-black rounded-full filter blur-[80px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        />
      </motion.div>
      
      {/* Mesh gradient noise texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60" />
      
      {/* Animated stars/dots */}
      {mounted && (
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 30 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-1 h-1 rounded-full bg-white"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.5 + 0.3,
              }}
              animate={{
                opacity: [
                  Math.random() * 0.3 + 0.2,
                  Math.random() * 0.6 + 0.4,
                  Math.random() * 0.3 + 0.2,
                ],
                scale: [
                  Math.random() * 1 + 0.8,
                  Math.random() * 1.5 + 1,
                  Math.random() * 1 + 0.8,
                ],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}
      
      {/* Grid lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full border-r border-l border-gray-500 border-opacity-10" />
        <div className="h-full w-full flex flex-col">
          <div className="flex-1 border-b border-gray-500 border-opacity-10" />
          <div className="flex-1 border-b border-gray-500 border-opacity-10" />
          <div className="flex-1 border-b border-gray-500 border-opacity-10" />
        </div>
      </div>
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-radial-gradient-to-center from-transparent to-black opacity-70" />
    </div>
  );
};
