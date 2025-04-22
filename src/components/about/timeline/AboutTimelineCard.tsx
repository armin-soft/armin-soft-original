
import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  company: string;
  description: string;
  achievements: string[];
  icon: React.ReactNode;
  status: string;
  color: string;
}

interface AboutTimelineCardProps {
  event: TimelineEvent;
  index: number;
  isEven: boolean;
}

export function AboutTimelineCard({ event, index, isEven }: AboutTimelineCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <div className={`flex ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className={`w-1/2 ${isEven ? 'pl-6 md:pl-12 text-right' : 'pr-6 md:pr-12'}`}>
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
        </div>
        
        <div className="relative w-0">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`absolute top-8 right-[-20px] w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br ${event.color} shadow-lg z-10`}
          >
            {event.icon}
          </motion.div>
        </div>
        
        <div className="w-1/2"></div>
      </div>
    </motion.div>
  );
}
