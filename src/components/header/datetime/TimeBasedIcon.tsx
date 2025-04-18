
import React from 'react';

interface TimeBasedIconProps {
  timeBased: string;
}

export function TimeBasedIcon({ timeBased }: TimeBasedIconProps) {
  const getTimeEmoji = () => {
    switch (timeBased) {
      case 'صبح':
        return '🌞';
      case 'ظهر':
        return '☀️';
      case 'بعد از ظهر':
        return '🌅';
      case 'عصر':
      case 'غروب':
        return '🌇';
      case 'شب':
        return '🌙';
      default:
        return '';
    }
  };

  return (
    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-black/40 to-black/80 border border-white/10 shadow-lg flex items-center justify-center">
      <span className="text-lg">{getTimeEmoji()}</span>
    </div>
  );
}

