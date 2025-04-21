import React from 'react';
import { motion } from "framer-motion";
import { FooterContactInfo } from './footer/FooterContactInfo';
import { FooterNavLinks } from './footer/FooterNavLinks';
import { FooterSocialLinks } from './footer/FooterSocialLinks';
import { FooterCopyright } from './footer/FooterCopyright';
import { Separator } from "./ui/separator";
import { FooterLicenses } from "./footer/FooterLicenses";

export function SiteFooter() {
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
    <footer className="relative bg-gradient-to-b from-black/95 to-black text-white pt-16 pb-6 mt-16 farsi-numbers overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10"
        animate={{
          opacity: [0.1, 0.15, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12"
        >
          <FooterContactInfo />
          <FooterNavLinks linkGroups={footerLinks} />
          <FooterSocialLinks />
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <Separator className="bg-gradient-to-r from-arminred-500/20 via-arminred-500/10 to-transparent" />
        </motion.div>

        {/* بخش مجوزها و تجارت الکترونیکی مدرن */}
        <FooterLicenses />

        <FooterCopyright />
      </div>
    </footer>
  );
}
