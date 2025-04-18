import { SiteLayout } from "@/components/site-layout";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceCard } from "@/components/service/ServiceCard";
import { PlatformBadge } from "@/components/service/PlatformBadge";
import { Code, Monitor, Server, Shield, Database, Bot, Lock, Globe, BriefcaseBusiness, Brain, Cpu, Smartphone, Cog } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const mainServices = [
  {
    icon: <Code className="h-12 w-12 text-arminred-500" />,
    title: "طراحی نرم‌افزار",
    description: "توسعه نرم‌افزارهای اختصاصی و قدرتمند برای تمامی سیستم‌عامل‌ها از جمله ویندوز، مک، لینوکس و حتی سیستم‌های قدیمی‌تر مانند داس.",
    details: [
      "نرم‌افزارهای کاربردی دسکتاپ",
      "اتوران‌های پیشرفته و خودکار",
      "برنامه‌های کنسول بوت",
      "راهکارهای نرم‌افزاری سفارشی",
    ],
  },
  {
    icon: <Shield className="h-12 w-12 text-arminred-500" />,
    title: "امنیت و هک اخلاقی",
    description: "تأمین امنیت سیستم‌ها و نرم‌افزارها با استفاده از تکنیک‌های هک اخلاقی و تست نفوذ برای شناسایی و رفع آسیب‌پذیری‌ها.",
    details: [
      "تست نفوذ و ارزیابی آسیب‌پذیری",
      "شناسایی و گزارش باگ‌های امنیتی",
      "بررسی امنیت سرورها و نرم‌افزارها",
      "ارائه راهکارهای بهبود امنیت",
    ],
  },
  {
    icon: <Bot className="h-12 w-12 text-arminred-500" />,
    title: "توسعه ربات‌ها و هوش مصنوعی",
    description: "طراحی و پیاده‌سازی ربات‌های هوشمند و سیستم‌های مبتنی بر هوش مصنوعی برای خودکارسازی فرآیندها و بهبود عملکرد.",
    details: [
      "ربات‌های تلگرام پیشرفته",
      "سیستم‌های یادگیری ماشین",
      "اسکریپت‌های هوشمند و خودکار",
      "چت‌بات‌ها و دستیارهای مجازی",
    ],
  },
];

const additionalServices = [
  {
    icon: <Database className="h-9 w-9" />,
    title: "طراحی و مدیریت دیتابیس",
    description: "پیاده‌سازی پایگاه‌های داده قدرتمند با ساختار بهینه و مدیریت کارآمد اطلاعات",
  },
  {
    icon: <Server className="h-9 w-9" />,
    title: "توسعه وب‌سرویس‌ها",
    description: "طراحی و پیاده‌سازی API‌ها و وب‌سرویس‌های قدرتمند با قابلیت مقیاس‌پذیری بالا",
  },
  {
    icon: <Globe className="h-9 w-9" />,
    title: "طراحی وب‌سایت",
    description: "توسعه وب‌سایت‌های حرفه‌ای، مدرن و واکنش‌گرا با تمرکز بر تجربه کاربری عالی",
  },
  {
    icon: <Cog className="h-9 w-9" />,
    title: "طراحی پنل‌های مدیریتی",
    description: "ایجاد پنل‌های مدیریتی داینامیک و استاتیک برای کنترل و مدیریت سیستم‌ها",
  },
  {
    icon: <BriefcaseBusiness className="h-9 w-9" />,
    title: "توسعه درگاه‌های ارتباطی",
    description: "ایجاد کانال‌های ارتباطی امن و کارآمد بین سیستم‌ها و سرویس‌های مختلف",
  },
  {
    icon: <Smartphone className="h-9 w-9" />,
    title: "توسعه اپلیکیشن موبایل",
    description: "برنامه‌نویسی اپلیکیشن‌های موبایل برای پلتفرم‌های اندروید و iOS",
  },
];

const platforms = [
  { name: "ویندوز", icon: <Monitor className="h-4 w-4" /> },
  { name: "مک", icon: <Monitor className="h-4 w-4" /> },
  { name: "لینوکس", icon: <Monitor className="h-4 w-4" /> },
  { name: "داس", icon: <Cpu className="h-4 w-4" /> },
  { name: "کنسول بوت", icon: <Cpu className="h-4 w-4" /> },
  { name: "اندروید", icon: <Smartphone className="h-4 w-4" /> },
  { name: "آی او اس", icon: <Smartphone className="h-4 w-4" /> },
];

const Service = () => {
  return (
    <SiteLayout>
      <ServiceHero />

      {/* Main Services */}
      <section className="py-24 md:py-32 bg-black relative overflow-hidden farsi-numbers">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 md:px-6 relative z-10"
        >
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400"
            >
              خدمات <span className="text-arminred-500">اصلی</span>
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 max-w-2xl mx-auto text-lg"
            >
              تخصص‌های کلیدی آرمین سافت در زمینه برنامه‌نویسی، امنیت و فناوری‌های هوشمند
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Platforms Support */}
      <section className="py-20 bg-gradient-to-br from-arminred-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 md:px-6 relative z-10"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              پشتیبانی از تمامی پلتفرم‌ها
            </h2>
            <p className="text-gray-300 text-lg">
              خدمات ما روی تمام سیستم‌عامل‌ها و پلتفرم‌های اصلی قابل ارائه است
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
              <PlatformBadge key={index} {...platform} index={index} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Additional Services */}
      <section className="py-24 md:py-32 bg-black">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 md:px-6"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
              سایر <span className="text-arminred-500">خدمات</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              علاوه بر خدمات اصلی، آرمین سافت مجموعه‌ای از خدمات تخصصی دیگر را نیز ارائه می‌دهد
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-black to-arminred-950 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"
        />
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="container mx-auto px-4 md:px-6 relative z-10"
        >
          <div className="backdrop-blur-xl bg-black/40 border border-arminred-500/10 max-w-4xl mx-auto p-8 md:p-12 rounded-2xl">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                آماده همکاری در پروژه شما هستم
              </h2>
              <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                هر آنچه در ذهن شما باشد، توسط آرمین سافت طراحی و پیاده‌سازی خواهد شد. کافیست درخواست خود را با من در میان بگذارید.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800">
                  <Link to="/contact">تماس با من</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-arminred-500/50 hover:bg-arminred-500/10">
                  <Link to="/work-sample">مشاهده نمونه کارها</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </SiteLayout>
  );
};

export default Service;
