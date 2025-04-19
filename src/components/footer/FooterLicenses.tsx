
import React, { useEffect } from 'react';
import { Shield } from "lucide-react";
import { motion } from "framer-motion";

export function FooterLicenses() {
  useEffect(() => {
    const zarinpalScript = document.createElement('script');
    zarinpalScript.src = "https://www.zarinpal.com/webservice/TrustCode";
    zarinpalScript.type = "text/javascript";
    document.body.appendChild(zarinpalScript);

    return () => {
      if (document.body.contains(zarinpalScript)) {
        document.body.removeChild(zarinpalScript);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-8 py-8 px-6 rounded-2xl bg-gradient-to-br from-black/80 to-gray-900/80 border border-gray-800/50 backdrop-blur-md shadow-xl"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
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
      </div>
    </motion.div>
  );
}

// TypeScript declaration for Zarinpal integration
declare global {
  interface Window {
    ZarinpalTrust?: {
      render: () => void;
    };
  }
}
