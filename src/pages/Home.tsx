
import { ArrowLeft, Code, Shield, Server, Cpu, Bot, Database, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [{
    icon: <Code className="h-10 w-10 text-arminred-500" />,
    title: "توسعه نرم‌افزار",
    description: "طراحی و توسعه نرم‌افزارهای تخصصی برای سیستم‌عامل‌های مختلف"
  }, {
    icon: <Shield className="h-10 w-10 text-arminred-500" />,
    title: "امنیت و هک اخلاقی",
    description: "تحلیل امنیتی و تست نفوذ سیستم‌ها و نرم‌افزارها"
  }, {
    icon: <Server className="h-10 w-10 text-arminred-500" />,
    title: "توسعه وب‌سرویس",
    description: "طراحی و پیاده‌سازی API‌ها و وب‌سرویس‌های توانمند"
  }, {
    icon: <Bot className="h-10 w-10 text-arminred-500" />,
    title: "ربات‌ها و هوش مصنوعی",
    description: "توسعه ربات‌های هوشمند و سیستم‌های مبتنی بر هوش مصنوعی"
  }, {
    icon: <Database className="h-10 w-10 text-arminred-500" />,
    title: "مدیریت دیتابیس",
    description: "طراحی، بهینه‌سازی و مدیریت پایگاه‌های داده"
  }, {
    icon: <Cpu className="h-10 w-10 text-arminred-500" />,
    title: "اتوماسیون هوشمند",
    description: "پیاده‌سازی سیستم‌های اتوماسیون و اسکریپت‌های خودکار"
  }];

  return <SiteLayout>
      {/* Hero Section - Modern and Professional */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 dark:from-black dark:via-gray-900 dark:to-black"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
          
          {/* Animated elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-32 h-32 bg-arminred-500/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute top-1/3 right-20 w-48 h-48 bg-arminred-600/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: "1.2s"}}></div>
            <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-arminred-500/20 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: "0.5s"}}></div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`text-center lg:text-right space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  <span className="block">
                    <span className="text-arminred-500">آرمین</span> سافت
                  </span>
                  <span className="block mt-4 text-2xl md:text-3xl font-normal bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                    توسعه‌دهنده نرم‌افزار و متخصص امنیت
                  </span>
                </h1>
                <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto lg:mr-0 lg:ml-auto leading-relaxed">
                  هر آنچه در ذهن شما باشد، توسط آرمین سافت طراحی و پیاده‌سازی خواهد شد. با قدرت در مسیر نوآوری و پیشرفت قدم بر می‌دارم.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
                <Button asChild size="lg" className="bg-arminred-600 hover:bg-arminred-700 rounded-full px-6 shadow-lg shadow-arminred-600/20 transition-all duration-300 hover:shadow-arminred-600/30 hover:-translate-y-1">
                  <Link to="/contact">
                    تماس با من
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-gray-500 text-white hover:text-arminred-500 hover:border-arminred-500 rounded-full px-6 transition-all duration-300">
                  <Link to="/work-sample">
                    نمونه کارها
                  </Link>
                </Button>
              </div>
              
              <div className="hidden lg:flex justify-end pt-12">
                <div className="animate-bounce">
                  <ChevronDown className="h-8 w-8 text-gray-400" />
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="absolute right-0 w-[450px] h-[450px] bg-gradient-to-br from-arminred-600/10 to-arminred-600/5 rounded-full filter blur-3xl animate-pulse"></div>
              <div className="relative z-10 w-[450px] h-[450px]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-arminred-600/10 backdrop-blur-lg rounded-full flex items-center justify-center border border-arminred-500/30 shadow-2xl">
                  <div className="text-white text-6xl font-bold">AS</div>
                  <div className="absolute -inset-8 border-2 border-dashed border-arminred-500/20 rounded-full animate-spin-slow" style={{animationDuration: '30s'}}></div>
                </div>
                
                {/* Floating elements */}
                {services.slice(0, 3).map((service, index) => (
                  <div 
                    key={index}
                    className="absolute bg-black/60 backdrop-blur-md border border-gray-800 rounded-lg p-3 shadow-lg"
                    style={{
                      top: `${20 + index * 30}%`,
                      right: `${index % 2 === 0 ? 85 : 5}%`,
                      transform: `translateY(-50%)`,
                      animation: `float ${3 + index * 0.5}s ease-in-out infinite alternate`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="shrink-0">
                        {service.icon}
                      </div>
                      <p className="text-white text-sm font-medium">{service.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Modernized */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background to-gray-50/50 dark:to-gray-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative inline-block">
              خدمات <span className="text-arminred-600">تخصصی</span>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-arminred-500 to-transparent"></div>
            </h2>
            <p className="text-muted-foreground text-lg">مجموعه‌ای از خدمات تخصصی با کیفیت برای رفع نیازهای دیجیتالی شما</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="rounded-xl overflow-hidden border-0 shadow-md dark:shadow-gray-900/10 hover:shadow-xl transition-all duration-300 dark:bg-gray-900/50 backdrop-blur-sm dark:border-gray-800 hover:-translate-y-2"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-arminred-400 to-arminred-600"></div>
                <CardContent className="p-8">
                  <div className="mb-6 bg-arminred-500/10 p-4 rounded-full w-fit">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-arminred-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-arminred-600 text-arminred-600 hover:bg-arminred-50 hover:text-arminred-700 dark:hover:bg-arminred-900/20 rounded-full px-8">
              <Link to="/service" className="group flex items-center gap-2">
                مشاهده همه خدمات
                <ArrowLeft className="mr-1 h-5 w-5 transition-transform group-hover:-translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Banner - Modernized */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-arminred-700 to-arminred-500"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgxMzUpIj48cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')] opacity-50"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">خالق "هوشمند پرداز"</h2>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                آرمین سافت، با تخصص در برنامه‌نویسی، امنیت و هک اخلاقی، با قدرت در مسیر نوآوری و پیشرفت قدم بر می‌دارد. هر آنچه در ذهن شما باشد، توسط آرمین سافت طراحی و پیاده‌سازی خواهد شد.
              </p>
              <Button asChild variant="secondary" size="lg" className="bg-white hover:bg-gray-100 text-arminred-600 rounded-full px-8 shadow-lg">
                <Link to="/about">
                  درباره من بیشتر بدانید
                </Link>
              </Button>
            </div>
            <div className="md:w-1/3 flex justify-center items-center">
              <div className="relative w-64 h-64 flex items-center justify-center group">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full border-2 border-white/30 transition-all duration-300 group-hover:border-white/50"></div>
                <span className="text-white text-6xl font-bold relative z-10">AS</span>
                <div className="absolute -inset-4 border-4 border-dashed border-white/20 rounded-full animate-spin-slow" style={{animationDuration: '25s'}}></div>
                <div className="absolute -inset-8 border-2 border-dashed border-white/10 rounded-full animate-spin-slow" style={{animationDuration: '40s', animationDirection: 'reverse'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Modernized */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgwKSI+PGNpcmNsZSBjeD0iNCIgY3k9IjQiIHI9IjEuNSIgZmlsbD0iY3VycmVudENvbG9yIiBvcGFjaXR5PSIwLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIiBmaWxsLW9wYWNpdHk9IjEiLz48L3N2Zz4=')] opacity-50 dark:opacity-10" style={{color: 'var(--arminred-500)'}}></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="glass-card max-w-4xl mx-auto p-10 md:p-16 text-center backdrop-blur-lg bg-white/50 dark:bg-black/30 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              آماده همکاری برای <span className="text-arminred-600">پروژه بعدی</span> شما هستم
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              با من تماس بگیرید تا درباره ایده‌ها و نیازهای خاص پروژه شما گفتگو کنیم. من آماده هستم تا رویای دیجیتال شما را به واقعیت تبدیل کنم.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-arminred-600 hover:bg-arminred-700 rounded-full px-8 shadow-lg shadow-arminred-600/20 transition-all duration-300 hover:shadow-arminred-600/30 hover:-translate-y-1">
                <Link to="/contact">
                  همین الان تماس بگیرید
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-gray-300 dark:border-gray-700 hover:border-arminred-500 hover:text-arminred-600 transition-all duration-300">
                <Link to="/work-sample">
                  مشاهده نمونه کارها
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Add CSS for floating animation */}
      <style jsx="true">{`
        @keyframes float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-10px); }
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .glass-card {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
      `}</style>
    </SiteLayout>;
};

export default Home;
