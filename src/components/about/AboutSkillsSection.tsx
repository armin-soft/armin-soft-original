
import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Shield, Bot, Server, Database, Cpu } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  { name: "برنامه‌نویسی", level: 95, icon: <Code className="h-5 w-5 text-arminred-600" />, description: "تسلط به زبان‌های PHP، JavaScript، Python و فریمورک‌های مختلف" },
  { name: "هک و امنیت", level: 90, icon: <Shield className="h-5 w-5 text-arminred-600" />, description: "تست نفوذ، امنیت وب و شبکه، مهندسی معکوس" },
  { name: "هوش مصنوعی", level: 85, icon: <Bot className="h-5 w-5 text-arminred-600" />, description: "یادگیری ماشین، پردازش زبان طبیعی و سیستم‌های خبره" },
  { name: "طراحی API", level: 88, icon: <Server className="h-5 w-5 text-arminred-600" />, description: "طراحی و پیاده‌سازی RESTful و GraphQL APIs" },
  { name: "مدیریت دیتابیس", level: 92, icon: <Database className="h-5 w-5 text-arminred-600" />, description: "تسلط به SQL و NoSQL و بهینه‌سازی عملکرد" },
  { name: "اتوماسیون", level: 87, icon: <Cpu className="h-5 w-5 text-arminred-600" />, description: "سیستم‌های اتوماسیون هوشمند و اسکریپت‌نویسی" },
];

export function AboutSkillsSection() {
  const [currentTab, setCurrentTab] = useState("skills");
  return (
    <section className="py-16 bg-gradient-to-b from-black/90 via-black/95 to-black/98 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            مهارت‌ها و تخصص‌ها
          </h2>
          <p className="mt-3 text-lg text-gray-400 max-w-2xl mx-auto">
            مجموعه تخصص‌هایی که طی سال‌ها تجربه به آن‌ها تسلط یافته‌ام
          </p>
        </motion.div>
        <Tabs value={currentTab} onValueChange={setCurrentTab} className="mt-8">
          <TabsList className="mb-6 flex flex-wrap justify-center gap-4 bg-white/5">
            <TabsTrigger value="skills" className="text-base">مهارت‌ها</TabsTrigger>
          </TabsList>
          <TabsContent value="skills">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, i) => (
                <Card key={skill.name} className="bg-white/5 border-white/10 shadow-lg transition hover:border-arminred-500/30 hover:shadow-arminred-500/5">
                  <CardContent className="flex flex-col gap-4 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      {skill.icon}
                      <span className="font-bold text-base">{skill.name}</span>
                    </div>
                    <Progress value={skill.level} className="h-2 rounded bg-white/20" />
                    <p className="text-sm text-gray-400">{skill.description}</p>
                    <Badge className="self-end mt-2 bg-arminred-600/20 text-arminred-500">{skill.level}%</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
