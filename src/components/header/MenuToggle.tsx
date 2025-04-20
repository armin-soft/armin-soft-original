
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface MenuToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

export function MenuToggle({ isOpen, onClick }: MenuToggleProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="mr-2 rounded-full relative overflow-hidden glow-effect"
      onClick={onClick}
      aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-white/5 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.div
        className="absolute -inset-1 bg-gradient-to-tr from-arminred-500/0 via-arminred-500/20 to-arminred-500/0 rounded-full opacity-0 z-0"
        animate={{
          opacity: isOpen ? 0.7 : 0,
          scale: isOpen ? 1 : 0.8,
        }}
        transition={{ duration: 0.4 }}
      />
      
      <div className="size-6 flex items-center justify-center relative z-10">
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ scale: 0, rotate: -45, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0, rotate: 45, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <X className="h-6 w-6 text-arminred-500" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <Menu className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Animated particles on button */}
      <AnimatePresence>
        {isOpen && (
          <>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-arminred-500 rounded-full"
                initial={{ 
                  x: "50%", 
                  y: "50%", 
                  scale: 0,
                  opacity: 0 
                }}
                animate={{ 
                  x: `${50 + (Math.random() * 100 - 50)}%`,
                  y: `${50 + (Math.random() * 100 - 50)}%`,
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ 
                  duration: 0.8 + Math.random() * 0.4,
                  ease: "easeOut"
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
    </Button>
  );
}
