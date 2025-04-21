
import React from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "سامانه مدیریت هوشمند",
    description: "طراحی و پیاده‌سازی یک سیستم مدیریت کسب و کار با هوش مصنوعی و پنل ادمین حرفه‌ای",
    image: "./Assets/Image/placeholder.svg",
    demoUrl: "https://demo.armin-soft.ir/sms",
    repoUrl: "https://github.com/arminsoft/smart-management-system",
    technologies: ["Python", "Django", "React", "PostgreSQL", "Docker", "Redis"],
    index: 0
  },
  {
    title: "اپلیکیشن امنیت سایبری",
    description: "توسعه نرم‌افزار تخصصی تست نفوذ و ارزیابی امنیتی با قابلیت شناسایی آسیب‌پذیری‌ها",
    image: "./Assets/Image/placeholder.svg",
    demoUrl: "https://demo.armin-soft.ir/security",
    repoUrl: "https://github.com/arminsoft/security-scanner",
    technologies: ["Go", "React", "GraphQL", "Docker", "AWS"],
    index: 1
  },
  {
    title: "پلتفرم آموزش آنلاین",
    description: "طراحی و توسعه سیستم جامع آموزش مجازی با قابلیت‌های پیشرفته برگزاری کلاس و آزمون",
    image: "./Assets/Image/placeholder.svg",
    demoUrl: "https://demo.armin-soft.ir/academy",
    repoUrl: "https://github.com/arminsoft/online-learning",
    technologies: ["Next.js", "Node.js", "MongoDB", "WebRTC", "Redux"],
    index: 2
  }
];

export function ResumeProjectsSection() {
  return (
    <section className="relative z-10 py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
      </div>
      <div className="container px-4 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            پروژه‌های برجسته
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-arminred-500 to-transparent rounded-full mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            نمونه‌های برتر پروژه‌هایی که با موفقیت طراحی و اجرا شده‌اند
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.index} {...project} />
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <Button asChild variant="outline" className="border-gray-700 hover:border-arminred-500/50 hover:bg-arminred-500/5 gap-2">
            <Link to="/Work-Sample">
              مشاهده همه نمونه کارها
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
