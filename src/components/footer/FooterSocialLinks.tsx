import React from 'react';
import { motion } from "framer-motion";
import { Instagram, Github, Youtube, MessageCircle, BrandX } from "lucide-react";

export function FooterSocialLinks() {
  const socialLinks = [
    { icon: <Instagram size={18} />, url: "https://instagram.com/ARMIN_SOFT", label: "اینستاگرام", color: "hover:bg-gradient-to-tr hover:from-yellow-500 hover:to-pink-600" },
    { icon: <BrandX size={18} />, url: "https://x.com/@ARMIN_SOFT", label: "ایکس", color: "hover:bg-black" },
    { icon: <MessageCircle size={18} />, url: "https://wa.me/989358983854", label: "واتساپ", color: "hover:bg-green-500" },
    { icon: <MessageCircle size={18} />, url: "https://t.me/ARMIN_SOFT", label: "تلگرام", color: "hover:bg-blue-400" },
    { icon: <MessageCircle size={18} />, url: "https://facebook.com/@ARMINSOFT0", label: "فیسبوک", color: "hover:bg-blue-600" },
    { icon: <Github size={18} />, url: "https://github.com/ARMIN-SOFT", label: "گیت‌هاب", color: "hover:bg-gray-700" },
    { icon: <Youtube size={18} />, url: "https://www.youtube.com/@ARMIN_SOFT", label: "یوتیوب", color: "hover:bg-red-600" },
    { icon: <MessageCircle size={18} />, url: "https://www.aparat.com/ARMIN_SOFT", label: "آپارات", color: "hover:bg-red-500" },
  ];

  return (
    <div className="md:col-span-4">
      <h3 className="text-lg font-bold mb-4 relative pr-3 before:content-[''] before:absolute before:top-0 before:right-0 before:h-full before:w-1 before:bg-arminred-600">
        شبکه‌های اجتماعی
      </h3>
      <div className="grid grid-cols-3 gap-3">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center p-3 rounded-lg bg-black/50 border border-gray-800 transition-colors ${link.color}`}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
}
