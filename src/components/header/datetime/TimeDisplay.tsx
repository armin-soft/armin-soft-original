
import { Clock } from "lucide-react";
import { motion } from "framer-motion";

interface TimeDisplayProps {
  time: string;
  timeBased: string;
  timeBasedEmoji: string;
}

export function TimeDisplay({ time, timeBased, timeBasedEmoji }: TimeDisplayProps) {
  return (
    <motion.div 
      className="flex items-center gap-3"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div 
        className="p-1.5 rounded-full bg-arminred-500/10 relative"
        whileHover={{ 
          backgroundColor: "rgba(225, 29, 72, 0.2)",
          scale: 1.1
        }}
        transition={{ duration: 0.3 }}
      >
        <Clock className="h-3.5 w-3.5 text-arminred-500" />
        
        {/* Subtle glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-arminred-500/20 filter blur-sm z-0"
          animate={{ 
            opacity: [0.4, 0.6, 0.4],
            scale: [0.8, 1.1, 0.8]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.div>
      
      <div className="flex items-center gap-3">
        <motion.span 
          className="text-xs md:text-sm font-medium text-gray-200 farsi-numbers"
          animate={{ 
            opacity: [0.8, 1, 0.8] 
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        >
          {time}
        </motion.span>
        
        <div className="flex items-center gap-2">
          <span className="text-xs md:text-sm font-medium text-gray-300">{timeBased}</span>
          <motion.span 
            className="text-base md:text-lg"
            animate={{ 
              y: [0, -1, 0, 1, 0],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity,
              repeatType: "loop" 
            }}
          >
            {timeBasedEmoji}
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}
