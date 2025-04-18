
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
        <div className="flex items-center gap-4 px-4 py-2">
          <div className="flex items-center gap-2 border-l border-gray-700 pl-4">
            <Calendar className="h-4 w-4 text-arminred-500" />
            <div className="flex items-center gap-2">
              <span className="text-sm farsi-numbers">{dateTime.Shamsi_Date}</span>
              <span className="text-base">{dateTime.Season_Emoji}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-arminred-500" />
            <AnimatePresence mode="wait">
              <motion.div
                key={dateTime.Time}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="flex items-center gap-2"
              >
                <span className="text-sm farsi-numbers">{dateTime.Time}</span>
                <span className="text-base">{dateTime.Time_Based_Emoji}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
