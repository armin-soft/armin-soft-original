
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export function AboutAnimatedMilestones({
  milestones,
}: {
  milestones: { year: string; title: string; description: string }[];
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { opacity: 0, scale: 0.9, y: 40 },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { duration: 0.8, staggerChildren: 0.21 }
        }
      }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-arminred-600/10 to-purple-900/10 rounded-2xl blur-2xl -rotate-6"></div>
      <div className="relative">
        <Timeline className="space-y-10 pr-6">
          {milestones.map((milestone, index) => (
            <TimelineItem
              key={index}
              icon={
                index === milestones.length - 1 ? (
                  <Award className="h-3 w-3 text-arminred-500" />
                ) : null
              }
              active={index === milestones.length - 1}
              index={index}
            >
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.49, delay: 0.15 + index * 0.15 }
                }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden bg-black/60 backdrop-blur-xl border border-white/10 hover:border-arminred-500/60 transition-all duration-500 shadow-lg hover:shadow-arminred-500/10">
                  <CardContent className="p-5">
                    <span className="text-arminred-500 text-base font-semibold block mb-2 farsi-numbers animate-pulse">
                      {milestone.year}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2">{milestone.title}</h3>
                    <p className="text-gray-400 text-sm">{milestone.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </motion.div>
  );
}
