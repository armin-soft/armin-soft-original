
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
      className="relative rounded-full hover:bg-arminred-100/50 dark:hover:bg-arminred-950/30"
      onClick={onClick}
      aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isOpen ? "close" : "menu"}
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2 }}
          className="size-6 flex items-center justify-center"
        >
          {isOpen ? (
            <X className="h-5 w-5 text-arminred-600" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </motion.div>
      </AnimatePresence>
    </Button>
  );
}
