
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
      className="mr-2 rounded-full relative"
      onClick={onClick}
      aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
    >
      <div className="size-6 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ scale: 0, rotate: -45, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0, rotate: 45, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6 text-arminred-500" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Button>
  );
}
