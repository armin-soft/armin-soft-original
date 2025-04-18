
import React from 'react';
import { Sunrise, Sun, CloudSun, Sunset, Moon } from "lucide-react";

interface TimeBasedIconProps {
  timeBased: string;
}

export function TimeBasedIcon({ timeBased }: TimeBasedIconProps) {
  const getTimeIcon = () => {
    switch (timeBased) {
      case 'صبح':
        return <Sunrise strokeWidth={1.5} className="h-4 w-4 text-yellow-400" />;
      case 'ظهر':
        return <Sun strokeWidth={1.5} className="h-4 w-4 text-yellow-500" />;
      case 'بعد از ظهر':
        return <CloudSun strokeWidth={1.5} className="h-4 w-4 text-orange-400" />;
      case 'عصر':
      case 'غروب':
        return <Sunset strokeWidth={1.5} className="h-4 w-4 text-orange-500" />;
      case 'شب':
        return <Moon strokeWidth={1.5} className="h-4 w-4 text-blue-300" />;
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

