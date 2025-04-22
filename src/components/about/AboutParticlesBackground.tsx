
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PARTICLE_COUNT = 38;
const random = (min: number, max: number) => Math.random() * (max - min) + min;

export function AboutParticlesBackground() {
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 500], [1, 0.3]);
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -120]);
  
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Generate static particles for initial render
  const staticParticles = React.useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
      id: i,
      size: random(8, 32),
      top: random(5, 95),
      left: random(2, 98),
      initialDelay: random(0, 5),
      duration: random(12, 30),
      blur: random(8, 28),
      opacity: random(0.13, 0.45),
      color:
        i % 5 === 0
          ? "bg-arminred-600/70"
          : i % 5 === 1
          ? "bg-white/20"
          : i % 5 === 2
          ? "bg-purple-600/30"
          : i % 5 === 3
          ? "bg-blue-400/20"
          : "bg-arminred-400/20"
    }));
  }, []);

  if (!isMounted) return null;

  return (
    <motion.div 
      style={{ opacity: backgroundOpacity, y: backgroundY }} 
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Main particles */}
      {staticParticles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full ${p.color}`}
          style={{
            width: p.size,
            height: p.size,
            top: `${p.top}%`,
            left: `${p.left}%`,
            opacity: p.opacity,
            filter: `blur(${p.blur}px)`
          }}
          initial={{ 
            y: -40, 
            scale: 0.7,
            opacity: 0 
          }}
          animate={{
            y: [0, 40, 0],
            scale: [0.8, 1.1, 0.8],
            opacity: [p.opacity, p.opacity * 1.3, p.opacity]
          }}
          transition={{
            duration: p.duration,
            delay: p.initialDelay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Larger glow effects */}
      <motion.div 
        className="absolute top-1/4 left-1/3 w-96 h-96 bg-arminred-600/10 rounded-full filter blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full filter blur-[80px]"
        animate={{
          scale: [1.1, 0.9, 1.1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* Gradient overlays */}
      <div className="absolute w-full h-3/4 top-0 bg-gradient-to-b from-arminred-500/5 to-transparent z-0 pointer-events-none"></div>
      <div className="absolute w-full h-full top-0 bg-gradient-to-b from-black/60 to-transparent z-0 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-90"></div>
    </motion.div>
  );
}
