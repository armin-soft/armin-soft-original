
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, Sun, Moon, Sunset, Sunrise, CloudSun, Snowflake, Leaf, Flower } from "lucide-react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

interface DateTimeData {
  Shamsi_Date: string;
  Season: string;
  Season_Emoji: string;
  Time: string;
  Time_Based: string;
  Time_Based_Emoji: string;
}

const SeasonIcon = ({ season }: { season: string }) => {
  const getSeasonIcon = () => {
    switch (season) {
      case 'بهار':
        return (
          <div className="relative">
            <Flower strokeWidth={1.5} className="h-4 w-4 text-white" />
            <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-pink-400 rounded-full" />
          </div>
        );
      case 'تابستان':
        return (
          <div className="relative">
            <Sun strokeWidth={1.5} className="h-4 w-4 text-white" />
            <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-yellow-400 rounded-full" />
          </div>
        );
      case 'پاییز':
        return (
          <div className="relative">
            <Leaf strokeWidth={1.5} className="h-4 w-4 text-white" />
            <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-orange-400 rounded-full" />
          </div>
        );
      case 'زمستان':
        return (
          <div className="relative">
            <Snowflake strokeWidth={1.5} className="h-4 w-4 text-white" />
            <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-blue-400 rounded-full" />
          </div>
        );
      default:
        return (
          <div className="relative">
            <Sun strokeWidth={1.5} className="h-4 w-4 text-white" />
            <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-gray-400 rounded-full" />
          </div>
        );
    }
  };

  return (
    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-black/40 to-black/80 border border-white/10 shadow-lg flex items-center justify-center">
      {getSeasonIcon()}
    </div>
  );
};

const TimeBasedIcon = ({ timeBased }: { timeBased: string }) => {
  const getTimeIcon = () => {
    switch (timeBased) {
      case 'صبح':
        return (
          <div className="relative">
            <Sunrise strokeWidth={1.5} className="h-4 w-4 text-white" />
            <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-yellow-400 rounded-full" />
          </div>
        );
      case 'ظهر':
        return (
          <div className="relative">
            <Sun strokeWidth={1.5} className="h-4 w-4 text-white" />
            <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-yellow-500 rounded-full" />
          </div>
        );
      case 'بعد از ظهر':
        return (
          <div className="relative">
            <CloudSun strokeWidth={1.5} className="h-4 w-4 text-white" />
            <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-orange-400 rounded-full" />
          </div>
        );
      case 'عصر':
        return (
          <div className="relative">
            <Sunset strokeWidth={1.5} className="h-4 w-4 text-white" />
            <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-pink-400 rounded-full" />
          </div>
        );
      case 'غروب':
        return (
          <div className="relative">
            <Sunset strokeWidth={1.5} className="h-4 w-4 text-white" />
            <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-red-400 rounded-full" />
          </div>
        );
      case 'شب':
        return (
          <div className="relative">
            <Moon strokeWidth={1.5} className="h-4 w-4 text-white" />
            <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-blue-400 rounded-full" />
          </div>
        );
      default:
        return (
          <div className="relative">
            <Clock strokeWidth={1.5} className="h-4 w-4 text-white" />
            <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-gray-400 rounded-full" />
          </div>
        );
    }
  };

  return (
    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-black/40 to-black/80 border border-white/10 shadow-lg flex items-center justify-center">
      {getTimeIcon()}
    </div>
  );
};

export function LiveDateTime() {
  const [dateTime, setDateTime] = useState<DateTimeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchDateTime = async () => {
    try {
      const response = await axios.get(
        "https://api.armin-soft.ir/Date-Time/?License=d5LAyJxbYst0egh2qNCdc6kWq0gdckmj&Next=0&Mounth=0"
      );
      if (response.data.Result.Code === 200) {
        setDateTime(response.data.Result);
        setError(false);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDateTime();
    const interval = setInterval(fetchDateTime, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse flex items-center space-x-2 space-x-reverse bg-black/30 backdrop-blur-md border-gray-800 rounded-full px-4 py-2">
        <div className="w-4 h-4 rounded-full bg-gray-700" />
        <div className="h-4 w-24 bg-gray-700 rounded" />
      </div>
    );
  }

  if (error || !dateTime) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="hidden md:block"
    >
      <Card className="bg-black/30 backdrop-blur-md border-gray-800 hover:border-arminred-500/50 transition-all duration-300 shadow-lg">
        <div className="flex items-center gap-6 px-6 py-3">
          <div className="flex items-center gap-3 border-l border-gray-700/50 pl-6">
            <div className="p-1.5 rounded-full bg-arminred-500/10">
              <Calendar className="h-3.5 w-3.5 text-arminred-500" />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-200">{dateTime.Shamsi_Date}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-300">{dateTime.Season}</span>
                <SeasonIcon season={dateTime.Season} />
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-full bg-arminred-500/10">
              <Clock className="h-3.5 w-3.5 text-arminred-500" />
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={dateTime.Time}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3"
              >
                <span className="text-sm font-medium text-gray-200 farsi-numbers">{dateTime.Time}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-300">{dateTime.Time_Based}</span>
                  <TimeBasedIcon timeBased={dateTime.Time_Based} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
