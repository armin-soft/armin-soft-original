
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExpertiseCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  textColor: string;
  iconBg: string;
  borderColor: string;
  hoverColor: string;
  shadowColor: string;
  badges: string[];
  detailBackgroundClass: string;
  index: number;
  hoveredIndex: number | null;
  activeIndex: number | null;
  onHover: (index: number | null) => void;
  onClick: (index: number | null) => void;
}

export function ExpertiseCard({
  title,
  description,
  icon: Icon,
  color,
  textColor,
  iconBg,
  borderColor,
  hoverColor,
  shadowColor,
  badges,
  detailBackgroundClass,
  index,
  hoveredIndex,
  activeIndex,
  onHover,
  onClick
}: ExpertiseCardProps) {
  const detailVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 20,
        staggerChildren: 0.08
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 }
    }
  };

  const detailItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 150, damping: 15 }
    }
  };

  return (
    <motion.div
      onHoverStart={() => onHover(index)}
      onHoverEnd={() => onHover(null)}
      onClick={() => onClick(activeIndex === index ? null : index)}
      className={cn(
        "group relative z-10 cursor-pointer perspective-card",
        "transition-all duration-500 transform-gpu",
        hoveredIndex !== null && hoveredIndex !== index ? "opacity-60 scale-95" : ""
      )}
    >
      <div 
        className={cn(
          "relative h-full rounded-2xl overflow-hidden border border-white/10",
          "transition-all duration-500 transform-gpu",
          "hover:border-transparent",
          shadowColor,
          hoveredIndex === index ? "shadow-xl scale-[1.03]" : "shadow-md"
        )}
      >
        {/* Background Animation */}
        <motion.div 
          className={cn(
            "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
            `bg-gradient-to-br ${color}`
          )}
          animate={
            hoveredIndex === index 
              ? { opacity: 0.15, transition: { duration: 0.5 }} 
              : { opacity: 0, transition: { duration: 0.3 }}
          }
        />
        
        {/* Content Section */}
        <div className="relative backdrop-blur-sm bg-black/50 hover:bg-black/40 transition-colors duration-300 h-full">
          <div className="p-8 h-full flex flex-col">
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
                  animate={
                    hoveredIndex === index 
                      ? { width: 40, height: 40, transition: { duration: 0.3 }} 
                      : { width: 32, height: 32, transition: { duration: 0.3 }}
                  }
                />
              </div>
            </div>
            
            <h3 className={cn(
              "text-xl md:text-2xl font-bold mb-3 transition-colors duration-300",
              "text-white/90 group-hover:text-white"
            )}>
              {title}
            </h3>
            
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-6 flex-grow">
              {description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto mb-5">
              {badges.map((badge) => (
                <HoverCard key={badge} openDelay={200} closeDelay={100}>
                  <HoverCardTrigger asChild>
                    <Badge 
                      className={cn(
                        "bg-white/5 text-gray-300 border-0 hover:bg-white/10",
                        "transition-all duration-300 cursor-help"
                      )}
                    >
                      {badge}
                    </Badge>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-auto bg-black/80 border-gray-800 backdrop-blur-md">
                    <div className="text-sm text-gray-300">
                      جزئیات بیشتر درباره {badge}
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
            
            <div className="mt-2">
              <Button 
                variant="ghost" 
                className={cn(
                  "p-0 h-auto text-sm font-medium group/btn",
                  textColor,
                  "hover:bg-transparent hover:opacity-80"
                )}
              >
                <span>مشاهده جزئیات</span>
                <motion.div
                  animate={{ x: hoveredIndex === index ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block mr-1"
                >
                  <ChevronRight className="h-4 w-4 inline-block" />
                </motion.div>
              </Button>
            </div>
            
            <div className="absolute bottom-3 left-3">
              <motion.div 
                className={cn(
                  "w-10 h-10 border-b-2 border-l-2 rounded-bl-md transition-colors duration-500",
                  "border-white/10 group-hover:border-white/30"
                )}
                animate={
                  hoveredIndex === index 
                    ? { width: 40, height: 40, transition: { duration: 0.3 }} 
                    : { width: 32, height: 32, transition: { duration: 0.3 }}
                }
              />
            </div>
          </div>
        </div>
        
        <motion.div 
          className={cn(
            "absolute inset-0 opacity-0 transition-opacity duration-500",
            hoveredIndex === index ? "opacity-20" : "opacity-0"
          )}
          style={{
            background: `radial-gradient(circle at 50% 50%, ${getComputedColor(textColor)}, transparent 70%)`
          }}
        />
      </div>
      
      {/* Details Popup */}
      {activeIndex === index && (
        <motion.div
          variants={detailVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={cn(
            "absolute top-[calc(100%+1rem)] left-0 right-0 z-20 rounded-xl overflow-hidden",
            "border border-white/10 shadow-2xl", 
            detailBackgroundClass,
            "backdrop-blur-md p-6"
          )}
        >
          <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rotate-45 w-4 h-4 bg-white/5 border border-white/10" />
          
          <motion.h4 
            variants={detailItemVariants}
            className={cn("text-xl font-bold mb-4", textColor)}
          >
            جزئیات {title}
          </motion.h4>
          
          <motion.ul variants={detailItemVariants} className="space-y-2 text-gray-300 mb-4">
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
          
          <motion.div variants={detailItemVariants}>
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
        </motion.div>
      )}
    </motion.div>
  );
}

// Helper function to get computed color from Tailwind class
function getComputedColor(colorClass: string): string {
  switch(colorClass) {
    case 'text-blue-500': return '#3b82f6';
    case 'text-arminred-500': return '#ef4444';
    case 'text-emerald-500': return '#10b981';
    case 'text-amber-500': return '#f59e0b';
    case 'text-purple-500': return '#8b5cf6';
    case 'text-cyan-500': return '#06b6d4';
    default: return '#ef4444';
  }
}
