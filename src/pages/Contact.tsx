
import React from "react";
import { SiteLayout } from "@/components/site-layout";
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactMethods } from "@/components/contact/ContactMethods";
import { ContactForm } from "@/components/contact/ContactForm";
import { SocialLinks } from "@/components/contact/SocialLinks";
import { MapNavigation } from "@/components/contact/MapNavigation";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <SiteLayout>
      <ContactHero />

      {/* Contact Information */}
      <section className="py-16 md:py-24 farsi-numbers">
        <div className="container mx-auto px-4 md:px-6">
          <ContactMethods />

          {/* Contact Form and Social Links */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            
            {/* Social Media Links */}
            <div className="lg:col-span-2">
              <Card className="bg-card border border-border shadow-md h-full">
                <div className="bg-black p-4">
                  <h3 className="text-xl font-bold text-white">شبکه‌های اجتماعی</h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-6">
                    می‌توانید من را در شبکه‌های اجتماعی زیر دنبال کنید و از آخرین اخبار و فعالیت‌هایم مطلع شوید.
                  </p>
                  <SocialLinks />
                  
                  <div className="mt-8 p-5 bg-arminred-500/10 rounded-lg border border-arminred-500/20">
                    <h4 className="font-bold mb-2 flex items-center">
                      <MapPin className="ml-2 h-5 w-5 text-arminred-600" />
                      تماس سریع
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      برای ارتباط سریع‌تر با شماره <a href="tel:+989358983854" className="text-arminred-600 font-medium">۰۹۳۵۸۹۸۳۸۵۴</a> تماس بگیرید یا به آیدی <a href="https://t.me/ARMIN_SOFT" className="text-arminred-600 font-medium" target="_blank" rel="noopener noreferrer">@ARMIN_SOFT</a> در تلگرام پیام دهید.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Navigation Links */}
      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold">موقعیت مکانی شرکت آرمین‌سافت</h2>
            <p className="text-muted-foreground mt-2">برای مشاهده دقیق محل شرکت از نقشه‌های زیر استفاده کنید</p>
          </motion.div>
          
          <div className="flex flex-col space-y-6">
            <MapNavigation />
            
            {/* Google Map */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden h-[400px] border-4 border-white shadow-xl"
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
              />
            </motion.div>
            
            {/* Extra information about location */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-md border border-border"
            >
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="p-3 rounded-full bg-arminred-500/10">
                  <MapPin className="h-6 w-6 text-arminred-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">آدرس دقیق آرمین سافت</h3>
                  <p className="text-muted-foreground mb-4">
                    ایران، تهران، پاکدشت، خیابان شهید مطهری، کوچه شهید حیدری 8، پلاک 125، طبقه دوم
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="inline-flex items-center bg-muted px-3 py-1 rounded-full">
                      <span className="text-foreground ml-1">کد پستی:</span>
                      <span className="text-muted-foreground">۳۳۶۱۶۵۴۷۵۱</span>
                    </span>
                    <span className="inline-flex items-center bg-muted px-3 py-1 rounded-full">
                      <span className="text-foreground ml-1">ساعات کاری:</span>
                      <span className="text-muted-foreground">شنبه تا پنجشنبه ۹ الی ۱۸</span>
                    </span>
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
