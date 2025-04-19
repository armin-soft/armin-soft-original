
import React from 'react';
import { motion } from "framer-motion";
import { FooterContactInfo } from './footer/FooterContactInfo';
import { FooterNavLinks } from './footer/FooterNavLinks';
import { FooterSocialLinks } from './footer/FooterSocialLinks';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "دسترسی سریع",
      links: [
        { name: "صفحه اصلی", path: "/" },
        { name: "رزومه", path: "/resume" },
        { name: "خدمات", path: "/service" },
        { name: "نمونه کار", path: "/work-sample" },
        { name: "تماس", path: "/contact" },
        { name: "درباره", path: "/about" },
      ]
    },
    {
      title: "خدمات",
      links: [
        { name: "طراحی نرم افزار", path: "/service#software" },
        { name: "توسعه وب", path: "/service#web" },
        { name: "هوش مصنوعی", path: "/service#ai" },
        { name: "امنیت و هک اخلاقی", path: "/service#security" },
        { name: "ربات های تلگرام", path: "/service#bots" },
        { name: "مدیریت دیتابیس", path: "/service#database" },
      ]
    }
  ];

  return (
    <footer className="bg-black/95 text-white pt-16 pb-6 mt-16 farsi-numbers">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8"
        >
          <FooterContactInfo />
          <FooterNavLinks linkGroups={footerLinks} />
          <FooterSocialLinks />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="border-t border-gray-800 mt-8 pt-6 text-center"
        >
          <p className="text-gray-500 text-sm">
            تمامی حقوق این وب‌سایت متعلق به آرمین سافت می‌باشد &copy; {currentYear}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
