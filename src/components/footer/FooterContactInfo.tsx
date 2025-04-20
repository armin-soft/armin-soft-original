
import React from 'react';
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function FooterContactInfo() {
  const contactItems = [
    {
      icon: <Phone size={16} className="text-arminred-500" />,
      text: "۰۹۳۵۸۹۸۳۸۵۴",
      href: "tel:+989358983854",
    },
    {
      icon: <Mail size={16} className="text-arminred-500" />,
      text: "info@armin-soft.ir",
      href: "mailto:info@armin-soft.ir",
    },
    {
      icon: <MapPin size={16} className="text-arminred-500" />,
      text: "ایران، تهران، پاکدشت",
      href: "https://maps.google.com/?q=پاکدشت،+تهران،+ایران",
    },
  ];

  return (
    <motion.div 
      className="md:col-span-4 space-y-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Link to="/" className="inline-block group">
        <motion.div 
          className="flex items-center space-x-2 space-x-reverse"
          whileHover={{ scale: 1.02 }}
        >
          <motion.span 
            className="bg-gradient-to-r from-arminred-600 to-arminred-500 text-white px-3 py-1.5 rounded-lg text-2xl font-bold"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            آرمین
          </motion.span>
          <motion.span 
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            سافت
          </motion.span>
        </motion.div>
      </Link>
      
      <motion.p 
        className="text-gray-400 text-sm leading-relaxed relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        توسعه دهنده نرم افزار، متخصص امنیت و هک اخلاقی با تمرکز بر ارائه راهکارهای هوشمند و امن.
        <br />
        هر آنچه در ذهن شماست، با آرمین سافت به واقعیت تبدیل می‌شود.
      </motion.p>
      
      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        {contactItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target={item.icon.type === MapPin ? "_blank" : undefined}
            rel={item.icon.type === MapPin ? "noopener noreferrer" : undefined}
            className="flex items-center space-x-3 space-x-reverse group relative"
            whileHover={{ x: 4 }}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + (index * 0.1) }}
          >
            <motion.div 
              className="p-2 rounded-full bg-gradient-to-br from-arminred-500/20 to-arminred-500/5 group-hover:from-arminred-500/30 group-hover:to-arminred-500/10 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              {item.icon}
            </motion.div>
            <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
              {item.text}
            </span>
            <motion.div
              className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              layoutId={`contact-hover-${index}`}
            />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}
