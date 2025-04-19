
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
    
    // Important: Set to false to prevent async loading which causes document.write errors
    zarinpalScript.async = false;
    
    // Insert the script at the end of the head element instead of body
    document.head.appendChild(zarinpalScript);

    // Create a manual rendering function for Zarinpal badge
    const renderZarinpalBadge = () => {
      if (zarinpalContainer.current && typeof window.ZarinpalTrust !== 'undefined') {
        // Only try to render if the container exists and is empty
        if (window.ZarinpalTrust.ready && zarinpalContainer.current.children.length === 0) {
          try {
            window.ZarinpalTrust.render();
          } catch (error) {
            console.error('Error rendering Zarinpal badge:', error);
          }
        }
      }
    };

    // Wait for the script to load before attempting to render the badge
    zarinpalScript.onload = renderZarinpalBadge;
    
    // Also set up an interval as a fallback in case the onload doesn't trigger
    const renderInterval = setInterval(() => {
      renderZarinpalBadge();
      // Once successfully rendered, clear the interval
      if (zarinpalContainer.current?.children.length > 0) {
        clearInterval(renderInterval);
      }
    }, 500);

    return () => {
      // Cleanup function
      if (document.head.contains(zarinpalScript)) {
        document.head.removeChild(zarinpalScript);
      }
      clearInterval(renderInterval);
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
        
        {/* Zarinpal Trust Badge Container with better styling */}
        <div 
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
