
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/resume/ProjectCard";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  technologies: string[];
}

export const FeaturedProjects = ({ projects }: { projects: Project[] }) => {
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
          {projects.filter(project => project).slice(0, 3).map((project, index) => (
            <ProjectCard
              key={index}
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
      </div>
    </section>
  );
};
