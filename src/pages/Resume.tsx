
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Download,
  Briefcase,
  GraduationCap,
  Award,
  Star,
  Code,
  Shield,
  Bot,
  Server,
  Database,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { PersonSchema } from "@/components/seo/schemas";

const Resume = () => {
  const skills = [
    { name: "برنامه‌نویسی", level: 95, icon: <Code className="h-5 w-5" /> },
    { name: "هک و امنیت", level: 90, icon: <Shield className="h-5 w-5" /> },
    { name: "هوش مصنوعی", level: 85, icon: <Bot className="h-5 w-5" /> },
    { name: "طراحی API", level: 88, icon: <Server className="h-5 w-5" /> },
    { name: "مدیریت دیتابیس", level: 92, icon: <Database className="h-5 w-5" /> },
    { name: "اتوماسیون", level: 87, icon: <Cpu className="h-5 w-5" /> },
  ];

  const experiences = [
    {
      title: "توسعه‌دهنده ارشد",
      company: "هوشمند پرداز",
      duration: "۱۴۰۲ - اکنون",
      description: "طراحی و توسعه نرم‌افزارهای هوشمند و سیستم‌های امنیتی پیشرفته"
    },
    {
      title: "متخصص امنیت",
      company: "امن‌افزار",
      duration: "۱۴۰۰ - ۱۴۰۲",
      description: "تست نفوذ و ارزیابی امنیتی سیستم‌ها"
    },
    {
      title: "برنامه‌نویس",
      company: "داده‌پردازان",
      duration: "۱۳۹۸ - ۱۴۰۰",
      description: "توسعه نرم‌افزارهای تحت وب و موبایل"
    }
  ];

  const education = [
    {
      degree: "کارشناسی مهندسی نرم‌افزار",
      school: "دانشگاه تهران",
      duration: "۱۳۹۶ - ۱۴۰۰",
      description: "تمرکز بر هوش مصنوعی و امنیت سایبری"
    }
  ];

  const certifications = [
    "CEH (Certified Ethical Hacker)",
    "CISSP (Certified Information Systems Security Professional)",
    "AWS Certified Solutions Architect",
    "Microsoft Certified: Azure Developer Associate"
  ];

  return (
    <SiteLayout>
      <SEOHead 
        title="رزومه"
        description="رزومه کاری و تحصیلی آرمین سافت، متخصص برنامه‌نویسی و امنیت سایبری با تجربیات متنوع در زمینه هوش مصنوعی و طراحی API"
        canonical="/Resume"
        keywords="رزومه آرمین سافت, تجربیات کاری, مهارت های برنامه نویسی, گواهینامه های امنیت, تحصیلات"
        schema={<PersonSchema />}
      />
      
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
            <h1 className="text-3xl md:text-5xl font-bold mb-6">رزومه آرمین سافت</h1>
            <p className="text-lg text-gray-300 mb-8">
              توسعه‌دهنده نرم‌افزار، متخصص امنیت و هک اخلاقی
            </p>
            <Button className="bg-arminred-600 hover:bg-arminred-700">
              <Download className="ml-2 h-4 w-4" />
              دانلود رزومه
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Skills Section */}
            <Card className="lg:col-span-1 bg-black/50 backdrop-blur-xl border-gray-800">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-6 flex items-center">
                  <Star className="ml-2 h-5 w-5 text-arminred-500" />
                  مهارت‌ها
                </h2>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          {skill.icon}
                          <span className="mr-2">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground farsi-numbers">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Experience Section */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="bg-black/50 backdrop-blur-xl border-gray-800">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-6 flex items-center">
                    <Briefcase className="ml-2 h-5 w-5 text-arminred-500" />
                    تجربیات کاری
                  </h2>
                  <div className="space-y-8">
                    {experiences.map((exp, index) => (
                      <div key={index} className="relative pr-6 pb-8 group">
                        <div className="absolute right-0 top-0 w-px h-full bg-gray-800 group-last:h-6"></div>
                        <div className="absolute right-0 top-0 w-6 h-6 -translate-x-2 -translate-y-1">
                          <div className="w-3 h-3 rounded-full bg-arminred-500 ring-4 ring-black"></div>
                        </div>
                        <div className="pr-4">
                          <h3 className="text-lg font-semibold">{exp.title}</h3>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <span>{exp.company}</span>
                            <span className="mx-2">•</span>
                            <span className="farsi-numbers">{exp.duration}</span>
                          </div>
                          <p className="mt-2 text-muted-foreground">{exp.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Education Section */}
              <Card className="bg-black/50 backdrop-blur-xl border-gray-800">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-6 flex items-center">
                    <GraduationCap className="ml-2 h-5 w-5 text-arminred-500" />
                    تحصیلات
                  </h2>
                  {education.map((edu, index) => (
                    <div key={index} className="relative pr-6 pb-4">
                      <div className="absolute right-0 top-0 w-px h-full bg-gray-800"></div>
                      <div className="absolute right-0 top-0 w-6 h-6 -translate-x-2 -translate-y-1">
                        <div className="w-3 h-3 rounded-full bg-arminred-500 ring-4 ring-black"></div>
                      </div>
                      <div className="pr-4">
                        <h3 className="text-lg font-semibold">{edu.degree}</h3>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <span>{edu.school}</span>
                          <span className="mx-2">•</span>
                          <span className="farsi-numbers">{edu.duration}</span>
                        </div>
                        <p className="mt-2 text-muted-foreground">{edu.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Certifications Section */}
              <Card className="bg-black/50 backdrop-blur-xl border-gray-800">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-6 flex items-center">
                    <Award className="ml-2 h-5 w-5 text-arminred-500" />
                    گواهینامه‌ها
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-center space-x-2 space-x-reverse bg-black/30 p-3 rounded-lg border border-gray-800">
                        <ArrowRight className="h-4 w-4 text-arminred-500" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
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
