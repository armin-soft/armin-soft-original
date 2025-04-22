import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface AboutTimelineCardProps {
  event: {
    id: number;
    year: string;
    title: string;
    company: string;
    description: string;
    achievements: string[];
    icon: LucideIcon;
    status: string;
    color: string;
  };
  index: number;
}

export function AboutTimelineCard({ event, index }: AboutTimelineCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`w-1/2 ${index % 2 === 0 ? 'pl-6 md:pl-12 text-right' : 'pr-6 md:pr-12'}`}
    >
      <Card className="bg-black/40 border border-white/10 backdrop-blur-sm hover:border-arminred-500/30 transition-all duration-300 group">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className={`p-2 rounded-lg bg-gradient-to-br ${event.color} bg-opacity-20`}>
                {event.icon}
              </div>
              <span className="text-xl font-bold text-white">{event.year}</span>
            </div>
            <Badge 
              className={`bg-gradient-to-r ${event.color} text-white border-0`}
            >
              {event.status}
            </Badge>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
          <p className="text-gray-400 text-sm mb-4">{event.company}</p>
          <p className="text-gray-300 mb-4">{event.description}</p>
          
          <div className="space-y-2">
            {event.achievements.map((achievement, i) => (
              <div 
                key={i}
                className="flex items-center gap-2 text-sm text-gray-400"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-arminred-500"></div>
                <span>{achievement}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
