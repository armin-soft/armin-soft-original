
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const FeaturedProjects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "سامانه مدیریت هوشمند",
      description: "طراحی و پیاده‌سازی یک سیستم مدیریت کسب و کار با هوش مصنوعی و پنل ادمین حرفه‌ای",
      tags: ["React.js", "Node.js", "AI", "TypeScript"],
      link: "/work-sample#project1",
      image: "/Assets/Image/placeholder.svg",
      github: "https://github.com/arminsoft/smart-management-system",
      preview: "https://demo.armin-soft.ir/sms"
    },
    {
      title: "اپلیکیشن امنیت سایبری",
      description: "توسعه نرم‌افزار تخصصی تست نفوذ و ارزیابی امنیتی با قابلیت شناسایی آسیب‌پذیری‌ها",
      tags: ["Python", "React", "Security", "API"],
      link: "/work-sample#project2",
      image: "/Assets/Image/placeholder.svg",
      github: "https://github.com/arminsoft/security-scanner",
      preview: "https://demo.armin-soft.ir/scanner"
    },
    {
      title: "پلتفرم آموزش آنلاین",
      description: "طراحی و توسعه سیستم جامع آموزش مجازی با قابلیت‌های پیشرفته برگزاری کلاس و آزمون",
      tags: ["Next.js", "MongoDB", "WebRTC", "AWS"],
      link: "/work-sample#project3",
      image: "/Assets/Image/placeholder.svg",
      github: "https://github.com/arminsoft/online-learning",
      preview: "https://demo.armin-soft.ir/elearning"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-black">
      <div className="container mx-auto px-4 md:px-6">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
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
            >
              <Link to={project.link}>
                <Card className="overflow-hidden bg-black/50 backdrop-blur-xl border-gray-800 hover:border-arminred-500/50 transition-all duration-500 group h-full">
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                    
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0
                      }}
                    >
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a 
                        href={project.preview} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
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
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="bg-white/5 hover:bg-white/10"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center text-arminred-500 group-hover:text-arminred-400">
                      <span className="text-sm">مشاهده جزئیات</span>
                      <motion.div
                        animate={{
                          x: hoveredIndex === index ? -4 : 0
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="mr-2 h-4 w-4" />
                      </motion.div>
                    </div>
                  </div>
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
            className="text-gray-400 hover:text-white inline-flex items-center gap-2 group px-6 py-2 rounded-full border border-gray-700 hover:border-arminred-500 transition-all duration-300"
          >
            مشاهده همه نمونه کارها
            <motion.div
              animate={{
                x: [0, -4, 0]
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
      </div>
    </section>
  );
};
