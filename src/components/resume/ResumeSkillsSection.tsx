
import React from "react";
import { motion } from "framer-motion";
import { SkillCard } from "./SkillCard";
import { Technologies } from "./Technologies";
import { Code, Shield, Brain, Palette, LayoutDashboard, Server, FileCode, Monitor, Smartphone } from "lucide-react";

const skills = [
  {
    name: "هک و امنیت",
    level: 99,
    icon: <Shield className="w-5 h-5 text-arminred-400" />,
    index: 0
  },
  {
    name: "طراحی هوش مصنوعی",
    level: 90,
    icon: <Brain className="w-5 h-5 text-arminred-400" />,
    index: 1
  },
  {
    name: "طراحی دیزاین",
    level: 18,
    icon: <Palette className="w-5 h-5 text-arminred-400" />,
    index: 2
  },
  {
    name: "طراحی سایت",
    level: 100,
    icon: <LayoutDashboard className="w-5 h-5 text-arminred-400" />,
    index: 3
  },
  {
    name: "طراحی وب سرویس",
    level: 95,
    icon: <Server className="w-5 h-5 text-arminred-400" />,
    index: 4
  },
  {
    name: "طراحی اسکریپت",
    level: 100,
    icon: <FileCode className="w-5 h-5 text-arminred-400" />,
    index: 5
  },
  {
    name: "طراحی نرم افزار",
    level: 70,
    icon: <Monitor className="w-5 h-5 text-arminred-400" />,
    index: 6
  },
  {
    name: "طراحی اپلیکیشن",
    level: 59,
    icon: <Smartphone className="w-5 h-5 text-arminred-400" />,
    index: 7
  },
  {
    name: "اچ تی ام ال",
    level: 100,
    icon: <Code className="w-5 h-5 text-arminred-400" />,
    index: 8
  },
  {
    name: "سی اس اس",
    level: 35,
    icon: <Code className="w-5 h-5 text-arminred-400" />,
    index: 9
  },
  {
    name: "جاوا اسکریپت",
    level: 64,
    icon: <Code className="w-5 h-5 text-arminred-400" />,
    index: 10
  },
  {
    name: "جی‌ کوئری",
    level: 60,
    icon: <Code className="w-5 h-5 text-arminred-400" />,
    index: 11
  },
  {
    name: "پی اچ پی",
    level: 90,
    icon: <Code className="w-5 h-5 text-arminred-400" />,
    index: 12
  },
  {
    name: "سی پلاس پلاس",
    level: 51,
    icon: <Code className="w-5 h-5 text-arminred-400" />,
    index: 13
  },
  {
    name: "سی پلاس",
    level: 52,
    icon: <Code className="w-5 h-5 text-arminred-400" />,
    index: 14
  },
  {
    name: "سی شارپ",
    level: 57,
    icon: <Code className="w-5 h-5 text-arminred-400" />,
    index: 15
  },
  {
    name: "سی",
    level: 63,
    icon: <Code className="w-5 h-5 text-arminred-400" />,
    index: 16
  },
  {
    name: "سوئیفت",
    level: 63,
    icon: <Code className="w-5 h-5 text-arminred-400" />,
    index: 17
  },
  {
    name: "جاوا",
    level: 68,
    icon: <Code className="w-5 h-5 text-arminred-400" />,
    index: 18
  },
  {
    name: "لوا",
    level: 91,
    icon: <Code className="w-5 h-5 text-arminred-400" />,
    index: 19
  },
  {
    name: "پایتون",
    level: 98,
    icon: <Code className="w-5 h-5 text-arminred-400" />,
    index: 20
  },
  {
    name: "پرل",
    level: 98,
    icon: <Code className="w-5 h-5 text-arminred-400" />,
    index: 21
  },
  {
    name: "شل",
    level: 98,
    icon: <Code className="w-5 h-5 text-arminred-400" />,
    index: 22
  }
];

export function ResumeSkillsSection() {
  return (
    <section className="relative z-10 py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
      </div>
      <div className="container px-4 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            مهارت‌ها و تکنولوژی‌ها
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-arminred-500 to-transparent rounded-full mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            مجموعه گسترده‌ای از مهارت‌های تخصصی در زمینه برنامه‌نویسی و امنیت سایبری
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          <div className="space-y-10">
            <h3 className="text-xl font-semibold mb-6 relative inline-block">
              مهارت‌های تخصصی
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-arminred-500 to-transparent"></span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill) => (
                <SkillCard
                  key={skill.index}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  index={skill.index}
                />
              ))}
            </div>
          </div>
          <Technologies />
        </motion.div>
      </div>
    </section>
  );
}
