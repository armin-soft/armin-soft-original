
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";

interface BadgeListProps {
  badges: string[];
}

export function BadgeList({ badges }: BadgeListProps) {
  return (
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
  );
}
