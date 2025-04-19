
import React from "react";
import { motion } from "framer-motion";

export const LoadingLogo: React.FC = () => {
  return (
    <motion.div 
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center mb-8"
    >
      <div className="relative w-32 h-32 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-arminred-600 to-arminred-400 rounded-full opacity-20 animate-pulse" />
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
  );
};
