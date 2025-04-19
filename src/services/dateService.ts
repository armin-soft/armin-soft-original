interface ShamsiDateResult {
  Shamsi_Date: string;
  Season: string;
  Season_Emoji: string;
  Time_Based: string;
  Time_Based_Emoji: string;
}

export const getShamsiDate = async (): Promise<ShamsiDateResult> => {
  try {
    const response = await fetch('https://api.armin-soft.ir/Date-Time/?License=d5LAyJxbYst0egh2qNCdc6kWq0gdckmj&Next=0&Mounth=0');
    const data = await response.json();
    
    if (data.Result && data.Result.Code === 200) {
      return {
        Shamsi_Date: data.Result.Shamsi_Date,
        Season: data.Result.Season,
        Season_Emoji: data.Result.Season_Emoji,
        Time_Based: data.Result.Time_Based,
        Time_Based_Emoji: data.Result.Time_Based_Emoji
      };
    }
    
    throw new Error('Invalid response from date service');
  } catch (error) {
    // Fallback to static date for development
    const { season, emoji } = getSeasonInfo();
    const { timeBased, emoji: timeEmoji } = getTimeBasedInfo();
    
    return {
      Shamsi_Date: getSimpleJalaliDate(),
      Season: season,
      Season_Emoji: emoji,
      Time_Based: timeBased,
      Time_Based_Emoji: timeEmoji
    };
  }
};

// گرفتن فصل و ایموجی مناسب
const getSeasonInfo = () => {
  const now = new Date();
  const month = now.getMonth() + 1;
  
  if (month >= 1 && month <= 3) return { season: "زمستان", emoji: "❄️" };
  if (month >= 4 && month <= 6) return { season: "بهار", emoji: "🌸" };
  if (month >= 7 && month <= 9) return { season: "تابستان", emoji: "☀️" };
  return { season: "پاییز", emoji: "🍂" };
};

// گرفتن زمان روز و ایموجی مناسب
const getTimeBasedInfo = () => {
  const hour = new Date().getHours();
  
  if (hour >= 5 && hour < 12) return { timeBased: "صبح", emoji: "🌅" };
  if (hour >= 12 && hour < 16) return { timeBased: "ظهر", emoji: "☀️" };
  if (hour >= 16 && hour < 19) return { timeBased: "عصر", emoji: "🌇" };
  return { timeBased: "شب", emoji: "🌙" };
};

// تبدیل تاریخ به شمسی به صورت ساده
// در یک پروژه واقعی باید از یک کتابخانه مانند jalali-moment استفاده کرد
const getSimpleJalaliDate = () => {
  const months = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];
  const now = new Date();
  return `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear() - 621}`;
};
