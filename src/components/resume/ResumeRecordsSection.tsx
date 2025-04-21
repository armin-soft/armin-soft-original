
import React from "react";
import { motion } from "framer-motion";
import { ExperienceTimeline } from "./ExperienceTimeline";
import { EducationTimeline } from "./EducationTimeline";
import { CertificateCard } from "./CertificateCard";

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

export function ResumeRecordsSection() {
  return (
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
  );
}
