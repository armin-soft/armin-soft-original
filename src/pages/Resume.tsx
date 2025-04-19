
import React, { useEffect } from "react";
import { SiteLayout } from "@/components/site-layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { getPersonSchema } from "@/components/seo/schemas";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Download, ArrowRight, Code, Shield, Bot, Layout, 
  Monitor, Smartphone, FileCode, Database, BookOpen, 
  Server, Award, Zap, BriefcaseBusiness, GraduationCap 
} from "lucide-react";

// Components
import { ResumeHeader } from "@/components/resume/ResumeHeader";
import { Technologies } from "@/components/resume/Technologies";
import { ExperienceTimeline } from "@/components/resume/ExperienceTimeline";
import { EducationTimeline } from "@/components/resume/EducationTimeline";
import { StatItem } from "@/components/resume/StatItem";
import { ProjectCard } from "@/components/resume/ProjectCard";
import { CertificateCard } from "@/components/resume/CertificateCard";
import { SkillCard } from "@/components/resume/SkillCard";
import { TechBadge, TechBadgeGroup } from "@/components/resume/TechBadge";

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
    field: "مهندسی نرم‌افزار",
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
    name: "برنامه نویسی بک‌اند",
    level: 95,
    icon: <Server className="w-5 h-5 text-arminred-400" />,
    index: 0
  },
  {
    name: "طراحی API",
    level: 90,
    icon: <Code className="w-5 h-5 text-arminred-400" />,
    index: 1
  },
  {
    name: "امنیت وب",
    level: 85,
    icon: <Shield className="w-5 h-5 text-arminred-400" />,
    index: 2
  },
  {
    name: "پایگاه داده‌ها",
    level: 88,
    icon: <Database className="w-5 h-5 text-arminred-400" />,
    index: 3
  },
  {
    name: "DevOps",
    level: 80,
    icon: <Server className="w-5 h-5 text-arminred-400" />,
    index: 4
  },
  {
    name: "برنامه‌نویسی فرانت‌اند",
    level: 75,
    icon: <Layout className="w-5 h-5 text-arminred-400" />,
    index: 5
  },
  {
    name: "هوش مصنوعی",
    level: 82,
    icon: <Bot className="w-5 h-5 text-arminred-400" />,
    index: 6
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
      <ResumeHeader />

      {/* بخش اصلی رزومه */}
      <main className="relative bg-gradient-to-b from-black to-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        </div>

        {/* آمار و ارقام */}
        <section className="relative z-10 py-20">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatItem 
                value={5}
                label="سال تجربه" 
                icon={<BriefcaseBusiness className="h-6 w-6 text-arminred-500" />}
                delay={0.1}
              />
              <StatItem 
                value={75}
                label="پروژه موفق" 
                icon={<Zap className="h-6 w-6 text-arminred-500" />}
                delay={0.2}
              />
              <StatItem 
                value={50}
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
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
              <ExperienceTimeline experiences={experiences} />
              <div className="space-y-16">
                <EducationTimeline education={education} />
                
                {/* بخش گواهی‌نامه‌ها */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 section-title">گواهینامه‌های تخصصی</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certificates.map((cert, index) => (
                      <CertificateCard key={index} {...cert} />
                    ))}
                  </div>
                </div>
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-16"
            >
              <div className="space-y-10">
                <h2 className="text-2xl font-bold mb-6 section-title">مهارت‌های تخصصی</h2>
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
          <div className="container px-4 mx-auto">
            <h2 className="text-2xl font-bold mb-10 section-title">پروژه‌های برجسته</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.index} {...project} />
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Button asChild variant="outline" className="border-gray-700 hover:border-arminred-500/50 hover:bg-arminred-500/5 gap-2">
                <Link to="/Work-Sample">
                  مشاهده همه نمونه کارها
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* تماس با من */}
        <section className="relative z-10 py-24 bg-gradient-to-b from-black to-background overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          </div>
          
          <div className="container px-4 mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
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
                <Button asChild size="lg" className="bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800 shadow-lg shadow-arminred-600/20">
                  <Link to="/contact" className="flex items-center gap-2">
                    تماس با من
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
