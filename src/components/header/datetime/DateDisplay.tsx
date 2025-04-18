
import { Calendar } from "lucide-react";

interface DateDisplayProps {
  date: string;
  season: string;
  seasonEmoji: string;
}

export function DateDisplay({ date, season, seasonEmoji }: DateDisplayProps) {
  return (
    <div className="flex items-center gap-3 border-l border-gray-700/50 pl-6">
      <div className="p-1.5 rounded-full bg-arminred-500/10">
        <Calendar className="h-3.5 w-3.5 text-arminred-500" />
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-gray-200">{date}</span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-300">{season}</span>
          <span className="text-lg">{seasonEmoji}</span>
        </div>
      </div>
    </div>
  );
}
