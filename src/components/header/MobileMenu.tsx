
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

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
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden fixed inset-x-0 top-[60px] bg-background/95 backdrop-blur-2xl shadow-lg border-b border-arminred-500/10"
        >
          <nav className="container mx-auto px-4 py-4">
            <motion.div
              className="flex flex-col space-y-1"
              variants={{
                open: {
                  transition: {
                    staggerChildren: 0.07,
                  },
                },
              }}
              initial="closed"
              animate="open"
            >
              {items.map((item, i) => (
                <motion.div
                  key={item.path}
                  variants={{
                    open: {
                      y: 0,
                      opacity: 1,
                    },
                    closed: {
                      y: -20,
                      opacity: 0,
                    },
                  }}
                  transition={{ duration: 0.2, delay: i * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={cn(
                      "px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-between",
                      currentPath === item.path
                        ? "bg-arminred-100 dark:bg-arminred-950/50 text-arminred-600 font-semibold"
                        : "text-foreground/80 hover:bg-arminred-100/50 dark:hover:bg-arminred-950/30"
                    )}
                    onClick={onItemClick}
                  >
                    <span>{item.name}</span>
                    {currentPath === item.path && (
                      <div className="h-2 w-2 rounded-full bg-arminred-500" />
                    )}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
