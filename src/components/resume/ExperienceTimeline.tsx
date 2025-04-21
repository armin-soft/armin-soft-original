
import React from 'react';
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { Card, CardContent } from "@/components/ui/card";
import { TechBadge, TechBadgeGroup } from "./TechBadge";
import { Badge } from "@/components/ui/badge";
import { Briefcase, CalendarDays, MapPin } from "lucide-react";

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6 relative inline-block section-title">
        سوابق شغلی
        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-arminred-500 to-transparent"></span>
      </h2>
      
      <Timeline className="pr-2">
        {experiences.map((experience, index) => (
          <TimelineItem 
            key={experience.id}
            index={index}
            active={index === 0}
            icon={<Briefcase className="w-3 h-3" />}
          >
            <div className="pb-10">
              <Card className="bg-black/50 backdrop-blur-xl border-gray-800 hover:border-arminred-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-arminred-500 transition-colors">
                        {experience.title}
                      </h3>
                      <p className="text-lg text-arminred-500">{experience.company}</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <CalendarDays className="h-4 w-4 text-arminred-500/70" />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-arminred-500/70" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4">{experience.description}</p>
                  
                  <div className="space-y-3">
                    {experience.achievements.length > 0 && (
                      <>
                        <p className="text-sm font-medium">دستاوردهای کلیدی:</p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 pr-2">
                          {experience.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm">{achievement}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                  
                  <div className="mt-5">
                    <TechBadgeGroup>
                      {experience.technologies.map((tech, i) => (
                        <TechBadge key={i} name={tech} variant="outline" />
                      ))}
                    </TechBadgeGroup>
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
