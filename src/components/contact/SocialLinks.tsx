
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Twitter, MessageSquare, Facebook, Github, Youtube, AtSign, MessagesSquare } from "lucide-react";

export function SocialLinks() {
  const socialLinks = [
    { icon: <Instagram size={24} />, name: "اینستاگرام", url: "https://instagram.com/ARMIN_SOFT", color: "bg-gradient-to-br from-purple-600 to-pink-500" },
    { icon: <Twitter size={24} />, name: "توییتر", url: "https://twitter.com/@ARMIN_SOFT", color: "bg-blue-500" },
    { icon: <MessageSquare size={24} />, name: "واتساپ", url: "https://wa.me/989358983854", color: "bg-green-500" },
    { icon: <Facebook size={24} />, name: "فیسبوک", url: "https://www.facebook.com/@ARMINSOFT0", color: "bg-blue-600" },
    { icon: <Github size={24} />, name: "گیت‌هاب", url: "https://github.com/ARMIN-SOFT", color: "bg-gray-800" },
    { icon: <Youtube size={24} />, name: "یوتیوب", url: "https://www.youtube.com/@ARMIN_SOFT", color: "bg-red-600" },
    { icon: <MessagesSquare size={24} />, name: "کانال تلگرام", url: "https://t.me/Channel_ARMINSOFT", color: "bg-blue-400" },
    { icon: <MessagesSquare size={24} />, name: "تلگرام", url: "https://t.me/ARMIN_SOFT", color: "bg-blue-400" },
    { icon: <AtSign size={24} />, name: "آپارات", url: "https://www.aparat.com/ARMIN_SOFT", color: "bg-red-500" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3">
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center p-4 rounded-lg bg-accent hover:bg-accent/80 transition-all duration-300"
        >
          <div className={`w-12 h-12 rounded-full ${social.color} flex items-center justify-center text-white mb-2 transform group-hover:rotate-12 transition-transform duration-300`}>
            {social.icon}
          </div>
          <span className="text-sm font-medium">{social.name}</span>
        </motion.a>
      ))}
    </div>
  );
}
