
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck } from "lucide-react";

const licenses = [
  {
    name: "نماد اعتماد الکترونیکی",
    image: "https://trustseal.enamad.ir/logo.aspx?id=519095&Code=jNdpnL31KtNsikcan5emQZWkglmgpsxg",
    link: "https://trustseal.enamad.ir/?id=519095&Code=jNdpnL31KtNsikcan5emQZWkglmgpsxg",
    alt: "نماد اعتماد الکترونیکی",
    type: "e-namad",
    id: "ENAMAD",
    tag: "ای‌نماد"
  },
  {
    name: "زرین‌پال - پرداخت امن",
    image: null,
    link: "https://www.zarinpal.com",
    alt: "زرین‌پال پرداخت امن",
    type: "zarinpal",
    id: "zarinpalTrust",
    tag: "زرین‌پال"
  }
];

// اجرای مجدد TrustCode زرین‌پال پس از render دقیق المان
function useZarinpalScript() {
  useEffect(() => {
    // نام تابع injectZarinpalTrustCode که زرین‌پال با اسکریپت معرفی می‌کند
    const TRUST_FN = "injectZarinpalTrustCode";
    const LOGO_DIV_ID = "zarinpalTrustLogo";

    // Add type definition for the global window object to include the zarinpal function
    interface WindowWithZarinpal extends Window {
      [TRUST_FN]?: () => void;
    }
    
    const windowWithZarinpal = window as WindowWithZarinpal;

    // ساخت یک المان dummy برای تست آماده بودن اسکریپت
    function createDummyElement() {
      const dummyId = "zarinpal-test-element";
      
      // اگر قبلاً ایجاد شده باشد، آن را حذف کنیم
      const existingDummy = document.getElementById(dummyId);
      if (existingDummy) {
        existingDummy.remove();
      }
      
      // ایجاد یک المان مخفی برای تست
      const dummy = document.createElement("div");
      dummy.id = dummyId;
      dummy.style.display = "none";
      dummy.setAttribute("data-zarinpal", "test");
      document.body.appendChild(dummy);
      
      return dummy;
    }

    // تابع تزریق را چند بار تلاش کن
    function tryInject() {
      const logoElement = document.getElementById(LOGO_DIV_ID);
      
      if (!logoElement) {
        console.log("⚠️ المان لوگوی زرین‌پال هنوز در DOM وجود ندارد");
        return false;
      }
      
      if (typeof windowWithZarinpal[TRUST_FN] === 'function') {
        try {
          // یک المان تست به صفحه اضافه می‌کنیم
          const testElement = createDummyElement();
          
          // تلاش می‌کنیم تابع را اجرا کنیم
          windowWithZarinpal[TRUST_FN]();
          console.log("✅ زرین‌پال اسکریپت با موفقیت اجرا شد");
          
          // نشانه‌گذاری المان به عنوان بارگذاری شده تا انیمیشن بارگذاری متوقف شود
          logoElement.classList.add('loaded');
          
          // مخفی کردن لوگوی پشتیبان اگر نمایش داده شده
          const fallbackLogo = document.querySelector('.zarinpal-fallback-logo') as HTMLImageElement;
          if (fallbackLogo) {
            fallbackLogo.style.display = 'none';
          }
          
          // پاکسازی المان تست
          setTimeout(() => testElement.remove(), 1000);
          
          return true;
        } catch (error) {
          console.error("❌ خطا در اجرای اسکریپت زرین‌پال:", error);
          return false;
        }
      } else {
        console.log("⏳ تابع زرین‌پال هنوز آماده نیست");
        return false;
      }
    }

    // یک MutationObserver برای نظارت بر تغییرات DOM
    const observer = new MutationObserver(() => {
      // فقط اگر المان لوگو وجود داشته باشد چک می‌کنیم
      if (document.getElementById(LOGO_DIV_ID)) {
        if (tryInject()) {
          // اگر موفقیت‌آمیز بود، observer را متوقف می‌کنیم
          observer.disconnect();
        }
      }
    });

    // آغاز مشاهده تغییرات DOM
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });

    // تلاش اولیه
    if (!tryInject()) {
      console.log("🔄 اولین تلاش نتیجه نداد، منتظر تغییرات DOM می‌مانیم");
      
      // تلاش‌های زمان‌بندی‌شده با فواصل افزایشی
      const intervals = [1000, 2000, 3000, 5000];
      const timers: NodeJS.Timeout[] = [];
      
      intervals.forEach((delay, index) => {
        const timer = setTimeout(() => {
          console.log(`⏱️ تلاش مجدد شماره ${index + 1} برای اجرای اسکریپت زرین‌پال...`);
          if (tryInject()) {
            // پاکسازی تایمرهای باقی‌مانده
            timers.forEach(t => clearTimeout(t));
            observer.disconnect();
          }
        }, delay);
        
        timers.push(timer);
      });
      
      // پاکسازی تایمرها هنگام unmount
      return () => {
        observer.disconnect();
        timers.forEach(timer => clearTimeout(timer));
      };
    }
    
    // پاکسازی observer هنگام unmount
    return () => {
      observer.disconnect();
    };
  }, []);
}

