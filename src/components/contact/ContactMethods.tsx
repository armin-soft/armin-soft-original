
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function ContactMethods() {
  const contactMethods = [
    {
      icon: <Phone className="h-10 w-10 text-arminred-500" />,
      title: "تماس تلفنی",
      value: "۰۹۳۵۸۹۸۳۸۵۴",
      link: "tel:+989358983854",
    },
    {
      icon: <Mail className="h-10 w-10 text-arminred-500" />,
      title: "ایمیل",
      value: "info@armin-soft.ir",
      link: "mailto:info@armin-soft.ir",
    },
    {
      icon: <MapPin className="h-10 w-10 text-arminred-500" />,
      title: "آدرس",
      value: "ایران، تهران، پاکدشت",
      link: "#",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
      {contactMethods.map((method, index) => (
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="h-full bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-arminred-500/10 flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold">{method.title}</h3>
                <a 
                  href={method.link} 
                  className="text-lg text-muted-foreground hover:text-arminred-600 transition-colors"
                  target={method.title === "آدرس" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  {method.value}
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
