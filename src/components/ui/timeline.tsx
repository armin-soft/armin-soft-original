
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TimelineProps {
  children: ReactNode;
  className?: string;
}

export function Timeline({ children, className }: TimelineProps) {
  return (
    <div className={cn("relative space-y-8 before:absolute before:inset-0 before:right-4 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-arminred-500/50 before:via-gray-700/30 before:to-transparent", className)}>
      {children}
    </div>
  );
}

interface TimelineItemProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  active?: boolean;
  index?: number;
}

export function TimelineItem({ children, icon, className, active = false, index = 0 }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={cn(
        "relative pr-10",
        active ? "opacity-100" : "opacity-80",
        className
      )}
    >
      <div className={cn(
        "absolute top-1 right-1.5 flex h-5 w-5 -translate-x-1/2 transform items-center justify-center rounded-full border",
        active ? "border-arminred-500 bg-arminred-500" : "border-gray-700 bg-black"
      )}>
        {icon ? (
          <div className="text-white h-3 w-3 flex items-center justify-center">
            {icon}
          </div>
        ) : (
          <div className={cn(
            "h-2 w-2 rounded-full",
            active ? "bg-white" : "bg-gray-500"
          )} />
        )}
      </div>
      {children}
    </motion.div>
  );
}
