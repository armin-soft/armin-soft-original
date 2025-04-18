
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const FeaturedProjects = () => {
  const projects = [
    {
      title: "سامانه مدیریت هوشمند",
      description: "طراحی و پیاده‌سازی یک سیستم مدیریت کسب و کار با هوش مصنوعی",
      tags: ["React.js", "Node.js", "AI", "TypeScript"],
      link: "/work-sample#project1"
    },
    {
      title: "اپلیکیشن امنیت سایبری",
      description: "توسعه نرم‌افزار تخصصی تست نفوذ و ارزیابی امنیتی",
      tags: ["Python", "React", "Security", "API"],
      link: "/work-sample#project2"
    },
    {
      title: "پلتفرم آموزش آنلاین",
      description: "طراحی و توسعه سیستم جامع آموزش مجازی با قابلیت‌های پیشرفته",
      tags: ["Next.js", "MongoDB", "WebRTC", "AWS"],
      link: "/work-sample#project3"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            نمونه پروژه‌ها
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            برخی از پروژه‌های انجام شده توسط آرمین سافت
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
            >
              <Link to={project.link}>
                <Card className="overflow-hidden bg-black/50 backdrop-blur-xl border-gray-800 hover:border-arminred-500/50 transition-all duration-300 group">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-arminred-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
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
                      <ArrowRight className="mr-2 h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
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
            className="text-gray-400 hover:text-white inline-flex items-center gap-2 group"
          >
            مشاهده همه نمونه کارها
            <ArrowRight className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
