
import React, { useEffect } from "react";
import { SiteLayout } from "@/components/site-layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { getPersonSchema } from "@/components/seo/schemas";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Download, ArrowRight, Code, Shield, Bot, Layout, 
  Monitor, Smartphone, FileCode, Database, Server, Award, Zap, BriefcaseBusiness, GraduationCap,
  Brain, Palette, LayoutDashboard, Terminal
} from "lucide-react";

// Components
import { ResumeHero } from "@/components/resume/ResumeHero";
import { Technologies } from "@/components/resume/Technologies";
import { ExperienceTimeline } from "@/components/resume/ExperienceTimeline";
import { EducationTimeline } from "@/components/resume/EducationTimeline";
import { StatItem } from "@/components/resume/StatItem";
import { ProjectCard } from "@/components/resume/ProjectCard";
import { CertificateCard } from "@/components/resume/CertificateCard";
import { SkillCard } from "@/components/resume/SkillCard";
import { TechBadge, TechBadgeGroup } from "@/components/resume/TechBadge";
import { toPersianNumbers } from "@/utils/numberUtils";

// Data
const experiences = [
  {
    id: "exp1",
    title: "توسعه‌دهنده ارشد بک‌اند",
    company: "تکنو سافت",
    location: "تهران",
    period: "۱۴۰۱ - اکنون",
    description: "مسئول طراحی، توسعه و بهینه‌سازی سیستم‌های بک‌اند و مدیریت تیم برنامه‌نویسی",
    achievements: [
      "توسعه و مدیریت API‌های RESTful برای سرویس‌های مختلف شرکت با استفاده از Python و Django",
      "بهینه‌سازی عملکرد سرور و کاهش زمان پاسخگویی به درخواست‌ها تا ۶۰ درصد",
      "پیاده‌سازی سیستم امن احراز هویت و مجوزدهی با استفاده از توکن‌های JWT و OAuth 2.0",
      "همکاری با تیم DevOps برای استقرار مداوم و خودکارسازی فرآیندها با استفاده از Docker و Kubernetes",
      "راه‌اندازی و مدیریت پایگاه‌های داده PostgreSQL و MongoDB"
    ],
    technologies: ["Python", "Django", "FastAPI", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "Redis", "RabbitMQ"]
  },
  {
    id: "exp2",
    title: "برنامه‌نویس بک‌اند",
    company: "شبکه گستر",
    location: "تهران",
    period: "۱۳۹۸ - ۱۴۰۱",
    description: "توسعه و پشتیبانی از سیستم‌های مختلف با تمرکز بر امنیت و کارایی",
    achievements: [
      "توسعه وب‌سرویس‌ها برای اپلیکیشن‌های موبایل و وب با استفاده از Node.js و Express",
      "طراحی و پیاده‌سازی معماری میکروسرویس و مدیریت ارتباط بین سرویس‌های مختلف",
      "بهبود امنیت سیستم‌ها و جلوگیری از حملات متداول وب مانند XSS و SQL Injection",
      "راه‌اندازی و مدیریت سرورهای لینوکس و کانتینرها با Docker و Docker Compose"
    ],
    technologies: ["Node.js", "Express", "MySQL", "Redis", "Docker", "Linux", "AWS", "REST API", "WebSockets"]
  },
  {
    id: "exp3",
    title: "توسعه‌دهنده فول‌استک",
    company: "دیتا پردازان",
    location: "مشهد",
    period: "۱۳۹۷ - ۱۳۹۸",
    description: "توسعه اپلیکیشن‌های وب مبتنی بر فناوری‌های مدرن",
    achievements: [
      "توسعه اپلیکیشن‌های وب مبتنی بر React و Node.js با معماری SPA",
      "طراحی و پیاده‌سازی پایگاه‌های داده SQL و NoSQL",
      "پیاده‌سازی طراحی رابط کاربری واکنش‌گرا با استفاده از CSS3 و Bootstrap",
      "ارتباط با مشتریان و پیگیری نیازمندی‌های پروژه"
    ],
    technologies: ["React", "Node.js", "MongoDB", "MySQL", "HTML5", "CSS3", "Git", "JavaScript", "Bootstrap"]
  }
];

