
import React, { useEffect, useRef } from 'react';
import { Shield } from "lucide-react";
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

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="mt-8 py-8 px-6 rounded-2xl bg-gradient-to-br from-black/80 to-gray-900/80 border border-gray-800/50 backdrop-blur-md shadow-xl"
    >
      <motion.div 
        variants={itemVariants}
        className="flex flex-col md:flex-row justify-between items-center gap-8"
      >
        <div className="flex items-center gap-4">
          <div className="p-3 bg-arminred-600/20 rounded-xl">
            <Shield className="text-arminred-500 h-8 w-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              مجوزها و گواهینامه‌ها
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              اعتبار و امنیت خدمات ما
            </p>
          </div>
        </div>
        
        {/* Zarinpal Trust Badge Container */}
        <div 
          id="zarinpal-trust-badge"
          ref={zarinpalContainer} 
          className="zarinpal-badge min-h-[60px] min-w-[150px] flex items-center justify-center"
        ></div>
      </motion.div>
    </motion.div>
  );
}

// Add TypeScript interface for ZarinpalTrust
declare global {
  interface Window {
    ZarinpalTrust?: {
      ready: boolean;
      render: () => void;
    };
  }
}
