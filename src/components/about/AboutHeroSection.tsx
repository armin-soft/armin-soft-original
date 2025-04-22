
import { motion, useScroll, useTransform } from "framer-motion";
import { BadgeCheck, ArrowRight, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AboutParticlesBackground } from "./AboutParticlesBackground";
import { AboutHeroTags } from "./AboutHeroTags";

export function AboutHeroSection() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      <AboutParticlesBackground />
      
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          style={{ opacity }}
          className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ y }}
        className="container relative z-10 px-4 md:px-6 mx-auto"
      >
        <div className="flex flex-col items-center lg:items-end gap-8 max-w-5xl mx-auto">
          {/* Badge & Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-right w-full space-y-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <Badge className="bg-arminred-600/20 text-arminred-500 text-sm mb-4 py-1.5 px-4 backdrop-blur-sm border border-arminred-500/20">
                <BadgeCheck className="w-4 h-4 ml-1 inline-block" />
                بیش از ۵ سال تجربه
              </Badge>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-4 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-400 drop-shadow-2xl">
                آرمین سافت
              </span>
            </motion.h1>

            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-gradient-to-r from-arminred-600 to-arminred-400 h-1 w-32 rounded-full mx-auto lg:mr-0"
            />

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed mx-auto lg:mr-0 lg:ml-auto"
            >
              توسعه‌دهنده نرم‌افزار، متخصص امنیت و هک اخلاقی، با تجربه در زمینه هوش مصنوعی و اتوماسیون
            </motion.p>
          </motion.div>

          {/* Tags Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="w-full"
          >
            <AboutHeroTags tags={["امنیت سایبری", "برنامه‌نویسی وب", "هوش مصنوعی", "اتوماسیون", "مشاوره فنی"]} />
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-end w-full"
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800 border-0 shadow-lg hover:shadow-arminred-500/20 transition-all duration-300 group"
            >
              <Link to="/contact" className="flex items-center gap-2">
                تماس با من
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-gray-400 text-sm"
          >
            اسکرول کنید
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
