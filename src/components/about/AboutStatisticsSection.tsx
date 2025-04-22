import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Users, Code, Award, Globe } from "lucide-react";
import { usePersianNumbers } from "@/hooks/usePersianNumbers";

// Intentionally left empty, as per user request
const statistics: any[] = [];

function CountUp({ end, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    if (!isInView) return;
    
    let startTime;
    let animationFrame;
    
    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };
    
    animationFrame = requestAnimationFrame(updateCount);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: true, margin: "-100px" }}
      className="farsi-numbers text-3xl md:text-4xl font-bold text-white"
    >
      {count}{suffix}
    </motion.div>
  );
}

export function AboutStatisticsSection() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.3, 0.4], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.4], [0.6, 1]);

  // If no statistics, we'll return null to not render anything
  if (statistics.length === 0) {
    return null;
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-arminred-900/10 to-black/0"></div>
      
      <motion.div 
        style={{ scale, opacity }}
        className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10"
      >
        <div className="flex flex-wrap -mx-4">
          {statistics.map((stat, index) => (
            <div key={index} className="w-1/2 md:w-1/4 px-4 mb-8 md:mb-0">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: stat.delay }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center hover:border-arminred-500/30 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-white/5 p-3 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <CountUp end={stat.value} suffix={stat.suffix} />
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
