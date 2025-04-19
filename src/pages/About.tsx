
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
  MapPin,
  Star,
  Code,
  Shield,
  Bot,
  Server,
  Database,
  Cpu,
  ArrowRight,
  Download,
  ExternalLink,
  BadgeCheck,
  Award,
  Heart,
  Coffee,
  Lightbulb,
  Clock,
  BookOpen,
  Anchor,
  Compass,
  Github,
  Globe,
  Terminal,
  Mail,
  MessageSquare,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { getPersonSchema } from "@/components/seo/schemas";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const About = () => {
  const skills = [
    { name: "برنامه‌نویسی", level: 95, icon: <Code className="h-5 w-5 text-arminred-600" />, description: "تسلط به زبان‌های PHP، JavaScript، Python و فریمورک‌های مختلف" },
    { name: "هک و امنیت", level: 90, icon: <Shield className="h-5 w-5 text-arminred-600" />, description: "تست نفوذ، امنیت وب و شبکه، مهندسی معکوس" },
    { name: "هوش مصنوعی", level: 85, icon: <Bot className="h-5 w-5 text-arminred-600" />, description: "یادگیری ماشین، پردازش زبان طبیعی و سیستم‌های خبره" },
    { name: "طراحی API", level: 88, icon: <Server className="h-5 w-5 text-arminred-600" />, description: "طراحی و پیاده‌سازی RESTful و GraphQL APIs" },
    { name: "مدیریت دیتابیس", level: 92, icon: <Database className="h-5 w-5 text-arminred-600" />, description: "تسلط به SQL و NoSQL و بهینه‌سازی عملکرد" },
    { name: "اتوماسیون", level: 87, icon: <Cpu className="h-5 w-5 text-arminred-600" />, description: "سیستم‌های اتوماسیون هوشمند و اسکریپت‌نویسی" },
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  
  const [tab, setTab] = useState("skills");
  const [isOpen, setIsOpen] = useState(false);

  const valuesData = [
    {
      icon: <Star className="h-10 w-10 text-arminred-600" />,
      title: "کیفیت",
      description: "تعهد به ارائه کار با بالاترین سطح کیفیت و استاندارد"
    },
    {
      icon: <Code className="h-10 w-10 text-arminred-600" />,
      title: "نوآوری",
      description: "استفاده از فناوری‌های جدید و راهکارهای خلاقانه برای حل مشکلات"
    },
    {
      icon: <Shield className="h-10 w-10 text-arminred-600" />,
      title: "امنیت",
      description: "اولویت دادن به امنیت در تمامی مراحل طراحی و توسعه نرم‌افزار"
    },
    {
      icon: <Heart className="h-10 w-10 text-arminred-600" />,
      title: "اشتیاق",
      description: "انجام هر پروژه با عشق و تعهد به نتیجه نهایی"
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-arminred-600" />,
      title: "خلاقیت",
      description: "ارائه راه‌حل‌های خلاقانه و منحصربه‌فرد برای چالش‌های پیچیده"
    },
    {
      icon: <Clock className="h-10 w-10 text-arminred-600" />,
      title: "تعهد",
      description: "پایبندی به زمان‌بندی پروژه‌ها و تحویل به موقع"
    }
  ];

  const milestones = [
    { year: "۱۳۹۷", title: "شروع فعالیت", description: "آغاز فعالیت حرفه‌ای در زمینه برنامه‌نویسی و امنیت" },
    { year: "۱۳۹۹", title: "تاسیس آرمین سافت", description: "راه‌اندازی رسمی شرکت آرمین سافت" },
    { year: "۱۴۰۰", title: "گسترش خدمات", description: "توسعه خدمات در زمینه هوش مصنوعی و اتوماسیون" },
    { year: "۱۴۰۲", title: "موفقیت‌های بین‌المللی", description: "همکاری با شرکت‌های خارجی و گسترش فعالیت در سطح بین‌الملل" }
  ];

  return (
    <SiteLayout>
      <SEOHead 
        title="درباره من"
        description="آرمین سافت، متخصص امنیت سایبری و برنامه‌نویس، با بیش از 5 سال تجربه در زمینه‌های مختلف فناوری اطلاعات"
        canonical="/About"
        keywords="آرمین سافت, درباره من, امنیت سایبری, هک اخلاقی, برنامه نویسی, متخصص امنیت"
        schema={getPersonSchema()}
      />
      
      {/* Hero Section - Enhanced with ParallaxEffect */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          
          {/* Animated particles */}
          {Array.from({ length: 20 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight,
                opacity: Math.random() * 0.5 + 0.2
              }}
              animate={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight,
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ 
                duration: Math.random() * 20 + 10, 
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
          
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>
        
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-2 flex flex-col items-center lg:items-end">
              <motion.div
                initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative mb-8 z-10"
              >
                <div className="p-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-40 h-40 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-arminred-400 via-arminred-600 to-purple-800 p-1">
                      <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center p-2">
                        <motion.div 
                          whileHover={{ scale: 1.2 }} 
                          className="text-white"
                        >
                          <BadgeCheck className="w-20 h-20 md:w-32 md:h-32 text-arminred-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.7)]" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="absolute -inset-7 border-2 border-dashed border-arminred-500/30 rounded-full animate-spin-slow"></div>
                <div className="absolute -inset-14 border border-arminred-500/10 rounded-full"></div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-3 flex flex-col items-center lg:items-start lg:text-right space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Badge className="bg-arminred-600/20 text-arminred-500 text-xs mb-4 py-1">بیش از ۵ سال تجربه</Badge>
                <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-400">
                  آرمین سافت
                </h1>
                <div className="bg-gradient-to-r from-arminred-600 to-arminred-400 h-1 w-32 rounded-full mb-6"></div>
                <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                  توسعه‌دهنده نرم‌افزار، متخصص امنیت و هک اخلاقی، با تجربه در زمینه هوش مصنوعی و اتوماسیون
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-3"
              >
                {["امنیت سایبری", "برنامه‌نویسی وب", "هوش مصنوعی", "اتوماسیون", "مشاوره فنی"].map((tag, index) => (
                  <span key={index} className="bg-white/5 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-sm text-gray-300">
                    {tag}
                  </span>
                ))}
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Button asChild size="lg" className="bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800 border-0 shadow-lg hover:shadow-arminred-500/20">
                  <Link to="/contact" className="flex items-center">
                    تماس با من
                    <ArrowRight className="mr-2 h-4 w-4" />
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white">
                  <a href="#" className="flex items-center">
                    <Download className="ml-2 h-4 w-4" />
                    دریافت رزومه
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute bottom-5 left-1/2 transform -translate-x-1/2"
          >
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center"
            >
              <div className="w-5 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
                <motion.div 
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-1 bg-white rounded-full"
                />
              </div>
              <span className="text-white/40 text-xs mt-2">اسکرول کنید</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section - Enhanced */}
      <motion.section 
        ref={containerRef}
        className="py-20 md:py-32 bg-gradient-to-b from-black to-black/95 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:30px_30px]" />
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-8 order-2 lg:order-1"
              style={{ opacity, y, scale }}
            >
              <div>
                <div className="inline-flex items-center mb-4">
                  <div className="h-1 w-6 bg-arminred-500 rounded-full mr-3"></div>
                  <p className="text-arminred-500 font-medium">درباره من</p>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  داستان و مسیر حرفه‌ای من
                </h2>
                <div className="prose prose-invert max-w-none space-y-6">
                  <p className="text-lg leading-relaxed farsi-numbers">
                    من آرمین اسکندری، با نام حرفه‌ای <span className="text-arminred-600 font-semibold">آرمین سافت</span>، متولد ۲۸ خرداد ۱۳۷۸ در تهران، یک توسعه‌دهنده نرم‌افزار و متخصص امنیت سایبری هستم.
                  </p>
                  <p className="text-lg leading-relaxed farsi-numbers">
                    با بیش از ۵ سال تجربه در زمینه‌های مختلف فناوری اطلاعات، تمرکز اصلی من بر توسعه نرم‌افزارهای تخصصی، امنیت و هک اخلاقی و طراحی سیستم‌های هوشمند است.
                  </p>
                  <p className="text-lg leading-relaxed">
                    همواره در تلاش بوده‌ام تا با ترکیب دانش تکنیکی و خلاقیت، راهکارهای نوآورانه برای مشکلات پیچیده ارائه دهم. سفر من در دنیای فناوری اطلاعات با علاقه شخصی به کامپیوتر و برنامه‌نویسی آغاز شد و امروز به یک حرفه پویا تبدیل شده است.
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-6">
                <div className="flex items-center space-x-4 space-x-reverse bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10 transition-all duration-300 hover:border-arminred-500/30 hover:shadow-lg hover:shadow-arminred-500/5">
                  <MapPin className="text-arminred-600 h-6 w-6" />
                  <div>
                    <h3 className="font-semibold text-lg">محل سکونت</h3>
                    <p className="text-muted-foreground">ایران، تهران، پاکدشت</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800 border-0 shadow-lg hover:shadow-arminred-500/20">
                    <Link to="/contact" className="flex items-center">
                      تماس با من
                      <ArrowRight className="mr-2 h-4 w-4" />
                    </Link>
                  </Button>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="lg" className="border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white flex items-center">
                        <Download className="ml-2 h-4 w-4" />
                        دریافت رزومه
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>دانلود رزومه</DialogTitle>
                        <DialogDescription>
                          لطفاً فرمت مورد نظر خود را برای دانلود رزومه انتخاب کنید.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid grid-cols-2 gap-4 py-4">
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          <Download className="ml-2 h-4 w-4" />
                          دانلود PDF
                        </Button>
                        <Button className="bg-green-600 hover:bg-green-700">
                          <Download className="ml-2 h-4 w-4" />
                          دانلود Word
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </motion.div>

            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-arminred-600/20 to-purple-600/20 rounded-2xl blur-3xl transform -rotate-6"></div>
                <div className="relative">
                  <Timeline className="space-y-10 pr-6">
                    {milestones.map((milestone, index) => (
                      <TimelineItem 
                        key={index} 
                        icon={index === milestones.length - 1 ? <Award className="h-3 w-3" /> : null}
                        active={index === milestones.length - 1}
                        index={index}
                      >
                        <Card className="overflow-hidden bg-black/50 backdrop-blur-xl border border-white/10 hover:border-arminred-500/50 transition-all duration-300">
                          <CardContent className="p-5">
                            <span className="text-arminred-500 text-sm font-semibold block mb-2 farsi-numbers">{milestone.year}</span>
                            <h3 className="text-lg font-bold text-white mb-2">{milestone.title}</h3>
                            <p className="text-gray-400 text-sm">{milestone.description}</p>
                          </CardContent>
                        </Card>
                      </TimelineItem>
                    ))}
                  </Timeline>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills & Expertise Section - Enhanced with Tabs */}
      <section className="py-20 bg-gradient-to-t from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:30px_30px]" />
        <div className="container mx-auto px-4 md:px-6 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center mb-4">
              <div className="h-1 w-6 bg-arminred-500 rounded-full ml-3"></div>
              <p className="text-arminred-500 font-medium">مهارت‌ها و تخصص‌ها</p>
              <div className="h-1 w-6 bg-arminred-500 rounded-full mr-3"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              توانمندی‌های فنی و تجربی
            </h2>
          </motion.div>

          <Tabs value={tab} onValueChange={setTab} className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="bg-black/40 border border-white/10 p-1 backdrop-blur-xl">
                <TabsTrigger value="skills" className="data-[state=active]:bg-arminred-600 data-[state=active]:text-white">
                  مهارت‌های تخصصی
                </TabsTrigger>
                <TabsTrigger value="tools" className="data-[state=active]:bg-arminred-600 data-[state=active]:text-white">
                  ابزارها و تکنولوژی‌ها
                </TabsTrigger>
                <TabsTrigger value="certificates" className="data-[state=active]:bg-arminred-600 data-[state=active]:text-white">
                  گواهینامه‌ها و افتخارات
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="skills" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="space-y-8">
                  {skills.slice(0, 3).map((skill, index) => (
                    <HoverCard key={index}>
                      <HoverCardTrigger>
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.02 }}
                          className="cursor-pointer"
                        >
                          <Card className="overflow-hidden bg-black/50 backdrop-blur-xl border border-white/10 hover:border-arminred-500/50 transition-all duration-300">
                            <CardContent className="p-6">
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                  {skill.icon}
                                  <span className="font-medium">{skill.name}</span>
                                </div>
                                <span className="text-sm text-muted-foreground farsi-numbers">{skill.level}%</span>
                              </div>
                              <Progress value={skill.level} className="h-2 bg-gray-800">
                                <div className="h-full bg-gradient-to-r from-arminred-600 to-arminred-400 rounded-full" />
                              </Progress>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80 bg-black/80 backdrop-blur-xl border border-white/10">
                        <div className="flex justify-between space-x-4">
                          <div className="space-y-1">
                            <h4 className="text-base font-semibold">{skill.name}</h4>
                            <p className="text-sm text-gray-400">{skill.description}</p>
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
                
                <div className="space-y-8">
                  {skills.slice(3).map((skill, index) => (
                    <HoverCard key={index}>
                      <HoverCardTrigger>
                        <motion.div 
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.02 }}
                          className="cursor-pointer"
                        >
                          <Card className="overflow-hidden bg-black/50 backdrop-blur-xl border border-white/10 hover:border-arminred-500/50 transition-all duration-300">
                            <CardContent className="p-6">
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                  {skill.icon}
                                  <span className="font-medium">{skill.name}</span>
                                </div>
                                <span className="text-sm text-muted-foreground farsi-numbers">{skill.level}%</span>
                              </div>
                              <Progress value={skill.level} className="h-2 bg-gray-800">
                                <div className="h-full bg-gradient-to-r from-arminred-600 to-arminred-400 rounded-full" />
                              </Progress>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80 bg-black/80 backdrop-blur-xl border border-white/10">
                        <div className="flex justify-between space-x-4">
                          <div className="space-y-1">
                            <h4 className="text-base font-semibold">{skill.name}</h4>
                            <p className="text-sm text-gray-400">{skill.description}</p>
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="tools" className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "PHP", icon: <Code className="h-8 w-8" />, color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" },
                  { name: "JavaScript", icon: <Code className="h-8 w-8" />, color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
                  { name: "Python", icon: <Code className="h-8 w-8" />, color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
                  { name: "SQL", icon: <Database className="h-8 w-8" />, color: "bg-green-500/10 text-green-400 border-green-500/20" },
                  { name: "Docker", icon: <Anchor className="h-8 w-8" />, color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
                  { name: "Linux", icon: <Terminal className="h-8 w-8" />, color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
                  { name: "Git", icon: <Github className="h-8 w-8" />, color: "bg-gray-500/10 text-gray-400 border-gray-500/20" },
                  { name: "RESTful API", icon: <Server className="h-8 w-8" />, color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
                  { name: "TensorFlow", icon: <Bot className="h-8 w-8" />, color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
                  { name: "React", icon: <Code className="h-8 w-8" />, color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
                  { name: "Node.js", icon: <Server className="h-8 w-8" />, color: "bg-green-500/10 text-green-400 border-green-500/20" },
                  { name: "Laravel", icon: <Code className="h-8 w-8" />, color: "bg-red-500/10 text-red-400 border-red-500/20" },
                ].map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className={`h-full overflow-hidden bg-black/50 backdrop-blur-xl border border-white/10 hover:border-arminred-500/30 transition-all duration-300`}>
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                        <div className={`w-16 h-16 rounded-full ${tool.color} flex items-center justify-center mb-4`}>
                          {tool.icon}
                        </div>
                        <h3 className="text-lg font-semibold">{tool.name}</h3>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="certificates" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { 
                    title: "CCNA Security", 
                    issuer: "Cisco", 
                    date: "۱۴۰۰", 
                    description: "گواهینامه تخصصی امنیت شبکه از شرکت سیسکو",
                    icon: <Shield className="h-10 w-10" />
                  },
                  { 
                    title: "CEH (Certified Ethical Hacker)", 
                    issuer: "EC-Council", 
                    date: "۱۴۰۱", 
                    description: "گواهینامه هکر اخلاقی حرفه‌ای",
                    icon: <Shield className="h-10 w-10" />
                  },
                  { 
                    title: "Laravel Certification", 
                    issuer: "Laravel.com", 
                    date: "۱۴۰۰", 
                    description: "گواهینامه تخصصی در فریمورک لاراول",
                    icon: <Code className="h-10 w-10" />
                  },
                  { 
                    title: "TensorFlow Developer", 
                    issuer: "Google", 
                    date: "۱۴۰۲", 
                    description: "گواهینامه توسعه‌دهنده هوش مصنوعی با TensorFlow",
                    icon: <Bot className="h-10 w-10" />
                  },
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-xl border border-white/10 hover:border-arminred-500/30 transition-all duration-300 overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-full bg-arminred-500/10 text-arminred-500">
                            {cert.icon}
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-xl font-bold">{cert.title}</h3>
                              <Badge variant="outline" className="border-arminred-500/30 text-arminred-500 farsi-numbers">
                                {cert.date}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-400 mb-1">صادر کننده: {cert.issuer}</p>
                            <p className="text-sm text-gray-500">{cert.description}</p>
                          </div>
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

      {/* Values Section - Enhanced with Animation */}
      <section className="py-20 bg-black/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:30px_30px]" />
        <motion.div 
          className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-arminred-600/5 via-arminred-600/2 to-transparent"
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center mb-4">
              <div className="h-1 w-6 bg-arminred-500 rounded-full ml-3"></div>
              <p className="text-arminred-500 font-medium">ارزش‌ها و باورها</p>
              <div className="h-1 w-6 bg-arminred-500 rounded-full mr-3"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              اصول و ارزش‌های کاری من
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valuesData.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full overflow-hidden bg-black backdrop-blur-xl border border-white/10 hover:border-arminred-500/30 transition-all duration-300 group">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="mb-6 relative">
                      <div className="absolute -inset-3 bg-arminred-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-arminred-500/20 to-arminred-700/20 flex items-center justify-center relative">
                        <div className="absolute inset-0.5 rounded-full bg-black"></div>
                        <div className="relative text-arminred-500 transition-transform duration-500 group-hover:scale-110 group-hover:text-arminred-400">
                          {value.icon}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-arminred-300 transition-colors duration-300">{value.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with Drawer */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:30px_30px]" />
        <div className="container mx-auto px-4 md:px-6 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-arminred-600/30 to-purple-600/30 rounded-2xl blur-xl opacity-70"></div>
            <Card className="bg-black/90 backdrop-blur-xl border border-white/10 overflow-hidden relative">
              <CardContent className="p-10 md:p-12">
                <Badge className="bg-arminred-600/20 text-arminred-500 text-xs mb-4 py-1">همکاری با آرمین سافت</Badge>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                  آماده همکاری با شما هستم
                </h2>
                <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                  برای شروع همکاری و صحبت درباره پروژه‌های خود با من تماس بگیرید و از مشاوره تخصصی بهره‌مند شوید
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800 border-0 shadow-lg hover:shadow-arminred-500/20">
                    <Link to="/contact">
                      تماس با من
                    </Link>
                  </Button>
                  
                  <Drawer>
                    <DrawerTrigger asChild>
                      <Button variant="outline" size="lg" className="border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white">
                        مشاهده خدمات
                      </Button>
                    </DrawerTrigger>
                    <DrawerContent className="bg-black/95 backdrop-blur-xl border-t border-white/10">
                      <DrawerHeader className="border-b border-white/10 pb-6">
                        <DrawerTitle className="text-xl">خدمات آرمین سافت</DrawerTitle>
                        <DrawerDescription>لیست خدمات قابل ارائه برای کسب و کارها و افراد</DrawerDescription>
                      </DrawerHeader>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                        {[
                          {
                            title: "برنامه‌نویسی سفارشی",
                            description: "توسعه برنامه‌های کاربردی وب و موبایل مطابق با نیازهای شما",
                            icon: <Code className="h-10 w-10" />,
                            color: "bg-blue-500/10 text-blue-400 border-blue-500/20"
                          },
                          {
                            title: "مشاوره امنیتی",
                            description: "ارزیابی امنیتی و ارائه راهکارهای حفاظت از داده‌ها و سیستم‌ها",
                            icon: <Shield className="h-10 w-10" />,
                            color: "bg-green-500/10 text-green-400 border-green-500/20"
                          },
                          {
                            title: "هوش مصنوعی و اتوماسیون",
                            description: "طراحی و پیاده‌سازی راه‌حل‌های هوشمند و اتوماسیون فرآیندها",
                            icon: <Bot className="h-10 w-10" />,
                            color: "bg-purple-500/10 text-purple-400 border-purple-500/20"
                          },
                        ].map((service, index) => (
                          <Card key={index} className="bg-black/70 backdrop-blur-xl border border-white/10 hover:border-arminred-500/30 transition-all duration-300">
                            <CardContent className="p-6 flex flex-col items-center text-center">
                              <div className={`w-20 h-20 rounded-full ${service.color} flex items-center justify-center mb-4`}>
                                {service.icon}
                              </div>
                              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                              <p className="text-sm text-gray-400">{service.description}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                      <div className="p-6 border-t border-white/10 flex justify-center">
                        <Button asChild className="bg-arminred-600 hover:bg-arminred-700">
                          <Link to="/service" className="flex items-center">
                            مشاهده همه خدمات
                            <ChevronRight className="mr-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </DrawerContent>
                  </Drawer>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default About;
