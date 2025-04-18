
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

const weekDays = ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'];
const months = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];

const getIranDateTime = (): DateTimeData => {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('fa-IR', {
    timeZone: 'Asia/Tehran',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    weekday: 'long',
  });
  
  const parts = formatter.formatToParts(now);
  const weekday = parts.find(part => part.type === 'weekday')?.value || '';
  const day = parts.find(part => part.type === 'day')?.value || '';
  const month = parts.find(part => part.type === 'month')?.value || '';
  const year = parts.find(part => part.type === 'year')?.value || '';
  
  const timeFormatter = new Intl.DateTimeFormat('fa-IR', {
    timeZone: 'Asia/Tehran',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  const time = timeFormatter.format(now);
  
  // تعیین فصل بر اساس ماه
  const monthNumber = parseInt(month);
  let season = '';
  if (monthNumber >= 1 && monthNumber <= 3) season = 'بهار';
  else if (monthNumber >= 4 && monthNumber <= 6) season = 'تابستان';
  else if (monthNumber >= 7 && monthNumber <= 9) season = 'پاییز';
  else season = 'زمستان';

  // تعیین زمان روز
  const hour = now.getHours();
  let timeBased = '';
  if (hour >= 5 && hour < 11) timeBased = 'صبح';
  else if (hour >= 11 && hour < 13) timeBased = 'ظهر';
  else if (hour >= 13 && hour < 16) timeBased = 'بعد از ظهر';
  else if (hour >= 16 && hour < 18) timeBased = 'عصر';
  else if (hour >= 18 && hour < 20) timeBased = 'غروب';
  else timeBased = 'شب';

  const date = `${weekday} ${day} ${months[monthNumber - 1]} ${year}`;
  
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