export function FooterLicenses() {
  useZarinpalScript();
  
  // نمایش لوگوی پشتیبان اگر اسکریپت زرین‌پال بیش از حد طول بکشد
  useEffect(() => {
    const timeoutForFallback = setTimeout(() => {
      const fallbackLogo = document.querySelector('.zarinpal-fallback-logo') as HTMLImageElement;
      if (fallbackLogo) {
        // بررسی می‌کنیم آیا اسکریپت زرین‌پال محتوایی اضافه کرده است
        const trustLogoContainer = document.getElementById('zarinpalTrustLogo');
        if (trustLogoContainer && trustLogoContainer.children.length <= 1) {
          fallbackLogo.style.display = 'block';
          console.log("🔄 استفاده از لوگوی پشتیبان زرین‌پال به دلیل تأخیر در بارگذاری");
        }
      }
    }, 5000); // بعد از 5 ثانیه لوگوی پشتیبان را نشان می‌دهیم
    
    return () => clearTimeout(timeoutForFallback);
  }, []);
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "anticipate" }}
      className="flex justify-center items-center w-full mt-12"
    >
      <div className="relative flex flex-col lg:flex-row gap-8 xl:gap-14 items-stretch bg-gradient-to-br from-black/70 via-arminred-900/30 to-black/95 rounded-3xl px-6 py-7 border border-white/10 shadow-2xl glass backdrop-blur-2xl overflow-hidden w-full max-w-4xl mx-auto">
        {/* تزئین زمینه با انیمیشن */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-0"
          animate={{ opacity: [0.22, 0.32, 0.22], scale: [1, 1.03, 1] }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "mirror" }}
        >
          <div className="w-full h-full bg-gradient-to-tr from-arminred-600/20 via-arminred-400/10 to-white/0 blur-lg opacity-35 rounded-3xl" />
        </motion.div>
        {/* معرفی و عنوان */}
        <div className="z-10 flex flex-col gap-2 items-center lg:items-end min-w-[180px] self-center">
          <span className="flex items-center text-lg md:text-xl font-extrabold text-arminred-500 gap-2">
            <ShieldCheck className="w-8 h-8 animate-pulse-glow text-arminred-500 drop-shadow-xl" />
            اعتبارسنجی تجارت و پرداخت مدرن
          </span>
          <span className="text-sm text-white/80 hidden md:block font-light">پشتیبانی رسمی و امانت در پرداخت آنلاین</span>
        </div>
        {/* لوگوها/مجوزها */}
        <div className="z-10 flex flex-row flex-wrap gap-8 items-center justify-center">
          {/* ای‌نماد */}
          <motion.a
            href={licenses[0].link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.09, rotate: [0, 6] }}
            transition={{ duration: 0.5, type: "spring" }}
            className="relative flex flex-col items-center group cursor-pointer hover-scale"
          >
            <div className="relative w-[84px] h-[84px] rounded-2xl bg-white/20 border-2 border-arminred-500/30 overflow-hidden shadow-lg group-hover:shadow-arminred-400/30 transition-all duration-200">
              <img
                src={licenses[0].image}
                alt={licenses[0].alt}
                referrerPolicy="origin"
                width={84}
                height={84}
                className="object-contain w-full h-full pointer-events-none select-none"
                style={{ cursor: "pointer" }}
              />
              <span className="absolute top-3 left-3 bg-arminred-500/90 rounded-full p-1.5 animate-pulse shadow-lg border-2 border-white/60">
                <BadgeCheck className="w-6 h-6 text-white" />
              </span>
            </div>
            <span className="mt-2 text-xs font-semibold text-white/90 group-hover:text-arminred-400 transition-all whitespace-nowrap">
              {licenses[0].name}
            </span>
          </motion.a>

          {/* زرین‌پال: لوگوی اسکریپتی */}
          <motion.div
            whileHover={{ scale: 1.08, y: -6 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="relative flex flex-col items-center group"
          >
            <div className="relative w-[92px] h-[84px] rounded-2xl bg-white/20 border-2 border-yellow-400/60 overflow-hidden shadow-lg group-hover:shadow-yellow-400/30 transition-all duration-200 flex items-center justify-center">
              {/* لوگوی زرین‌پال به‌صورت اسکریپتی */}
              <div
                id="zarinpalTrustLogo"
                className="w-[94px] h-[82px] flex items-center justify-center"
                style={{ cursor: "pointer" }}
              >
                {/* اسکریپت TrustCode زرین‌پال در FooterLicenses به‌صورت داینامیک درج می‌شود */}
                {/* لوگوی پشتیبان در صورت عدم بارگذاری اسکریپت */}
                <img 
                  src="https://www.zarinpal.com/assets/images/logo-white.svg"
                  alt="زرین‌پال"
                  className="w-[70px] h-auto zarinpal-fallback-logo"
                  style={{ display: 'none' }}
                  onError={(e) => {
                    // اگر لوگو بارگذاری نشد، لوگوی پشتیبان را نشان می‌دهیم
                    e.currentTarget.style.display = 'block';
                  }}
                />
              </div>
              <span className="absolute top-3 left-3 bg-yellow-400/80 rounded-full p-1.5 animate-pulse shadow-lg border-2 border-white/50">
                <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="none" viewBox="0 0 24 24">
                  <path fill="#fff" d="M16.34 6.22a1.25 1.25 0 0 1 1.77 0 1.25 1.25 0 0 1 0 1.77l-7.12 7.13-3.26-3.26a1.25 1.25 0 1 1 1.77-1.77l1.49 1.5 5.35-5.37Z"/>
                </svg>
              </span>
            </div>
            <span className="mt-2 text-xs font-semibold text-white/90 group-hover:text-yellow-300 transition-all whitespace-nowrap">
              پرداخت امن زرین‌پال
            </span>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
