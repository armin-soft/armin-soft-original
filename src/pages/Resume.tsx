
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  ArrowUpRight,
} from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { getPersonSchema } from "@/components/seo/schemas";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

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
        schema={getPersonSchema()}
      />
      
      {/* Hero Section with Glass Effect */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px)] bg-[size:3rem_1px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:1px_3rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              آرمین سافت
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              توسعه‌دهنده نرم‌افزار، متخصص امنیت و هک اخلاقی
            </p>
            <Button className="bg-arminred-600 hover:bg-arminred-700">
              <Download className="ml-2 h-4 w-4" />
              دانلود رزومه
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container">
          <Tabs defaultValue="skills" className="w-full">
            <TabsList className="w-full flex justify-center mb-8 bg-black/20 p-1 rounded-full">
              <TabsTrigger value="skills" className="rounded-full">مهارت‌ها</TabsTrigger>
              <TabsTrigger value="experience" className="rounded-full">تجربیات</TabsTrigger>
              <TabsTrigger value="education" className="rounded-full">تحصیلات</TabsTrigger>
              <TabsTrigger value="certificates" className="rounded-full">گواهینامه‌ها</TabsTrigger>
            </TabsList>

            <TabsContent value="skills">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-black/40 backdrop-blur border-gray-800 hover:border-arminred-500/50 transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-arminred-500/10 text-arminred-500">
                              {skill.icon}
                            </div>
                            <h3 className="text-lg font-semibold">{skill.name}</h3>
                          </div>
                          <span className="text-sm text-gray-400 farsi-numbers">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2 bg-gray-800" />
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="experience">
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-black/40 backdrop-blur border-gray-800 hover:border-arminred-500/50 transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                            <p className="text-gray-400 mb-1">{exp.company}</p>
                            <Badge variant="outline" className="mb-3 farsi-numbers">
                              {exp.duration}
                            </Badge>
                            <p className="text-gray-300">{exp.description}</p>
                          </div>
                          <Briefcase className="h-6 w-6 text-arminred-500" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="education">
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Card className="bg-black/40 backdrop-blur border-gray-800 hover:border-arminred-500/50 transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                            <p className="text-gray-400 mb-1">{edu.school}</p>
                            <Badge variant="outline" className="mb-3 farsi-numbers">
                              {edu.duration}
                            </Badge>
                            <p className="text-gray-300">{edu.description}</p>
                          </div>
                          <GraduationCap className="h-6 w-6 text-arminred-500" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="certificates">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-black/40 backdrop-blur border-gray-800 hover:border-arminred-500/50 transition-all group">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-arminred-500/10 text-arminred-500">
                              <Award className="h-5 w-5" />
                            </div>
                            <span>{cert}</span>
                          </div>
                          <ArrowUpRight className="h-5 w-5 text-gray-500 group-hover:text-arminred-500 transition-colors" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Resume;
