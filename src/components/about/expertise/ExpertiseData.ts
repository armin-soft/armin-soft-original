
import { Code, Shield, Bot, Server, Database, Cpu } from "lucide-react";

export const expertiseAreas = [
  {
    icon: Code,
    title: "توسعه نرم‌افزار",
    description: "تخصص در زبان‌های برنامه‌نویسی متنوع و فریم‌ورک‌های مدرن برای ایجاد راهکارهای جامع",
    color: "from-blue-600/20 to-purple-600/20",
    textColor: "text-blue-500",
    iconBg: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    hoverColor: "group-hover:text-blue-400",
    shadowColor: "shadow-blue-500/10",
    badges: ["ری‌اکت", "نود.جی‌اس", "پی‌اچ‌پی", "لاراول"],
    detailBackgroundClass: "bg-gradient-to-br from-blue-950/50 to-indigo-900/50"
  },
  {
    icon: Shield,
    title: "امنیت سایبری",
    description: "تامین امنیت سیستم‌ها با استفاده از تکنیک‌های پیشرفته و ابزارهای تخصصی",
    color: "from-arminred-600/20 to-pink-600/20",
    textColor: "text-arminred-500",
    iconBg: "bg-arminred-500/10",
    borderColor: "border-arminred-500/20",
    hoverColor: "group-hover:text-arminred-400",
    shadowColor: "shadow-arminred-500/10",
    badges: ["تست نفوذ", "اُواسپ", "فایروال", "رمزنگاری"],
    detailBackgroundClass: "bg-gradient-to-br from-arminred-950/50 to-rose-900/50"
  },
  {
    icon: Bot,
    title: "هوش مصنوعی",
    description: "بکارگیری الگوریتم‌های پیشرفته برای توسعه سیستم‌های هوشمند و خودکار",
    color: "from-emerald-600/20 to-teal-600/20",
    textColor: "text-emerald-500",
    iconBg: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    hoverColor: "group-hover:text-emerald-400",
    shadowColor: "shadow-emerald-500/10",
    badges: ["یادگیری ماشین", "پردازش زبان طبیعی", "شبکه عصبی", "پایتون"],
    detailBackgroundClass: "bg-gradient-to-br from-emerald-950/50 to-teal-900/50"
  },
  {
    icon: Server,
    title: "زیرساخت ابری",
    description: "طراحی و پیاده‌سازی زیرساخت‌های ابری مقیاس‌پذیر و مقاوم",
    color: "from-amber-600/20 to-yellow-600/20",
    textColor: "text-amber-500",
    iconBg: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    hoverColor: "group-hover:text-amber-400",
    shadowColor: "shadow-amber-500/10",
    badges: ["داکر", "کوبرنتیز", "AWS", "دِوآپس"],
    detailBackgroundClass: "bg-gradient-to-br from-amber-950/50 to-yellow-900/50"
  },
  {
    icon: Database,
    title: "مدیریت داده",
    description: "طراحی و بهینه‌سازی پایگاه‌های داده و سیستم‌های ذخیره‌سازی اطلاعات",
    color: "from-purple-600/20 to-indigo-600/20",
    textColor: "text-purple-500",
    iconBg: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    hoverColor: "group-hover:text-purple-400", 
    shadowColor: "shadow-purple-500/10",
    badges: ["مای‌اس‌کیو‌ال", "مونگو‌دی‌بی", "پوستگرس‌کیو‌ال", "ردیس"],
    detailBackgroundClass: "bg-gradient-to-br from-purple-950/50 to-indigo-900/50"
  },
  {
    icon: Cpu,
    title: "اتوماسیون",
    description: "طراحی سیستم‌های خودکار برای بهینه‌سازی فرآیندها و افزایش بهره‌وری",
    color: "from-cyan-600/20 to-sky-600/20",
    textColor: "text-cyan-500",
    iconBg: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
    hoverColor: "group-hover:text-cyan-400",
    shadowColor: "shadow-cyan-500/10",
    badges: ["CI/CD", "اسکریپت‌نویسی", "تست خودکار", "مانیتورینگ"],
    detailBackgroundClass: "bg-gradient-to-br from-cyan-950/50 to-sky-900/50"
  }
];
