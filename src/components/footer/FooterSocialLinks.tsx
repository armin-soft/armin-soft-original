
import React from 'react';
import { motion } from "framer-motion";
import {
  Instagram,
  Twitter,
  MessageSquare,
  Facebook,
  Github,
  Youtube,
  MessageCircle,
  AtSign,
  ExternalLink
} from "lucide-react";

export function FooterSocialLinks() {
  const socialLinks = [
    {
      icon: <Instagram size={20} />,
      url: "https://instagram.com/ARMIN_SOFT",
      label: "اینستاگرام",
      color: "hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-pink-600 hover:to-purple-600"
    },
    {
      icon: <Twitter size={20} />,
      url: "https://twitter.com/@ARMIN_SOFT",
      label: "توییتر",
      color: "hover:bg-blue-500"
    },
    {
      icon: <MessageSquare size={20} />,
      url: "https://wa.me/989358983854",
      label: "واتساپ",
      color: "hover:bg-green-500"
    },
    {
      icon: <Facebook size={20} />,
      url: "https://www.facebook.com/@ARMINSOFT0",
      label: "فیسبوک",
      color: "hover:bg-blue-600"
    },
    {
      icon: <Github size={20} />,
      url: "https://github.com/ARMIN-SOFT",
      label: "گیت‌هاب",
      color: "hover:bg-gray-700"
    },
    {
      icon: <Youtube size={20} />,
      url: "https://www.youtube.com/@ARMIN_SOFT",
      label: "یوتیوب",
      color: "hover:bg-red-600"
    },
    {
      icon: <MessageCircle size={20} />,
      url: "https://t.me/Channel_ARMINSOFT",
      label: "کانال تلگرام",
      color: "hover:bg-blue-400"
    },
    {
      icon: <MessageCircle size={20} />,
      url: "https://t.me/ARMIN_SOFT",
      label: "تلگرام",
      color: "hover:bg-blue-400"
    },
    {
      icon: <AtSign size={20} />,
      url: "https://www.aparat.com/ARMIN_SOFT",
      label: "آپارات",
      color: "hover:bg-red-500"
    }
  ];

  return (
    <div className="md:col-span-4">
      <h3 className="text-xl font-bold mb-6 relative pr-3 before:content-[''] before:absolute before:top-0 before:right-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-arminred-500 before:to-arminred-700">
        شبکه‌های اجتماعی
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-4">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-gray-800/50 backdrop-blur-sm transition-all duration-300 ${link.color}`}
          >
            <span className="p-2 rounded-lg bg-gray-800/50 group-hover:bg-white/10 transition-colors">
              {link.icon}
            </span>
            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
              {link.label}
            </span>
            <ExternalLink size={14} className="mr-auto opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        ))}
      </div>
    </div>
  );
}
