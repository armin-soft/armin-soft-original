
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroBackground() {
  const { scrollYProgress } = useScroll();
  
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-arminred-950/20 via-black to-black" />
      
      <motion.div 
        className="absolute inset-0"
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], [0, 300]),
          opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0.2])
        }}
      >
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-arminred-900/20 via-black to-transparent" />
      </motion.div>
      
      <motion.div 
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center"
        style={{ 
          opacity: useTransform(scrollYProgress, [0, 0.5], [0.2, 0.05]),
          scale: useTransform(scrollYProgress, [0, 1], [1, 1.2])
        }}
      />
      
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-white/20"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.2
            }}
            animate={{ 
              y: [
                Math.random() * 100 + "%", 
                Math.random() * 100 + "%"
              ],
              opacity: [
                Math.random() * 0.5 + 0.2,
                Math.random() * 0.3 + 0.1
              ]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>
    </div>
  );
}
