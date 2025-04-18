
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PlatformBadgeProps {
  name: string;
  icon: ReactNode;
  index: number;
}

export const PlatformBadge = ({ name, icon, index }: PlatformBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full flex items-center space-x-2 space-x-reverse transition-colors duration-300"
    >
      {icon}
      <span className="text-sm font-medium">{name}</span>
    </motion.div>
  );
};
