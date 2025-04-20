import React, { useEffect } from "react";
import { SiteLayout } from "@/components/site-layout";
import { MapPin, ArrowRight } from "lucide-react";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactMethods } from "@/components/contact/ContactMethods";
import { ContactForm } from "@/components/contact/ContactForm";
import { SocialLinks } from "@/components/contact/SocialLinks";
import { MapNavigation } from "@/components/contact/MapNavigation";
import { motion, useScroll, useTransform } from "framer-motion";

const Contact = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  useEffect(() => {
    document.title = "تماس با آرمین سافت | ارتباط با ما";
  }, []);

  return (
    <SiteLayout>
      <ContactHero />

      <section className="py-16 md:py-24 farsi-numbers relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-40 left-20 w-64 h-64 rounded-full bg-arminred-500/30 filter blur-3xl" />
            <div className="absolute bottom-20 right-40 w-96 h-96 rounded-full bg-blue-500/20 filter blur-3xl" />
          </div>
          <div className="absolute w-full h-full bg-grid-pattern opacity-5" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <ContactMethods />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-card backdrop-blur-sm border border-border shadow-md h-full rounded-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-black to-arminred-900/80 p-4">
                    <h3 className="text-xl font-bold text-white flex items-center">
                      <span className="inline-block w-2 h-6 bg-arminred-500 ml-2"></span>
                      شبکه‌های اجتماعی
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-6">
                      می‌توانید من را در شبکه‌های اجتماعی زیر دنبال کنید و از آخرین اخبار و فعالیت‌هایم مطلع شوید.
                    </p>
                    <SocialLinks />
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="mt-8 p-5 bg-gradient-to-br from-arminred-500/10 to-arminred-600/5 rounded-lg border border-arminred-500/20"
                    >
                      <h4 className="font-bold mb-2 flex items-center">
                        <MapPin className="ml-2 h-5 w-5 text-arminred-600" />
                        تماس سریع
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        برای ارتباط سریع‌تر با شماره <a href="tel:+989358983854" className="text-arminred-600 font-medium hover:underline">۰۹۳۵۸۹۸۳۸۵۴</a> تماس بگیرید یا به آیدی <a href="https://t.me/ARMIN_SOFT" className="text-arminred-600 font-medium hover:underline" target="_blank" rel="noopener noreferrer">@ARMIN_SOFT</a> در تلگرام پیام دهید.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-muted/70 z-0" />
        
        <div className="absolute inset-0 z-0">
          <svg className="absolute left-0 top-0 h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
          </svg>
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeOpacity="0.2" />
            </pattern>
          </defs>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            style={{ opacity, scale }}
            className="text-center mb-14"
          >
            <h2 className="text-2xl md:text-4xl font-bold relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-arminred-500 to-arminred-700">
                موقعیت مکانی شرکت آرمین‌سافت
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-arminred-500 to-arminred-700"></div>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              برای مشاهده دقیق محل شرکت از نقشه‌های زیر استفاده کنید. شما می‌توانید با کلیک روی هر کدام از نقشه‌ها، مسیریابی خود را شروع کنید.
            </p>
          </motion.div>
          
          <div className="flex flex-col space-y-10">
            <MapNavigation />
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden h-[450px] border-4 border-white/10 shadow-2xl relative"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.6633208828505!2d51.67436997677457!3d35.48762777270472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f91eb2b6c71c453%3A0x7908be7f77a9ab27!2sARMIN-SOFT!5e0!3m2!1sfa!2s!4v1682250241209!5m2!1sfa!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="نقشه موقعیت دفتر آرمین‌سافت"
                className="filter brightness-90"
              />
              <div className="absolute inset-0 pointer-events-none border border-white/20 rounded-xl" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-card/60 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-arminred-500/5 to-transparent opacity-60" />
              <div className="relative z-10">
                <div className="flex items-start space-x-6 space-x-reverse">
                  <div className="p-4 rounded-full bg-gradient-to-br from-arminred-500 to-arminred-700 text-white shadow-lg">
                    <MapPin className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-gradient">
                      آدرس دقیق آرمین سافت
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      ایران، تهران، پاکدشت، خیابان شهید مطهری، کوچه شهید حیدری 8، پلاک 125، طبقه دوم
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <motion.div 
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="flex items-center bg-card/60 p-4 rounded-lg border border-border"
                      >
                        <span className="flex items-center w-full">
                          <span className="text-foreground ml-2 font-medium">کد پستی:</span>
                          <span className="text-muted-foreground">۳۳۶۱۶۵۴۷۵۱</span>
                        </span>
                      </motion.div>
                      
                      <motion.div 
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="flex items-center bg-card/60 p-4 rounded-lg border border-border"
                      >
                        <span className="flex items-center w-full">
                          <span className="text-foreground ml-2 font-medium">ساعات کاری:</span>
                          <span className="text-muted-foreground">شنبه تا پنجشنبه ۹ الی ۱۸</span>
                        </span>
                      </motion.div>
                    </div>
                    
                    <motion.a 
                      href="https://goo.gl/maps/aZtT6idnKnTKNXoz5"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className="mt-6 inline-flex items-center px-6 py-3 bg-gradient-to-r from-arminred-600 to-arminred-700 text-white rounded-lg font-medium shadow-lg hover:shadow-arminred-500/20 transition-all duration-300"
                    >
                      <span>مسیریابی با گوگل مپ</span>
                      <ArrowRight className="mr-2 h-5 w-5" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Contact;
