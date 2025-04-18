
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
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
  const getSeasonColors = () => {
    switch (season) {
      case 'بهار':
        return 'from-green-300 to-pink-200';
      case 'تابستان':
        return 'from-yellow-300 to-orange-300';
      case 'پاییز':
        return 'from-orange-400 to-red-400';
      case 'زمستان':
        return 'from-blue-200 to-slate-300';
      default:
        return 'from-gray-300 to-gray-400';
    }
  };

  return (
    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${getSeasonColors()} shadow-lg flex items-center justify-center`}>
      <div className="w-4 h-4 rounded-full bg-white/20 backdrop-blur-sm" />
    </div>
  );
};

const TimeBasedIcon = ({ timeBased }: { timeBased: string }) => {
  const getTimeColors = () => {
    switch (timeBased) {
      case 'صبح':
        return 'from-yellow-200 to-orange-200';
      case 'ظهر':
        return 'from-yellow-400 to-orange-400';
      case 'بعد از ظهر':
        return 'from-orange-300 to-red-300';
      case 'عصر':
        return 'from-purple-300 to-pink-300';
      case 'غروب':
        return 'from-purple-400 to-red-400';
      case 'شب':
        return 'from-blue-400 to-purple-400';
      default:
        return 'from-gray-300 to-gray-400';
    }
  };

  return (
    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${getTimeColors()} shadow-lg flex items-center justify-center`}>
      <div className="w-4 h-4 rounded-full bg-white/20 backdrop-blur-sm" />
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
      <div className="animate-pulse flex items-center space-x-2 space-x-reverse bg-white/5 rounded-full px-4 py-2">
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
      <Card className="bg-black/30 backdrop-blur-md border-gray-800 hover:border-arminred-500/50 transition-all duration-300">
        <div className="flex items-center gap-6 px-6 py-3">
          <div className="flex items-center gap-3 border-l border-gray-700 pl-6">
            <Calendar className="h-4 w-4 text-arminred-500" />
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-200">{dateTime.Shamsi_Date}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-300">{dateTime.Season}</span>
                <SeasonIcon season={dateTime.Season} />
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Clock className="h-4 w-4 text-arminred-500" />
            <AnimatePresence mode="wait">
              <motion.div
                key={dateTime.Time}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
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
