
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

export function ResumeParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  // Transform values based on scroll position
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);

  return (
    <div 
      ref={ref} 
      className="absolute inset-0 h-full w-full overflow-hidden pointer-events-none"
    >
      <div className="relative h-full w-full">
        {/* Background Shapes */}
        <motion.div
          style={{ y, opacity, scale }}
          className="absolute -right-[20%] bottom-[10%] w-80 h-80 rounded-full bg-arminred-500/10 blur-[120px]"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "80%"]), opacity, scale }}
          className="absolute left-[5%] top-[35%] w-64 h-64 rounded-full bg-arminred-600/10 blur-[100px]"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "50%"]) }}
          className="absolute right-[30%] top-[20%] w-40 h-40 rounded-full bg-arminred-700/5 blur-[80px]"
        />
        
        {/* Grid Background */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />

        {/* Particles Animation */}
        <div className="particles-container">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white/40"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: useTransform(
                  scrollYProgress,
                  [0, 1],
                  [Math.random() * 0.4 + 0.3, 0]
                ),
                y: useTransform(
                  scrollYProgress,
                  [0, 1],
                  ["0vh", `${Math.random() * 100 + 50}vh`]
                ),
                scale: useTransform(
                  scrollYProgress,
                  [0, 1],
                  [1, Math.random() * 3 + 0.5]
                )
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
