
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
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { 
        duration: 0.2,
        yoyo: Infinity
      }
    }
  };

  const contactMethods = [
    {
      icon: <PhoneCall className="h-5 w-5 text-arminred-500" />,
      title: "تماس مستقیم",
      value: "۰۹۳۵۸۹۸۳۸۵۴",
      link: "tel:+989358983854",
      color: "from-blue-500/20 to-blue-600/5"
    },
    {
      icon: <Mail className="h-5 w-5 text-arminred-500" />,
      title: "ایمیل",
      value: "info@armin-soft.ir",
      link: "mailto:info@armin-soft.ir",
      color: "from-green-500/20 to-green-600/5"
    },
    {
      icon: <Clock className="h-5 w-5 text-arminred-500" />,
      title: "ساعات کاری",
      value: "شنبه تا چهارشنبه: 9 الی 17",
      subvalue1: "پنجشنبه: 9 الی 14",
      subvalue2: "جمعه: تعطیل",
      color: "from-purple-500/20 to-purple-600/5"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-background">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent" />
        
        <motion.div
          className="absolute top-20 right-20 w-80 h-80 rounded-full bg-arminred-500/5 filter blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-arminred-500/5 filter blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </div>
      
      <motion.div style={{ y, opacity }} className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { 
                opacity: 1, 
                y: 0, 
                transition: { 
                  duration: 0.7, 
                  ease: "easeOut",
                  staggerChildren: 0.2 
                } 
              }
            }}
            className="text-center space-y-8"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div className="inline-block mb-2">
                <span className="bg-arminred-500/10 text-arminred-500 text-xs font-medium px-2.5 py-1 rounded">همکاری</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                آماده همکاری با شما هستم
              </h2>
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mt-4">
                برای مشاوره رایگان و صحبت درباره پروژه‌های خود با من در ارتباط باشید
              </p>
            </motion.div>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex flex-wrap justify-center gap-4 mt-2"
            >
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
              >
                <Button asChild size="lg" className="bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800 shadow-lg shadow-arminred-600/20 h-14 px-8 text-base">
                  <Link to="/contact" className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    شروع گفتگو
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
              >
                <Button asChild variant="outline" size="lg" className="border-gray-700 hover:border-arminred-500 hover:bg-arminred-500/10 transition-all duration-300 h-14 px-8 text-base">
                  <Link to="/service" className="flex items-center gap-2">
                    مشاهده خدمات
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="pt-10"
            >
              <div className="flex flex-col items-center space-y-6">
                <p className="text-gray-400">راه‌های ارتباطی مستقیم</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + (index * 0.1) }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className="relative group"
                    >
                      <div className="flex flex-col bg-black/40 backdrop-blur-lg p-5 rounded-xl border border-gray-800 hover:border-arminred-500/30 transition-all h-full">
                        <div className={`p-3 rounded-full bg-gradient-to-br ${method.color} self-start mb-4`}>
                          {method.icon}
                        </div>
                        
                        <h3 className="text-sm text-gray-400 mb-1">{method.title}</h3>
                        
                        {method.link ? (
                          <Link to={method.link} className="text-base font-medium text-gray-300 hover:text-white transition-colors">
                            {method.value}
                          </Link>
                        ) : (
                          <>
                            <p className="text-base font-medium text-gray-300">{method.value}</p>
                            <p className="text-sm text-gray-400 mt-1">{method.subvalue1}</p>
                            <p className="text-sm text-red-400">{method.subvalue2}</p>
                          </>
                        )}
                        
                        {/* Decorative elements */}
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-arminred-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
