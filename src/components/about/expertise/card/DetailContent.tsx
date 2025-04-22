
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface DetailContentProps {
  title: string;
  textColor: string;
  iconBg: string;
}

const detailVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 150, damping: 15 }
  }
};

export function DetailContent({ title, textColor, iconBg }: DetailContentProps) {
  return (
    <>
      <motion.h4 
        variants={detailVariants}
        className={cn("text-xl font-bold mb-4", textColor)}
      >
        جزئیات {title}
      </motion.h4>
      
      <motion.ul variants={detailVariants} className="space-y-2 text-gray-300 mb-4">
        <li className="flex items-center gap-2">
          <span className={cn("h-1.5 w-1.5 rounded-full", iconBg)}></span>
          <span>تکنولوژی‌های پیشرفته</span>
        </li>
        <li className="flex items-center gap-2">
          <span className={cn("h-1.5 w-1.5 rounded-full", iconBg)}></span>
          <span>راهکارهای بهینه‌سازی شده</span>
        </li>
        <li className="flex items-center gap-2">
          <span className={cn("h-1.5 w-1.5 rounded-full", iconBg)}></span>
          <span>خدمات سفارشی‌سازی شده</span>
        </li>
      </motion.ul>
      
      <motion.div variants={detailVariants}>
        <Button 
          size="sm" 
          className={cn(
            "bg-white/10 hover:bg-white/20 text-white",
            "border border-white/5"
          )}
        >
          اطلاعات بیشتر
        </Button>
      </motion.div>
    </>
  );
}
