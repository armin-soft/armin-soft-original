
import { Link } from "react-router-dom";
import { Facebook, Github, Instagram, Twitter, Youtube, MessageCircle, Phone, AtSign, Mail, MapPin, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  
  const { register, handleSubmit, reset } = useForm<{ email: string }>();
  
  const onSubmit = (data: { email: string }) => {
    // Here you would typically send this to your API
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
    { icon: <Facebook size={18} />, url: "https://www.facebook.com/@ARMINSOFT0", label: "فیسبوک", color: "hover:bg-blue-600" },
    { icon: <Linkedin size={18} />, url: "https://linkedin.com/in/armin-soft", label: "لینکدین", color: "hover:bg-blue-700" },
    { icon: <Github size={18} />, url: "https://github.com/ARMIN-SOFT", label: "گیت‌هاب", color: "hover:bg-gray-700" },
    { icon: <Youtube size={18} />, url: "https://www.youtube.com/@ARMIN_SOFT", label: "یوتیوب", color: "hover:bg-red-600" },
    { icon: <MessageCircle size={18} />, url: "https://t.me/ARMIN_SOFT", label: "تلگرام", color: "hover:bg-blue-400" },
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

  return (
    <footer className="bg-black/95 text-white pt-16 pb-6 mt-16 farsi-numbers">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top Section with Newsletter */}
        <div className="relative overflow-hidden mb-12 bg-gradient-to-r from-arminred-700 to-black p-6 md:p-8 rounded-2xl shadow-xl border border-arminred-800/50">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-md">
              <h3 className="text-xl md:text-2xl font-bold mb-2">عضویت در خبرنامه</h3>
              <p className="text-white/80 mb-4">برای دریافت آخرین اخبار و مقالات تخصصی در زمینه برنامه‌نویسی و امنیت در خبرنامه ما عضو شوید.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex w-full max-w-md">
              <Input
                type="email"
                placeholder="ایمیل خود را وارد کنید..."
                className="text-right rounded-r-md rounded-l-none border-0 bg-white/10 text-white placeholder:text-white/60 focus-visible:ring-arminred-500"
                {...register("email", { required: true })}
              />
              <Button type="submit" className="rounded-l-md rounded-r-none bg-white text-arminred-600 hover:bg-white/90 hover:text-arminred-700">
                اشتراک
                <ArrowRight className="mr-1 h-4 w-4" />
              </Button>
            </form>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-arminred-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-arminred-700/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Company Info Column */}
          <div className="md:col-span-4 space-y-6">
            <Link to="/" className="flex items-center space-x-2 space-x-reverse text-2xl font-bold">
              <span className="bg-arminred-600 text-white px-2 py-1 rounded">آرمین</span>
              <span>سافت</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              توسعه‌دهنده نرم‌افزار، متخصص امنیت و هک اخلاقی با تمرکز بر ارائه راهکارهای هوشمند و امن. هر آنچه در ذهن شماست، با آرمین سافت به واقعیت تبدیل می‌شود.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="p-2 bg-arminred-600/20 rounded-full">
                  <Phone size={16} className="text-arminred-500" />
                </div>
                <span className="text-gray-300 text-sm">۰۹۳۵۸۹۸۳۸۵۴</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="p-2 bg-arminred-600/20 rounded-full">
                  <Mail size={16} className="text-arminred-500" />
                </div>
                <span className="text-gray-300 text-sm">info@armin-soft.ir</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="p-2 bg-arminred-600/20 rounded-full">
                  <MapPin size={16} className="text-arminred-500" />
                </div>
                <span className="text-gray-300 text-sm">ایران، تهران، پاکدشت</span>
              </div>
            </div>
          </div>
          
          {/* Links Columns */}
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
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
                  >
                    <span className="h-1 w-1 bg-arminred-500 rounded-full ml-2 opacity-60"></span>
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
          
          {/* Contact Form Column */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-lg font-bold mb-4 relative pr-3 before:content-[''] before:absolute before:top-0 before:right-0 before:h-full before:w-1 before:bg-arminred-600">
              ارتباط با ما
            </h3>
            <p className="text-gray-400 text-sm">برای مشاوره رایگان و یا درخواست همکاری با ما در ارتباط باشید.</p>
            <Link to="/contact">
              <Button className="w-full bg-arminred-600 hover:bg-arminred-700">
                تماس با ما
              </Button>
            </Link>
            
            {/* Social Media Links */}
            <div>
              <h4 className="text-sm font-medium mb-3 text-gray-300">ما را در شبکه‌های اجتماعی دنبال کنید:</h4>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((link, index) => (
                  <Button 
                    key={index} 
                    asChild
                    variant="outline" 
                    size="icon" 
                    className={`bg-black/50 border-gray-800 group ${link.color} hover:border-transparent rounded-md h-10 w-10 transition-all duration-300`}
                  >
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>تمامی حقوق این وب‌سایت متعلق به آرمین سافت می‌باشد &copy; {currentYear}</p>
        </div>
      </div>
    </footer>
  );
}
