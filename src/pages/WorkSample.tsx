
import { useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const WorkSample = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  // نمونه کارها (در یک پروژه واقعی این اطلاعات می‌تواند از API دریافت شود)
  const projects = [
    {
      id: 1,
      title: "هوشمند پرداز",
      description: "سیستم مدیریت مالی و حسابداری با قابلیت اتصال به درگاه‌های پرداخت آنلاین",
      image: "https://placehold.co/600x400/222/e53e3e/png?text=هوشمند+پرداز",
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
      image: "https://placehold.co/600x400/222/e53e3e/png?text=تلگرام+بات+مدیر",
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
      image: "https://placehold.co/600x400/222/e53e3e/png?text=آنالیز+امنیتی+شبکه",
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
      image: "https://placehold.co/600x400/222/e53e3e/png?text=پنل+مدیریت+هوشمند",
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
      image: "https://placehold.co/600x400/222/e53e3e/png?text=اسکریپت+ساز+هوشمند",
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
      image: "https://placehold.co/600x400/222/e53e3e/png?text=پیام‌رسان+امن",
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
      image: "https://placehold.co/600x400/222/e53e3e/png?text=مدیریت+پایگاه+داده",
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
      image: "https://placehold.co/600x400/222/e53e3e/png?text=هوش+مصنوعی+تحلیلگر",
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
            <h1 className="text-3xl md:text-5xl font-bold mb-6">نمونه کارهای آرمین سافت</h1>
            <p className="text-lg text-gray-300 mb-8">
              مجموعه‌ای از پروژه‌های منتخب که نشان‌دهنده توانایی‌ها و تجربیات من در زمینه‌های مختلف فناوری است
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">پروژه‌های <span className="text-arminred-600">برجسته</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              نمونه کارهای شاخص آرمین سافت که نشان‌دهنده تخصص و خلاقیت در حوزه‌های مختلف فناوری است
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.filter(project => project.featured).map((project) => (
              <Card key={project.id} className="bg-card border-2 border-border overflow-hidden h-full flex flex-col hover:shadow-xl hover:border-arminred-500/30 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 bg-black/70 text-white text-xs py-1 px-2 rounded">
                    {categories.find(cat => cat.id === project.category)?.label}
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 hover:text-arminred-600 transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="text-xs bg-arminred-500/10 text-arminred-700 dark:text-arminred-400 py-1 px-2 rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Button asChild variant="default" size="sm" className="bg-arminred-600 hover:bg-arminred-700">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <ExternalLink className="ml-1 h-4 w-4" />
                          مشاهده
                        </a>
                      </Button>
                      
                      {project.github && (
                        <Button asChild variant="outline" size="sm">
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <Github className="ml-1 h-4 w-4" />
                            کد منبع
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects with Tabs */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">همه <span className="text-arminred-600">پروژه‌ها</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              مجموعه‌ای از پروژه‌های مختلف در زمینه‌های برنامه‌نویسی، امنیت و هوش مصنوعی
            </p>
          </div>

          <Tabs defaultValue="all" className="mb-10" onValueChange={setSelectedTab}>
            <TabsList className="flex flex-wrap justify-center mb-8 bg-transparent">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id}
                  value={category.id}
                  className="rounded-full px-4 py-2 data-[state=active]:bg-arminred-600 data-[state=active]:text-white"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value={selectedTab} className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <Card 
                    key={project.id} 
                    className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-bold">{project.title}</h3>
                        <span className="bg-accent text-accent-foreground text-xs py-1 px-2 rounded">
                          {categories.find(cat => cat.id === project.category)?.label}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{project.description}</p>
                      
                      <Button asChild variant="link" className="pr-0 text-arminred-600 hover:text-arminred-700">
                        <a href={project.link} className="flex items-center group">
                          بیشتر
                          <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              پروژه بعدی <span className="text-arminred-500">شما</span> چیست؟
            </h2>
            <p className="text-white/80 mb-8">
              آماده همکاری در پروژه‌های شما هستم. برای بحث درباره ایده‌ها و نیازهای خاص پروژه خود با من تماس بگیرید.
            </p>
            <Button asChild size="lg" className="bg-arminred-600 hover:bg-arminred-700">
              <Link to="/contact">شروع همکاری</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default WorkSample;
