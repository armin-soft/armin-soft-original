
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, PhoneCall, Mail, Clock, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const CTASection = () => {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);

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

  const contactMethods = [
    {
      id: "phone",
      icon: PhoneCall,
      title: "تماس تلفنی",
      link: "tel:+989358983854",
      value: "۰۹۳۵۸۹۸۳۸۵۴",
      time: "۸ صبح تا ۸ شب"
    },
    {
      id: "email",
      icon: Mail,
      title: "ایمیل",
      link: "mailto:info@armin-soft.ir",
      value: "info@armin-soft.ir",
      time: "پاسخگویی سریع"
    },
    {
      id: "consultation",
      icon: MessageSquare,
      title: "مشاوره آنلاین",
      link: "/contact",
      value: "گفتگوی آنلاین",
      time: "پشتیبانی ۲۴/۷"
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 overflow-hidden"
      style={{
        background: "radial-gradient(circle at 50% 50%, #450a0a 0%, #1a0000 100%)"
      }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        
        {/* Animated particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-arminred-500/30 filter blur-xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
            }}
            animate={{
              x: [0, Math.random() * 60 - 30],
              y: [0, Math.random() * 60 - 30],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Main glowing circle */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-arminred-500/10 to-arminred-900/5 filter blur-[80px] opacity-60"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
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
                staggerChildren: 0.1,
              } 
            }
          }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-black/30 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6 md:p-10 space-y-8 shadow-xl">
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-center space-y-6"
            >
              <div className="inline-block relative mb-2">
                <span className="bg-arminred-500/10 text-arminred-400 text-xs font-medium px-3 py-1.5 rounded-full border border-arminred-500/20">آماده همکاری</span>
                <motion.span 
                  className="absolute -inset-0.5 rounded-full bg-arminred-500/20 z-0"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                  آماده همکاری با شما هستم
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                برای مشاوره رایگان و صحبت درباره پروژه‌های خود با من در ارتباط باشید
              </p>
            </motion.div>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800 shadow-lg shadow-arminred-600/20 transition-all duration-300 group relative overflow-hidden"
              >
                <Link to="/contact" className="flex items-center gap-2 pr-1 pl-6">
                  <span className="relative z-10">شروع گفتگو</span>
                  <span className="relative z-10 p-2 rounded-full bg-white/10">
                    <MessageSquare className="h-5 w-5" />
                  </span>
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-arminred-500/0 via-arminred-500/30 to-arminred-500/0"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 1
                    }}
                  />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-gray-700 hover:border-arminred-500 hover:bg-arminred-500/10 transition-all duration-300 group"
                onMouseEnter={() => setHovered("service")}
                onMouseLeave={() => setHovered(null)}
              >
                <Link to="/service" className="flex items-center gap-2">
                  <span>مشاهده خدمات</span>
                  <motion.span
                    animate={hovered === "service" ? { x: 5 } : { x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="h-5 w-5 group-hover:text-arminred-500 transition-colors duration-300" />
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { 
                    staggerChildren: 0.1,
                    delayChildren: 0.2
                  }
                }
              }}
              className="pt-8"
            >
              <Separator className="mb-8 bg-gray-800/50" />
              
              <h3 className="text-center text-gray-400 mb-6">راه‌های ارتباطی مستقیم</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                {contactMethods.map((method) => (
                  <motion.div
                    key={method.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="group"
                    onMouseEnter={() => setHovered(method.id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <Link to={method.link}>
                      <Card className="backdrop-blur border-gray-800/50 bg-white/[0.02] hover:bg-white/[0.04] hover:border-arminred-500/30 transition-all duration-300 shadow-lg overflow-hidden group-hover:shadow-arminred-900/10">
                        <div className="px-4 py-5 space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-full bg-arminred-500/10 border border-arminred-500/20 group-hover:bg-arminred-500/20 transition-colors">
                              <method.icon className="h-5 w-5 text-arminred-400" />
                            </div>
                            <h4 className="font-medium text-gray-200 group-hover:text-white transition-colors">{method.title}</h4>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors font-medium">{method.value}</span>
                            <motion.span 
                              animate={hovered === method.id ? { x: 5, opacity: 1 } : { x: 0, opacity: 0.7 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronRight className="h-4 w-4 text-arminred-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Clock className="h-3.5 w-3.5 text-gray-500" />
                            <span className="text-xs text-gray-500">{method.time}</span>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
