
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  index: number;
}

export const ExperienceCard = ({ title, company, location, period, achievements, index }: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="bg-black/50 backdrop-blur-xl border-gray-800 hover:border-arminred-500/50 transition-all duration-300">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold mb-3">{title}</h3>
          <div className="text-muted-foreground space-y-2 mb-4">
            <div className="flex items-center">
              <MapPin className="ml-2 h-4 w-4" />
              {company} - {location}
            </div>
            <div className="flex items-center">
              <Clock className="ml-2 h-4 w-4" />
              {period}
            </div>
          </div>
          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
            {achievements.map((achievement, i) => (
              <li key={i} className="text-sm">{achievement}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};
