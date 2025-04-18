
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
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
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { PersonSchema } from "@/components/seo/schemas";

const About = () => {
  const skills = [
    { name: "برنامه‌نویسی", level: 95, icon: <Code className="h-5 w-5 text-arminred-600" /> },
    { name: "هک و امنیت", level: 90, icon: <Shield className="h-5 w-5 text-arminred-600" /> },
    { name: "هوش مصنوعی", level: 85, icon: <Bot className="h-5 w-5 text-arminred-600" /> },
    { name: "طراحی API", level: 88, icon: <Server className="h-5 w-5 text-arminred-600" /> },
    { name: "مدیریت دیتابیس", level: 92, icon: <Database className="h-5 w-5 text-arminred-600" /> },
    { name: "اتوماسیون", level: 87, icon: <Cpu className="h-5 w-5 text-arminred-600" /> },
  ];

  return (
    <SiteLayout>
      <SEOHead 
        title="درباره من"
        description="آرمین سافت، متخصص امنیت سایبری و برنامه‌نویس، با بیش از 5 سال تجربه در زمینه‌های مختلف فناوری اطلاعات"
        canonical="/About"
        keywords="آرمین سافت, درباره من, امنیت سایبری, هک اخلاقی, برنامه نویسی, متخصص امنیت"
        schema={<PersonSchema />}
      />
      
      {/* Hero Section - Enhanced with parallax effect */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>
        
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-8">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-arminred-600 to-arminred-800 p-1">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-white">
                  <h2 className="text-4xl font-bold">AS</h2>
                </div>
              </div>
              <div className="absolute -inset-4 border-2 border-dashed border-arminred-500/30 rounded-full animate-spin-slow"></div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              آرمین سافت
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
              توسعه‌دهنده نرم‌افزار، متخصص امنیت و هک اخلاقی، با تجربه در زمینه هوش مصنوعی و اتوماسیون
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* About Me */}
            <div className="space-y-8">
              <div>
                <h2 className="section-title mb-8">درباره من</h2>
                <div className="prose prose-invert max-w-none space-y-4">
                  <p className="text-lg leading-relaxed">
                    من آرمین اسکندری، با نام حرفه‌ای <span className="text-arminred-600 font-semibold">آرمین سافت</span>، متولد ۲۸ خرداد ۱۳۷۸ در تهران، یک توسعه‌دهنده نرم‌افزار و متخصص امنیت سایبری هستم.
                  </p>
                  <p className="text-lg leading-relaxed">
                    با بیش از ۵ سال تجربه در زمینه‌های مختلف فناوری اطلاعات، تمرکز اصلی من بر توسعه نرم‌افزارهای تخصصی، امنیت و هک اخلاقی و طراحی سیستم‌های هوشمند است.
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-6">
                <div className="flex items-center space-x-4 space-x-reverse bg-white/5 rounded-xl p-4">
                  <MapPin className="text-arminred-600 h-6 w-6" />
                  <div>
                    <h3 className="font-semibold text-lg">محل سکونت</h3>
                    <p className="text-muted-foreground">ایران، تهران، پاکدشت</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-arminred-600 hover:bg-arminred-700">
                    <Link to="/contact" className="flex items-center">
                      تماس با من
                      <ArrowRight className="mr-2 h-4 w-4" />
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

            {/* Skills & Expertise */}
            <div>
              <h2 className="section-title mb-8">مهارت‌ها و تخصص‌ها</h2>
              <div className="grid gap-6">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-black/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title text-center mb-12">ارزش‌ها و باورها</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
              }
            ].map((value, index) => (
              <Card key={index} className="bg-black/50 backdrop-blur-xl border-gray-800 hover:border-arminred-500/50 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
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
                <Link to="/service">
                  مشاهده خدمات
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default About;
