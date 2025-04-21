
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, PhoneCall, Mail, Clock } from "lucide-react";
import { useRef, useEffect } from "react";

export const CTASection = () => {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // ترنزیشن پارالاکس و Opacity
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [controls]);

  // دکمه‌های انیمیشنی
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.075, boxShadow: "0 4px 24px 0 rgba(239,68,68,0.08)", transition: { duration: 0.19, yoyo: Infinity } }
  };

  // کارت‌های تماس
  const contactMethods = [
    {
      icon: <PhoneCall className="h-6 w-6 text-arminred-500 drop-shadow-md" />,
      title: "تماس مستقیم",
      value: "۰۹۳۵۸۹۸۳۸۵۴",
      link: "tel:+989358983854",
      gradient: "from-[#e66465]/40 via-[#9198e5]/40 to-[#abb9d2]/30"
    },
    {
      icon: <Mail className="h-6 w-6 text-arminred-500 drop-shadow-md" />,
      title: "ایمیل",
      value: "info@armin-soft.ir",
      link: "mailto:info@armin-soft.ir",
      gradient: "from-[#43cea2]/40 via-[#185a9d]/40 to-[#a8edea]/30"
    },
    {
      icon: <Clock className="h-6 w-6 text-arminred-500 drop-shadow-md" />,
      title: "ساعات کاری",
      value: "شنبه تا چهارشنبه: 9 الی 17",
      subvalue1: "پنجشنبه: 9 الی 14",
      subvalue2: "جمعه: تعطیل",
      gradient: "from-[#f7971e]/40 via-[#ffd200]/40 to-[#f8b500]/30"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-36 md:py-44 overflow-hidden">
      {/* پس‌زمینه شیشه‌ای بلوری مدرن با گرادیانت‌های شناور */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-background z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-arminred-600/10 via-transparent to-transparent opacity-70 pointer-events-none" />
        {/* بلورهای دکوراتیو */}
        <motion.div
          className="absolute -top-20 right-10 w-[27rem] h-[27rem] rounded-full bg-gradient-to-br from-arminred-500/25 to-arminred-900/15 filter blur-[128px] mix-blend-lighten z-0"
          animate={{
            scale: [1.15, 1.22, 1.08],
            opacity: [0.22, 0.34, 0.22]
          }}
          transition={{
            duration: 8.8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute bottom-[-7rem] left-0 w-[36rem] h-[36rem] rounded-full bg-gradient-to-r from-purple-500/15 to-blue-400/10 filter blur-[164px] mix-blend-plus-lighter z-0"
          animate={{
            scale: [1.08, 1.22, 1.13],
            opacity: [0.2, 0.33, 0.24]
          }}
          transition={{
            duration: 12.2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.7
          }}
        />
      </div>
      {/* محتوای بخش */}
      <motion.div style={{ y, opacity }} className="container relative z-10 mx-auto px-4 md:px-8 max-w-6xl">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 56 },
            visible: {
              opacity: 1, y: 0,
              transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.18 }
            }
          }}
          className="flex flex-col items-center w-full space-y-14"
        >
          {/* عنوان و ساب‌تایتل با افکت in-view */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 28 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-center"
          >
            <span className="inline-block mb-3 relative px-4 py-2 text-xs font-bold tracking-widest uppercase bg-gradient-to-br from-arminred-400 via-arminred-700 to-black/90 text-transparent bg-clip-text shadow-lg"
            >همکاری</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-gradient bg-gradient-to-l from-white via-gray-300 to-gray-400 px-1 py-0.5 drop-shadow-lg tracking-tight mb-5">
              برای آینده پروژه شما آماده‌ام
            </h2>
            <p className="text-xl md:text-2xl text-gray-400/90 max-w-2xl mx-auto leading-relaxed mt-2">
              به دنبال شروع یک همکاری متمایز، مشاوره اختصاصی یا اجرای پروژه حرفه‌ای هستید؟ کافیست تماس بگیرید یا فرم را تکمیل کنید.
            </p>
          </motion.div>
          {/* دکمه‌های دعوت به عمل مدرن */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 22 },
              visible: { opacity: 1, y: 0 }
            }}
            className="flex flex-wrap justify-center gap-5 mt-1 relative z-20"
          >
            <motion.div variants={buttonVariants} whileHover="hover">
              <Button asChild
                size="lg"
                className="relative overflow-hidden bg-gradient-to-br from-arminred-700 via-arminred-500 to-arminred-800 hover:from-arminred-800 hover:to-arminred-900 shadow-2xl shadow-arminred-600/30 h-16 px-12 text-base font-bold rounded-2xl neon-glow before:rounded-xl before:absolute before:-left-8 before:-top-8 before:w-28 before:h-28 before:bg-arminred-500/20 hover:before:bg-arminred-600/40 before:blur-xl before:opacity-40"
              >
                <Link to="/contact" className="flex items-center gap-3">
                  <MessageSquare className="h-6 w-6" />
                  شروع گفتگو
                </Link>
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover">
              <Button asChild
                variant="outline"
                size="lg"
                className="border-gray-700/80 hover:border-arminred-500/80 bg-gradient-to-tr from-white/5 via-black/5 to-white/0 h-16 px-12 text-base font-semibold rounded-2xl transition-all duration-300"
              >
                <Link to="/service" className="flex items-center gap-3">
                  مشاهده خدمات
                  <ArrowRight className="h-6 w-6" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          {/* کارت‌های اطلاعات تماس پیشرفته */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 28 },
              visible: { opacity: 1, y: 0 }
            }}
            className="w-full pt-12"
          >
            <div className="flex flex-col items-center space-y-6 w-full">
              <p className="text-md md:text-lg text-gray-400/90 mb-5 tracking-wide">راه‌های ارتباط مستقیم و مشاوره سریع</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-7 w-full max-w-5xl z-10">
                {contactMethods.map((method, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + (i * 0.12) }}
                    whileHover={{
                      y: -6, scale: 1.042,
                      boxShadow: "0px 16px 38px 0px rgba(239,68,68,0.13)"
                    }}
                    className={`relative group h-full border border-white/10 rounded-2xl shadow-xl shadow-black/10 bg-gradient-to-br p-7 pt-9 hover:from-arminred-700/10 hover:to-arminred-500/10 from-black/60 to-black/70 transition-all overflow-hidden cursor-pointer hover:scale-[1.03] duration-300 before:absolute before:inset-0 before:bg-gradient-to-br ${method.gradient} before:-z-10 before:blur-[68px]`}
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="flex justify-center items-center w-12 h-12 mb-3 rounded-full glass-morphism ring-2 ring-arminred-500/20 shadow-lg bg-white/10 border border-arminred-700/10">
                        {method.icon}
                      </div>
                      <h3 className="text-[0.97rem] md:text-base text-gray-300 font-semibold mb-0.5 opacity-80 tracking-widest">{method.title}</h3>
                      {method.link ? (
                        <Link to={method.link} className="text-lg md:text-xl font-bold text-gray-100/90 hover:text-arminred-300 transition-colors break-all">
                          {method.value}
                        </Link>
                      ) : (
                        <>
                          <p className="text-lg font-bold text-gray-100">{method.value}</p>
                          <p className="text-[.98rem] text-arminred-400/95 mt-0.5">{method.subvalue1}</p>
                          <p className="text-[.95rem] text-red-400/90 font-semibold">{method.subvalue2}</p>
                        </>
                      )}
                    </div>
                    {/* افکت موجی زیر کارت */}
                    <motion.div
                      className="pointer-events-none absolute left-0 right-0 -bottom-2 h-1.5 rounded-t-xl"
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileHover={{ opacity: 1, scaleX: 1.02 }}
                      animate={{ opacity: 0.28 }}
                      transition={{ duration: 0.5 }}
                      style={{ background: "linear-gradient(90deg, #f87171 0%, #60a5fa 100%)" }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
