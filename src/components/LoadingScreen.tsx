
import React from "react";
import { motion } from "framer-motion";
import { Code, Shield, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import { LoadingLogo } from "./loading/LoadingLogo";
import { LoadingProgress } from "./loading/LoadingProgress";
import { useResourceLoading } from "@/hooks/useResourceLoading";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const {
    progress,
    isComplete,
    fadeOut,
    resources,
    currentLoadingItem
  } = useResourceLoading({ onLoadingComplete });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-500",
        fadeOut ? "opacity-0" : "opacity-100"
      )}
    >
      <div className="relative max-w-md w-full px-4">
        <LoadingLogo />
        
        <LoadingProgress
          progress={progress}
          currentLoadingItem={currentLoadingItem}
          resources={resources}
        />

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="flex justify-center gap-6">
            <motion.div 
              whileHover={{ scale: 1.1 }} 
              className="text-arminred-500"
            >
              <Code className="h-6 w-6" />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.1 }} 
              className="text-arminred-500"
            >
              <Shield className="h-6 w-6" />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.1 }} 
              className="text-arminred-500"
            >
              <Bot className="h-6 w-6" />
            </motion.div>
          </div>
          <p className="text-sm text-muted-foreground">
            طراحی و توسعه: آرمین سافت
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
