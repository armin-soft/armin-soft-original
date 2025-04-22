import { motion } from "framer-motion";
import { MapPin, GraduationCap, Calendar, Heart, Star, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { usePersianNumbers } from "@/hooks/usePersianNumbers";

export function AboutStorySection({ milestones }: { milestones: { year: string; title: string; description: string }[] }) {
  const age = usePersianNumbers(24);
  const experienceYears = usePersianNumbers(5);
  
  const stats = [
    {
      icon: <Star className="w-5 h-5 text-yellow-500" />,
      value: "+۱۰۰",
      label: "پروژه موفق"
    },
    {
      icon: <Code className="w-5 h-5 text-blue-500" />,
      value: "+۵۰",
      label: "تکنولوژی"
    },
    {
      icon: <Heart className="w-5 h-5 text-red-500" />,
      value: "+۲۰۰",
      label: "مشتری راضی"
    }
  ];

  return (
    <motion.section 
      className="py-24 md:py-32 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center">
                <div className="h-1 w-6 bg-gradient-to-r from-arminred-600 to-purple-600 rounded-full mr-3"></div>
                <p className="text-arminred-500 font-medium">درباره من</p>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                داستان و مسیر حرفه‌ای من
              </h2>

              <div className="prose prose-invert max-w-none space-y-6">
                <motion.p 
                  className="text-lg leading-relaxed farsi-numbers"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  من آرمین اسکندری، با نام حرفه‌ای <span className="text-arminred-600 font-semibold">آرمین سافت</span>, {age} ساله، یک توسعه‌دهنده نرم‌افزار و متخصص امنیت سایبری با {experienceYears} سال تجربه هستم.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8"
                >
                  {stats.map((stat, index) => (
                    <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:border-arminred-500/30 transition-all duration-300">
                      <CardContent className="p-4 text-center">
                        <div className="mb-2 flex justify-center">{stat.icon}</div>
                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </CardContent>
                    </Card>
                  ))}
                </motion.div>

                <motion.p 
                  className="text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  تمرکز اصلی من بر توسعه نرم‌افزارهای تخصصی، امنیت و هک اخلاقی و طراحی سیستم‌های هوشمند است. همواره در تلاش هستم تا با ترکیب دانش تکنیکی و خلاقیت، راهکارهای نوآورانه برای مشکلات پیچیده ارائه دهم.
                </motion.p>
              </div>
            </div>

            <motion.div 
              className="flex flex-col space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-4 space-x-reverse bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10 transition-all duration-300 hover:border-arminred-500/30 hover:shadow-lg hover:shadow-arminred-500/5">
                  <MapPin className="text-arminred-600 h-6 w-6" />
                  <div>
                    <h3 className="font-semibold text-lg">محل سکونت</h3>
                    <p className="text-muted-foreground">ایران، تهران، پاکدشت</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 space-x-reverse bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10 transition-all duration-300 hover:border-arminred-500/30 hover:shadow-lg hover:shadow-arminred-500/5">
                  <Calendar className="text-arminred-600 h-6 w-6" />
                  <div>
                    <h3 className="font-semibold text-lg">تاریخ تولد</h3>
                    <p className="text-muted-foreground farsi-numbers">۲۸ خرداد ۱۳۷۸</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800 border-0 shadow-lg hover:shadow-arminred-500/20">
                  <Link to="/contact" className="flex items-center">
                    تماس با من
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-arminred-600/20 to-purple-600/20 rounded-3xl blur-3xl transform -rotate-6 scale-105"></div>
            <div className="relative p-1.5 bg-gradient-to-r from-arminred-500/20 to-purple-500/20 rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-black/90 to-gray-900/90 p-8">
                <div className="h-full w-full relative group perspective-hover">
                  <motion.img
                    src="/lovable-uploads/51da6ad9-6b7e-4b6b-9b64-d1b13392fb2c.png"
                    alt="آرمین سافت - خدمات برنامه نویسی و طراحی وب"
                    className="w-full h-full object-cover rounded-xl transform transition-all duration-500 
                             group-hover:scale-105 group-hover:rotate-1 shadow-2xl"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-arminred-500/10 to-purple-500/10 
                                mix-blend-overlay opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-arminred-500/30 to-purple-500/30 
                                rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
                  <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-arminred-500/50 
                                rounded-tr-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-purple-500/50 
                                rounded-bl-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
