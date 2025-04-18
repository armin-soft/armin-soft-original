
import React from 'react';

interface SeasonIconProps {
  season: string;
}

export function SeasonIcon({ season }: SeasonIconProps) {
  const getSeasonEmoji = () => {
    switch (season) {
      case 'بهار':
        return '🌸';
      case 'تابستان':
        return '☀️';
      case 'پاییز':
        return '🍂';
      case 'زمستان':
        return '⛄️';
      default:
        return '';
    }
  };

  return (
    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-black/40 to-black/80 border border-white/10 shadow-lg flex items-center justify-center">
      <span className="text-lg">{getSeasonEmoji()}</span>
    </div>
  );
}

