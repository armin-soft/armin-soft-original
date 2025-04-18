
import { Flower, Sun, Leaf, Snowflake } from "lucide-react";

interface SeasonIconProps {
  season: string;
}

export function SeasonIcon({ season }: SeasonIconProps) {
  const getSeasonIcon = () => {
    switch (season) {
      case 'بهار':
        return (
          <div className="relative">
            <Flower strokeWidth={1.5} className="h-4 w-4 text-white" />
            <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-pink-400/50 rounded-full" />
          </div>
        );
      case 'تابستان':
        return (
          <div className="relative">
            <Sun strokeWidth={1.5} className="h-4 w-4 text-white" />
            <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-yellow-400/50 rounded-full" />
          </div>
        );
      case 'پاییز':
        return (
          <div className="relative">
            <Leaf strokeWidth={1.5} className="h-4 w-4 text-white" />
            <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-orange-400/50 rounded-full" />
          </div>
        );
      case 'زمستان':
        return (
          <div className="relative">
            <Snowflake strokeWidth={1.5} className="h-4 w-4 text-white" />
            <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-blue-400/50 rounded-full" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-black/40 to-black/80 border border-white/10 shadow-lg flex items-center justify-center">
      {getSeasonIcon()}
    </div>
  );
}
