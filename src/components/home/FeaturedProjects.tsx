
import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Github, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

export const FeaturedProjects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "سامانه مدیریت هوشمند",
      description: "طراحی و پیاده‌سازی یک سیستم مدیریت کسب و کار با هوش مصنوعی و پنل ادمین حرفه‌ای",
      tags: ["React.js", "Node.js", "AI", "TypeScript"],
      link: "/work-sample#project1",
      image: "./Assets/Image/placeholder.svg",
      github: "https://github.com/arminsoft/smart-management-system",
      preview: "https://demo.armin-soft.ir/sms",
      stars: 48
    },
    {
      title: "اپلیکیشن امنیت سایبری",
      description: "توسعه نرم افزار تخصصی تست نفوذ و ارزیابی امنیتی با قابلیت شناسایی آسیب‌پذیری‌ها",
      tags: ["Python", "React", "Security", "API"],
      link: "/work-sample#project2",
      image: "./Assets/Image/placeholder.svg",
      github: "https://github.com/arminsoft/security-scanner",
      preview: "https://demo.armin-soft.ir/scanner",
      stars: 76
    },
    {
      title: "پلتفرم آموزش آنلاین",
      description: "طراحی و توسعه سیستم جامع آموزش مجازی با قابلیت‌های پیشرفته برگزاری کلاس و آزمون",
      tags: ["Next.js", "MongoDB", "WebRTC", "AWS"],
      link: "/work-sample#project3",
      image: "./Assets/Image/placeholder.svg",
      github: "https://github.com/arminsoft/online-learning",
      preview: "https://demo.armin-soft.ir/elearning",
      stars: 134
    }
  ];

  return (
    <section 
      ref={containerRef} 
      className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-black"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/50 to-transparent" />
      
      <motion.div style={{ y, opacity }} className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-2">
            <span className="bg-arminred-500/10 text-arminred-500 text-xs font-medium px-2.5 py-1 rounded">نمونه کارها</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            نمونه پروژه‌های اخیر
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            برخی از پروژه‌های برجسته انجام شده توسط آرمین سافت
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -10 }}
            >
              <Link to={project.link}>
                <Card className="overflow-hidden bg-black/70 backdrop-blur-xl border-gray-800 hover:border-arminred-500/50 transition-all duration-500 group h-full">
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    
                    <div className="absolute top-3 right-3 flex items-center space-x-1 space-x-reverse bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-xs text-white">{project.stars}</span>
                    </div>
                    
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center gap-4 bg-gradient-to-t from-black/80 via-black/60 to-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0
                      }}
                    >
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a 
                        href={project.preview} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-12 h-12 rounded-full bg-arminred-500/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-arminred-500/30 hover:scale-110 transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </motion.div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-arminred-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="bg-white/5 hover:bg-white/10 backdrop-blur-sm"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center text-arminred-500 group-hover:text-arminred-400">
                      <span className="text-sm">مشاهده جزئیات</span>
                      <motion.div
                        animate={{
                          x: hoveredIndex === index ? 5 : 0
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="mr-2 h-4 w-4" />
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-transparent via-arminred-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-arminred-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link 
            to="/work-sample"
            className="relative inline-flex items-center gap-2 group px-8 py-3 rounded-full text-white overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-arminred-500/20 to-arminred-700/20 backdrop-blur-md border border-arminred-500/30 rounded-full"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-arminred-600 to-arminred-800 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            <span className="relative">مشاهده همه نمونه کارها</span>
            <motion.div
              className="relative"
              animate={{
                x: [0, 5, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
      
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-black/70" />
    </section>
  );
};
