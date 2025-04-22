
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function AboutParallaxBackground() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -50]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -200]);
  const opacity = useTransform(scrollY, [0, 300], [0.8, 0]);
  
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) return null;
  
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Top gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-transparent z-10"></div>
      
      {/* Dynamic particle background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-grid-white/[0.01] bg-[size:30px_30px] opacity-30"></div>
        <motion.div 
          style={{ y: y1, opacity }} 
          className="absolute top-10 left-[10%] w-64 h-64 rounded-full bg-arminred-600/10 filter blur-3xl"
        />
        <motion.div 
          style={{ y: y2 }} 
          className="absolute top-20 right-[15%] w-96 h-96 rounded-full bg-purple-600/5 filter blur-3xl"
        />
        <motion.div 
          style={{ y: y3 }} 
          className="absolute top-60 left-[30%] w-72 h-72 rounded-full bg-blue-600/5 filter blur-3xl"
        />
      </div>
      
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-background via-background/90 to-transparent z-10"></div>
    </div>
  );
}
