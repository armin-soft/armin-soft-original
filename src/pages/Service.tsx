
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck, Code, Monitor, Server, Shield, Database, Bot, Lock, Globe, BriefcaseBusiness, Brain, Cpu, Smartphone, Cog, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Service = () => {
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
            <h1 className="text-3xl md:text-5xl font-bold mb-6">خدمات تخصصی آرمین سافت</h1>
            <p className="text-lg text-gray-300 mb-8">
              ارائه راهکارهای نرم‌افزاری پیشرفته، خدمات امنیتی حرفه‌ای و توسعه سیستم‌های هوشمند
              برای کسب و کارها و پروژه‌های شخصی
            </p>
            <Button asChild size="lg" className="bg-arminred-600 hover:bg-arminred-700">
              <Link to="/contact">
                مشاوره رایگان
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24 bg-muted/30 farsi-numbers">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">خدمات <span className="text-arminred-600">اصلی</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              تخصص‌های کلیدی آرمین سافت در زمینه برنامه‌نویسی، امنیت و فناوری‌های هوشمند
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="bg-card border-2 border-border hover:border-arminred-500/30 transition-all duration-300 h-full flex flex-col overflow-hidden shadow-sm hover:shadow-md">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="bg-arminred-500/10 p-3 rounded-lg">
                      {service.icon}
                    </div>
                    <div className="w-16 h-16 flex items-center justify-center bg-black/10 dark:bg-white/5 rounded-full text-3xl text-arminred-600 font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <CardTitle className="text-2xl mt-4">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center">
                        <BadgeCheck className="ml-2 h-5 w-5 text-arminred-500 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full justify-between hover:text-arminred-600 hover:bg-arminred-500/5">
                    <Link to="/contact" className="group">
                      درخواست این خدمت
                      <ArrowRight className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Support */}
      <section className="py-12 bg-arminred-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">پشتیبانی از تمامی پلتفرم‌ها</h2>
            <p className="text-white/80 mt-2">
              خدمات ما روی تمام سیستم‌عامل‌ها و پلتفرم‌های اصلی قابل ارائه است
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-4">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white/10 px-4 py-2 rounded-full flex items-center space-x-2 space-x-reverse">
                {platform.icon}
                <span className="text-sm font-medium">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">سایر <span className="text-arminred-600">خدمات</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              علاوه بر خدمات اصلی، آرمین سافت مجموعه‌ای از خدمات تخصصی دیگر را نیز ارائه می‌دهد
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="bg-card border border-border hover:border-arminred-500/20 transition-all duration-300">
                <CardContent className="p-6 flex flex-col">
                  <div className="bg-accent rounded-lg p-3 w-16 h-16 flex items-center justify-center mb-4 text-foreground">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <Button asChild variant="link" className="mt-auto pr-0 justify-start text-arminred-600 hover:text-arminred-700">
                    <Link to="/contact" className="group">
                      درخواست مشاوره
                      <ArrowRight className="h-4 w-4 mr-1 transition-transform group-hover:-translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass-card max-w-3xl mx-auto p-8 md:p-10">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                آماده همکاری در پروژه شما هستم
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                هر آنچه در ذهن شما باشد، توسط آرمین سافت طراحی و پیاده‌سازی خواهد شد. کافیست درخواست خود را با من در میان بگذارید.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-arminred-600 hover:bg-arminred-700">
                  <Link to="/contact">
                    تماس با من
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                  <Link to="/work-sample">
                    مشاهده نمونه کارها
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Service;
