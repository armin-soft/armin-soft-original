
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
}

export function SectionHeader({ badge, title, description }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative inline-block"
        >
          <Badge 
            className="px-4 py-1.5 text-sm bg-gradient-to-r from-arminred-500/20 to-purple-500/20 text-arminred-400 border-arminred-500/30 backdrop-blur-sm mb-4"
          >
            {badge}
          </Badge>
          <motion.div 
            className="absolute -inset-1 rounded-full blur-xl bg-arminred-500/10"
            animate={{ 
              opacity: [0.5, 0.8, 0.5],
              scale: [0.95, 1.05, 0.95]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      )}
      
      <motion.h2 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
      >
        {title}
      </motion.h2>
      
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="h-1 w-24 bg-gradient-to-r from-arminred-600 to-purple-600 mx-auto my-6 rounded-full"
      >
        <motion.div 
          className="h-full w-full bg-white/50"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
      
      {description && (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
