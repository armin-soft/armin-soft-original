
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { TechBadge, TechBadgeGroup } from './TechBadge';
import { Code, Database, Server, Globe, Smartphone, Shield, Bot } from 'lucide-react';

export function Technologies() {
  const [activeTab, setActiveTab] = useState("backend");

  const tabData = {
    backend: {
      title: "بک‌اند",
      icon: <Server className="h-4 w-4" />,
      techs: [
        "Python", "PHP", "Node.js", "Java", "Go", 
        "Laravel", "Django", "Express", "Spring Boot", "FastAPI",
        "REST API", "GraphQL", "WebSockets", "gRPC", "OAuth"
      ]
    },
    database: {
      title: "پایگاه داده",
      icon: <Database className="h-4 w-4" />,
      techs: [
        "MySQL", "PostgreSQL", "MongoDB", "Redis", "SQLite",
        "ElasticSearch", "Cassandra", "DynamoDB", "Firebase",
        "SQL", "NoSQL", "ORM", "Query Optimization", "Data Modeling"
      ]
    },
    devops: {
      title: "DevOps",
      icon: <Server className="h-4 w-4" />,
      techs: [
        "Docker", "Kubernetes", "AWS", "GCP", "Azure",
        "CI/CD", "Jenkins", "GitHub Actions", "Ansible", "Terraform",
        "Linux", "Nginx", "Apache", "Load Balancing", "Monitoring"
      ]
    },
    frontend: {
      title: "فرانت‌اند",
      icon: <Globe className="h-4 w-4" />,
      techs: [
        "JavaScript", "TypeScript", "React", "Vue.js", "HTML5",
        "CSS3", "SCSS", "Tailwind CSS", "Bootstrap", "Material UI",
        "Redux", "Responsive Design", "SPA", "PWA", "Web Components"
      ]
    },
    mobile: {
      title: "موبایل",
      icon: <Smartphone className="h-4 w-4" />,
      techs: [
        "Flutter", "React Native", "Kotlin", "Swift", "Android",
        "iOS", "Mobile UI", "Push Notifications", "Offline Storage", "Maps"
      ]
    },
    security: {
      title: "امنیت",
      icon: <Shield className="h-4 w-4" />,
      techs: [
        "Penetration Testing", "Security Auditing", "Authentication",
        "Authorization", "Encryption", "OWASP", "XSS Prevention", 
        "SQL Injection", "CSRF", "Firewalls", "Security Headers"
      ]
    },
    ai: {
      title: "هوش مصنوعی",
      icon: <Bot className="h-4 w-4" />,
      techs: [
        "TensorFlow", "PyTorch", "Scikit-Learn", "Machine Learning",
        "Deep Learning", "NLP", "Computer Vision", "Data Science",
        "Neural Networks", "LLM", "GPT", "OpenAI"
      ]
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 section-title">تکنولوژی‌های تخصصی</h2>
      
      <Tabs defaultValue="backend" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 md:grid-cols-7 bg-black/50 backdrop-blur p-1 rounded-xl w-full">
          {Object.entries(tabData).map(([key, { title, icon }]) => (
            <TabsTrigger 
              key={key}
              value={key}
              className="flex gap-1.5 data-[state=active]:bg-white/10 data-[state=active]:text-arminred-500"
            >
              {icon}
              <span className="hidden md:inline">{title}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        
        <div className="mt-8">
          <AnimatePresence mode="wait">
            {Object.entries(tabData).map(([key, { techs }]) => (
              <TabsContent 
                key={key} 
                value={key}
                className={activeTab === key ? 'block' : 'hidden'}
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <TechBadgeGroup>
                    {techs.map((tech, index) => (
                      <TechBadge 
                        key={index}
                        name={tech}
                        icon={activeTab === 'backend' ? <Code className="h-3 w-3" /> : undefined}
                      />
                    ))}
                  </TechBadgeGroup>
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </div>
      </Tabs>
    </div>
  );
}
