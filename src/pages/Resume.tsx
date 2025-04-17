
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, Book, Brain, Calendar, Code, Database, Download, FileText, Cpu, Network, Shield } from "lucide-react";

const Resume = () => {
  // اطلاعات رزومه
  const personalInfo = {
    name: "آرمین اسکندری",
    title: "آرمین سافت",
    location: "ایران، تهران، پاکدشت",
    birthDate: "۲۸ خرداد ۱۳۷۸",
    phone: "۰۹۳۵۸۹۸۳۸۵۴",
  };

  const skills = [
    { name: "برنامه‌نویسی بک‌اند", level: 95 },
    { name: "امنیت و هک اخلاقی", level: 90 },
    { name: "طراحی نرم‌افزار", level: 85 },
    { name: "توسعه هوش مصنوعی", level: 80 },
    { name: "مدیریت دیتابیس", level: 88 },
    { name: "توسعه اپلیکیشن موبایل", level: 75 },
  ];

  const specialties = [
    { icon: <Code />, title: "طراحی نرم‌افزار", description: "توسعه نرم‌افزار برای سیستم‌عامل‌های مختلف از جمله ویندوز، مک، لینوکس، داس" },
    { icon: <Brain />, title: "هوش مصنوعی", description: "طراحی و توسعه ربات‌ها و سیستم‌های مبتنی بر هوش مصنوعی" },
    { icon: <Database />, title: "مدیریت دیتابیس", description: "طراحی و مدیریت انواع پایگاه‌های داده و ذخیره‌سازی اطلاعات" },
    { icon: <Shield />, title: "امنیت و هک اخلاقی", description: "تحلیل امنیتی سرورها و نرم‌افزارها، کشف و گزارش باگ‌ها" },
    { icon: <Cpu />, title: "طراحی وب‌سرویس", description: "توسعه API‌ها و وب‌سرویس‌های قدرتمند و کارآمد" },
    { icon: <Network />, title: "توسعه درگاه‌های ارتباطی", description: "ایجاد پل‌های ارتباطی بین سیستم‌ها و سرویس‌های مختلف" },
  ];

  const experiences = [
    {
      title: "توسعه‌دهنده ارشد نرم‌افزار",
      company: "هوشمند پرداز",
      period: "۱۳۹۹ - اکنون",
      description: "طراحی و توسعه سیستم‌های نرم‌افزاری با تمرکز بر امنیت و کارایی، مدیریت تیم‌های توسعه و پیاده‌سازی راهکارهای پیشرفته",
    },
    {
      title: "متخصص امنیت سایبری",
      company: "آژانس امنیت دیجیتال",
      period: "۱۳۹۷ - ۱۳۹۹",
      description: "انجام تست نفوذ و ارزیابی آسیب‌پذیری‌های امنیتی، شناسایی و گزارش باگ‌ها، ارائه راهکارهای امنیتی",
    },
    {
      title: "توسعه‌دهنده بک‌اند",
      company: "داده‌پردازان نوین",
      period: "۱۳۹۵ - ۱۳۹۷",
      description: "طراحی و پیاده‌سازی API‌ها و وب‌سرویس‌ها، توسعه سیستم‌های مدیریت پایگاه داده",
    },
  ];

  const educations = [
    {
      degree: "کارشناسی مهندسی کامپیوتر",
      school: "دانشگاه تهران",
      period: "۱۳۹۶ - ۱۴۰۰",
      description: "تمرکز بر نرم‌افزار و امنیت اطلاعات",
    },
    {
      degree: "کارشناسی ارشد امنیت سایبری",
      school: "دانشگاه امیرکبیر",
      period: "۱۴۰۰ - ۱۴۰۲",
      description: "پژوهش در زمینه روش‌های پیشرفته تست نفوذ و امنیت سیستم‌های توزیع‌شده",
    },
  ];

  const certifications = [
    "Certified Ethical Hacker (CEH)",
    "CompTIA Security+",
    "Certified Information Systems Security Professional (CISSP)",
    "Microsoft Certified: Azure Developer Associate",
    "Oracle Certified Professional, Java SE Developer",
  ];

  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">رزومه حرفه‌ای</h1>
            <p className="text-gray-300 text-lg mb-8">
              مهارت‌ها، تجربیات و دستاوردهای من در زمینه توسعه نرم‌افزار، امنیت و هک اخلاقی
            </p>
            <Button variant="outline" size="lg" className="bg-transparent border-white hover:bg-white/10">
              <Download className="ml-2 h-5 w-5" />
              دانلود رزومه
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 farsi-numbers">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* اطلاعات فردی و مهارت‌ها */}
            <div className="space-y-8">
              {/* اطلاعات فردی */}
              <Card className="border-2 border-arminred-500/20 bg-card shadow-lg overflow-hidden">
                <div className="bg-arminred-600 py-6 text-center text-white">
                  <div className="w-24 h-24 rounded-full bg-white/15 mx-auto flex items-center justify-center text-3xl font-bold">
                    AS
                  </div>
                  <h2 className="text-2xl font-bold mt-4">{personalInfo.name}</h2>
                  <p className="text-white/80">{personalInfo.title}</p>
                </div>
                <CardContent className="p-6 pt-8">
                  <ul className="space-y-4">
                    <li className="flex items-center text-muted-foreground">
                      <Calendar className="ml-2 h-5 w-5 text-arminred-500" />
                      <span className="text-sm">متولد: {personalInfo.birthDate}</span>
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <FileText className="ml-2 h-5 w-5 text-arminred-500" />
                      <span className="text-sm">محل سکونت: {personalInfo.location}</span>
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <Book className="ml-2 h-5 w-5 text-arminred-500" />
                      <span className="text-sm">شماره تماس: {personalInfo.phone}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* مهارت‌ها */}
              <Card className="border border-border bg-card overflow-hidden">
                <div className="bg-black p-4">
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <BadgeCheck className="ml-2 h-5 w-5 text-arminred-500" />
                    مهارت‌های تخصصی
                  </h3>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{skill.name}</span>
                          <span className="text-arminred-600 font-medium">{skill.level}%</span>
                        </div>
                        <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-arminred-700 to-arminred-500 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* گواهی‌نامه‌ها */}
              <Card className="border border-border bg-card overflow-hidden">
                <div className="bg-black p-4">
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <BadgeCheck className="ml-2 h-5 w-5 text-arminred-500" />
                    گواهی‌نامه‌ها
                  </h3>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {certifications.map((cert, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 mt-2 rounded-full bg-arminred-500 ml-2"></div>
                        <span className="text-sm text-foreground">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* تجربیات، تحصیلات و تخصص‌ها */}
            <div className="lg:col-span-2 space-y-8">
              {/* تخصص‌ها */}
              <div>
                <h3 className="section-title mb-8">تخصص‌ها و خدمات</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {specialties.map((specialty, index) => (
                    <Card key={index} className="bg-card hover:shadow-md transition-all duration-300 border border-border hover:border-arminred-500/30">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-lg bg-arminred-600/10 flex items-center justify-center text-arminred-600 mb-4">
                          {specialty.icon}
                        </div>
                        <h4 className="text-lg font-bold mb-2">{specialty.title}</h4>
                        <p className="text-sm text-muted-foreground">{specialty.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* تجربیات کاری */}
              <div>
                <h3 className="section-title mb-8">تجربیات کاری</h3>
                <div className="space-y-6">
                  {experiences.map((experience, index) => (
                    <div key={index} className="relative pr-8 before:content-[''] before:absolute before:top-0 before:right-3 before:w-[1px] before:h-full before:bg-arminred-500/50 after:content-[''] after:absolute after:top-0 after:right-0 after:w-6 after:h-6 after:rounded-full after:border-2 after:border-arminred-500 after:bg-background">
                      <div className="mb-2">
                        <h4 className="text-xl font-bold">{experience.title}</h4>
                        <div className="flex items-center text-muted-foreground mt-1">
                          <span className="font-medium">{experience.company}</span>
                          <span className="mx-2">|</span>
                          <span>{experience.period}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {experience.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* تحصیلات */}
              <div>
                <h3 className="section-title mb-8">تحصیلات</h3>
                <div className="space-y-6">
                  {educations.map((education, index) => (
                    <div key={index} className="relative pr-8 before:content-[''] before:absolute before:top-0 before:right-3 before:w-[1px] before:h-full before:bg-arminred-500/50 after:content-[''] after:absolute after:top-0 after:right-0 after:w-6 after:h-6 after:rounded-full after:border-2 after:border-arminred-500 after:bg-background">
                      <div className="mb-2">
                        <h4 className="text-xl font-bold">{education.degree}</h4>
                        <div className="flex items-center text-muted-foreground mt-1">
                          <span className="font-medium">{education.school}</span>
                          <span className="mx-2">|</span>
                          <span>{education.period}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {education.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* باور ذهنی و مسیر حرفه‌ای */}
              <Card className="bg-gradient-to-br from-gray-900 to-black text-white border-none shadow-xl overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-arminred-500">باور ذهنی و مسیر حرفه‌ای</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    هر آنچه در ذهن شما باشد، توسط آرمین سافت طراحی و پیاده‌سازی خواهد شد.
                  </p>
                  <p className="text-xl font-medium text-white">
                    ✨آرمین سافت، خالق "هوشمند پرداز"، با قدرت در مسیر نوآوری و پیشرفت قدم بر می‌دارد.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Resume;
