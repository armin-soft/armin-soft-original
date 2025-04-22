
import { motion } from "framer-motion";
import { BadgeCheck, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AboutParticlesBackground } from "./AboutParticlesBackground";
import { AboutHeroTags } from "./AboutHeroTags";

export function AboutHeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      <AboutParticlesBackground />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 items-center">
          <div className="flex flex-col items-center lg:items-start lg:text-right space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-center lg:text-right"
            >
              <Badge className="bg-arminred-600/20 text-arminred-500 text-xs mb-4 py-1 animate-fade-in">بیش از ۵ سال تجربه</Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-400 shadow-lg drop-shadow-2xl animate-fade-in">
                آرمین سافت
              </h1>
              <div className="bg-gradient-to-r from-arminred-600 to-arminred-400 h-1 w-32 rounded-full mx-auto lg:mr-0 mb-6"></div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed animate-fade-in">
                توسعه‌دهنده نرم‌افزار، متخصص امنیت و هک اخلاقی، با تجربه در زمینه هوش مصنوعی و اتوماسیون
              </p>
            </motion.div>

            <AboutHeroTags tags={["امنیت سایبری", "برنامه‌نویسی وب", "هوش مصنوعی", "اتوماسیون", "مشاوره فنی"]} />

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800 border-0 shadow-lg hover:shadow-arminred-500/20">
                <Link to="/contact" className="flex items-center">
                  تماس با من
                  <ArrowRight className="mr-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <div className="w-5 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-1 bg-white rounded-full"
              />
            </div>
            <span className="text-white/40 text-xs mt-2">اسکرول کنید</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
