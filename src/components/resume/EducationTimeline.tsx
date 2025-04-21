
import React from 'react';
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, CalendarDays, MapPin, Medal } from "lucide-react";

interface Education {
  id: string;
  degree: string;
  field: string;
  school: string;
  location: string;
  period: string;
  description?: string;
}

interface EducationTimelineProps {
  education: Education[];
}

export function EducationTimeline({ education }: EducationTimelineProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6 relative inline-block section-title">
        تحصیلات
        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-arminred-500 to-transparent"></span>
      </h2>
      
      <Timeline className="pr-2">
        {education.map((edu, index) => (
          <TimelineItem 
            key={edu.id}
            index={index}
            active={index === 0}
            icon={<BookOpen className="w-3 h-3" />}
          >
            <div className="pb-10">
              <Card className="bg-black/50 backdrop-blur-xl border-gray-800 hover:border-arminred-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold mb-1 group-hover:text-arminred-500 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-arminred-500">{edu.field}</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <CalendarDays className="h-4 w-4 text-arminred-500/70" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-arminred-500/70" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-muted-foreground mb-2">
                      <BookOpen className="ml-2 h-4 w-4 text-arminred-500/70" />
                      <span>{edu.school}</span>
                    </div>
                    
                    {edu.description && (
                      <div className="flex items-center text-muted-foreground">
                        <Medal className="ml-2 h-4 w-4 text-arminred-500/70" />
                        <span>{edu.description}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
