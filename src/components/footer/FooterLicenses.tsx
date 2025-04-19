
import React, { useEffect, useRef } from 'react';
import { Shield, Award, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function FooterLicenses() {
  const zarinpalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Remove any existing scripts to avoid duplicates
    const existingScripts = document.querySelectorAll('script[src="https://www.zarinpal.com/webservice/TrustCode"]');
    existingScripts.forEach(script => script.remove());

    // Add the Zarinpal script
    const script = document.createElement('script');
    script.src = 'https://www.zarinpal.com/webservice/TrustCode';
    script.type = 'text/javascript';
    document.body.appendChild(script);

    // Make sure the script has time to load and execute
    const timer = setTimeout(() => {
      if (zarinpalRef.current && window.ZarinpalTrust) {
        console.log("Zarinpal script loaded, attempting to render badge");
        try {
          window.ZarinpalTrust.render();
        } catch (e) {
          console.error("Failed to render Zarinpal badge:", e);
        }
      } else {
        console.log("Zarinpal container or script not ready:", { 
          containerExists: !!zarinpalRef.current,
          scriptExists: !!window.ZarinpalTrust
        });
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
      document.querySelectorAll('script[src="https://www.zarinpal.com/webservice/TrustCode"]')
        .forEach(script => document.body.removeChild(script));
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
        
        <div className="flex items-center gap-8">
          <motion.div 
            variants={itemVariants}
            className="group relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-arminred-600 to-arminred-800 rounded-2xl blur opacity-40 group-hover:opacity-60 transition duration-300"></div>
            <div className="relative flex flex-col items-center bg-black rounded-2xl p-4 space-y-3">
              <a 
                referrerPolicy="origin" 
                target="_blank" 
                href="https://trustseal.enamad.ir/?id=519095&Code=jNdpnL31KtNsikcan5emQZWkglmgpsxg"
                className="relative group"
              >
                <div className="absolute -inset-2 bg-arminred-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  referrerPolicy="origin" 
                  src="https://trustseal.enamad.ir/logo.aspx?id=519095&Code=jNdpnL31KtNsikcan5emQZWkglmgpsxg" 
                  alt="نماد اعتماد الکترونیکی" 
                  style={{ cursor: 'pointer' }} 
                  id="jNdpnL31KtNsikcan5emQZWkglmgpsxg"
                  className="h-20 w-20 object-contain relative z-10"
                />
              </a>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-xs text-gray-400 group-hover:text-white transition-colors duration-300">
                  نماد اعتماد الکترونیکی
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="group relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-2xl blur opacity-40 group-hover:opacity-60 transition duration-300"></div>
            <div className="relative flex flex-col items-center bg-black rounded-2xl p-4 space-y-3">
              <div className="relative group">
                <div className="absolute -inset-2 bg-yellow-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div 
                  ref={zarinpalRef} 
                  id="zarinpal-trust-badge" 
                  data-ipt-type="square" 
                  data-ipt-color="white" 
                  className="h-20 w-20 object-contain relative z-10"
                ></div>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-yellow-500" />
                <span className="text-xs text-gray-400 group-hover:text-white transition-colors duration-300">
                  درگاه پرداخت زرین‌پال
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Add TypeScript declaration for Zarinpal
declare global {
  interface Window {
    ZarinpalTrust?: {
      render: () => void;
    };
  }
}
