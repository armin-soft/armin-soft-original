
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Calendar, CheckCircle, Clock, Code, Download, MapPin, Shield, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { icon: <Calendar className="h-8 w-8 text-arminred-600" />, value: "+۵", label: "سال تجربه" },
    { icon: <CheckCircle className="h-8 w-8 text-arminred-600" />, value: "+۵۰", label: "پروژه موفق" },
    { icon: <Users className="h-8 w-8 text-arminred-600" />, value: "+۳۰", label: "مشتری راضی" },
    { icon: <Clock className="h-8 w-8 text-arminred-600" />, value: "۲۴/۷", label: "پشتیبانی" },
  ];

  const values = [
    {
      title: "کیفیت",
      description: "تعهد به ارائه کار با بالاترین سطح کیفیت و استاندارد",
      icon: <Star className="h-10 w-10 text-arminred-600" />,
    },
    {
      title: "نوآوری",
      description: "استفاده از فناوری‌های جدید و راهکارهای خلاقانه برای حل مشکلات",
      icon: <Code className="h-10 w-10 text-arminred-600" />,
    },
    {
      title: "امنیت",
      description: "اولویت دادن به امنیت در تمامی مراحل طراحی و توسعه نرم‌افزار",
      icon: <Shield className="h-10 w-10 text-arminred-600" />,
    },
  ];

  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 bg-arminred-500/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-56 h-56 bg-arminred-600/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">درباره آرمین سافت</h1>
            <p className="text-lg text-gray-300 mb-8">
              داستان من، تخصص‌ها و باورها در زمینه توسعه نرم‌افزار، امنیت و هک اخلاقی
            </p>
          </div>
        </div>
      </section>

      {/* About Me Info */}
      <section className="py-16 md:py-24 farsi-numbers">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="section-title mb-8">آرمین سافت کیست؟</h2>
              <div className="space-y-4 text-base text-foreground">
                <p>
                  من آرمین اسکندری، با نام حرفه‌ای <span className="font-semibold text-arminred-600">آرمین سافت</span>، متولد ۲۸ خرداد ۱۳۷۸ در تهران، یک توسعه‌دهنده نرم‌افزار و متخصص امنیت سایبری هستم.
                </p>
                <p>
                  با بیش از ۵ سال تجربه در زمینه‌های مختلف فناوری اطلاعات، تمرکز اصلی من بر توسعه نرم‌افزارهای تخصصی، امنیت و هک اخلاقی و طراحی سیستم‌های هوشمند است.
                </p>
                <p>
                  من به عنوان خالق "هوشمند پرداز"، با قدرت در مسیر نوآوری و پیشرفت قدم بر می‌دارم و باور دارم هر آنچه در ذهن شما باشد، قابل طراحی و پیاده‌سازی است.
                </p>
                <p>
                  در کار من، تمرکز بر توسعه بک‌اند و امنیت سیستم‌هاست. من علاقه خاصی به تحلیل امنیتی سرورها و نرم‌افزارها دارم و همواره در تلاش برای کشف و گزارش باگ‌ها به مدیران سیستم‌ها هستم.
                </p>
              </div>

              <div className="flex items-start mt-8 space-x-4 space-x-reverse">
                <MapPin className="text-arminred-600 h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-semibold">محل سکونت</h3>
                  <p className="text-muted-foreground">ایران، تهران، پاکدشت</p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild className="bg-arminred-600 hover:bg-arminred-700">
                  <Link to="/contact">
                    تماس با من
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a href="#" className="flex items-center">
                    <Download className="ml-2 h-5 w-5" />
                    دانلود رزومه
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-black to-gray-900 p-1">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-arminred-600 to-arminred-800 p-1 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                      <div className="flex flex-col items-center justify-center text-center p-4">
                        <h3 className="text-4xl font-bold text-arminred-600 mb-2">آرمین</h3>
                        <h3 className="text-4xl font-bold mb-3">سافت</h3>
                        <p className="text-sm text-muted-foreground">توسعه‌دهنده نرم‌افزار</p>
                        <p className="text-sm text-muted-foreground">متخصص امنیت سایبری</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-6 border-2 border-dashed border-arminred-500/30 rounded-full animate-spin-slow" style={{ animationDuration: '30s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-arminred-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise & Skills */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Skills */}
            <div>
              <h2 className="section-title mb-8">تخصص‌ها و مهارت‌ها</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="section-subtitle">طراحی نرم‌افزار</h3>
                  <p className="text-muted-foreground mb-4">توسعه نرم‌افزارهای قدرتمند و کاربردی برای سیستم‌عامل‌های مختلف</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-arminred-500/10 text-arminred-600 dark:text-arminred-400 text-sm py-1 px-3 rounded">ویندوز</span>
                    <span className="bg-arminred-500/10 text-arminred-600 dark:text-arminred-400 text-sm py-1 px-3 rounded">مک</span>
                    <span className="bg-arminred-500/10 text-arminred-600 dark:text-arminred-400 text-sm py-1 px-3 rounded">لینوکس</span>
                    <span className="bg-arminred-500/10 text-arminred-600 dark:text-arminred-400 text-sm py-1 px-3 rounded">داس</span>
                    <span className="bg-arminred-500/10 text-arminred-600 dark:text-arminred-400 text-sm py-1 px-3 rounded">کنسول بوت</span>
                    <span className="bg-arminred-500/10 text-arminred-600 dark:text-arminred-400 text-sm py-1 px-3 rounded">اندروید</span>
                    <span className="bg-arminred-500/10 text-arminred-600 dark:text-arminred-400 text-sm py-1 px-3 rounded">آی او اس</span>
                  </div>
                </div>

                <div>
                  <h3 className="section-subtitle">امنیت و هک اخلاقی</h3>
                  <p className="text-muted-foreground mb-4">تحلیل امنیتی سرورها و نرم‌افزارها، کشف و گزارش باگ‌های امنیتی</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-arminred-500/10 text-arminred-600 dark:text-arminred-400 text-sm py-1 px-3 rounded">تست نفوذ</span>
                    <span className="bg-arminred-500/10 text-arminred-600 dark:text-arminred-400 text-sm py-1 px-3 rounded">تحلیل آسیب‌پذیری</span>
                    <span className="bg-arminred-500/10 text-arminred-600 dark:text-arminred-400 text-sm py-1 px-3 rounded">امنیت شبکه</span>
                    <span className="bg-arminred-500/10 text-arminred-600 dark:text-arminred-400 text-sm py-1 px-3 rounded">امنیت وب</span>
                  </div>
                </div>

                <div>
                  <h3 className="section-subtitle">توسعه هوشمند</h3>
                  <p className="text-muted-foreground mb-4">طراحی و توسعه ربات‌ها، اسکریپت‌های هوشمند و سیستم‌های هوش مصنوعی</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-arminred-500/10 text-arminred-600 dark:text-arminred-400 text-sm py-1 px-3 rounded">ربات‌های تلگرام</span>
                    <span className="bg-arminred-500/10 text-arminred-600 dark:text-arminred-400 text-sm py-1 px-3 rounded">هوش مصنوعی</span>
                    <span className="bg-arminred-500/10 text-arminred-600 dark:text-arminred-400 text-sm py-1 px-3 rounded">یادگیری ماشین</span>
                    <span className="bg-arminred-500/10 text-arminred-600 dark:text-arminred-400 text-sm py-1 px-3 rounded">اسکریپت‌های خودکار</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Values */}
            <div>
              <h2 className="section-title mb-8">ارزش‌ها و باورها</h2>
              <div className="space-y-8">
                {values.map((value, index) => (
                  <Card key={index} className="bg-card border border-border hover:border-arminred-500/30 transition-all duration-300">
                    <CardContent className="p-6 flex">
                      <div className="mr-4 flex-shrink-0">{value.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-10">
                <h2 className="section-subtitle">باور ذهنی و مسیر حرفه‌ای</h2>
                <blockquote className="border-r-4 border-arminred-600 pr-4 italic text-lg text-muted-foreground mt-4">
                  هر آنچه در ذهن شما باشد، توسط آرمین سافت طراحی و پیاده‌سازی خواهد شد.
                </blockquote>
                <p className="text-foreground font-medium mt-4">
                  ✨آرمین سافت، خالق "هوشمند پرداز"، با قدرت در مسیر نوآوری و پیشرفت قدم بر می‌دارد.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">آماده همکاری با شما هستم</h2>
            <p className="text-gray-300 mb-8">
              برای شروع همکاری و صحبت درباره پروژه‌های خود با من تماس بگیرید
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-arminred-600 hover:bg-arminred-700">
                <Link to="/contact">
                  تماس با من
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link to="/service">
                  مشاهده خدمات
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default About;
