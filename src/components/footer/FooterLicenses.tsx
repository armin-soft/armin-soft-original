
import React, { useEffect } from 'react';
import { Shield } from "lucide-react";
import { motion } from "framer-motion";

export function FooterLicenses() {
  useEffect(() => {
    // Ensure Zarinpal trust badge script is loaded
    const script = document.createElement('script');
    script.src = 'https://www.zarinpal.com/webservice/TrustCode';
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-8 border-t border-gray-800 pt-8"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center space-x-4 space-x-reverse">
          <Shield className="text-arminred-500" size={24} />
          <h3 className="text-lg font-bold">مجوزها و گواهینامه‌ها</h3>
        </div>
        
        <div className="flex items-center space-x-6 space-x-reverse">
          <div className="flex flex-col items-center space-y-2 group">
            <img 
              onClick={() => window.open('https://trustseal.enamad.ir/?id=519095&Code=jNdpnL31KtNsikcan5emQZWkglmgpsxg', '_blank')}
              src="https://trustseal.enamad.ir/logo.aspx?id=519095&Code=jNdpnL31KtNsikcan5emQZWkglmgpsxg" 
              alt="نماد تجارت الکترونیکی" 
              style={{ cursor: 'pointer' }} 
              id="jNdpnL31KtNsikcan5emQZWkglmgpsxg"
              referrerPolicy="origin"
              className="h-20 w-20 object-contain"
            />
            <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
              نماد تجارت الکترونیکی
            </span>
          </div>

          <div className="flex flex-col items-center space-y-2 group">
            <img 
              onClick={() => window.open('https://logo.samandehi.ir/Verify.aspx?id=146772&p=rfthaodsgvkajyoejyoeuiwk', '_blank')}
              src="https://logo.samandehi.ir/logo.aspx?id=146772&p=nbpdshwlwlbqyndtyndtodrf" 
              alt="ساماندهی" 
              style={{ cursor: 'pointer' }} 
              id="jxlzwlaofukzjzpejzpenbqe"
              referrerPolicy="origin"
              className="h-20 w-20 object-contain"
            />
            <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
              ساماندهی
            </span>
          </div>

          <div className="flex flex-col items-center space-y-2 group">
            <div id="zarinpal-trust-badge" className="h-20 w-20 object-contain"></div>
            <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
              زرین پال
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
