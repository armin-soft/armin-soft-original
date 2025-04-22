
import { motion, useScroll, useTransform } from "framer-motion";
import { BadgeCheck, ChevronDown, ExternalLink, Heart, Code, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

export function AboutHeroSection() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  
  const skills = [
    { icon: Code, text: "برنامه‌نویسی وب", color: "text-blue-500" },
    { icon: Shield, text: "امنیت سایبری", color: "text-arminred-500" },
    { icon: Heart, text: "طراحی تجربه کاربری", color: "text-pink-500" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-arminred-950/20 via-black to-black" />
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-arminred-900/20 via-black to-transparent" />
        </div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
      </div>

      {/* Main content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          {/* Title section with animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <Badge 
              className="px-4 py-2 text-lg bg-gradient-to-r from-arminred-500/20 to-arminred-600/20 border border-arminred-500/30 backdrop-blur-sm"
            >
              <BadgeCheck className="w-5 h-5 ml-2" />
              توسعه‌دهنده حرفه‌ای
            </Badge>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mt-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              آرمین سافت
            </motion.h1>

            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="h-1 w-32 mx-auto bg-gradient-to-r from-arminred-600 to-arminred-400 rounded-full"
            />

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 mt-6 leading-relaxed"
            >
              با بیش از ۵ سال تجربه در زمینه برنامه‌نویسی و امنیت سایبری، 
              متخصص در توسعه نرم‌افزارهای تحت وب و اپلیکیشن‌های پیشرفته
            </motion.p>
          </motion.div>

          {/* Skills section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                className="group relative overflow-hidden rounded-xl bg-white/5 p-6 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <skill.icon className={`w-8 h-8 ${skill.color} mb-4`} />
                <h3 className="text-lg font-semibold text-white mb-2">{skill.text}</h3>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-4 justify-center mt-8"
          >
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800 text-white border-0 shadow-lg hover:shadow-arminred-500/20 transition-all duration-300"
            >
              <Link to="/contact" className="text-lg px-8">
                تماس با من
                <ExternalLink className="w-5 h-5 mr-2 inline-block" />
              </Link>
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-gray-400 text-sm"
            >
              اسکرول کنید
            </motion.span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6 text-gray-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
