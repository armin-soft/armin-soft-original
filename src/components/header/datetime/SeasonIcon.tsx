
import React from 'react';
import { Flower, Sun, Leaf, Snowflake } from "lucide-react";

interface SeasonIconProps {
  season: string;
}

export function SeasonIcon({ season }: SeasonIconProps) {
  const getSeasonIcon = () => {
    switch (season) {
      case 'بهار':
        return <Flower strokeWidth={1.5} className="h-4 w-4 text-green-400" />;
      case 'تابستان':
        return <Sun strokeWidth={1.5} className="h-4 w-4 text-yellow-500" />;
      case 'پاییز':
        return <Leaf strokeWidth={1.5} className="h-4 w-4 text-orange-400" />;
      case 'زمستان':
        return <Snowflake strokeWidth={1.5} className="h-4 w-4 text-blue-300" />;
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
