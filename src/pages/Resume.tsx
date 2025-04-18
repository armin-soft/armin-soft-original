import { SiteLayout } from "@/components/site-layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { getPersonSchema } from "@/components/seo/schemas";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ResumeHero } from "@/components/resume/ResumeHero";
import { SkillCard } from "@/components/resume/SkillCard";
import { ExperienceCard } from "@/components/resume/ExperienceCard";
import { EducationCard } from "@/components/resume/EducationCard";
import { Download, ArrowRight, Code, Shield, Bot, Layout, Monitor, Smartphone, FileCode, Database, BookOpen, Server, Award } from "lucide-react";

const Resume = () => {
  return (
    <SiteLayout>
      <SEOHead 
        title="رزومه"
        description="رزومه حرفه‌ای آرمین سافت - متخصص برنامه‌نویسی بک‌اند با تجربه در توسعه نرم‌افزار، مدیریت سرور و امنیت"
        canonical="/Resume"
        keywords="رزومه برنامه نویس, سوابق کاری, تجربیات برنامه نویسی, مهارت‌های فنی, گواهینامه‌های تخصصی"
      />
      
      <ResumeHero />

      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Code className="ml-2 h-6 w-6 text-arminred-500" />
                مهارت‌های تخصصی
              </h2>
              {skills.map((skill, index) => (
                <SkillCard
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  index={index}
                />
              ))}
            </motion.div>

            {/* Experience & Education */}
            <div className="lg:col-span-2 space-y-12">
              {/* Experience Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Server className="ml-2 h-6 w-6 text-arminred-500" />
                  تجربیات کاری
                </h2>
                {experience.map((exp, index) => (
                  <ExperienceCard key={index} {...exp} index={index} />
                ))}
              </div>

              {/* Education Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Bot className="ml-2 h-6 w-6 text-arminred-500" />
                  تحصیلات
                </h2>
                {education.map((edu, index) => (
                  <EducationCard key={index} {...edu} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">آماده همکاری با شما هستم</h2>
            <p className="text-gray-400 mb-8">برای شروع همکاری و صحبت درباره پروژه‌های خود با من تماس بگیرید</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800">
                <Link to="/contact">تماس با من</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/10 hover:bg-white/5">
                <a href="#" className="flex items-center">
                  <Download className="ml-2 h-4 w-4" />
                  دریافت رزومه
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Resume;
