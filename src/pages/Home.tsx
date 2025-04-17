import { ArrowLeft, Code, Shield, Server, Cpu, Bot, Database } from "lucide-react";
import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
const Home = () => {
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
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-20 h-20 bg-arminred-500/30 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-arminred-600/20 rounded-full filter blur-3xl animate-pulse" style={{
            animationDelay: "1s"
          }}></div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-right space-y-6 animate-slideUp">
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                <span className="block">
                  <span className="text-arminred-500">آرمین</span> سافت
                </span>
                <span className="block mt-2 text-2xl md:text-3xl font-normal">توسعه‌دهنده نرم‌افزار و متخصص امنیت</span>
              </h1>
              <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto lg:mr-0 lg:ml-auto">
                هر آنچه در ذهن شما باشد، توسط آرمین سافت طراحی و پیاده‌سازی خواهد شد. با قدرت در مسیر نوآوری و پیشرفت قدم بر می‌دارم.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-arminred-600 hover:bg-arminred-700">
                  <Link to="/contact">
                    تماس با من
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-gray-500 text-white hover:text-arminred-500 hover:border-arminred-500">
                  <Link to="/work-sample">
                    نمونه کارها
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent z-10"></div>
              <div className="animated-border w-full h-[450px] overflow-hidden rounded-lg">
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">خدمات <span className="text-arminred-600">تخصصی</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">مجموعه‌ای از خدمات تخصصی با کیفیت برای رفع نیازهای دیجیتالی شما</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => <div key={index} className="bg-card border border-border rounded-lg p-6 card-gradient-hover group">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-arminred-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>)}
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" variant="outline" className="border-arminred-600 text-arminred-600 hover:bg-arminred-50 hover:text-arminred-700">
              <Link to="/service" className="group">
                مشاهده همه خدمات
                <ArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Banner */}
      <section className="py-16 bg-arminred-600">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">خالق "هوشمند پرداز"</h2>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                آرمین سافت، با تخصص در برنامه‌نویسی، امنیت و هک اخلاقی، با قدرت در مسیر نوآوری و پیشرفت قدم بر می‌دارد. هر آنچه در ذهن شما باشد، توسط آرمین سافت طراحی و پیاده‌سازی خواهد شد.
              </p>
              <Button asChild variant="secondary" size="lg" className="bg-white hover:bg-gray-100 text-arminred-600">
                <Link to="/about">
                  درباره من بیشتر بدانید
                </Link>
              </Button>
            </div>
            <div className="md:w-1/3 flex justify-center items-center">
              <div className="relative w-40 h-40 md:w-56 md:h-56 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30">
                <span className="text-white text-4xl md:text-6xl font-bold">AS</span>
                <div className="absolute -inset-2 border-2 border-dashed border-white/25 rounded-full animate-spin-slow" style={{
                animationDuration: '20s'
              }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              آماده همکاری برای <span className="text-arminred-600">پروژه بعدی</span> شما هستم
            </h2>
            <p className="text-muted-foreground mb-8">
              با من تماس بگیرید تا درباره ایده‌ها و نیازهای خاص پروژه شما گفتگو کنیم.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-arminred-600 hover:bg-arminred-700">
                <Link to="/contact">
                  همین الان تماس بگیرید
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/work-sample">
                  مشاهده نمونه کارها
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>;
};
export default Home;