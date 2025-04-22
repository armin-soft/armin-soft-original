
import { motion } from "framer-motion";

interface GlowingBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function GlowingBackground({ children, className }: GlowingBackgroundProps) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-arminred-500/5 via-purple-500/5 to-blue-500/5 rounded-2xl blur-3xl"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [0.98, 1.02, 0.98]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      {children}
    </div>
  );
}
