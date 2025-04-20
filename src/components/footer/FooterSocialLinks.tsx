
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
    { icon: <FaInstagram size={20} />, url: "https://instagram.com/ARMIN_SOFT", label: "اینستاگرام", color: "hover:from-purple-600 hover:to-pink-500" },
    { icon: <FaXTwitter size={20} />, url: "https://x.com/@ARMIN_SOFT", label: "ایکس", color: "hover:from-gray-800 hover:to-black" },
    { icon: <FaWhatsapp size={20} />, url: "https://wa.me/989358983854", label: "واتساپ", color: "hover:from-green-400 hover:to-green-600" },
    { icon: <FaTelegram size={20} />, url: "https://t.me/ARMIN_SOFT", label: "تلگرام", color: "hover:from-blue-400 hover:to-blue-600" },
    { icon: <FaFacebook size={20} />, url: "https://facebook.com/@ARMINSOFT0", label: "فیسبوک", color: "hover:from-blue-500 hover:to-blue-700" },
    { icon: <FaGithub size={20} />, url: "https://github.com/ARMIN-SOFT", label: "گیت‌هاب", color: "hover:from-gray-700 hover:to-gray-900" },
    { icon: <FaYoutube size={20} />, url: "https://www.youtube.com/@ARMIN_SOFT", label: "یوتیوب", color: "hover:from-red-500 hover:to-red-700" },
    { icon: <FaYoutube size={20} />, url: "https://www.aparat.com/ARMIN_SOFT", label: "آپارات", color: "hover:from-red-400 hover:to-red-600" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      className="md:col-span-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h3 
        className="text-lg font-bold mb-6 relative pr-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
        whileHover={{ scale: 1.02 }}
      >
        <span className="relative">
          شبکه‌های اجتماعی
          <motion.div 
            className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-arminred-500 to-transparent"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
          />
        </span>
      </motion.h3>

      <div className="grid grid-cols-4 gap-3">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative flex flex-col items-center justify-center p-3 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/30 backdrop-blur-sm border border-white/5 transition-all duration-300 group overflow-hidden ${link.color}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br"
              initial={false}
              animate={{ opacity: 0 }}
              whileHover={{ opacity: 0.1 }}
            />
            
            <motion.div 
              className="relative z-10 text-gray-400 group-hover:text-white transition-colors duration-300"
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              {link.icon}
            </motion.div>
            
            <motion.span 
              className="absolute bottom-0 left-0 right-0 text-[10px] text-center py-1 bg-black/60 text-gray-400 group-hover:text-white transition-all duration-300 translate-y-full group-hover:translate-y-0"
            >
              {link.label}
            </motion.span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
