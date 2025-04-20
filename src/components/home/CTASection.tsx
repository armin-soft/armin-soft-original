
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, PhoneCall, Mail, Clock } from "lucide-react";
import { useRef, useEffect } from "react";

export const CTASection = () => {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section ref={sectionRef} className="relative py-32 bg-gradient-to-b from-black to-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent" />
        
        {/* Animated shape */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-arminred-500/5 filter blur-[80px]"
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
          className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-arminred-500/5 filter blur-[100px]"
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
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
            }}
            className="text-center space-y-8"
          >
            <div className="inline-block mb-2">
              <span className="bg-arminred-500/10 text-arminred-500 text-xs font-medium px-2.5 py-1 rounded">همکاری</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
              آماده همکاری با شما هستم
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              برای مشاوره رایگان و صحبت درباره پروژه‌های خود با من در ارتباط باشید
            </p>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
              }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800 shadow-lg shadow-arminred-600/20">
                <Link to="/contact" className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  شروع گفتگو
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-gray-700 hover:border-arminred-500 hover:bg-arminred-500/10 transition-all duration-300">
                <Link to="/service" className="flex items-center gap-2">
                  مشاهده خدمات
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }
              }}
              className="pt-8 flex flex-col items-center space-y-6"
            >
              <p className="text-gray-400">راه‌های ارتباطی مستقیم</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-xl">
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur p-3 rounded-lg border border-gray-800 hover:border-arminred-500/30 transition-all">
                  <div className="p-2 rounded-full bg-arminred-500/10">
                    <PhoneCall className="h-5 w-5 text-arminred-500" />
                  </div>
                  <Link to="tel:+989358983854" className="text-sm text-gray-300 hover:text-white transition-colors">
                    ۰۹۳۵۸۹۸۳۸۵۴
                  </Link>
                </div>
                
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur p-3 rounded-lg border border-gray-800 hover:border-arminred-500/30 transition-all">
                  <div className="p-2 rounded-full bg-arminred-500/10">
                    <Mail className="h-5 w-5 text-arminred-500" />
                  </div>
                  <Link to="mailto:info@armin-soft.ir" className="text-sm text-gray-300 hover:text-white transition-colors">
                    info@armin-soft.ir
                  </Link>
                </div>
                
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur p-3 rounded-lg border border-gray-800 hover:border-arminred-500/30 transition-all">
                  <div className="p-2 rounded-full bg-arminred-500/10">
                    <Clock className="h-5 w-5 text-arminred-500" />
                  </div>
                  <span className="text-sm text-gray-300">
                    ۸ صبح تا ۸ شب
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
