
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <AnimatePresence>
      {!isComplete || !fadeOut ? (
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
                <div className="text-arminred-500">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <div className="text-arminred-500">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="text-arminred-500">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="22" height="16" x="1" y="4" rx="2" ry="2"></rect>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                طراحی و توسعه: آرمین سافت
              </p>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default LoadingScreen;
