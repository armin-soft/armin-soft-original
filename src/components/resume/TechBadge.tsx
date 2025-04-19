
import React from 'react';
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TechBadgeProps {
  name: string;
  icon?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
}

export function TechBadge({ name, icon, className, variant = 'default' }: TechBadgeProps) {
  const variants = {
    default: "bg-white/5 hover:bg-white/10 border-gray-800 hover:border-arminred-500/50",
    outline: "bg-transparent border-gray-700 hover:border-arminred-500/50",
    ghost: "bg-transparent border-transparent hover:bg-white/5"
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-sm font-medium transition-all duration-200",
        variants[variant],
        className
      )}
    >
      {icon && <span className="text-arminred-500">{icon}</span>}
      <span>{name}</span>
    </motion.div>
  );
}

export function TechBadgeGroup({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {children}
    </div>
  );
}
