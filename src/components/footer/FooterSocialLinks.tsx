
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
    { icon: <FaInstagram size={24} />, url: "https://instagram.com/ARMIN_SOFT", label: "اینستاگرام", color: "hover:bg-pink-600" },
    { icon: <FaXTwitter size={24} />, url: "https://x.com/@ARMIN_SOFT", label: "ایکس", color: "hover:bg-black" },
    { icon: <FaWhatsapp size={24} />, url: "https://wa.me/989358983854", label: "واتساپ", color: "hover:bg-green-500" },
    { icon: <FaTelegram size={24} />, url: "https://t.me/ARMIN_SOFT", label: "تلگرام", color: "hover:bg-blue-400" },
    { icon: <FaFacebook size={24} />, url: "https://facebook.com/@ARMINSOFT0", label: "فیسبوک", color: "hover:bg-blue-600" },
    { icon: <FaGithub size={24} />, url: "https://github.com/ARMIN-SOFT", label: "گیت‌هاب", color: "hover:bg-gray-700" },
    { icon: <FaYoutube size={24} />, url: "https://www.youtube.com/@ARMIN_SOFT", label: "یوتیوب", color: "hover:bg-red-600" },
    { icon: <FaYoutube size={24} />, url: "https://www.aparat.com/ARMIN_SOFT", label: "آپارات", color: "hover:bg-red-500" },
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
