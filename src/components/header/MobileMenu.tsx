
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface MenuItem {
  name: string;
  path: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  items: MenuItem[];
  currentPath: string;
  onItemClick: () => void;
}

export function MobileMenu({ isOpen, items, currentPath, onItemClick }: MobileMenuProps) {
  // Enhanced animations
  const menuVariants = {
    hidden: { 
      opacity: 0, 
      y: -20,
      clipPath: "inset(0% 0% 100% 0%)"
    },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { 
        duration: 0.4, 
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.06, 
        delayChildren: 0.05,
        when: "beforeChildren"
      }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      clipPath: "inset(0% 0% 100% 0%)",
      transition: { 
        duration: 0.3, 
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.03,
        staggerDirection: -1,
        when: "afterChildren"
      } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: -15, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95,
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          className="md:hidden fixed inset-x-0 top-[60px] bg-black/90 backdrop-blur-xl shadow-lg pt-4 pb-6 border-b border-arminred-500/20 z-50 overflow-hidden"
        >
          {/* Decorative elements */}
          <motion.div 
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-arminred-500/30 to-transparent"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          />
          
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-1">
              {items.map((item, index) => (
                <motion.div key={item.path} variants={itemVariants} custom={index}>
                  <Link
                    to={item.path}
                    className={cn(
                      "px-4 py-4 rounded-lg transition-all duration-300 font-medium flex items-center justify-between relative overflow-hidden",
                      currentPath === item.path
                        ? "bg-arminred-500/10 text-arminred-500 font-semibold"
                        : "text-foreground/80 hover:bg-arminred-500/5 hover:text-arminred-500"
                    )}
                    onClick={onItemClick}
                  >
                    {/* Left vertical line indicator */}
                    {currentPath === item.path && (
                      <motion.span
                        layoutId="activeMobileMenu"
                        className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-arminred-400 to-arminred-600"
                      />
                    )}
                    
                    <div className="flex items-center">
                      {/* Dot indicator */}
                      <motion.span 
                        className={cn(
                          "w-2 h-2 rounded-full mr-3",
                          currentPath === item.path ? "bg-arminred-500" : "bg-gray-600"
                        )}
                        animate={currentPath === item.path ? {
                          scale: [1, 1.3, 1],
                          transition: { duration: 1.5, repeat: Infinity }
                        } : {}}
                      />
                      
                      {/* Menu item text */}
                      <span className="relative z-10">
                        {item.name}
                        
                        {/* Underline effect */}
                        {currentPath === item.path && (
                          <motion.span
                            className="absolute bottom-0 left-0 h-0.5 w-full bg-arminred-500/30"
                            layoutId="mobileMenuUnderline"
                          />
                        )}
                      </span>
                    </div>
                    
                    {/* Right indicator for active state */}
                    {currentPath === item.path && (
                      <div className="h-2 w-2 rounded-full bg-arminred-500"></div>
                    )}
                    
                    {/* Background hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-white/0 pointer-events-none z-0"
                      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>
          
          {/* Bottom decoration */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-arminred-500/20 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
