
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { DateDisplay } from "./datetime/DateDisplay";
import { TimeDisplay } from "./datetime/TimeDisplay";

interface DateTimeData {
  date: string;
  season: string;
  time: string;
  timeBased: string;
}

const getIranDateTime = (): DateTimeData => {
  const now = new Date();
  const iranFormatter = new Intl.DateTimeFormat('fa-IR', {
    timeZone: 'Asia/Tehran',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const timeFormatter = new Intl.DateTimeFormat('fa-IR', {
    timeZone: 'Asia/Tehran',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  const date = iranFormatter.format(now);
  const time = timeFormatter.format(now);
  
  // Determine season based on month
  const month = new Date().getMonth() + 1;
  let season = '';
  if (month >= 1 && month <= 3) season = 'زمستان';
  else if (month >= 4 && month <= 6) season = 'بهار';
  else if (month >= 7 && month <= 9) season = 'تابستان';
  else season = 'پاییز';

  // Determine time of day
  const hour = now.getHours();
  let timeBased = '';
  if (hour >= 5 && hour < 11) timeBased = 'صبح';
  else if (hour >= 11 && hour < 13) timeBased = 'ظهر';
  else if (hour >= 13 && hour < 16) timeBased = 'بعد از ظهر';
  else if (hour >= 16 && hour < 18) timeBased = 'عصر';
  else if (hour >= 18 && hour < 20) timeBased = 'غروب';
  else timeBased = 'شب';

  return { date, season, time, timeBased };
};

export function LiveDateTime() {
  const [dateTime, setDateTime] = useState<DateTimeData>(getIranDateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(getIranDateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="hidden md:block"
    >
      <Card className="bg-black/30 backdrop-blur-md border-gray-800 hover:border-arminred-500/50 transition-all duration-300 shadow-lg">
        <div className="flex items-center gap-6 px-6 py-3">
          <DateDisplay 
            date={dateTime.date}
            season={dateTime.season}
          />
          <TimeDisplay 
            time={dateTime.time}
            timeBased={dateTime.timeBased}
          />
        </div>
      </Card>
    </motion.div>
  );
}
