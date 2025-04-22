
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { SectionHeader } from "./expertise/SectionHeader";
import { ExpertiseGrid } from "./expertise/ExpertiseGrid";
import { CTAButton } from "./expertise/CTAButton";

export function AboutExpertiseSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "0px 0px -200px 0px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, 60]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="py-28 md:py-36 relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black" id="expertise">
      <motion.div 
        style={{ opacity, y, scale }}
        className="relative z-10"
        ref={containerRef}
      >
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-arminred-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] opacity-30"></div>
        
        {/* Main Content */}
        <div className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10">
          <SectionHeader isVisible={isInView} />
          
          <motion.div style={{ y: cardsY }}>
            <ExpertiseGrid 
              isVisible={isInView}
              hoveredIndex={hoveredIndex}
              activeIndex={activeIndex}
              onHover={setHoveredIndex}
              onCardClick={setActiveIndex}
            />
          </motion.div>
          
          <CTAButton isVisible={isInView} />
        </div>
      </motion.div>
    </section>
  );
}
