
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CardHeaderProps {
  Icon: LucideIcon;
  iconBg: string;
  textColor: string;
  hoverColor: string;
}

export function CardHeader({ Icon, iconBg, textColor, hoverColor }: CardHeaderProps) {
  return (
    <div className="flex justify-between items-start mb-6">
      <motion.div
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "p-4 rounded-xl",
          iconBg,
          "group-hover:bg-white/10 transition-colors duration-300"
        )}
      >
        <Icon className={cn("h-7 w-7", textColor, hoverColor)} />
      </motion.div>
      
      <div className="relative h-10 w-10">
        <motion.div 
          className={cn(
            "absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 rounded-tr-md transition-colors duration-500",
            "border-white/10 group-hover:border-white/30"
          )}
          animate={{
            width: 40,
            height: 40,
            transition: { duration: 0.3 }
          }}
        />
      </div>
    </div>
  );
}
