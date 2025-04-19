
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/resume/ProjectCard";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, Server, Code, Computer, Smartphone, Bot } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link: string;
  github?: string;
  featured: boolean;
}

export const ProjectGrid = ({ projects }: { projects: Project[] }) => {
  const [selectedTab, setSelectedTab] = useState("all");

  const categories = [
    { id: "all", label: "همه", icon: <Globe className="h-4 w-4" /> },
    { id: "website", label: "سایت", icon: <Globe className="h-4 w-4" /> },
    { id: "webservice", label: "وب سرویس", icon: <Server className="h-4 w-4" /> },
    { id: "script", label: "اسکریپت", icon: <Code className="h-4 w-4" /> },
    { id: "software", label: "نرم افزار", icon: <Computer className="h-4 w-4" /> },
    { id: "application", label: "اپلیکیشن", icon: <Smartphone className="h-4 w-4" /> },
    { id: "telegram-bot", label: "ربات تلگرام", icon: <Bot className="h-4 w-4" /> },
  ];

  const filteredProjects = selectedTab === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedTab);

  return (
    <div className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            همه <span className="text-arminred-600">پروژه‌ها</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            مجموعه‌ای از پروژه‌های مختلف در زمینه‌های برنامه‌نویسی، امنیت و هوش مصنوعی
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="mb-10" onValueChange={setSelectedTab}>
          <TabsList className="flex flex-wrap justify-center mb-8 bg-transparent">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id}
                value={category.id}
                className="rounded-full px-4 py-2 data-[state=active]:bg-arminred-600 data-[state=active]:text-white flex items-center gap-2"
              >
                {category.icon}
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value={selectedTab} className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  demoUrl={project.link}
                  repoUrl={project.github}
                  technologies={project.technologies}
                  index={index}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
