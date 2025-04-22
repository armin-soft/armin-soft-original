
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DetailContent } from "./DetailContent";

interface DetailPopupProps {
  isActive: boolean;
  title: string;
  textColor: string;
  iconBg: string;
  detailBackgroundClass: string;
}

const detailVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 200, 
      damping: 20,
      staggerChildren: 0.08
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2 }
  }
};

export function DetailPopup({ 
  isActive,
  title,
  textColor,
  iconBg,
  detailBackgroundClass
}: DetailPopupProps) {
  if (!isActive) return null;

  return (
    <motion.div
      variants={detailVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={cn(
        "absolute top-[calc(100%+1rem)] left-0 right-0 z-20 rounded-xl overflow-hidden",
        "border border-white/10 shadow-2xl", 
        detailBackgroundClass,
        "backdrop-blur-md p-6"
      )}
    >
      <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rotate-45 w-4 h-4 bg-white/5 border border-white/10" />
      <DetailContent 
        title={title}
        textColor={textColor}
        iconBg={iconBg}
      />
    </motion.div>
  );
}
