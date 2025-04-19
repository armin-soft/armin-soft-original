
import { SiteLayout } from "@/components/site-layout";
import { WorkHero } from "@/components/work/WorkHero";
import { FeaturedProjects } from "@/components/work/FeaturedProjects";
import { ProjectGrid } from "@/components/work/ProjectGrid";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WorkSample = () => {
  const projects = [
    {
      id: 1,
      title: "هوشمند پرداز",
      description: "سیستم مدیریت مالی و حسابداری با قابلیت اتصال به درگاه‌های پرداخت آنلاین",
      image: "https://placehold.co/600x400/222/e53e3e/png?text=هوشمند+پرداز",
      category: "software",
      technologies: ["C#", ".NET", "SQL Server"],
      link: "#",
      github: "",
      featured: true,
    },
    {
      id: 2,
      title: "تلگرام بات مدیر",
      description: "ربات تلگرام پیشرفته با قابلیت مدیریت گروه‌ها، کانال‌ها و ارسال پیام‌های خودکار",
      image: "https://placehold.co/600x400/222/e53e3e/png?text=تلگرام+بات+مدیر",
      category: "telegram-bot",
      technologies: ["Python", "Telegram API", "MongoDB"],
      link: "#",
      github: "https://github.com/ARMIN-SOFT/telegram-bot",
      featured: true,
    },
    {
      id: 3,
      title: "آنالیز امنیتی شبکه",
      description: "نرم افزار تحلیل و بررسی آسیب‌پذیری‌های شبکه و ارائه راهکارهای امنیتی",
      image: "https://placehold.co/600x400/222/e53e3e/png?text=آنالیز+امنیتی+شبکه",
      category: "script",
      technologies: ["Python", "Kali Linux", "Nmap"],
      link: "#",
      github: "https://github.com/ARMIN-SOFT/security-analyzer",
      featured: true,
    },
    {
      id: 4,
      title: "پنل مدیریت هوشمند",
      description: "پنل ادمین پیشرفته برای مدیریت کاربران، محتوا و تنظیمات سیستم",
      image: "https://placehold.co/600x400/222/e53e3e/png?text=پنل+مدیریت+هوشمند",
      category: "website",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#",
      github: "https://github.com/ARMIN-SOFT/admin-panel",
      featured: false,
    },
    {
      id: 5,
      title: "اسکریپت ساز هوشمند",
      description: "ابزار طراحی و تولید اسکریپت‌های خودکار برای انجام فرآیندهای تکراری",
      image: "https://placehold.co/600x400/222/e53e3e/png?text=اسکریپت+ساز+هوشمند",
      category: "script",
      technologies: ["JavaScript", "Node.js", "TypeScript"],
      link: "#",
      github: "https://github.com/ARMIN-SOFT/script-builder",
      featured: false,
    },
    {
      id: 6,
      title: "پیام‌رسان امن",
      description: "اپلیکیشن پیام‌رسان با تمرکز بر امنیت و رمزنگاری پیشرفته",
      image: "https://placehold.co/600x400/222/e53e3e/png?text=پیام‌رسان+امن",
      category: "application",
      technologies: ["Flutter", "Firebase", "End-to-end Encryption"],
      link: "#",
      github: "",
      featured: false,
    },
    {
      id: 7,
      title: "مدیریت پایگاه داده",
      description: "ابزار مدیریت و بهینه‌سازی پایگاه‌های داده با رابط کاربری گرافیکی",
      image: "https://placehold.co/600x400/222/e53e3e/png?text=مدیریت+پایگاه+داده",
      category: "webservice",
      technologies: ["Java", "MySQL", "PostgreSQL"],
      link: "#",
      github: "https://github.com/ARMIN-SOFT/db-manager",
      featured: false,
    },
    {
      id: 8,
      title: "هوش مصنوعی تحلیلگر",
      description: "سیستم هوش مصنوعی برای تحلیل داده‌ها و پیش‌بینی روندها",
      image: "https://placehold.co/600x400/222/e53e3e/png?text=هوش+مصنوعی+تحلیلگر",
      category: "script",
      technologies: ["Python", "TensorFlow", "Scikit-learn"],
      link: "#",
      github: "https://github.com/ARMIN-SOFT/ai-analyzer",
      featured: false,
    },
  ];

  return (
    <SiteLayout>
      <WorkHero />
      <FeaturedProjects projects={projects.filter(p => p.featured)} />
      <ProjectGrid projects={projects} />
      
      {/* Call to Action */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto text-white"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              پروژه بعدی <span className="text-arminred-500">شما</span> چیست؟
            </h2>
            <p className="text-white/80 mb-8">
              آماده همکاری در پروژه‌های شما هستم. برای بحث درباره ایده‌ها و نیازهای خاص پروژه خود با من تماس بگیرید.
            </p>
            <Button asChild size="lg" className="bg-arminred-600 hover:bg-arminred-700">
              <Link to="/contact">شروع همکاری</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default WorkSample;
