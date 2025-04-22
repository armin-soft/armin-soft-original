
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface HeroTagsProps {
  tags: string[];
}

export function HeroTags({ tags }: HeroTagsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.9 }}
      className="flex flex-wrap gap-3 justify-center mt-6"
    >
      {tags.map((tag, idx) => (
        <motion.span
          key={tag}
          initial={{ opacity: 0, y: 15, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 0.14 + idx * 0.09,
            type: "spring",
            stiffness: 180,
            damping: 16,
          }}
          whileHover={{ scale: 1.13, backgroundColor: "rgba(239,68,68,0.09)" }}
          className="bg-white/10 hover:bg-arminred-700/20 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-sm text-gray-200 transition-all shadow-sm cursor-pointer"
        >
          {tag}
        </motion.span>
      ))}
    </motion.div>
  );
}
