
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface CTAButtonProps {
  isVisible: boolean;
}

export function CTAButton({ isVisible }: CTAButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.8 }}
      className="mt-20 text-center"
    >
      <Button 
        className="bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800 relative overflow-hidden group px-6 py-6 text-white"
      >
        <span className="relative z-10 flex items-center text-lg">
          مشاهده نمونه پروژه‌ها
          <ChevronRight className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </span>
        <motion.span 
          className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 1 }}
        />
      </Button>
    </motion.div>
  );
}