const education = [
  {
    id: "edu1",
    degree: "کارشناسی ارشد",
    field: "مهندسی نرم افزار",
    school: "دانشگاه تهران",
    location: "تهران",
    period: "۱۳۹۵ - ۱۳۹۷",
    description: "پایان‌نامه با موضوع امنیت در معماری میکروسرویس‌ها با نمره عالی"
  },
  {
    id: "edu2",
    degree: "کارشناسی",
    field: "مهندسی کامپیوتر",
    school: "دانشگاه فردوسی",
    location: "مشهد",
    period: "۱۳۹۱ - ۱۳۹۵",
    description: "فارغ‌التحصیل با معدل ۱۸.۵ از ۲۰"
  }
];

const certificates = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "اردیبهشت ۱۴۰۲",
    credentialUrl: "https://aws.amazon.com/certification/",
    index: 0
  },
  {
    title: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "آذر ۱۴۰۱",
    credentialUrl: "https://www.scrum.org/certifications",
    index: 1
  },
  {
    title: "Certified Ethical Hacker",
    issuer: "EC-Council",
    date: "خرداد ۱۴۰۰",
    credentialUrl: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
    index: 2
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera - Stanford University",
    date: "تیر ۱۳۹۹",
    credentialUrl: "https://www.coursera.org/specializations/deep-learning",
    index: 3
  }
];

const projects = [
  {
    title: "سامانه مدیریت هوشمند",
    description: "طراحی و پیاده‌سازی یک سیستم مدیریت کسب و کار با هوش مصنوعی و پنل ادمین حرفه‌ای",
    image: "./Assets/Image/placeholder.svg",
    demoUrl: "https://demo.armin-soft.ir/sms",
    repoUrl: "https://github.com/arminsoft/smart-management-system",
    technologies: ["Python", "Django", "React", "PostgreSQL", "Docker", "Redis"],
    index: 0
  },
  {
    title: "اپلیکیشن امنیت سایبری",
    description: "توسعه نرم‌افزار تخصصی تست نفوذ و ارزیابی امنیتی با قابلیت شناسایی آسیب‌پذیری‌ها",
    image: "./Assets/Image/placeholder.svg",
    demoUrl: "https://demo.armin-soft.ir/security",
    repoUrl: "https://github.com/arminsoft/security-scanner",
    technologies: ["Go", "React", "GraphQL", "Docker", "AWS"],
    index: 1
  },
  {
    title: "پلتفرم آموزش آنلاین",
    description: "طراحی و توسعه سیستم جامع آموزش مجازی با قابلیت‌های پیشرفته برگزاری کلاس و آزمون",
    image: "./Assets/Image/placeholder.svg",
    demoUrl: "https://demo.armin-soft.ir/academy",
    repoUrl: "https://github.com/arminsoft/online-learning",
    technologies: ["Next.js", "Node.js", "MongoDB", "WebRTC", "Redux"],
    index: 2
  }
];

