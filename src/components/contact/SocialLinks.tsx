
import React from "react";
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

export function SocialLinks() {
  const socialLinks = [
    { icon: <FaInstagram size={32} />, name: "اینستاگرام", url: "https://instagram.com/ARMIN_SOFT", color: "bg-gradient-to-br from-purple-600 to-pink-500" },
    { icon: <FaXTwitter size={32} />, name: "ایکس", url: "https://x.com/@ARMIN_SOFT", color: "bg-gradient-to-br from-gray-800 to-black" },
    { icon: <FaWhatsapp size={32} />, name: "واتساپ", url: "https://wa.me/989358983854", color: "bg-gradient-to-br from-green-400 to-green-600" },
    { icon: <FaTelegram size={32} />, name: "تلگرام", url: "https://t.me/ARMIN_SOFT", color: "bg-gradient-to-br from-blue-400 to-blue-600" },
    { icon: <FaFacebook size={32} />, name: "فیسبوک", url: "https://facebook.com/@ARMINSOFT0", color: "bg-gradient-to-br from-blue-500 to-blue-700" },
    { icon: <FaGithub size={32} />, name: "گیت‌هاب", url: "https://github.com/ARMIN-SOFT", color: "bg-gradient-to-br from-gray-700 to-gray-900" },
    { icon: <FaYoutube size={32} />, name: "یوتیوب", url: "https://www.youtube.com/@ARMIN_SOFT", color: "bg-gradient-to-br from-red-500 to-red-700" },
    { icon: <FaYoutube size={32} />, name: "آپارات", url: "https://www.aparat.com/ARMIN_SOFT", color: "bg-gradient-to-br from-red-400 to-red-600" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3"
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.98 }}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center p-4 rounded-lg bg-card/50 hover:bg-card border border-white/5 hover:border-white/10 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <div className={`w-12 h-12 rounded-xl ${social.color} flex items-center justify-center text-white mb-3 shadow-md transform group-hover:rotate-6 transition-transform duration-300`}>
            {social.icon}
          </div>
          <span className="text-sm font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-arminred-500 to-arminred-400 transition-all duration-300">
            {social.name}
          </span>
        </motion.a>
      ))}
    </motion.div>
  );
}
