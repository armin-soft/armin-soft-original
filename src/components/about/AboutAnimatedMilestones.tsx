
import { motion } from "framer-motion";
import { Calendar, Award } from "lucide-react";
import { Timeline, TimelineItem } from "@/components/ui/timeline";

interface Milestone {
  year: string;
  title: string;
  description: string;
}

interface AboutAnimatedMilestonesProps {
  milestones: Milestone[];
}

export function AboutAnimatedMilestones({ milestones }: AboutAnimatedMilestonesProps) {
  return (
    <div className="py-10 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            افتخارات و دستاوردها
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-arminred-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            مهم‌ترین رویدادها و موفقیت‌ها در مسیر کاری من
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <Timeline>
            {milestones.map((milestone, index) => (
              <TimelineItem 
                key={index} 
                icon={index % 2 === 0 ? <Calendar className="h-3 w-3" /> : <Award className="h-3 w-3" />}
                active={true}
                index={index}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5 hover:border-arminred-500/30 transition-all duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                    <div className="text-sm text-arminred-500 bg-arminred-900/30 px-2 py-1 rounded-full farsi-numbers">
                      {milestone.year}
                    </div>
                  </div>
                  <p className="text-gray-400">{milestone.description}</p>
                </div>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  );
}
