
import React, { useEffect, useRef } from 'react';
import { Shield, Award, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function FooterLicenses() {
  const zarinpalContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a script element for Zarinpal
    const zarinpalScript = document.createElement('script');
    zarinpalScript.src = "https://www.zarinpal.com/webservice/TrustCode";
    zarinpalScript.type = "text/javascript";
    
    // Add script to head and set async to false to make sure document.write works
    zarinpalScript.async = false;
    
    // Append script to head instead of body as it uses document.write
    document.head.appendChild(zarinpalScript);
    
    // Clean up function to remove the script when the component unmounts
    return () => {
      if (document.head.contains(zarinpalScript)) {
        document.head.removeChild(zarinpalScript);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const badges = [
    {
      icon: <Shield className="text-arminred-500 h-8 w-8" />,
      title: "مجوزهای رسمی",
      description: "دارای مجوز از مراجع ذیصلاح"
    },
    {
      icon: <Award className="text-arminred-500 h-8 w-8" />,
      title: "نماد اعتماد",
      description: "تایید شده توسط زرین‌پال"
    },
    {
      icon: <CheckCircle className="text-arminred-500 h-8 w-8" />,
      title: "ضمانت خدمات",
      description: "تضمین کیفیت خدمات"
    }
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="mt-8 py-8 px-6 rounded-2xl bg-gradient-to-br from-black/90 to-gray-900/90 border border-gray-800/50 backdrop-blur-xl shadow-2xl"
    >
      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center"
      >
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {badges.map((badge, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-4 p-4 rounded-xl bg-black/30 border border-gray-800/30 backdrop-blur-sm hover:border-arminred-500/30 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-arminred-600/10">
                  {badge.icon}
                </div>
                <div>
                  <h4 className="font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    {badge.title}
                  </h4>
                  <p className="text-gray-400 text-sm mt-1">
                    {badge.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          variants={itemVariants}
          className="flex justify-center md:justify-end"
        >
          <div 
            id="zarinpal-trust-badge"
            ref={zarinpalContainer} 
            className="zarinpal-badge min-h-[60px] min-w-[150px] flex items-center justify-center bg-white/5 rounded-lg p-2"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
