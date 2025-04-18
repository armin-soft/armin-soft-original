
import { Clock } from "lucide-react";
import { TimeBasedIcon } from "./TimeBasedIcon";
import { motion } from "framer-motion";

interface TimeDisplayProps {
  time: string;
  timeBased: string;
}

export function TimeDisplay({ time, timeBased }: TimeDisplayProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-1.5 rounded-full bg-arminred-500/10">
        <Clock className="h-3.5 w-3.5 text-arminred-500" />
      </div>
      <motion.div
        key={time}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-3"
      >
        <span className="text-sm font-medium text-gray-200 farsi-numbers">{time}</span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-300">{timeBased}</span>
          <TimeBasedIcon timeBased={timeBased} />
        </div>
      </motion.div>
    </div>
  );
}
