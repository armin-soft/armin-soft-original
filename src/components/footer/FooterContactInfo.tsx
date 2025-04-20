
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
          <motion.div 
            whileHover={{ 
              scale: 1.08,
              transition: { duration: 0.4, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.95 }}
            className={`relative overflow-hidden
              w-11 h-11 md:w-12 md:h-12
              bg-gradient-to-br from-arminred-700 via-arminred-600 to-arminred-500
              rounded-xl md:rounded-xl
              flex items-center justify-center
              shadow-md shadow-arminred-500/20 group-hover:shadow-arminred-500/50
              transition-all duration-300 z-10`}
          >
            {/* طرح ضربدری پشت متن */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-white/20" />
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black/20" />
              <div className="absolute top-0 left-0 h-full w-0.5 bg-white/20" />
              <div className="absolute top-0 right-0 h-full w-0.5 bg-black/20" />
            </div>
            
            {/* پنج ضلعی پشت حرف */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              <motion.path 
                d="M50 15 L85 35 L85 65 L50 85 L15 65 L15 35 Z" 
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "loop", repeatDelay: 1 }}
              />
            </svg>
            
            {/* حرف A برای آرمین */}
            <motion.div 
              className="text-white text-2xl md:text-3xl font-extrabold z-20 transform-gpu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              A
            </motion.div>
            
            {/* افکت درخشش */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              style={{ translateX: '-100%' }}
              animate={{ translateX: '100%' }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "loop",
                duration: 1.5,
                repeatDelay: 2
              }}
            />
          </motion.div>

          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="flex items-center mb-0.5">
              <motion.span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 font-bold"
                whileHover={{ y: -1 }}
              >
                آرمین
              </motion.span>
              <motion.span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-arminred-400 to-arminred-500 font-extrabold mr-1"
                whileHover={{ y: -1 }}
              >
                سافت
              </motion.span>
            </div>
            
            {/* Tagline */}
            <motion.div 
              className="overflow-hidden h-4"
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <motion.span 
                className="text-[10px] md:text-xs text-gray-500 block tracking-wider"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 0.8 }}
                transition={{ delay: 0.6, duration: 0.3 }}
              >
                توسعه‌دهنده حرفه‌ای
              </motion.span>
            </motion.div>
          </motion.div>
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
