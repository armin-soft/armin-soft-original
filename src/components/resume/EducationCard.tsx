
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { School, MapPin, Calendar, Medal } from "lucide-react";

interface EducationCardProps {
  degree: string;
  school: string;
  location: string;
  period: string;
  description: string;
  index: number;
}

export const EducationCard = ({ degree, school, location, period, description, index }: EducationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="bg-black/50 backdrop-blur-xl border-gray-800 hover:border-arminred-500/50 transition-all duration-300">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold mb-3">{degree}</h3>
          <div className="text-muted-foreground space-y-2">
            <div className="flex items-center">
              <School className="ml-2 h-4 w-4" />
              {school}
            </div>
            <div className="flex items-center">
              <MapPin className="ml-2 h-4 w-4" />
              {location}
            </div>
            <div className="flex items-center">
              <Calendar className="ml-2 h-4 w-4" />
              {period}
            </div>
            <div className="flex items-center">
              <Medal className="ml-2 h-4 w-4" />
              {description}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
