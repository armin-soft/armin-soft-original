
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AboutValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function AboutValueCard({ icon: Icon, title, description, index }: AboutValueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.48, delay: 0.1 + index * 0.08 }}
      viewport={{ once: true }}
      className="bg-white/5 border border-white/10 rounded-xl p-7 flex flex-col items-center gap-3 shadow-lg hover:border-arminred-500/40 hover:shadow-arminred-500/5 transition-all duration-300"
    >
      <div>
        <Icon className="h-10 w-10 text-arminred-600" />
      </div>
      <h3 className="mt-3 text-xl font-bold text-white mb-1">{title}</h3>
      <p className="text-gray-400 text-center">{description}</p>
    </motion.div>
  );
}
