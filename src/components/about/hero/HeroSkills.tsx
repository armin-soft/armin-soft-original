
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Skill {
  icon: LucideIcon;
  text: string;
  color: string;
  bg: string;
}

interface HeroSkillsProps {
  skills: Skill[];
  currentSkillIndex: number;
}

export function HeroSkills({ skills, currentSkillIndex }: HeroSkillsProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.1 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8"
    >
      {skills.map((skill, index) => {
        const Icon = skill.icon;
        return (
          <motion.div
            key={skill.text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              scale: currentSkillIndex === index ? 1.05 : 1,
              boxShadow: currentSkillIndex === index ? 
                "0 0 25px rgba(239, 68, 68, 0.15)" : 
                "0 0 0 rgba(0, 0, 0, 0)"
            }}
            transition={{
              duration: 0.5, 
              delay: 1.1 + index * 0.2,
              scale: { duration: 0.3 }
            }}
            className={`group relative overflow-hidden rounded-xl ${skill.bg} border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm`}
          >
            <motion.div className="absolute -inset-px bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <motion.div 
              className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-gradient-to-br from-arminred-500/20 to-arminred-500/5"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            <motion.div 
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <Icon className={`w-8 h-8 ${skill.color} mb-4`} />
            </motion.div>
            
            <h3 className="text-lg font-semibold text-white mb-2 relative z-10">{skill.text}</h3>
            
            <motion.div 
              className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-arminred-500/40 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
