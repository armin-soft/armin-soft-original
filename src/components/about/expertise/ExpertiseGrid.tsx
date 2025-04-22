
import { motion } from "framer-motion";
import { ExpertiseCard } from "./ExpertiseCard";
import { expertiseAreas } from "./ExpertiseData";

interface ExpertiseGridProps {
  isVisible: boolean;
  hoveredIndex: number | null;
  activeIndex: number | null;
  onHover: (index: number | null) => void;
  onCardClick: (index: number | null) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export function ExpertiseGrid({ 
  isVisible, 
  hoveredIndex, 
  activeIndex, 
  onHover, 
  onCardClick 
}: ExpertiseGridProps) {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8"
    >
      {expertiseAreas.map((area, index) => (
        <ExpertiseCard
          key={area.title}
          {...area}
          index={index}
          hoveredIndex={hoveredIndex}
          activeIndex={activeIndex}
          onHover={onHover}
          onClick={onCardClick}
        />
      ))}
    </motion.div>
  );
}
