import { useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const WorkSample = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  // نمونه کارها (در یک پروژه واقعی این اطلاعات می‌تواند از API دریافت شود)
  const projects = [
    {
      id: 1,
      title: "هوشمند پرداز",
      description: "سیستم مدیریت مالی و حسابداری با قابلیت اتصال به درگاه‌های پرداخت آنلاین",
      image: "https://placehold.co/600x400/222/fff/png?text=هوشمند+پرداز",
      category: "desktop",
      technologies: ["C#", ".NET", "SQL Server"],
      link: "#",
      github: "",
      featured: true,
    },
    {
      id: 2,
      title: "تلگرام بات مدیر",
      description: "ربات تلگرام پیشرفته با قابلیت مدیریت گروه‌ها، کانال‌ها و ارسال پیام‌های خودکار",
      image: "https://placehold.co/600x400/222/fff/png?text=تلگرام+بات+مدیر",
      category: "bot",
      technologies: ["Python", "Telegram API", "MongoDB"],
      link: "#",
      github: "https://github.com/ARMIN-SOFT/telegram-bot",
      featured: true,
    },
    {
      id: 3,
      title: "آنالیز امنیتی شبکه",
      description: "نرم‌افزار تحلیل و بررسی آسیب‌پذیری‌های شبکه و ارائه راهکارهای امنیتی",
      image: "https://placehold.co/600x400/222/fff/png?text=آنالیز+امنیتی+شبکه",
      category: "security",
      technologies: ["Python", "Kali Linux", "Nmap"],
      link: "#",
      github: "https://github.com/ARMIN-SOFT/security-analyzer",
      featured: true,
    },
    {
      id: 4,
      title: "پنل مدیریت هوشمند",
      description: "پنل ادمین پیشرفته برای مدیریت کاربران، محتوا و تنظیمات سیستم",
      image: "https://placehold.co/600x400/222/fff/png?text=پنل+مدیریت+هوشمند",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#",
      github: "https://github.com/ARMIN-SOFT/admin-panel",
      featured: false,
    },
    {
      id: 5,
      title: "اسکریپت ساز هوشمند",
      description: "ابزار طراحی و تولید اسکریپت‌های خودکار برای انجام فرآیندهای تکراری",
      image: "https://placehold.co/600x400/222/fff/png?text=اسکریپت+ساز+هوشمند",
      category: "automation",
      technologies: ["JavaScript", "Node.js", "TypeScript"],
      link: "#",
      github: "https://github.com/ARMIN-SOFT/script-builder",
      featured: false,
    },
    {
      id: 6,
      title: "پیام‌رسان امن",
      description: "اپلیکیشن پیام‌رسان با تمرکز بر امنیت و رمزنگاری پیشرفته",
      image: "https://placehold.co/600x400/222/fff/png?text=پیام‌رسان+امن",
      category: "mobile",
      technologies: ["Flutter", "Firebase", "End-to-end Encryption"],
      link: "#",
      github: "",
      featured: false,
    },
    {
      id: 7,
      title: "مدیریت پایگاه داده",
      description: "ابزار مدیریت و بهینه‌سازی پایگاه‌های داده با رابط کاربری گرافیکی",
      image: "https://placehold.co/600x400/222/fff/png?text=مدیریت+پایگاه+داده",
      category: "desktop",
      technologies: ["Java", "MySQL", "PostgreSQL"],
      link: "#",
      github: "https://github.com/ARMIN-SOFT/db-manager",
      featured: false,
    },
    {
      id: 8,
      title: "هوش مصنوعی تحلیلگر",
      description: "سیستم هوش مصنوعی برای تحلیل داده‌ها و پیش‌بینی روندها",
      image: "https://placehold.co/600x400/222/fff/png?text=هوش+مصنوعی+تحلیلگر",
      category: "ai",
      technologies: ["Python", "TensorFlow", "Scikit-learn"],
      link: "#",
      github: "https://github.com/ARMIN-SOFT/ai-analyzer",
      featured: false,
    },
  ];

  // فیلتر پروژه‌ها بر اساس تب انتخاب شده
  const filteredProjects = selectedTab === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedTab);

  // دسته‌بندی‌ها
  const categories = [
    { id: "all", label: "همه" },
    { id: "desktop", label: "نرم‌افزار دسکتاپ" },
    { id: "web", label: "وب" },
    { id: "mobile", label: "موبایل" },
    { id: "security", label: "امنیت" },
    { id: "bot", label: "ربات و هوش مصنوعی" },
    { id: "automation", label: "اتوماسیون" },
    { id: "ai", label: "هوش مصنوعی" },
  ];

  return (
    <SiteLayout>
      {/* Simple Header */}
      <div className="bg-gray-100 py-8 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-2">نمونه کارهای آرمین سافت</h1>
          <p className="text-gray-600">
            مجموعه‌ای از پروژه‌های منتخب که نشان‌دهنده توانایی‌ها و تجربیات من در زمینه‌های مختلف فناوری است
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Category Tabs */}
        <Tabs defaultValue="all" className="mb-8" onValueChange={setSelectedTab}>
          <TabsList className="mb-4">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value={selectedTab}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="border">
                  <div className="h-48">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 py-1 px-2 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button asChild variant="default" size="sm">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="ml-1 h-4 w-4" />
                          مشاهده
                        </a>
                      </Button>
                      {project.github && (
                        <Button asChild variant="outline" size="sm">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="ml-1 h-4 w-4" />
                            کد منبع
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Simple Contact Section */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-bold mb-4">آماده همکاری در پروژه شما هستم</h2>
          <p className="text-gray-600 mb-4">
            برای بحث درباره ایده‌ها و نیازهای خاص پروژه خود با من تماس بگیرید.
          </p>
          <Button asChild>
            <Link to="/contact">تماس با من</Link>
          </Button>
        </div>
      </div>
    </SiteLayout>
  );
};

export default WorkSample;
