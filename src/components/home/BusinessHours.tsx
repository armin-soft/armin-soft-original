
import { useMemo } from 'react';
import { Card } from "@/components/ui/card";
import { Clock, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { getShamsiDate } from '@/services/dateService';
import { useQuery } from '@tanstack/react-query';
import { usePersianNumbers } from '@/hooks/usePersianNumbers';

interface BusinessHoursProps {
  className?: string;
}

export const BusinessHours = ({ className }: BusinessHoursProps) => {
  const { data: dateTime } = useQuery({
    queryKey: ['dateTime'],
    queryFn: getShamsiDate,
    refetchInterval: 1000,
  });

  const isBusinessHours = useMemo(() => {
    if (!dateTime) return false;
    
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();
    
    // Friday (5) is closed
    if (day === 5) return false;
    
    // Saturday (6) to Wednesday (3): 9 AM to 5 PM
    if ((day >= 6 || day <= 3) && hours >= 9 && hours < 17) return true;
    
    // Thursday (4): 9 AM to 2 PM
    if (day === 4 && hours >= 9 && hours < 14) return true;
    
    return false;
  }, [dateTime]);

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl mx-auto ${className}`}>
      {/* Date and Time Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-4 bg-white/5 backdrop-blur border-gray-800">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-arminred-500/10">
                <Calendar className="h-5 w-5 text-arminred-500" />
              </div>
              <span className="text-sm font-medium text-gray-200 farsi-numbers">{dateTime?.Shamsi_Date}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-300">{dateTime?.Season}</span>
                <span className="text-lg">{dateTime?.Season_Emoji}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-300">{dateTime?.Time_Based}</span>
                <span className="text-lg">{dateTime?.Time_Based_Emoji}</span>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Working Hours Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="p-4 bg-white/5 backdrop-blur border-gray-800">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-arminred-500/10">
                <Clock className="h-5 w-5 text-arminred-500" />
              </div>
              <span className="text-sm font-medium text-gray-200">ساعات کاری</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">شنبه تا چهارشنبه:</span>
                <span className="text-gray-200 farsi-numbers">۹ صبح تا ۱۷ عصر</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">پنج‌شنبه:</span>
                <span className="text-gray-200 farsi-numbers">۹ صبح تا ۱۴</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">جمعه:</span>
                <span className="text-gray-200">تعطیل</span>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-700">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${isBusinessHours ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span className="text-sm text-gray-200">
                    {isBusinessHours ? 'در حال حاضر باز است' : 'در حال حاضر بسته است'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};
