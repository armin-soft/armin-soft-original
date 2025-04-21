
import { Clock } from "lucide-react";

export function WorkingHoursCard() {
  return (
    <div className="w-full md:max-w-md mx-auto bg-gradient-to-tr from-arminred-600/70 to-black/70 rounded-2xl shadow-xl border border-white/10 mt-8 mb-2 overflow-hidden">
      <div className="flex items-center gap-3 p-4 border-b border-arminred-500/20">
        <span className="bg-arminred-500/10 p-2 rounded-full">
          <Clock className="text-arminred-500" size={24} />
        </span>
        <h4 className="text-lg md:text-xl font-bold text-white">ساعات کاری دفتر</h4>
      </div>
      <div className="p-5 bg-white/5 text-sm md:text-base text-gray-300 flex flex-col gap-3 farsi-numbers">
        <div className="flex justify-between items-center">
          <span>شنبه تا چهارشنبه</span>
          <span className="font-semibold text-white">۹ الی ۱۷</span>
        </div>
        <div className="flex justify-between items-center">
          <span>پنجشنبه</span>
          <span className="font-semibold text-white">۹ الی ۱۴</span>
        </div>
        <div className="flex justify-between items-center">
          <span>جمعه</span>
          <span className="font-semibold text-arminred-500">تعطیل</span>
        </div>
      </div>
    </div>
  );
}
