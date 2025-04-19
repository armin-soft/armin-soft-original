
import React from 'react';
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { TechBadge } from './TechBadge';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  demoUrl?: string;
  repoUrl?: string;
  technologies: string[];
  index: number;
}

export function ProjectCard({ title, description, image, demoUrl, repoUrl, technologies, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group h-full"
    >
      <Card className="h-full overflow-hidden bg-black/50 backdrop-blur-xl border-gray-800 hover:border-arminred-500/50 transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
          
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/60">
            <div className="flex gap-4">
              {repoUrl && (
                <a 
                  href={repoUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="h-5 w-5" />
                </a>
              )}
              
              {demoUrl && (
                <a 
                  href={demoUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-arminred-500 transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-3">
            {technologies.slice(0, 3).map((tech, idx) => (
              <TechBadge key={idx} name={tech} variant="outline" />
            ))}
            {technologies.length > 3 && (
              <span className="text-xs text-gray-500 self-center">
                +{technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
