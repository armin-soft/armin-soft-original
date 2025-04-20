
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils";
import { Sparkles, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface WelcomeNotificationProps {
  show: boolean;
  onClose: () => void;
}

export const WelcomeNotification = ({ show, onClose }: WelcomeNotificationProps) => {
  const container = {
    hidden: { y: -100, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        duration: 0.4,
      },
    },
    exit: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className={cn(
            "relative group",
            "px-6 py-4 rounded-2xl",
            "bg-gradient-to-r from-black/90 to-black/80",
            "backdrop-blur-xl border border-white/10",
            "shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
            "flex items-center gap-3",
          )}>
            {/* Background effects */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-arminred-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Sparkles Icon with animation */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              <div className="p-2 rounded-xl bg-gradient-to-br from-arminred-500/20 to-arminred-500/10">
                <Sparkles className="w-5 h-5 text-arminred-400" />
              </div>
            </motion.div>

            {/* Message */}
            <div className="flex flex-col items-start">
              <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                به وب‌سایت آرمین سافت خوش آمدید
              </h3>
              <p className="text-sm text-gray-400">
                امیدواریم تجربه خوبی داشته باشید
              </p>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className={cn(
                "absolute -top-2 -right-2",
                "p-1 rounded-full",
                "bg-white/10 hover:bg-white/20",
                "backdrop-blur-md border border-white/10",
                "transition-all duration-300",
                "group/close"
              )}
            >
              <X className="w-4 h-4 text-gray-400 group-hover/close:text-white transition-colors" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
