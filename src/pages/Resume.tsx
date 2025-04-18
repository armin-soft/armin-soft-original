import { SiteLayout } from "@/components/site-layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { getPersonSchema } from "@/components/seo/schemas";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ResumeHero } from "@/components/resume/ResumeHero";
import { SkillCard } from "@/components/resume/SkillCard";
import { ExperienceCard } from "@/components/resume/ExperienceCard";
import { EducationCard } from "@/components/resume/EducationCard";
import { Download, ArrowRight, Code, Shield, Bot, Layout, Monitor, Smartphone, FileCode, Database, BookCode, Server, Award } from "lucide-react";

const Resume = () => {
  const skills = [
    // Security & AI
    { name: "هک و امنیت", level: 99, icon: <Shield className="h-5 w-5 text-arminred-600" /> },
    { name: "طراحی هوش مصنوعی", level: 90, icon: <Bot className="h-5 w-5 text-arminred-600" /> },
    
    // Design & Development
    { name: "طراحی دیزاین", level: 18, icon: <Layout className="h-5 w-5 text-arminred-600" /> },
    { name: "طراحی سایت", level: 100, icon: <Monitor className="h-5 w-5 text-arminred-600" /> },
    { name: "طراحی وب سرویس", level: 95, icon: <Code className="h-5 w-5 text-arminred-600" /> },
    { name: "طراحی اسکریپت", level: 100, icon: <FileCode className="h-5 w-5 text-arminred-600" /> },
    { name: "طراحی نرم افزار", level: 70, icon: <Monitor className="h-5 w-5 text-arminred-600" /> },
    { name: "طراحی اپلیکیشن", level: 59, icon: <Smartphone className="h-5 w-5 text-arminred-600" /> },
    
    // Web Technologies
    { name: "اچ تی ام ال", level: 100, icon: <Code className="h-5 w-5 text-arminred-600" /> },
    { name: "سی اس اس", level: 35, icon: <Code className="h-5 w-5 text-arminred-600" /> },
    { name: "جاوا اسکریپت", level: 64, icon: <Code className="h-5 w-5 text-arminred-600" /> },
    { name: "جی‌ کوئری", level: 60, icon: <Code className="h-5 w-5 text-arminred-600" /> },
    { name: "پی اچ پی", level: 90, icon: <Database className="h-5 w-5 text-arminred-600" /> },
    
    // Programming Languages
    { name: "سی پلاس پلاس", level: 51, icon: <Code className="h-5 w-5 text-arminred-600" /> },
    { name: "سی پلاس", level: 52, icon: <Code className="h-5 w-5 text-arminred-600" /> },
    { name: "سی شارپ", level: 57, icon: <Code className="h-5 w-5 text-arminred-600" /> },
    { name: "سی", level: 63, icon: <Code className="h-5 w-5 text-arminred-600" /> },
    { name: "سوئیفت", level: 63, icon: <Code className="h-5 w-5 text-arminred-600" /> },
    { name: "جاوا", level: 68, icon: <Code className="h-5 w-5 text-arminred-600" /> },
    { name: "لوا", level: 91, icon: <Code className="h-5 w-5 text-arminred-600" /> },
    { name: "پایتون", level: 98, icon: <Code className="h-5 w-5 text-arminred-600" /> },
    { name: "پرل", level: 98, icon: <BookCode className="h-5 w-5 text-arminred-600" /> },
    { name: "شل", level: 98, icon: <FileCode className="h-5 w-5 text-arminred-600" /> },
  ];

  const education = [
    {
      degree: "کارشناسی مهندسی نرم‌افزار",
      school: "دانشگاه آزاد اسلامی",
      location: "تهران، ایران",
      period: "۱۳۹۶ - ۱۴۰۰",
      description: "معدل: ۱۸.۵",
    },
    {
      degree: "دوره تخصصی امنیت سایبری",
      school: "آکادمی امنیت سایبری",
      location: "آنلاین",
      period: "۱۴۰۱",
      description: "گواهینامه بین‌المللی CEH",
    },
  ];

  const experience = [
    {
      title: "توسعه‌دهنده ارشد نرم‌افزار",
      company: "شرکت فناوری پیشرو",
      location: "تهران",
      period: "۱۴۰۰ - اکنون",
      achievements: [
        "توسعه و پیاده‌سازی بیش از ۱۰ پروژه بزرگ مقیاس",
        "بهینه‌سازی عملکرد سیستم‌ها تا ۴۰٪",
        "مدیریت تیم ۵ نفره توسعه‌دهندگان",
      ],
    },
    {
      title: "متخصص امنیت و پنتستر",
      company: "گروه امنیتی سپر",
      location: "تهران",
      period: "۱۳۹۸ - ۱۴۰۰",
      achievements: [
        "تست نفوذ و ارزیابی امنیتی بیش از ۲۰ سامانه",
        "کشف و گزارش بیش از ۱۰۰ آسیب‌پذیری حیاتی",
        "برگزاری دوره‌های آموزشی امنیت برای تیم‌های توسعه",
      ],
    },
  ];

  const certifications = [
    {
      title: "CEH (Certified Ethical Hacker)",
      issuer: "EC-Council",
      date: "۱۴۰۱",
    },
    {
      title: "CISSP (Certified Information Systems Security Professional)",
      issuer: "ISC²",
      date: "۱۴۰۲",
    },
  ];

  return (
    <SiteLayout>
      <SEOHead 
        title="رزومه"
        description="رزومه حرفه‌ای آرمین سافت - متخصص برنامه‌نویسی و امنیت با تجربه در زمینه‌های مختلف فناوری"
        canonical="/Resume"
        keywords="رزومه آرمین سافت, سوابق کاری, تجربیات, مهارت‌ها, گواهینامه‌ها"
        schema={getPersonSchema()}
      />
      
      <ResumeHero />

      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Code className="ml-2 h-6 w-6 text-arminred-500" />
                مهارت‌های تخصصی
              </h2>
              {skills.map((skill, index) => (
                <SkillCard
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  index={index}
                />
              ))}
            </motion.div>

            {/* Experience & Education */}
            <div className="lg:col-span-2 space-y-12">
              {/* Experience Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Server className="ml-2 h-6 w-6 text-arminred-500" />
                  تجربیات کاری
                </h2>
                {experience.map((exp, index) => (
                  <ExperienceCard key={index} {...exp} index={index} />
                ))}
              </div>

              {/* Education Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Bot className="ml-2 h-6 w-6 text-arminred-500" />
                  تحصیلات
                </h2>
                {education.map((edu, index) => (
                  <EducationCard key={index} {...edu} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">آماده همکاری با شما هستم</h2>
            <p className="text-gray-400 mb-8">برای شروع همکاری و صحبت درباره پروژه‌های خود با من تماس بگیرید</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800">
                <Link to="/contact">تماس با من</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/10 hover:bg-white/5">
                <a href="#" className="flex items-center">
                  <Download className="ml-2 h-4 w-4" />
                  دریافت رزومه
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Resume;
