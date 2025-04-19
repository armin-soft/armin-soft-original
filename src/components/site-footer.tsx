import React from 'react';
import { Link } from "react-router-dom";
import { Facebook, Github, Instagram, Twitter, Youtube, MessageCircle, Phone, AtSign, Mail, MapPin, Linkedin, ArrowRight, MessageSquare, Navigation, Map, Compass, Shield, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  
  const { register, handleSubmit, reset } = useForm<{ email: string }>();
  
  const onSubmit = (data: { email: string }) => {
    console.log("Subscription email:", data.email);
    toast({
      title: "ایمیل شما ثبت شد",
      description: "از اشتراک شما در خبرنامه آرمین سافت سپاسگزاریم.",
    });
    reset();
  };
  
  const socialLinks = [
    { icon: <Instagram size={18} />, url: "https://instagram.com/ARMIN_SOFT", label: "اینستاگرام", color: "hover:bg-gradient-to-tr hover:from-yellow-500 hover:to-pink-600" },
    { icon: <Twitter size={18} />, url: "https://twitter.com/@ARMIN_SOFT", label: "توییتر", color: "hover:bg-blue-500" },
    { icon: <MessageSquare size={18} />, url: "https://wa.me/989358983854", label: "واتساپ", color: "hover:bg-green-500" },
    { icon: <Facebook size={18} />, url: "https://www.facebook.com/@ARMINSOFT0", label: "فیسبوک", color: "hover:bg-blue-600" },
    { icon: <Github size={18} />, url: "https://github.com/ARMIN-SOFT", label: "گیت‌هاب", color: "hover:bg-gray-700" },
    { icon: <Youtube size={18} />, url: "https://www.youtube.com/@ARMIN_SOFT", label: "یوتیوب", color: "hover:bg-red-600" },
    { icon: <MessageCircle size={18} />, url: "https://t.me/Channel_ARMINSOFT", label: "کانال تلگرام", color: "hover:bg-blue-400" },
    { icon: <MessageCircle size={18} />, url: "https://t.me/ARMIN_SOFT", label: "تلگرام", color: "hover:bg-blue-400" },
    { icon: <AtSign size={18} />, url: "https://www.aparat.com/ARMIN_SOFT", label: "آپارات", color: "hover:bg-red-500" },
  ];

  const footerLinks = [
    {
      title: "دسترسی سریع",
      links: [
        { name: "صفحه اصلی", path: "/" },
        { name: "رزومه", path: "/resume" },
        { name: "خدمات", path: "/service" },
        { name: "نمونه کار", path: "/work-sample" },
        { name: "تماس", path: "/contact" },
        { name: "درباره", path: "/about" },
      ]
    },
    {
      title: "خدمات",
      links: [
        { name: "طراحی نرم‌افزار", path: "/service#software" },
        { name: "توسعه وب", path: "/service#web" },
        { name: "هوش مصنوعی", path: "/service#ai" },
        { name: "امنیت و هک اخلاقی", path: "/service#security" },
        { name: "ربات‌های تلگرام", path: "/service#bots" },
        { name: "مدیریت دیتابیس", path: "/service#database" },
      ]
    }
  ];

  const licenses = [
    { 
      name: "نماد اعتماد الکترونیکی", 
      image: "https://trustseal.enamad.ir/logo.aspx?id=519095&Code=jNdpnL31KtNsikcan5emQZWkglmgpsxg",
      link: "https://trustseal.enamad.ir/?id=519095&Code=jNdpnL31KtNsikcan5emQZWkglmgpsxg",
      id: "jNdpnL31KtNsikcan5emQZWkglmgpsxg"
    },
    {
      name: "نماد ساماندهی",
      image: "https://logo.samandehi.ir/logo.aspx?id=146772&p=nbpdshwlwlbqyndtyndtodrf",
      link: "https://logo.samandehi.ir/Verify.aspx?id=146772&p=rfthaodsgvkajyoejyoeuiwk",
      id: "jxlzwlaofukzjzpejzpenbqe"
    }
  ];

  const containerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-black/95 text-white pt-16 pb-6 mt-16 farsi-numbers">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={containerAnimation}
          className="relative overflow-hidden mb-12 bg-gradient-to-r from-arminred-700 to-black p-6 md:p-8 rounded-2xl shadow-xl border border-arminred-800/50"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-md"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                عضویت در خبرنامه
              </h3>
              <p className="text-white/80">
                برای دریافت آخرین اخبار و مقالات تخصصی در زمینه برنامه‌نویسی و امنیت در خبرنامه ما عضو شوید.
              </p>
            </motion.div>

            <motion.form 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              onSubmit={handleSubmit(onSubmit)}
              className="flex w-full max-w-md group"
            >
              <Input
                type="email"
                placeholder="ایمیل خود را وارد کنید..."
                className="text-right rounded-r-md rounded-l-none border-0 bg-white/10 text-white placeholder:text-white/60 focus-visible:ring-arminred-500 transition-all hover:bg-white/20"
                {...register("email", { required: true })}
              />
              <Button 
                type="submit" 
                className="rounded-l-md rounded-r-none bg-white text-arminred-600 hover:bg-white/90 hover:text-arminred-700 transition-all duration-300"
              >
                اشتراک
                <ArrowRight className="mr-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.form>
          </div>

          <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-arminred-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-arminred-700/10 rounded-full blur-3xl"></div>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8"
        >
          <div className="md:col-span-4 space-y-6">
            <Link to="/" className="flex items-center space-x-2 space-x-reverse text-2xl font-bold">
              <span className="bg-arminred-600 text-white px-2 py-1 rounded">آرمین</span>
              <span>سافت</span>
            </Link>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              توسعه‌دهنده نرم‌افزار، مت��صص امنیت و هک اخلاقی با تمرکز بر ارائه راهکارهای هوشمند و امن.
              هر آنچه در ذهن شماست، با آرمین سافت به واقعیت تبدیل می‌شود.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse transition-transform hover:translate-x-2">
                <div className="p-2 bg-arminred-600/20 rounded-full">
                  <Phone size={16} className="text-arminred-500" />
                </div>
                <span className="text-gray-300 text-sm">۰۹۳۵۸۹۸۳۸۵۴</span>
              </div>
              
              <div className="flex items-center space-x-3 space-x-reverse transition-transform hover:translate-x-2">
                <div className="p-2 bg-arminred-600/20 rounded-full">
                  <Mail size={16} className="text-arminred-500" />
                </div>
                <span className="text-gray-300 text-sm">info@armin-soft.ir</span>
              </div>
              
              <div className="flex items-center space-x-3 space-x-reverse transition-transform hover:translate-x-2">
                <div className="p-2 bg-arminred-600/20 rounded-full">
                  <MapPin size={16} className="text-arminred-500" />
                </div>
                <span className="text-gray-300 text-sm">ایران، تهران، پاکدشت</span>
              </div>
            </div>
          </div>

          {footerLinks.map((section, idx) => (
            <div key={idx} className="md:col-span-2">
              <h3 className="text-lg font-bold mb-4 relative pr-3 before:content-[''] before:absolute before:top-0 before:right-0 before:h-full before:w-1 before:bg-arminred-600">
                {section.title}
              </h3>
              <nav className="flex flex-col space-y-2">
                {section.links.map((link, linkIdx) => (
                  <Link 
                    key={linkIdx} 
                    to={link.path} 
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <motion.span 
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                      className="h-1 w-1 bg-arminred-500 rounded-full ml-2 opacity-60 group-hover:opacity-100"
                    />
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          ))}

          <div className="md:col-span-4">
            <h3 className="text-lg font-bold mb-4 relative pr-3 before:content-[''] before:absolute before:top-0 before:right-0 before:h-full before:w-1 before:bg-arminred-600">
              شبکه‌های اجتماعی
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center p-3 rounded-lg bg-black/50 border border-gray-800 transition-colors ${link.color}`}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-4 space-x-reverse">
              <Shield className="text-arminred-500" size={24} />
              <h3 className="text-lg font-bold">مجوزها و گواهینامه‌ها</h3>
            </div>
            
            <div className="flex items-center space-x-6 space-x-reverse">
              {licenses.map((license, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center space-y-2 group"
                >
                  <img 
                    src={license.image}
                    alt={license.name}
                    id={license.id}
                    onClick={() => window.open(license.link, '_blank')}
                    className="h-20 w-20 object-contain cursor-pointer"
                    referrerPolicy="origin"
                  />
                  <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
                    {license.name}
                  </span>
                </motion.div>
              ))}
              {/* ZarinPal Trust Badge */}
              <div 
                id="zarinpal-trust-badge"
                className="flex flex-col items-center space-y-2 group"
              >
                <script 
                  src="https://www.zarinpal.com/webservice/TrustCode" 
                  type="text/javascript"
                  async
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="border-t border-gray-800 mt-8 pt-6 text-center"
        >
          <p className="text-gray-500 text-sm">
            تمامی حقوق این وب‌سایت متعلق به آرمین سافت می‌باشد &copy; {currentYear}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
