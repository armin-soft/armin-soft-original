
import React from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import type { ResourceStatus } from "@/hooks/useResourceLoading";

interface LoadingProgressProps {
  progress: number;
  currentLoadingItem: string;
  resources: ResourceStatus[];
}

export const LoadingProgress: React.FC<LoadingProgressProps> = ({
  progress,
  currentLoadingItem,
  resources
}) => {
  return (
    <>
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-8"
      >
        <motion.h1 
          className="text-4xl font-bold text-foreground mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          آرمین سافت
        </motion.h1>
        <motion.p 
          className="text-lg text-muted-foreground farsi-numbers mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          در حال بارگذاری {currentLoadingItem}... {progress.toLocaleString('fa-IR')}٪
        </motion.p>
        
        <div className="text-sm text-muted-foreground/60">
          {resources.map((resource, index) => (
            <motion.div 
              key={resource.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + (index * 0.1) }}
              className="flex items-center justify-center gap-2"
            >
              {resource.loaded ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-green-500">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 animate-spin text-arminred-500">
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
              )}
              <span className={cn(
                resource.loaded ? "text-green-500" : "text-muted-foreground"
              )}>
                {resource.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative mb-12"
      >
        <div className="relative">
          <Progress 
            value={progress} 
            className="h-3 mb-2 bg-secondary dark:bg-muted rounded-full overflow-hidden" 
          />
        </div>
        <div className="flex justify-between text-sm text-muted-foreground farsi-numbers mt-2">
          <span>۰٪</span>
          <span>۱۰۰٪</span>
        </div>
      </motion.div>
    </>
  );
};
