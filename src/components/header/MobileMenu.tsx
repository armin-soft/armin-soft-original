
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
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.05, delayChildren: 0.05 }
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          className="md:hidden fixed inset-x-0 top-[60px] bg-black/90 backdrop-blur-xl shadow-lg pt-4 pb-6 border-b border-arminred-500/20 z-50"
        >
          <nav className="container mx-auto px-4 flex flex-col space-y-1">
            {items.map((item) => (
              <motion.div key={item.path} variants={itemVariants}>
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
                  {currentPath === item.path && (
                    <motion.span
                      layoutId="activeMobileMenu"
                      className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-arminred-400 to-arminred-600"
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                  {currentPath === item.path && (
                    <div className="h-2 w-2 rounded-full bg-arminred-500"></div>
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
