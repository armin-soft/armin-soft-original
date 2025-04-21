
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const HeroBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const calculateMovement = (axis: 'x' | 'y', factor: number = 20) => {
    if (axis === 'x') {
      return (mousePosition.x / window.innerWidth - 0.5) * factor;
    }
    return (mousePosition.y / window.innerHeight - 0.5) * factor;
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute h-full w-full"
      >
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-arminred-500/30 to-arminred-800/10 rounded-full filter blur-[120px]"
          animate={{
            x: calculateMovement('x', -15),
            y: calculateMovement('y', -15)
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-gradient-to-tr from-arminred-600/20 to-arminred-900/5 rounded-full filter blur-[140px]"
          animate={{
            x: calculateMovement('x', 15),
            y: calculateMovement('y', 15)
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full filter blur-[100px]"
          animate={{
            x: calculateMovement('x', 10),
            y: calculateMovement('y', 10),
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            x: { type: "spring", stiffness: 50, damping: 30 },
            y: { type: "spring", stiffness: 50, damping: 30 },
            scale: { duration: 8, repeat: Infinity },
            opacity: { duration: 8, repeat: Infinity }
          }}
        />
      </motion.div>
      
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 rounded-full bg-white/40"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 2 + 0.5,
              opacity: Math.random() * 0.5 + 0.3
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight
              ],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 pointer-events-none" />
    </div>
  );
};