const skills = [
  {
    name: "هک و امنیت",
    level: 99,
    icon: <Shield className="w-5 h-5 text-arminred-400" />,
    index: 0
  },
  {
    name: "طراحی هوش مصنوعی",
    level: 90,
    icon: <Brain className="w-5 h-5 text-arminred-400" />,
    index: 1
  },
  {
    name: "طراحی دیزاین",
    level: 18,
    icon: <Palette className="w-5 h-5 text-arminred-400" />,
    index: 2
  },
  {
    name: "طراحی سایت",
    level: 100,
    icon: <LayoutDashboard className="w-5 h-5 text-arminred-400" />,
    index: 3
  },
  {
    name: "طراحی وب سرویس",
    level: 95,
    icon: <Server className="w-5 h-5 text-arminred-400" />,
    index: 4
  },
  {
    name: "طراحی اسکریپت",
    level: 100,
    icon: <FileCode className="w-5 h-5 text-arminred-400" />,
    index: 5
  },
  {
    name: "طراحی نرم افزار",
    level: 70,
    icon: <Monitor className="w-5 h-5 text-arminred-400" />,
    index: 6
  },
  {
    name: "طراحی اپلیکیشن",
    level: 59,
    icon: <Smartphone className="w-5 h-5 text-arminred-400" />,
    index: 7
  },
  {
    name: "اچ تی ام ال",
    level: 100,
    icon: <Code className="w-5 h-5 text-arminred-400" />,
    index: 8
  },
  {
    name: "سی اس اس",
    level: 35,
    icon: <Code className="w-5 h-5 text-arminred-400" />,
    index: 9
  },
  {
    name: "جاوا اسکریپت",
    level: 64,
    icon: <Code className="w-5 h-5 text-arminred-400" />,
    index: 10
  },
  {
    name: "جی‌ کوئری",
    level: 60,
    icon: <Code className="w-5 h-5 text-arminred-400" />,
    index: 11
  },
  {
    name: "پی اچ پی",
    level: 90,
    icon: <Code className="w-5 h-5 text-arminred-400" />,
    index: 12
  },
  {
    name: "سی پلاس پلاس",
    level: 51,
    icon: <Code className="w-5 h-5 text-arminred-400" />,
    index: 13
  },
  {
    name: "سی پلاس",
    level: 52,
    icon: <Code className="w-5 h-5 text-arminred-400" />,
    index: 14
  },
  {
    name: "سی شارپ",
    level: 57,
    icon: <Code className="w-5 h-5 text-arminred-400" />,
    index: 15
  },
  {
    name: "سی",
    level: 63,
    icon: <Code className="w-5 h-5 text-arminred-400" />,
    index: 16
  },
  {
    name: "سوئیفت",
    level: 63,
    icon: <Code className="w-5 h-5 text-arminred-400" />,
    index: 17
  },
  {
    name: "جاوا",
    level: 68,
    icon: <Code className="w-5 h-5 text-arminred-400" />,
    index: 18
  },
  {
    name: "لوا",
    level: 91,
    icon: <Code className="w-5 h-5 text-arminred-400" />,
    index: 19
  },
  {
    name: "پایتون",
    level: 98,
    icon: <Code className="w-5 h-5 text-arminred-400" />,
    index: 20
  },
  {
    name: "پرل",
    level: 98,
    icon: <Code className="w-5 h-5 text-arminred-400" />,
    index: 21
  },
  {
    name: "شل",
    level: 98,
    icon: <Code className="w-5 h-5 text-arminred-400" />,
    index: 22
  }
];

