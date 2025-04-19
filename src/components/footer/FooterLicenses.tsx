import React, { useEffect } from 'react';
import { Shield, Award, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function FooterLicenses() {
  const loadZarinpalScript = () => {
    const existingScript = document.querySelector('script[src="https://www.zarinpal.com/webservice/TrustCode"]');
    
    if (!existingScript) {
      const zarinpalScript = document.createElement('script');
      zarinpalScript.src = "https://www.zarinpal.com/webservice/TrustCode";
      zarinpalScript.type = "text/javascript";
      zarinpalScript.async = true;

      zarinpalScript.onload = () => {
        console.log('اسکریپت زرین‌پال با موفقیت بارگذاری شد');
      };

      zarinpalScript.onerror = () => {
        console.error('خطا در بارگذاری اسکریپت زرین‌پال');
      };

      document.body.appendChild(zarinpalScript);
    }
  };

  useEffect(() => {
    // اضافه کردن اسکریپت زرین‌پال به صورت مستقیم
    const zarinpalScript = document.createElement('script');
    zarinpalScript.src = "https://www.zarinpal.com/webservice/TrustCode";
    zarinpalScript.type = "text/javascript";
    zarinpalScript.async = true;

    zarinpalScript.onload = () => {
      console.log('اسکریپت زرین‌پال با موفقیت بارگذاری شد');
    };

    zarinpalScript.onerror = () => {
      console.error('خطا در بارگذاری اسکریپت زرین‌پال');
    };

    document.body.appendChild(zarinpalScript);

    return () => {
      // حذف اسکریپت در هنگام unmount کامپوننت
      if (document.body.contains(zarinpalScript)) {
        document.body.removeChild(zarinpalScript);
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
        
        <div className="flex items-center gap-8">
          {/* eNamad Badge - Direct Implementation */}
          <motion.div 
            variants={itemVariants}
            className="group relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-arminred-600 to-arminred-800 rounded-2xl blur opacity-40 group-hover:opacity-60 transition duration-300"></div>
            <div className="relative flex flex-col items-center bg-black rounded-2xl p-4 space-y-3">
              {/* Using direct HTML exactly as provided - with additional styling for visibility */}
              <div className="relative group" dangerouslySetInnerHTML={{
                __html: `<a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=519095&Code=jNdpnL31KtNsikcan5emQZWkglmgpsxg'><img referrerpolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=519095&Code=jNdpnL31KtNsikcan5emQZWkglmgpsxg' alt='نماد اعتماد الکترونیکی' style='cursor:pointer; display:block; min-width:80px; min-height:80px;' id='jNdpnL31KtNsikcan5emQZWkglmgpsxg' class='h-20 w-20 object-contain bg-white rounded-lg p-1'></a>`
              }} />
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-xs text-gray-400 group-hover:text-white transition-colors duration-300">
                  نماد اعتماد الکترونیکی
                </span>
              </div>
            </div>
          </motion.div>

          {/* Zarinpal Badge */}
          <motion.div 
            variants={itemVariants}
            className="group relative"
            onClick={loadZarinpalScript}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-2xl blur opacity-40 group-hover:opacity-60 transition duration-300"></div>
            <div className="relative flex flex-col items-center bg-black rounded-2xl p-4 space-y-3">
              <div className="relative group">
                <div className="absolute -inset-2 bg-yellow-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div 
                  id="zarinpal-trust-badge" 
                  className="h-20 w-20 min-h-[80px] min-w-[80px] object-contain relative z-10 bg-white rounded-lg p-1 flex items-center justify-center cursor-pointer"
                >
                  <img 
                    src="https://cdn.zarinpal.com/badges/trustLogo/1.png" 
                    alt="لوگو زرین‌پال" 
                    className="h-14 w-14 object-contain"
                  />
                </div>
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

// TypeScript declaration for Zarinpal integration
declare global {
  interface Window {
    ZarinpalTrust?: {
      render: () => void;
    };
  }
}
