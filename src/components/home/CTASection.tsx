
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, PhoneCall, Mail, Clock } from "lucide-react";
import { useRef, useEffect } from "react";

export const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.body.classList.add("cta-glow");
        } else {
          document.body.classList.remove("cta-glow");
        }
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      document.body.classList.remove("cta-glow");
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-2 md:px-0 min-h-[50vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-arminred-700/60 via-black/80 to-arminred-950"
    >
      {/* پس‌زمینه‌های شیشه‌ای متحرک */}
      <motion.div 
        className="absolute -top-40 left-1/4 w-[480px] h-[400px] bg-gradient-to-br from-white/20 via-arminred-500/30 to-transparent rounded-2xl blur-[120px] z-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-[480px] h-[300px] bg-gradient-to-tl from-arminred-400/30 via-fuchsia-400/25 to-transparent rounded-[6rem] blur-[100px] z-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.07 }}
        transition={{ delay: 0.5, duration: 2.1, ease: "easeOut" }}
      />
      {/* خطوط و نقطه‌های اکتیو در پس زمینه */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="w-full h-full" width="100%" height="100%">
          <defs>
            <linearGradient id="cta-line" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.07" />
              <stop offset="100%" stopColor="#fca5a5" stopOpacity="0.10" />
            </linearGradient>
          </defs>
          <polyline
            points="0,190 100,110 230,230 400,100"
            fill="none"
            stroke="url(#cta-line)"
            strokeWidth="2"
            strokeDasharray="8,18"
            opacity="0.25"
          />
        </svg>
        {/* نقاط */}
        <div className="absolute left-16 top-32 w-2 h-2 rounded-full bg-arminred-500/40 animate-pulse" />
        <div className="absolute right-40 bottom-32 w-2 h-2 rounded-full bg-white/20 animate-pulse" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.95, ease: "anticipate" }}
          className="text-center space-y-8 w-full"
        >
          <div className="inline-block mb-2">
            <span className="bg-gradient-to-r from-arminred-500/20 to-arminred-400/10 text-arminred-400 shadow-lg text-xs font-bold tracking-wide px-3 py-1 rounded uppercase border border-arminred-400/30 backdrop-blur-md">Let’s Collaborate</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-arminred-300 drop-shadow leading-relaxed tracking-tight">
            آماده‌ی تجربه یک همکاری منحصربه‌فرد و ماندگار؟
          </h2>
          <p className="text-lg md:text-2xl text-gray-200/90 leading-snug max-w-2xl mx-auto font-medium">
            همین حالا پروژه یا ایده‌ات رو با من مطرح کن و یک جلسه مشاوره رایگان دریافت کن!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="mt-10 flex flex-wrap justify-center gap-5"
        >
          <Button asChild size="lg" className="bg-gradient-to-r from-arminred-600 via-arminred-400 to-arminred-500 text-white px-8 py-3 rounded-xl shadow-xl animate-pulse focus:ring-2 focus:ring-arminred-400/50 relative hover:scale-105 transition-transform hover:from-arminred-700 hover:to-arminred-600 duration-300">
            <Link to="/contact" className="flex items-center gap-2 text-lg font-semibold">
              <MessageSquare className="h-6 w-6 -ml-2" />
              شروع گفتگو
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-arminred-500 hover:border-arminred-400 hover:bg-arminred-500/10 px-8 py-3 rounded-xl shadow-md transition-all duration-300 text-arminred-400 hover:text-arminred-600 focus:ring-2 focus:ring-arminred-400/30">
            <Link to="/service" className="flex items-center gap-2 text-lg font-semibold">
              مشاهده خدمات
              <ArrowRight className="h-6 w-6" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.98, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.45, ease: "circOut" }}
          className="pt-12 flex flex-col items-center space-y-6 w-full max-w-xl"
        >
          <p className="text-arminred-300 text-lg font-bold">راه‌های ارتباطی مستقیم</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
            <div className="flex items-center gap-3 glass-morphism hover:scale-105 transition-transform duration-300 p-4 rounded-lg border border-white/10">
              <span className="p-2 rounded-lg glass-morphism">
                <PhoneCall className="h-5 w-5 text-arminred-400" />
              </span>
              <a href="tel:+989358983854" className="text-base text-gray-200 hover:text-white transition-colors font-mono ltr">
                ۰۹۳۵۸۹۸۳۸۵۴
              </a>
            </div>
            <div className="flex items-center gap-3 glass-morphism hover:scale-105 transition-transform duration-300 p-4 rounded-lg border border-white/10">
              <span className="p-2 rounded-lg glass-morphism">
                <Mail className="h-5 w-5 text-arminred-400" />
              </span>
              <a href="mailto:info@armin-soft.ir" className="text-base text-gray-200 hover:text-white transition-colors font-mono ltr">
                info@armin-soft.ir
              </a>
            </div>
            <div className="flex items-center gap-3 glass-morphism p-4 rounded-lg border border-white/10">
              <span className="p-2 rounded-lg glass-morphism">
                <Clock className="h-5 w-5 text-arminred-400" />
              </span>
              <div className="text-base text-gray-200 font-medium text-right leading-snug">
                <p>شنبه تا چهارشنبه: ۹ الی ۱۷</p>
                <p>پنجشنبه: ۹ الی ۱۴</p>
                <p className="text-arminred-300">جمعه: تعطیل</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
