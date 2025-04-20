
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export const HeroBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const particlesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      {/* Dynamic gradient background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute h-full w-full"
      >
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-arminred-500/10 rounded-full filter blur-[120px]"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02 - scrollY * 0.1,
            scale: [1, 1.05, 1],
            opacity: [0.6, 0.8, 0.6]
          }}
          transition={{
            x: { duration: 0.5, ease: "easeOut" },
            y: { duration: 0.5, ease: "easeOut" },
            scale: { duration: 8, repeat: Infinity, repeatType: "reverse" },
            opacity: { duration: 8, repeat: Infinity, repeatType: "reverse" }
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-arminred-600/10 rounded-full filter blur-[130px]"
          animate={{
            x: mousePosition.x * -0.01,
            y: mousePosition.y * -0.01 + scrollY * 0.05,
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{
            x: { duration: 0.5, ease: "easeOut" },
            y: { duration: 0.5, ease: "easeOut" },
            scale: { duration: 10, repeat: Infinity, repeatType: "reverse" },
            opacity: { duration: 10, repeat: Infinity, repeatType: "reverse" }
          }}
        />
        <motion.div 
          className="absolute top-1/3 left-1/3 w-64 h-64 bg-blue-600/5 rounded-full filter blur-[100px]"
          animate={{
            x: mousePosition.x * 0.015,
            y: mousePosition.y * 0.015 - scrollY * 0.08,
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{
            x: { duration: 0.5, ease: "easeOut" },
            y: { duration: 0.5, ease: "easeOut" },
            scale: { duration: 12, repeat: Infinity, repeatType: "reverse" },
            opacity: { duration: 12, repeat: Infinity, repeatType: "reverse" }
          }}
        />
      </motion.div>
      
      {/* Animated particles */}
      <div ref={particlesRef} className="absolute inset-0 opacity-30">
        {Array.from({ length: 40 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 rounded-full bg-white"
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
              opacity: [
                Math.random() * 0.5 + 0.3,
                Math.random() * 0.8 + 0.5,
                Math.random() * 0.5 + 0.3
              ],
              scale: [
                Math.random() * 1.5 + 0.5,
                Math.random() * 2 + 1,
                Math.random() * 1.5 + 0.5
              ]
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      {/* Network lines effect */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <pattern id="grid-pattern" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          </pattern>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(239, 68, 68, 0.2)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        
        <motion.line 
          x1="10%" 
          y1="30%" 
          x2="40%" 
          y2="70%" 
          stroke="url(#line-gradient)" 
          strokeWidth="0.5"
          strokeDasharray="5,5"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.line 
          x1="90%" 
          y1="20%" 
          x2="60%" 
          y2="60%" 
          stroke="url(#line-gradient)" 
          strokeWidth="0.5"
          strokeDasharray="5,5"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        />
      </svg>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black opacity-70" />
    </div>
  );
};
