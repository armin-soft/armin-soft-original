
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StatItemProps {
  value: number | string;
  label: string;
  icon?: React.ReactNode;
  delay?: number;
}

export function StatItem({ value, label, icon, delay = 0 }: StatItemProps) {
  const [countUpValue, setCountUpValue] = useState(0);
  const controls = useAnimation();
  const isNumeric = typeof value === 'number';
  const targetValue = isNumeric ? value : 0;
  
  useEffect(() => {
    if (!isNumeric) return;

    const duration = 1500; // animation duration in ms
    const frameDuration = 1000 / 60; // 60fps frame duration
    const totalFrames = Math.round(duration / frameDuration);
    
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.round(targetValue * progress);
      
      setCountUpValue(currentCount);
      
      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
    
    return () => clearInterval(counter);
  }, [targetValue, isNumeric]);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay }
    });
  }, [controls, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      whileHover={{ y: -5 }}
      className="p-6 bg-gradient-to-br from-black/80 to-gray-900/60 backdrop-blur-lg border border-gray-800 rounded-2xl relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 h-32 w-32 bg-arminred-500/10 rounded-full filter blur-[32px] -mr-10 -mt-10" />
        <div className="absolute bottom-0 left-0 h-20 w-20 bg-arminred-500/10 rounded-full filter blur-[32px] -ml-5 -mb-5" />
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2.5 bg-arminred-500/10 rounded-lg">
            {icon}
          </div>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold mb-1 farsi-numbers">
          {isNumeric ? countUpValue : value}
          <span className="text-arminred-500">+</span>
        </h3>
        
        <p className="text-gray-400 text-sm">{label}</p>
      </div>
    </motion.div>
  );
}
