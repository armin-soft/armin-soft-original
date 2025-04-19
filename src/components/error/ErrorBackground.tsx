
import { motion } from "framer-motion";

export function ErrorBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-arminred-500/5 to-arminred-600/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-blue-500/5 to-purple-600/10 rounded-full filter blur-3xl" />
      <motion.div 
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8, 
          ease: "easeInOut", 
          repeat: Infinity,
        }}
        className="absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-purple-500/5 to-pink-600/10 rounded-full filter blur-3xl"
      />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-5" />
    </div>
  );
}
