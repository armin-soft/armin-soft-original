import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Loader, CheckCircle, Star, Code, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setProgress((prevProgress) => {
        const randomIncrement = Math.floor(Math.random() * 4) + 1;
        const newProgress = Math.min(prevProgress + randomIncrement, 90);
        return newProgress;
      });
    }, 150);

    setTimeout(() => {
      clearInterval(loadingInterval);
      setProgress(100);
      setIsComplete(true);
      
      setTimeout(() => {
        setFadeOut(true);
        
        setTimeout(() => {
          onLoadingComplete();
        }, 500);
      }, 800);
    }, 3000);

    return () => {
      clearInterval(loadingInterval);
    };
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-500 ease-in-out",
        fadeOut ? "opacity-0" : "opacity-100"
      )}
    >
      <div className="max-w-md w-full px-4">
        <div className="text-center mb-8">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <div className="relative w-32 h-32 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-arminred-600 to-arminred-400 rounded-full opacity-20 animate-pulse"></div>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-full border-2 border-dashed border-arminred-500/30"
              />
              <div className="relative z-10 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-arminred-500 via-arminred-400 to-arminred-600">
                AS
              </div>
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border-2 border-dashed border-arminred-500/20 rounded-full"
              />
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-foreground mb-4"
          >
            آرمین سافت
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground farsi-numbers"
          >
            در حال بارگذاری محتوا... {progress.toLocaleString('fa-IR')}٪
          </motion.p>
        </div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative mb-8"
        >
          <div className="relative">
            <Progress value={progress} className="h-3 mb-2 bg-secondary dark:bg-muted rounded-full overflow-hidden" />
            <div className="absolute inset-0 bg-gradient-to-r from-arminred-500/10 to-arminred-600/10 animate-pulse rounded-full"></div>
          </div>
          <div className="flex justify-between text-sm text-muted-foreground farsi-numbers mt-2">
            <span>۰٪</span>
            <span>۱۰۰٪</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center items-center gap-4"
        >
          {isComplete ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <CheckCircle className="h-10 w-10 text-arminred-500 dark:text-arminred-400" />
            </motion.div>
          ) : (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Loader className="h-10 w-10 text-arminred-500 dark:text-arminred-400" />
            </motion.div>
          )}
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center space-y-4"
        >
          <div className="flex justify-center gap-6">
            <motion.div whileHover={{ scale: 1.1 }} className="text-arminred-500">
              <Code className="h-6 w-6" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="text-arminred-500">
              <Shield className="h-6 w-6" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="text-arminred-500">
              <Star className="h-6 w-6" />
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
