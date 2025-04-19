
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SiteLayout } from "@/components/site-layout";
import { motion } from "framer-motion";
import { Shield, Code2, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      title: "طراحی سایت",
      description: "سایت های مدرن و پاسخگو",
      content: "طراحی و توسعه انواع وب سایت با جدیدترین تکنولوژی های روز دنیا",
      icon: <Code2 className="h-6 w-6 text-arminred-500" />,
      path: "/service"
    },
    {
      title: "امنیت وب",
      description: "تست نفوذ و ارزیابی امنیتی",
      content: "خدمات امنیت سایبری و محافظت از داده‌های حساس شما",
      icon: <Shield className="h-6 w-6 text-arminred-500" />,
      path: "/service"
    },
    {
      title: "هوش مصنوعی",
      description: "راهکارهای هوشمند کسب و کار",
      content: "پیاده‌سازی راهکارهای مبتنی بر هوش مصنوعی برای کسب و کار شما",
      icon: <Brain className="h-6 w-6 text-arminred-500" />,
      path: "/service"
    }
  ];

  return (
    <SiteLayout>
      <div className="min-h-screen w-full">
        <section className="w-full h-screen-dynamic flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-b from-black to-gray-900">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              به آرمین سافت خوش آمدید
            </h1>
            <p className="text-lg xs:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              مرکز تخصصی خدمات نرم افزاری، طراحی سایت و امنیت وب
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-arminred-600 to-arminred-800 hover:opacity-90">
                <Link to="/service">مشاهده خدمات</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">تماس با ما</Link>
              </Button>
            </div>
          </motion.div>
        </section>
          
        <section className="w-full py-16 md:py-24 px-4">
          <div className="container mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">خدمات آرمین سافت</h2>
              <div className="w-24 h-1 bg-arminred-500 mx-auto"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full transition-all duration-300 hover:border-arminred-500/30 hover:shadow-lg hover:translate-y-[-4px]">
                    <CardHeader className="pb-2">
                      <div className="flex items-start">
                        <div className="p-2 rounded-lg bg-arminred-500/10 mr-4">
                          {service.icon}
                        </div>
                        <div>
                          <CardTitle className="text-xl">{service.title}</CardTitle>
                          <CardDescription className="mt-1">{service.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-muted-foreground mb-6">{service.content}</p>
                      <Button asChild variant="ghost" className="text-arminred-500 hover:text-arminred-600 hover:bg-arminred-500/10 p-0">
                        <Link to={service.path} className="flex items-center">
                          <span>مشاهده جزئیات</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                            <path d="m12 19-7-7 7-7"/>
                            <path d="M19 12H5"/>
                          </svg>
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-16 text-center"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-arminred-600 to-arminred-800 hover:opacity-90">
                <Link to="/service">مشاهده همه خدمات</Link>
              </Button>
            </motion.div>
          </div>
        </section>
        
        <section className="w-full py-16 md:py-24 px-4 bg-gradient-to-b from-background to-black">
          <div className="container mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">آماده همکاری با ما هستید؟</h2>
              <p className="text-lg text-gray-300 mb-10">
                برای دریافت مشاوره رایگان و شروع پروژه خود، همین امروز با ما تماس بگیرید
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-arminred-600 to-arminred-800 hover:opacity-90">
                  <Link to="/contact">تماس با ما</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/resume">مشاهده رزومه</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
};

export default Index;
