
import { SiteLayout } from "@/components/site-layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { getPersonSchema } from "@/components/seo/schemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Calendar,
  Clock,
  Download,
  FileText,
  GraduationCap,
  MapPin,
  Medal,
  School,
  Star,
  Briefcase,
  Code,
  Shield,
  Bot,
  Server,
  Database,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  BookOpen,
  Award
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Resume = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  const skills = [
    { name: "برنامه‌نویسی وب", level: 95, icon: <Code className="h-5 w-5 text-arminred-600" /> },
    { name: "امنیت و هک", level: 90, icon: <Shield className="h-5 w-5 text-arminred-600" /> },
    { name: "هوش مصنوعی", level: 85, icon: <Bot className="h-5 w-5 text-arminred-600" /> },
    { name: "توسعه API", level: 88, icon: <Server className="h-5 w-5 text-arminred-600" /> },
    { name: "مدیریت دیتابیس", level: 92, icon: <Database className="h-5 w-5 text-arminred-600" /> },
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
        description="رزومه حرفه‌ای آرمین سافت - متخصص امنیت و برنامه‌نویس با بیش از ۵ سال تجربه"
        canonical="/Resume"
        keywords="رزومه آرمین سافت, سوابق کاری, تجربیات, مهارت‌ها, گواهینامه‌ها"
        schema={getPersonSchema()}
      />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>
        
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <FileText className="h-16 w-16 text-arminred-500" />
            </motion.div>
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
            >
              رزومه حرفه‌ای
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-gray-400 max-w-2xl"
            >
              متخصص برنامه‌نویسی و امنیت با بیش از ۵ سال تجربه در صنعت فناوری اطلاعات
            </motion.p>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
              <Button className="bg-arminred-600 hover:bg-arminred-700">
                <Download className="ml-2 h-4 w-4" />
                دانلود رزومه PDF
              </Button>
              <Button variant="outline">
                درخواست همکاری
                <ArrowRight className="mr-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Left Column - Skills & Certifications */}
            <div className="space-y-8">
              {/* Skills */}
              <motion.div variants={item} className="space-y-6">
                <h2 className="section-title flex items-center text-2xl font-bold">
                  <Star className="ml-2 h-6 w-6 text-arminred-500" />
                  مهارت‌های تخصصی
                </h2>
                {skills.map((skill, index) => (
                  <Card key={index} className="bg-black/50 backdrop-blur-xl border-gray-800 hover:border-arminred-500/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {skill.icon}
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground farsi-numbers">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </CardContent>
                  </Card>
                ))}
              </motion.div>

              {/* Certifications */}
              <motion.div variants={item} className="space-y-6">
                <h2 className="section-title flex items-center text-2xl font-bold">
                  <Award className="ml-2 h-6 w-6 text-arminred-500" />
                  گواهینامه‌ها
                </h2>
                {certifications.map((cert, index) => (
                  <Card key={index} className="bg-black/50 backdrop-blur-xl border-gray-800 hover:border-arminred-500/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-2">{cert.title}</h3>
                      <div className="text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <School className="ml-2 h-4 w-4" />
                          {cert.issuer}
                        </div>
                        <div className="flex items-center mt-2">
                          <Calendar className="ml-2 h-4 w-4" />
                          {cert.date}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </div>

            {/* Center & Right Columns - Experience & Education */}
            <div className="lg:col-span-2 space-y-8">
              {/* Experience */}
              <motion.div variants={item} className="space-y-6">
                <h2 className="section-title flex items-center text-2xl font-bold">
                  <Briefcase className="ml-2 h-6 w-6 text-arminred-500" />
                  تجربیات کاری
                </h2>
                {experience.map((exp, index) => (
                  <Card key={index} className="bg-black/50 backdrop-blur-xl border-gray-800 hover:border-arminred-500/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-bold">{exp.title}</h3>
                          <div className="text-muted-foreground">
                            <div className="flex items-center mt-2">
                              <MapPin className="ml-2 h-4 w-4" />
                              {exp.company} - {exp.location}
                            </div>
                            <div className="flex items-center mt-2">
                              <Clock className="ml-2 h-4 w-4" />
                              {exp.period}
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm">{achievement}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>

              {/* Education */}
              <motion.div variants={item} className="space-y-6">
                <h2 className="section-title flex items-center text-2xl font-bold">
                  <GraduationCap className="ml-2 h-6 w-6 text-arminred-500" />
                  تحصیلات
                </h2>
                {education.map((edu, index) => (
                  <Card key={index} className="bg-black/50 backdrop-blur-xl border-gray-800 hover:border-arminred-500/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-2">{edu.degree}</h3>
                      <div className="text-muted-foreground space-y-2">
                        <div className="flex items-center">
                          <School className="ml-2 h-4 w-4" />
                          {edu.school}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="ml-2 h-4 w-4" />
                          {edu.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="ml-2 h-4 w-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center">
                          <Medal className="ml-2 h-4 w-4" />
                          {edu.description}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-b from-background to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="container mx-auto px-4 md:px-6 relative">
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
              <Button asChild variant="outline" size="lg">
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
