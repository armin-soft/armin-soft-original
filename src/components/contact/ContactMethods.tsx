
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function ContactMethods() {
  const contactMethods = [
    {
      icon: <Phone className="h-10 w-10 text-white" />,
      title: "تماس تلفنی",
      value: "۰۹۳۵۸۹۸۳۸۵۴",
      link: "tel:+989358983854",
      gradient: "bg-gradient-to-br from-arminred-500 to-arminred-700",
      hoverEffect: "group-hover:shadow-arminred-500/30"
    },
    {
      icon: <Mail className="h-10 w-10 text-white" />,
      title: "ایمیل",
      value: "info@armin-soft.ir",
      link: "mailto:info@armin-soft.ir",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-700",
      hoverEffect: "group-hover:shadow-blue-500/30"
    },
    {
      icon: <MapPin className="h-10 w-10 text-white" />,
      title: "آدرس",
      value: "ایران، تهران، پاکدشت",
      link: "#location",
      gradient: "bg-gradient-to-br from-emerald-500 to-emerald-700",
      hoverEffect: "group-hover:shadow-emerald-500/30"
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
      {contactMethods.map((method, index) => (
        <motion.div
          key={index}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <a href={method.link} className="block h-full group">
            <Card className="h-full bg-card/60 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group relative">
              <div className={`absolute inset-0 opacity-0 ${method.gradient} transition-opacity duration-300 group-hover:opacity-10`}></div>
              <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-white/5 transition-transform duration-500 group-hover:scale-150"></div>
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center space-y-4 relative z-10">
                  <div className={`w-24 h-24 rounded-2xl ${method.gradient} flex items-center justify-center mb-4 shadow-lg ${method.hoverEffect} transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {method.icon}
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-arminred-400 to-arminred-600 transition-all duration-300">{method.title}</h3>
                  <div className="w-16 h-1 bg-arminred-500/30 rounded-full group-hover:w-24 transition-all duration-300"></div>
                  <p className="text-lg text-muted-foreground group-hover:text-foreground transition-colors">
                    {method.value}
                  </p>
                </div>
              </CardContent>
            </Card>
          </a>
        </motion.div>
      ))}
    </div>
  );
}
