
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { CardHeader } from "./card/CardHeader";
import { BadgeList } from "./card/BadgeList";
import { DetailPopup } from "./card/DetailPopup";
import type { ExpertiseCardProps } from "./ExpertiseTypes";

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
            <CardHeader 
              Icon={Icon}
              iconBg={iconBg}
              textColor={textColor}
              hoverColor={hoverColor}
            />
            
            <h3 className={cn(
              "text-xl md:text-2xl font-bold mb-3 transition-colors duration-300",
              "text-white/90 group-hover:text-white"
            )}>
              {title}
            </h3>
            
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-6 flex-grow">
              {description}
            </p>
            
            <BadgeList badges={badges} />
            
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
      
      <DetailPopup 
        isActive={activeIndex === index}
        title={title}
        textColor={textColor}
        iconBg={iconBg}
        detailBackgroundClass={detailBackgroundClass}
      />
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
