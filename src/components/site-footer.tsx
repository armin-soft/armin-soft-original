
import { Link } from "react-router-dom";
import { Facebook, Github, Instagram, Twitter, Youtube, MessageCircle, Phone, AtSign } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Instagram size={18} />, url: "https://instagram.com/ARMIN_SOFT", label: "اینستاگرام" },
    { icon: <Twitter size={18} />, url: "https://twitter.com/@ARMIN_SOFT", label: "توییتر" },
    { icon: <Facebook size={18} />, url: "https://www.facebook.com/@ARMINSOFT0", label: "فیسبوک" },
    { icon: <Github size={18} />, url: "https://github.com/ARMIN-SOFT", label: "گیت‌هاب" },
    { icon: <Youtube size={18} />, url: "https://www.youtube.com/@ARMIN_SOFT", label: "یوتیوب" },
    { icon: <MessageCircle size={18} />, url: "https://t.me/ARMIN_SOFT", label: "تلگرام" },
  ];

  return (
    <footer className="bg-black/90 text-white pt-12 pb-6 mt-10 farsi-numbers">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 space-x-reverse text-2xl font-bold">
              <span className="bg-arminred-600 text-white px-2 py-1 rounded">آرمین</span>
              <span>سافت</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              توسعه‌دهنده نرم‌افزار، متخصص امنیت و هک اخلاقی با تمرکز بر ارائه راهکارهای هوشمند و امن.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold relative pr-3 before:content-[''] before:absolute before:top-0 before:right-0 before:h-full before:w-1 before:bg-arminred-600">لینک‌های مفید</h3>
            <nav className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">صفحه اصلی</Link>
              <Link to="/service" className="text-gray-400 hover:text-white transition-colors">خدمات</Link>
              <Link to="/resume" className="text-gray-400 hover:text-white transition-colors">رزومه</Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">تماس با من</Link>
              <Link to="/work-sample" className="text-gray-400 hover:text-white transition-colors">نمونه کارها</Link>
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors">درباره</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold relative pr-3 before:content-[''] before:absolute before:top-0 before:right-0 before:h-full before:w-1 before:bg-arminred-600">تماس با من</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Phone size={18} className="text-arminred-500" />
                <span className="text-gray-400">۰۹۳۵۸۹۸۳۸۵۴</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <AtSign size={18} className="text-arminred-500" />
                <span className="text-gray-400">info@armin-soft.ir</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <MessageCircle size={18} className="text-arminred-500" />
                <span className="text-gray-400">@ARMIN_SOFT</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 pt-2">
              {socialLinks.map((link, index) => (
                <Button 
                  key={index} 
                  asChild
                  variant="outline" 
                  size="icon" 
                  className="bg-black/50 border-gray-700 hover:bg-gray-800 hover:border-gray-600 rounded-md h-10 w-10"
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
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>تمامی حقوق این وب‌سایت متعلق به آرمین سافت می‌باشد &copy; {currentYear}</p>
        </div>
      </div>
    </footer>
  );
}
