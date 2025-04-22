
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Shield, Bot, Server, Database, Cpu } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = {
  programming: [
    { name: "PHP", level: 95, description: "Laravel, WordPress, Custom Frameworks" },
    { name: "JavaScript", level: 92, description: "React, Vue.js, Node.js, Express" },
    { name: "Python", level: 88, description: "Django, Flask, Data Analysis, AI" },
    { name: "SQL", level: 90, description: "MySQL, PostgreSQL, Database Design" },
    { name: "HTML/CSS", level: 94, description: "Semantic HTML, CSS3, Sass, Tailwind" },
    { name: "TypeScript", level: 85, description: "Type Safety, React with TypeScript" }
  ],
  security: [
    { name: "تست نفوذ", level: 92, description: "آزمایش امنیتی وب اپلیکیشن‌ها و شبکه‌ها" },
    { name: "امنیت وب", level: 90, description: "شناسایی و رفع آسیب‌پذیری‌های OWASP Top 10" },
    { name: "مهندسی معکوس", level: 85, description: "تحلیل کد و شناسایی ضعف‌های امنیتی" },
    { name: "امنیت API", level: 88, description: "تست و بهبود امنیت وب سرویس‌ها" },
    { name: "رمزنگاری", level: 84, description: "پیاده‌سازی و تحلیل الگوریتم‌های رمزنگاری" }
  ],
  ai: [
    { name: "یادگیری ماشین", level: 82, description: "الگوریتم‌های ML و پیاده‌سازی مدل‌های پیش‌بینی" },
    { name: "پردازش زبان طبیعی", level: 85, description: "NLP و تحلیل متن و زبان" },
    { name: "شبکه‌های عصبی", level: 78, description: "طراحی و آموزش شبکه‌های عصبی" },
    { name: "Computer Vision", level: 75, description: "پردازش تصویر و تشخیص الگو" }
  ]
};

const icons = {
  programming: <Code className="h-5 w-5 text-arminred-600" />,
  security: <Shield className="h-5 w-5 text-arminred-600" />,
  ai: <Bot className="h-5 w-5 text-arminred-600" />
};

const bgColors = {
  programming: "from-blue-500/10 to-purple-500/5",
  security: "from-arminred-500/10 to-orange-500/5",
  ai: "from-green-500/10 to-teal-500/5"
};

export function AboutSkillsSection() {
  const [currentTab, setCurrentTab] = useState("programming");
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(false);
  }, []);
  
  return (
    <section className="py-28 relative overflow-hidden bg-black/90">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
      <div className="absolute inset-0 bg-gradient-radial from-arminred-900/5 to-transparent"></div>
      
      <div className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            مهارت‌ها و تخصص‌ها
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-arminred-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            مجموعه‌ای از مهارت‌های فنی و تخصص‌هایی که در طول سال‌ها کسب کرده‌ام
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="bg-white/5 backdrop-blur-md border border-white/10 p-1">
                <TabsTrigger 
                  value="programming" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-arminred-500/20 data-[state=active]:to-arminred-500/5 data-[state=active]:text-white rounded-md py-2 px-4 transition-all duration-300"
                >
                  <Code className="ml-2 h-4 w-4" />
                  برنامه‌نویسی
                </TabsTrigger>
                <TabsTrigger 
                  value="security" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-arminred-500/20 data-[state=active]:to-arminred-500/5 data-[state=active]:text-white rounded-md py-2 px-4 transition-all duration-300"
                >
                  <Shield className="ml-2 h-4 w-4" />
                  امنیت
                </TabsTrigger>
                <TabsTrigger 
                  value="ai" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-arminred-500/20 data-[state=active]:to-arminred-500/5 data-[state=active]:text-white rounded-md py-2 px-4 transition-all duration-300"
                >
                  <Bot className="ml-2 h-4 w-4" />
                  هوش مصنوعی
                </TabsTrigger>
              </TabsList>
            </div>
            
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                {Object.keys(skillCategories).map((category) => (
                  <TabsContent 
                    key={category} 
                    value={category}
                    className="relative mt-0"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br pointer-events-none opacity-20 rounded-3xl"></div>
                      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5`}>
                        {skillCategories[category].map((skill, index) => (
                          <Card 
                            key={skill.name} 
                            className="bg-white/5 border-white/10 hover:border-arminred-500/30 transition-all duration-300 overflow-hidden group"
                          >
                            <div className={`absolute inset-0 bg-gradient-to-br ${bgColors[category]} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                            <CardContent className="p-5">
                              <div className="flex justify-between items-center mb-3">
                                <h3 className="text-lg font-medium text-white">{skill.name}</h3>
                                <Badge className="bg-arminred-500/20 text-arminred-400 border-0">{skill.level}%</Badge>
                              </div>
                              <Progress 
                                value={isLoading ? 0 : skill.level} 
                                className="h-2 mb-3 bg-gray-800"
                                style={{
                                  transition: `width ${0.5 + index * 0.1}s ease-in-out`
                                }}
                              />
                              <p className="text-sm text-gray-400 mt-2">{skill.description}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </motion.div>
                  </TabsContent>
                ))}
              </AnimatePresence>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
