
import { motion } from "framer-motion";
import { Star, Code, Shield, Heart, Lightbulb, Clock } from "lucide-react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

const valuesData = [
  {
    icon: <Star className="h-10 w-10 text-arminred-600" />,
    title: "کیفیت",
    description: "تعهد به ارائه کار با بالاترین سطح کیفیت و استاندارد"
  },
  {
    icon: <Code className="h-10 w-10 text-arminred-600" />,
    title: "نوآوری",
    description: "استفاده از فناوری‌های جدید و راهکارهای خلاقانه برای حل مشکلات"
  },
  {
    icon: <Shield className="h-10 w-10 text-arminred-600" />,
    title: "امنیت",
    description: "اولویت دادن به امنیت در تمامی مراحل طراحی و توسعه نرم افزار"
  },
  {
    icon: <Heart className="h-10 w-10 text-arminred-600" />,
    title: "اشتیاق",
    description: "انجام هر پروژه با عشق و تعهد به نتیجه نهایی"
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-arminred-600" />,
    title: "خلاقیت",
    description: "ارائه راه‌حل‌های خلاقانه و منحصربه‌فرد برای چالش‌های پیچیده"
  },
  {
    icon: <Clock className="h-10 w-10 text-arminred-600" />,
    title: "تعهد",
    description: "پایبندی به زمان‌بندی پروژه‌ها و تحویل به موقع"
  }
];

export function AboutValuesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/98 to-gray-950/90"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
      
      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4">
            ارزش‌های من در کار
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-arminred-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            استانداردهایی که همیشه در پروژه‌هایم رعایت می‌کنم
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 perspective-3d">
          {valuesData.map((value, idx) => (
            <HoverCard key={value.title} openDelay={200}>
              <HoverCardTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 5,
                    translateZ: 20 
                  }}
                  transition={{ 
                    duration: 0.4,
                    delay: idx * 0.1 
                  }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="relative h-full p-8 rounded-2xl overflow-hidden transition-all duration-300 bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-arminred-500/30 hover:bg-white/[0.05]">
                    <div className="absolute inset-0 bg-gradient-to-br from-arminred-500/10 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="mb-6 rounded-xl bg-gradient-to-br from-black/40 to-black/20 p-3 w-fit mx-auto">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-arminred-400 transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </HoverCardTrigger>
              <HoverCardContent 
                className="w-80 p-6 bg-black/90 border border-white/10 backdrop-blur-xl"
                align="center"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="p-3 rounded-full bg-arminred-500/10">
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white">{value.title}</h4>
                  <p className="text-sm text-gray-400 text-center">
                    {value.description}
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
}
