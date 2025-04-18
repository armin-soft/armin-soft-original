
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { DateDisplay } from "./datetime/DateDisplay";
import { TimeDisplay } from "./datetime/TimeDisplay";
import { getShamsiDate } from "@/services/dateService";

interface DateTimeData {
  date: string;
  season: string;
  seasonEmoji: string;
  time: string;
  timeBased: string;
  timeBasedEmoji: string;
}

const getIranDateTime = async (): Promise<DateTimeData> => {
  const result = await getShamsiDate();
  
  // Get current time
  const now = new Date();
  const timeFormatter = new Intl.DateTimeFormat('fa-IR', {
    timeZone: 'Asia/Tehran',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  const time = timeFormatter.format(now);

  return { 
    date: result.Shamsi_Date,
    season: result.Season,
    seasonEmoji: result.Season_Emoji,
    time,
    timeBased: result.Time_Based,
    timeBasedEmoji: result.Time_Based_Emoji
  };
};

export function LiveDateTime() {
  const [dateTime, setDateTime] = useState<DateTimeData>({
    date: '',
    season: '',
    seasonEmoji: '',
    time: '',
    timeBased: '',
    timeBasedEmoji: ''
  });

  useEffect(() => {
    const fetchDateTime = async () => {
      const data = await getIranDateTime();
      setDateTime(data);
    };

    fetchDateTime();
    const timer = setInterval(fetchDateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="block"
    >
      <Card className="bg-black/30 backdrop-blur-md border-gray-800 hover:border-arminred-500/50 transition-all duration-300 shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 px-3 md:px-6 py-2 md:py-3">
          <DateDisplay 
            date={dateTime.date}
            season={dateTime.season}
            seasonEmoji={dateTime.seasonEmoji}
          />
          <div className="hidden md:block w-px h-6 bg-gray-700/50" />
          <TimeDisplay 
            time={dateTime.time}
            timeBased={dateTime.timeBased}
            timeBasedEmoji={dateTime.timeBasedEmoji}
          />
        </div>
      </Card>
    </motion.div>
  );
}
