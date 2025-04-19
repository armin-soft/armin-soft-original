
import React from 'react';
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaXTwitter,
  FaWhatsapp,
  FaTelegram,
  FaFacebook,
  FaGithub,
  FaYoutube
} from "react-icons/fa6";

export function FooterSocialLinks() {
  const socialLinks = [
    { icon: <FaInstagram size={24} />, url: "https://instagram.com/ARMIN_SOFT", label: "اینستاگرام", color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500" },
    { icon: <FaXTwitter size={24} />, url: "https://x.com/@ARMIN_SOFT", label: "ایکس", color: "hover:bg-gradient-to-br hover:from-gray-800 hover:to-black" },
    { icon: <FaWhatsapp size={24} />, url: "https://wa.me/989358983854", label: "واتساپ", color: "hover:bg-gradient-to-br hover:from-green-400 hover:to-green-600" },
    { icon: <FaTelegram size={24} />, url: "https://t.me/ARMIN_SOFT", label: "تلگرام", color: "hover:bg-gradient-to-br hover:from-blue-400 hover:to-blue-600" },
    { icon: <FaFacebook size={24} />, url: "https://facebook.com/@ARMINSOFT0", label: "فیسبوک", color: "hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-700" },
    { icon: <FaGithub size={24} />, url: "https://github.com/ARMIN-SOFT", label: "گیت‌هاب", color: "hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-900" },
    { icon: <FaYoutube size={24} />, url: "https://www.youtube.com/@ARMIN_SOFT", label: "یوتیوب", color: "hover:bg-gradient-to-br hover:from-red-500 hover:to-red-700" },
    { icon: <FaYoutube size={24} />, url: "https://www.aparat.com/ARMIN_SOFT", label: "آپارات", color: "hover:bg-gradient-to-br hover:from-red-400 hover:to-red-600" },
  ];

  return (
    <div className="md:col-span-4">
      <h3 className="text-lg font-bold mb-4 relative pr-3 before:content-[''] before:absolute before:top-0 before:right-0 before:h-full before:w-1 before:bg-arminred-600">
        شبکه‌های اجتماعی
      </h3>
      <div className="grid grid-cols-4 gap-3">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center p-3 rounded-lg bg-black/60 backdrop-blur-sm border border-gray-800/50 transition-all duration-300 ${link.color} hover:border-white/20 hover:shadow-lg hover:shadow-white/5 group`}
            aria-label={link.label}
          >
            <div className="group-hover:scale-110 transition-transform duration-300">
              {link.icon}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
