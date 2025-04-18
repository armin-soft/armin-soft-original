
import { Sunrise, Sun, CloudSun, Sunset, Moon } from "lucide-react";

interface TimeBasedIconProps {
  timeBased: string;
}

export function TimeBasedIcon({ timeBased }: TimeBasedIconProps) {
  const getTimeIcon = () => {
    switch (timeBased) {
      case 'صبح':
        return (
          <div className="relative">
            <Sunrise strokeWidth={1.5} className="h-4 w-4 text-white" />
            <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-yellow-400/50 rounded-full" />
          </div>
        );
      case 'ظهر':
        return (
          <div className="relative">
            <Sun strokeWidth={1.5} className="h-4 w-4 text-white" />
            <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-yellow-500/50 rounded-full" />
          </div>
        );
      case 'بعد از ظهر':
        return (
          <div className="relative">
            <CloudSun strokeWidth={1.5} className="h-4 w-4 text-white" />
            <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-orange-400/50 rounded-full" />
          </div>
        );
      case 'عصر':
      case 'غروب':
        return (
          <div className="relative">
            <Sunset strokeWidth={1.5} className="h-4 w-4 text-white" />
            <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-pink-400/50 rounded-full" />
          </div>
        );
      case 'شب':
        return (
          <div className="relative">
            <Moon strokeWidth={1.5} className="h-4 w-4 text-white" />
            <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-blue-400/50 rounded-full" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-black/40 to-black/80 border border-white/10 shadow-lg flex items-center justify-center">
      {getTimeIcon()}
    </div>
  );
}
