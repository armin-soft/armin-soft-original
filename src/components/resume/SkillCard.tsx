
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { usePersianNumbers } from "@/hooks/usePersianNumbers";
import { ReactNode } from "react";

interface SkillCardProps {
  name: string;
  level: number;
  icon: ReactNode;
  index: number;
}

export const SkillCard = ({ name, level, icon, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      <Card className="bg-black/50 backdrop-blur-xl border-gray-800 hover:border-arminred-500/50 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              {icon}
              <span className="font-medium">{name}</span>
            </div>
            <span className="text-sm text-muted-foreground farsi-numbers">{usePersianNumbers(level)}%</span>
          </div>
          <Progress value={level} className="h-2 bg-white/10" />
        </CardContent>
      </Card>
    </motion.div>
  );
};