const Resume = () => {
  // پارالاکس اسکرول
  const { scrollYProgress } = useScroll();
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  
  useEffect(() => {
    // اسکرول به بالای صفحه هنگام بارگذاری
    window.scrollTo(0, 0);
  }, []);

  return (
    <SiteLayout>
      <SEOHead 
        title="رزومه"
        description="رزومه حرفه‌ای آرمین سافت - متخصص برنامه‌نویسی بک‌اند با تجربه در توسعه نرم‌افزار، مدیریت سرور و امنیت"
        canonical="/Resume"
        keywords="رزومه برنامه نویس, سوابق کاری, تجربیات برنامه نویسی, مهارت‌های فنی, گواهینامه‌های تخصصی"
      />
      
      {/* بخش هدر رزومه */}
      <ResumeHero />

      <main className="relative bg-gradient-to-b from-black to-gray-900 farsi-numbers">
        {/* --- بخش اقدامات و خلاصه‌ها --- */}
        <section className="relative z-10 py-14 bg-gradient-to-b from-black to-gray-900">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-6 relative inline-block section-title">
                  اقدامات
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-arminred-500 to-transparent"></span>
                </h2>
                <div className="space-y-6 text-base leading-8 text-gray-300">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="p-5 rounded-lg border border-gray-800 bg-black/50 backdrop-blur-sm hover:border-arminred-500/50 transition-all duration-300 group"
                  >
                    <span className="font-semibold text-arminred-500 flex items-center gap-2 mb-2">
                      <BriefcaseBusiness className="w-4 h-4" />
                      موقعیت شغلی:
                    </span>
                    <p className="group-hover:text-white transition-colors">
                      کارمند بخش نرم افزاری و امنیتی آمبرلا در کشور فرانسه در منطقه پاریس هستم.
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="p-5 rounded-lg border border-gray-800 bg-black/50 backdrop-blur-sm hover:border-arminred-500/50 transition-all duration-300 group"
                  >
                    <span className="font-semibold text-arminred-500 flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4" />
                      هک و امنیت:
                    </span>
                    <p className="group-hover:text-white transition-colors">
                      بصورت تخصصی یک سرور یا ابزار را مورد بررسی قرار می‌دهم و در صورت کشف باگ به مدیران گزارش می‌کنم.
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="p-5 rounded-lg border border-gray-800 bg-black/50 backdrop-blur-sm hover:border-arminred-500/50 transition-all duration-300 group"
                  >
                    <span className="font-semibold text-arminred-500 flex items-center gap-2 mb-2">
                      <Code className="w-4 h-4" />
                      تجربیات:
                    </span>
                    <p className="group-hover:text-white transition-colors">
                      به عنوان توسعه‌دهنده بک‌اند کدنویسی می‌کنم و هیچ علاقه‌ای به فرانت‌اند ندارم.
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="p-5 rounded-lg border border-gray-800 bg-black/50 backdrop-blur-sm hover:border-arminred-500/50 transition-all duration-300 group"
                  >
                    <span className="font-semibold text-arminred-500 flex items-center gap-2 mb-2">
                      <Brain className="w-4 h-4" />
                      الگوی ذهنی:
                    </span>
                    <p className="group-hover:text-white transition-colors">
                      هر آن چیزی که در ذهن شما خطور پیدا می‌کند با استفاده از هوش مصنوعی در پلتفرم‌های خاص طراحی می‌شود.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative hidden lg:block"
              >
                <div className="absolute top-0 right-0 w-96 h-96 bg-arminred-500/5 rounded-full filter blur-[100px] z-0"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-arminred-500/20 to-transparent rounded-lg filter blur-[30px] z-0 opacity-60"></div>
                    
                    {/* Decorative tech elements */}
                    {['Server', 'Security', 'Backend', 'API'].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 * index, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative z-10 p-6 rounded-xl border border-gray-800 bg-black/70 backdrop-blur-xl shadow-lg hover:border-arminred-500/40 transition-all duration-300 group"
                      >
                        <div className="mb-3">
                          {index === 0 && <Server className="w-10 h-10 text-arminred-500/80" />}
                          {index === 1 && <Shield className="w-10 h-10 text-arminred-500/80" />}
                          {index === 2 && <Code className="w-10 h-10 text-arminred-500/80" />}
                          {index === 3 && <Database className="w-10 h-10 text-arminred-500/80" />}
                        </div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-arminred-500 transition-colors">{item}</h3>
                        <div className="h-1 w-12 bg-gradient-to-r from-arminred-500 to-transparent rounded-full"></div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* آمار و ارقام */}
        <section className="relative z-10 py-20">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
          <div className="container px-4 mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                آمار و ارقام کلیدی
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-arminred-500 to-transparent rounded-full mx-auto"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatItem 
                value={toPersianNumbers(5)}
                label="سال تجربه" 
                icon={<BriefcaseBusiness className="h-6 w-6 text-arminred-500" />}
                delay={0.1}
              />
              <StatItem 
                value={toPersianNumbers(75)}
                label="پروژه موفق" 
                icon={<Zap className="h-6 w-6 text-arminred-500" />}
                delay={0.2}
              />
              <StatItem 
                value={toPersianNumbers(50)}
                label="مشتری راضی" 
                icon={<Award className="h-6 w-6 text-arminred-500" />}
                delay={0.3}
              />
              <StatItem 
                value="۱۰۰%"
                label="تضمین امنیت" 
                icon={<Shield className="h-6 w-6 text-arminred-500" />}
                delay={0.4}
              />
            </div>
          </div>
        </section>

        {/* سوابق شغلی و تحصیلی */}
        <section className="relative z-10 py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
          </div>
          
          <div className="container px-4 mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                سوابق حرفه‌ای
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-arminred-500 to-transparent rounded-full mx-auto"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
              <ExperienceTimeline experiences={experiences} />
              <div className="space-y-16">
                <EducationTimeline education={education} />
                
                {/* بخش گواهی‌نامه‌ها */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold mb-6 relative inline-block section-title">
                    گواهی‌نامه‌های تخصصی
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-arminred-500 to-transparent"></span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certificates.map((cert, index) => (
                      <CertificateCard key={index} {...cert} />
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* بخش مهارت‌ها */}
        <section className="relative z-10 py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
          </div>
          
          <div className="container px-4 mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                مهارت‌ها و تکنولوژی‌ها
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-arminred-500 to-transparent rounded-full mx-auto"></div>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                مجموعه گسترده‌ای از مهارت‌های تخصصی در زمینه برنامه‌نویسی و امنیت سایبری
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-16"
            >
              <div className="space-y-10">
                <h3 className="text-xl font-semibold mb-6 relative inline-block">
                  مهارت‌های تخصصی
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-arminred-500 to-transparent"></span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {skills.map((skill) => (
                    <SkillCard
                      key={skill.index}
                      name={skill.name}
                      level={skill.level}
                      icon={skill.icon}
                      index={skill.index}
                    />
                  ))}
                </div>
              </div>
              
              {/* بخش تکنولوژی‌ها */}
              <Technologies />
            </motion.div>
          </div>
        </section>

        {/* پروژه‌های اخیر */}
        <section className="relative z-10 py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
          </div>
          
          <div className="container px-4 mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                پروژه‌های برجسته
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-arminred-500 to-transparent rounded-full mx-auto"></div>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                نمونه‌های برتر پروژه‌هایی که با موفقیت طراحی و اجرا شده‌اند
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.index} {...project} />
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-14 text-center"
            >
              <Button asChild variant="outline" className="border-gray-700 hover:border-arminred-500/50 hover:bg-arminred-500/5 gap-2">
                <Link to="/Work-Sample">
                  مشاهده همه نمونه کارها
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* تماس با من */}
        <section className="relative z-10 py-24 bg-gradient-to-b from-black to-background overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          </div>
          
          <div className="container px-4 mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-block mb-3">
                <span className="bg-arminred-500/10 text-arminred-500 text-xs font-medium px-2.5 py-1 rounded">همکاری</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                برای پروژه بعدی خود با من تماس بگیرید
              </h2>
              
              <p className="text-lg text-gray-400 mb-8">
                برای مشاوره رایگان و صحبت درباره پروژه‌های خود می‌توانید از طریق فرم تماس با من در ارتباط باشید
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800 shadow-lg shadow-arminred-600/20 group">
                  <Link to="/contact" className="flex items-center gap-2 relative overflow-hidden">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-arminred-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative z-10">تماس با من</span>
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="border-gray-700 hover:border-arminred-500/50 hover:bg-arminred-500/5 transition-all duration-300">
                  <a href="#" className="flex items-center gap-2">
                    <Download className="h-5 w-5" />
                    دانلود رزومه
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
};

export default Resume;
